import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const root = new URL("../src/content/cases/", import.meta.url);
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
  "## Sources",
  "## Revision notes"
];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map((entry) => {
    const target = new URL(`${entry.name}${entry.isDirectory() ? "/" : ""}`, directory);
    return entry.isDirectory() ? walk(target) : target;
  }));
  return files.flat().filter((file) => file.pathname.endsWith(".md"));
}

const files = await walk(root);
const ids = new Map();
const errors = [];

for (const file of files) {
  const text = await readFile(file, "utf8");
  const id = text.match(/^case_id:\s*(AAI-\d{4}-\d{3})$/m)?.[1];
  const status = text.match(/^status:\s*([\w-]+)$/m)?.[1];
  const filename = path.basename(file.pathname);

  if (!id) errors.push(`${filename}: missing or malformed case_id`);
  if (id && !filename.startsWith(id)) errors.push(`${filename}: filename must begin with ${id}`);
  if (id && ids.has(id)) errors.push(`${filename}: duplicate case_id also used by ${ids.get(id)}`);
  if (id) ids.set(id, filename);

  if (["published", "archived"].includes(status)) {
    for (const section of requiredPublishedSections) {
      if (!text.includes(section)) errors.push(`${filename}: missing required section "${section}"`);
    }
    if (!/^published:\s*\d{4}-\d{2}-\d{2}$/m.test(text)) errors.push(`${filename}: missing publication date`);
    if (!/^last_verified:\s*\d{4}-\d{2}-\d{2}$/m.test(text)) errors.push(`${filename}: missing last_verified date`);
  }
}

if (errors.length) {
  console.error(`Content validation failed:\n- ${errors.join("\n- ")}`);
  process.exit(1);
}

console.log(`Validated ${files.length} case record${files.length === 1 ? "" : "s"}.`);
