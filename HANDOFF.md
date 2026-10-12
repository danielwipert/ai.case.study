# Handoff

*Replaced wholesale 2026-10-12. Read `PROJECT_GUIDE.md` first; this file only
covers this repo. The case work lives in the private repo; its `HANDOFF.md` has
the detail.*

## Where things stand

Twenty-one cases are live at https://danielwipert.github.io/ai.case.study/.
**Three are rebuilt in the new format** (Case Study Spec v0.8), each replacing
its legacy page at the same address:

| Case | What | Live | Grade |
| --- | --- | --- | --- |
| CS001 / AAI-2026-001 | OpenAI agents' intrusion into Hugging Face | 2026-10-01 | A |
| CS021 / AAI-2026-021 | The LungIMPACT trial (the control) | 2026-10-01 | B |
| CS005 / AAI-2026-005 | Mobley v. Workday, the May 2026 ruling | 2026-10-03 | B |

The other eighteen are legacy pages (004 is an unpublished lead). Everything is
merged to `main`. The propositions page stays withdrawn until the cases are
rebuilt.

## In progress: CS016, fake legal citations (AAI-2026-016)

**Step 6 of 8: waiting on the legal review.** Built in the private repo
(branch `claude/busy-sagan-qcae3w` there, not yet merged to private `main`):
five captures, 67 claims, 41 rows, story and narrative, all checked by
independent checker sessions and reviewed by Dan. **Grade B.** The legal review
pack went to Dan on 2026-10-12.

To publish (step 8), as for CS005: write `make_public_cs016.py` in the private
repo, generate `src/record/cases/CS016/`, update the legacy 016 entry's title,
summary, grade and dates from the story, and open a public PR. The story uses
timeline marks (grey database, pink Nebraska, violet New Mexico) and the new
`headline_rows` field, which the template ignores.

Rules Dan set for this case: neither lawyer is named; case titles are allowed;
counts say what the database *lists*, never what happened in each court.

## The case page (2026-10-06 and 07, live)

The story page template was revised from a mockup Dan approved (public PRs #34
and #35); `CLAUDE.md` holds its optional `story.yaml` fields and design rules.
CS001 has timeline marks; CS005 and CS021 have none yet.

## Decision workflow

Dan's decisions go through logic gates (`CLAUDE.md`, guide rule 8). Since
2026-10-11, options are worded so a one-letter reply cannot be read two ways
(public PR #39), after a reply of "B" was misread as grade A.

## Still open

- The legal review of CS016, then Dan's release approval and publishing.
- The 3–5 readers for the label test (pilot decision 4).
- Reuters' two policy links, for CS001's publisher grade.
- Not to start without Dan: J4 (archive every legacy source), J5 (re-check every
  Verified label), any new legacy-format case.

After CS016: 019, 010, 009, 011, then P5's (006, 013, 014, 022). Optional:
marks for CS005 and CS021.

## Parked

None is active work; patterns are to be rethought from the rebuilt cases.

- P8 needed a third case to reach `recurrent` (Irregular's or METR's review).
- Candidate pattern from 016 and 017: record quality and keeper disinterest
  trade off. 022 complicates it.
- Taxonomy gaps: no `prototype`/`pilot` stage, no `laboratory` environment, no
  `sales-marketing` or `supply-chain` function.

## Branch

Written on `claude/busy-sagan-qcae3w`. Branches are assigned per session.
