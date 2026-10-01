/**
 * PREVIEW ONLY — loader for the new case format (Case Study Spec v0.7).
 *
 * Reads a fixture case from src/preview/fixtures/<code>/ with plain file reads
 * (Vite's raw glob), not through a content collection, so the live library's
 * collections and scripts/validate-content.mjs are untouched.
 *
 * The one thing this file exists to show: a row's label is COMPUTED, never
 * typed. rows.yaml carries links and kinds only; support, conflict, the
 * reliability grade shown, and the origin and examiner counts all come out of
 * computeLabel() below, from the claims and the docket. The rules follow spec
 * 6.2 (the cap table, decisions 21 to 25 and 35) and 5.7 (origins and
 * examiners). Where the spec is silent, the choice made here is marked
 * "OPEN" and listed in the preview's report as a question, not a decision.
 *
 * Every inconsistency the spec would fail the build on — an unknown code, a
 * missing kind field, a heading status that its rows contradict — throws, so a
 * broken fixture fails `npm run build` rather than rendering quietly.
 */
import { createHash } from "node:crypto";
import { load as parseYaml } from "js-yaml";

const files = import.meta.glob("../cases/**/*.{yaml,md}", { query: "?raw", import: "default", eager: true });

export const HEADING_NAMES = [
  "Summary of the record",
  "Parties and roles",
  "The system and its configuration",
  "Conditions before the event",
  "Sequence of events",
  "How the facts were established",
  "Detection and response",
  "Outcomes and measured effects",
  "Statements by the parties",
  "Discrepancies in the record",
  "What the record does not establish",
  "Evidence still awaited"
];

export const STATUS_TEXT = {
  populated: "Populated",
  "not-applicable": "Not applicable",
  "not-yet-investigated": "Not yet investigated",
  "nothing-found": "Investigated, nothing found"
};

const KIND_FIELDS = {
  event: ["date", "precision", "timezone"],
  state: ["start", "end"],
  quantity: ["unit", "counts"],
  statement: ["speaker", "quote"],
  computed: ["inputs", "working"],
  absence: ["documents_read", "as_of"],
  result: [] // spec v0.8 decision 44 (F17): a seventh kind; no kind-specific fields
};

const SUPPORT_RANK = { None: 0, Attributed: 1, Supported: 2, Verified: 3 };
const CONFLICT_RANK = { "None found": 0, Resolved: 1, Challenged: 2, Disputed: 3 };
const GRADE_RANK = { R1: 1, R2: 2, R3: 3, R4: 4 };

const fail = (code, message) => {
  throw new Error(`[record ${code}] ${message}`);
};

/** Collapse whitespace so a folded YAML string and a plain one fingerprint alike. */
const norm = (value) => String(value ?? "").replace(/\s+/g, " ").trim();

/**
 * The check-mark fingerprint (decision 26): a short hash of the row text and
 * the quote together. OPEN (spec item G9): exactly what it covers. Here it is
 * row code, row statement, claim code and quote, whitespace-collapsed, and the
 * first 16 hex characters of SHA-256.
 */
export function checkFingerprint(rowCode, statement, claimCode, quote) {
  return createHash("sha256")
    .update([rowCode, norm(statement), claimCode, norm(quote)].join("\n"))
    .digest("hex")
    .slice(0, 16);
}

const read = (code, name) => {
  const key = `../cases/${code}/${name}`;
  if (!(key in files)) fail(code, `missing case file ${name}`);
  return files[key];
};

const yaml = (code, name) => parseYaml(read(code, name));

const toDate = (value) => (value instanceof Date ? value.toISOString().slice(0, 10) : value == null ? null : String(value));

/** Codes of every fixture case present on disk. */
export function listFixtureCodes() {
  return [...new Set(Object.keys(files).map((key) => key.split("/")[2]))].sort();
}

/** "EX001.F008" -> "F008": the short form used in the narrative and anchors. */
export const shortCode = (code) => code.split(".").slice(1).join(".");

