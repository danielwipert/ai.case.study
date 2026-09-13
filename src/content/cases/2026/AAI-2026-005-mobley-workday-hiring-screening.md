---
case_id: AAI-2026-005
title: "The bias testing a court agreed nobody gets to see"
summary: "In a collective action alleging that Workday's AI applicant screening disparately rejected Black, older, and disabled candidates, a federal court held the company's own bias-testing data privileged because its lawyers had curated it for legal advice."
organization:
  - Workday
case_type: governance-regulatory
secondary_case_types:
  - deployment
industry:
  - technology
business_function:
  - human-resources
  - legal-compliance
deployment_stage: scaled-production
outcome: unknown
evidence_grade: A
status: published
created: 2026-09-12
published: 2026-09-12
last_verified: 2026-09-13
next_review: 2027-03-13
geography:
  - United States
environment: production
deployment_pattern:
  - decision-support
causal_strength: descriptive
related_cases: []
evidence_upgrade_path: "At grade A the question is what would still strengthen the record or force a downgrade. The discovery order itself is now read directly; what remains unread is the rest of the docket that would let a reader assess the merits rather than the procedure — the Third Amended Complaint at ECF No. 287, the declaration supporting the privilege claim at ECF No. 316, the EEOC's amicus brief, and any statistical evidence filed on the disparate-impact question. A merits ruling or a class-certification decision would resolve claims this case can only record as disputed. A reversal on reconsideration or appeal, or a later waiver finding, would force a downgrade of the procedural claims."
sources:
  - id: mobley-order
    author: "Laurel Beeler, United States Magistrate Judge"
    title: "Discovery Order, Mobley v. Workday, Inc., No. 23-cv-00770-RFL (LB) (N.D. Cal.), ECF No. 340"
    publisher: "United States District Court for the Northern District of California"
    published: 2026-05-29
    url: "https://blogs.duanemorris.com/classactiondefense/wp-content/uploads/sites/56/2026/06/2026.05.29-Privilege-Bias-Test-Ruling.pdf"
    accessed: 2026-09-13
    roles:
      - direct-evidence
      - primary-investigation
    source_family: mobley-court-record
    access: "The court's own resolution of three discovery disputes, written by the magistrate judge who heard them, with pinpoint citations to the briefs, declarations and exhibits on the docket."
    method: "A signed discovery order on full briefing and a hearing. It recites each side's arguments before ruling, cites the authority it relies on, and states the scope of what it decides."
    conflicts: "None. The court is the one party to this record with no stake in the outcome."
    corroboration: "Independently read and quoted by two law firms on opposite reading assignments, and consistent with the defendant's own securities disclosure on the litigation's posture."
    accountability: "A signed order of a federal court, filed on a public docket with an ECF number, reviewable by the district judge and on appeal."
    notes: "Read in full, 13 pages, from the copy the Duane Morris blog published — the court's own docket endpoints require authentication from this sandbox, so this is a relay of the document rather than a retrieval from PACER, and the copy carries the court's ECF header stamp. It is signed 2026-05-28 and stamped filed 2026-05-29, which resolves a date discrepancy this case previously could not."
  - id: wday10q
    author: "Workday, Inc."
    title: "Quarterly report on Form 10-Q for the quarterly period ended July 31, 2026"
    publisher: "United States Securities and Exchange Commission"
    published: 2026-08-27
    url: "https://www.sec.gov/Archives/edgar/data/1327811/000132781126000044/wday-20260731.htm"
    accessed: 2026-09-12
    roles:
      - participant-account
      - direct-evidence
    source_family: workday-sec-filings
    access: "The defendant's own books and legal assessment, including its risk-factor description of this litigation and the loss-contingency judgement behind its Legal Matters note."
    method: "Disclosure prepared under US GAAP and SEC rules, which require material contingencies to be described and accrued or explained, and which expose the company to liability for material misstatement."
    conflicts: "Written by the defendant about litigation against it, and framed for investors. It characterises the claims without naming the case or reciting the rulings against it."
    corroboration: "Independent of the court-record chain. Its account of the litigation's posture can be read against the two firm analyses, and the two do not describe the same facts the same way."
    accountability: "A filed regulatory record with a fixed accession number, subject to restatement and enforcement."
    notes: "Read for this case. States that the company believes the claims lack merit and that the majority of the claims have been dismissed, and that as of 2026-07-31 there was not at least a reasonable possibility of a material loss."
  - id: duanemorris
    author: "Gerald L. Maatman, Jr., Adam D. Brown, and Elizabeth G. Underwood"
    title: "California Federal Court Clarifies Limits On AI Bias Testing And Applicant Data Disclosure In Mobley v. Workday"
    publisher: "Duane Morris Class Action Defense Blog"
    published: 2026-06-02
    url: "https://blogs.duanemorris.com/classactiondefense/2026/06/02/california-federal-court-clarifies-limits-on-ai-bias-testing-and-applicant-data-disclosure-in-mobley-v-workday/"
    accessed: 2026-09-12
    roles:
      - analysis
    source_family: mobley-court-record
    access: "The court's discovery order, cited as 2026 WL 1510537 (N.D. Cal. May 29, 2026), ECF No. 340, which the authors read and quote directly."
    method: "Clause-by-clause reading of the order with pinpoint citations, written for defence counsel."
    conflicts: "A defence-side firm writing for corporate clients, with a professional interest in how employers should structure bias testing. It draws the practical lesson that testing should be run under privilege."
    corroboration: "Its description of the order agrees with Norton Rose Fulbright's independent reading on every substantive holding, though the two give different dates for the order."
    accountability: "Three named attorneys at an identified firm, dated, quoting the order with citations a reader can verify against the docket."
    notes: "Read for this case. The underlying order could not be retrieved: CourtListener confirms the docket, 3:23-cv-00770 (N.D. Cal., filed 2023-02-21), but its document endpoints require authentication and its search endpoint rate-limited this review."
  - id: nortonrose
    author: "Jesika Silva Blanco, Susana Medeiros, and Susan Linda Ross"
    title: "Behind the privilege shield: Safeguarding AI bias-testing data in employment decisions"
    publisher: "Norton Rose Fulbright, Inside Tech Law"
    published: 2026-06-24
    url: "https://www.insidetechlaw.com/blog/2026/06/behind-the-privilege-shield-safeguarding-ai-bias-testing-data-in-employment-decisions"
    accessed: 2026-09-12
    roles:
      - analysis
    source_family: mobley-court-record
    access: "The same discovery order, which these authors date 2026-05-28, together with the case's procedural history and Workday's public statements about its tools."
    method: "Legal analysis for employers, summarising the holding and its compliance implications."
    conflicts: "A defence-side firm advising employers on preserving privilege over AI validation work."
    corroboration: "Reached the same reading of the holding as Duane Morris while working separately, which corroborates what the order says rather than the truth of the allegations."
    accountability: "Three named attorneys at an identified firm, dated, with the case caption and docket number given."
    notes: "Read for this case. Supplies the plaintiff's allegations, the claim statutes, the May 2025 conditional collective certification, and Workday's public position that its recruiting tools do not make hiring decisions."
