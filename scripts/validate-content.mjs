import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { load as parseYaml } from "js-yaml";

const root = new URL("../src/content/cases/", import.meta.url);
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
const controlledListFields = ["industry", "business_function", "deployment_pattern"];
const kebabCase = /^[a-z0-9]+(-[a-z0-9]+)*$/;
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

if (warnings.length) {
  console.warn(`Evidence gaps (${warnings.length}):\n- ${warnings.join("\n- ")}\n`);
}

if (errors.length) {
  console.error(`Content validation failed:\n- ${errors.join("\n- ")}`);
  process.exit(1);
}

console.log(`Validated ${records.length} case record${records.length === 1 ? "" : "s"}.`);