export function loadCase(code) {
  const header = yaml(code, "case.yaml");
  if (header.code !== code) fail(code, `case.yaml says ${header.code}`);
  if (header.status !== "published") fail(code, "only a published case is built");
  if (!header.public_id) fail(code, "case.yaml needs public_id, the library case it replaces");

  const publishers = new Map(yaml(code, "publishers.yaml").map((p) => [p.id, { ...p, graded: toDate(p.graded) }]));

  const documents = Object.keys(files)
    .filter((key) => key.startsWith(`../cases/${code}/docket/`))
    .sort()
    .map((key) => parseYaml(files[key]));
  const docsByCode = new Map(documents.map((d) => [d.code, d]));
  for (const doc of documents) {
    const publisher = publishers.get(doc.publisher);
    if (!publisher) fail(code, `${doc.code}: publisher ${doc.publisher} is not in the register`);
    const inherited = publisher.grades?.[doc.type];
    // A document inherits its grade; it may only differ with a written reason (spec 5.6).
    if (doc.grade !== inherited && !doc.grade_reason) {
      fail(code, `${doc.code}: grade ${doc.grade} differs from the register's ${inherited} with no grade_reason`);
    }
    doc.publisherName = publisher.name;
    doc.published = toDate(doc.published);
    for (const capture of doc.captures ?? []) capture.captured_on = toDate(capture.captured_on);
  }

  // Claims inherit their document's defaults (spec 5.7 rule 1).
  const claims = yaml(code, "claims.yaml").map((claim) => {
    const docCode = claim.code.split(".").slice(0, 2).join(".");
    const doc = docsByCode.get(docCode);
    if (!doc) fail(code, `${claim.code}: document ${docCode} is not on the docket`);
    if (!doc.captures?.some((c) => c.capture === claim.capture)) fail(code, `${claim.code}: capture ${claim.capture} not found on ${docCode}`);
    if (!claim.locator) fail(code, `${claim.code}: a claim needs a locator`);
    return {
      ...claim,
      quote: norm(claim.quote),
      document: docCode,
      how_known: claim.how_known ?? doc.how_known_default,
      how_known_basis: claim.how_known_basis ?? doc.how_known_default_basis,
      interest: claim.interest ?? doc.interest_default,
      interest_reason: claim.interest_reason ?? (claim.interest ? null : doc.interest_default_reason ?? null)
    };
  });
  const claimsByCode = new Map(claims.map((c) => [c.code, c]));

  const resolveLinks = (owner, links = []) =>
    links.map((link) => {
      const claim = claimsByCode.get(link.claim);
      if (!claim) fail(code, `${owner.code}: links to unknown claim ${link.claim}`);
      if (!["supports", "contradicts", "relays"].includes(link.relation)) fail(code, `${owner.code}: bad relation ${link.relation}`);
      const doc = docsByCode.get(claim.document);
      return { ...link, claimData: claim, doc, mark: markStatus(owner, claim, link.check) };
    });

  const rows = yaml(code, "rows.yaml").map((row) => {
    if (!KIND_FIELDS[row.kind]) fail(code, `${row.code}: unknown kind ${row.kind}`);
    for (const field of KIND_FIELDS[row.kind]) {
      if (!(field in row)) fail(code, `${row.code}: a ${row.kind} row needs "${field}" (spec 6.5)`);
    }
    if (!(row.heading >= 1 && row.heading <= 12)) fail(code, `${row.code}: heading must be 1 to 12`);
    for (const key of ["date", "start", "end", "as_of"]) if (key in row) row[key] = toDate(row[key]);
    if (row.check) row.check = { ...row.check, date: toDate(row.check.date) };
    return { ...row, statement: norm(row.statement), links: resolveLinks(row, row.links) };
  });
  const rowsByCode = new Map(rows.map((r) => [r.code, r]));

  const context = yaml(code, "context.yaml").map((cx) => ({ ...cx, statement: norm(cx.statement), links: resolveLinks(cx, cx.links) }));

  // Labels, computed in dependency order so a Computed row sees its inputs'.
  const computing = new Set();
  const labelOf = (row) => {
    if (row.label) return row.label;
    if (computing.has(row.code)) fail(code, `${row.code}: circular Computed inputs`);
    computing.add(row.code);
    row.label = computeLabel(row, rowsByCode, labelOf, code);
    computing.delete(row.code);
    return row.label;
  };
  rows.forEach(labelOf);

  // Plain voice is earned (spec 6.3). Only a Verified row with no live conflict
  // may be stated without naming who says so. The preview shows the flag in
  // the ledger; checking the sentence itself is left to review.
  for (const row of rows) {
    row.plainVoiceAllowed = row.label.support === "Verified" && ["None found", "Resolved"].includes(row.label.conflict);
  }

  // Docket use is derived from the citing side (spec §4 rule 9).
  for (const doc of documents) {
    const citedByRows = rows.filter((r) => r.links.some((l) => l.doc.code === doc.code)).map((r) => r.code);
    const citedByContext = context.filter((c) => c.links.some((l) => l.doc.code === doc.code)).map((c) => c.code);
    doc.citedBy = { record: citedByRows, context: citedByContext };
    doc.use = citedByRows.length && citedByContext.length ? "both" : citedByRows.length ? "record" : citedByContext.length ? "context" : "uncited";
    doc.claims = claims.filter((c) => c.document === doc.code).map((c) => ({
      ...c,
      citedBy: [...rows, ...context].filter((r) => r.links.some((l) => l.claim === c.code)).map((r) => r.code)
    }));
  }

  const headings = checkHeadings(code, header.headings, rows);
  const narrative = parseNarrative(code, read(code, "narrative.md"), rowsByCode, headings);

  return {
    code,
    header: {
      ...header,
      verified: toDate(header.verified),
      next_review: toDate(header.next_review),
      charter: { ...header.charter, evidence_cutoff: toDate(header.charter?.evidence_cutoff) }
    },
    documents,
    publishers: [...publishers.values()],
    claims,
    rows,
    context,
    headings,
    narrative
  };
}