tags:
  - algorithmic-screening
  - employment-discrimination
  - hiring
  - legal-privilege
  - litigation
---

## Case in one sentence

A federal court in California held that Workday's own AI bias-testing data is shielded from discovery by attorney-client privilege, because the company's lawyers curated it and commissioned it for legal advice, in a collective action alleging its applicant screening disparately rejected Black, older, and disabled candidates.

## Executive summary

Derek Mobley, who is Black and over 40, alleges that since 2017 he applied to more than 100 jobs at companies using Workday's screening features and was rejected every time. He sued Workday under Title VII, Section 1981, the Age Discrimination in Employment Act, and the Americans with Disabilities Act.[^nortonrose] In May 2025 the court conditionally certified an ADEA collective action; class certification on the remaining claims was still pending as of mid-2026.[^nortonrose]

The ruling that makes this a case for this library is procedural. In late May 2026 the court denied the plaintiffs' motion to compel production of Workday's bias-testing data, holding it privileged: Workday's attorneys had curated the data, the testing's purpose was legal advice rather than business use, and the results had not been submitted to any regulator.[^duanemorris] The court also rejected the argument that Workday waived privilege by publicly stating, in an AI fact sheet, that it performs bias testing.[^duanemorris]

The same order denied production of customers' applicant data, finding Workday lacked "control" of it under Rule 34, and granted production of Workday's own EEO-1 and federal-contractor compliance documents as relevant to what the company knew about demographic disparities in tools it also uses itself.[^duanemorris]

