---
case_id: AAI-2026-010
title: "The twenty feet a robotaxi company did not mention"
summary: "A Cruise driverless taxi struck a pedestrian who had been thrown into its path, stopped, then pulled over — dragging her about twenty feet. Cruise briefed three regulators the next morning without saying so. The disclosure failure, not the collision, cost the company its permits, a criminal admission, and ultimately the business."
organization:
  - Cruise LLC
  - General Motors Company
  - California Department of Motor Vehicles
case_type: failure-incident
secondary_case_types:
  - governance-regulatory
  - deployment
industry:
  - transportation-logistics
  - technology
business_function:
  - operations
  - legal-compliance
deployment_stage: retired
outcome: negative
evidence_grade: A
status: published
created: 2026-09-13
published: 2026-09-13
last_verified: 2026-09-13
next_review: 2027-03-13
geography:
  - United States
environment: production
deployment_pattern:
  - physical-system
  - straight-through-automation
causal_strength: descriptive
related_cases:
  - AAI-2026-005
  - AAI-2026-001
evidence_upgrade_path: "At grade A the question is what would still strengthen the record or force a downgrade. Strengthening: the NHTSA consent order and the deferred prosecution agreement in their own words, both of which this case reaches only through GM's audited description because nhtsa.gov and justice.gov are unreachable from this sandbox; the DMV's Order of Suspension itself, quoted here through the Quinn Emanuel report rather than read directly; and the underlying Slack messages and meeting notes, which only Quinn Emanuel has seen. Forcing a downgrade: evidence that the Quinn Emanuel report omitted material facts, which its own privileged, client-commissioned status makes a live possibility."
sources:
  - id: quinn-emanuel
    author: "Quinn Emanuel Urquhart & Sullivan, LLP"
    title: "Report to the Boards of Directors of Cruise LLC, GM Cruise Holdings LLC, and General Motors Holdings LLC Regarding the October 2, 2023 Accident in San Francisco"
    publisher: "Quinn Emanuel Urquhart & Sullivan, LLP, commissioned by Cruise and General Motors"
    published: 2024-01-24
    url: "https://assets.ctfassets.net/95kuvdv8zn1v/1mb55pLYkkXVn0nXxEXz7w/9fb0e4938a89dc5cc09bf39e86ce5b9c/2024.01.24_Quinn_Emanuel_Report_re_Cruise.pdf"
    accessed: 2026-09-13
    roles:
      - primary-investigation
      - direct-evidence
    source_family: quinn-emanuel-investigation
    access: "Internal Cruise material no outside party has seen: Slack messages timestamped to the minute, notes of leadership meetings and of the pre-meeting held before the NHTSA briefing, engineering analyses, the full 45-second nine-pane video and the truncated version shown to media, and interviews with the employees who briefed regulators."
    method: "Law-firm investigation for the boards of the companies under scrutiny, reconstructing the timeline of who knew what and when, and assessing it against the regulators' allegations. It reaches findings on knowledge, conduct, and intent. It states its own limitations, including that neither Cruise nor Quinn Emanuel can establish what regulators actually saw."
    conflicts: "Commissioned and paid for by the boards of Cruise and GM, about Cruise and GM. Every page is stamped 'Privileged and Confidential — Protected by Attorney-Client Privilege'; the companies chose to publish it and to send it to the DMV, NHTSA, and the CPUC, but it was written as client work product, not as an independent audit."
    corroboration: "Its account of the accident and of the DMV's allegations matches the DMV's own published grounds for suspension, and the regulatory outcomes it anticipates are confirmed in GM's audited filings. Its finding on intent is contradicted by what Cruise later admitted to prosecutors."
    accountability: "Named firm, dated, addressed to identified boards, delivered to three regulators, and published in full at 195 pages including the material adverse to its clients."
    notes: "Read for this case: the overview, the introduction, and the whole of Section V, Summary of Findings and Conclusions; the 90 pages of detailed narrative between them were not read line by line. It is also the source through which this case quotes the DMV's Order of Suspension, which was not obtainable directly."
  - id: dmv-statement
    author: "California Department of Motor Vehicles"
    title: "DMV Statement on Cruise LLC Suspension"
    publisher: "California Department of Motor Vehicles"
    published: 2023-10-24
    url: "https://www.dmv.ca.gov/portal/news-and-media/dmv-statement-on-cruise-llc-suspension/"
    accessed: 2026-09-13
    roles:
      - direct-evidence
    source_family: dmv-suspension
    access: "The regulator's own decision, published by the body that made it on the day it took effect."
    method: "Not an investigation report. It states the action taken and enumerates the four regulatory provisions relied on, without setting out the underlying findings of fact."
    conflicts: "The regulator stating its own grounds for its own action, at a moment of intense public attention. It is the accused party's counterparty, not a neutral observer."
    corroboration: "The grounds it cites are quoted and addressed at length in the Quinn Emanuel report, which does not dispute that the DMV said them."
    accountability: "Published on the department's official news page under a dated press release, citing the specific provisions of Title 13 of the California Code of Regulations."
    notes: "Read in full. This is the public statement, not the Order of Suspension itself; the order's factual narrative reaches this case only through Quinn Emanuel's quotation of it."
  - id: gm-10k-2024
    author: "General Motors Company"
    title: "Annual Report on Form 10-K for the fiscal year ended December 31, 2024"
    publisher: "U.S. Securities and Exchange Commission (EDGAR)"
    published: 2025-01-28
    url: "https://www.sec.gov/Archives/edgar/data/1467858/000146785825000032/gm-20241231.htm"
    accessed: 2026-09-13
    roles:
      - direct-evidence
      - primary-investigation
    source_family: gm-sec-filings
    access: "The parent company's own audited books: restructuring charges by period, impairments, intercompany funding, Cruise liquidity, and the terms of every regulatory resolution."
    method: "Audited annual report filed under the Securities Exchange Act. Figures are prepared under US GAAP and audited; the legal-proceedings and subsequent-events narrative is management's, prepared under securities-law liability for material misstatement."
    conflicts: "Written by the parent of the company at fault, with obvious incentives on framing. Against that, the numbers are audited and the legal descriptions carry personal and corporate liability if wrong, which is why this case uses it for figures and settlement terms rather than for characterisation."
    corroboration: "Its account of the DMV, NHTSA, CPUC, and DOJ outcomes is consistent with the DMV's own statement and with the Quinn Emanuel narrative of the investigations then underway."
    accountability: "Filed with the SEC under officer certifications, publicly retrievable from EDGAR by accession number, audited by an independent registered public accounting firm."
    notes: "Read for this case by targeted search on every occurrence of 'Cruise' — 203 of them — rather than cover to cover. It is the source for the $529 million, $631 million, and $522 million charges, and for the CPUC, NHTSA, and DOJ resolutions including the false-report admission."
  - id: gm-10k-2025
    author: "General Motors Company"
    title: "Annual Report on Form 10-K for the fiscal year ended December 31, 2025"
    publisher: "U.S. Securities and Exchange Commission (EDGAR)"
    published: 2026-01-27
    url: "https://www.sec.gov/Archives/edgar/data/1467858/000146785826000013/gm-20251231.htm"
    accessed: 2026-09-13
    roles:
      - direct-evidence
    source_family: gm-sec-filings
    access: "The same audited books one year on, covering the wind-down itself."
    method: "As above. Audited annual report under US GAAP."
    conflicts: "As above."
    corroboration: "Continues and closes the account given in the prior year's filing; the two are consistent on every figure they share."
    accountability: "As above."
    notes: "Read by targeted search on 'Cruise'. Source for the February 2025 start of the wind-down, the completion of restructuring by 31 December 2025, the $633 million cumulative cash outflow, the $1.1 billion of wind-down funding in 2025, and the reallocation of Cruise's goodwill into the North America segment."
