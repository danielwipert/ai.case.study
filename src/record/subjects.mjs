// Which subject each rebuilt case belongs to. The subject gives the case its
// colour (src/styles/library.css), as a DK book gives each chapter one. This is
// a site design choice, not part of the record, so it lives here rather than in
// story.yaml (which is generated from the private repo). Step 3 of the redesign
// extends it to the legacy cases.
export const SUBJECTS = {
  courts: "Courts",
  health: "Healthcare",
  employment: "Employment",
  security: "Security",
  synthesis: "Synthesis",
  media: "Media"
};

const CASE_SUBJECT = {
  CS001: "security",
  CS005: "employment",
  CS016: "courts",
  CS021: "health"
};

/** The subject key for a record code; the build fails on a case without one. */
export function subjectOf(code) {
  const s = CASE_SUBJECT[code];
  if (!s) throw new Error(`[subjects] ${code} has no subject: add it to src/record/subjects.mjs`);
  if (!SUBJECTS[s]) throw new Error(`[subjects] ${code}: unknown subject "${s}"`);
  return s;
}
