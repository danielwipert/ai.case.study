---
case_id: AAI-2026-016
title: "Two thousand rulings about fake citations, and the tool named in one in nine"
summary: "A public database records 2,042 court decisions worldwide addressing fabricated legal authority in filings. Most involve self-represented litigants rather than lawyers, nine in ten never establish which tool produced the text, and in one of the two supreme court decisions read here the lawyer denied using AI at all."
organization:
  - Nebraska Supreme Court
  - Supreme Court of the State of New Mexico
  - Damien Charlotin, HEC Paris
case_type: governance-regulatory
secondary_case_types:
  - failure-incident
  - evaluation
industry:
  - professional-services
business_function:
  - legal-compliance
deployment_stage: unknown
outcome: negative
evidence_grade: B
status: published
created: 2026-09-14
published: 2026-09-14
last_verified: 2026-09-14
next_review: 2027-03-14
geography:
  - United States
  - Canada
  - Australia
  - United Kingdom
  - International
environment: production
deployment_pattern:
  - employee-copilot
causal_strength: descriptive
related_cases:
  - AAI-2026-005
  - AAI-2026-014
evidence_upgrade_path: "Grade A needs the aggregate picture to stop resting on one compiler. The specific candidates: a court system publishing its own count — any state administrative office, the Administrative Office of the US Courts, or a national judiciary reporting how many filings it has sanctioned for fabricated authority; an independent audit of the database's completeness against a defined population, such as every published decision in one jurisdiction over one year; or a second compiler working the same sources and arriving at comparable figures. Short of that, reading a random sample of the underlying decisions rather than two chosen ones would test whether the coded fields match the documents, which the one discrepancy found here suggests is worth doing."
sources:
  - id: charlotin-db
    author: "Damien Charlotin"
    title: "AI Hallucination Cases Database"
    publisher: "damiencharlotin.com, maintained at HEC Paris"
    published: 2025-05-01
    updated: 2026-09-14
    url: "https://www.damiencharlotin.com/hallucinations/"
    accessed: 2026-09-14
    roles:
      - primary-investigation
      - analysis
    source_family: charlotin-hallucination-database
    access: "The compiler's own collection of court and tribunal decisions, published as a browsable database and as a downloadable CSV under CC BY 4.0, with per-row coding of court, jurisdiction, date, party type, tool named, outcome, monetary penalty, professional sanction, and legal field. Many rows link to a hosted copy of the decision itself."
    method: "One researcher's manual compilation, with stated inclusion criteria: decisions where a court addressed AI use in more than a passing reference, and where the court found or implied that a party relied on hallucinated material. It states that it also includes some decisions where AI use was alleged but not confirmed, and calls that 'a judgment call on my part'. It describes itself as seeking to be exhaustive and as a work in progress. No sampling frame is defined, so the collection has no denominator."
    conflicts: "The compiler has built and promotes a commercial reference-checking product derived from this work, and writes a subscription newsletter on the subject. Neither touches the per-row coding, which is checkable against the linked documents, but both give an interest in the phenomenon being large."
    corroboration: "A Norton Rose Fulbright practice update cites this database as its source for the scale of the problem, which is independent use rather than independent verification. Two of its rows were checked against the decisions themselves for this case; one matched and one did not."
    accountability: "A named academic at a named institution, licensed CC BY 4.0 with a citation form given, dated to the day, with a public FAQ, a contact route for corrections, and hosted copies of the underlying decisions. The database has been cited in judicial decisions and in national press."
    notes: "The CSV was downloaded on 2026-09-14 and analysed for this case; every aggregate figure here was computed from it rather than quoted. As downloaded it held 2,042 rows dated 2023-04-14 to 2026-09-10. Counts in this case will not match the site on a later date, and the site's own headline count differed from the row count of the file it serves."
  - id: prososki
    author: "Nebraska Supreme Court (per curiam)"
    title: "Prososki v. Regan, 321 Neb. 38, No. S-25-295"
    publisher: "Nebraska Supreme Court Advance Sheets, 321 Nebraska Reports"
    published: 2026-03-20
    url: "https://www.damiencharlotin.com/documents/1699/N00013081PUB.pdf"
    accessed: 2026-09-14
    roles:
      - direct-evidence
    source_family: prososki-nebraska
    access: "A state supreme court's own published opinion, in the official reporter, disposing of the appeal and of the sanctions question together. It quotes the offending brief, recites counsel's explanations, and states the court's findings."
    method: "Adjudication. The court considered motions to strike and for leave to file a corrected brief, held oral argument, questioned counsel from the bench, and issued a per curiam opinion with a separate concurrence. Unlike a settlement or a negotiated agreement, the findings were reached by the tribunal over the party's opposition."
    conflicts: "The court is ruling on conduct before itself, so it is both the injured party and the adjudicator — the structural position of any contempt or sanctions decision. Counsel's account is recorded and rejected in the opinion, so the reader sees the losing argument rather than only the conclusion."
    corroboration: "Appears as a row in the Charlotin database, though with a materially different outcome coded. The court's reasoning cites Mata v. Avianca and other decisions in the same line."
    accountability: "Published in the official state reporter with a citation, a docket number, named justices, named counsel for both sides, and an amicus appearance by the state Attorney General. Available from the court's own online library."
    notes: "Read in full, 27 pages including the concurrence. The central fact for this case is one the headlines omit: counsel expressly denied using AI, attributing the citations to copying from Westlaw without verifying the official reporter, and the court made no finding that AI was used. It sanctioned the fabricated authority, not the tool."
  - id: aarons
    author: "Supreme Court of the State of New Mexico (per curiam)"
    title: "Dispositional Order of Direct Contempt, State v. Sandoval / In re Stephen D. Aarons, No. S-1-SC-40845"
    publisher: "Supreme Court of the State of New Mexico"
    published: 2026-08-21
    url: "https://www.damiencharlotin.com/documents/3059/New_Mexico_sanctions_order_-_AI.pdf"
    accessed: 2026-09-14
    roles:
      - direct-evidence
    source_family: aarons-new-mexico
    access: "The court's own order, reciting what the attorney admitted in his written response and in oral argument before the court on 21 August 2026, and setting out the sanction imposed."
    method: "Adjudication on the court's own motion to show cause, after the attorney appeared and presented argument. The findings are admissions made to the court on the record, not allegations."
    conflicts: "As above, the court is adjudicating conduct before itself. The order is expressly nonprecedential and was not selected for publication in the New Mexico Appellate Reports, which limits its weight as law but not its value as a record of what happened."
    corroboration: "The admissions are the respondent's own. The fabricated material it describes is corroborated by the court having struck all briefing and appointed the Public Defender to re-brief the appeal."
    accountability: "A numbered order of a state supreme court, signed by five named justices, with a docket number and a stated legal basis in the New Mexico Constitution and the state appellate rules."
    notes: "Read in full, 4 pages. This is the contrasting posture to Prososki: here the attorney acknowledged using ChatGPT, and the fabrications extended past citations to invented witnesses and invented testimony in a criminal appeal. The document carries a standing caveat that electronic decisions may deviate from the official version filed by the court."
  - id: nortonrose-sanctions
    author: "Norton Rose Fulbright"
    title: "AI in litigation: Update on Gen AI sanctions in 2026"
    publisher: "Norton Rose Fulbright, United States"
    url: "https://www.nortonrosefulbright.com/en-us/knowledge/publications/792d8bf3/ai-in-litigation-update-on-gen-ai-sanctions-in-2026"
    accessed: 2026-09-14
    roles:
      - analysis
    source_family: nortonrose-practice-update
    access: "No original access. A practice update reading six named federal decisions issued between February and April 2026, written for litigators."
    method: "Legal analysis of published decisions, citing each. It draws a behavioural pattern across them rather than measuring anything, and identifies the procedural bases courts have used."
    conflicts: "Written by a law firm for an audience of lawyers and prospective clients, with an interest in demonstrating expertise on a risk its clients face. Its framing of the population — describing the database's count as cases 'by lawyers' — is the framing most flattering to no one but least useful to a reader who wants to know who is actually filing these documents."
    corroboration: "Independently cites the Charlotin database for scale, which corroborates that database's standing in the profession while not testing its figures. Its six decisions are separate records from the two read directly here."
    accountability: "Published under a named firm on its own knowledge site, with each decision cited and linked. No individual author is given on the page as read, and no publication date was recoverable from the page metadata."
    notes: "Read for its introduction and case summaries. Used here for one finding — that how counsel responds to being confronted is itself consequential — and for one discrepancy, since its description of the database's scope does not match the database as downloaded."