tags:
  - autonomous-vehicles
  - robotaxi
  - disclosure
  - regulatory-suspension
  - incident-response
  - attorney-client-privilege
  - physical-system
---

## Case in one sentence

Cruise's driverless taxi dragged a pedestrian about twenty feet after striking her, the company briefed three regulators the following morning without ever saying so out loud, and within fourteen months a business that had absorbed billions in investment was being wound down.

## Executive summary

On 2 October 2023 in San Francisco, a human-driven Nissan struck a pedestrian and launched her into the path of a Cruise autonomous vehicle travelling in the adjacent lane. The Cruise AV braked, could not avoid her, and she fell beneath it. The vehicle stopped, then executed a pullover manoeuvre — dragging her roughly twenty feet before coming to a final stop.[^quinn-emanuel]

The next morning Cruise briefed the Mayor's Office at 10:05, the National Highway Traffic Safety Administration at 10:30, and the California DMV at 11:30. In each meeting the company played video and waited for questions. Nobody at Cruise said the vehicle had moved again and dragged the pedestrian. The questions never came, most likely because internet connectivity problems froze or blanked the video.[^quinn-emanuel]

By then the fact was thoroughly known inside the company. It was in a Slack message at 3:45 a.m., amplified to the incident war room at 6:56 a.m., and discussed in two leadership meetings at 6:00 and 6:45 a.m. attended by 109 people.[^quinn-emanuel]

