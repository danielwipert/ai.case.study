---
case_id: AAI-2026-012
title: "Two and a half years of shipping a government chatbot slowly"
summary: "The UK Government Digital Service built a retrieval-augmented assistant on GOV.UK, tested it on more than 10,000 members of the public across two pilots, raised its self-assessed accuracy from 76% to 90%, and published the numbers itself. Nobody outside the team has checked any of them."
organization:
  - Government Digital Service
case_type: deployment
secondary_case_types:
  - evaluation
industry:
  - public-sector
business_function:
  - customer-service
  - operations
deployment_stage: pilot
outcome: inconclusive
evidence_grade: C
status: published
created: 2026-09-13
published: 2026-09-13
last_verified: 2026-09-13
next_review: 2027-03-13
geography:
  - United Kingdom
environment: production
deployment_pattern:
  - customer-facing-assistant
  - embedded-product-feature
causal_strength: descriptive
related_cases:
  - AAI-2026-009
  - AAI-2026-008
evidence_upgrade_path: "Grade B needs one thing above all: somebody outside the team measuring the same system. The specific candidates are an audit by the National Audit Office or scrutiny by the Public Accounts Committee reaching this deployment by name, which as of this writing neither has; publication of the accuracy rubric and the ground-truth dataset so the 76%-to-90% movement can be checked or reproduced; or an independent evaluation against the consumer assistants the team says it outperforms. Grade A would additionally need an outcome measure — evidence about whether users who received an answer went on to do the right thing — which no source here attempts."
sources:
  - id: gds-2024-findings
    author: "Matthew Gregory, Alessia Tosi, Sharon McDonald, and Robert Sewell"
    title: "The findings of our first generative AI experiment: GOV.UK Chat"
    publisher: "Inside GOV.UK, Government Digital Service"
    published: 2024-01-18
    url: "https://insidegovuk.blog.gov.uk/2024/01/18/the-findings-of-our-first-generative-ai-experiment-gov-uk-chat/"
    accessed: 2026-09-13
    roles:
      - primary-investigation
      - participant-account
    source_family: gds-govuk-chat
    access: "The team's own phased experiment: three internal phases including a cross-government red-teaming exercise, a fourth phase with a dozen users, and a fifth with 1,000 invited users on a live private pilot in late 2023."
    method: "Follow-up user surveys (n=157) plus expert human assessment of the accuracy and completeness of a sample of answers. The sampling frame for the expert assessment is not stated, and neither is the accuracy rubric."
    conflicts: "Written by the team that built the system, about the system it built, on a government blog whose purpose includes demonstrating that the department is innovating responsibly. Against that, it reports hallucinations, an accuracy shortfall, and a user-trust problem that reflects badly on the deployment."
    corroboration: "None. No party outside GDS has published a measurement of this system."
    accountability: "Four named authors with job titles, dated, on an official government blog with a contact address and an open comments thread."
    notes: "Read in full. Source of the first pilot's survey figures and of the finding that users underestimated inaccuracy risk because of the GOV.UK brand — a finding the later posts do not revisit."
  - id: gds-2024-beta
    author: "Sam Dub and Josh Davey"
    title: "We're running a private beta of GOV.UK Chat"
    publisher: "Inside GOV.UK, Government Digital Service"
    published: 2024-11-05
    url: "https://insidegovuk.blog.gov.uk/2024/11/05/were-running-a-private-beta-of-gov-uk-chat/"
    accessed: 2026-09-13
    roles:
      - participant-account
    source_family: gds-govuk-chat
    access: "The team's plan for the second pilot and its account of what changed since the first."
    method: "Announcement rather than evaluation. It describes the risk controls adopted — scoring with HMRC subject matter experts, comparison against content-designer reference answers, monitoring, onboarding warnings, source links — without reporting results from them."
    conflicts: "As above: the team describing its own work before the results are in."
    corroboration: "Its restatement of the 2023 figures matches the January 2024 post."
    accountability: "Two named authors, dated, official blog."
    notes: "Read in full. Cited for the risk controls and for the concession that no one industry-wide has reached 100% accuracy."
  - id: gds-2026-findings
    author: "Sam Dub and Sharon McDonald"
    title: "5 things we learned testing GOV.UK Chat: an AI assistant for government"
    publisher: "Inside GOV.UK, Government Digital Service"
    published: 2026-03-16
    url: "https://insidegovuk.blog.gov.uk/2026/03/16/5-things-we-learned-testing-gov-uk-chat-an-ai-assistant-for-government/"
    accessed: 2026-09-13
    roles:
      - primary-investigation
      - participant-account
    source_family: gds-govuk-chat
    access: "Both public pilots: 10,136 users asking 23,838 questions on the web, and 641 users asking 2,670 questions in four weeks in the GOV.UK app via iOS TestFlight."
    method: "Unusually well documented. Eleven named research methods across the two pilots with sample sizes for each — 99 timed usability tests, a 15-person diary study with 30 hours of video, 576 surveys, manual scoring of 419 conversations and 1,084 question-answer pairs, path analysis of 4,764 journeys, qualitative analysis of 29 conversations, and in the app study answer-quality review of 1,338 in-scope questions, a 144-participant speed study, 12 observed users, and 45 survey responses. Accuracy is assessed by 'a combination of subject matter experts, and automated evaluation tools'; the rubric is described in words but not published."
    conflicts: "The deploying team publishing the evidence base for its own decision to widen access, in a post that announces that decision. Every number in it is the team's own."
    corroboration: "None outside GDS."
    accountability: "Two named authors with job titles, dated, on an official blog, with an open comments thread in which the lead product manager replies to public questions."
    notes: "Read in full, including the comment thread. Source of the 76%-to-90% accuracy movement, the 88% in-scope answer rate, the 508 blocked jailbreak attempts, the 10.7-second average, and the app survey's 73% useful / 64% satisfied. Its claim that GOV.UK Chat scores higher than widely-used consumer assistants on government questions is stated without a benchmark or figures."
  - id: gds-2026-engineering
    author: "Alessia Tosi and Nick Lange"
    title: "Developing GOV.UK Chat: Our data science and AI engineering journey"
    publisher: "Inside GOV.UK, Government Digital Service"
    published: 2026-05-15
    url: "https://insidegovuk.blog.gov.uk/2026/05/15/developing-gov-uk-chat-our-data-science-and-ai-engineering-journey/"
    accessed: 2026-09-13
    roles:
      - participant-account
      - analysis
    source_family: gds-govuk-chat
    access: "The system's own development history from the July 2023 prototype onward, and the internal evaluation framework."
    method: "Technical account rather than measurement. It sets out a three-pillar evaluation framework — automated evaluation using LLM-as-a-judge and custom metrics against ground-truth datasets, manual expert review of conversational logs, and automated live monitoring — and six evaluation criteria. It reports no figures."
    conflicts: "As above. It also names the system as one of the Prime Minister's AI Exemplars, which is a political frame around a technical post."
    corroboration: "Consistent with the other posts on architecture and chronology; adds no independent measurement."
    accountability: "Two named authors, dated, official blog, with links to the system prompt and to the red-teaming partners."
    notes: "Read in full. Source of the architecture, the evaluation framework, the six criteria, and the fact that red teaming was run with the Incubator for Artificial Intelligence and the AI Security Institute — the closest thing in this record to outside involvement, though no output of it is published."
  - id: nao-ai-government
    author: "National Audit Office"
    title: "Use of artificial intelligence in government"
    publisher: "National Audit Office, HC 612 Session 2023-24"
    published: 2024-03-15
    url: "https://www.nao.org.uk/reports/use-of-artificial-intelligence-in-government/"
    accessed: 2026-09-13
    roles:
      - analysis
    source_family: nao-audit
    access: "The government's AI strategy documents, governance arrangements, and a survey of government bodies. It did not examine GOV.UK Chat."
    method: "Value-for-money audit by the UK's independent public spending watchdog, reporting to Parliament."
    conflicts: "None disclosed. The NAO is independent of the bodies it audits and reports to Parliament rather than to government."
    corroboration: "None offered for this case, and none possible: the report does not mention GOV.UK Chat and is cited here only for the governance environment around it."
    accountability: "Statutory audit body, report laid before Parliament with a session number, published in full."
    notes: "Read for this case by targeted search of the PDF: the report contains no mention of 'GOV.UK Chat' at all, two of 'Government Digital Service', and one of 'chatbot'. That absence is itself the point — cited here to establish that independent scrutiny of government AI existed in this period and did not reach this deployment."
