// The six themes of the library. Each case belongs to one, and the theme gives
// it a colour (src/styles/library.css), as a DK book gives each chapter one.
// Dan's gate of 2026-10-24 (option A): grouped by what each story is about. This
// is a site design choice, not part of the record, so it lives here rather than
// in story.yaml (generated from the private repo) or a case's front matter.
export const THEMES = {
  law: "Law & regulation",
  work: "Work & productivity",
  health: "Healthcare",
  public: "Public services",
  testing: "Testing & safety",
  infra: "Infrastructure"
};

const CASE_THEME = {
  "AAI-2026-001": "testing",
  "AAI-2026-002": "work",
  "AAI-2026-003": "work",
  "AAI-2026-004": "work",
  "AAI-2026-005": "law",
  "AAI-2026-006": "health",
  "AAI-2026-007": "work",
  "AAI-2026-008": "work",
  "AAI-2026-009": "public",
  "AAI-2026-010": "infra",
  "AAI-2026-011": "law",
  "AAI-2026-012": "public",
  "AAI-2026-013": "infra",
  "AAI-2026-014": "law",
  "AAI-2026-015": "infra",
  "AAI-2026-016": "law",
  "AAI-2026-017": "testing",
  "AAI-2026-018": "public",
  "AAI-2026-019": "law",
  "AAI-2026-020": "health",
  "AAI-2026-021": "health",
  "AAI-2026-022": "testing"
};

/** The theme key for a library case ID (AAI-…); the build fails on a case without one. */
export function themeOf(caseId) {
  const t = CASE_THEME[caseId];
  if (!t) throw new Error(`[themes] ${caseId} has no theme: add it to src/record/subjects.mjs`);
  if (!THEMES[t]) throw new Error(`[themes] ${caseId}: unknown theme "${t}"`);
  return t;
}