tags:
  - legal-profession
  - hallucination
  - court-sanctions
  - professional-responsibility
  - self-represented-litigants
  - attribution
  - dataset-analysis
---

## Case in one sentence

Courts around the world have now issued more than two thousand decisions about filings built on legal authority that does not exist, and the record of those decisions shows that the majority of the filers had no lawyer, that nine in ten decisions never establish which tool produced the text, and that the phenomenon is nonetheless universally named after the technology.

## Executive summary

A database maintained by Damien Charlotin at HEC Paris tracks court and tribunal decisions in which a judge addressed a party's reliance on fabricated material — invented cases, invented quotations, invented holdings. Downloaded on 14 September 2026, it held **2,042 rows** dated from 14 April 2023 to 10 September 2026.[^charlotin-db]

Three things in that file cut against the way the story is usually told.

**Most of the filers are not lawyers.** Globally the database records 1,172 rows involving a self-represented litigant against 806 involving a lawyer. In the United States, which supplies 1,396 of the rows, self-represented litigants are 59%.[^charlotin-db] The phenomenon is at least as much about people without counsel using a chatbot as a substitute for a lawyer as it is about lawyers cutting corners.

**The tool is almost never established.** A specific product is named in 230 rows of 2,042 — 11.3%. In the rest the coding reads "Implied" or "Unidentified".[^charlotin-db] The database says so on its face; it is the downstream retelling that turns implication into attribution.