Workday's position, in its own words to investors, is that the claims lack merit and that the majority of them have been dismissed.[^wday10q] Its accounts record no reasonably possible material loss as of 2026-07-31.[^wday10q]

## Research question

When an organisation tests its own AI system for bias, who is entitled to see the results — and what does the answer do to the incentive to test?

## Organization and operating context

Workday sells HR and finance software used by a very large number of employers; the Norton Rose Fulbright analysis quotes the company's own figure of more than 11,000 entities.[^nortonrose] Within its recruiting product, an algorithmic feature called Candidate Skills Match scores how well an applicant's skills match a role. Its 2024 acquisition of HiredScore added Spotlight, a candidate review tool, and Fetch, a sourcing tool that suggests people for open jobs.[^duanemorris]

The company's public position is that its "AI recruiting tools don't make hiring decisions and are designed with human oversight at their core."[^nortonrose] The litigation tests a different question: whether a screening system that ranks and filters applicants before a human sees them can produce disparate outcomes regardless of who formally decides.

## The situation before AI

Employment discrimination law was built for decisions made by people at identifiable moments, and its evidentiary machinery assumes a decision-maker whose reasoning can be probed. Screening at volume changes the shape of the problem: the filtering happens upstream, applies uniformly, and leaves a record in a vendor's system rather than a manager's inbox.

That shift also relocates the evidence. An applicant rejected by a hiring manager can seek that employer's records. An applicant screened out by a vendor's model must reach the vendor — and, as this case shows, the vendor's most probative evidence may be held by its lawyers.

## The AI intervention or event

The events at issue are not a deployment decision but a discovery fight over one. Plaintiffs sought three things: Workday's bias-testing data, its customers' applicant data, and deanonymised applicant information.[^duanemorris]

The court denied the first on privilege. It found Workday had shown more than mere attorney direction, having "represented that its attorneys curated the data it used in the bias testing, the overall purpose of the testing was to provide legal advice and not to be used in a business capacity, and it ha[d] not submitted the data to a regulatory body."[^duanemorris] On waiver, the court held that invoking the mere existence of bias testing outside litigation was not enough to waive the privilege.[^duanemorris]

It denied the second because a contract clause letting Workday produce customer data under a court order did not amount to "control" under Rule 34, while noting that subpoenaed third parties had pointed plaintiffs back at Workday, and encouraging the parties to sort it out.[^duanemorris] It granted the third category in part, ordering production of Workday's EEO-1 and federal-contractor compliance documents because Workday uses the same AI tools it sells, making those documents relevant to its knowledge of potential demographic disparities.[^duanemorris]

## Outcomes and economics

There is no outcome yet. The case is live, the allegations are unproven, and the central claims have not been tried.

What the record does establish is an asymmetry in who can see what. The party best positioned to know whether these tools produce disparate outcomes is the vendor, the vendor's knowledge is concentrated in testing its lawyers commissioned, and that testing is now protected. Meanwhile Workday's own workforce compliance filings were ordered produced precisely because it uses its own tools.

Economically, Workday tells investors that as of 2026-07-31 there was "not at least a reasonable possibility" of a material loss on its loss contingencies.[^wday10q] That is an accounting judgement about probability, not an estimate of cost, and no legal spend figure is disclosed. The reputational exposure the company does acknowledge is commercial: it names the risk that these claims harm its brand and its "ability to sell newly acquired products that use AI."[^wday10q]

## Causal assessment and competing explanations

This case is descriptive and makes no causal claim. Nothing in the reviewed record establishes that Workday's tools cause disparate outcomes; nothing establishes that they do not. The disparate-impact question is exactly what the litigation has not yet reached.

Mobley's own experience — over 100 rejections — is consistent with algorithmic screening that disadvantages his protected characteristics, and equally consistent with a competitive market, particular job fit, or the ordinary attrition of mass applications. A single applicant's record cannot separate these, which is why the statistical evidence matters and why access to it is the fight.

The privilege holding itself has a plain reading and a cynical one. The plain reading is that legal advice about legal exposure is privileged, as it is in every other domain. The cynical reading is that any company can now obtain the same protection by routing its bias testing through counsel, and that Duane Morris draws exactly this lesson for clients is a fact about incentives, not a criticism of the court.[^duanemorris]