tags:
  - retrieval-augmented-generation
  - public-sector
  - chatbot
  - self-reported-evaluation
  - accuracy
  - user-trust
  - pilot
---

## Case in one sentence

The UK Government Digital Service spent two and a half years building, testing, and publicly reporting on an AI assistant for GOV.UK, ran it past more than ten thousand members of the public in two pilots, and improved its accuracy from a self-assessed 76% to a self-assessed 90% — a figure nobody outside the team has ever checked.

## Executive summary

Most cases in this library exist because something went wrong or a regulator intervened. This one exists because a deployment simply ran, and the team running it published what happened.

GOV.UK Chat began as a prototype in July 2023, built with Langchain and Gradio.[^gds-2026-engineering] It is a retrieval-augmented generation system: it searches GOV.UK's published guidance, retrieves the relevant pages, and generates an answer grounded in them.[^gds-2024-findings]

Testing was staged deliberately. Three internal phases including cross-government red teaming, then a dozen users, then a thousand invited users on a live private pilot in late 2023.[^gds-2024-findings] The January 2024 write-up of that pilot reported that nearly 70% of surveyed users found responses useful and just under 65% were satisfied — and, in the same post, that answers "did not reach the highest level of accuracy demanded for a site like GOV.UK", that hallucinations occurred, and that some users underestimated the risk of inaccuracy precisely because the GOV.UK brand made them trust it.[^gds-2024-findings]

