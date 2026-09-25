# Handoff

*Replaced wholesale 2026-09-25. Read `PROJECT_GUIDE.md` first; this file only
covers this repo.*

## Where things stand

Twenty-two case records, twenty-one published (004 is still an unpublished
lead), eight propositions and three tensions. **All of it is merged to `main`,**
including AAI-2026-022, P8 and the P5 edit, which the previous handoff listed as
unmerged. The site builds clean and deploys to
https://danielwipert.github.io/ai.case.study/.

**This repo is in maintenance only.** The case format is being rebuilt under
Case Study Spec v0.7, and the rebuild is being piloted by hand in the private
repo `ai.case.study.private`, on the control case (AAI-2026-021 / CS021) first,
then the Hugging Face case (AAI-2026-001 / CS001). See the guide §4.

## What not to do

- **Do not add a new case in the legacy format.** The previous handoff ended
  with "the better next move is probably not another gap" and pointed at a
  third case for P8. Both are superseded by pilot-first (spec decision 20). The
  P8 lead below is kept for when new cases resume in the new format.
- Do not move anything from the private repo into this one. Pilot files are
  published only at the relaunch, after a legal review.

## Waiting on Dan, for this repo

Each is a spec v0.7 item and needs Dan's go-ahead before anyone starts it.

- **J7 / H3 — the legacy banner** on the live cases: "Legacy format, written
  before spec v1, migration in progress." Its wording is H3.
- **J4 — archive every source** across the live cases: 85 sources, none with an
  archive link today.
- **J5 — re-check every Verified label** against the new basis rule and
  downgrade any that rest on a single source. Expect some grades to fall; spec
  §13 says that is the design working. The control case, graded A today, is the
  first expected to be questioned.

## Parked from the last library session

Kept so nothing is lost. None is active work.

- **P8 needs a third case to reach `recurrent`.** Likely candidates: the
  investigation by Anthropic's evaluation partner (Irregular), or METR's review
  of both incidents, if either publishes.
- **Candidate proposition, still two halves of one observation** (016, 017):
  the quality of a record and the disinterest of its keeper trade against each
  other. 022 complicates it: a disinterested body produced a candid record of
  its own failure.
- `conjecture` is defined and unused across eight propositions. Either one earns
  it or the label goes.
- A case cannot argue *against* a proposition it supports; the footer links one
  way only.
- Remaining taxonomy gaps: `deployment_stage` has no `prototype` or `pilot`;
  `environment` has no `laboratory`; `business_function` has no
  `sales-marketing` or `supply-chain`.

## Branch

This handoff was written on `claude/dreamy-sagan-r4hcry`, as part of a
documentation push across both repos. Branches are assigned per session.
