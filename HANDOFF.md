# Handoff

## Where things stand

Fifteen published cases (AAI-2026-001 to 015; 004 is an unpublished lead) plus a new **synthesis layer**: seven propositions and three tensions at `/propositions/`. The site builds clean and deploys to https://danielwipert.github.io/ai.case.study/.

The library-wide source review merged as PR #16. The synthesis layer is the work in progress on this branch.

## The synthesis layer, in one paragraph

A **proposition** (`P1`–`P7`) is a claim holding across more than one case. A **tension** (`T1`–`T3`) is a place where two cases disagree, published rather than dropped. Both live in their own content collections and are validated like cases. The proposition names its supporting cases; case pages *derive* their "cited in the synthesis" list from that, so the link is written in exactly one place. Every number on the page — the grade × outcome matrix, the counts, which cell is highlighted, the sentence describing it — is computed at build time from the case records.

Read the "The synthesis layer" section of `CLAUDE.md` before changing any of it.

## What makes it hold together

**Strength labels are enforced, not asserted.** `recurrent` requires three or more supporting cases, two or more industries, and at least one graded A or B. The grade floor is the executable form of "a proposition can never outrank the cases beneath it" — a proposition supported only by grade C cases fails the build if labelled `recurrent`. Both rules were tested by deliberately breaking them.

**Coverage is checked.** The validator warns when a published case is cited by no proposition and no tension. It caught AAI-2026-007 on the first run, which is why the tensions collection exists.

**Staleness is checked.** It warns when a supporting case was verified after its proposition was last reviewed.

## The propositions

P1 is the interesting one and the one to argue with: **no case graded A reports a positive outcome**, because grade A here means a regulator, court, prosecutor or audited filing — bodies that convene when something went wrong. It is scoped `library` rather than `deployment`, because it describes this collection's evidence and not AI. Its own "where it strains" says the library's gap-filling selection rule is not neutral toward it.

P2 missing half of the error rate · P3 proxy displaces outcome · P4 nobody reports both cost and benefit · P5 human in the loop needs measuring · P6 liability attaches to the paperwork · P7 self-assessment wrong in sign (the only `emerging` one).

## Open questions the mock raised and nobody has settled

- **Should propositions be linkable from case prose**, not just from the derived footer? A case could argue against a proposition it supports.
- **`conjecture` is defined and unused.** Either a proposition earns it or the label should go.
- **P1 leads the page.** It could equally sit last, or in the methodology. It is an admission as much as a finding.

## Branch

Work is on `claude/optimistic-goodall-s4n0c4` — assigned per session, not the `claude/loving-ride-c4lddg` named in CLAUDE.md's git workflow, so read the session's own instruction first. The workflow itself holds: PRs merge with rebase, so restart the branch from `main` after every merge.

## Next

Back to adding cases. Every new case should be checked against the propositions: it either supports one, counters one, or exposes a gap in the set. The validator will warn if it does none of those.
