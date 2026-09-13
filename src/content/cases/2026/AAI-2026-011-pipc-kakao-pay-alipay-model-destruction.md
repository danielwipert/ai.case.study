---
case_id: AAI-2026-011
title: "The regulator that ordered a model destroyed"
summary: "Korea's data protection regulator found that a payment app had sent 40 million users' data across borders every day for five years so that a third company could score their likelihood of running out of money. It fined the sender and the beneficiary — and ordered the company that built the scoring model to destroy it."
organization:
  - Personal Information Protection Commission (Korea)
  - Kakaopay Corp.
  - Apple Distribution International Limited
  - Alipay Singapore E-Commerce Private Limited
case_type: governance-regulatory
secondary_case_types:
  - deployment
industry:
  - financial-services
  - technology
business_function:
  - finance
  - legal-compliance
deployment_stage: unknown
outcome: negative
evidence_grade: B
status: published
created: 2026-09-13
published: 2026-09-13
last_verified: 2026-09-13
next_review: 2027-03-13
geography:
  - South Korea
  - Singapore
  - Ireland
environment: production
deployment_pattern:
  - decision-support
  - embedded-product-feature
causal_strength: descriptive
related_cases:
  - AAI-2026-009
  - AAI-2026-005
evidence_upgrade_path: "Grade A needs three things this record lacks. First, evidence that the destruction order was carried out — no source establishes that the NSF model was destroyed, who verified it, or what verification of a destroyed model even consists of. Second, the Seoul Administrative Court's written judgment, which reaches this case only through a single press account and which Kakao Pay itself said it had not yet reviewed. Third, the Korean originals: the PIPC's English release states on its face that it is an unofficial translation, and no Korean-language document was read here. The Financial Services Commission's separate review under the Credit Information Use and Protection Act, when it concludes, would add a second regulator's independent findings on the same facts."
sources:
  - id: pipc-release
    author: "Personal Information Protection Commission"
    title: "The PIPC Sanctions Kakao Pay and Apple for Unlawful Cross-Border Data Transfer"
    publisher: "Personal Information Protection Commission, Republic of Korea"
    published: 2025-01-31
    url: "https://www.pipc.go.kr/eng/user/ltn/new/noticeDetail.do?bbsId=BBSMSTR_000000000001&nttId=2771"
    accessed: 2026-09-13
    roles:
      - direct-evidence
      - primary-investigation
    source_family: pipc-decision
    access: "The regulator's own investigation of all three companies, opened after media reports, with access to the transfer records, the categories of data moved, the volumes and dates, and Apple's privacy policy disclosures."
    method: "Statutory investigation under the Personal Information Protection Act, concluded by a decision of the Commission's second plenary meeting of 2025 on 22 January 2025. The release sets out the findings against each company separately, the legal provision breached, and the sanction imposed on each."
    conflicts: "The regulator announcing its own decision. It has an institutional interest in the significance it claims for the case, and the 'Key Takeaways' section is written as guidance to industry rather than as neutral description."
    corroboration: "The sanction against Kakao Pay was upheld on judicial review in June 2026, as reported by Korean press. No independent source confirms the destruction order was carried out."
    accountability: "Published on the Commission's official English press page with a stable page URL, a dated attachment, and a named issuing body."
    notes: "Read in full. The page states on its face: 'This is an unofficial translation of a press release, originally prepared in Korean.' The Korean original was not read. The translation's word for the remedy is 'destruct'; this case quotes it exactly and otherwise writes 'destroy'."
  - id: joongang-court
    author: "Shin Hye-yeon"
    title: "Court upholds near-6 billion won penalty on Kakao Pay over user data sent to Alipay"
    publisher: "Korea JoongAng Daily"
    published: 2026-06-11
    url: "https://www.koreajoongangdaily.com/business/court-upholds-near6-billion-won-penalty-on-kakao-pay-over-user-data-sent-to-alipay/12705262"
    accessed: 2026-09-13
    roles:
      - independent-reporting
    source_family: court-review
    access: "The Seoul Administrative Court's ruling in Kakao Pay's suit to overturn the PIPC sanctions, plus a statement from Kakao Pay issued after the ruling."
    method: "Court reporting. It quotes the judgment directly but does not link or reproduce the written judgment, and Kakao Pay's own statement says the company had not yet reviewed the written judgment when it responded."
    conflicts: "None disclosed. The article discloses at its foot that it was originally written in Korean and translated by a bilingual reporter with the help of generative AI tools, then edited by a native English-speaking editor — a translation chain worth naming in a case about automated scoring."
    corroboration: "Its account of the underlying PIPC findings matches the Commission's own release on every material point, including the 40 million figure and the purpose of the NSF score."
    accountability: "Named reporter, dated, published by an established English-language Korean daily with a stated AI-translation review policy."
    notes: "Read in full. The only source read here for the judicial review. It gives the penalty as 5.96 billion won in its headline and 5.97 billion in its body; the PIPC's own figure is 5.97 billion."
  - id: iapp
    author: "Kyoungsic Min"
    title: "South Korea's PIPC flexes its muscles: What to know about AI model deletion, cross-border transfers and more"
    publisher: "International Association of Privacy Professionals"
    published: 2025-06-04
    url: "https://iapp.org/news/a/south-korea-s-pipc-flexes-its-muscles-what-to-know-about-ai-model-deletion-cross-border-transfers-and-more"
    accessed: 2026-09-13
    roles:
      - analysis
    source_family: iapp-analysis
    access: "No original evidence. A practitioner's reading of the PIPC's published decisions, placing them against US and European enforcement practice."
    method: "Opinion and analysis. The IAPP states it is policy neutral and publishes contributed pieces to present a spectrum of views."
    conflicts: "The author is a privacy practitioner at a vendor serving the market being described, and holds an IAPP country-leader role, so this is professional commentary rather than disinterested analysis."
    corroboration: "Its account of the decision matches the PIPC's own release; its comparative claim about the FTC and European authorities is the part this case checked separately."
    accountability: "Named author with disclosed affiliations, dated, published by a professional body with an editor's note on its neutrality policy."
    notes: "Only the freely readable portion was read; the article is member-gated after its opening section. Cited here for the comparative framing of model deletion as a remedy, not for any fact about the decision itself."
  - id: ftc-everalbum
    author: "Federal Trade Commission"
    title: "California Company Settles FTC Allegations It Deceived Consumers about use of Facial Recognition in Photo Storage App"
    publisher: "U.S. Federal Trade Commission"
    published: 2021-01-11
    url: "https://www.ftc.gov/news-events/news/press-releases/2021/01/california-company-settles-ftc-allegations-it-deceived-consumers-about-use-facial-recognition-photo"
    accessed: 2026-09-13
    roles:
      - direct-evidence
      - analysis
    source_family: ftc-precedent
    access: "The Commission's own complaint and proposed consent order against Everalbum, Inc."
    method: "Enforcement announcement summarising the complaint's allegations and the terms of the proposed settlement, including the deletion obligations."
    conflicts: "The enforcing agency describing its own action."
    corroboration: "Not applicable — cited as a precedent whose terms are on the public record, not as evidence about the Korean case."
    accountability: "Official agency press release with a named spokesperson, links to the complaint and order, and a permanent URL."
    notes: "Read for this case solely to check the comparative claim that model deletion has precedent elsewhere. It establishes that the FTC required deletion of 'models and algorithms' developed from unlawfully used photos four years before the PIPC's order, which qualifies how novel the Korean remedy is."
