// Where a case in the new format lives on the site. It replaces the library
// entry with the same case ID (case.yaml's public_id) at that entry's own
// address, so existing links keep working: the story at /cases/<entry id>/,
// then record/, evidence/, sources/ and ledger.json beneath it.
import { getCollection } from "astro:content";
import { listFixtureCodes, loadCase } from "./record.mjs";

/** Map of library case ID (e.g. AAI-2026-001) -> record code (e.g. CS001). */
export function recordedCaseIds() {
  return new Map(listFixtureCodes().map((code) => [loadCase(code).header.public_id, code]));
}

export async function recordRoutes() {
  const ids = recordedCaseIds();
  const entries = await getCollection("cases", ({ data }) => ids.has(data.case_id));
  for (const id of ids.keys()) {
    if (!entries.some((e) => e.data.case_id === id)) throw new Error(`[record] no library entry has case_id ${id}`);
  }
  return entries.map((entry) => {
    const [year, slug] = entry.id.split("/");
    return { params: { year, case: slug }, props: { code: ids.get(entry.data.case_id) } };
  });
}
