# Handoff

*Replaced wholesale 2026-10-07. Read `PROJECT_GUIDE.md` first; this file only
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
merged to `main`. The propositions page stays withdrawn until the cases are
rebuilt.

## Case page redesign (2026-10-06 and 07, live)

The story page template (`src/pages/cases/[year]/[case]/index.astro`) was
revised from a mockup Dan approved (public PRs #34 and #35). It applies to every
rebuilt case.

- **Disagreements:** both sides share one neutral style. The old pink and lime
  made one side look endorsed (lime is the grade card's colour).
- **Source links:** a quiet underlined "Source ↗" replaces the black chip.
- **Numbers:** a small, faded source line sits well below each figure. Dan's
  rule: the numbers and labels pop; sourcing is present but recessive.
- **Quotes:** all at equal size. The first quote is no longer the page's
  largest text.
- **Timeline drawn to scale:** spaced by real time, gaps labelled, long gaps
  drawn as a dashed break, and a one-square-per-day strip for timelines of a
  month or less (only CS001 today).
- **Bug fixed:** the timeline used to colour the 5th and 8th entries whatever
  they were.

**New optional `story.yaml` fields** (the template fails the build on bad values):

- `timeline_key`: list of `{mark, label, color}`; color is `pink`, `violet`,
  `grey` or `ink`. Drawn as a legend under the timeline.
- `mark` on a timeline entry: names a `timeline_key` entry and colours that date.
  Without marks, every event is black.
- `by` on a number entry: optional "Counted by …" line. Unused so far.

CS001 has marks (grey agent activity, pink disclosure, violet OpenAI, black
fuller reports). CS005 and CS021 have none yet; their timelines are black.

## Waiting on the private repo (prompt drafted for Dan)

1. **CS001's private `story.yaml` needs the same marks.** They were added to the
   public copy first (PR #35) to go live; a regeneration without them turns the
   timeline black again. Check that the make_public script passes `timeline_key`,
   `mark` and `by` through.
2. **`PROJECT_GUIDE.md` must match the public copy** (updated 2026-10-06).
3. Document the three new fields in the private spec or tooling notes.

## Where to pick up

1. **Dan picks the next case.** Order: P6's cases (009, 010, 011, 016, 019),
   then P5's (006, 013, 014, 022), then the rest.
2. **Dan captures its sources** into the private repo's `inbox/` as single-file
   HTML saves. This is the bottleneck and stays manual.
3. Then the eight steps in the guide §4. When drafting `story.yaml`, add
   timeline marks and a key if a few events deserve colour.

Optional: marks for CS005 and CS021.

## Still open

- The 3–5 readers for the label test (pilot decision 4).
- Reuters' two policy links, for CS001's publisher grade.
- Not to start without Dan: J4 (archive every legacy source), J5 (re-check every
  Verified label), any new legacy-format case.

## Parked

None is active work; patterns are to be rethought from the rebuilt cases.

- P8 needed a third case to reach `recurrent` (Irregular's or METR's review).
- Candidate pattern from 016 and 017: record quality and keeper disinterest
  trade off. 022 complicates it.
- Taxonomy gaps: no `prototype`/`pilot` stage, no `laboratory` environment, no
  `sales-marketing` or `supply-chain` function.

## Branch

Written on `claude/busy-sagan-qcae3w`. Branches are assigned per session.
