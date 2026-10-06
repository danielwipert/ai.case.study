# Handoff

*Replaced wholesale 2026-10-06. Read `PROJECT_GUIDE.md` first; this file only
covers this repo.*

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
merged to `main`; the last commit is the CS005 release (`be5d35b`).

The public repo is **no longer maintenance only**: it publishes each rebuilt
case once Dan approves the release. The work itself happens in the private repo
`ai.case.study.private`. The propositions page is withdrawn (2026-10-02) and
stays down until the cases are rebuilt.

## Where to pick up

1. **Dan picks the next case.** The planned order is P6's cases first (009,
   010, 011, 016, 019), then P5's (006, 013, 014, 022), then the rest.
2. **Dan captures its sources** from his browser into the private repo's
   `inbox/`, as single-file HTML saves. This is the bottleneck and stays
   manual; no faster way has been found.
3. Then the eight-step process in the guide §4: draft, checker, Dan's review,
   narrative and story, legal review, release approval, public pull request.

## Still open

- The 3–5 readers for the label test (pilot decision 4).
- Reuters' two policy links, for CS001's publisher grade.

## Waiting on Dan's go-ahead (do not start without it)

- **J4: archive every source** on the legacy pages (85 sources, none archived).
- **J5: re-check every Verified label** on the legacy pages against the new
  basis rule.
- Any new case in the legacy format: never.

Decided against (2026-10-01): a legacy banner on the old pages, and restyling
them before they are rebuilt.

## Parked

Kept so nothing is lost; none is active work. Patterns across cases are to be
rethought from the rebuilt cases, so these may not survive.

- P8 needed a third case to reach `recurrent` (candidates: Irregular's
  investigation, or METR's review of both incidents, if either publishes).
- A candidate pattern from 016 and 017: the quality of a record and the
  disinterest of its keeper trade against each other. 022 complicates it.
- Taxonomy gaps: `deployment_stage` has no `prototype` or `pilot`;
  `environment` has no `laboratory`; `business_function` has no
  `sales-marketing` or `supply-chain`.

## Keep in step

`PROJECT_GUIDE.md` must be identical in both repos. It was updated here on
2026-10-06 for CS005; **the private copy needs the same edit** if it was not
made in the same session.

## Branch

Written on `claude/busy-sagan-qcae3w`. Branches are assigned per session.