**The sanctions are mostly not sanctions.** A professional sanction is recorded in 159 rows, 7.8% of the total; the modal outcome is a warning or an admonishment. A monetary penalty appears in 368 rows, with a median of $1,500 and a worldwide sum of about $3.1 million — less than the fines in this library's Cruise case alone.[^charlotin-db]

Two state supreme court decisions were read in full for this case, and they take opposite positions on the question the database mostly cannot answer. In *Prososki v. Regan* the Nebraska Supreme Court struck an appellate brief, dismissed the appeal, and referred counsel to the Counsel for Discipline — while counsel **denied using AI**, attributing the fictitious citations to "copying and pasting . . . from Westlaw without verifying the official reporter."[^prososki] The court made no finding that AI was involved. In *State v. Sandoval / In re Stephen D. Aarons* the Supreme Court of New Mexico held an attorney in direct contempt after he acknowledged using ChatGPT and admitted that his brief in a criminal appeal contained testimony from witnesses who did not exist.[^aarons]

The distance between those two records is the case. One is a story about a tool; the other is a story about fabricated authority whose cause was never established. The database counts them both.

## Research question

When a professional body is confronted at scale with work product that is confidently wrong, what does the institutional record actually establish about the cause — and what does it merely imply?

## Organization and operating context

There is no deploying organisation here, which is what makes this case structurally different from every other in this library. The other fifteen document an organisation choosing a system, configuring it, and living with the result. This one documents thousands of unconnected individuals — lawyers at firms of every size, and more often people representing themselves — using general-purpose tools nobody procured, under no policy, with no evaluation, in the most consequential document-production setting there is.

The institution in the case is the court system, and it appears in an unusual role. Courts are not the deployer and not the vendor. They are an adversarial third party that examines the output, has subpoena power over the producer, and publishes its findings whether or not anyone would prefer it. That is why a record of this size exists at all, and it is the same mechanism this library's own P1 describes: the evidence is good because something went wrong.

The database sits on top of that. It is one researcher's compilation, published under CC BY 4.0 with the underlying decisions attached, and it has been cited both in national press and in judicial decisions dealing with the same problem.[^charlotin-db]

## The situation before AI

The pre-AI baseline is not zero and the record does not let us measure it. Lawyers have always miscited cases, misquoted holdings, and filed briefs they did not check; self-represented litigants have always filed documents that misunderstand the law. What did not exist before was fabricated authority with the *surface form* of real authority — a case name in correct citation format, a plausible reporter volume, a quotation in judicial register, attached to nothing.

