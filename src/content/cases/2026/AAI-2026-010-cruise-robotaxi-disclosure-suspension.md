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
evidence_upgrade_path: "At grade A the question is what would still strengthen the record or force a downgrade. One gap named at publication has since closed: the deferred prosecution agreement was retrieved in full from the court docket and is now read directly rather than through GM's description. Still open, strengthening: the NHTSA consent order in its own words, which this case still reaches only through GM's audited description because nhtsa.gov is unreachable from this sandbox; the DMV's Order of Suspension itself, quoted here through the Quinn Emanuel report rather than read directly; the Information and its penalty sheet, which sit behind PACER on the same docket; and the underlying Slack messages and meeting notes, which only Quinn Emanuel and the government have seen. Forcing a downgrade: evidence that the Quinn Emanuel report omitted material facts, which its own privileged, client-commissioned status makes a live possibility."
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
  - id: us-v-cruise-dpa
    author: "United States Attorney's Office for the Northern District of California, and Cruise, LLC"
    title: "Deferred Prosecution Agreement, United States v. Cruise, LLC, No. 3:24-cr-00572-SI (N.D. Cal.), ECF No. 2, with Attachment A Statement of Facts"
    publisher: "United States District Court for the Northern District of California, retrieved from the RECAP Archive"
    published: 2024-11-15
    url: "https://storage.courtlistener.com/recap/gov.uscourts.cand.439386/gov.uscourts.cand.439386.2.0.pdf"
    accessed: 2026-09-13
    roles:
      - direct-evidence
      - primary-investigation
    source_family: us-v-cruise-criminal
    access: "The prosecution's own reconstruction of 2 and 3 October 2023, built from the evidence Cruise surrendered — internal Slack and group messages quoted verbatim, the talking-points document prepared for the NHTSA call, the text of the 1-day report, and the vehicle's own detection and disengagement behaviour. Cruise stipulated to all of it as true and accurate."
    method: "A charging-stage agreement filed on a public criminal docket, with the Statement of Facts attached as Attachment A and incorporated by reference. The facts are the government's, drafted after an investigation in which Cruise made witnesses available and shared privileged documents under a limited waiver, and then agreed to by the defendant, which stipulated it will neither contest their admissibility nor contradict them should the prosecution be revived."
    conflicts: "Negotiated, not adjudicated. No judge weighed the evidence and no witness was cross-examined; both sides had reasons to settle on this account rather than another. The government had an interest in a Statement of Facts that supports the charge, and Cruise in one that supports the cooperation and remediation credit recited in the agreement. What is unusual, and what makes it load-bearing here, is that the party with the most to lose from each fact is the party that agreed it was accurate."
    corroboration: "Its narrative of the accident, the dragging distance, and the 3 October meetings agrees with the Quinn Emanuel report on every point the two both address, despite being written by opposing parties a year apart. Its penalty and term match GM's audited description of the same agreement. It contradicts no source read for this case, and it resolves a figure this case previously declined to publish."
    accountability: "Signed for the United States by the Acting United States Attorney and two Assistant United States Attorneys, executed by Cruise under authority granted by its Board of Directors, filed on a public court docket under a case number, and disclosable to the public by its own express term."
    notes: "Retrieved as a free document from the RECAP Archive, which is where the docket makes it available without PACER charges; the scanned filing has no text layer and was read page by page from rendered images. Read for this case: the agreement itself in full and Attachment A, the Statement of Facts, in full — 33 numbered paragraphs across ECF pages 15 to 23. Attachment B, the compliance undertakings, was read in part. Locators below cite the ECF page stamp, which is stable across copies, alongside the paragraph number."
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

Cruise's own commissioned investigation, published in January 2024 at 195 pages, found that the company should have volunteered the dragging in every meeting, that its approach reflected "a basic misunderstanding of what regulatory authorities need to know", and that the evidence did not establish an intent to mislead.[^quinn-emanuel] Ten months later Cruise signed a deferred prosecution agreement admitting a charge under 18 U.S.C. § 1519 of submitting a false report to a federal agency to impede, obstruct, or influence a matter within its jurisdiction, and stipulated to a nine-page government Statement of Facts as true and accurate.[^us-v-cruise-dpa]

The criminal count was not about the meetings. It was about two written filings: the 1-day incident report Cruise submitted to NHTSA at around 2:30 p.m. on 3 October, and the 10-day report of 11 October that repeated it. Both described the crash without the secondary movement, which the government says "rendered the report inaccurate and incomplete" against a standing order requiring "a written description of the pre-crash, crash, and post-crash details." The 30-day report of 3 November finally disclosed the dragging.[^us-v-cruise-dpa]

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

