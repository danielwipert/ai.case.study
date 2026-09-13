---
case_id: AAI-2026-003
title: "Uber spent its year of AI coding budget by April"
summary: "Uber encouraged engineers to use agentic coding tools as much as possible and ranked teams on internal leaderboards, then exhausted its annual AI budget about four months into 2026 and imposed a monthly per-engineer spending cap."
organization:
  - Uber
case_type: economic-case
secondary_case_types:
  - deployment
industry:
  - technology
  - transportation-logistics
business_function:
  - software-engineering
  - finance
deployment_stage: scaled-production
outcome: mixed
evidence_grade: C
status: published
created: 2026-09-12
published: 2026-09-12
last_verified: 2026-09-12
next_review: 2027-03-12
geography:
  - United States
environment: production
deployment_pattern:
  - employee-copilot
  - agentic-workflow
causal_strength: descriptive
related_cases:
  - AAI-2026-002
evidence_upgrade_path: "Grade B needs a source closer to the evidence than a relay. One step was taken in the September 2026 review: a second relay quotes Bloomberg's report verbatim, which establishes that an Uber spokesperson confirmed the cap to Bloomberg rather than it being leaked. What is still needed is the originals themselves — The Information's report of the chief technology officer's April remarks and Bloomberg's June report, both paywalled — an internal policy document, a recording or transcript of the chief operating officer's podcast remarks, or a filing that discloses AI tool spending. Measured output data from Uber's engineering organisation would let the case say whether the spending bought anything, which it currently cannot."
sources:
  - id: techcrunch
    author: "Lucas Ropek"
    title: "Uber caps employee AI spending after blowing through budget in 4 months"
    publisher: TechCrunch
    published: 2026-06-02
    url: "https://techcrunch.com/2026/06/02/uber-caps-employee-ai-spending-after-blowing-through-budget-in-four-months/"
    accessed: 2026-09-12
    roles:
      - independent-reporting
    source_family: uber-ai-spend-reporting
    access: "No original access to Uber. The item is a short brief that gathers and attributes reporting by Bloomberg on the spending cap and by The Information on the budget overrun and internal leaderboards, plus the chief operating officer's public podcast remarks."
    method: "Newsroom aggregation with named attribution to each upstream outlet. It does not claim independent confirmation of the figures."
    conflicts: "None disclosed."
    corroboration: "Attributes its central facts to two separate original reports, neither of which could be read for this review. Fortune covered the same executive remarks independently."
    accountability: "Named staff writer at a newsroom with a corrections policy, dated and topic-tagged."
    notes: "The only readable account of this story for this review. The originals it relies on — The Information's report of the chief technology officer's April remarks and Bloomberg's report of the June spending cap — are paywalled and were unreachable from this environment."
  - id: willison-relay
    author: "Simon Willison"
    title: "Uber Caps Usage of AI Tools Like Claude Code to Manage Costs"
    publisher: "Simon Willison's Weblog"
    published: 2026-06-03
    url: "https://simonwillison.net/2026/Jun/3/uber-caps-usage/"
    accessed: 2026-09-13
    roles:
      - independent-reporting
    source_family: bloomberg-cap-report
    access: "No access to Uber. What it has that the other relay does not is the original's own words: it block-quotes Natalie Lung's Bloomberg report rather than paraphrasing it, including the sentence attributing the figure to an Uber spokesperson responding to a Bloomberg inquiry."
    method: "A link post by a named individual, quoting the source it links to and marking clearly where the quotation ends and the author's own commentary begins. The commentary — an arithmetic extrapolation to an annual per-engineer cap and a comparison to median compensation — is the author's own and is not relied on here."
    conflicts: "An individual writer with a professional and commercial interest in AI coding tools, whose site carries sponsorship. Against that, the material used here is a verbatim quotation of somebody else's reporting, which leaves little room for framing."
    corroboration: "Its quotation of Bloomberg agrees on every point with TechCrunch's independent paraphrase of the same report — the $1,500 figure, the monthly period, the per-tool basis, and the restriction to agentic coding software."
    accountability: "A named author with a long public record, a dated post, the original linked, and the quoted passage set off from the commentary."
    notes: "A second relay of the same Bloomberg original, not a second chain — which is why it shares the `bloomberg-cap-report` family with nothing else and adds no triangulation. It is in this record for two things it carries that the first relay does not: the original's wording, and the fact that Uber confirmed the cap on the record rather than it emerging through a leak. It also records the limits as 'instituted in recent months' as of 3 June, where this case had described them as beginning in June."
  - id: uber10q
    author: "Uber Technologies, Inc."
    title: "Quarterly report on Form 10-Q for the quarterly period ended June 30, 2026"
    publisher: "United States Securities and Exchange Commission"
    published: 2026-08-05
    url: "https://www.sec.gov/Archives/edgar/data/1543151/000154315126000032/uber-20260630.htm"
    accessed: 2026-09-12
    roles:
      - direct-evidence
    source_family: uber-sec-filings
    access: "Uber's own audited-basis financial statements and risk disclosures, filed under penalty of federal securities law."
    method: "Condensed consolidated statements of operations prepared under US GAAP, reviewed by the company's auditors and filed with the SEC."
    conflicts: "Written by the company about itself, within a disclosure framework that constrains what it may omit but does not require line-item detail on software tooling."
    corroboration: "Independent of the press chain entirely. It anchors the scale of Uber's research and development spending but neither confirms nor contradicts the budget account."
    accountability: "A filed regulatory record with a fixed accession number, subject to restatement rules and SEC enforcement."
    notes: "Read for this case. Research and development expense was $1,043 million for the quarter and $1,994 million for the six months ended 2026-06-30, against $840 million and $1,655 million a year earlier. AI appears only in the risk factors; no line item discloses AI tool spending."
  - id: uber10k
    author: "Uber Technologies, Inc."
    title: "Annual report on Form 10-K for the fiscal year ended December 31, 2025"
    publisher: "United States Securities and Exchange Commission"
    published: 2026-02-13
    url: "https://www.sec.gov/Archives/edgar/data/1543151/000154315126000015/uber-20251231.htm"
    accessed: 2026-09-12
    roles:
      - direct-evidence
    source_family: uber-sec-filings
    access: "Uber's full-year financial statements and risk disclosures for the year preceding the events."
    method: "Consolidated statements of operations prepared under US GAAP and audited."
    conflicts: "Same self-reporting constraint as the quarterly filing."
    corroboration: "Independent of the press chain. Establishes the prior-year baseline against which 2026 spending can be read."
    accountability: "A filed regulatory record subject to restatement rules and SEC enforcement."
    notes: "Read for this case. Research and development expense was $3,402 million for 2025, against $3,109 million in 2024 and $3,164 million in 2023."
