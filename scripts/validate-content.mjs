import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { load as parseYaml } from "js-yaml";

const root = new URL("../src/content/cases/", import.meta.url);
const propositionRoot = new URL("../src/content/propositions/", import.meta.url);
const tensionRoot = new URL("../src/content/tensions/", import.meta.url);
const taxonomyPath = new URL("../docs/taxonomy.yml", import.meta.url);

const requiredPublishedSections = [
  "## Case in one sentence",
  "## Executive summary",
  "## Research question",
  "## Organization and operating context",
  "## The situation before AI",
  "## The AI intervention or event",
  "## Outcomes and economics",
  "## Causal assessment and competing explanations",
  "## Failures, limitations, and governance",
  "## What this case demonstrates",
  "## What this case does not demonstrate",
  "## Evidence assessment",
  "## Material claims",
  "## Direct quotations",
  "## Revision notes"
];

const publishedStatuses = ["published", "archived"];
const claimLabels = ["verified", "supported", "attributed", "disputed", "inference", "unknown"];
const claimLabelsNeedingCitation = ["verified", "supported", "attributed", "disputed"];
const claimColumns = ["claim", "label", "evidence", "what would change this"];
const controlledListFields = ["industry", "business_function", "deployment_pattern"];
const kebabCase = /^[a-z0-9]+(-[a-z0-9]+)*$/;

// A proposition's strength is a claim about its own support, so it is checked
// rather than asserted. "Recurrent" is the only label that promises breadth:
// several cases, more than one industry, and at least one of them better than
// self-reported. The floor on grades is the executable form of the rule that a
// proposition can never outrank the cases beneath it.
const strengthRules = {
  recurrent: { minCases: 3, minIndustries: 2, bestGrade: "B" },
  emerging: { minCases: 2, minIndustries: 1, bestGrade: "C" },
  conjecture: { minCases: 1, minIndustries: 1, bestGrade: "C" }
};
const gradeRank = { A: 3, B: 2, C: 1, D: 0 };
const errors = [];
const warnings = [];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map((entry) => {
    const target = new URL(`${entry.name}${entry.isDirectory() ? "/" : ""}`, directory);
    return entry.isDirectory() ? walk(target) : target;
  }));
  return files.flat().filter((file) => file.pathname.endsWith(".md"));
}

function splitRecord(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return null;
  return { raw: match[1], frontMatter: parseYaml(match[1]) ?? {}, body: match[2] };
}

function sectionOf(body, heading) {
  const start = body.indexOf(`## ${heading}`);
  if (start === -1) return "";
  const next = body.indexOf("\n## ", start + 1);
  return body.slice(start, next === -1 ? body.length : next);
}