On 24 October the DMV suspended Cruise's deployment and driverless testing permits with immediate effect, on four grounds including that the manufacturer "has misrepresented any information related to safety of the autonomous technology of its vehicles."[^dmv-statement] Cruise voluntarily paused all US operations and took $529 million in charges that year.[^gm-10k-2024]

Cruise's own commissioned investigation, published in January 2024 at 195 pages, found that the company should have volunteered the dragging in every meeting, that its approach reflected "a basic misunderstanding of what regulatory authorities need to know", and that the evidence did not establish an intent to mislead.[^quinn-emanuel] Ten months later Cruise admitted to prosecutors that it had submitted a false report to a federal agency.[^gm-10k-2024]

The financial record is unambiguous. Charges of $529 million in 2023, $631 million in June 2024 when the purpose-built Origin vehicle was shelved, and $522 million in December 2024 when GM stopped funding robotaxi development altogether. Penalties of $112,500 to the CPUC, $1.5 million to NHTSA, and $500,000 to the Department of Justice. The wind-down began in February 2025, consumed $1.1 billion that year, and was complete by 31 December 2025.[^gm-10k-2024][^gm-10k-2025]

## Research question

When an autonomous system does something its operator did not anticipate, what determines whether the operator survives it — the behaviour, or the account given of the behaviour?

## Organization and operating context

Cruise LLC was General Motors' autonomous vehicle subsidiary, developing and commercialising AV technology for a robotaxi application.[^gm-10k-2024] By October 2023 it was running driverless commercial service in San Francisco under permits from two separate California regulators — the DMV for vehicle testing and deployment, and the California Public Utilities Commission for carrying passengers — while also reporting crashes to NHTSA federally.

That three-regulator structure matters to what happened next. Each body needed to be told, each was told separately, and the DMV's stated reason for suspension was that it learned the decisive fact not from Cruise but "via discussion with another government agency."[^quinn-emanuel]

GM's financial exposure was large and disclosed: $2.4 billion invested in Cruise in 2022, $0.5 billion in 2023, and $1.3 billion in 2024.[^gm-10k-2024]

## The situation before AI

There is no pre-AI baseline here in the usual sense — a robotaxi service has no manual predecessor at the same company. What existed instead was a regulatory settlement built on self-reporting. California's AV rules let the DMV suspend a permit immediately when it determines the vehicles are unsafe or the manufacturer has misrepresented safety information;[^dmv-statement] federal crash reporting depends on the operator describing its own vehicle's behaviour. The entire oversight regime assumed the operator would say what its car did.

## The AI intervention or event

**The accident.** The AV was not the initiating cause. A human-driven Nissan hit the pedestrian first and threw her into the Cruise vehicle's lane; the AV braked and could not avoid the collision.[^quinn-emanuel] What the AV then did on its own — stop, then pull over with a person underneath it — is the part that belonged to the automation, and it is the part that went unmentioned.