tags:
  - model-deletion
  - algorithmic-disgorgement
  - cross-border-data-transfer
  - credit-scoring
  - enforcement
  - consent
  - south-korea
---

## Case in one sentence

Korea's data protection regulator found that Kakao Pay had sent the personal data of 40 million users to Alipay every day for nearly five years so that Alipay could compute, for Apple, a score predicting whether each user would have enough money to pay — and rather than only fining the companies, it ordered the model itself destroyed.

## Executive summary

On 22 January 2025 the Personal Information Protection Commission decided sanctions against three companies over a single data pipeline.[^pipc-release]

Apple had engaged Alipay Singapore E-Commerce Private Limited for system integration work on payment methods, including calculating a "Non-Sufficient Funds" score — a customer-specific score indicating whether a customer would have enough money to cover their App Store transactions. Kakao Pay supplied the data that made the score possible.[^pipc-release]

It did so twice over. Between April and July 2018 it sent Alipay the data of about 16 million users on three occasions, in 24 categories, specifically to build the scoring model. Then, from 27 June 2019 to 21 May 2024, it sent the data of 40 million users — every one of its users, de-duplicated — every single day, to keep the scores current.[^pipc-release]

The regulator's findings were specific. Kakao Pay obtained no consent for the cross-border transfer. Apple never listed Alipay in its privacy policy as an overseas entity entrusted with processing, though it did list a different payment company. And Kakao Pay sent the data of Android users too, despite iOS users being under 20% of those who had registered Kakao Pay as an Apple payment method.[^pipc-release]