function asDate(value) {
  if (!value) return null;
  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

const taxonomy = parseYaml(await readFile(taxonomyPath, "utf8"));
const controlled = taxonomy.controlled_fields ?? {};
const aliases = taxonomy.deprecated_aliases ?? {};

const files = await walk(root);
const records = [];

for (const file of files) {
  const filename = path.basename(file.pathname);
  const text = await readFile(file, "utf8");
  const record = splitRecord(text);
  if (!record) {
    errors.push(`${filename}: could not read YAML front matter`);
    continue;
  }
  records.push({ filename, data: record.frontMatter, body: record.body, raw: record.raw });
}

const ids = new Map();
for (const { filename, data } of records) {
  const id = data.case_id;
  if (typeof id !== "string" || !/^AAI-\d{4}-\d{3}$/.test(id)) {
    errors.push(`${filename}: missing or malformed case_id`);
    continue;
  }
  if (!filename.startsWith(id)) errors.push(`${filename}: filename must begin with ${id}`);
  if (ids.has(id)) errors.push(`${filename}: duplicate case_id also used by ${ids.get(id)}`);
  else ids.set(id, filename);
}

const knownIds = new Set(ids.keys());
const knownSlugs = new Set(records.map(({ filename }) => filename.replace(/\.md$/, "").toLowerCase()));

for (const { filename, data, body, raw } of records) {
  const fail = (message) => errors.push(`${filename}: ${message}`);
  const warn = (message) => warnings.push(`${filename}: ${message}`);
  const published = publishedStatuses.includes(data.status);
  const sources = Array.isArray(data.sources) ? data.sources : [];

  // Controlled taxonomy values and kebab-case facets.
  for (const field of controlledListFields) {
    const values = Array.isArray(data[field]) ? data[field] : [];
    const allowed = controlled[field];
    for (const value of values) {
      const replacement = aliases[field]?.[value];
      if (replacement) fail(`${field} value "${value}" is deprecated; use "${replacement}"`);
      else if (allowed && !allowed.includes(value)) fail(`${field} value "${value}" is not in docs/taxonomy.yml`);
    }
  }
  for (const tag of Array.isArray(data.tags) ? data.tags : []) {
    if (!kebabCase.test(tag)) fail(`tag "${tag}" must be lowercase kebab-case`);
  }

  // Related cases resolve.
  for (const related of Array.isArray(data.related_cases) ? data.related_cases : []) {
    if (related === data.case_id) fail("related_cases must not include the case itself");
    else if (!knownIds.has(related)) fail(`related_cases references unknown case ${related}`);
  }

  // Internal case links resolve.
  for (const match of body.matchAll(/\]\((?:[^)]*\/)?cases\/([^)#?]+?)\/?\)/g)) {
    const slug = match[1].split("/").pop().toLowerCase();
    if (!knownSlugs.has(slug)) fail(`internal link points at unknown case "${match[1]}"`);
  }

  // Dates are written as YYYY-MM-DD, at the record level and inside sources.
  const dateFields = ["created", "published", "last_verified", "next_review", "accessed", "updated"];
  for (const line of raw.split(/\r?\n/)) {
    const match = line.match(/^\s*(?:-\s+)?([a-z_]+):\s*(\S.*?)\s*$/);
    if (!match || !dateFields.includes(match[1])) continue;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(match[2].replace(/^["']|["']$/g, ""))) {
      fail(`${match[1]} must be written as YYYY-MM-DD, found "${match[2]}"`);
    }
  }

  // Date ordering.
  const order = [["created", asDate(data.created)], ["published", asDate(data.published)], ["last_verified", asDate(data.last_verified)], ["next_review", asDate(data.next_review)]].filter(([, value]) => value);
  for (let index = 1; index < order.length; index += 1) {
    const [earlierName, earlier] = order[index - 1];
    const [laterName, later] = order[index];
    if (later < earlier) fail(`${laterName} (${laterName === "created" ? "" : ""}${later.toISOString().slice(0, 10)}) is earlier than ${earlierName} (${earlier.toISOString().slice(0, 10)})`);
  }

  // Citation integrity: footnotes, sources, and the ledger must agree.
  const sourceIds = new Set(sources.map((source) => source.id));
  const defined = new Set([...body.matchAll(/^\[\^([^\]]+)\]:/gm)].map((match) => match[1]));
  const referenced = new Set([...body.matchAll(/\[\^([^\]]+)\](?!:)/g)].map((match) => match[1]));
  for (const id of referenced) {
    if (!defined.has(id)) fail(`footnote [^${id}] is referenced but never defined`);
    if (sources.length > 0 && !sourceIds.has(id)) fail(`footnote [^${id}] does not match any source id in the front matter`);
  }
  for (const id of defined) {
    if (!referenced.has(id)) fail(`footnote [^${id}] is defined but never referenced`);
  }
  if (published) {
    for (const id of sourceIds) {
      if (!referenced.has(id)) fail(`source "${id}" is never cited in the body`);
    }
    for (const source of sources) {
      if (!source.archive_url) warn(`source "${source.id}" has no archive_url, so the citation depends on the live URL`);
      if (!source.method && (source.roles ?? []).some((role) => ["primary-investigation", "direct-evidence"].includes(role))) {
        warn(`source "${source.id}" carries original evidence but records no method`);
      }
    }
  }

  if (!published) continue;

  for (const section of requiredPublishedSections) {
    if (!body.includes(section)) fail(`missing required section "${section}"`);
  }
  if (!data.published) fail("missing publication date");
  if (!data.last_verified) fail("missing last_verified date");

  // Triangulation: A and B cases need two independent evidentiary chains.
  const chains = new Set(sources.map((source) => source.source_family ?? `single:${source.id}`));
  if (["A", "B"].includes(data.evidence_grade) && chains.size < 2 && !data.single_chain_rationale) {
    fail(`grade ${data.evidence_grade} requires two independent evidentiary chains (found ${chains.size}) or a single_chain_rationale explaining why one is sufficient`);
  }
  if (["B", "C"].includes(data.evidence_grade) && !data.evidence_upgrade_path) {
    fail(`grade ${data.evidence_grade} requires evidence_upgrade_path stating what would earn a higher grade`);
  }

  // Material claims carry a controlled label, a citation, and a falsifier.
  const claimRows = sectionOf(body, "Material claims")
    .split("\n")
    .filter((line) => line.trim().startsWith("|"))
    .map((line) => line.trim().slice(1, -1).split("|").map((cell) => cell.trim()))
    .filter((cells) => !cells.every((cell) => /^:?-+:?$/.test(cell)));
  if (claimRows.length < 2) {
    fail("Material claims section contains no claim rows");
  } else {
    const header = claimRows[0].map((cell) => cell.toLowerCase());
    const missing = claimColumns.filter((column) => !header.includes(column));
    if (missing.length) fail(`Material claims table needs ${missing.map((column) => `a "${column}"`).join(" and ")} column`);
    else {
      for (const row of claimRows.slice(1)) {
        const cell = (column) => row[header.indexOf(column)] ?? "";
        const claim = cell("claim").slice(0, 60);
        const label = cell("label").replaceAll("*", "").trim().toLowerCase();
        if (!claimLabels.includes(label)) {
          fail(`claim "${claim}…" has label "${cell("label")}"; use one of ${claimLabels.join(", ")}`);
        } else if (claimLabelsNeedingCitation.includes(label)) {
          const cited = [...cell("evidence").matchAll(/\[\^([^\]]+)\]/g)].map((match) => match[1]);
          if (!cited.some((id) => sourceIds.has(id))) fail(`claim "${claim}…" is labelled ${label} but cites no source from the front matter`);
        }
        if (cell("what would change this").replace(/[—–-]/g, "").trim().length < 10) {
          fail(`claim "${claim}…" does not say what would change its label`);
        }
      }
    }
  }

  // Every quotation needs a citation and a locator.
  const quotations = sectionOf(body, "Direct quotations");
  const blocks = quotations.split(/\n(?=>)/).slice(1);
  if (blocks.length === 0) fail("Direct quotations section contains no quotation");
  for (const block of blocks) {
    const quote = block.split("\n")[0].replace(/^>\s*/, "").slice(0, 60);
    const attribution = block.split("\n").find((line) => line.trimStart().startsWith("—")) ?? "";
    const cited = [...attribution.matchAll(/\[\^([^\]]+)\]/g)].map((match) => match[1]);
    if (cited.length === 0) fail(`quotation "${quote}…" has no source citation in its attribution line`);
    else if (sources.length > 0 && !cited.some((id) => sourceIds.has(id))) fail(`quotation "${quote}…" cites no source listed in the front matter`);
    const locator = attribution.match(/locator:\s*(.+?)\s*$/i)?.[1];
    if (!locator) fail(`quotation "${quote}…" has no "locator:" in its attribution line`);
    else if (/^unrecorded\b/i.test(locator)) warn(`quotation "${quote}…" has an unrecorded locator`);
  }
}