/** A check mark's state: signed and valid, void (text changed since), or not signed. */
function markStatus(owner, claim, check) {
  if (!check) return { state: "unsigned" };
  const expected = checkFingerprint(owner.code, owner.statement, claim.code, claim.quote);
  if (check.fingerprint === expected) return { state: "valid", by: check.by, date: toDate(check.date), fingerprint: expected };
  return { state: "void", by: check.by, date: toDate(check.date), fingerprint: check.fingerprint, expected };
}

/**
 * What one claim can contribute to a row on its own (spec 6.2 cap table and
 * interest flag). Returns the support ceiling, whether it counts as an
 * examiner toward Verified (spec 5.7 rule 5), and why.
 */
export function claimContribution(claim, doc, link) {
  const grade = doc.grade;
  const high = grade === "R1" || grade === "R2";
  const relayed = link.relation === "relays" || link.dependence === "relays" || claim.how_known === "told-by-someone";

  if (claim.inspectable) return { support: "Verified", route: "inspectable", eligible: false, why: "inspectable record" };
  if (grade === "R4") return { support: "None", eligible: false, why: "R4 cannot support a fact row" };
  if (relayed) {
    return high
      ? { support: "Attributed", eligible: false, why: "relayed" }
      : { support: "None", eligible: false, why: "relay from R3: finding aid only" };
  }
  if (claim.interest === "self-serving") return { support: "Attributed", eligible: false, why: "self-serving" };
  // OPEN: spec 5.7 says a claim whose how-known "does not say" cannot count
  // toward Verified, but not what else it can reach. Here it keeps the
  // single-source ceiling and simply does not count as an examiner.
  const eligible = high && claim.how_known === "first-hand" && ["neutral", "against-interest"].includes(claim.interest);
  if (grade === "R3") return { support: "Attributed", eligible: false, why: "R3 source" };
  return { support: "Supported", eligible, why: eligible ? "single source, direct access" : `interest ${claim.interest}` };
}

/**
 * The row label (spec 6.2, "How a row's support is computed" and "How a row's
 * conflict is set"). Only links with a VALID check mark count: an unsigned or
 * void link is shown in the ledger but contributes nothing, so an edit after
 * review drops the label back until it is re-signed.
 */