**What the vehicle itself could and could not tell.** The government's Statement of Facts adds a detail the company's own report does not dwell on. The AV's software was designed to pull to the side of the road after certain minor crashes — a Minimal Risk Condition manoeuvre. It attempted one "because the AV's detection system did not detect that the woman was underneath it", pulling her about twenty feet at roughly seven miles per hour. What stopped it was not detecting a person. The ADS disengaged and the vehicle halted because it detected that its left rear tyre was raised off the ground.[^us-v-cruise-dpa]

**The morning of 3 October.** Cruise obtained the full 45-second, nine-pane video by 6:28 a.m.[^quinn-emanuel] Notes of a pre-meeting before the NHTSA briefing record employees understanding that the pullover manoeuvre and dragging were "the biggest issue".[^quinn-emanuel] In that same preparation a senior engineer observed that the longer video "will initiate design questions about pullover maneuvers", and a regulatory attorney replied, "For sure. Concern is whether we'll be accused of hiding the ball but let's discuss." The team decided the longer version should be shown.[^us-v-cruise-dpa] In the three government meetings that followed, Cruise played the video and let it speak for itself. Connectivity problems meant it largely did not — and, on the NHTSA call, the engineer also paused the video to take a question and never resumed it, while other Cruise employees on the call realised NHTSA was not seeing the whole thing.[^us-v-cruise-dpa]

At 12:05 p.m. and 12:40 p.m., engineers presented a graphical chart of the pullover manoeuvre and dragging to meetings including the CEO, the COO, the VP and Deputy Counsel for Regulatory & Compliance, and the VP of Global Government Affairs. Nobody called NHTSA or the DMV back.[^quinn-emanuel]

At 3:30 p.m. Cruise met the SF Municipal Transportation Authority, police, and fire. The video played without connectivity problems, several times. City officials saw the dragging for themselves and asked about it — the only meeting that day in which it was discussed at all.[^quinn-emanuel][^us-v-cruise-dpa]

Meanwhile Cruise continued into the afternoon showing media a truncated video that stopped before the collision, focused on correcting the story that the AV had caused the crash.[^quinn-emanuel]

**The paperwork.** Running underneath the meetings was a separate obligation nobody has to be asked about. NHTSA's Standing General Order 2021-01 required Cruise to file an incident report within one calendar day of a crash involving a pedestrian, containing a written description of the pre-crash, crash, and post-crash details, and to file an updated report on the tenth day.[^us-v-cruise-dpa] At around 12:30 p.m. on 3 October — after the NHTSA call, after the engineering charts — the regulatory attorney who had sat in the NHTSA meeting wrote that the "Bigger concern is that no regulator has really clued in that we moved after rolling over the pedestrian." About ten minutes later the same attorney approved the narrative for the 1-day report. It described the Nissan launching the pedestrian, the AV braking aggressively, no damage to the AV, and the other driver leaving the scene. It did not mention the secondary movement. Cruise filed it at around 2:30 p.m.[^us-v-cruise-dpa]

**The consequences.** The full video went to NHTSA at around 1:40 p.m. on 3 October, hours after the meeting;[^us-v-cruise-dpa] it did not reach the DMV for ten days.[^quinn-emanuel] On 24 October the DMV suspended both permits, effective immediately, expressly not affecting the permit for testing with a safety driver.[^dmv-statement] The CPUC followed. Cruise paused all driverless, supervised, and manual AV operations in the United States.[^gm-10k-2024]

## Outcomes and economics

Every figure below is from GM's audited filings, except the terms of the deferred prosecution agreement, which are from the agreement itself.[^gm-10k-2024][^gm-10k-2025][^us-v-cruise-dpa]

| Event | Date | Amount |
| --- | --- | --- |
| Charges on the voluntary US pause (before noncontrolling interest) | FY2023 | $529m, including $250m non-cash |
| Cruise Origin indefinitely delayed | June 2024 | $631m, primarily non-cash |
| CPUC settlement, plus reporting obligations | July 2024 | $112,500 |
| NHTSA consent order, plus two years of enhanced reporting | September 2024 | $1.5m |
| Deferred prosecution agreement, one charged count under 18 U.S.C. § 1519, three-year term | 15 November 2024 | $500,000, payable within 7 days |
| Charges on GM ceasing to fund robotaxi development | December 2024 | $522m, including $173m non-cash |
| Write-off of Cruise technology and intellectual property | FY2024 | $142m |
| Funding to wind down robotaxi operations | FY2025 | $1.1bn |
| Cumulative restructuring cash outflows, complete at year end | to 31 Dec 2025 | $633m |