**The morning of 3 October.** Cruise obtained the full 45-second, nine-pane video by 6:28 a.m.[^quinn-emanuel] Notes of a pre-meeting before the NHTSA briefing record employees understanding that the pullover manoeuvre and dragging were "the biggest issue".[^quinn-emanuel] In the three government meetings that followed, Cruise played the video and let it speak for itself. Connectivity problems meant it largely did not.

At 12:05 p.m. and 12:40 p.m., engineers presented a graphical chart of the pullover manoeuvre and dragging to meetings including the CEO, the COO, the VP and Deputy Counsel for Regulatory & Compliance, and the VP of Global Government Affairs. Nobody called NHTSA or the DMV back.[^quinn-emanuel]

At 3:30 p.m. Cruise met the SF Municipal Transportation Authority, police, and fire. The video played without connectivity problems, several times. City officials saw the dragging for themselves and asked about it — the only meeting that day in which it was discussed at all.[^quinn-emanuel]

Meanwhile Cruise continued into the afternoon showing media a truncated video that stopped before the collision, focused on correcting the story that the AV had caused the crash.[^quinn-emanuel]

**The consequences.** The full video went to NHTSA within hours of the 3 October meeting; it did not reach the DMV for ten days.[^quinn-emanuel] On 24 October the DMV suspended both permits, effective immediately, expressly not affecting the permit for testing with a safety driver.[^dmv-statement] The CPUC followed. Cruise paused all driverless, supervised, and manual AV operations in the United States.[^gm-10k-2024]

## Outcomes and economics

Every figure below is from GM's audited filings.[^gm-10k-2024][^gm-10k-2025]

| Event | Date | Amount |
| --- | --- | --- |
| Charges on the voluntary US pause (before noncontrolling interest) | FY2023 | $529m, including $250m non-cash |
| Cruise Origin indefinitely delayed | June 2024 | $631m, primarily non-cash |
| CPUC settlement, plus reporting obligations | July 2024 | $112,500 |
| NHTSA consent order, plus two years of enhanced reporting | September 2024 | $1.5m |
| Deferred prosecution agreement, one admitted count of submitting a false report to a federal agency | November 2024 | $500,000 |
| Charges on GM ceasing to fund robotaxi development | December 2024 | $522m, including $173m non-cash |
| Write-off of Cruise technology and intellectual property | FY2024 | $142m |
| Funding to wind down robotaxi operations | FY2025 | $1.1bn |
| Cumulative restructuring cash outflows, complete at year end | to 31 Dec 2025 | $633m |

Cruise's available liquidity fell from $1.3 billion at the end of 2023 to $0.3 billion at the end of 2024.[^gm-10k-2024] GM raised its stake to about 97% by December 2024 and acquired the remaining shares in February 2025, making Cruise wholly owned as it was dismantled.[^gm-10k-2024][^gm-10k-2025] In the first quarter of 2025, $571 million of goodwill sitting in the Cruise segment was reallocated to GM North America, the accounting signature of a business that no longer exists as a business.[^gm-10k-2025]

What survives is not nothing. GM's stated strategy is to redirect the technology to driver assistance and autonomy in personal vehicles, building on Super Cruise.[^gm-10k-2025] The robotaxi service is gone.

The three fines total just over $2.1 million. The charges and wind-down funding total roughly $2.8 billion. The penalties were never the cost.

## Causal assessment and competing explanations

This case is labelled **descriptive**, and the label is doing real work. It documents a sequence of events reconstructed from timestamped internal records and official actions. It makes no claim about whether autonomous vehicles are safer or less safe than human drivers, and nothing here should be read as evidence on that question. The pedestrian was struck by a human driver first.

The one causal statement the record does support is narrow and comes from the regulator itself: the DMV suspended the permits on grounds that include misrepresentation of safety information, and stated that it learned of the vehicle's secondary movement from another agency rather than from Cruise.[^quinn-emanuel][^dmv-statement] That the disclosure conduct caused the suspension is the regulator's own account of its own decision, which is about as direct as attribution gets, though it remains one party's characterisation.

Two competing explanations are worth stating.

