---
case_id: AAI-2026-007
title: "Klarna cut a third of its staff and filed the reason"
summary: "Klarna's annual report tells the SEC that full-time employees fell from 4,352 to 2,831 in two years as a result of leveraging AI, that its assistant handles 80% of customer service chats, and that headcount will keep falling — claims audited financial statements support only in part."
organization:
  - Klarna Group plc
  - OpenAI
case_type: organizational-transformation
secondary_case_types:
  - deployment
  - economic-case
industry:
  - financial-services
business_function:
  - customer-service
  - human-resources
deployment_stage: scaled-production
outcome: mixed
evidence_grade: B
status: published
created: 2026-09-12
published: 2026-09-12
last_verified: 2026-09-12
next_review: 2027-03-12
geography:
  - Sweden
  - United Kingdom
  - United States
environment: production
deployment_pattern:
  - customer-facing-assistant
  - employee-copilot
causal_strength: descriptive
related_cases:
  - AAI-2026-002
  - AAI-2026-003
evidence_upgrade_path: "Grade A needs a chain Klarna does not control: an independent measurement of assistant quality, a regulator or auditor attesting to the AI savings estimates rather than the financial statements they sit beside, union or works-council reporting on what happened to the roles that went, or disclosure of how many employees transferred with the KCO divestment so the headcount claim can be netted out. The mid-2025 change of course is no longer unsourced — a named staff writer at a masthead outlet relays a Bloomberg interview in which the chief executive says so himself — but that is still Klarna's voice reaching this case through two hands, and it sharpens the contradiction with the annual report rather than resolving it. What would resolve it is Klarna addressing the two accounts together."
single_chain_rationale: "The company's own annual report is the only chain available. Every readable alternative for the counter-narrative — Forbes, CNBC, the Associated Press — was unreachable from this environment, and the remaining coverage found was vendor blogs and syndicated aggregators the source policy excludes outright. The case is published because a company stating under securities law that AI cut a third of its workforce, with audited cost lines beside the claim, is a primary record worth entering into evidence with its limits marked, not because anyone has checked it."
sources:
  - id: entrepreneur-reversal
    author: "Sherin Shibu"
    title: "Klarna CEO Reverses Course By Hiring More Humans, Not AI"
    publisher: "Entrepreneur"
    published: 2025-05-09
    updated: 2026-01-30
    url: "https://www.entrepreneur.com/business-news/klarna-ceo-reverses-course-by-hiring-more-humans-not-ai/491396"
    accessed: 2026-09-13
    roles:
      - independent-reporting
      - participant-account
    source_family: klarna-2025-reversal
    access: "No independent access to Klarna. What it carries is direct quotation of Sebastian Siemiatkowski from a Bloomberg interview given on 8 May 2025, including his own characterisation of the AI-first customer service approach as producing lower quality."
    method: "A news brief relaying a Bloomberg interview, with the quotations attributed to that interview and the surrounding history sourced to Klarna's own earlier disclosures. It reports; it does not measure. Nothing in it is an assessment of the assistant."
    conflicts: "Two layers. The substance is the chief executive's account of his own company's strategy, so it is Klarna's voice, not an outside check on it — which is why this source carries `participant-account` alongside `independent-reporting`. And it reaches this case through a relay, because bloomberg.com is unreachable from this sandbox."
    corroboration: "It contradicts, rather than corroborates, the picture in Klarna's own annual report filed nine months later, which describes no reversal and still presents the assistant as handling 80% of chats. This case records both and resolves neither."
    accountability: "A named staff writer at an outlet with a masthead and a corrections process, dated, with the originating interview identified and the quotations marked as the outlet's own relay of it."
    notes: "Read in full. It is in this record for one reason: the case previously recorded the mid-2025 change of course as untestable because every outlet that carried it was unreachable. This one is reachable, names its source, and quotes the chief executive directly. It is a relay of a Bloomberg interview, and a company statement rather than an independent measurement — so it moves a claim from `Unknown` to `Attributed` and moves nothing else."
  - id: klarna20f
    author: "Klarna Group plc"
    title: "Annual report on Form 20-F for the fiscal year ended December 31, 2025"
    publisher: "United States Securities and Exchange Commission"
    published: 2026-02-26
    url: "https://www.sec.gov/Archives/edgar/data/2003292/000200329226000007/klar-20251231.htm"
    accessed: 2026-09-12
    roles:
      - participant-account
      - direct-evidence
    source_family: klarna-company-disclosures
    access: "The company's own audited consolidated financial statements, employee counts, segment expense lines, and internal service chat log data, which no outside party can inspect."
    method: "Financial statements prepared under IFRS and audited. The operational AI figures are management estimates, each with its basis stated in the filing — chat log data, internal consumer satisfaction surveys, and before-and-after comparisons of conversation volume."
    conflicts: "Written by the company about its own performance, for investors, while it argues that AI is a structural advantage. The same document is filed under securities law, which penalises material misstatement — so the audited figures and the management estimates beside them carry very different weight."
    corroboration: "None. No independent measurement of the assistant's quality or of the savings estimates was reachable, and the filing itself is the only account of the workforce reduction's cause."
    accountability: "A filed regulatory record with a fixed accession number, audited financial statements, and liability for material misstatement."
    notes: "Read in full for this case. Notably it contains no reference to the change of course widely reported in mid-2025, and still presents the assistant as handling 80% of customer service chats in the year ended 2025-12-31."