The sanctions: KRW 5.97 billion against Kakao Pay, KRW 2.4 billion plus a KRW 2.2 million fine against Apple, correction and publication orders against both.[^pipc-release]

Against Alipay — which had received the data rather than collected it — the Commission issued no fine at all. It issued a correction order to destroy the model. Its stated reason was to address the root cause of the violations.[^pipc-release]

In June 2026 the Seoul Administrative Court dismissed all of Kakao Pay's claims and upheld the penalty.[^joongang-court]

What no source establishes is whether the model was destroyed.

## Research question

When a model is built from data that should never have been supplied, what is the appropriate remedy — and can a regulator that orders the model destroyed ever know whether it was?

## Organization and operating context

Three companies in three jurisdictions, connected by one payment flow. Kakaopay Corp. is a Korean payment provider. Apple Distribution International Limited is Apple's Irish entity. Alipay Singapore E-Commerce Private Limited is the third-party payment platform Apple engaged.[^pipc-release]

The commercial logic is ordinary. Apple bundles small App Store transactions and settles them together, which creates a risk that a customer's payment method will have insufficient funds when settlement comes. A score predicting that risk is a reasonable thing to want. Apple entrusted the system integration to Alipay, including the API work that lets Korean payment methods work with its services, and the NSF calculation came with it.[^pipc-release]

What made this a case rather than a product is where the training data came from and who agreed to it. Alipay was the only route by which NSF scores were calculated among the domestic payment methods linked to users' Apple IDs, and Kakao Pay was the only Korean provider whose data flowed through that route.[^pipc-release]

## The situation before AI

Korea's Personal Information Protection Act requires separate consent for a cross-border transfer of personal data, and requires an organisation entrusting processing to an overseas entity to say so in its privacy policy. The Commission's own summary of the law is that where a third party assumes responsibility for processing, the arrangement stops being entrustment and becomes a transfer needing its own legal basis — typically consent.[^pipc-release]

Apple's privacy policy did name an overseas system-integration entrustee: NHN KCP, a payment gateway. It did not name Alipay. Users therefore had no way of knowing Alipay was processing their data.[^pipc-release]

## The AI intervention or event

**Building the model.** From April to July 2018, on three occasions, Kakao Pay extracted the records of about 16 million users in the form Alipay requested and sent them across. Twenty-four types of data: hashed internal customer numbers, phone numbers, email addresses, and the features that would carry the predictive signal — join date, whether the account had been verified against the holder's ID, balance, and counts of top-ups, payments, and remittances over the previous seven days.[^pipc-release]

Those last fields are the case in miniature. They are a behavioural profile of a person's money over a rolling week, and they were the training data for a model estimating whether that person would come up short.

**Running the model.** From 27 June 2019 until 21 May 2024, Kakao Pay sent the personal information of 40 million users daily. Alipay generated a score for each user, updated the model on the incoming data, and returned scores to Apple on request.[^pipc-release] Five years of continuous retraining on a national population's payment behaviour.

**The over-collection.** Kakao Pay sent everyone. iOS users accounted for under 20% of the users who had registered Kakao Pay as a payment method for Apple services, and Android users have no App Store payments to score at all. Their data went anyway.[^pipc-release]