A second pilot followed in November 2024, aimed at people running businesses, with accuracy scored alongside HMRC subject matter experts.[^gds-2024-beta]

By March 2026 the team reported the totals: two public pilots over 18 months, 10,136 users and 23,838 questions on the web, 641 users and 2,670 questions in the GOV.UK app. Accuracy up from 76% to 90%. An 88% answer rate for in-scope questions. All 508 jailbreak attempts blocked. An average of 10.7 seconds per answer. And, in the app follow-up survey, 73% finding it useful and 64% satisfied.[^gds-2026-findings]

Those last two figures are worth holding against the first pilot's "nearly 70%" useful and "just under 65%" satisfied.[^gds-2024-findings] Two years and fourteen points of accuracy later, user satisfaction is where it started.

Every number in this case comes from the team that built the system. The National Audit Office examined government AI adoption in the same period and does not mention GOV.UK Chat once.[^nao-ai-government]

## Research question

What does a carefully run public-sector AI deployment look like from the inside — and how much can be concluded from even the most detailed self-report?

## Organization and operating context

The Government Digital Service runs GOV.UK, the single domain for UK government information and services, which the team describes as having more than 700,000 pages.[^gds-2024-beta] The GOV.UK AI team is multidisciplinary: data scientists, developers, user researchers, content designers, and interaction designers.[^gds-2024-beta][^gds-2026-engineering]

Two features of the context shape everything else. First, the subject matter is tax, benefits, and visas — questions where a wrong answer has consequences and where the correct answer is often conditional on circumstances the site cannot see. Second, GOV.UK is trusted, and the team knows it, describing the site as "a highly trusted (according to internal polling) information source and a ubiquitously recognised symbol in the UK."[^gds-2024-findings] That trust is the asset the deployment risks.

The governance environment around it was, by the independent auditor's account, unsettled. The NAO reported in March 2024 that government "lacked a coherent plan to support adoption of AI in the public sector", that responsibility was split between DSIT and the Cabinet Office with no stated overall ownership, and that the draft adoption strategy set out no implementation plan, performance metrics, or funding.[^nao-ai-government] GOV.UK Chat is not mentioned in that report.