tags:
  - customer-service-automation
  - headcount
  - organizational-transformation
  - self-reported-metrics
  - workforce
---

## Case in one sentence

Klarna told the SEC that its full-time workforce fell from 4,352 to 2,831 between 2023 and 2025 as a result of leveraging AI, that its OpenAI-powered assistant now handles 80% of customer service chats, and that it expects headcount to keep falling — a transformation the audited numbers document and an attribution only the company asserts.

## Executive summary

Klarna Group plc, the Swedish payments company listed on the New York Stock Exchange, filed its annual report for 2025 on 2026-02-26. In it, three facts sit close together.[^klarna20f]

Full-time employees fell from 4,352 at the end of 2023 to 3,422 at the end of 2024 to 2,831 at the end of 2025 — a 35% reduction in two years. The filing states the reason directly: a strategic decision to reduce headcount and drive operational efficiency by leveraging AI, and it expects the number to keep decreasing. Average revenue per employee rose from roughly $344,000 in 2022 to roughly $1,240,000 in 2025.[^klarna20f]

Customer service and operations expenses fell 15% in 2024, a 3.3 percentage point drop as a share of revenue, then rose just 2% in 2025 while transaction volumes rose 32%.[^klarna20f] That is operating leverage visible in audited numbers rather than in a press release.

The claims about the assistant itself are management's own, each with a stated basis: 80% of customer service chats handled in 2025, 31 million conversations since launch, resolution in two minutes against twelve for human agents, repeat inquiries down 25%, consumer satisfaction level with human agents, the equivalent work of over 700 full-time agents, and $39 million of savings in 2024.[^klarna20f]

The case turns on the distance between those two categories. The cost lines are audited. The attribution is asserted. And the filing itself discloses a competing explanation it never applies to its own headcount claim.

## Research question

When a company restructures around AI, what part of the story can be verified from the record it is legally obliged to file, and what part remains its own account?

## Organization and operating context

Klarna operates a payments and shopping network — pay-later and pay-in-full credit, a consumer app, advertising, and subscription products — across 23 markets.[^klarna20f] Revenue rose from $2,276 million in 2023 to $2,811 million in 2024 to $3,509 million in 2025.[^klarna20f]

Customer service is a cost centre proportional to transaction volume, which makes it the natural first target for automation in this business. By the end of 2025, over 1,500 of Klarna's positions — about 53% of the company — were engineering and data science roles.[^klarna20f] The company also reports that 1,166 of its employees in Sweden are affiliated with labour unions and 530 in Germany with works councils, which matters for how a workforce reduction of this size can be carried out in those jurisdictions.[^klarna20f]

## The situation before AI

Before 2023, the company's cost of serving customers scaled roughly with the number of customers served, and its answer to growth was hiring. Revenue per employee of about $344,000 in 2022 describes an organisation whose output was bounded by headcount.[^klarna20f]

The competitive frame in the filing is instructive: Klarna lists customer service alongside fees, approval rates, and brand as the dimensions on which it competes.[^klarna20f] Automating it is therefore not a back-office decision but a product one.

## The AI intervention or event

Klarna developed an AI assistant powered by OpenAI in 2023 and put it in front of customers.[^klarna20f] The assistant handles multilingual customer service, refunds and returns, and is available around the clock in 23 markets and more than 35 languages.

The company's reported results, each with the basis it gives in the filing:[^klarna20f]

| Claim | Basis stated in the filing |
| --- | --- |
| 80% of customer service chats handled in 2025 | Service chat log data |
| 31 million conversations since launch | Service chat log data |
| Two minutes to resolve, against twelve for human agents, as of September 2024 | Service chat log data |
| Repeat inquiries reduced 25% | Before-and-after comparison |
| Consumer satisfaction level with human agents | Internal consumer satisfaction surveys |
| Equivalent work of over 700 full-time agents | Average monthly reduction in chat and telephone conversations in 2024 after launch |
| $39 million in cost savings in 2024 | Company estimate |