**The remedy.** The Commission fined the company that supplied the data and the company that benefited from the score. For the company that built the model it chose something different: a correction order to destroy it, on the reasoning that the model was constructed on unlawfully transferred data and destruction addresses the root cause.[^pipc-release]

## Outcomes and economics

| Party | Sanction |
| --- | --- |
| Kakaopay Corp. | Penalty of KRW 5.97bn (USD 4.16m), plus correction and publication orders requiring disclosure on its website and app |
| Apple Distribution International Limited | Penalty of KRW 2.4bn (USD 1.68m), a fine of KRW 2.2m (USD 1,532), plus correction and publication orders |
| Alipay Singapore E-Commerce Private Limited | Correction order to destroy the NSF scoring model. No monetary penalty |

All from the Commission's own release.[^pipc-release] The monetary total is roughly KRW 8.37 billion, about USD 5.8 million at the rates the Commission used.

The scale on the other side of the ledger: 40 million people's data, moved daily for 1,790 days.

Kakao Pay sued to overturn the sanctions. In June 2026 the Seoul Administrative Court dismissed every claim.[^joongang-court] Kakao Pay maintained it had transferred the data under lawful procedures and with strong encryption to meet a duty to prevent fraudulent payments, said it regretted the judgment, and said it would decide its response after reviewing the written ruling.[^joongang-court]

A separate review of the same conduct by the Financial Services Commission, under the Credit Information Use and Protection Act, was noted as pending when the PIPC decided.[^pipc-release] No outcome from it appears in any source read here.

On the destruction order there is no economic figure and no confirmation. Nobody has published what the model was worth, whether it was destroyed, or what became of the scores already generated.

## Causal assessment and competing explanations

This case is labelled **descriptive**. It records a regulatory finding, the conduct behind it, and a court's review. It makes no claim that the model caused any measurable outcome for any user — indeed no source read here says what Apple did with an NSF score once it had one, whether any transaction was declined because of one, or whether the scores were accurate.

That absence is worth sitting with. The entire enforcement action concerns how the model was built and fed, not what it did. A reader looking for harm to individuals from the scoring itself will not find it documented here, and this case does not supply it by implication.

One competing explanation deserves a hearing, because the company advanced it and a court rejected it. Kakao Pay's position is that the transfers were lawful, encrypted, and made in service of a genuine duty to prevent fraudulent payments for Apple services.[^joongang-court] The court's answer was not that fraud prevention is illegitimate but that consent was absent and could not be inferred: users could not be regarded as having agreed to their information being used as a credit-assessment metric, and the transfer of all users' data, Android included, told against the necessity argument.[^joongang-court]

A second reading — that this is really a cross-border data case with an AI model incidentally attached — is half right and is why the case is filed as governance-regulatory. The violations found are consent and disclosure violations under transfer rules. What makes it belong in this library is the remedy, which is aimed at the model rather than at the data.

## Failures, limitations, and governance

- **The data flow outlived any plausible consent.** Whatever a user agreed to in 2018 or 2019, five years of daily transfers of a whole national user base to a foreign processor is not something anyone was asked about.[^pipc-release]
- **Everyone was in the training set, including people the product could not apply to.** Android users' payment behaviour fed a score for App Store transactions they could not make.[^pipc-release]
- **The disclosure gap was specific, not systemic.** Apple's privacy policy named one overseas entrustee and omitted the one that mattered, so users could not have discovered Alipay's role by reading it.[^pipc-release]
- **Responsibility diffused across three companies in three jurisdictions.** The collector, the beneficiary, and the builder were separate entities, and only the collector and beneficiary were fined. The builder — the one holding the asset — paid nothing.
- **The remedy has no published verification.** An order to destroy a model raises an obvious question that no source in this record answers: how would anyone know? Weights can be copied, derived scores persist, and successor models trained on the same signal are not obviously covered.
- **Derived outputs are not addressed.** The order concerns the model. Scores already generated and delivered to Apple are not discussed in the release read here.[^pipc-release]
- **The second regulator has not reported.** The Financial Services Commission's parallel review was pending in January 2025 and no conclusion appears in this record.[^pipc-release]