## The situation before AI

The problem predates the technology. The team frames it as "a problem that's as old as GOV.UK itself — how we can save people time and make their interactions with government simpler, faster and easier."[^gds-2024-findings] The existing answer is search plus navigation across hundreds of thousands of pages, and for people who cannot find what they need, a departmental call centre.

No baseline is published. There is no stated figure for how long users currently take to find an answer, how often they succeed, or what a call to HMRC costs — which means every claim about time saved in this case is a user's impression rather than a measurement against a starting point.

## The AI intervention or event

**Architecture.** A conversational RAG system combining semantic search with generation. GOV.UK content is filtered by metadata to prioritise authoritative, current sources and to exclude pages containing personally identifiable information, then split by hierarchical semantic chunking that preserves the HTML header structure. Retrieval uses semantic search with a metadata-based re-ranking layer built with content-design and information-architecture colleagues, on Amazon's Titan embeddings. A tool-calling router classifies user intent — greeting, request for advice, genuine question — and picks a response strategy. Generation uses chain-of-thought and goal-oriented prompting with structured JSON input and output, instructions to answer only from GOV.UK guidance and in GOV.UK style, and citation of the content used. Two guardrail layers sit either side of generation, one blocking inappropriate queries and one validating responses.[^gds-2026-engineering]

The stack moved from Langchain and Gradio to a Ruby application on AWS, using Anthropic's Claude models via Amazon Bedrock, built so models can be swapped as new ones appear.[^gds-2026-engineering][^gds-2026-findings]

**Evaluation framework.** Three pillars: automated evaluation using LLM-as-a-judge and custom metrics against ground-truth datasets; manual expert review of conversation logs with content designers and subject matter experts, plus red teaming with the Incubator for Artificial Intelligence and the AI Security Institute; and automated live monitoring flagging safety and quality issues for human review. Six criteria: groundedness, relevance and answer rate, factual accuracy, factual completeness, reliability, and reputational safety — with each iteration required to improve at least one without degrading the others.[^gds-2026-engineering]

**Privacy.** A data protection impact assessment was conducted, safeguards were put in place to stop users submitting personal data, and GOV.UK pages containing personal data were removed from the system so they could not be sent to the model.[^gds-2024-findings]

**The pilots.** Late 2023: 1,000 invited users. November 2024: a private beta linked from selected business pages, using a waiting list, estimated at four weeks.[^gds-2024-beta] Then the app pilot via iOS TestFlight. Cumulatively, more than 10,000 users and 26,000 questions.[^gds-2026-findings]

## Outcomes and economics

| Measure | First pilot (late 2023) | Latest reported (March 2026) |
| --- | --- | --- |
| Users | 1,000 invited | 10,136 web + 641 app |
| Questions | not stated | 23,838 web + 2,670 app |
| Found it useful | nearly 70% (survey n=157) | 73% (app survey n=45) |
| Satisfied | just under 65% (n=157) | 64% (n=45) |
| Accuracy | below the standard GOV.UK requires | 90%, from a 76% earliest benchmark |
| Answer rate, in-scope questions | not stated | 88% |
| Average answer time | not stated | 10.7 seconds |
| Jailbreak attempts blocked | not stated | 508 of 508 |

All figures are the team's own.[^gds-2024-findings][^gds-2026-findings]

The research effort behind them is substantial and itemised: 99 timed usability tests, a 15-person diary study with 30 hours of video, 576 surveys covering 2,135 questions, manual scoring of 419 conversations and 1,084 question-answer pairs, path analysis of 4,764 journeys, and detailed qualitative analysis of 29 conversations on the web pilot; then answer-quality review of 1,338 in-scope questions, a 144-participant answer-speed study across four speeds and three response modes, 12 observed users across three segments, and 45 survey responses in the app study.[^gds-2026-findings]

On economics there is nothing. No development cost, no running cost, no inference spend, no staff cost, and no estimate of the call-centre contacts avoided — the one saving the case repeatedly gestures at, in the form of users saying an answer saved them "a phone call to a department's call centre."[^gds-2026-findings]