Cruise's available liquidity fell from $1.3 billion at the end of 2023 to $0.3 billion at the end of 2024.[^gm-10k-2024] GM raised its stake to about 97% by December 2024 and acquired the remaining shares in February 2025, making Cruise wholly owned as it was dismantled.[^gm-10k-2024][^gm-10k-2025] In the first quarter of 2025, $571 million of goodwill sitting in the Cruise segment was reallocated to GM North America, the accounting signature of a business that no longer exists as a business.[^gm-10k-2025]

What survives is not nothing. GM's stated strategy is to redirect the technology to driver assistance and autonomy in personal vehicles, building on Super Cruise.[^gm-10k-2025] The robotaxi service is gone.

The three fines total just over $2.1 million. The charges and wind-down funding total roughly $2.8 billion. The penalties were never the cost.

The non-financial terms of the criminal resolution are the part that bears on how the company was run. The agreement runs three years from filing, extendable by the government in its sole discretion for up to one further year; Cruise must report to the government annually on its remediation; and the remedial measures it affirms include creating a Chief Safety Officer "who is required to approve all reports to regulators and who reports to the Board of the Directors", a cross-disciplinary regulatory team reporting to the CEO, training for every employee who might interact with regulators, and ensuring that the employees identified as responsible for the conduct "are no longer employed by or have a relationship with Cruise."[^us-v-cruise-dpa]

## Causal assessment and competing explanations

This case is labelled **descriptive**, and the label is doing real work. It documents a sequence of events reconstructed from timestamped internal records and official actions. It makes no claim about whether autonomous vehicles are safer or less safe than human drivers, and nothing here should be read as evidence on that question. The pedestrian was struck by a human driver first.

The one causal statement the record does support is narrow and comes from the regulator itself: the DMV suspended the permits on grounds that include misrepresentation of safety information, and stated that it learned of the vehicle's secondary movement from another agency rather than from Cruise.[^quinn-emanuel][^dmv-statement] That the disclosure conduct caused the suspension is the regulator's own account of its own decision, which is about as direct as attribution gets, though it remains one party's characterisation.

Two competing explanations are worth stating.

**"The video was played; the regulators simply did not see it."** Quinn Emanuel finds the weight of evidence supports that Cruise attempted to play the full video and that connectivity problems impeded it. But it treats this as beside the point: Cruise employees watched the transmission freeze, said nothing, and had an affirmative duty to explain regardless.[^quinn-emanuel] The company's own investigators declined to accept its best defence. The government's Statement of Facts, which Cruise stipulated to, adds two things that narrow the defence further: the engineer paused the video to take a question and did not resume it, and other Cruise employees on the call realised NHTSA could not see the whole recording.[^us-v-cruise-dpa] The defence also does not reach the count that was charged, which concerned two written reports rather than anything shown on a screen.

**"This was concealment."** Quinn Emanuel found the evidence did not establish intent to mislead, reasoning that a company concealing a fact would not upload the full video to one federal regulator the same day, offer it to a second, and play it in full to three city agencies.[^quinn-emanuel] Against that reasoning sits a document the report could not have seen. Reading the deferred prosecution agreement directly sharpens the tension rather than settling it, and the sharpening runs in both directions.

Cutting against Quinn Emanuel: the charge Cruise accepted responsibility for is a § 1519 offence, whose statutory elements include acting "to impede, obstruct, or influence" a federal matter, and Cruise agreed the facts alleged in the Information were true and accurate.[^us-v-cruise-dpa] The stipulated facts also include the "hiding the ball" exchange, the "no regulator has really clued in" message, and the approval of a report narrative ten minutes after it.

Cutting the other way: the Statement of Facts itself never asserts an intent to deceive. Where it states the legal effect of the conduct, it says the failure to disclose "had the tendency to influence the proper administration of the matter" and that the reports "were misleading and inaccurate" — the language of effect, not of purpose. And the agreement was negotiated, so no factfinder ever tested either characterisation.

This case records the tension and does not resolve it. The two findings can coexist in law. They should not coexist silently in a case record, and this one states both wherever either is relevant.