Nor did a systematic record exist. The database begins on 14 April 2023, months after general-purpose chat assistants reached the public. It has no pre-2023 arm, so it can describe growth in decisions about fabricated authority but cannot separate growth in the underlying conduct from growth in courts noticing it, naming it, and writing it up.

## The AI intervention or event

**The shape of the record.** Decisions by year: 16 in 2023, 61 in 2024, 852 in 2025, and 1,112 in 2026 through 10 September.[^charlotin-db] By quarter the recent picture is flatter than the annual totals suggest — 405 in 2025 Q4, 449 in 2026 Q1, 411 in 2026 Q2, and 252 in a Q3 that was only two thirds elapsed at the download date. This case does not read that as a peak. Recent decisions take time to surface and be coded, so the most recent quarter of any such collection is the least complete, and collection lag is the more likely explanation.

**Where.** The United States supplies 1,396 rows. Then Canada 216, Australia 110, the United Kingdom 69, Israel 57, Brazil 41, India 15, Italy 15, France 14, Germany 11.[^charlotin-db] The most common legal field is contract, at 450 rows, followed by administrative, civil rights, employment and tort — ordinary civil litigation rather than anything exotic.

**Who.** Self-represented litigants, 1,172 rows; lawyers, 806. And in 32 rows the party who relied on fabricated material was **a judge** — including, in one 2026 decision, the Supreme Court of India setting aside a customs order that had relied on authorities the court's own verification found did not exist.[^charlotin-db] The adjudicator is in the dataset alongside the advocate.

**What the courts did.** Grouping the outcome text: warnings and admonishments account for 662 rows, some monetary consequence 414, an order to show cause 121, and a referral or discipline 49. The outcome field is empty in 406 rows — 20% of the database records that a court addressed the matter without recording what followed.[^charlotin-db]

**Nebraska.** Counsel for the appellant in a dissolution appeal filed a brief the appellee moved to strike as the product of generative AI. Counsel responded with motions for leave to file a corrected brief, asserting he "did not invent cases, did not rely on AI, and did not attempt to mislead the court," and attributing the problems to a late-granted extension and to copying from Westlaw without verifying the official reporter.[^prososki] The court found the explanation lacked credibility, held that failing to verify satisfies the knowing requirement of the duty of candour, struck the brief, dismissed the appeal, and made the referral. It did not find that AI was used, and it did not need to.

**New Mexico.** On its own motion the court ordered an attorney to show cause. He appeared, acknowledged using ChatGPT, and admitted the brief in chief in a criminal appeal contained false testimony from four wholly fabricated witnesses, false testimony attributed to real witnesses, and misrepresented holdings in two named New Mexico cases. He admitted he had not verified any of it before signing and filing, and had not told his client — nor told his client about the show-cause proceedings.[^aarons] The court found direct contempt, referred him to the Disciplinary Board, barred him from appearing pending the outcome, struck all briefing, appointed the Public Defender to re-brief the appeal, and ordered $5,000 paid to the State Bar Client Protection Fund.

## Outcomes and economics

Every figure below was computed from the database CSV as downloaded on 14 September 2026.[^charlotin-db]

| Measure | Value |
| --- | --- |
| Decisions recorded | 2,042 |
| Date range | 2023-04-14 to 2026-09-10 |
| Involving a self-represented litigant | 1,172 (57%) |
| Involving a lawyer | 806 (39%) |
| Involving a judge | 32 |
| Naming a specific AI product | 230 (11.3%) |
| Recording a professional sanction | 159 (7.8%) |
| Recording a monetary penalty | 368 (18%) |
| Median monetary penalty | $1,500 |
| Sum of monetary penalties | about $3.1m |
| Largest single penalty | about $620,000, Argentina, February 2026 |
| Outcome field empty | 406 (20%) |

The enforcement asymmetry is the sharpest number in the file. A professional sanction is recorded against **19.0% of the lawyers** in the database and **0.2% of the self-represented litigants** — two rows out of 1,172.[^charlotin-db] The explanation is structural rather than suspicious: courts discipline members of a bar, and a self-represented litigant is not one. But it means the deterrent the profession is discussing reaches the minority of the population that produces these filings.