**"The video was played; the regulators simply did not see it."** Quinn Emanuel finds the weight of evidence supports that Cruise attempted to play the full video and that connectivity problems impeded it. But it treats this as beside the point: Cruise employees watched the transmission freeze, said nothing, and had an affirmative duty to explain regardless.[^quinn-emanuel] The company's own investigators declined to accept its best defence.

**"This was concealment."** Quinn Emanuel found the evidence did not establish intent to mislead, reasoning that a company concealing a fact would not upload the full video to one federal regulator the same day, offer it to a second, and play it in full to three city agencies.[^quinn-emanuel] Against that reasoning sits a fact the report could not know: in November 2024 Cruise admitted one count of submitting a false report to a federal agency and paid a penalty for it.[^gm-10k-2024] This case records the tension and does not resolve it — the two are not strictly contradictory, since a report can be false without a finding of the intent Quinn Emanuel was assessing, but a reader should not be handed the January 2024 conclusion without the November 2024 admission beside it.

## Failures, limitations, and governance

- **The information was inside the building and did not travel to the people who needed it.** A 3:45 a.m. Slack message, a 6:56 a.m. war-room message, and two leadership meetings with 109 attendees, all before the first regulator briefing.[^quinn-emanuel]
- **Disclosure was delegated to a video file.** The chosen method was to play footage and answer questions; when the questions did not come, the method silently failed and nobody noticed it had.[^quinn-emanuel]
- **The one meeting that worked worked by accident.** City agencies learned the truth because the connection happened to hold, not because anyone told them.[^quinn-emanuel]
- **A second chance was taken and not used.** By early afternoon on 3 October the CEO, COO, and the senior legal and government-affairs executives had all seen an engineering chart of the dragging. No one called the regulators back.[^quinn-emanuel]
- **Ten days to send the DMV a video that reached NHTSA in hours.**[^quinn-emanuel]
- **The company optimised for the media narrative.** Quinn Emanuel attributes the failure in part to leadership's "myopic focus on rebutting the media narrative that the AV had caused the Accident" — a defensible concern that consumed everything around it.[^quinn-emanuel]
- **Three regulators, three separate conversations, no single owner of the disclosure.** The DMV learned the decisive fact from another agency.[^quinn-emanuel]
- **The investigation was privileged and published anyway.** Every page is marked as attorney-client privileged work product. Cruise and GM released it in full and sent it to all three regulators — the opposite choice from the one in this library's Workday case, where bias-testing data was withheld on privilege grounds.

## What this case demonstrates

1. For a deployed physical AI system, the operator's account of what the system did is part of the safety case. Cruise lost its permits on disclosure grounds, not on a finding that the vehicle was unsafe to a degree that alone required suspension.
2. Automation creates facts that only the operator can see. The pullover manoeuvre was invisible to bystanders and to the media video; it existed in telemetry and in a nine-pane recording that only Cruise controlled.
3. Showing is not telling. A regulator briefing that depends on a video rendering correctly over a conference call has a single point of failure and no error detection.
4. Internal knowledge does not equal organisational disclosure. Information known by 109 people at 6:45 a.m. was not conveyed at 11:30 a.m., and no process existed to notice the gap.
5. Fragmented regulation punishes fragmented communication. Three regulators told three different amounts got their information from each other, and the resulting distrust was harder to repair than the original omission.
6. The penalty is not the cost. Roughly $2.1 million in fines against roughly $2.8 billion in charges and wind-down funding.
7. An honest internal investigation can be published without waiving the company's position, and doing so is compatible with survival of the parent even when the subsidiary does not survive.
8. Regulatory trust is a load-bearing component of a physical AI deployment. Nothing in the vehicle stack was changed by the events of 3 October; the business ended anyway.

## What this case does not demonstrate