## Failures, limitations, and governance

- **The information was inside the building and did not travel to the people who needed it.** A 3:45 a.m. Slack message, a 6:56 a.m. war-room message, and two leadership meetings with 109 attendees, all before the first regulator briefing.[^quinn-emanuel]
- **Disclosure was delegated to a video file.** The chosen method was to play footage and answer questions; when the questions did not come, the method silently failed and nobody noticed it had.[^quinn-emanuel]
- **The one meeting that worked worked by accident.** City agencies learned the truth because the connection happened to hold, not because anyone told them.[^quinn-emanuel]
- **A second chance was taken and not used.** By early afternoon on 3 October the CEO, COO, and the senior legal and government-affairs executives had all seen an engineering chart of the dragging. No one called the regulators back.[^quinn-emanuel]
- **Ten days to send the DMV a video that reached NHTSA in hours.**[^quinn-emanuel]
- **The company optimised for the media narrative.** Quinn Emanuel attributes the failure in part to leadership's "myopic focus on rebutting the media narrative that the AV had caused the Accident" — a defensible concern that consumed everything around it.[^quinn-emanuel]
- **Three regulators, three separate conversations, no single owner of the disclosure.** The DMV learned the decisive fact from another agency.[^quinn-emanuel]
- **The written report was the offence, and nobody treated it as one.** The meetings absorbed the attention; the 1-day report under NHTSA's standing order was approved by one attorney ten minutes after that attorney wrote that no regulator had noticed the secondary movement, and filed with a narrative that omitted it. The 10-day report repeated it. Neither is the kind of document a war room convenes over.[^us-v-cruise-dpa]
- **The vehicle could not tell it had someone underneath it.** The pullover began because the detection system did not register the pedestrian beneath the car; the manoeuvre ended because the car noticed a raised rear tyre. A system that can detect a wheel lifting and not a person under the chassis has a gap that no disclosure process can close.[^us-v-cruise-dpa]
- **A statement made to a regulator was itself inaccurate on that point.** On the NHTSA call Cruise employees said that both the remote assistant and the AV's sensors had detected the pedestrian was trapped — while the stipulated facts state the detection system did not detect her underneath the vehicle.[^us-v-cruise-dpa]
- **The correction of the public record went wrong too.** After the DMV suspension Cruise told the public and Congressional offices it had "shared the complete video of the incident with our regulators and investigators within 24 hours", when only NHTSA had received the complete video in that window.[^us-v-cruise-dpa]
- **The response to being found out was to look for the leak.** When a reporter put the twenty feet to Cruise on 5 October, executives asked how city officials had "leak[ed]" it and tried to identify the source, declined to share the video, and said the company had nothing to add to its original statement.[^us-v-cruise-dpa]
- **The investigation was privileged and published anyway.** Every page is marked as attorney-client privileged work product. Cruise and GM released it in full and sent it to all three regulators — the opposite choice from the one in this library's Workday case, where bias-testing data was withheld on privilege grounds. The choice is recorded as having paid: the government's stated reasons for offering a deferred prosecution rather than charging out include Cruise "conducting a thorough internal investigation and making the findings of that investigation public" and "sharing certain privileged documents with the government pursuant to a limited waiver of privilege."[^us-v-cruise-dpa]

## What this case demonstrates

1. For a deployed physical AI system, the operator's account of what the system did is part of the safety case. Cruise lost its permits on disclosure grounds, not on a finding that the vehicle was unsafe to a degree that alone required suspension.
2. Automation creates facts that only the operator can see. The pullover manoeuvre was invisible to bystanders and to the media video; it existed in telemetry and in a nine-pane recording that only Cruise controlled.
3. The routine filing is where liability lands. Three meetings with regulators produced no charge; two incident reports filed under a standing order produced a criminal count. The document nobody staffed was the one that carried the offence.
4. Showing is not telling. A regulator briefing that depends on a video rendering correctly over a conference call has a single point of failure and no error detection.
5. Internal knowledge does not equal organisational disclosure. Information known by 109 people at 6:45 a.m. was not conveyed at 11:30 a.m., and no process existed to notice the gap.
6. Fragmented regulation punishes fragmented communication. Three regulators told three different amounts got their information from each other, and the resulting distrust was harder to repair than the original omission.
7. The penalty is not the cost. Roughly $2.1 million in fines against roughly $2.8 billion in charges and wind-down funding.
8. An honest internal investigation can be published without waiving the company's position, and prosecutors will say on the record that publishing it counted in the company's favour.
9. Regulatory trust is a load-bearing component of a physical AI deployment. Nothing in the vehicle stack was changed by the events of 3 October; the business ended anyway.