function computeLabel(row, rowsByCode, labelOf, code) {
  if (row.kind === "computed") {
    // Spec 6.6 rule 2: the weakest support and the strongest conflict among the inputs.
    const inputs = row.inputs.map((c) => {
      const input = rowsByCode.get(c);
      if (!input) fail(code, `${row.code}: unknown input ${c}`);
      return labelOf(input);
    });
    const weakest = inputs.reduce((a, b) => (SUPPORT_RANK[b.support] < SUPPORT_RANK[a.support] ? b : a));
    const strongest = inputs.reduce((a, b) => (CONFLICT_RANK[b.conflict] > CONFLICT_RANK[a.conflict] ? b : a));
    return finish({
      support: weakest.support,
      conflict: strongest.conflict,
      route: "computed",
      grades: weakest.grades,
      origins: weakest.origins,
      examiners: weakest.examiners,
      inputs: row.inputs.map(shortCode),
      underlying: weakest.display
    });
  }

  if (row.kind === "absence") {
    // Spec 6.2: "Record is silent" gives no support, displayed as Unknown.
    // OPEN: the spec does not yet say how an Absence row is labelled.
    return finish({ support: "None", conflict: "None found", route: "absence", asOf: row.as_of });
  }

  const counted = row.links.filter((l) => l.mark.state === "valid");
  const supporting = counted.filter((l) => l.relation !== "contradicts");
  const contributions = supporting.map((l) => ({ link: l, ...claimContribution(l.claimData, l.doc, l) }));

  // Step 2: independent examiners among the eligible claims. Verified at two.
  const eligible = contributions.filter((c) => c.eligible);
  const examiners = new Map();
  for (const c of eligible) { const ex = c.link.doc.examiner_counts_as ?? c.link.doc.examiner; if (!examiners.has(ex)) examiners.set(ex, c.link.doc.grade); }
  const origins = new Set(eligible.map((c) => c.link.doc.evidence_origin));

  let result;
  if (examiners.size >= 2) {
    result = { support: "Verified", route: "examiners", grades: [...examiners.values()].sort((a, b) => GRADE_RANK[a] - GRADE_RANK[b]) };
  } else {
    // Step 3: otherwise the best single result.
    const best = contributions.reduce((a, b) => (!a || SUPPORT_RANK[b.support] > SUPPORT_RANK[a.support] ? b : a), null);
    if (!counted.length && row.links.length) result = { support: "None", route: "pending" };
    else if (!best || best.support === "None") result = { support: "None", route: "none" };
    else if (best.route === "inspectable") result = { support: "Verified", route: "inspectable" };
    else result = { support: best.support, route: "single", grades: [best.link.doc.grade], why: best.why };
  }
  result.origins = origins.size;
  result.examiners = examiners.size;

  // Conflict, set separately.
  let conflict = "None found";
  for (const link of counted.filter((l) => l.relation === "contradicts")) {
    const high = link.doc.grade === "R1" || link.doc.grade === "R2";
    const next = high || link.checked_against_record ? "Disputed" : "Challenged";
    if (CONFLICT_RANK[next] > CONFLICT_RANK[conflict]) conflict = next;
  }
  if (row.resolved_by) conflict = "Resolved";
  result.conflict = conflict;
  result.unsignedLinks = row.links.length - counted.length;
  return finish(result);
}

/** The display string (spec 6.2, "What a row shows"). */
function finish(label) {
  const plural = (n, word) => `${n} ${word}${n === 1 ? "" : "s"}`;
  const counts = label.examiners ? `${plural(label.origins, "origin")}, ${plural(label.examiners, "examiner")}` : null;
  let parts;
  if (label.support === "None") {
    parts = label.route === "absence" ? ["Unknown", `record silent as of ${label.asOf}`]
      : label.route === "pending" ? ["Pending review", "no link carries a valid check mark"]
      : ["Unknown"];
  } else if (label.route === "inspectable") {
    parts = ["Verified", "inspectable record"];
  } else if (label.route === "computed") {
    parts = [label.support, `computed from ${label.inputs.join(", ")}`];
  } else {
    parts = [label.support, label.grades?.join(" + "), counts ?? label.why];
  }
  if (label.conflict === "Challenged") parts.push("challenged");
  if (label.conflict === "Resolved") parts.push("resolved");
  const beneath = parts.filter(Boolean).join(" · ");
  // A row in dispute displays as Disputed; what the support would otherwise be
  // stays visible in the ledger as `beneath`.
  const display = label.conflict === "Disputed" ? "Disputed" : beneath;
  const word = label.conflict === "Disputed" ? "disputed" : label.route === "pending" ? "pending" : label.support === "None" ? "unknown" : label.support.toLowerCase();
  return { ...label, display, beneath, word };
}