- It does not show that autonomous vehicles are more or less safe than human drivers. The record contains one accident, initiated by a human driver, and no comparative rate of any kind.
- It does not establish that Cruise intended to deceive. Its own commissioned investigation found the evidence did not support that; the later admission of a false report is a separate legal fact and this case reports both.
- It does not show the vehicle's behaviour was a software defect rather than a designed response. The pullover manoeuvre is described in the sources as what the vehicle did, not as a failure of it to do what it was built to do.
- It does not show what regulators actually saw. Quinn Emanuel says explicitly that neither it nor Cruise can establish that.[^quinn-emanuel]
- It does not isolate the disclosure failure as the sole cause of the business closing. Robotaxi economics, GM's capital priorities, and competitive position all sit in the same period and none is quantified against the others in these sources.
- It does not describe the NHTSA consent order or the deferred prosecution agreement in their own terms. Both reach this case through GM's audited description of them.
- It does not tell you whether the pedestrian's injuries were worsened by the dragging. No source read here addresses her medical outcome, and this case makes no claim about it.

## Evidence assessment

**Grade A — a regulator's own action, a criminal admission, audited financial statements, and a document-level investigation, converging.**

The chains are genuinely different in kind. The DMV published the grounds for its own decision.[^dmv-statement] GM's 10-Ks state every charge and every settlement under audit and under securities-law liability, across two consecutive years that agree with each other.[^gm-10k-2024][^gm-10k-2025] Quinn Emanuel had access nobody else has had — Slack timestamps, meeting notes, the pre-meeting notes before the NHTSA briefing, and the employees themselves — and used it to reconstruct a minute-by-minute account that is materially adverse to the clients who commissioned it.[^quinn-emanuel] And in the deferred prosecution agreement Cruise admitted a fact against its own interest in a criminal proceeding, which is the strongest single evidentiary object in this case even though it reaches us second-hand.[^gm-10k-2024]

Three things bound the record.

*Two decisive documents were not read.* NHTSA's consent order and the deferred prosecution agreement exist here only as GM describes them, because nhtsa.gov returns 403 and justice.gov is unreachable from this sandbox. GM's description is audited and legally exposed, which is why the claims drawn from it are labelled Verified rather than Attributed — but a reader should know that neither the government's own words nor the admission's exact scope has been checked. The DMV's Order of Suspension is in the same position, quoted here through Quinn Emanuel's reproduction of it.

*The investigation is client work product.* The report is stamped privileged on every page and was written for the boards of the companies investigated. It is unusually candid — it rejects its own clients' best defence and calls the leadership deficient by name of function — and that candour is exactly what a well-run defensive investigation looks like. Its scope was set by the client, its limitations are its own to declare, and nobody independent has checked what it left out.

*Its central conclusion on intent is in tension with what the company later admitted.* Quinn Emanuel, in January 2024, found no evidence establishing intent to mislead.[^quinn-emanuel] In November 2024 Cruise admitted submitting a false report to a federal agency.[^gm-10k-2024] The two can coexist in law. They should not coexist silently in a case record, and this one states both wherever either is relevant.

One further discrepancy, minor but recorded: Quinn Emanuel describes the pedestrian being dragged "approximately 20 feet", GM's filings do not quantify it, and press accounts add a speed of up to 7 mph that appears in none of the primary sources read here. This case uses the report's figure and omits the speed.

On conflicts: the DMV is the accusing party describing its own action; GM is the parent of the company at fault; Quinn Emanuel was paid by that parent. There is no disinterested narrator anywhere in this record. What makes it grade A is not that any single source is neutral but that the interests point in opposing directions and the accounts still agree.

## Material claims