## Causal assessment and competing explanations

Labelled **descriptive**, and firmly so. Nothing here is designed to establish that GOV.UK Chat caused any outcome. There is no control arm, no comparison against GOV.UK search, and no before-and-after on any task metric. Users report saving time; nobody measured time saved.

The accuracy movement from 76% to 90% has a second explanation the team states itself: it credits both "the work of our data scientists" and "advances in the underlying AI models."[^gds-2026-findings] Since the system moved to newer Anthropic models over the same period, the improvement cannot be attributed to the team's engineering, to model progress, or to the two in any particular proportion. The posts do not attempt to separate them, and neither does this case.

The satisfaction figures deserve a competing explanation too, because the obvious reading is uncomfortable. Useful went from nearly 70% to 73%; satisfied went from just under 65% to 64%.[^gds-2024-findings][^gds-2026-findings] The innocent explanations are real: the populations differ (1,000 invited users versus iOS TestFlight participants), the samples are small and differently constructed (n=157 versus n=45), and the second study deliberately focused on areas that had changed. But the flat result across a fourteen-point accuracy gain is at least consistent with satisfaction being driven by something other than factual accuracy — speed, for instance, which the team identifies as the thing users wanted most.[^gds-2026-findings]

## Failures, limitations, and governance

- **The headline metric is self-graded against an unpublished rubric.** Accuracy is assessed by the team's own subject matter experts and by automated tools including LLM-as-a-judge, with the ground-truth dataset and the scoring standard described but not released.[^gds-2026-findings][^gds-2026-engineering]
- **Ten per cent inaccuracy is characterised, not sized.** The team says inaccuracy is "often" a matter of answering some but not all of a question.[^gds-2026-findings] How often, and what the remainder consists of, is not stated — so a reader cannot tell how many wholly wrong answers about tax or visas the system produces.
- **No error budget was ever published.** The first pilot found accuracy below "the highest level of accuracy demanded for a site like GOV.UK".[^gds-2024-findings] What that level is, numerically, is never given, so there is no stated threshold that 90% either meets or misses.
- **The comparative claim carries no evidence.** That GOV.UK Chat "scores higher than widely-used consumer AI assistants" on government questions is asserted with no benchmark, no assistants named, and no figures.[^gds-2026-findings]
- **The brand-trust finding was reported once and never followed up.** In January 2024 the team found users underestimating inaccuracy risk because of the GOV.UK brand.[^gds-2024-findings] The 2026 posts report that users appreciate the source-checking features, which is not the same thing, and offer no measurement of whether misplaced confidence persists.
- **Sample sizes shrink as the claims grow.** Ten thousand users in the headline; 45 survey responses behind the satisfaction figure.[^gds-2026-findings]
- **"All 508 jailbreak attempts prevented" is self-adjudicated.** What counted as an attempt, and who decided each was prevented, is not stated.[^gds-2026-findings]
- **Independent scrutiny of government AI existed and did not reach here.** The NAO audited AI adoption across government in March 2024 without mentioning this deployment.[^nao-ai-government]

## What this case demonstrates

1. A public-sector team can run a generative AI deployment slowly and publish against itself. The first published finding was that the system was not accurate enough, and it was published anyway.[^gds-2024-findings]
2. Staged exposure works as a governance mechanism: three internal phases, a dozen users, a thousand, then two public pilots, with a decision point at each.[^gds-2024-findings]
3. Institutional trust is a deployment risk, not only an asset. Users discounted the inaccuracy warnings because the answers came from GOV.UK.[^gds-2024-findings]
4. Accuracy and satisfaction can move independently. Fourteen points of measured accuracy bought no measurable satisfaction, and the team's own reading is that users now want speed.[^gds-2026-findings]
5. Speed and accuracy trade against each other in current systems, and the trade is a design decision someone has to own. GDS chose accuracy and accepted 10.7 seconds.[^gds-2026-findings]
6. An evaluation framework can be specified in advance and made public — six named criteria, three measurement pillars, a rule that no iteration may degrade another criterion.[^gds-2026-engineering]
7. Detailed methods reporting is not the same as verifiable evidence. This is the most methodologically transparent deployment in this library and still the least independently checked.
8. Two and a half years from prototype to widening access is what "not moving fast and breaking things" costs, and the team said that was the point.[^gds-2024-findings]

