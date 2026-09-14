---
proposition_id: P7
statement: "Self-assessment of an AI system's effect can be wrong in sign, not merely in size"
scope: deployment
strength: emerging
supporting_cases:
  - AAI-2026-008
  - AAI-2026-012
  - AAI-2026-017
counter_cases: []
operator_takeaway: "A satisfaction survey about an AI tool measures how the tool feels, which the evidence here says is uncorrelated with — and can be opposite to — what it does. A deployment decision resting on user sentiment rests on nothing."
falsifier: "A measured deployment where practitioner self-report tracked the measured effect. The trial's own authors believe the gap has narrowed since 2025 and describe their evidence for that as very weak."
limits: "Held at emerging on three cases rather than promoted, because the three are not quite the same phenomenon. One measures practitioners assessing their own performance; two measure audiences trusting an output. Those may share a mechanism or may not, and nothing here tests whether they do. The strongest of the three is also a narrow sample — sixteen developers in mature repositories they maintain, a population its own authors decline to generalise from."
order: 7
created: 2026-09-14
last_reviewed: 2026-09-14
---

In the only randomized trial in this library, experienced maintainers working on their own repositories were 19% slower with AI assistance and believed they had been 20% faster. That is an error of direction, not magnitude, held by people with direct hands-on experience of the tool during the task being measured.

Expert forecasting did worse. Economists and machine-learning researchers predicted speedups of roughly 38 to 39% for the same trial.

The government chatbot shows the same gap from the user's side: people discounted explicit inaccuracy warnings because the answers carried the GOV.UK brand, and the team recorded the finding and published it. Fourteen points of measured accuracy later, satisfaction had not moved.

The pattern recurs where the measurement is most careful. Twenty-two public service broadcasters had 271 journalists rate more than 2,700 AI assistant answers about the news and found a significant issue in 45% of them; the same report cites separate research finding that just over a third of UK adults completely trust AI to produce accurate summaries, rising to almost half of under-35s. Measured error and reported confidence point in opposite directions in the same document.

What belief tracks, in all of them, is fluency — the system's outputs are well-formed, arrive quickly, and look like the thing that was asked for. None of those properties is the effect.