## Failures, limitations, and governance

- **Evidence asymmetry:** The most informative evidence about a system's disparate impact sits with the vendor and can be placed beyond reach by commissioning it through counsel.
- **A perverse incentive:** After this ruling, the structurally safe way to test for bias is to have lawyers curate the data, keep the results out of business use, and not submit them to a regulator — precisely the conditions that make the testing undiscoverable, and also the conditions that keep it from informing the product.
- **Public assurance without exposure:** Workday's public statement that it performs bias testing was held insufficient to waive the privilege over what the testing found.[^duanemorris]
- **Customer exposure:** The employers who bought the tools sit in an unresolved position; the plaintiff may seek to litigate against them, a risk Workday itself flags to investors.[^wday10q][^duanemorris]
- **Two accounts of the same case:** The defendant tells investors that most claims have been dismissed; the firm analyses describe a conditionally certified collective action with class certification pending. Both can be literally true and they leave very different impressions.
- **Record access:** This review could not read the order itself, only two professional summaries of it.

## What this case demonstrates

1. Discovery rules, not model documentation, may decide what anyone ever learns about a deployed system's disparate impact.
2. Privilege law now shapes how AI bias testing gets designed: who commissions it, who touches the data, whether results reach the product team, and whether a regulator ever sees them.
3. A vendor's public claim to test for bias is not, by itself, a commitment that anyone can inspect the testing.
4. Vendors that use their own tools internally create a second evidentiary route into their knowledge, which is how the EEO-1 and compliance documents became discoverable here.
5. Buyers of screening tools inherit exposure they cannot audit, since the evidence about the tool is held — and may be privileged — by the seller.
6. A company's investor disclosures and the litigation record are both true accounts written for different audiences, and reading only one of them gives a misleading picture.

## What this case does not demonstrate

- It does not establish that Workday's tools discriminate; the allegations are unproven and the merits untried.
- It does not establish that they do not, and the ruling reviewed here is about access to evidence rather than about the evidence's content.
- It does not tell us what Workday's bias testing found.
- It does not resolve whether employers using the tools bear liability.
- It does not quantify the litigation's cost to Workday, its customers, or applicants.
- It does not generalise to other vendors, whose testing may be structured entirely differently.

## Evidence assessment

**Grade A — the order itself, read directly, corroborated by two independent readings and by the defendant's own filing.** This case was published at B because the order had been read only through professional summaries. It has since been obtained and read in full, and the grade moves with the evidence.

The order is the strongest kind of record available for a procedural claim: written by the judge who decided it, reciting each side's arguments before ruling, citing the briefs and declarations it relies on by ECF number, and stating the limits of what it decides.[^mobley-order] Against it sit two analyses written independently by named attorneys at two identified firms, which agree with the order and with each other on every substantive holding,[^duanemorris][^nortonrose] and the defendant's own SEC filing, which is independent of the court-record chain and written under rules that penalise material misstatement.[^wday10q]

Reading the order resolved the discrepancy this case previously had to leave open. Duane Morris dated it May 29, 2026; Norton Rose Fulbright said May 28. Both are right about different things: Judge Beeler signed it on 28 May and the clerk stamped it filed on 29 May.[^mobley-order] The case now cites the filing date and records the signing date.

Reading it also sharpened one thing the summaries flattened. The order closes the privilege section by stating that it addresses **only** the bias-testing data over which Workday claims privilege, and notes Workday's representation that it had disclosed underlying data it is not claiming privilege over.[^mobley-order] This case's title is a headline about what the plaintiffs cannot get; the order is narrower than that, and the narrower version is the accurate one.

Three limits remain, and none is about the holding. The copy read here came from the Duane Morris blog rather than from PACER, because the court's own document endpoints require authentication from this sandbox — it carries the court's ECF header stamp and matches both firms' quotations, but it is a relay of the document rather than a retrieval from the docket. The rest of the docket is unread: the Third Amended Complaint, the declaration at ECF No. 316 supporting the privilege claim, and any statistical evidence. And the case is live, so every claim about the merits remains an allegation — a library that graded an unproven allegation as established would be doing the opposite of its job.