## What this case does not demonstrate

- It does not establish that the system is 90% accurate. It establishes that its builders assess it at 90% against a rubric they have described but not published.
- It does not show that users got better outcomes. No source measures whether anyone completed a task correctly, filed the right form, or avoided an error.
- It does not show the deployment saved money or staff time. No cost or call-deflection figure appears anywhere.
- It does not establish that the improvement came from the team's engineering rather than from better underlying models. The team credits both without separating them.[^gds-2026-findings]
- It does not show the system is safe against jailbreaking in general — only that the team judged 508 specific attempts to have been blocked.
- It does not tell you whether GOV.UK Chat is now generally available. The sources describe a decision to widen access to GOV.UK app users and an intention to test on the website later in 2026;[^gds-2026-findings] nothing read here confirms a public launch, which is why this case records the deployment stage as `pilot`.
- It does not report any independent assessment, because none exists in the record.
- It does not describe harm. No source read here reports a user acting on a wrong answer, and the absence of such a report is not evidence that none occurred.

## Evidence assessment

**Grade C — the most transparent self-report in this library, and still a self-report.**

This grade is a judgment call and worth defending, because on effort and candour the record is excellent. The team published eleven named research methods with sample sizes for each.[^gds-2026-findings] It published its evaluation framework and criteria before claiming success against them.[^gds-2026-engineering] It published its worst finding first — that accuracy fell short of what GOV.UK requires, that the system hallucinated, and that the institution's own credibility was causing users to over-trust it.[^gds-2024-findings] Authors are named with job titles, posts are dated, and the lead product manager answers public questions in the comments. Very little in this library is documented this well.

But the library's grade measures the evidence, not the good faith. Every figure here — accuracy, satisfaction, answer rate, response time, jailbreaks blocked — was produced, scored, and published by the team whose work it evaluates. The accuracy rubric is not public. The ground-truth dataset is not public. The comparative claim against consumer assistants has no data behind it at all. Under the library's own definitions that is "largely self-reported... or only partly corroborated", which is grade C.

The one genuinely independent body in this record establishes the absence rather than filling it. The National Audit Office examined government AI adoption in March 2024 and found strategy and governance wanting across the board; searching the report finds no mention of GOV.UK Chat, two of the Government Digital Service, and one of "chatbot".[^nao-ai-government] It is cited here as context and explicitly not as corroboration, and its presence in the front matter should not be read as a second evidentiary chain — this case rests on one.

Two further limits belong on the record. The four GDS posts span two and a half years and describe different pilots, but they are one team on one blog, and treating them as separate chains would be the same category error this library declined to make in its METR case. And the comparison this case draws between the 2023 and 2026 satisfaction figures joins two studies with different populations, different recruitment, and samples of 157 and 45 — it is offered as an observation worth explaining, not as a measured non-improvement.

One small discrepancy is recorded rather than resolved: the January 2024 post gives the first-pilot survey as n=157, while the March 2026 post describes 576 surveys analysed for the web pilot.[^gds-2024-findings][^gds-2026-findings] These are almost certainly different surveys from different phases rather than a contradiction, but no source states the relationship, so the figures are reported separately and not combined.

## Material claims

