# Handoff

## Where things stand

Twenty case records, nineteen published (004 is still an unpublished lead), plus the synthesis layer at `/propositions/` — seven propositions and three tensions. The site builds clean and deploys to https://danielwipert.github.io/ai.case.study/.

Merged: PR #16 (source review), PR #17 (synthesis layer), PR #18 (cases 016–019). **Unmerged on this branch: AAI-2026-020 and the P3 edit it forced. No PR open.**

The `industry` axis is complete, `paused` was filled by 019, and **`shadow-mode` is now filled by 020**.

## The new case

**AAI-2026-020 — a dialysis forecast that ran twice in shadow mode and disagreed with itself.** Grade C, `healthcare`, `operations`, `environment: shadow-mode`, `deployment_stage: evaluation`, `outcome: inconclusive`, `causal_strength: descriptive`. Four Toronto hospitals ran a seven-day forecast of urgent dialysis demand live, twice, with the output withheld from the nurse managers who would have used it. The published result is a 26.7% improvement over a static average at the main site.

The finding is not in the paper's text but in its Table 2. The two silent periods disagree: in November 2023 the model's error exactly equalled the static benchmark's (2.1 vs 2.1) and the deep learning model was worse than both; in June 2024 it beat a benchmark that had itself degraded from 2.1 to 4.0. The published figure is their average, and no sentence in the paper mentions the first period alone.

Two other things fell out of reading it properly. **The simplest model won** — 1970s ARIMA beat a temporal convolutional network in every live comparison, having tied it retrospectively — while the conference presentation eight months earlier was titled "Using deep learning to forecast acute dialysis needs" and the trade-press headline followed suit. And **the staffing numbers travelled while the caveat did not**: a 67% reduction in overstaffing and 79% in understaffing were reported to Healio in March 2025 and appear nowhere in the November 2025 paper, which closes by saying whether the model saves anything is unresolved.

## Editorial calls made, worth revisiting

- **Grade C, not B, and the case argues why at length.** There are two source families, so a mechanical count would allow B. It should not: the second family is a trade-press report of the same investigators' conference talk, which tests none of the paper's numbers and disagrees with them. This is the fourth time the library has declined a promotion on the rule that a second chain lifts a grade only when it tests the first one's figures — now recorded in the case rather than only in CLAUDE.md.
- **Every performance number comes from the team that built the model**, three of whom hold a provisional patent on it, funded by their own division, with the ethics requirement waived by that division's leadership. All disclosed by the authors; all recorded in the case.
- **Three discrepancies between the conference account and the paper are recorded, not resolved** — the error figures, which modelling family deserves credit, and the staffing estimates.
- **`outcome: inconclusive`.** The model beat a static average over the two periods combined and tied it in one of them, and nothing downstream was measured.

## The case I found and did not write

Chasing shadow mode surfaced something stronger that belongs in the library on its own merits: **AI triage of chest X-rays in the NHS lung cancer pathway**, where the record contains a genuine contradiction.

- An NHS trust of five hospitals in South West London ran a commercial CXR AI in a **silent trial** (63,083 radiographs, 12 months, 97% sensitivity against 35% specificity, 31 clinically significant misses), then deployed it and reported time from X-ray to CT report for suspected lung cancer falling from 6.0 to 3.6 days.
- **LungIMPACT**, a randomized controlled trial in Nature Medicine (93,326 CXRs, prioritization randomized by day, ISRCTN 78987039), found no effect on any primary outcome — time to CT 53 days in both arms — and concludes "CXR AI deployments should not include worklist prioritization in this context." Its authors add that future research "should differentiate between primary pathway changes and the direct impact of AI," which is precisely the critique of the before/after study.
- An earlier RCT found that *human* radiographer immediate reporting does cut the time.

The obstacle is access, and it is one-sided: **the RCT is fully readable at nature.com**, while both South West London papers are abstract-only (pubs.rsna.org and ai.nejm.org both 403; Ovid serves the NEJM AI abstract). So the case would be strong on the null result and thin on the deployment that claims benefit. Worth attempting anyway — it would be the library's first case with a randomized trial at its centre, and its natural `environment` is `production`, so it fills nothing taxonomically and should be judged on merit.

## Candidate proposition, still needing a second case

016 and 017 together suggest that **the quality of a record and the disinterest of its keeper trade against each other**. Two halves of one observation rather than two instances, so it stays unwritten. 020 does not settle it either: the investigators are disinterested commercially in the ordinary sense and hold a patent on what they measured.

## Still open from the synthesis work

- `conjecture` is defined and unused. Either a proposition earns it or the label should go.
- P1 leads the page; it could sit last or in the methodology.
- A case has no way to argue *against* a proposition it supports — the footer links one way only.

## Branch

Work is on `claude/optimistic-goodall-s4n0c4` — assigned per session, not the `claude/loving-ride-c4lddg` named in CLAUDE.md's git workflow, so read the session's own instruction first. PRs merge with rebase; the branch was restarted from `main` after PR #18 and carries only the 020 work.

## Next

Remaining taxonomy gaps, recomputed after 020: `deployment_stage` has no `prototype` and no `pilot`; `environment` has no `laboratory` and no `adversarial-test` case (16 of 19 published cases are `production`); `business_function` has no `sales-marketing` and no `supply-chain`. `adversarial-test` is the interesting one — red-teaming and jailbreak evaluations are abundantly published, but almost always by the model's own vendor, which is the grade problem in a different costume.