Against that, the money. About $3.1 million in penalties worldwide across three and a half years, at a median of $1,500. In this library's Cruise case the fines alone ran to roughly $2.1 million in a single matter, and were described there as never having been the cost.[^charlotin-db]

## Causal assessment and competing explanations

This case is labelled **descriptive**, and the label is the point rather than a formality. The database records a correlation in time between the public availability of generative AI and a rising count of decisions about fabricated legal authority. It does not establish causation in the individual case, and in 88.7% of rows it does not even establish which tool was involved.

Four readings deserve to be stated.

**"Generative AI causes lawyers to file fake citations."** The strongest evidence for it is admission: in New Mexico the attorney acknowledged ChatGPT by name and the fabrications matched what such a tool produces.[^aarons] Across the database, though, a product is named in 230 rows of 2,042, and "Implied" is the single most common value in the tool column at 1,366 rows.[^charlotin-db] Implication is the compiler's inference from the shape of the errors. It is a reasonable inference and it is not a finding.

**"The courts are finding fabrication, not AI."** Nebraska is the cleanest example: counsel denied AI, the court made no finding on it, and the sanction rested on the duty of candour and the fabricated authority itself.[^prososki] On this reading the database is a record of a very old professional failure that has become easier to commit and easier to detect, and the technology is an aggravating context rather than an established cause.

**"The growth is in detection, not in conduct."** Opposing counsel now routinely check citations; courts have learned the signature; a database exists to compare against; the compiler has built an automated checker. Every one of those raises the recorded count without any change in underlying behaviour. The database has no pre-2023 arm and no sampling frame, so nothing in it can separate the two.

**"This is a self-representation story wearing a technology costume."** The majority of filers have no lawyer. A person who cannot afford counsel and asks a chatbot for the law is doing something the justice system's own access problem invited. The database cannot test this either, but it is the reading most consistent with the party column and the one least represented in professional commentary — including in the practice update read for this case, which describes the database's contents as cases "by lawyers".[^nortonrose-sanctions]

One finding from that practice update is worth carrying regardless of cause: across the decisions it reviews, how counsel responds when confronted is as consequential as the original error, with candour credited and evasion punished.[^nortonrose-sanctions] The two decisions read here are consistent with the pattern in direction and not in outcome — Nebraska's denial drew a referral, New Mexico's admission drew contempt, a bar, and a fine — which is the practice update's own caveat that honesty does not purchase immunity.

## Failures, limitations, and governance

- **The cause is unestablished at scale, and the name is not.** A phenomenon in which the tool is identified 11.3% of the time is universally called AI hallucination, in the press, in practice updates, and in the database's own title.[^charlotin-db]
- **Verification is a non-delegable duty that was delegated anyway.** Nebraska held that failing to review a brief and confirm the law is good law satisfies the knowing standard for candour toward the tribunal.[^prososki] The rule did not need updating; it needed performing.
- **The client is the party nobody protected.** In New Mexico the attorney did not tell his client that the brief misrepresented the record, and did not tell him about the show-cause proceedings; the court appointed a public defender and restarted the appeal.[^aarons] The sanctions literature is about the lawyer's exposure. The criminal appellant's year is the cost.
- **Enforcement reaches the minority.** 19.0% of lawyers in the database face a professional sanction against 0.2% of self-represented litigants, who are the majority of filers.[^charlotin-db]
- **A fifth of the record does not say what happened.** The outcome field is empty in 406 rows.[^charlotin-db]
- **The adjudicator is in the dataset.** Thirty-two rows involve a judge, across twelve jurisdictions.[^charlotin-db]
- **No existing rule was found wanting.** Courts reached these outcomes through inherent authority, Rule 11, § 1927, appellate rules and professional conduct rules; the practice update notes an appellate court concluding that existing rules sufficed.[^nortonrose-sanctions] Governance failed at the point of use, not at the point of design.

## What this case demonstrates