tags:
  - ai-coding-tools
  - cost-governance
  - developer-tools
  - roi
  - token-spend
---

## Case in one sentence

Uber told its engineers to use agentic coding tools as much as possible and ranked teams on internal leaderboards, then exhausted its annual AI budget roughly four months into 2026 and answered with a monthly per-engineer spending cap.

## Executive summary

Uber's engineering organisation adopted Anthropic's Claude Code and similar agentic coding tools faster than its own financial model anticipated. According to its chief technology officer, Praveen Neppalli Naga, speaking in April and reported by The Information, the company's full-year 2026 AI budget was gone within about four months.[^techcrunch] Reporting attributes the surge partly to Uber's own encouragement: staff were urged to use the tools heavily, and internal leaderboards ranked teams by usage.[^techcrunch]

In June, Bloomberg reported that Uber had imposed a cap of $1,500 per employee per month for each agentic coding tool, including Claude Code and Cursor, tracked on a dashboard each employee can see and exceedable with permission.[^techcrunch] Bloomberg attributes the figure to an Uber spokesperson responding to its inquiry, so the cap is the company's own account of its own policy rather than a leak — a fact that reaches this case through a second relay quoting Bloomberg's words directly.[^willison-relay] That quotation also dates the limits as having been "instituted in recent months" as of 3 June, which is earlier than the June start this case originally described.[^willison-relay]

