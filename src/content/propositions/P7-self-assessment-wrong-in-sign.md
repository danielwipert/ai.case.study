---
proposition_id: P7
statement: "Self-assessment of an AI system's effect can be wrong in sign, not merely in size"
scope: deployment
strength: emerging
supporting_cases:
  - AAI-2026-008
  - AAI-2026-012
counter_cases: []
operator_takeaway: "A satisfaction survey about an AI tool measures how the tool feels, which the evidence here says is uncorrelated with — and can be opposite to — what it does. A deployment decision resting on user sentiment rests on nothing."
falsifier: "A measured deployment where practitioner self-report tracked the measured effect. The trial's own authors believe the gap has narrowed since 2025 and describe their evidence for that as very weak."
limits: "Two cases, one setting each, and the strong one is a narrow sample: sixteen developers working in mature repositories they maintain, a population its own authors decline to generalise from. Unlikely to move without a replication."
order: 7
created: 2026-09-14
last_reviewed: 2026-09-14
---

In the only randomized trial in this library, experienced maintainers working on their own repositories were 19% slower with AI assistance and believed they had been 20% faster. That is an error of direction, not magnitude, held by people with direct hands-on experience of the tool during the task being measured.

Expert forecasting did worse. Economists and machine-learning researchers predicted speedups of roughly 38 to 39% for the same trial.

The government chatbot shows the same gap from the user's side: people discounted explicit inaccuracy warnings because the answers carried the GOV.UK brand, and the team recorded the finding and published it. Fourteen points of measured accuracy later, satisfaction had not moved.

What belief tracks, in both, is fluency — the system's outputs are well-formed, arrive quickly, and look like the thing that was asked for. None of those properties is the effect.