1. A record can be large, growing, carefully compiled, and still not establish the thing everyone takes it to establish. Two thousand decisions name a cause in one case out of nine.
2. Naming a phenomenon after a suspected cause makes the causal claim unfalsifiable in ordinary discussion. "AI hallucination cases" is the name of the database, and it is doing work that its own tool column does not support.
3. The population most affected can be invisible in the commentary about it. Self-represented litigants are the majority of filers and the subject of almost none of the professional writing.
4. A sanctions regime aimed at licence-holders cannot deter people who hold no licence, whatever its severity.
5. Detection capability and incidence are confounded whenever a record begins at the same time as the awareness that produces it, and a collection with no pre-period and no sampling frame cannot separate them.
6. Professional duties written long before the technology turned out to be sufficient, and courts said so; what failed was performance of an existing duty, not the absence of a new one.
7. The response to being caught is itself a measured variable, and it moves the outcome as much as the original conduct.[^nortonrose-sanctions]
8. A downloadable, openly licensed dataset with the underlying documents attached lets a reader check a claim rather than accept it — and lets a reader find, as here, that one coded field did not match the decision it pointed to.

## What this case does not demonstrate

- It does not establish that generative AI caused any particular filing in the database. In 1,794 of 2,042 rows no product is named, and in one of the two decisions read here counsel denied AI use and the court made no finding on it.[^charlotin-db][^prososki]
- It does not measure the rate at which AI-assisted filings contain fabrications. The database has a numerator and no denominator: nobody knows how many filings were AI-assisted.
- It does not show that the problem is growing, shrinking, or peaking. Decisions rose steeply through 2025 and the most recent quarters are flatter, but collection lag alone could produce that shape.
- It does not show that these figures are complete. The compilation is self-described as a work in progress seeking exhaustiveness, and no outside party has audited its coverage.
- It does not generalise to other professions. Law has an adversary who checks your citations and a tribunal that publishes what it finds; medicine, engineering and accountancy do not produce a comparable public record, and their silence is not evidence of a smaller problem.
- It does not tell you what happened to the clients. Two decisions here record a struck brief and a restarted appeal; the database does not code client harm at all.

## Evidence assessment

**Grade B — two adjudicated primary records under an aggregate that rests on one compiler.**

The two supreme court decisions are the strongest kind of record this library holds. They are adjudicated rather than settled: a tribunal considered the party's own account, rejected or accepted it on the record, and published reasons under its own name. *Prososki* runs to 27 pages in the official state reporter with a separate concurrence; the New Mexico order is four pages signed by five justices.[^prososki][^aarons] Both were read in full. Against the Workday case in this library, where privilege decides what anyone learns, and the Rite Aid case, where the allegations were never tested, these are findings.

The aggregate is a different object. It is one researcher's manual collection, and its figures are exactly as good as its completeness, which nobody has measured. The inclusion criteria are stated and partly discretionary — the compiler says so, and flags that including some unconfirmed allegations is "a judgment call on my part". There is no sampling frame, so the collection has a numerator and no denominator. What makes it usable anyway is that it is openly licensed, downloadable as structured data, coded field by field, and attached to copies of the underlying decisions, so a reader can check it. Every aggregate figure in this case was computed from the file rather than quoted from the site or from anyone's summary of it.

A conflict worth naming: the compiler has built a commercial citation-checking product out of this work and writes a paid newsletter about it. That is an interest in the phenomenon being large. It does not touch the per-row coding, which is checkable, and this case relies on the coding rather than on any characterisation.

Three discrepancies are recorded rather than resolved.

*The database and a decision disagree.* The row for *Prososki v. Regan* codes the outcome as including "Suspension". The opinion strikes the brief, dismisses the appeal, and **refers** counsel to the Counsel for Discipline for investigation; it imposes no suspension.[^charlotin-db][^prososki] Two rows were checked against their documents for this case and one did not match, which is not a rate but is a reason to treat the coded outcome fields more cautiously than the counts.

*The practice update and the database disagree.* Norton Rose Fulbright describes the database as documenting "over 1,148 cases of hallucinations by lawyers" in the United States.[^nortonrose-sanctions] The file as downloaded holds 1,396 United States rows in total, of which 550 involve a lawyer or prosecutor and 829 a self-represented litigant.[^charlotin-db] The likeliest reading is that a total was described as a lawyer subtotal at an earlier date, when the collection was smaller. The effect of the error is to erase the majority of the population from a document written to advise the profession.

