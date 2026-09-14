---
proposition_id: P5
statement: "A human in the loop is a control only if someone measures the human"
scope: deployment
strength: recurrent
supporting_cases:
  - AAI-2026-009
  - AAI-2026-006
  - AAI-2026-014
counter_cases:
  - AAI-2026-013
operator_takeaway: "\"Human in the loop\" describes an org chart, not a safeguard. The safeguard is the measurement of what the human does with the output: override rate, agreement by subgroup, and how often the output reaches a human at all."
falsifier: "A deployment where unmeasured human review demonstrably caught model errors at scale. The counter-case here is suggestive but self-reported and grade C."
limits: "All three supporting cases are ones where something went wrong, so the reviewer's failure is what got investigated. Deployments where review works quietly would not enter this library at all, which is P1 operating on P5."
order: 5
created: 2026-09-14
last_reviewed: 2026-09-14
---

Dutch officials reviewing students the algorithm had scored identically selected those with a non-European migration background 5.5 times as often. The reviewer amplified the model rather than checking it, and nobody measured that for eleven years.

Rite Aid's staff were handed a match alert with no confidence estimate, no training in how the system worked, and an instruction to act on it. In the sepsis deployment the human never entered the loop at all: workflow exclusions suppressed the alert in roughly four cases out of five before anyone saw it, which is why the delivered sensitivity was 18% against a vendor-reported 91%.

The counter-case matters as much as the three. A factory leak detector emails a probability and its supporting evidence to an engineer, who walks to the machine and physically checks; nothing on the line is actuated automatically. That arrangement holds — and what makes it hold is not that a human is present but that the human's job is defined, bounded, and verifiable against the physical world.