| Claim | Label | Evidence | What would change this |
| --- | --- | --- | --- |
| A human-driven Nissan struck the pedestrian first and propelled her into the Cruise vehicle's path. | Verified | Reconstruction from vehicle data and video in the commissioned investigation; the DMV's own order, as quoted there, does not dispute it[^quinn-emanuel] | Contradictory evidence from the underlying video or the police investigation |
| After the initial stop, the Cruise vehicle performed a pullover manoeuvre and dragged the pedestrian approximately 20 feet. | Verified | Established in the investigation from vehicle telemetry and the full video, and the fact underlying every regulatory action that followed[^quinn-emanuel] | A materially different distance in the vehicle data, or a finding the manoeuvre did not occur |
| Cruise employees knew of the dragging before the 10:30 NHTSA and 11:30 DMV meetings on 3 October. | Verified | Slack messages timestamped 3:45 a.m. and 6:56 a.m., two leadership meetings at 6:00 and 6:45 a.m. with 109 attendees, and pre-meeting notes calling it "the biggest issue"[^quinn-emanuel] | Evidence the timestamps or attendance records were misread |
| Nobody at Cruise verbally disclosed the dragging in those meetings. | Verified | Conceded by Cruise leadership and by the employees who briefed regulators[^quinn-emanuel] | A contemporaneous record of the disclosure being made |
| Internet connectivity problems prevented regulators from seeing the full video clearly. | Supported | The weight of evidence in the investigation supports it, and the report states neither it nor Cruise can definitively establish what regulators saw[^quinn-emanuel] | Regulator-side records of the calls, or testimony from the officials present |
| The DMV suspended both permits on 24 October 2023, on grounds including misrepresentation of safety information. | Verified | The department's own published statement, citing 13 CCR §228.20(b)(6), §228.20(b)(3), §227.42(b)(5), and §227.42(c)[^dmv-statement] | A subsequent withdrawal or amendment of the suspension grounds |
| The DMV learned of the vehicle's secondary movement from another government agency rather than from Cruise. | Supported | The Order of Suspension says so, quoted in the investigation; the order itself was not read directly[^quinn-emanuel] | Reading the order and finding the quotation inaccurate |
| Cruise employees did not intend to mislead regulators. | Disputed | The commissioned investigation found the evidence did not establish intent; in November 2024 Cruise admitted submitting a false report to a federal agency[^quinn-emanuel][^gm-10k-2024] | The deferred prosecution agreement's own text, which would show exactly what was admitted and on what mental state |
| Cruise admitted one count of submitting a false report to a federal agency and paid $500,000. | Verified | Stated in GM's audited annual report, a filing carrying securities-law liability[^gm-10k-2024] | The agreement's own text showing different terms |
| Regulatory penalties totalled about $2.1 million: $112,500 to the CPUC, $1.5m to NHTSA, $500,000 to the DOJ. | Verified | All three itemised in GM's audited filings[^gm-10k-2024] | Later penalties in the same matter, or a restatement |
| Charges relating to the pause, the Origin delay, and the funding decision totalled roughly $1.7 billion before noncontrolling interest. | Verified | $529m in FY2023, $631m in June 2024, $522m in December 2024, all audited[^gm-10k-2024] | A restatement of GM's accounts |
| GM ceased funding robotaxi development in December 2024 and completed the wind-down by 31 December 2025. | Verified | Both filings, including $1.1bn of wind-down funding in 2025, $633m cumulative restructuring cash outflows, and goodwill reallocated out of the Cruise segment[^gm-10k-2024][^gm-10k-2025] | A restart of robotaxi operations, or a restatement |
| The disclosure failure, rather than the vehicle's behaviour, caused the loss of the permits. | Supported | The DMV's stated grounds and its account of learning the fact elsewhere; but the same statement also cites a determination that the vehicles are not safe for public operation[^dmv-statement][^quinn-emanuel] | The Order of Suspension's full reasoning, which would show how the safety and misrepresentation grounds were weighted |
| The disclosure failure caused the business to close. | Inference | Drawn from the sequence and from GM's stated reasoning about time and resources; robotaxi economics and GM's capital priorities are unquantified alternatives in the same period | Internal GM deliberations on the December 2024 decision, or a contemporaneous business case |
| Whether the dragging worsened the pedestrian's injuries. | Unknown | No source read here addresses her medical outcome | Court records or a medical account in a public proceeding |

## Direct quotations

> “The manufacturer has misrepresented any information related to safety of the autonomous technology of its vehicles.”

— California DMV, quoting 13 CCR §228.20(b)(3) as one of four grounds for the suspension[^dmv-statement] · locator: press release of 2023-10-24, "Today's suspensions are based on the following", second bullet

> “Playing the Full Video to let ‘the video speak for itself,’ and then waiting to respond to any questions regulators raised, was a fundamentally flawed approach. Those questions never came in the meetings with NHTSA, the DMV, or the Mayor's Office, likely due to internet connectivity issues.”

