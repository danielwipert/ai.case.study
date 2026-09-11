---
case_id: AAI-YYYY-NNN
title: "Business-first case title"
summary: "One or two sentences naming the intervention or event, the operating context, and the observed result without overstating causality."
organization:
  - Organization
case_type: deployment
secondary_case_types: []
industry:
  - industry-slug
business_function:
  - function-slug
deployment_stage: unknown
outcome: unknown
evidence_grade: D
status: lead
created: YYYY-MM-DD
published:
last_verified:
next_review:
geography: []
environment: unknown
deployment_pattern: []
causal_strength: descriptive
related_cases: []
# One entry per material source. Roles: direct-evidence, primary-investigation,
# participant-account, independent-reporting, analysis, discovery.
# Give sources that trace back to the same original evidence the same source_family:
# under the triangulation rule they count as one evidentiary chain, not two.
sources:
  - id: short-key
    author: "Author or responsible organization"
    title: "Complete title"
    publisher: "Publisher or issuing body"
    published: YYYY-MM-DD
    url: "https://example.com/canonical-url"
    archive_url: "https://web.archive.org/..."
    accessed: YYYY-MM-DD
    roles:
      - independent-reporting
    source_family: shared-origin-key
    access: "What original evidence this source could inspect."
    conflicts: "Funding, commissioning, access constraint, or incentive. Write 'None disclosed.' when none."
    notes: "Anything a reader needs to weigh this source."
tags: []
---

## Case in one sentence

## Executive summary

## Research question

## Organization and operating context

## The situation before AI

## The AI intervention or event

## Outcomes and economics

Name the metric, baseline, time period, population, and source. Write “not disclosed” when it is not known.

## Causal assessment and competing explanations

## Failures, limitations, and governance

## What this case demonstrates

## What this case does not demonstrate

## Evidence assessment

State the evidence grade and explain it, including source access, conflicts, corroboration, and gaps.

## Material claims

| Claim | Evidence | Confidence |
| --- | --- | --- |
|  |  |  |

## Direct quotations

> Short, exact quotation whose wording materially helps the case.

— Speaker or author, context, [source](URL)

## Sources

Mirror the structured `sources` block in the front matter, one numbered entry per source.

1. Author or institution. “Title.” Publisher, YYYY-MM-DD. [Original](URL). Accessed YYYY-MM-DD. Role: primary record / independent analysis / independent reporting / subject statement / context.

## Revision notes

- YYYY-MM-DD — Initial record.
