# Handoff

## Where things stand

Seventeen case records, sixteen published (004 is still an unpublished lead), plus the synthesis layer at `/propositions/` — seven propositions and three tensions. The site builds clean and deploys to https://danielwipert.github.io/ai.case.study/.

Merged: PR #16 (library-wide source review), PR #17 (synthesis layer). Unmerged on this branch: two new cases, 016 and 017.

**The industry axis is now complete.** All ten controlled `industry` values have at least one case.

## The two new cases

**AAI-2026-016 — fabricated legal authority in court.** Grade B, `professional-services`, the library's first case with *no deploying organisation*: thousands of unconnected individuals using tools nobody procured, with the court system as an adversarial third party rather than the operator. Built on an openly licensed database of 2,042 decisions analysed from its CSV, plus two state supreme court decisions read in full. Three findings cut against the usual telling — self-represented litigants outnumber lawyers 1,172 to 806, a specific AI product is named in 11.3% of rows, and professional sanctions reach 19.0% of lawyers against 0.2% of the self-represented majority. The spine is two supreme courts taking opposite positions on causation: New Mexico's attorney admitted ChatGPT, Nebraska's denied AI and the court made no finding. `causal_strength: descriptive` is load-bearing — the case's finding is that the attribution everyone makes is unestablished in the record meant to support it.

**AAI-2026-017 — news integrity in AI assistants.** Grade B, `media`, and 016's mirror image: there a disinterested institution produced a huge record and measured nothing; here an interested one measured carefully. 22 public service broadcasters, 271 journalists, 2,709 rated responses, 45% with a significant issue. Carries the library's only genuine repeat measurement — a BBC-to-BBC rerun, 51% to 37% — presented as a direction of travel rather than an effect size. Held at B because every one of the 271 raters works for an organisation whose content was being cited, during an open dispute with the companies under test.

## What the synthesis layer did on its own

Adding the cases moved `/propositions/` without anyone editing it: 8 industries to 10, 9 countries to 15, the B-grade row of the matrix from 1/3/–/2/– to 1/4/–/3/–. P6 gained a fifth case, P7 a third. The coverage warning fired on both new cases until they were cited, which is what surfaced that 016 belongs under P6 at all.

**P1 still holds.** No grade A case reports a positive outcome. Both new cases are B.

## Editorial calls made, worth revisiting

- **P7 stays `emerging` on three cases**, though the rules would allow `recurrent`. The three split across two phenomena — practitioner self-assessment of their own performance (008) versus audience trust in an output (012, 017) — and nothing tests whether they share a mechanism.
- **016 is filed `deployment_stage: unknown`** deliberately, not as a placeholder. There is no deployment to stage.
- **017 is filed `business_function: research-development`** under protest. The taxonomy has no value for editorial or content work, which a media-heavy library will hit again.

## Candidate proposition, needing a second case

016 and 017 together suggest something neither says alone: **the quality of a record and the disinterest of its keeper trade against each other.** Courts are disinterested and record no measurement; publishers measure well and own the outcome. That is two cases, which is enough for `emerging` — but they are two halves of one observation rather than two instances, so it is left unwritten. A third case where a genuinely disinterested party measured well would settle it.

## Still open from the synthesis work

- `conjecture` is defined and unused. Either a proposition earns it or the label should go.
- P1 leads the page; it could sit last or in the methodology.
- A case has no way to argue *against* a proposition it supports — the footer links one way only.

## Branch

Work is on `claude/optimistic-goodall-s4n0c4` — assigned per session, not the `claude/loving-ride-c4lddg` named in CLAUDE.md's git workflow, so read the session's own instruction first. Two commits ahead of `main`, no PR open. PRs merge with rebase, so restart the branch from `main` after every merge.

## Next

Remaining taxonomy gaps are thinner than the industry axis was: `deployment_stage` has no `prototype`, `pilot` or `paused` case; `environment` has no `laboratory`, `shadow-mode` or `adversarial-test`; `business_function` has no `sales-marketing` or `supply-chain`. A `paused` case would be the most interesting of those — a deployment stopped and not restarted is a shape the library does not hold.