// ---------------------------------------------------------------------------
// Propositions: the cross-case synthesis.
//
// A proposition names the cases it rests on; case pages derive their "cited in"
// list from here rather than restating it, so the two cannot drift apart. That
// makes this the only place the link is written, and the only place it can be
// wrong.
// ---------------------------------------------------------------------------

const caseByIdentifier = new Map(records.map((record) => [record.data.case_id, record.data]));
const propositionFiles = await walk(propositionRoot).catch(() => []);
const propositions = [];

for (const file of propositionFiles) {
  const filename = path.basename(file.pathname);
  const record = splitRecord(await readFile(file, "utf8"));
  if (!record) {
    errors.push(`${filename}: could not read YAML front matter`);
    continue;
  }
  propositions.push({ filename, data: record.frontMatter, body: record.body });
}

const propositionIds = new Map();
for (const { filename, data } of propositions) {
  const id = data.proposition_id;
  if (typeof id !== "string" || !/^P\d+$/.test(id)) {
    errors.push(`${filename}: missing or malformed proposition_id`);
    continue;
  }
  if (!filename.startsWith(`${id}-`)) errors.push(`${filename}: filename must begin with ${id}-`);
  if (propositionIds.has(id)) errors.push(`${filename}: duplicate proposition_id also used by ${propositionIds.get(id)}`);
  else propositionIds.set(id, filename);
}

const orders = new Map();
const citedCases = new Set();