The company's chief operating officer, Andrew Macdonald, separately cast doubt on what the spending had produced, saying on a podcast that it is very hard to draw a line between the tools' use and new features reaching consumers.[^techcrunch]

None of this appears in Uber's financial statements. Research and development expense rose about 20% year over year in the first half of 2026, to $1,994 million from $1,655 million, against a 2025 full-year total of $3,402 million — but no line item discloses AI tool spending, and AI appears in the filings only as a risk factor.[^uber10q][^uber10k] An overrun large enough to make headlines is invisible in the only numbers the company publishes.

## Research question

What happens to costs and governance when an organisation encourages maximal use of metered, agentic AI tools before it can measure what they produce?

## Organization and operating context

Uber runs a large engineering organisation against a research and development budget that was $3,402 million in 2025, up from $3,109 million in 2024.[^uber10k] In the first half of 2026 that line reached $1,994 million, a rise of about 20% on the same period a year earlier.[^uber10q] Research and development at Uber consists primarily of compensation; tooling is a small component of a large number, which is part of why a tooling overrun can be severe internally and invisible externally.

Agentic coding tools differ from the per-seat software that engineering organisations are used to budgeting for. They are metered by consumption, and a single engineer running long autonomous sessions can spend a multiple of a colleague's bill in the same week.

## The situation before AI

Before the shift, the relevant costs were licences and salaries: largely fixed, forecastable a year ahead, and insensitive to how enthusiastically any individual used a tool. A budget built on that shape assumes that adoption raises value but not unit cost.

Uber's encouragement of heavy use was rational under that assumption and dangerous under the actual one. Reporting describes staff being urged to use AI as much as possible, with internal leaderboards ranking teams by total usage.[^techcrunch] A leaderboard measures consumption, not output, and consumption was the metered quantity.

## The AI intervention or event

Uber rolled agentic coding tools out across its engineering organisation, with Claude Code prominent among them. Reported per-engineer costs ran into the hundreds and in cases thousands of dollars a month, and the annual budget was consumed in roughly four months — a fact the chief technology officer disclosed publicly in April rather than one that surfaced through a leak.[^techcrunch]

The response was a control rather than a withdrawal. By early June, spending was capped at $1,500 per employee per month for each agentic tool, visible to each employee on a dashboard and exceedable with permission;[^techcrunch] Bloomberg's own wording puts the limits as instituted over the preceding months rather than starting in June.[^willison-relay] Reporting also describes technical mitigations — prompt caching, changed default models, and usage dashboards — though this review could not read those accounts directly.

## Outcomes and economics

The documented outcome is a cost event and a governance response. What is missing is the other half of the ledger: no public evidence establishes what the spending produced. Uber has not published output measures for the period, and its chief operating officer's public position is that the link to consumer-visible features is not yet drawable.[^techcrunch]

The filings confirm scale but not attribution. Research and development rose about $339 million year over year in the first half of 2026, and Uber's disclosures do not break out AI tooling, so no part of that increase can responsibly be assigned to these tools.[^uber10q] Anyone who quotes a figure for what Uber's AI coding tools cost, or saved, is going beyond the public record.

## Causal assessment and competing explanations

This case is descriptive. It records a sequence — encouragement, adoption, overrun, cap — reported by named journalists and partly confirmed by an executive speaking on the record. It does not isolate a cause.

Several explanations are compatible with the same facts. The budget may have been set with no realistic model of metered agentic usage, in which case the overrun says more about forecasting than about the tools. The leaderboards may have driven consumption directly, as the reporting implies, or may merely have accompanied genuine demand. The spend may reflect real work being done faster, real work being done wastefully, or exploratory use that was valuable precisely because it was uneconomic. Nothing in the public record separates these.

The spending cap is likewise not evidence of a verdict. A firm that expected a return could still cap per-seat spend to force prioritisation.

## Failures, limitations, and governance

