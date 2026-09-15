---
proposition_id: P3
statement: "Organisations measure the proxy they can move, not the outcome they meant"
scope: deployment
strength: recurrent
supporting_cases:
  - AAI-2026-002
  - AAI-2026-006
  - AAI-2026-003
  - AAI-2026-012
  - AAI-2026-015
  - AAI-2026-020
counter_cases: []
operator_takeaway: "Write down the outcome before choosing the proxy, and put a date on when the outcome will be measured. A proxy that improves while its outcome is never checked is indistinguishable from one that does not work."
falsifier: "A deployment that measured its outcome and let the proxy go unmeasured, or one that measured both and found them to move together."
limits: "Four of the six supporting cases are grade C, and in two of them the proxy genuinely improved by a large margin. The proposition is about what was left unmeasured and should not be read as saying the proxies were worthless. The dialysis case also shows the pattern is not only about what an organisation measures but about which measurements survive the journey to an audience: the staffing estimate was public eight months before the accuracy figure, and it is the accuracy figure that reached peer review."
order: 3
created: 2026-09-14
last_reviewed: 2026-09-15
---

A national grid operator cut its solar forecasting error by two thirds and never measured the balancing cost the forecast existed to reduce, converting it instead through a planning rule of thumb. A government chatbot raised its self-assessed accuracy from 76% to 90% and moved user satisfaction not at all. A sepsis alert improved time to antibiotics while mortality, ICU admission and ICU-free days stayed flat and underpowered. A support copilot measured resolutions per hour; the randomized replication that followed it measured customer retrials too, and found those unmoved.

A seven-day forecast of urgent dialysis demand was run live twice at four Toronto hospitals and measured on one quantity only — mean absolute error in procedures per day. Nurse hours, backfill decisions, overtime and cost were the reason the forecast existed and none of them was measured; the paper closes by saying whether the model would save anything is an open question. The staffing estimate that did exist survives only in a trade-press report of a conference talk given eight months before publication.

In each, the measured quantity was the tractable one and the quantity that justified the spend went unmeasured. The pattern is not dishonesty. It is that proxies are cheap, immediate and attributable, while outcomes are slow, confounded and owned by somebody else in the organisation.

The failure mode it produces is specific: a deployment can report a real, large, correctly measured improvement and still have no evidence that it did the thing it was bought to do.