## What this case demonstrates

1. A regulator can treat a trained model as the thing to be remedied rather than as an incidental artefact of a data breach, and Korea's did so explicitly to address what it called the root cause.[^pipc-release]
2. The remedy can fall on a party that was neither the collector nor the primary beneficiary. Alipay received data it did not gather, for a customer that was not the data subject, and it is the party ordered to destroy an asset.
3. Model deletion is not unprecedented. The US Federal Trade Commission required deletion of "models and algorithms" developed from unlawfully used photos in the Everalbum settlement four years earlier.[^ftc-everalbum] What is newer in Korea is the target: a third-party processor rather than the company that misled its own users.
4. Continuous retraining turns a one-off consent problem into a standing one. Three transfers built the model; 1,790 daily transfers kept it current, and each day was its own violation.
5. Over-collection is legible after the fact and was decisive here. Sending Android users' data to score App Store payments was the fact the court cited when it upheld the penalty.[^joongang-court]
6. A privacy policy that names some overseas processors and omits one is worse than uninformative, because it looks complete.
7. Enforcement of a distributed pipeline requires naming every link. The Commission issued a different remedy to each of the three companies, matched to what each had done.
8. Judicial review is where these findings become durable. The PIPC's decision is now a court-tested one, at least as to Kakao Pay.[^joongang-court]

## What this case does not demonstrate

- It does not show the model was destroyed. No source read here confirms compliance, describes verification, or says who would check.
- It does not show any user was harmed by an NSF score. No source describes a declined transaction, an adverse decision, or the model's accuracy.
- It does not establish what Apple did with the scores it received beyond requesting them.
- It does not resolve the case as to Apple or Alipay. The June 2026 ruling read here concerns Kakao Pay's suit; nothing in this record says whether the other two challenged their orders.
- It does not settle the matter finally even for Kakao Pay, which said it would decide its response after reviewing the written judgment.[^joongang-court]
- It does not report the Financial Services Commission's separate review under credit-information law.
- It does not describe machine learning architecture. The sources say a model was built, fed daily, and updated; none says what kind.
- It does not establish that model destruction is an effective remedy. This case is evidence that a regulator will order it, not that ordering it accomplishes anything.

## Evidence assessment

**Grade B — an authoritative primary decision, a court ruling reached through one press account, and an unverified central remedy.**

The core of the record is strong. The PIPC published its own findings company by company, with dates, volumes, data categories, the legal provisions breached, and the sanction imposed on each.[^pipc-release] That is a regulator's account of its own decision, which is primary evidence of the decision even where it is an interested account of the conduct. The sanction against Kakao Pay has since survived judicial review, which is the strongest available corroboration that the findings were sound.[^joongang-court]

Four things hold it at B.

*The central remedy is unverified.* The case is interesting because a model was ordered destroyed. Whether it was destroyed is unknown, and nothing read here indicates that anyone has checked or how they would. A case whose headline fact is a remedy, with no evidence of the remedy's execution, cannot be graded as though the remedy were established.

*The judicial review is a single relay.* The Seoul Administrative Court's written judgment was not read. It reaches this case through one newspaper report, which quotes the ruling but does not reproduce it, and which discloses that it was translated from Korean with the help of generative AI tools before editing. Kakao Pay's own statement in that article notes it had not yet reviewed the written judgment either.[^joongang-court]

*Everything is in translation, and the regulator says so.* The PIPC's English release states on its face that it is an unofficial translation of a Korean original. No Korean-language source was read for this case. Figures and legal characterisations should be read with that in mind.

*The figures disagree at the margins.* The PIPC gives Kakao Pay's penalty as KRW 5.97 billion; the Korean press report gives 5.96 billion in its headline and 5.97 billion in its body; a policy tracker cited during research gives 5.968 billion and a combined total of KRW 8.3752 billion, against the PIPC's itemised KRW 2.4 billion for Apple where the press gives 2.41 billion. The differences are rounding, and this case uses the regulator's own numbers throughout, but they should be recorded rather than smoothed. The decision date is similarly reported as both 22 and 23 January 2025; the PIPC's release states the plenary decided on 22 January and is itself headed 23 January.