## What this case does not demonstrate

- It does not show that autonomous vehicles are more or less safe than human drivers. The record contains one accident, initiated by a human driver, and no comparative rate of any kind.
- It does not establish that Cruise intended to deceive. Its own commissioned investigation found the evidence did not support that; the criminal resolution was negotiated rather than adjudicated, and its Statement of Facts describes the conduct in terms of effect — a tendency to influence — rather than purpose. This case reports both and resolves neither.
- It does not show the vehicle's behaviour was a software defect rather than a designed response. The pullover manoeuvre is described in the sources as what the vehicle was designed to do after a minor crash. That the detection system did not register a person underneath the car is stated as fact in the criminal record, but no source read here characterises it as a defect, and Cruise's subsequent voluntary recall is referred to in the record without its contents being reproduced.
- It does not show what the pedestrian's own account is. She is described throughout in the words of the company that hit her and the government that charged it, and no source read here is hers.
- It does not show what regulators actually saw. Quinn Emanuel says explicitly that neither it nor Cruise can establish that.[^quinn-emanuel]
- It does not isolate the disclosure failure as the sole cause of the business closing. Robotaxi economics, GM's capital priorities, and competitive position all sit in the same period and none is quantified against the others in these sources.
- It does not describe the NHTSA consent order in its own terms; that one still reaches this case through GM's audited description. The deferred prosecution agreement is now read directly, but the Information it charges and the penalty sheet attached to it sit behind PACER and were not read.
- It does not tell you whether the pedestrian's injuries were worsened by the dragging. No source read here addresses her medical outcome, and this case makes no claim about it.

## Evidence assessment

**Grade A — a regulator's own action, a signed criminal agreement on a public docket, audited financial statements, and a document-level investigation, converging.**

The chains are genuinely different in kind. The DMV published the grounds for its own decision.[^dmv-statement] GM's 10-Ks state every charge and every settlement under audit and under securities-law liability, across two consecutive years that agree with each other.[^gm-10k-2024][^gm-10k-2025] Quinn Emanuel had access nobody else has had — Slack timestamps, meeting notes, the pre-meeting notes before the NHTSA briefing, and the employees themselves — and used it to reconstruct a minute-by-minute account that is materially adverse to the clients who commissioned it.[^quinn-emanuel] And in the deferred prosecution agreement Cruise stipulated to a government account of its own conduct in a criminal proceeding, which is the strongest single evidentiary object in this case.[^us-v-cruise-dpa]

That last document was a named gap at publication and is no longer one. It was retrieved as a free filing from the RECAP Archive — docket 3:24-cr-00572-SI, ECF No. 2 — and read in full, the agreement and the nine-page Statement of Facts. Doing so changed the case in three ways worth stating plainly. It moved the criminal admission from GM's description to the document itself. It relocated the offence: the charged conduct is the 1-day and 10-day written reports to NHTSA, not the verbal briefings the case had been organised around. And it settled a figure this case had deliberately refused to publish, on which see below.

Three things still bound the record.

*One decisive document is still unread.* NHTSA's consent order exists here only as GM describes it, because nhtsa.gov returns 403 from this sandbox. GM's description is audited and legally exposed, which is why the claims drawn from it are labelled Verified rather than Attributed — but a reader should know the government's own words have not been checked. The DMV's Order of Suspension is in the same position, quoted here through Quinn Emanuel's reproduction of it. The Information and penalty sheet on the criminal docket are behind PACER.

*The criminal record is negotiated, not adjudicated.* The Statement of Facts is the government's narrative, agreed to by a defendant buying certainty. No judge weighed it and no witness was cross-examined. Its unusual evidentiary weight comes from the direction of the incentives — each fact in it is adverse to the party that signed it — not from any judicial finding.

*The investigation is client work product.* The report is stamped privileged on every page and was written for the boards of the companies investigated. It is unusually candid — it rejects its own clients' best defence and calls the leadership deficient by name of function — and that candour is exactly what a well-run defensive investigation looks like. Its scope was set by the client, its limitations are its own to declare, and nobody independent has checked what it left out.