The transformation extends past the contact centre. Klarna reports reducing or cancelling contracts with over 1,700 suppliers following AI adoption, saving an estimated $10 million in 2024 from AI-powered marketing, running an internal knowledge chatbot called Kiki, and using an AI copilot to write and review code.[^klarna20f]

Note what the 700-agent figure is and is not. The filing defines it as *equivalent work*, derived from the drop in conversation volume — not as a count of people dismissed. Any reading of it as 700 layoffs is a claim the filing does not make.

## Outcomes and economics

The audited picture, in millions of dollars:[^klarna20f]

| | 2023 | 2024 | 2025 |
| --- | --- | --- | --- |
| Total revenue | 2,276 | 2,811 | 3,509 |
| Customer service and operations expenses | 240 | 203 | 207 |
| Full-time employees at year end | 4,352 | 3,422 | 2,831 |

Customer service and operations expenses fell $37 million in 2024, which the filing attributes primarily to a decrease in customer service costs, then rose $4 million in 2025 against 32% higher volumes and 25% more transactions.[^klarna20f] Holding a cost line roughly flat through a third more volume is the clearest financial evidence in this record that something structural changed.

What the record does not contain is the other side of the ledger: no figure for what the AI programme cost to build or run, no inference model or vendor spend broken out, no severance or restructuring cost isolated to this decision, and nothing at all about what happened to the roughly 1,500 people who are no longer employees.

## Causal assessment and competing explanations

This case is descriptive. The filing asserts a cause — AI — and no design in the record isolates it.

The strongest competing explanation is disclosed in the same document. On 2024-10-01 Klarna completed the divestment of KCO, its online checkout business, to a consortium of investors, and the filing warns that revenue and growth figures for 2025 may appear lower on a comparative basis as a result.[^klarna20f] A divested business takes its employees with it. The filing applies that caveat to revenue comparisons and not to the headcount statement standing a few pages away, and it does not disclose how many employees left with KCO. Until that number is public, the 35% reduction cannot be cleanly attributed.

Two further explanations are compatible with the same figures. The period from 2023 to 2025 saw broad headcount retrenchment across technology and fintech for reasons that had nothing to do with model capability, and a company that had over-hired during a growth phase would show a similar trajectory under any efficiency programme. And revenue per employee rises whenever revenue grows and employment falls, regardless of what caused either.

None of this means the attribution is wrong. It means the record supports "Klarna restructured, and says AI is why" rather than "AI caused a 35% workforce reduction."

## Failures, limitations, and governance

- **Self-measured metrics:** every operational claim about the assistant rests on the company's own chat logs and internal surveys, which nobody outside the company can inspect.
- **An unexplained comparison:** the filing compares the assistant's two-minute resolution against twelve minutes for human agents without noting that automated and human queues do not carry the same mix of difficulty.
- **The confounder it discloses but does not apply:** KCO was divested in the middle of the headcount trend.
- **Aggregate satisfaction only:** the filing reports satisfaction parity overall and says nothing about disputes, fraud claims, or hardship cases, which are where an assistant is most likely to fail and a customer least able to absorb it.
- **The workforce is absent from the account:** the people who left appear only as a falling number, in a company that also discloses significant union and works-council representation.
- **The company's two accounts do not agree.** In May 2025 the chief executive told Bloomberg that the AI-first approach to customer service produced "lower quality", that it "wasn't the right path", and that Klarna was recruiting human agents again, saying "investing in the quality of human support is the way of the future for us."[^entrepreneur-reversal] The annual report filed nine months later describes no reversal and still presents the assistant as handling 80% of chats in the year to 31 December 2025.[^klarna20f] Both are Klarna speaking. Only one of them is filed under securities-law liability, and it is not the one that concedes a problem.
- **The company names its own risk:** it warns that generative AI may produce inaccurate, incomplete, misleading, or biased output that may not be easily detectable — in the same document that reports satisfaction parity.[^klarna20f]

## What this case demonstrates

1. A securities filing is the most checkable account of an AI transformation a public company will produce, and it still separates cleanly into audited facts and management assertions.
2. The audited half here is the cost line: roughly flat customer service and operations expense through a third more volume is harder to explain away than any headline metric.
3. "Equivalent work of 700 agents" is a volume calculation, not a headcount, and the distance between those two readings is how a plausible figure becomes a misleading one in retelling.
4. Companies disclose the confounders to their own claims in adjacent paragraphs, and nobody is obliged to connect them; here the divestment caveat and the headcount attribution never meet.
5. An organisation can report satisfaction parity in aggregate while disclosing, as a risk, that its generative AI may produce undetectable errors — both statements can be true, and only the first one is offered as a result.
6. What a workforce reduction did to the workforce is not a disclosure requirement, so it will usually be absent from the most reliable document available.