| Claim | Label | Evidence | What would change this |
| --- | --- | --- | --- |
| GOV.UK Chat is a retrieval-augmented system drawing only on published GOV.UK guidance. | Verified | Described consistently across four posts spanning two and a half years, with architectural detail including chunking, retrieval, routing, and guardrails[^gds-2024-findings][^gds-2026-engineering] | Evidence the model draws on sources beyond GOV.UK |
| More than 10,000 users asked more than 26,000 questions across two public pilots. | Supported | The team's own figures, itemised as 10,136 users and 23,838 questions on the web plus 641 users and 2,670 questions in the app[^gds-2026-findings] | Independent access to usage logs; nobody outside GDS can verify these counts |
| Answer accuracy rose from 76% to 90%. | Attributed | The team's own assessment using its subject matter experts and automated tools, against a rubric described but not published[^gds-2026-findings] | Publication of the rubric and ground-truth dataset, or an independent evaluation |
| The first pilot's answers fell short of the accuracy GOV.UK requires, and hallucinations occurred. | Verified | Stated plainly by the team about its own system, against interest[^gds-2024-findings] | A retraction, which would be strange given the direction of the admission |
| Some users underestimated inaccuracy risk because of the GOV.UK brand. | Supported | A qualitative finding from the first pilot's user research; the method behind it is not detailed and it is not revisited in later posts[^gds-2024-findings] | A follow-up study measuring whether the effect persists, in either direction |
| User satisfaction did not improve between the 2023 and 2026 pilots. | Inference | Drawn from "just under 65%" satisfied (n=157) against 64% (n=45), across studies with different populations and recruitment | A single instrument applied to comparable populations at both dates |
| All 508 jailbreak attempts during the pilots were prevented. | Attributed | The team's own count and its own adjudication of what was prevented; the definition of an attempt is not given[^gds-2026-findings] | An independent red-team report, or publication of the classification criteria |
| GOV.UK Chat scores higher than widely-used consumer AI assistants on government questions. | Attributed | Asserted with no benchmark, no named comparators, and no figures[^gds-2026-findings] | Publication of the comparison, or an independent head-to-head |
| The average answer takes 10.7 seconds and users wanted it faster. | Supported | The team's measurement, plus a 144-participant study in which simulated faster answers raised satisfaction[^gds-2026-findings] | Instrumented timing data from an independent party |
| The accuracy improvement was caused by the team's engineering. | Unknown | The team credits both its data scientists and advances in the underlying models, and the system changed model providers over the period[^gds-2026-findings][^gds-2026-engineering] | An ablation holding the model fixed while varying the pipeline, or vice versa |
| The deployment saved users time. | Attributed | Users told researchers it did, some saying it saved a call to a departmental call centre; no baseline or measurement exists[^gds-2026-findings] | A timed task comparison against GOV.UK search |
| The deployment saved money. | Unknown | No development, running, inference, or staff cost appears in any source, and no call-deflection figure is given | Publication of programme costs and a contact-volume comparison |
| Any user was harmed by an inaccurate answer. | Unknown | No source read here reports an instance; none reports looking for one either | Incident reporting, complaints data, or a follow-up study of acted-on answers |
| Independent oversight assessed this deployment. | Unknown | The NAO's March 2024 audit of government AI does not mention GOV.UK Chat; no other independent assessment was found[^nao-ai-government] | An NAO or Public Accounts Committee examination reaching this system by name |

## Direct quotations

> “Overall, answers did not reach the highest level of accuracy demanded for a site like GOV.UK, where factual accuracy is crucial. We also observed a few cases of hallucination - where the system generated responses containing incorrect information presented as fact - mostly in response to users' ambiguous or inappropriate queries.”

— Gregory, Tosi, McDonald, and Sewell, reporting on their own first pilot[^gds-2024-findings] · locator: "Our early findings", fourth paragraph

> “We also found that some users underestimated or dismissed the inaccuracy risks with GOV.UK Chat, because of the credibility and duty of care associated with the GOV.UK brand.”

— Gregory, Tosi, McDonald, and Sewell[^gds-2024-findings] · locator: "Our early findings", final paragraph

> “These findings validate why we're taking a balanced, measured and data driven approach to this technology — we're not moving fast and breaking things.”

— Gregory, Tosi, McDonald, and Sewell[^gds-2024-findings] · locator: "What's next", first paragraph

> “Industry-wide, no one has been able to reach 100% accuracy when generating answers. This means managing the risk of ‘hallucinations’ – where the system generates responses containing incorrect information presented as fact – is part of working with this technology right now.”