One note on framing. Both firms write from the defence side, for clients who want to know how to keep their own testing privileged. Their reading of the holding is now corroborated by the holding itself; their emphasis still is not neutral, and this case takes its facts from the order.

## Material claims

Each claim carries a controlled label, the evidence behind it, and what would change the label.

| Claim | Label | Evidence | What would change this |
| --- | --- | --- | --- |
| Mobley alleges Workday's screening tools disparately rejected Black, older, and disabled applicants, and that he was rejected from over 100 jobs. | Attributed | The plaintiff's allegations as recited in both firm analyses[^nortonrose][^duanemorris] | A merits ruling, or evidence filed that resolves the disparate-impact question either way |
| The court held Workday's bias-testing data privileged because its attorneys curated it for the purpose of legal advice. | Verified | The order, read directly: Workday "has shown more than mere direction by its attorneys"[^mobley-order]; corroborated by two independent readings[^duanemorris][^nortonrose] | A reversal on reconsideration or appeal |
| A public statement that Workday performs bias testing did not waive that privilege. | Verified | The order, read directly, on Workday's "AI Fact Sheet"[^mobley-order] | A later waiver finding |
| The court ordered production of Workday's EEO-1 and federal-contractor compliance documents, as relevant to Workday's knowledge of demographic disparities. | Verified | The order, read directly[^mobley-order] | A protective-order modification, or a successful objection to the district judge |
| An ADEA collective action was conditionally certified in May 2025, with class certification still pending. | Supported | Reported in the procedural history[^nortonrose] | A decertification order, or a certification ruling on the remaining claims |
| The order decides only the bias-testing data Workday claims is privileged, and Workday represented it had disclosed underlying data it does not claim privilege over. | Verified | Stated in the order's own closing caveat to the privilege section[^mobley-order] | A later order defining the privileged set differently |
| The court declined to compel Workday's customers' applicant data because the plaintiffs did not show control under Rule 34. | Verified | The order, read directly[^mobley-order] | A ruling that Workday controls customer data, or production by the customers themselves |
| Workday disclosed HiredScore bias-testing data on Spotlight to an external consultant in 2023 and does not assert privilege over Spotlight bias-testing data. | Verified | Recited in the order as Workday's own admission, in rejecting a broader waiver[^mobley-order] | Evidence that the admission was mischaracterised |
| Workday failed to retain 2023 and 2024 audit data. | Attributed | Asserted by the plaintiffs; the court records that they offered "no substantive argument" for the remedy they sought and did not decide whether the failure occurred[^mobley-order] | A spoliation motion, or a finding on retention |
| Workday states that the claims lack merit and that the majority have been dismissed. | Attributed | Workday's own risk-factor disclosure[^wday10q] | A ruling inconsistent with the characterisation, or a revised disclosure |
| Workday's tools in fact produce disparate outcomes for protected groups. | Disputed | Plaintiffs allege they do; Workday says the claims lack merit and that its tools do not make hiring decisions[^nortonrose][^wday10q] | Statistical evidence entering the public record, or a merits ruling |
| Workday records no reasonably possible material loss from its loss contingencies as of 2026-07-31. | Verified | The Legal Matters note in the Form 10-Q, read directly[^wday10q] | A later filing that accrues a loss or revises the assessment |
| Employers using the tools face liability for outcomes the tools produce. | Unknown | The agent and direct-employer theories are live and untested, and Workday flags that the plaintiff may seek to litigate against customers | A ruling on employer liability, or claims filed against customers |
| The litigation's cost to Workday. | Unknown | No legal spend or settlement figure is disclosed; a no-material-loss judgement is not a cost estimate | Disclosure of legal expense, an accrual, or a settlement |

## Direct quotations

> “Here, Workday has represented that its attorneys curated the data it used in the bias testing, the overall purpose of the testing was to provide legal advice and not to be used in a business capacity, and it has not submitted the data to a regulatory body. … Workday has shown more than mere direction by its attorneys. Thus, the bias-testing data is privileged.”

— Judge Laurel Beeler, in the discovery order[^mobley-order] · locator: Analysis, section 1.1 Attorney-Client Privilege

> “Workday’s invoking the mere existence of its bias testing outside of litigation is not enough to waive privilege.”