## What this case does not demonstrate

- It does not establish that AI caused the headcount reduction, given the undisclosed effect of the KCO divestment and sector-wide retrenchment.
- It does not verify any of the assistant's performance figures, all of which are self-measured.
- It does not establish that service quality held up for complex, disputed, or hardship cases.
- It does not establish what happened to the people whose roles ended.
- It does not confirm or refute the widely circulated account that Klarna reversed its customer-service automation in 2025; no source meeting this library's policy was reachable to test it.
- It does not generalise to firms without Klarna's transaction-volume growth, which is what made the flat cost line visible.

## Evidence assessment

**Grade B — a strong primary record with no second chain.** The source is an annual report on Form 20-F, read in full, containing audited financial statements and filed under rules that create liability for material misstatement. That is a materially better class of evidence than a press release or a conference remark, and it is the reason this case can state the cost and headcount trajectory as fact rather than as claim.

The limitation is that one party wrote all of it. The operational figures are management estimates over data only Klarna holds; the causal attribution is Klarna's; and the filing is written to persuade investors that AI is a structural advantage. The case handles this by splitting the claims: audited figures carry `Verified`, and everything the company asserts about why those figures moved carries `Attributed`.

Two absences shaped the grade at publication, and one of them has partly closed. Klarna discloses the KCO divestment as a caveat on revenue comparisons and never applies it to the workforce statement, so the central attribution still has an unquantified confounder sitting inside the same document.

The other was the mid-2025 change of course, which this case recorded as untestable because Forbes, CNBC, Bloomberg, and the Associated Press were all unreachable and the remaining coverage was vendor blogs and syndicated aggregators the source policy excludes. A reachable account has since been found: a named staff writer at Entrepreneur relaying the Bloomberg interview and quoting the chief executive directly.[^entrepreneur-reversal] That is enough to move the claim off `Unknown`, and it is important to be clear why it is not more. It is Klarna's own chief executive describing Klarna's own strategy, reaching this case through a relay because the original is paywalled. It is a company statement, not an outside measurement, so it does nothing for the thing this case actually needs — a chain Klarna does not control. It is also, for exactly that reason, more interesting than a favourable statement would be: a chief executive conceding lower quality is speaking against interest.

What it produces is a contradiction inside the company's own record rather than a resolution of one. The May 2025 interview and the February 2026 annual report describe different worlds, and this case now states both instead of one. The grade stays at B.

## Material claims

Each claim carries a controlled label, the evidence behind it, and what would change the label.

| Claim | Label | Evidence | What would change this |
| --- | --- | --- | --- |
| Full-time employees fell from 4,352 to 2,831 between year-end 2023 and year-end 2025. | Verified | Employee counts in the Form 20-F[^klarna20f] | A restatement of the filing |
| Customer service and operations expenses fell 15% in 2024, then rose 2% in 2025 while volumes rose 32%. | Verified | Audited expense lines and the operating review[^klarna20f] | A restatement |
| Average revenue per employee rose from about $344,000 in 2022 to about $1,240,000 in 2025. | Verified | Stated in the filing and consistent with its revenue and headcount figures[^klarna20f] | A restatement |
| The workforce reduction resulted from leveraging AI. | Attributed | The company's own statement; the same filing discloses the 2024-10-01 KCO divestment without netting it out of the headcount trend[^klarna20f] | Disclosure of headcount transferred with KCO, or an independent analysis of the reduction |
| The assistant handled 80% of customer service chats in 2025 and did the equivalent work of over 700 full-time agents. | Attributed | Company figures from its own chat logs, with the volume-based basis stated[^klarna20f] | Independent audit of the chat data, or regulator-verified metrics |
| The assistant matches human agents on consumer satisfaction. | Attributed | Internal consumer satisfaction surveys, instrument not published[^klarna20f] | Publication of the survey and results, or independent measurement |
| AI delivered $39 million of cost savings in 2024. | Attributed | Company estimate presented alongside, not within, the audited statements[^klarna20f] | An auditor attestation or a published breakdown |
| Service quality held up for disputes, fraud claims, and hardship cases. | Unknown | The filing reports aggregate satisfaction only, with no breakdown by case type | Segment-level quality data, or a regulator's complaints analysis |
| What happened to the roughly 1,500 people whose roles ended. | Unknown | Not addressed in the filing, which reports only the falling count | Union, works-council, or regulator reporting |
| Klarna changed course on customer-service automation in 2025 and began recruiting human agents again. | Attributed | The chief executive said so to Bloomberg on 8 May 2025, quoted directly in a named staff writer's report; the original interview is paywalled and was not read[^entrepreneur-reversal] | Reading Bloomberg's original, a Klarna filing or release addressing the change, or evidence the quotations were inaccurate |
| Klarna's AI-first customer service produced lower-quality outcomes. | Attributed | The chief executive's own characterisation — "lower quality", and that the approach "wasn't the right path" — relayed from the Bloomberg interview; no measurement of assistant quality by anyone exists in this record[^entrepreneur-reversal] | Any independent measurement of the assistant, or a Klarna disclosure quantifying the quality change |
| Klarna's own two accounts of its customer-service strategy are consistent. | Disputed | The May 2025 interview describes a reversal on quality grounds; the annual report filed February 2026 describes none and still presents 80% of chats as assistant-handled[^entrepreneur-reversal][^klarna20f] | Klarna addressing the two accounts together, or a reading that reconciles the 80% figure with the rehiring |