for (const { filename, data, body } of propositions) {
  const fail = (message) => errors.push(`${filename}: ${message}`);
  const warn = (message) => warnings.push(`${filename}: ${message}`);
  const supporting = Array.isArray(data.supporting_cases) ? data.supporting_cases : [];
  const counter = Array.isArray(data.counter_cases) ? data.counter_cases : [];

  if (orders.has(data.order)) fail(`order ${data.order} is also used by ${orders.get(data.order)}`);
  else orders.set(data.order, filename);

  // Every cited case resolves, is published, and appears on one side only.
  const resolved = [];
  for (const [field, list] of [["supporting_cases", supporting], ["counter_cases", counter]]) {
    for (const id of list) {
      const found = caseByIdentifier.get(id);
      if (!found) { fail(`${field} references unknown case ${id}`); continue; }
      if (!publishedStatuses.includes(found.status)) fail(`${field} references ${id}, which is not published`);
      citedCases.add(id);
      if (field === "supporting_cases") resolved.push(found);
    }
  }
  for (const id of supporting) {
    if (counter.includes(id)) fail(`${id} is listed as both a supporting and a counter case`);
  }

  // The strength label is checked against the support it claims.
  const rule = strengthRules[data.strength];
  if (rule && resolved.length) {
    const industries = new Set(resolved.flatMap((entry) => entry.industry ?? []));
    const best = resolved.reduce((top, entry) => Math.max(top, gradeRank[entry.evidence_grade] ?? 0), 0);
    if (resolved.length < rule.minCases) {
      fail(`strength "${data.strength}" needs at least ${rule.minCases} supporting cases, found ${resolved.length}`);
    }
    if (industries.size < rule.minIndustries) {
      fail(`strength "${data.strength}" needs cases from at least ${rule.minIndustries} industries, found ${industries.size}`);
    }
    if (best < gradeRank[rule.bestGrade]) {
      fail(`strength "${data.strength}" needs at least one supporting case graded ${rule.bestGrade} or better; the best here is grade ${Object.keys(gradeRank).find((key) => gradeRank[key] === best) ?? "none"}`);
    }
  }

  // A proposition that reaches past this library has to be falsifiable by
  // something outside it. A library-scoped one is a statement about the
  // collection and says so.
  if (data.scope === "deployment" && /this library/i.test(data.statement ?? "")) {
    fail("a deployment-scoped statement should not be about the library; set scope: library");
  }

  if (body.trim().length < 200) fail("body is too short to explain the proposition");

  // Staleness: a synthesis is only as current as the cases under it.
  const reviewed = asDate(data.last_reviewed);
  for (const entry of resolved) {
    const verified = asDate(entry.last_verified);
    if (reviewed && verified && verified > reviewed) {
      warn(`${entry.case_id} was verified after this proposition was last reviewed; the synthesis may be stale`);
    }
  }
}

// Tensions: the cases that disagree with each other, kept rather than dropped.
const tensionFiles = await walk(tensionRoot).catch(() => []);
const tensions = [];

for (const file of tensionFiles) {
  const filename = path.basename(file.pathname);
  const record = splitRecord(await readFile(file, "utf8"));
  if (!record) { errors.push(`${filename}: could not read YAML front matter`); continue; }
  tensions.push({ filename, data: record.frontMatter, body: record.body });
}

const tensionIds = new Map();
const tensionOrders = new Map();
for (const { filename, data, body } of tensions) {
  const fail = (message) => errors.push(`${filename}: ${message}`);
  const id = data.tension_id;
  if (typeof id !== "string" || !/^T\d+$/.test(id)) { fail("missing or malformed tension_id"); continue; }
  if (!filename.startsWith(`${id}-`)) fail(`filename must begin with ${id}-`);
  if (tensionIds.has(id)) fail(`duplicate tension_id also used by ${tensionIds.get(id)}`);
  else tensionIds.set(id, filename);
  if (tensionOrders.has(data.order)) fail(`order ${data.order} is also used by ${tensionOrders.get(data.order)}`);
  else tensionOrders.set(data.order, filename);

  for (const caseId of Array.isArray(data.cases) ? data.cases : []) {
    const found = caseByIdentifier.get(caseId);
    if (!found) fail(`cases references unknown case ${caseId}`);
    else if (!publishedStatuses.includes(found.status)) fail(`cases references ${caseId}, which is not published`);
    else citedCases.add(caseId);
  }
  if (body.trim().length < 120) fail("body is too short to explain the tension");
}

for (const { filename, data } of records) {
  if (publishedStatuses.includes(data.status) && !citedCases.has(data.case_id)) {
    warnings.push(`${filename}: no proposition or tension cites this case`);
  }
}

if (warnings.length) {
  console.warn(`Evidence gaps (${warnings.length}):\n- ${warnings.join("\n- ")}\n`);
}

if (errors.length) {
  console.error(`Content validation failed:\n- ${errors.join("\n- ")}`);
  process.exit(1);
}

console.log(`Validated ${records.length} case record${records.length === 1 ? "" : "s"}, ${propositions.length} proposition${propositions.length === 1 ? "" : "s"}, and ${tensions.length} tension${tensions.length === 1 ? "" : "s"}.`);