- **Incentive design:** Ranking teams by usage of a metered tool rewards consumption, which is the cost, rather than output, which is the point.
- **Budgeting model:** An annual budget sized for per-seat software does not survive contact with consumption-based agents.
- **Measurement gap:** The organisation could see spend in fine detail and could not, by its own chief operating officer's account, see the product benefit.
- **Disclosure:** The overrun is a material operating story that leaves no trace in the company's public filings, so shareholders and observers depend on press reporting for it.
- **Evidence access:** The two original reports that carry this story sit behind paywalls, and the company has not published its own account.

## What this case demonstrates

1. Metered agentic tools convert a fixed cost line into a variable one, and budgets written before that shift will break rather than bend.
2. Adoption incentives should be tied to the quantity an organisation wants more of, not the quantity it pays for.
3. Cost telemetry arrives long before value telemetry: Uber could report per-engineer spend to the dollar while its chief operating officer could not draw a line to a shipped feature.
4. A per-seat cap with an exception process is a fast governance answer that preserves optionality, and it substitutes a spending limit for the measurement that is actually missing.
5. Operating stories of this size can be entirely absent from financial disclosure, which is worth remembering before treating filings as a complete record of an organisation's AI exposure.

## What this case does not demonstrate

- It does not show that Uber's AI coding tools failed to deliver value; no output measurement is public either way.
- It does not establish the absolute size of the overrun, the original budget, or the post-cap spend.
- It does not show that the leaderboards caused the overrun, only that reporting places them alongside it.
- It does not establish that any part of Uber's rising research and development expense is attributable to these tools.
- It does not tell us whether other firms using the same tools are seeing the same cost shape.

## Evidence assessment

**Grade C — credible but attributed.** The central claims of this case rest on reporting this review could not inspect. The account of the overrun originates with The Information, the spending cap with Bloomberg, and the chief operating officer's remarks were also covered by Fortune; all three were paywalled or otherwise unreachable from the environment used for this review. What could be read is TechCrunch's brief, which gathers those reports and attributes each one clearly, by a named staff writer at a newsroom with a corrections policy.[^techcrunch] That is a relay, not corroboration: under the triangulation rule, an outlet repeating two original reports does not turn them into three.

A second relay was added in September 2026 and the same rule applies to it: two outlets repeating one Bloomberg report is still one report. It earns its place for a narrower reason. It block-quotes Bloomberg rather than paraphrasing, and the quoted passage contains something the paraphrase does not — that the $1,500 figure came from an Uber spokesperson answering a Bloomberg inquiry.[^willison-relay] That moves the cap claim from `Attributed` to `Supported`: not because a second outlet said it, but because the original, read in its own words, shows the company confirming it. The grade stays at C, because the overrun itself — the claim the case is named for — still rests on an unread report of remarks this review could not hear. Calling the case B on the strength of a confirmed number about the *response* would be grading the wrong claim.

Two things raise this above a bare rumour. The chief technology officer disclosed the overrun publicly and on the record rather than it emerging through a leak, and the chief operating officer's doubt was expressed in a public appearance. Neither was sourced anonymously.

Against that, Uber has published no account of its own, the figures cannot be checked against any document, and the SEC filings read for this case — which are genuinely primary and independent of the press chain — anchor the scale of Uber's research and development spending without confirming a single claim about AI tooling.[^uber10q][^uber10k] The library publishes a Grade C record only when attribution and limitation are themselves part of what the case teaches. That is the situation here: this is a well-attributed press account of an internal cost event, and it should be read as exactly that.

## Material claims

Each claim carries a controlled label, the evidence behind it, and what would change the label.

