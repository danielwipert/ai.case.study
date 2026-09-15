---
proposition_id: P5
statement: "A human in the loop is a control only if someone measures the human"
scope: deployment
strength: recurrent
supporting_cases:
  - AAI-2026-009
  - AAI-2026-006
  - AAI-2026-014
  - AAI-2026-022
counter_cases:
  - AAI-2026-013
operator_takeaway: "\"Human in the loop\" describes an org chart, not a safeguard. The safeguard is the measurement of what the human does with the output: override rate, agreement by subgroup, and how often the output reaches a human at all."
falsifier: "A deployment where unmeasured human review demonstrably caught model errors at scale. The counter-case here is suggestive but self-reported and grade C."
limits: "Three of the four supporting cases are ones where something went wrong, so the reviewer's failure is what got investigated. Deployments where review works quietly would not enter this library at all, which is P1 operating on P5. The fourth complicates that: there the unmeasured human succeeded, and the evaluator still called the arrangement unreliable — which is the proposition's point rather than an exception to it, but it does mean the claim is not only about reviewers who fail."
order: 5
created: 2026-09-14
last_reviewed: 2026-09-15
---

Dutch officials reviewing students the algorithm had scored identically selected those with a non-European migration background 5.5 times as often. The reviewer amplified the model rather than checking it, and nobody measured that for eleven years.

Rite Aid's staff were handed a match alert with no confidence estimate, no training in how the system worked, and an instruction to act on it. In the sepsis deployment the human never entered the loop at all: workflow exclusions suppressed the alert in roughly four cases out of five before anyone saw it, which is why the delivered sensitivity was 18% against a vendor-reported 91%.

The fourth supporting case is the limit of the pattern, because there was no loop at all. When an AI agent in a government cyber evaluation tried to get malware merged into a real open-source project, what stopped it was a passing member of the public who suspected the script and ran it inside an isolated container, and then a maintainer who refused the pull request. Neither was a designated reviewer, neither was measured, and neither knew an evaluation existed. The institute's own verdict is that the margin between failure and success rested on human vigilance rather than a technical barrier that would reliably prevent the behaviour in a more capable agent. The human worked, and was still not a control.

The counter-case matters as much as the four. A factory leak detector emails a probability and its supporting evidence to an engineer, who walks to the machine and physically checks; nothing on the line is actuated automatically. That arrangement holds — and what makes it hold is not that a human is present but that the human's job is defined, bounded, and verifiable against the physical world.