— Quinn Emanuel Urquhart & Sullivan[^quinn-emanuel] · locator: Section V, Summary of Findings and Conclusions, Finding "First", page 92

> “Cruise's passive, non-transparent approach to its disclosure obligations to its regulators reflects a basic misunderstanding of what regulatory authorities need to know and when they need to know it.”

— Quinn Emanuel Urquhart & Sullivan[^quinn-emanuel] · locator: Section V, Finding "First", page 93

> “There is some evidence that two senior employees were relieved that DMV had not noticed the pedestrian dragging during the October 3 meeting, but this belief does not establish intent to deceive in the first instance.”

— Quinn Emanuel Urquhart & Sullivan, in the finding that no intent to mislead was established[^quinn-emanuel] · locator: Section V, Finding "Fourth", page 95

> “Their failure to do so was due in large measure to leadership failings, mistakes of judgment, a lack of coordination within Cruise, and the myopic focus of Cruise leadership on rebutting the media narrative that the AV had caused the Accident.”

— Quinn Emanuel Urquhart & Sullivan, on why nobody called the regulators back after the midday engineering briefings[^quinn-emanuel] · locator: Section V, Finding "Third", page 94

> “In November 2024, Cruise entered into a Deferred Prosecution Agreement (DPA) with the U.S. Attorney's Office for the Northern District of California relating to the October 2023 accident. Under the terms of the DPA, Cruise admitted to one count of submitting a false report to a federal agency and paid a $500,000 monetary penalty.”

— General Motors, in its audited annual report[^gm-10k-2024] · locator: Note on Commitments and Contingencies, Cruise regulatory matters

## Revision notes

- 2026-09-13 — Initial publication at Grade A. Four chains with opposing interests: the regulator's own published grounds, a 195-page privileged investigation published in full by the companies it examined, and two consecutive audited annual reports. Labelled `descriptive` deliberately — the case reconstructs a sequence and makes no claim about autonomous-vehicle safety rates, and the one causal statement it carries is the regulator's account of its own decision. Records the central tension without resolving it: the commissioned investigation found no evidence of intent to mislead in January 2024, and in November 2024 the company admitted submitting a false report to a federal agency. Also records that NHTSA's consent order, the deferred prosecution agreement, and the DMV's Order of Suspension were all unreadable from this sandbox and reach the case through GM's audited description or Quinn Emanuel's quotation. Omits the "up to 7 mph" figure that appears widely in press accounts and in none of the primary sources read. First case in the library with a `physical-system` deployment pattern; related to AAI-2026-005 by contrast, since Cruise published a privileged investigation where Workday withheld bias-testing data on privilege grounds.

[^quinn-emanuel]: Quinn Emanuel Urquhart & Sullivan, LLP, [“Report to the Boards of Directors of Cruise LLC, GM Cruise Holdings LLC, and General Motors Holdings LLC Regarding the October 2, 2023 Accident in San Francisco”](https://assets.ctfassets.net/95kuvdv8zn1v/1mb55pLYkkXVn0nXxEXz7w/9fb0e4938a89dc5cc09bf39e86ce5b9c/2024.01.24_Quinn_Emanuel_Report_re_Cruise.pdf), 2024-01-24, 195 pages.

[^dmv-statement]: California Department of Motor Vehicles, [“DMV Statement on Cruise LLC Suspension”](https://www.dmv.ca.gov/portal/news-and-media/dmv-statement-on-cruise-llc-suspension/), 2023-10-24.

[^gm-10k-2024]: General Motors Company, [Annual Report on Form 10-K for the fiscal year ended December 31, 2024](https://www.sec.gov/Archives/edgar/data/1467858/000146785825000032/gm-20241231.htm), filed 2025-01-28, SEC accession 0001467858-25-000032.

[^gm-10k-2025]: General Motors Company, [Annual Report on Form 10-K for the fiscal year ended December 31, 2025](https://www.sec.gov/Archives/edgar/data/1467858/000146785826000013/gm-20251231.htm), filed 2026-01-27, SEC accession 0001467858-26-000013.