*Its central conclusion on intent is in tension with the criminal resolution.* Quinn Emanuel, in January 2024, found no evidence establishing intent to mislead.[^quinn-emanuel] In November 2024 Cruise accepted responsibility for a § 1519 charge whose elements include acting to impede, obstruct, or influence — while the Statement of Facts attached to the same agreement describes the conduct only as having "the tendency to influence".[^us-v-cruise-dpa] The two can coexist in law. They should not coexist silently in a case record, and this one states both wherever either is relevant.

One discrepancy is now closed. At publication this case recorded that press accounts carried a dragging speed of "up to 7 mph" that appeared in none of the primary sources read, and omitted it. The Statement of Facts gives it twice — "approximately 7 miles per hour" for the manoeuvre and "over seven miles per hour" for the dragging — so the figure is now published on primary authority, and the two phrasings in the same document are themselves recorded rather than averaged. The distance is corroborated: Quinn Emanuel's "approximately 20 feet" and the government's "approximately twenty feet" agree.

On conflicts: the DMV is the accusing party describing its own action; GM is the parent of the company at fault; Quinn Emanuel was paid by that parent. There is no disinterested narrator anywhere in this record. What makes it grade A is not that any single source is neutral but that the interests point in opposing directions and the accounts still agree.

## Material claims

| Claim | Label | Evidence | What would change this |
| --- | --- | --- | --- |
| A human-driven Nissan struck the pedestrian first and propelled her into the Cruise vehicle's path. | Verified | Reconstruction from vehicle data and video in the commissioned investigation; the DMV's own order, as quoted there, does not dispute it[^quinn-emanuel] | Contradictory evidence from the underlying video or the police investigation |
| After the initial stop, the Cruise vehicle performed a pullover manoeuvre and dragged the pedestrian approximately 20 feet. | Verified | Established in the investigation from vehicle telemetry and the full video, and stipulated as "approximately twenty feet" in the government's Statement of Facts[^quinn-emanuel][^us-v-cruise-dpa] | A materially different distance in the vehicle data, or a finding the manoeuvre did not occur |
| The vehicle dragged her at roughly seven miles per hour. | Verified | Stipulated in the Statement of Facts, which gives "approximately 7 miles per hour" for the manoeuvre and "over seven miles per hour" for the dragging[^us-v-cruise-dpa] | The underlying telemetry showing a different speed; note the two phrasings in the same document are not identical |
| The AV's detection system did not detect that the pedestrian was underneath the vehicle, and the manoeuvre ended when the vehicle detected a raised rear tyre. | Verified | Stated as fact in the Statement of Facts and stipulated to by Cruise[^us-v-cruise-dpa] | Engineering records showing the detection stack did register her |
| Cruise employees knew of the dragging before the 10:30 NHTSA and 11:30 DMV meetings on 3 October. | Verified | Slack messages timestamped 3:45 a.m. and 6:56 a.m., two leadership meetings at 6:00 and 6:45 a.m. with 109 attendees, and pre-meeting notes calling it "the biggest issue"[^quinn-emanuel] | Evidence the timestamps or attendance records were misread |
| Nobody at Cruise verbally disclosed the dragging in those meetings. | Verified | Conceded by Cruise leadership and by the employees who briefed regulators[^quinn-emanuel] | A contemporaneous record of the disclosure being made |
| Internet connectivity problems prevented regulators from seeing the full video clearly. | Supported | The weight of evidence in the investigation supports it, and the report states neither it nor Cruise can definitively establish what regulators saw; the criminal Statement of Facts confirms technical issues on the NHTSA call[^quinn-emanuel][^us-v-cruise-dpa] | Regulator-side records of the calls, or testimony from the officials present |
| On the NHTSA call the engineer also paused the video to answer a question and did not resume it, and other Cruise employees realised NHTSA was not seeing the complete video. | Verified | Stipulated in the Statement of Facts[^us-v-cruise-dpa] | A contemporaneous recording of the call showing otherwise |
| The DMV suspended both permits on 24 October 2023, on grounds including misrepresentation of safety information. | Verified | The department's own published statement, citing 13 CCR §228.20(b)(6), §228.20(b)(3), §227.42(b)(5), and §227.42(c)[^dmv-statement] | A subsequent withdrawal or amendment of the suspension grounds |
| The DMV learned of the vehicle's secondary movement from another government agency rather than from Cruise. | Supported | The Order of Suspension says so, quoted in the investigation; the order itself was not read directly[^quinn-emanuel] | Reading the order and finding the quotation inaccurate |
| Cruise employees did not intend to mislead regulators. | Disputed | The commissioned investigation found the evidence did not establish intent; Cruise then accepted responsibility for a charge under 18 U.S.C. § 1519, whose elements include acting to impede, obstruct, or influence — while the Statement of Facts attached to the same agreement describes the conduct only as having "the tendency to influence"[^quinn-emanuel][^us-v-cruise-dpa] | An adjudicated finding on mental state; the agreement was negotiated and no factfinder tested either characterisation |
| Cruise admitted one count of submitting a false report to a federal agency and paid $500,000. | Verified | The agreement itself, read from the court docket: the charge is under 18 U.S.C. § 1519 and the penalty is $500,000 to the Treasury within seven days of filing; GM's audited annual report describes it the same way[^us-v-cruise-dpa][^gm-10k-2024] | A superseding agreement or a later amendment on the docket |
| The charged conduct was the written 1-day and 10-day incident reports to NHTSA, not the verbal briefings of 3 October. | Verified | The Statement of Facts places the offence in the reports of 3 and 11 October and states the omission "rendered the report inaccurate and incomplete"; the 30-day report of 3 November disclosed the dragging[^us-v-cruise-dpa] | Reading the Information itself and finding it charges different conduct |
| After the DMV suspension Cruise told the public and Congressional offices it had shared the complete video with its regulators within 24 hours, when only NHTSA had received it in that window. | Verified | Stipulated in the Statement of Facts[^us-v-cruise-dpa] | Evidence a second regulator did receive the complete video within 24 hours |
| The agreement obliges Cruise to a three-year term, annual reporting to the government, a Chief Safety Officer who must approve all reports to regulators, and separation of the employees held responsible. | Verified | The agreement's remediation and reporting provisions and Attachment B[^us-v-cruise-dpa] | A later modification on the docket, or evidence the undertakings were not implemented |
| Publishing the privileged internal investigation counted in Cruise's favour with prosecutors. | Verified | The agreement's Relevant Considerations and Cooperation paragraphs name "making the findings of that investigation public" and "sharing certain privileged documents with the government pursuant to a limited waiver of privilege" among the reasons for the deferral[^us-v-cruise-dpa] | Nothing in the record read here; this is the government's own stated reasoning |
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