/** Heading statuses (decision 31), checked against the rows. */
function checkHeadings(code, declared, rows) {
  if (!Array.isArray(declared) || declared.length !== 12) fail(code, "case.yaml must list all twelve headings");
  return declared.map((h, index) => {
    if (h.n !== index + 1 || h.name !== HEADING_NAMES[index]) fail(code, `heading ${index + 1} must be "${HEADING_NAMES[index]}", in order`);
    if (!STATUS_TEXT[h.status]) fail(code, `heading ${h.n}: unknown status ${h.status}`);
    const own = rows.filter((r) => r.heading === h.n);
    if (h.status === "not-applicable" && !h.reason) fail(code, `heading ${h.n}: not applicable needs a one-line reason`);
    if (["not-applicable", "not-yet-investigated"].includes(h.status) && own.length) fail(code, `heading ${h.n} is ${h.status} but has rows`);
    if (h.status === "nothing-found" && !own.some((r) => r.kind === "absence")) fail(code, `heading ${h.n}: nothing found must produce an Absence row`);
    // OPEN: heading 1 retells rows filed under other headings, so it has none of its own.
    // Heading 10 may do the same: it sets side by side contradictions whose rows sit
    // under the headings they concern (CS021).
    if (h.status === "populated" && ![1, 10].includes(h.n) && !own.length) fail(code, `heading ${h.n} is populated but has no rows`);
    return { ...h, statusText: STATUS_TEXT[h.status], rows: own.map((r) => r.code) };
  });
}

/**
 * The narrative, split by heading into paragraphs of tokens. Codes are
 * written `[F008]` or `[F004, F005]` (OPEN, spec item G2). The ID check (spec
 * 6.7 rule 2): every code must exist, and every sentence outside a declaration
 * must end in one.
 */
function parseNarrative(code, source, rowsByCode, headings) {
  const text = source.replace(/<!--[\s\S]*?-->/g, "");
  const sections = new Map();
  let current = null;
  for (const block of text.split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean)) {
    const heading = block.match(/^## (\d+)\. (.+)$/);
    if (heading) {
      const n = Number(heading[1]);
      const h = headings[n - 1];
      if (!h || h.name !== heading[2].trim()) fail(code, `narrative heading "${block}" does not match case.yaml`);
      if (["not-applicable", "not-yet-investigated"].includes(h.status)) fail(code, `narrative has text under heading ${n}, which is ${h.status}`);
      current = [];
      sections.set(n, current);
      continue;
    }
    if (!current) fail(code, "narrative text before the first heading");
    const declaration = block.startsWith("> ");
    const body = declaration ? block.replace(/^>\s?/gm, "") : block.replace(/\s+/g, " ");
    const tokens = [];
    const pattern = /`\[([^\]]+)\]`/g;
    let last = 0;
    for (const match of body.matchAll(pattern)) {
      if (match.index > last) tokens.push({ text: body.slice(last, match.index) });
      const codes = match[1].split(",").map((c) => c.trim());
      for (const c of codes) if (!rowsByCode.has(`${code}.${c}`)) fail(code, `narrative cites ${c}, which is not a row`);
      tokens.push({ codes: codes.map((c) => ({ short: c, row: rowsByCode.get(`${code}.${c}`) })) });
      last = match.index + match[0].length;
    }
    if (last < body.length) tokens.push({ text: body.slice(last) });
    if (!declaration) {
      // A sentence ends at ". " (or the block's end) and must end in its codes.
      // A single capital before the full stop is a name's initial ("Madava G."), not an end.
      // Full stops inside a quotation do not end the narrative's sentence: a quoted
      // passage may hold several of the speaker's sentences (CS021).
      const masked = body.replace(/"[^"]*"|“[^”]*”/g, (q) => q.replace(/[.?!]/g, "\u2024"));
      const sentences = masked.split(/(?<!\b[A-Z]\.)(?<=[.?!]["”]?)\s+(?=[A-Z"“`])/)
        .reduce((acc, s) => (acc.length && /^`\[/.test(s) ? [...acc.slice(0, -1), `${acc.at(-1)} ${s}`] : [...acc, s]), []);
      for (const sentence of sentences) {
        if (!/`\[[^\]]+\]`([.?!]["”]?)?\s*$/.test(sentence)) { // CS001 preview: a code may close a paragraph after a quoted sentence's own full stop
          fail(code, `narrative sentence has no row code: "${sentence.slice(0, 80)}…"`);
        }
      }
    }
    current.push({ declaration, tokens });
  }
  return headings.map((h) => ({ n: h.n, paragraphs: sections.get(h.n) ?? [] }));
}