*The site and its own file disagree.* The page states 2,041 cases identified; the CSV it serves held 2,042 data rows on the same day. The difference is immaterial to every claim here and is recorded because the alternative is to pick one silently.

What would lift this to A is named in the upgrade path, and it is not more decisions. It is a count produced by somebody whose job is counting — a court administrator, a judiciary, an auditor of the database against a defined population.

## Material claims

| Claim | Label | Evidence | What would change this |
| --- | --- | --- | --- |
| A public database recorded 2,042 decisions addressing fabricated legal authority, dated 2023-04-14 to 2026-09-10. | Verified | Computed from the CSV downloaded 2026-09-14[^charlotin-db] | Downloading the file on another date, which will give another number |
| Self-represented litigants outnumber lawyers in the database, 1,172 to 806. | Verified | Party column of the same file; in the United States subset, 829 against 550[^charlotin-db] | A recount under different coding rules, or an audit finding systematic bias in which cases get collected |
| A specific AI product is named in 11.3% of rows. | Verified | 230 rows of 2,042 name a product; 1,366 are coded "Implied" and 428 "Unidentified"[^charlotin-db] | Nothing about the file; the figure would move if courts began requiring disclosure of the tool |
| Generative AI caused the fabrications in the decisions the database collects. | Inference | Admitted in some decisions, including one read here in full; implied by the compiler in most; denied by counsel and unfound by the court in the other decision read here[^aarons][^prososki][^charlotin-db] | Courts routinely making findings of fact about tool use, which would convert an inference into a record |
| The Nebraska Supreme Court struck the brief, dismissed the appeal, and referred counsel for discipline, without finding that AI was used. | Verified | The opinion itself, read in full: counsel asserted he "did not rely on AI" and the court's sanction rests on fabricated authority and the duty of candour[^prososki] | A later disciplinary finding on the record establishing tool use |
| An attorney admitted to the Supreme Court of New Mexico that he used ChatGPT and filed a criminal appeal brief containing fabricated witnesses and testimony. | Verified | The court's order reciting his admissions in his written response and at oral argument[^aarons] | A withdrawal or amendment of the order |
| Professional sanctions reach 19.0% of lawyers in the database and 0.2% of self-represented litigants. | Verified | 153 of 806 against 2 of 1,172[^charlotin-db] | A recount, or a jurisdiction developing a sanction that reaches unrepresented filers |
| Monetary penalties across the database total about $3.1m, at a median of $1,500. | Supported | Parsed from the free-text penalty field of 368 rows; the field is not a normalised currency amount and the parse takes the largest number in each entry[^charlotin-db] | A normalised penalty field, or a currency-aware recount |
| The number of such decisions is now levelling off. | Unknown | Quarterly counts run 405, 449, 411, then 252 in a two-thirds-elapsed quarter; collection lag alone could produce that shape[^charlotin-db] | The same quarters recounted after six months, when the recent period has filled in |
| The database is a complete record of the phenomenon. | Unknown | Self-described as a work in progress seeking exhaustiveness, with no sampling frame and no external audit[^charlotin-db] | An audit against every published decision in one jurisdiction over one defined period |
| The rate of fabrication in AI-assisted filings. | Unknown | The database has no denominator; nobody knows how many filings were AI-assisted[^charlotin-db] | A survey or disclosure regime establishing how many filings used a tool |
| Existing procedural and professional rules were adequate to address the conduct. | Attributed | A practice update reports courts using inherent authority, Rule 11, § 1927 and conduct rules, and an appellate court concluding no AI-specific rule was necessary[^nortonrose-sanctions] | A jurisdiction concluding otherwise and adopting a rule on the ground that existing ones failed |

## Direct quotations

> “Citing nonexistent case law or misrepresenting the holdings of a case is making a false statement to a court. It does not matter if [generative AI] told you so.”

— Nebraska Supreme Court, quoting Grossman and colleagues in Judicature, in the passage referring counsel for discipline[^prososki] · locator: 321 Neb. 38, 55, opinion at page 18 of the PDF