> “Cruise admits, accepts, and acknowledges that it is responsible under United States law for the acts of its current and former officers, employees, and agents as charged in the Information and as set forth in the Statement of Facts, attached as Attachment A and incorporated by reference into this Agreement, and that the facts alleged in the Information and described in the Statement of Facts are true and accurate.”

— United States Attorney's Office for the Northern District of California and Cruise, LLC, in the Deferred Prosecution Agreement[^us-v-cruise-dpa] · locator: Deferred Prosecution Agreement ¶ 2, ECF page 2 of 28

> “For sure. Concern is whether we'll be accused of hiding the ball but let's discuss.”

— A Cruise regulatory attorney, replying to a senior engineer's observation that the longer video "will initiate design questions about pullover maneuvers", while the team prepared for the NHTSA call[^us-v-cruise-dpa] · locator: Statement of Facts ¶ 18, ECF page 19 of 28

> “Bigger concern is that no regulator has really clued in that we moved after rolling over the pedestrian.”

— A Cruise regulatory attorney at around 12:30 p.m. on 3 October 2023, about ten minutes before approving the narrative for the 1-day report to NHTSA[^us-v-cruise-dpa] · locator: Statement of Facts ¶ 26, ECF page 21 of 28

> “That omission rendered the report inaccurate and incomplete in light of the SGO, which required Cruise to disclose aspects of the accident.”

— The Statement of Facts, on the 1-day incident report's silence about the secondary movement[^us-v-cruise-dpa] · locator: Statement of Facts ¶ 26, ECF page 22 of 28

> “While the woman was under the Cruise AV, because the AV's detection system did not detect that the woman was underneath it, the AV attempted to perform a MRC maneuver, pulling her forward approximately twenty feet and reaching a speed of approximately 7 miles per hour.”

— The Statement of Facts, on what the automation did and did not perceive[^us-v-cruise-dpa] · locator: Statement of Facts ¶ 9, ECF page 17 of 28

> “In November 2024, Cruise entered into a Deferred Prosecution Agreement (DPA) with the U.S. Attorney's Office for the Northern District of California relating to the October 2023 accident. Under the terms of the DPA, Cruise admitted to one count of submitting a false report to a federal agency and paid a $500,000 monetary penalty.”

