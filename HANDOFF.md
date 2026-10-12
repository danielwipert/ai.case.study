# Handoff

*Replaced wholesale 2026-10-12. Read `PROJECT_GUIDE.md` first; this file only
covers this repo. The case work lives in the private repo; its `HANDOFF.md` has
the detail.*

## Where things stand

Four cases are rebuilt in the new format (Case Study Spec v0.8), each replacing
its legacy page at the same address:

| Case | What | Live | Grade |
| --- | --- | --- | --- |
| CS001 / AAI-2026-001 | OpenAI agents' intrusion into Hugging Face | 2026-10-01 | A |
| CS021 / AAI-2026-021 | The LungIMPACT trial (the control) | 2026-10-01 | B |
| CS005 / AAI-2026-005 | Mobley v. Workday, the May 2026 ruling | 2026-10-03 | B |
| CS016 / AAI-2026-016 | Court decisions on AI-hallucinated content | **PR open** | B |

CS016 was released by Dan on 2026-10-12. Its public files are on
`claude/eloquent-ramanujan-gzfr5w`, in a pull request waiting for Dan to merge.
The propositions page stays withdrawn until the cases are rebuilt.

## Changed this session

- **Legal review replaced** by the private repo's automated
  `tools/legal_check.py` (guide rule 3, both repos).
- **Loader** (`src/record/lib/record.mjs`): a populated heading may have no rows
  of its own if its narrative cites one (Dan, option A); bulleted narrative
  lists are checked item by item.

## Decisions to copy into the private decision log

Already copied (this session could reach the private repo): legal review
replaced (option B); CS016's New Mexico story sentence attributed (option B);
headings 4 and 7 (option A); CS016 release approved (option A).

## Still open

- Merge the CS016 PR.
- The 3–5 readers for the label test (pilot decision 4).
- Reuters' two policy links, for CS001's publisher grade.
- P6 now warns that AAI-2026-016 was verified after it was last reviewed.
- Not to start without Dan: J4, J5, any new legacy-format case.

Next after CS016: 019, 010, 009, 011, then P5's (006, 013, 014, 022).

## Branch

Written on `claude/eloquent-ramanujan-gzfr5w`. Branches are assigned per session.