## Direct quotations

> “The reduction in the number of full-time employees resulted from our strategic decision to reduce our overall headcount and drive operational efficiency by leveraging AI in our business and focusing on what really matters to our mission.”

— Klarna Group plc, annual report on Form 20-F[^klarna20f] · locator: Employees

> “generative AI may create inaccurate, incomplete or misleading output, reflect unintended biases or produce other discriminatory or unexpected results, errors or inadequacies, any of which may not be easily detectable”

— Klarna Group plc, annual report on Form 20-F[^klarna20f] · locator: Risk Factors

> “Really, investing in the quality of human support is the way of the future for us.”

— Sebastian Siemiatkowski to Bloomberg on 2025-05-08, quoted in Entrepreneur's relay of the interview; the original is paywalled and was not read[^entrepreneur-reversal] · locator: paragraph beginning "So now Klarna is recruiting a new batch of customer service employees"

## Revision notes

- 2026-09-13 — Source review. The mid-2025 change of course, recorded at publication as untestable because every outlet carrying it was unreachable, is now sourced. A named staff writer at Entrepreneur relays the Bloomberg interview of 8 May 2025 and quotes Sebastian Siemiatkowski directly, including his characterisation of the AI-first approach as producing "lower quality" and "not the right path". One claim moves from `Unknown` to `Attributed` and two more are added. What this does not do is supply the chain the case actually needs: it is Klarna's chief executive describing Klarna's own strategy, arriving through a relay because bloomberg.com is unreachable, so the source carries `participant-account` alongside `independent-reporting` and the grade stays at B. Its real value is the contradiction it creates inside the company's own record — a chief executive conceding lower quality in May 2025 against an annual report filed nine months later that describes no reversal and still presents the assistant as handling 80% of chats. A new `Disputed` claim records that the two accounts do not agree, per the rule on recording discrepancies rather than resolving them. Nothing was found on the other named gaps: no union or works-council reporting, no independent measurement of assistant quality, and no disclosure of KCO transfer headcount.

- 2026-09-12 — Initial publication at Grade B. Single chain, the company's own Form 20-F, read in full and cited with `single_chain_rationale`: no independent measurement was reachable and the alternative coverage found was vendor blogs the source policy excludes. Audited figures are labelled `Verified` and the company's characterisations `Attributed`, including the attribution of the workforce reduction to AI, because the same filing discloses the KCO divestment of 2024-10-01 without applying it to the headcount trend. The widely circulated account that Klarna reversed its customer-service automation is recorded as `Unknown` rather than denied, since the filing's silence is not a refutation.

[^entrepreneur-reversal]: Sherin Shibu, [“Klarna CEO Reverses Course By Hiring More Humans, Not AI”](https://www.entrepreneur.com/business-news/klarna-ceo-reverses-course-by-hiring-more-humans-not-ai/491396), Entrepreneur, 2025-05-09, updated 2026-01-30. A relay: it quotes an interview Sebastian Siemiatkowski gave Bloomberg on 2025-05-08, and bloomberg.com is unreachable from this sandbox, so the original was not read.

[^klarna20f]: Klarna Group plc, [Annual report on Form 20-F for the fiscal year ended December 31, 2025](https://www.sec.gov/Archives/edgar/data/2003292/000200329226000007/klar-20251231.htm), filed 2026-02-26.
