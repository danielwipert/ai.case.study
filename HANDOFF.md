# Session handoff

**This file is a snapshot, not a log.** Replace it wholesale at the end of every session, keep it to about a page, and delete anything the next session does not need. Durable rules belong in `CLAUDE.md`, not here.

*Last updated: 2026-09-13*

## Where the library stands

Live at <https://danielwipert.github.io/ai.case.study/> — ten published cases and one unpublished lead.

| ID | Subject | Type | Grade |
| --- | --- | --- | --- |
| AAI-2026-001 | OpenAI evaluation agents breached Hugging Face | failure-incident | A |
| AAI-2026-002 | Customer-support copilot productivity | economic-case | B |
| AAI-2026-003 | Uber's AI coding budget overrun | economic-case | C |
| AAI-2026-004 | Microsoft pulls internal Claude Code licences | — | `research` lead, off-site |
| AAI-2026-005 | Workday bias-testing data held privileged | governance-regulatory | B |
| AAI-2026-006 | Pediatric sepsis model against vendor claims | evaluation | B |
| AAI-2026-007 | Klarna's AI workforce reduction | organizational-transformation | B |
| AAI-2026-008 | METR's randomized trial on experienced developers | evaluation | B |
| AAI-2026-009 | DUO's student-grant fraud risk profile | failure-incident | A |
| AAI-2026-010 | Cruise robotaxi disclosure failure | failure-incident | A |
| AAI-2026-011 | Korea orders an AI model destroyed | governance-regulatory | B |
| AAI-2026-012 | GOV.UK Chat, two and a half years of pilots | deployment | C |
| AAI-2026-013 | Seagate's sputter-station leak detector | deployment | C |
| AAI-2026-014 | Rite Aid facial recognition, FTC action | failure-incident | B |

All six case types, all four causal-strength labels, all six claim labels, every `deployment_pattern`, and every `outcome` are now in use. Grade D is unused by rule — it is never published.

## What this session added

- **008 (METR)** — 16 experienced maintainers, 19% slower with AI, and certain they were 20% faster; METR abandoned the design in Feb 2026 when developers refused a no-AI arm. First `causal` case.
- **009 (DUO)** — eleven years of Dutch student-grant fraud checks driven by age, education type, and distance to the parental address; 3.0x unjustified home visits for students with a non-European migration background; €80m redress. First public-sector case.
- **010 (Cruise)** — a robotaxi dragged a pedestrian twenty feet and the company briefed three regulators without saying so; ~$2.1m in penalties against ~$2.8bn in charges and wind-down. First `physical-system` case.
- **011 (PIPC)** — Korea fined Kakao Pay and Apple over five years of daily cross-border transfers and ordered Alipay to destroy the scoring model built from them. First case in Asia.
- **012 (GOV.UK Chat)** — a deployment that simply ran: 10,000+ users across two pilots, self-assessed accuracy from 76% to 90%, satisfaction flat at 64%. Graded C because every figure is the building team's own and nobody outside has checked one. First `deployment` case, and the one that closes the case-type set.
- **013 (Seagate)** — an unsupervised leak detector across thousands of vacuum stations; 15 of 16 leaks caught, false-alarm rate never published. First `manufacturing` case. Its evidence assessment records that this was the best-evidenced manufacturing deployment findable at all, which should colour how the next session reads manufacturing AI claims.
- **014 (Rite Aid)** — eight years of in-store facial recognition with no false-positive tracking, per the FTC; settled with a five-year ban and no admission. First `retail` case, and the first built on an untested pleading, so every conduct claim is `Attributed` and the case carries a status note saying so above the executive summary. NIST's FRVT Part 3 is the second chain and is used carefully: it supports demographic differentials in general and contradicts the uniform version, recorded as `Disputed`.
- **`CLAUDE.md` gained six durable sections** across two sittings: European and non-EU regulator reachability (the Dutch DPA and Korea's PIPC both need special handling), how to read PDFs here, how to work SEC filings, CDN-hosted company reports, and the blockquote rule for non-English quotations.

## Open items

1. **Archive snapshots.** Every source in all eleven cases reports a missing `archive_url`; archive.org is unreachable from the sandbox. Unchanged and now much larger — this is the one gap a browser fixes in an evening.
2. **AAI-2026-004 is blocked** until The Verge's report is readable or someone speaks on the record.
3. **Three cases lean on relays for a decisive document.** 009's April 2026 compensation letter, 010's NHTSA consent order and deferred prosecution agreement, and 011's Seoul Administrative Court judgment were all unreachable. Each is flagged in its own case and each would move claims from Supported to Verified.
4. **011's headline remedy is unverified.** Nothing establishes that the ordered model destruction happened. Worth a re-check at the next review date.
5. **Editorial calls worth revisiting:** grade C on 003; `associational` on 006; `descriptive` plus B on 007; B on 008 despite an exceptional design; `plausibly-causal` on 009; `descriptive` on 010; `deployment_stage: unknown` on 011.

## Suggested next step

The controlled vocabulary is now almost fully exercised, so gaps are about subject matter rather than tags:

- **`media`, `energy-utilities`, `professional-services`, `supply-chain`, and `sales-marketing` remain unused.** Two sessions of searching have established the pattern: industry-specific AI evidence is overwhelmingly vendor material, and the usable cases come from regulators, courts, standards bodies, or SEC filings rather than from the industry itself. Look there first for energy and professional services.
- **`shadow-mode` and `adversarial-test` environments** are unused and both would be informative: a model run silently against production before go-live, or one deliberately attacked. AAI-2026-006 mentions silent-mode running in passing; a case centred on it would be better.
- **Geography** spans ten entries with nothing in Africa, Latin America, South Asia, or China.
- Still no case where **governance worked before deployment** — an impact assessment that stopped or reshaped a rollout. Hardest to find, most useful if found. AAI-2026-012 is the closest the library has, and it is a team publishing its own homework rather than an external control that bit.
- **A grade A economic case** would test the library's weakest spot: the three economic cases are B, C, and C, and no case anywhere has a verified cost figure attached to a verified benefit.
- **A pattern now worth writing up in `docs/`.** Four cases — 006, 013, 014, and arguably 012 — turn on the same omission: an organisation publishing or knowing one side of its error rate and not the other. That recurrence is a finding about the field, not a coincidence of case selection, and the methodology doc has no place that says so.