— General Motors, in its audited annual report[^gm-10k-2024] · locator: Note on Commitments and Contingencies, Cruise regulatory matters

## Revision notes

- 2026-09-13 — Source review. Closed the largest of the three gaps named at publication. The deferred prosecution agreement was found on the public criminal docket, *United States v. Cruise, LLC*, No. 3:24-cr-00572-SI (N.D. Cal.), and retrieved free from the RECAP Archive as ECF No. 2; the scanned filing has no text layer and was read page by page from rendered images. Added as a fifth source and a fifth source family, `us-v-cruise-criminal`. Three substantive consequences. First, the criminal admission and its terms now rest on the agreement itself rather than on GM's description of it. Second, the charged conduct turns out to be the written 1-day and 10-day incident reports to NHTSA, not the verbal briefings the case had been built around — a new section and four new claims record that. Third, the "up to 7 mph" figure this case had deliberately omitted as press-only is stipulated twice in the government's Statement of Facts, so the discrepancy note is replaced by a published figure, with the document's own two phrasings recorded rather than reconciled. The intent claim stays `Disputed` and its evidence is now sharper in both directions: the charged offence under 18 U.S.C. § 1519 carries an intent element Cruise accepted responsibility for, while the Statement of Facts describes the conduct only as having "the tendency to influence". Grade unchanged at A; the record was already A and this deepens rather than lifts it. NHTSA's consent order and the DMV's Order of Suspension remain unread, and the Information and penalty sheet sit behind PACER.
- 2026-09-13 — Initial publication at Grade A. Four chains with opposing interests: the regulator's own published grounds, a 195-page privileged investigation published in full by the companies it examined, and two consecutive audited annual reports. Labelled `descriptive` deliberately — the case reconstructs a sequence and makes no claim about autonomous-vehicle safety rates, and the one causal statement it carries is the regulator's account of its own decision. Records the central tension without resolving it: the commissioned investigation found no evidence of intent to mislead in January 2024, and in November 2024 the company admitted submitting a false report to a federal agency. Also records that NHTSA's consent order, the deferred prosecution agreement, and the DMV's Order of Suspension were all unreadable from this sandbox and reach the case through GM's audited description or Quinn Emanuel's quotation. Omits the "up to 7 mph" figure that appears widely in press accounts and in none of the primary sources read. First case in the library with a `physical-system` deployment pattern; related to AAI-2026-005 by contrast, since Cruise published a privileged investigation where Workday withheld bias-testing data on privilege grounds.

[^quinn-emanuel]: Quinn Emanuel Urquhart & Sullivan, LLP, [“Report to the Boards of Directors of Cruise LLC, GM Cruise Holdings LLC, and General Motors Holdings LLC Regarding the October 2, 2023 Accident in San Francisco”](https://assets.ctfassets.net/95kuvdv8zn1v/1mb55pLYkkXVn0nXxEXz7w/9fb0e4938a89dc5cc09bf39e86ce5b9c/2024.01.24_Quinn_Emanuel_Report_re_Cruise.pdf), 2024-01-24, 195 pages.

[^dmv-statement]: California Department of Motor Vehicles, [“DMV Statement on Cruise LLC Suspension”](https://www.dmv.ca.gov/portal/news-and-media/dmv-statement-on-cruise-llc-suspension/), 2023-10-24.

[^us-v-cruise-dpa]: United States Attorney's Office for the Northern District of California and Cruise, LLC, [Deferred Prosecution Agreement, *United States v. Cruise, LLC*, No. 3:24-cr-00572-SI (N.D. Cal.), ECF No. 2](https://storage.courtlistener.com/recap/gov.uscourts.cand.439386/gov.uscourts.cand.439386.2.0.pdf), filed 2024-11-15, 28 pages including Attachment A (Statement of Facts), Attachment B (compliance undertakings), and Attachment C. Retrieved free from the RECAP Archive; the scan has no text layer and was read from rendered page images.

[^gm-10k-2024]: General Motors Company, [Annual Report on Form 10-K for the fiscal year ended December 31, 2024](https://www.sec.gov/Archives/edgar/data/1467858/000146785825000032/gm-20241231.htm), filed 2025-01-28, SEC accession 0001467858-25-000032.

[^gm-10k-2025]: General Motors Company, [Annual Report on Form 10-K for the fiscal year ended December 31, 2025](https://www.sec.gov/Archives/edgar/data/1467858/000146785826000013/gm-20251231.htm), filed 2026-01-27, SEC accession 0001467858-26-000013.