One analytical correction belongs here rather than in the narrative. The practitioner analysis cited frames model deletion as putting South Korea "at the leading edge of global privacy practice", noting the FTC has "occasionally" required algorithm disgorgement.[^iapp] Reading the FTC's Everalbum announcement directly shows the precedent is squarely on point: the 2021 proposed order required deletion of the models and algorithms developed from users' photos.[^ftc-everalbum] The Korean order is genuinely distinctive, but for a different reason than novelty of the remedy — it was directed at a processor that received the data from someone else, rather than at the company that had misled its own users.

Conflicts are ordinary and disclosed. The PIPC is describing its own action and writes its takeaways as industry guidance. The FTC release is the same kind of document from the same kind of body. The practitioner analysis is professional commentary by someone working in the market it describes, and only its ungated portion was read.

## Material claims

| Claim | Label | Evidence | What would change this |
| --- | --- | --- | --- |
| Kakao Pay transferred about 16 million users' data to Alipay on three occasions between April and July 2018 to build the NSF model. | Verified | The regulator's own investigation findings, itemised by date, volume, and the 24 data categories[^pipc-release] | The Korean original differing materially, or a correction by the Commission |
| From 27 June 2019 to 21 May 2024 it sent the data of 40 million users daily. | Verified | Same findings; the 40 million figure is stated as the de-duplicated user total and is repeated in the court's review[^pipc-release][^joongang-court] | A correction to the dates or the population count |
| No consent was obtained for the cross-border transfer. | Verified | The Commission's finding, upheld on judicial review, with the court holding that users could not be regarded as having consented[^pipc-release][^joongang-court] | A successful appeal against the judgment |
| Apple failed to list Alipay as an overseas entrustee in its privacy policy while listing NHN KCP. | Verified | The Commission's finding under Article 28-8 of the PIPA[^pipc-release] | Evidence the disclosure existed elsewhere, or a successful challenge by Apple |
| Alipay was ordered to destroy the NSF scoring model. | Verified | The order is stated in the Commission's release, both in its subheading and in the sanctions section[^pipc-release] | A variation or withdrawal of the correction order |
| The model was destroyed. | Unknown | No source read here addresses compliance, verification, or timing | A compliance report from the Commission, or a statement by Alipay |
| Monetary sanctions totalled roughly KRW 8.37 billion. | Verified | Itemised by the Commission: KRW 5.97bn, KRW 2.4bn, and KRW 2.2m[^pipc-release] | A restatement; note that secondary sources give slightly different component figures |
| The Seoul Administrative Court upheld the penalty against Kakao Pay and dismissed all its claims. | Supported | A single press report quoting the ruling; the written judgment was not read and Kakao Pay said it had not reviewed it either[^joongang-court] | Reading the judgment, or an appeal |
| Kakao Pay's transfers were lawful, encrypted, and necessary for fraud prevention. | Attributed | The company's own statement after the ruling; the court rejected the consent argument[^joongang-court] | A successful appeal establishing the necessity basis |
| Any user was harmed by an NSF score. | Unknown | No source describes a declined transaction, an adverse decision, or the model's accuracy | Evidence of individual outcomes, or disclosure of how Apple used the scores |
| Model deletion as a remedy is unprecedented internationally. | Disputed | A practitioner analysis frames Korea as leading; the FTC required deletion of models and algorithms in its 2021 Everalbum settlement[^iapp][^ftc-everalbum] | A survey of enforcement practice establishing how common the remedy is |
| The Financial Services Commission's parallel review found violations. | Unknown | Noted as pending in January 2025; no outcome appears in any source read[^pipc-release] | Publication of the FSC's decision |

## Direct quotations

> “Meanwhile, Alipay's model for calculating NSF scores was built upon the unlawful provision and cross-border transfer of personal information. To address the root cause of violations of the PIPA, the PIPC issued a correction order on the third-party payment platform to destruct the model.”