— Judge Laurel Beeler, rejecting the argument that Workday's public AI Fact Sheet waived the privilege[^mobley-order] · locator: Analysis, section 1.1, waiver discussion

> “This order addresses only the bias-testing data that Workday is claiming is privileged.”

— Judge Laurel Beeler, closing the privilege section after noting Workday had disclosed data it does not claim privilege over[^mobley-order] · locator: Analysis, end of section 1.1

> “They are relevant to Workday’s knowledge of potential demographic disparities when utilizing the AI tools, and Workday has not shown sufficient burden to warrant denying the discovery.”

— Judge Laurel Beeler, ordering production of the EEO-1 and OFCCP documents[^mobley-order] · locator: Introduction, disposition paragraph

> “We are currently defending against a lawsuit alleging that certain of our AI-related products and services enable discrimination, and although we believe that such claims lack merit, and the majority of the claims have been dismissed, legal proceedings can be lengthy, expensive, and disruptive to our operations and customers”

— Workday, Inc., quarterly report on Form 10-Q[^wday10q] · locator: Part II, Item 1A, Risk Factors

## Revision notes

- 2026-09-13 — Raised from Grade B to Grade A after obtaining and reading the discovery order itself, which had previously been available only through two law-firm summaries. The grade change is an editorial judgment: the case's procedural claims now rest on the primary record, and four of them move from Supported to Verified, while the merits remain untested allegations and are still labelled Disputed or Attributed. Reading the order resolved the date discrepancy the case had recorded as unresolvable — Judge Beeler signed on 28 May 2026 and the clerk stamped it filed on 29 May, so Norton Rose Fulbright and Duane Morris were each right about a different date. It also corrected an over-broad reading the summaries encouraged: the order states that it addresses only the data Workday claims is privileged, and records Workday's representation that it disclosed underlying data it does not claim privilege over. Four new claims are added from the order, including Workday's admitted 2023 disclosure of HiredScore bias-testing data on Spotlight to an external consultant, and the plaintiffs' unaddressed assertion that Workday failed to retain 2023 and 2024 audit data. The copy read is the one published by Duane Morris, carrying the court's ECF header stamp; the court's own endpoints require authentication from this sandbox, and the evidence assessment says so.
- 2026-09-12 — Initial publication at Grade B. The discovery order was read through two independent named-attorney analyses rather than directly; CourtListener confirmed the docket but its document endpoints require authentication. The two analyses date the same order differently, May 28 against May 29, and the discrepancy is recorded rather than resolved. Workday's Form 10-Q was read directly and is cited for its own characterisation of the litigation and its loss-contingency judgement. All merits claims are recorded as allegations in a live case.

[^mobley-order]: Laurel Beeler, United States Magistrate Judge, [Discovery Order, *Mobley v. Workday, Inc.*, No. 23-cv-00770-RFL (LB) (N.D. Cal.), ECF No. 340](https://blogs.duanemorris.com/classactiondefense/wp-content/uploads/sites/56/2026/06/2026.05.29-Privilege-Bias-Test-Ruling.pdf), signed 2026-05-28, filed 2026-05-29. Read from the copy published by Duane Morris; the court's own document endpoints require authentication from this sandbox.
[^wday10q]: Workday, Inc., [Form 10-Q for the quarterly period ended July 31, 2026](https://www.sec.gov/Archives/edgar/data/1327811/000132781126000044/wday-20260731.htm), filed 2026-08-27.
[^duanemorris]: Gerald L. Maatman, Jr., Adam D. Brown, and Elizabeth G. Underwood, [“California Federal Court Clarifies Limits On AI Bias Testing And Applicant Data Disclosure In Mobley v. Workday”](https://blogs.duanemorris.com/classactiondefense/2026/06/02/california-federal-court-clarifies-limits-on-ai-bias-testing-and-applicant-data-disclosure-in-mobley-v-workday/), Duane Morris Class Action Defense Blog, 2026-06-02.
[^nortonrose]: Jesika Silva Blanco, Susana Medeiros, and Susan Linda Ross, [“Behind the privilege shield: Safeguarding AI bias-testing data in employment decisions”](https://www.insidetechlaw.com/blog/2026/06/behind-the-privilege-shield-safeguarding-ai-bias-testing-data-in-employment-decisions), Norton Rose Fulbright Inside Tech Law, 2026-06-24.
