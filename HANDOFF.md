# Handoff

## Where things stand

Twenty-one case records, twenty published (004 is still an unpublished lead), plus the synthesis layer at `/propositions/` — seven propositions and three tensions. The site builds clean and deploys to https://danielwipert.github.io/ai.case.study/.

Merged: PR #16 (source review), PR #17 (synthesis layer), PR #18 (cases 016–019), PR #19 (case 020). **Unmerged on this branch: AAI-2026-021 and the P1, P3 and P4 edits it forced. No PR open.**

## The new case

**AAI-2026-021 — LungIMPACT.** Grade **A**, `healthcare`, `environment: production`, `causal_strength: causal`, `outcome: negative`. A randomized controlled trial across five NHS trusts, 93,326 chest X-rays from 86,945 patients, testing whether AI worklist prioritization shortens the lung cancer pathway. The AI ran in both arms, so prioritization alone was randomized.

Prioritization did exactly what it was built to do — median time from X-ray to report fell significantly, 47 hours to 34.1 — and nothing else moved. Time to CT was 53 days in both arms against a national standard of 72 hours; time to diagnosis 44 against 46. Both null, tight intervals, adequately powered. Of 13,347 CT scans, 172 were same-day. **The step the AI accelerated was not the step that was slow.**

The null is interpretable because the same team had already run the adjacent experiment: in radioX, a radiographer reading the image immediately with direct triage to same-day CT halved time to diagnosis, 63 days to 32.

## Why this is the library's most important case so far

It is the first grade A case whose evidence comes from a **trial** rather than a regulator, a court, a prosecutor or an audited filing — and that broke P1's stated mechanism, which argued good evidence only exists where an adversary was in the room. P1's body is rewritten: grade A does not require an adversary, it requires somebody to fund a trial, and the one trial here came back null. That strengthens P1's headline while correcting its explanation.

P4 closed by saying the benefit "needs an experiment nobody has run." Somebody ran it. The benefit was measured to a confidence interval and there was none; the cost half is registered as the trial's seventh secondary outcome and remains unpublished. P4's closing paragraph now says so.

P3 gains its **first counter case** — the one deployment here that measured both halves properly and found them to move apart.

P1 still holds on the computed matrix: the grade A row is four negative, one unknown, zero positive.

## Editorial calls made, worth revisiting

- **The case declines the tempting reading.** A South West London trust reported time from X-ray to CT report falling 6.0 → 3.6 days after deploying AI triage; it is *not* treated as debunked by this trial. That trust changed its pathway at the same time, and LungIMPACT randomized the prioritization function alone. Different interventions. Saying otherwise would repeat exactly the confound the trial's authors warn about.
- **Both South West London papers are abstract-only** (RSNA and NEJM AI both 403 here). Every claim from them is labelled `Attributed`, and the figure that matters most is also reported inside LungIMPACT's discussion, which was read in full.
- **`outcome: negative`, not `mixed` or `inconclusive`.** Argued in the case: `inconclusive` would be wrong because the question was settled; `mixed` is arguable because report turnaround improved and there is a post hoc detection signal.
- **The pre-registration was checked, not assumed.** Retrieved through the ISRCTN XML API — the registry asks users not to scrape its pages and points there. The two primary outcomes reported are the two registered. Three discrepancies of scope surfaced (seven registered trusts vs five reported, enrolment target 150,000 vs 97,731 performed, recruitment start a fortnight earlier than registered) and are recorded rather than resolved, along with a site name that appears to be wrong in the paper.
- **The post hoc finding is reported and not adopted.** 53 cancers sat in the radiologist-normal/AI-abnormal group with a median 106 days to diagnosis. It hints that *detection* may have value even though *prioritization* does not. Not randomized; the authors call for evaluation rather than a rule, and so does the case.

## Candidate proposition, still needing a second case

016 and 017 suggest that **the quality of a record and the disinterest of its keeper trade against each other**. Still two halves of one observation. 021 is relevant but does not settle it: here a disinterested party measured superbly, which is the combination the candidate proposition says is rare — one more case like it would make the pattern arguable in the other direction.

## Still open from the synthesis work

- `conjecture` is defined and unused. Either a proposition earns it or the label should go.
- P1 leads the page; it could sit last or in the methodology.
- A case has no way to argue *against* a proposition it supports — the footer links one way only.

## Branch

Work is on `claude/optimistic-goodall-s4n0c4` — assigned per session, not the `claude/loving-ride-c4lddg` named in CLAUDE.md's git workflow, so read the session's own instruction first. PRs merge with rebase; the branch was restarted from `main` after PR #19 and carries only the 021 work.

## Next

Taxonomy gaps after 021: `deployment_stage` has no `prototype` and no `pilot`; `environment` has no `laboratory` and no `adversarial-test`; `business_function` has no `sales-marketing` and no `supply-chain`. `adversarial-test` carries a trap worth naming in advance — red-teaming and jailbreak evaluations are abundantly published but nearly always by the model's own vendor, which is the grade problem in 020 wearing different clothes. The better seam is a third party running the adversarial evaluation: a regulator, a standards body, or a procurement authority testing something it did not build.
