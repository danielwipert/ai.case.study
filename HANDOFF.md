# Handoff

## Where things stand

Nineteen case records, eighteen published (004 is still an unpublished lead), plus the synthesis layer at `/propositions/` — seven propositions and three tensions. The site builds clean and deploys to https://danielwipert.github.io/ai.case.study/.

Merged: PR #16 (library-wide source review), PR #17 (synthesis layer). **Unmerged on this branch: four new cases, 016, 017, 018 and 019, and no PR is open for them.**

**The industry axis is complete** — all ten controlled values have at least one case — and **the `paused` gap asked for two sessions ago is now closed** by 019.

## The four new cases

**AAI-2026-016 — fabricated legal authority in court.** Grade B, `professional-services`, the library's first case with *no deploying organisation*: thousands of unconnected individuals using tools nobody procured, with the court system as an adversarial third party rather than the operator. Built on an openly licensed database of 2,042 decisions analysed from its CSV, plus two state supreme court decisions read in full. Three findings cut against the usual telling — self-represented litigants outnumber lawyers 1,172 to 806, a specific AI product is named in 11.3% of rows, and professional sanctions reach 19.0% of lawyers against 0.2% of the self-represented majority. `causal_strength: descriptive` is load-bearing: the case's finding is that the attribution everyone makes is unestablished in the record meant to support it.

**AAI-2026-017 — news integrity in AI assistants.** Grade B, `media`, and 016's mirror image: there a disinterested institution produced a huge record and measured nothing; here an interested one measured carefully. 22 public service broadcasters, 271 journalists, 2,709 rated responses, 45% with a significant issue. Carries the library's only genuine repeat measurement — a BBC-to-BBC rerun, 51% to 37% — presented as a direction of travel rather than an effect size. Held at B because every one of the 271 raters works for an organisation whose content was being cited, during an open dispute with the companies under test.

**AAI-2026-018 — Amsterdam's Smart Check welfare model.** Grade B, `public-sector`, `retired`, `causal_strength: associational`. A city that did nearly everything the responsible-AI literature asks for — algorithm register entry, bias audit, participatory council, a published reweighting — and still stopped the system. The circulating €535,000 cost figure was dropped: primary reporting gives roughly €500,000 plus €35,000 for Deloitte as a city estimate the city declined to stand behind.

**AAI-2026-019 — the Garante's DeepSeek limitation order.** Grade B, `technology`, the library's first `paused` deployment and first Italian case. A request for information on 28 January 2025, a reply on 29 January arguing the companies had not entered the Italian market and the GDPR did not apply, and an order on 30 January stopping processing of Italian users' data. Three days. Sources: the Provvedimento (doc. web 10098477) and press release (10097450), read in full in Italian and in the Authority's own English, plus Il Sole 24 Ore's same-day reporting — the only account in the record not written by the regulator, and the source of one fact the Authority's documents lack, that the app came down a day *before* the order while the website and installed apps kept working.

## What the synthesis layer did on its own

Adding the four cases moved `/propositions/` without anyone editing it: 8 industries to 10, 9 countries to 17, 8 deployment patterns to 9. P6 gained two cases (016, 019), P7 a third. The coverage warning fired on every new case until one cited it, which is what surfaced that 016 belongs under P6 at all.

**P1 still holds.** No grade A case reports a positive outcome. All four new cases are B.

## Editorial calls made, worth revisiting

- **019 is `paused`, not `retired`, although the order's own word is "definitiva".** Argued in the case rather than asserted: the measure was adopted *pending* an investigation that has still not concluded, further determinations were expressly reserved, judicial objection under Article 78 remains open, and nothing forecloses compliance and return. A reader who takes "definitive" at face value would file it `retired`, and that reading is on the page.
- **An anomaly in 019's primary document is recorded, not resolved.** An order dated 30 January 2025 describes the privacy policy it assessed as "aggiornata al 5 dicembre 2025" — in *both* language versions. Likeliest a typo for 2024; the case adopts neither date.
- **P7 stays `emerging` on three cases**, though the rules would allow `recurrent`. The three split across two phenomena — practitioner self-assessment (008) versus audience trust in an output (012, 017) — and nothing tests whether they share a mechanism.
- **016 is filed `deployment_stage: unknown`** deliberately, not as a placeholder. There is no deployment to stage.
- **017 is filed `business_function: research-development`** under protest. The taxonomy has no value for editorial or content work, which a media-heavy library will hit again.

## What 019 complicates in P6

P6 says liability attaches to the paperwork, not to the model, and 019 is its cleanest instance — every finding (English-only privacy policy, no stated lawful basis, storage in China disclosed by the policy itself, no EU representative, a questionnaire reply that failed to clarify the processing) is readable by someone with no access to the service. But it also cuts against the easy reading of P6 as a story about neglect: DeepSeek *did* answer, within a day, and the answer was itself found to be a breach of Article 31. P6's `limits` now says so.

## Candidate proposition, needing a second case

016 and 017 together suggest something neither says alone: **the quality of a record and the disinterest of its keeper trade against each other.** Courts are disinterested and record no measurement; publishers measure well and own the outcome. That is two cases, enough for `emerging` — but they are two halves of one observation rather than two instances, so it is left unwritten. A third case where a genuinely disinterested party measured well would settle it. 019 is *not* that case: the Garante is disinterested in the commercial sense and measured nothing at all.

## Still open from the synthesis work

- `conjecture` is defined and unused. Either a proposition earns it or the label should go.
- P1 leads the page; it could sit last or in the methodology.
- A case has no way to argue *against* a proposition it supports — the footer links one way only.

## Branch

Work is on `claude/optimistic-goodall-s4n0c4` — assigned per session, not the `claude/loving-ride-c4lddg` named in CLAUDE.md's git workflow, so read the session's own instruction first. Five commits ahead of `main`, no PR open. PRs merge with rebase, so restart the branch from `main` after every merge.

## Next

Remaining taxonomy gaps, recomputed after 019: `deployment_stage` has no `prototype` and no `pilot`; `environment` has no `laboratory`, `shadow-mode` or `adversarial-test` case (16 of 18 published cases are `production`); `business_function` has no `sales-marketing` and no `supply-chain`. `environment` is now the thinnest axis in the library and the most interesting — a case measured in shadow mode before rollout would be the first record here of a deployment decision made on evidence rather than after the fact.