> “Jason's counsel asserted he did not invent cases, did not rely on AI, and did not attempt to mislead the court.”

— Nebraska Supreme Court, reciting counsel's response to the motion to strike[^prososki] · locator: 321 Neb. 38, Background, page 12 of the PDF

> “Respondent admitted to the Court that he did not verify the factual claims and legal authority in his AI-generated brief before signing it and filing it with the Court, and that he did not inform his client of this failure or that the brief in chief contained multiple factual and legal misrepresentations.”

— Supreme Court of the State of New Mexico[^aarons] · locator: Dispositional Order of Direct Contempt, paragraph 5, page 2 of 4

> “This database tracks legal decisions in cases where generative AI produced hallucinated content – typically fake citations, but also other types of AI-generated arguments. It does not track the (necessarily wider) universe of all fake citations or use of AI in court filings.”

— Damien Charlotin, stating the database's scope[^charlotin-db] · locator: AI Hallucination Cases, introductory paragraph, as read 2026-09-14

> “As an exception, the database also covers some judicial decisions where AI use was alleged but not confirmed. This is a judgment call on my part.”

— Damien Charlotin, on the inclusion criteria[^charlotin-db] · locator: AI Hallucination Cases, footnote 1 to the opening sentence

## Revision notes

- 2026-09-14 — Initial publication at Grade B. The library's first `professional-services` case and its first case with no deploying organisation: the subject is thousands of unconnected individuals using tools nobody procured, and the institution in the record is the adversary rather than the operator. `deployment_stage` is `unknown` for that reason and not as a placeholder — there is no deployment to stage, and in 88.7% of rows the record does not establish what was used. Four source families: an openly licensed database analysed from its CSV rather than quoted, two state supreme court decisions read in full, and a law-firm practice update. Grade B rather than A because the headline is the aggregate picture and the aggregate rests on one compiler with no sampling frame and no external audit — the same principle applied to AAI-2026-002, AAI-2026-006 and AAI-2026-008, where a case is graded on what its headline claim can bear. `causal_strength: descriptive` is load-bearing here rather than conventional: the case's main finding is that the causal attribution everyone makes is unestablished in the record that is supposed to support it. Three discrepancies recorded and not resolved: the database codes a suspension where the Nebraska opinion makes a referral; a practice update describes 1,148 United States cases as lawyer cases where the file holds 1,396 United States rows of which 550 involve a lawyer; and the site's headline count is one lower than the row count of the file it serves. Related to AAI-2026-005 by contrast — privilege decides what is learned there, adjudication decides it here — and to AAI-2026-014 as a second case in which a consequential system ran for years without anyone measuring its error rate.

[^charlotin-db]: Damien Charlotin, [AI Hallucination Cases Database](https://www.damiencharlotin.com/hallucinations/), maintained at HEC Paris, licensed CC BY 4.0. Aggregate figures in this case were computed from the CSV as downloaded 2026-09-14, which held 2,042 data rows dated 2023-04-14 to 2026-09-10.

[^prososki]: Nebraska Supreme Court (per curiam), [*Prososki v. Regan*, 321 Neb. 38, No. S-25-295](https://www.damiencharlotin.com/documents/1699/N00013081PUB.pdf), filed 2026-03-20, 27 pages. Read from the copy hosted by the AI Hallucination Cases Database; the document carries the Nebraska Appellate Courts Online Library stamp.

[^aarons]: Supreme Court of the State of New Mexico (per curiam), [Dispositional Order of Direct Contempt, *State v. Sandoval / In re Stephen D. Aarons*, No. S-1-SC-40845](https://www.damiencharlotin.com/documents/3059/New_Mexico_sanctions_order_-_AI.pdf), 2026-08-21, 4 pages. Nonprecedential; not selected for publication in the New Mexico Appellate Reports.

[^nortonrose-sanctions]: Norton Rose Fulbright, [“AI in litigation: Update on Gen AI sanctions in 2026”](https://www.nortonrosefulbright.com/en-us/knowledge/publications/792d8bf3/ai-in-litigation-update-on-gen-ai-sanctions-in-2026), United States knowledge publication, read 2026-09-14. No publication date was recoverable from the page.
