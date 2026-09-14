---
proposition_id: P2
statement: "One half of the error rate is missing, and it is always the flattering half"
scope: deployment
strength: recurrent
supporting_cases:
  - AAI-2026-006
  - AAI-2026-013
  - AAI-2026-014
counter_cases: []
operator_takeaway: "Before accepting a performance number, from a vendor or from your own team, name the metric that is missing and ask who bears its cost. If nobody can produce it, you are not looking at a measured system."
falsifier: "A case that publishes precision and withholds recall — the omission running the other way. None has appeared yet, which is itself the point."
limits: "Three cases, one of them grade C. It holds on the strength of the sectors being unrelated rather than on the count, and the methodology note treats the underlying measurement problem at greater length."
order: 2
created: 2026-09-14
last_reviewed: 2026-09-14
---

Three deployments in three unrelated sectors published the side of their error rate that made them look effective and omitted the side that carried the cost.

A children's hospital reported that its vendor-built sepsis model caught a given share of cases and could not report the positive predictive value, because the vendor had never published one. A disk-drive factory reported catching fifteen leaks out of sixteen and never counted the false alarms. A pharmacy chain ran face matching across hundreds of stores for eight years and counted nothing at all — which is the same omission with the measurement apparatus removed.

The direction is consistent. Recall flatters a detector; precision is what its false positives cost somebody else. In all three the published number was the one that described the system's successes, and the missing number was the one that would have described what it did to the people it was wrong about.