— Personal Information Protection Commission, in the sanctions section of its own decision announcement; the English text is the Commission's unofficial translation of the Korean original[^pipc-release] · locator: Section II, Sanctions, paragraph 3, "Alipay: A correction order"

> “Separately, a correction order was issued on Alipay to destruct a model for calculating Non-Sufficient Funds (NSF) scores built upon the personal information provided without obtaining consent from users”

— Personal Information Protection Commission, the subheading of the press release[^pipc-release] · locator: subheading, immediately beneath the title

> “The plaintiff did not obtain consent from users of its payment service when it provided their information to Alipay. It is hard to conclude that the data subjects recognized, or specifically and clearly agreed to, the information being used by Apple as a kind of credit-assessment metric to evaluate customers' ability to pay.”

— The Seoul Administrative Court, quoted in press reporting of the June 2026 ruling; the written judgment was not read[^joongang-court] · locator: article of 2026-06-11, first quotation from the ruling

> “Users cannot be regarded as having consented to the effective nullification of their right to control their own personal information in the process of calculating NSF information.”

— The Seoul Administrative Court, dismissing Kakao Pay's claims[^joongang-court] · locator: article of 2026-06-11, second quotation from the ruling

> “Kakao Pay fully explained why the PIPC's sanctions were unfair, and we regret that the court made a different judgment. We plan to decide our future response after reviewing the written judgment.”

— Kakao Pay, in a statement after the ruling[^joongang-court] · locator: article of 2026-06-11, company statement

> “The proposed order also requires the company to delete models and algorithms it developed by using the photos and videos uploaded by its users.”

— U.S. Federal Trade Commission, describing the Everalbum settlement four years earlier[^ftc-everalbum] · locator: press release of 2021-01-11, second paragraph

## Revision notes

- 2026-09-13 — Initial publication at Grade B. Built on the Commission's own English press release, which states on its face that it is an unofficial translation of a Korean original; no Korean-language source was read. Held at B rather than A for four reasons stated in the evidence assessment, the first being that the case's headline fact is a destruction order whose execution nothing in the record verifies. `deployment_stage` is recorded as `unknown` rather than `retired` for the same reason: the model was ordered destroyed and no source says it was. Labelled `descriptive` — the record concerns how the model was built and fed, not what it did to anyone. Records the figure and date discrepancies rather than smoothing them, and corrects one analytical claim by reading the FTC precedent directly: model deletion had precedent, and what distinguishes the Korean order is that it fell on a third-party processor rather than on the company that misled its own users. First case in the library set in Asia.

[^pipc-release]: Personal Information Protection Commission, [“The PIPC Sanctions Kakao Pay and Apple for Unlawful Cross-Border Data Transfer”](https://www.pipc.go.kr/eng/user/ltn/new/noticeDetail.do?bbsId=BBSMSTR_000000000001&nttId=2771), 2025-01-31, unofficial English translation of the Korean release; decision taken at the Commission's second plenary meeting of 2025 on 2025-01-22.

[^joongang-court]: Shin Hye-yeon, [“Court upholds near-6 billion won penalty on Kakao Pay over user data sent to Alipay”](https://www.koreajoongangdaily.com/business/court-upholds-near6-billion-won-penalty-on-kakao-pay-over-user-data-sent-to-alipay/12705262), Korea JoongAng Daily, 2026-06-11.

[^iapp]: Kyoungsic Min, [“South Korea's PIPC flexes its muscles: What to know about AI model deletion, cross-border transfers and more”](https://iapp.org/news/a/south-korea-s-pipc-flexes-its-muscles-what-to-know-about-ai-model-deletion-cross-border-transfers-and-more), IAPP, 2025-06-04; only the ungated opening section was read.

[^ftc-everalbum]: Federal Trade Commission, [“California Company Settles FTC Allegations It Deceived Consumers about use of Facial Recognition in Photo Storage App”](https://www.ftc.gov/news-events/news/press-releases/2021/01/california-company-settles-ftc-allegations-it-deceived-consumers-about-use-facial-recognition-photo), 2021-01-11.