— Sam Dub and Josh Davey, announcing the second pilot[^gds-2024-beta] · locator: "Making improvements and addressing risks", second paragraph

> “In cases of ‘inaccuracy’, it's often that GOV.UK Chat is able to answer some but not all aspects of a user's question.”

— Sam Dub and Sharon McDonald, characterising the residual 10%[^gds-2026-findings] · locator: headline finding 2, "We've made strong progress on increasing accuracy and answer quality"

> “For us, accuracy is the most important thing, and consequently GOV.UK Chat responses are slower than we'd ideally like; an average 10.7 seconds for an answer.”

— Sam Dub and Sharon McDonald[^gds-2026-findings] · locator: headline finding 5, "Users want answers even faster"

> “Defining clear success criteria, measuring every change, and being willing to abandon what does not work ensures AI applications evolve responsibly and effectively. Looking closely at outputs, not just metrics, is what drives meaningful iteration.”

— Alessia Tosi and Nick Lange[^gds-2026-engineering] · locator: "Key lessons and next steps", first lesson

> “The government lacked a coherent plan to support adoption of AI in the public sector as part of its 2021 National AI Strategy.”

— National Audit Office, in an audit that does not mention this deployment[^nao-ai-government] · locator: Summary, Key findings, paragraph 8

## Revision notes

- 2026-09-13 — Initial publication at Grade C, and the grade is the main editorial call in this case. The record is the most methodologically transparent in the library — eleven named research methods with sample sizes, a published evaluation framework, and the worst findings published first — but every figure was produced and scored by the team whose work it evaluates, the accuracy rubric and ground-truth dataset are unpublished, and no independent party has measured the system. Under the library's own definitions that is C, not B, and the case says so rather than rewarding good faith with a grade the evidence does not carry. The NAO report is cited for governance context and explicitly not as a second evidentiary chain; the four GDS posts are one family, consistent with the reasoning applied to METR in AAI-2026-008. `outcome` is `inconclusive` because the deployment reports positive indicators and no outcome measure for citizens; `deployment_stage` is `pilot` because no source confirms general availability. The observation that satisfaction did not move while accuracy rose fourteen points is labelled `Inference` and its confounds are stated. First `deployment` case in the library, which had covered incidents, evaluations, regulatory actions, and economic arguments but never a deployment that simply ran.

[^gds-2024-findings]: Matthew Gregory, Alessia Tosi, Sharon McDonald, and Robert Sewell, [“The findings of our first generative AI experiment: GOV.UK Chat”](https://insidegovuk.blog.gov.uk/2024/01/18/the-findings-of-our-first-generative-ai-experiment-gov-uk-chat/), Inside GOV.UK, Government Digital Service, 2024-01-18.

[^gds-2024-beta]: Sam Dub and Josh Davey, [“We're running a private beta of GOV.UK Chat”](https://insidegovuk.blog.gov.uk/2024/11/05/were-running-a-private-beta-of-gov-uk-chat/), Inside GOV.UK, Government Digital Service, 2024-11-05.

[^gds-2026-findings]: Sam Dub and Sharon McDonald, [“5 things we learned testing GOV.UK Chat: an AI assistant for government”](https://insidegovuk.blog.gov.uk/2026/03/16/5-things-we-learned-testing-gov-uk-chat-an-ai-assistant-for-government/), Inside GOV.UK, Government Digital Service, 2026-03-16.

[^gds-2026-engineering]: Alessia Tosi and Nick Lange, [“Developing GOV.UK Chat: Our data science and AI engineering journey”](https://insidegovuk.blog.gov.uk/2026/05/15/developing-gov-uk-chat-our-data-science-and-ai-engineering-journey/), Inside GOV.UK, Government Digital Service, 2026-05-15.

[^nao-ai-government]: National Audit Office, [“Use of artificial intelligence in government”](https://www.nao.org.uk/reports/use-of-artificial-intelligence-in-government/), HC 612 Session 2023-24, 2024-03-15.