| Claim | Label | Evidence | What would change this |
| --- | --- | --- | --- |
| Uber exhausted its full-year 2026 AI budget about four months into the year. | Attributed | Uber's chief technology officer said so in April, reported by The Information and relayed with attribution[^techcrunch] | The original report, an Uber statement, or any document showing the budget and the spend |
| Uber capped spending at $1,500 per employee per month for each agentic coding tool. | Supported | Bloomberg's reporting, which attributes the figure to an Uber spokesperson answering a Bloomberg inquiry — quoted verbatim in a second relay and paraphrased consistently in the first[^techcrunch][^willison-relay] | Bloomberg's original read directly, an internal policy document, or an Uber statement revising the figure |
| The cap began in June 2026. | Disputed | This case originally said so on the first relay's framing; Bloomberg's own wording on 3 June is that the limits "have been instituted in recent months"[^willison-relay] | A dated internal policy document, or Bloomberg's original giving a start date |
| Uber encouraged heavy AI use and ranked teams by usage on internal leaderboards. | Attributed | The Information's reporting, relayed with attribution[^techcrunch] | The original report, or an internal communication showing the programme's design |
| Uber's chief operating officer publicly doubted the link between AI use and consumer-visible features. | Attributed | Public podcast remarks reported by TechCrunch[^techcrunch] and covered separately by Fortune | A recording or transcript, or a later statement revising the position |
| Uber's research and development expense rose about 20% year over year in the first half of 2026. | Verified | $1,994 million against $1,655 million in the Form 10-Q[^uber10q] | A restatement of the filing |
| Uber's public filings do not separately disclose AI tool spending. | Verified | Reviewed the Form 10-Q and Form 10-K: AI appears in risk factors only, with no line item[^uber10q][^uber10k] | A future filing that breaks the spending out |
| The tools failed to return their cost. | Unknown | No public output measurement exists; the chief operating officer's doubt is a statement, not a measurement | Disclosure of measured engineering output, or an internal return-on-investment study |
| The cap reduced total spending. | Unknown | No post-cap spending figures have been published | Later reporting or disclosure covering the period after June 2026 |

## Direct quotations

> “it’s very hard to draw a line”

— Andrew Macdonald, Uber chief operating officer, on the connection between AI usage and new consumer features, speaking on a podcast as reported by TechCrunch[^techcrunch] · locator: paragraph 4

## Revision notes

- 2026-09-13 — Source review. The originals remain unreachable, and this case is still a relay case. One thing improved and one error surfaced. A second relay was found that block-quotes Bloomberg's report rather than paraphrasing it, and the quoted passage attributes the $1,500 figure to an Uber spokesperson answering a Bloomberg inquiry — so the cap is the company's own account of its own policy, not a leak. That claim moves from `Attributed` to `Supported`; the grade stays at C, because the overrun the case is named for still rests on an unread report of unheard remarks, and grading the case on the confirmed number would be grading the wrong claim. That is an editor's judgment and is flagged as one. The error: Bloomberg's wording on 3 June is that the limits "have been instituted in recent months", where this case had described them as starting in June. The text is corrected and a `Disputed` claim now records the difference rather than quietly adopting the later date. The new source shares a source family with nothing, deliberately: two outlets repeating one report is one report.

- 2026-09-12 — Initial publication at Grade C. The central claims are attributed to reporting by The Information and Bloomberg that could not be read for this review; TechCrunch's brief is the readable relay and is cited as such. Uber's Form 10-Q and Form 10-K were read directly and are cited only for what they actually establish: the scale of research and development spending and the absence of any AI line item.

[^willison-relay]: Simon Willison, [“Uber Caps Usage of AI Tools Like Claude Code to Manage Costs”](https://simonwillison.net/2026/Jun/3/uber-caps-usage/), Simon Willison's Weblog, 2026-06-03, quoting Natalie Lung for Bloomberg. A relay: Bloomberg's original is paywalled and was not read.

[^techcrunch]: Lucas Ropek, [“Uber caps employee AI spending after blowing through budget in 4 months”](https://techcrunch.com/2026/06/02/uber-caps-employee-ai-spending-after-blowing-through-budget-in-four-months/), TechCrunch, 2026-06-02.
[^uber10q]: Uber Technologies, Inc., [Form 10-Q for the quarterly period ended June 30, 2026](https://www.sec.gov/Archives/edgar/data/1543151/000154315126000032/uber-20260630.htm), filed 2026-08-05.
[^uber10k]: Uber Technologies, Inc., [Form 10-K for the fiscal year ended December 31, 2025](https://www.sec.gov/Archives/edgar/data/1543151/000154315126000015/uber-20251231.htm), filed 2026-02-13.
