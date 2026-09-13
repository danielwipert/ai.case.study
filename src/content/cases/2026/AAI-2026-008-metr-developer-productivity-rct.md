---
case_id: AAI-2026-008
title: "The developers who were sure AI made them faster"
summary: "A randomized trial put AI coding tools in the hands of sixteen experienced open-source maintainers working on their own repositories. Tasks took 19% longer with AI allowed, while the same developers estimated afterwards that AI had made them 20% faster — and when the researchers tried to repeat the measurement a year later, developers refused to work without AI at all."
organization:
  - Model Evaluation & Threat Research (METR)
case_type: evaluation
secondary_case_types:
  - economic-case
industry:
  - technology
business_function:
  - software-engineering
  - research-development
deployment_stage: evaluation
outcome: mixed
evidence_grade: B
status: published
created: 2026-09-13
published: 2026-09-13
last_verified: 2026-09-13
next_review: 2027-03-13
geography:
  - International
environment: mixed
deployment_pattern:
  - employee-copilot
  - agentic-workflow
causal_strength: causal
related_cases:
  - AAI-2026-002
  - AAI-2026-003
evidence_upgrade_path: "Grade A needs a chain that does not run through METR. The strongest candidate is an independent re-analysis of the released dataset by a team with no stake in the result, which is possible today because both datasets are public; second-best is a replication of the task-level randomization by a different group, ideally in a setting with the same repository maturity. The 2025 paper's numeric confidence interval reaching print in the paper itself rather than in a later blog post, and peer review of the paper at a venue that scrutinises the regression specification, would each close a specific hole named in the evidence assessment below."
sources:
  - id: metr-rct
    author: "Joel Becker, Nate Rush, Beth Barnes, and David Rein"
    title: "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity"
    publisher: "arXiv:2507.09089 [cs.AI], Model Evaluation & Threat Research (METR)"
    published: 2025-07-12
    updated: 2025-07-25
    url: "https://arxiv.org/abs/2507.09089"
    accessed: 2026-09-13
    roles:
      - primary-investigation
      - direct-evidence
      - analysis
    source_family: metr-early-2025-rct
    access: "The researchers' own experimental data: 246 issues completed by 16 developers between February and June 2025, self-reported implementation times, 143 hours of screen recordings manually labelled at roughly ten-second resolution, Cursor analytics for 13 developers, entry and exit surveys, and interviews."
    method: "Randomized controlled trial with treatment assigned per issue by simulated fair coin flip after the issue was defined and after the developer forecast its duration. Effect estimated by log-linear regression of implementation time on the treatment indicator with forecast difficulty as a covariate; HC3 standard errors by default, with clustered, bias-corrected cluster-robust, and hierarchical bootstrap alternatives reported in Figure 15. Twenty-one pre-specified candidate explanations for the result were each assessed against the collected evidence."
    conflicts: "METR designed the experiment, ran it, analysed it, and published it, with no external peer review at the time of reading. It is a nonprofit whose mission is measuring frontier AI capability, so a finding that capability is overstated in the wild is congenial to its remit — and it is also the finding that its own staff's later survey responses are lowest of any subgroup, which cuts the other way. Developers were paid $150/hour to participate."
    corroboration: "None from outside METR. The paper's own robustness checks are internal: a 25% slowdown measured from screen-recording duration against 24% from self-reported time on the same subset of issues, and four alternative estimators reported in Figure 13."
    accountability: "Named authors with a correspondence address, an equal-contribution note, a full author-contributions appendix, CC BY 4.0 licence, versioned on arXiv with v1 and v2 both retrievable, and the underlying dataset released publicly."
    notes: "Read in full for this case from the arXiv HTML of v2, including Appendices C, D, and E. The v2 abstract says 21 candidate factors; some earlier summaries of the study, including METR's own blog copy, say 20. The paper reports the confidence interval on the headline estimate graphically in Figure 1 and does not state it numerically in the text; the numeric interval used in this case comes from METR's February 2026 post."
  - id: metr-blog
    author: "Joel Becker, Nate Rush, Beth Barnes, and David Rein"
    title: "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity"
    publisher: "Model Evaluation & Threat Research (METR)"
    published: 2025-07-10
    url: "https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/"
    accessed: 2026-09-13
    roles:
      - primary-investigation
      - participant-account
    source_family: metr-early-2025-rct
    access: "The same experiment as the paper, summarised by its authors, with an anticipated-objections section answering criticisms the authors expected."
    method: "Summary of the trial described in the paper. Its distinct evidentiary content is the authors' answers to anticipated objections, including their statement on how they handle the small number of developers."
    conflicts: "Self-published by the research team on its own site, and written to pre-empt criticism, which is a stated persuasive purpose rather than a neutral one."
    corroboration: "Restates the paper it accompanies; adds no independent evidence."
    accountability: "Named contributors, a BibTeX citation block, a dated update line pointing to the February 2026 follow-up, and a permanent URL."
    notes: "Read for this case. It concedes that clustered standard errors were 'not reported in the released paper, but forthcoming', which is the reason this case treats the published uncertainty estimate as incomplete."
  - id: metr-2026-update
    author: "Joel Becker, Nate Rush, Tom Cunningham, David Rein, and Khalid Mahamud"
    title: "We are Changing our Developer Productivity Experiment Design"
    publisher: "Model Evaluation & Threat Research (METR)"
    published: 2026-02-24
    url: "https://metr.org/blog/2026-02-24-uplift-update/"
    accessed: 2026-09-13
    roles:
      - primary-investigation
      - direct-evidence
    source_family: metr-late-2025-rct
    access: "A second, separate data collection: 57 developers across 143 repositories and more than 800 tasks from August 2025, of whom 10 also took part in the first study, plus participant surveys and interviews about why people declined to take part."
    method: "Same task-level randomization as the first study at a reduced $50/hour participation rate. Reported as an abandoned design rather than a result: the authors give point estimates and confidence intervals but state that selection effects make the central estimate 'a bad proxy'. No paper or full write-up accompanies it."
    conflicts: "Same institution and overlapping authors as the first study, reporting on the reliability of its own prior method. Publishing a null-signal result that undermines the value of an expensive experiment is against interest, which is a point in its favour."
    corroboration: "None from outside METR. It reports 10 developers carried over from the first study, so the two datasets are not fully independent of each other either."
    accountability: "Named contributors, dated, BibTeX citation, and links to the public datasets for both studies."
    notes: "Read in full. This post is the only place the numeric confidence interval for the 2025 headline estimate appears (+2% to +39%), and it describes that estimate as a '20% slowdown' where the paper says 19% — a discrepancy recorded rather than reconciled."
  - id: metr-2026-survey
    author: "Joel Becker"
    title: "Measuring the Self-Reported Impact of Early-2026 AI on Technical Worker Productivity"
    publisher: "Model Evaluation & Threat Research (METR)"
    published: 2026-05-11
    url: "https://metr.org/blog/2026-05-11-ai-usage-survey/"
    accessed: 2026-09-13
    roles:
      - primary-investigation
      - analysis
    source_family: metr-2026-survey
    access: "Survey responses from 349 technical workers collected February to April 2026, including 87 software engineers, 71 researchers, 129 academics and PhD students, and 48 founders and managers, plus qualitative review of public outputs for the highest-claiming respondents."
    method: "Convenience sample recruited from GitHub, academic directories, METR staff and their networks, and X, with an approximate 2% response rate among emailed contacts and roughly 70% of participants paid. Multiple differently worded questions used as internal consistency checks; 10 respondents filtered for flagged answers. Self-report throughout, with no measured counterfactual."
    conflicts: "Same institution as the two experiments, and the sample is partly drawn from METR staff and their professional networks — a selection the author discloses and then analyses, reporting that METR employees give the lowest uplift figures of any subgroup."
    corroboration: "The author places the results alongside public self-report research and states they are consistent with it, while noting survey estimates generally exceed experimental ones."
    accountability: "Single named author, dated, BibTeX citation, the survey instrument published in full, and an anomalies section describing excluded responses."
    notes: "Read for this case. Cited here for the self-report side of the perception gap and for METR's own statement that its 2025 study found people overestimating AI's effect on their time by about 40 percentage points."
  - id: peng-copilot
    author: "Sida Peng, Eirini Kalliamvakou, Peter Cihon, and Mert Demirer"
    title: "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot"
    publisher: "arXiv:2302.06590"
    published: 2023-02-13
    url: "https://arxiv.org/abs/2302.06590"
    accessed: 2026-09-13
    roles:
      - primary-investigation
      - analysis
    source_family: github-copilot-rct
    access: "A controlled experiment with recruited developers implementing a specified JavaScript HTTP server."
    method: "Controlled experiment with a treatment group given GitHub Copilot and a control group without it, on a single synthetic task; the treatment group finished 55.8% faster."
    conflicts: "Three of the four authors were at the time affiliated with GitHub or Microsoft, the vendor of the tool under test."
    corroboration: "Cited by the METR paper as part of the prior literature its result contradicts."
    accountability: "Named authors, preprint with a stable arXiv identifier."
    notes: "Only the abstract and listing metadata were read for this case, not the full paper. It is cited here solely to mark the contrast in task design — a single synthetic task versus real issues in mature repositories — and no claim in this case rests on its internals."
tags:
  - randomized-controlled-trial
  - developer-productivity
  - perception-gap
  - open-source
  - measurement
  - cursor
  - self-report
---

## Case in one sentence

Sixteen experienced open-source maintainers were randomly assigned to complete some of their own repository issues with AI tools and some without, took 19% longer on the ones where AI was allowed, and still believed afterwards that AI had sped them up by 20%.

## Executive summary

Between February and June 2025 the nonprofit METR ran a randomized controlled trial on real software work. Sixteen developers — typically over a decade of experience, an average of five years and 1,500 commits on the specific repository they worked in — supplied lists of genuine issues from their own projects. Each issue was randomized to AI-allowed or AI-disallowed *after* it had been defined and after the developer had forecast how long it would take under each condition.[^metr-rct]

Allowing AI increased completion time by 19%.[^metr-rct] The interval around that estimate runs from +2% to +39%, a number METR published seven months later rather than in the paper.[^metr-2026-update]

The more durable finding is the gap between that measurement and everyone's belief about it. Before the trial the developers forecast a 24% speedup. After completing it — after months of using the tools on their own code and being slowed down — they estimated a 20% speedup. Economists forecast 39%; machine-learning experts forecast 38%.[^metr-rct] Every group, including the people who lived through the experiment, was wrong about the sign.

The case does not end there, and the ending is the part that generalises. METR started a second, larger experiment in August 2025: 57 developers, 143 repositories, more than 800 tasks. In February 2026 it published the result as a methods failure. Developers had begun refusing to work without AI, and 30% to 50% of participants said they were withholding tasks they did not want to attempt unassisted. METR judged its own central estimate "a bad proxy" and announced it was redesigning the study.[^metr-2026-update] The measurement instrument had been broken by the thing it was measuring.

## Research question

When experienced engineers use AI tools on code they know deeply, does the time they spend actually fall — and if it does not, do they notice?

## Organization and operating context

METR is a research nonprofit that measures frontier AI systems' capacity to perform complex tasks autonomously.[^metr-rct] It is not the deploying organization in this case; the deployments are sixteen individual maintainers' own working practices, which is why this case sits in a library otherwise made of corporate deployments.

The subjects are the operating context. The repositories average 23,000 stars, 1,100,000 lines of code, 20,000 commits, 710 committers, and roughly ten years of age, and they hold contributions to high review standards.[^metr-rct] The developers were regular contributors to them, averaging five years on the repository — 59% of that repository's lifetime.[^metr-rct] They were not novices being handed a tool; they were the people who wrote the code the tool was being asked to change.

Their AI experience was real but uneven: 93% had used LLM tools such as ChatGPT, and 44% had used the Cursor IDE the study provided.[^metr-rct]

## The situation before AI

The pre-AI baseline is simply how these maintainers worked: reading their own codebase, writing code, testing and debugging, and submitting pull requests through their project's normal review process. The screen-recording labels make the composition visible — in the AI-disallowed condition, a larger share of time goes to actively writing code and to reading or searching for information.[^metr-rct]

The relevant prior belief was industry-wide and confident. Earlier controlled experiments had found large speedups: Peng and colleagues measured a 55.8% faster completion with GitHub Copilot, on a task specified as implementing an HTTP server in JavaScript.[^peng-copilot] METR's contribution is not to dispute that number but to change the task: real issues, in a repository the developer maintains, judged by that repository's own reviewers.

## The AI intervention or event

Developers listed real issues they wanted to fix, capped at roughly two hours each, and forecast each one's duration both with and without AI. Only then was each issue randomized by simulated coin flip.[^metr-rct] That order matters: because the work was fixed before the treatment was known, the trial measures time to do a defined piece of work rather than volume of output, which is what makes it immune to the criticism that AI simply produces more verbose code.[^metr-rct]

In the AI-allowed condition developers could use anything, including nothing; most used Cursor Pro with Claude 3.5 or 3.7 Sonnet, and METR provided subscriptions and basic training. In the AI-disallowed condition no generative tooling was permitted, though ordinary search engines remained available.[^metr-rct] Developers recorded their screens, and self-reported time before and after pull-request review.

Then, in August 2025, METR ran it again with 57 developers and over 800 tasks, at $50/hour instead of $150.[^metr-2026-update]

## Outcomes and economics

**The 2025 trial.** Developers completed 136 AI-allowed and 110 AI-disallowed issues.[^metr-rct]

| Quantity | Value |
| --- | --- |
| Measured effect of allowing AI | +19% completion time (slowdown) |
| Confidence interval on that estimate | +2% to +39%[^metr-2026-update] |
| Developers' forecast, before randomization | 24% faster |
| Developers' own estimate, after the study | 20% faster |
| Economics experts' forecast | 39% faster |
| Machine-learning experts' forecast | 38% faster |
| Raw ratio of mean times, uncorrected for difficulty | +34% |
| Same effect measured from screen-recording duration | +25% (against +24% self-reported on the same subset) |

All rows are from the paper except the interval.[^metr-rct]

Where the time went, on the labelled subset: with AI allowed, developers spent proportionally less time actively coding and less time reading or searching, and more time prompting, waiting on generations, reviewing AI output, and idle.[^metr-rct] Roughly 9% of time went to reviewing and cleaning AI-generated code and about 4% to waiting for generations.[^metr-rct] Developers accepted fewer than 44% of Cursor's generations; 75% said they read every line of AI output, 56% said they often had to make major changes to clean it up, and 100% said they had to modify it at all.[^metr-rct]

**The 2026 follow-up.** For the ten developers carried over from the original study, the estimate flipped to an 18% speedup, interval −38% to +9%. For newly recruited developers it was a 4% speedup, interval −15% to +9%.[^metr-2026-update] Both intervals cross zero. METR does not present these as findings.

**The 2026 survey.** Across 349 technical workers surveyed February to April 2026, the median self-reported change in the *value* of work due to AI was 1.4x to 2x; the median self-reported change in *speed* was 3x. Respondents retrospectively put themselves at 1.3x in March 2025 and forecast 2.5x for March 2027. METR staff reported the lowest gains of any subgroup studied.[^metr-2026-survey]

No cost figures are reported for any organization. What the trial prices is participant time at $150/hour, which is an experimental cost, not a deployment cost.

## Causal assessment and competing explanations

This case is labelled **causal**, and it is the library's first. The justification is narrow and worth stating precisely: treatment was randomly assigned to units of work that were fully specified before assignment, so within this sample, the 19% figure is an effect of allowing AI and not a selection artifact. That is a stronger design than anything else in this library.

The label does not travel. It licenses "AI allowed slowed these developers on these issues", not "AI slows developers".

Four competing explanations deserve to be named.

**Small sample, unusual people.** Sixteen developers is few, and they are not a random draw from anywhere. METR's answer is that treatment was randomized at the issue level, giving 246 units, and that clustered and bias-corrected standard errors give similar results while a hierarchical bootstrap gives wider ones.[^metr-rct] The blog post concedes those clustered errors were "not reported in the released paper, but forthcoming".[^metr-blog]

**The experiment made people use AI more than they would.** METR finds developers who reported experimenting or maximising AI use were slowed *more* than those who used it normally — so this inflates the estimate but does not create it.[^metr-rct]

**Self-reported time is unreliable.** Recomputing from screen-recording duration on the same subset gives 25% against 24%.[^metr-rct] This one is answered.

**It is about these repositories and these people.** METR agrees, and this is the explanation with real force. Developers were slowed more on issues where they had high prior exposure, and developers who forecast a large speedup for a particular issue were not slowed on it.[^metr-rct] One developer with more than 50 hours of Cursor experience showed a speedup. The authors state their results are consistent with greenfield projects or unfamiliar codebases seeing substantial speedup.[^metr-rct]

The perception gap is a separate finding with a separate basis: it is a comparison of elicited forecasts against measured times, and it does not depend on the causal design at all.

## Failures, limitations, and governance

- **Experience did not protect against the misjudgment; it may have caused the slowdown.** The developers most likely to be wrong about the tool's value were the ones who knew the code best.
- **The tools were used as intended and still cost time.** The mechanism is not misuse. It is review burden: under 44% acceptance, 100% of accepted output requiring modification, and 9% of working time spent cleaning up.[^metr-rct]
- **Post-hoc estimates did not converge on the truth.** Living through the experiment moved the developers' estimate from 24% faster to 20% faster, in the wrong direction from a measured 19% slower.[^metr-rct]
- **The measurement broke.** By late 2025, 30% to 50% of participants were withholding tasks from randomization because they did not want to do them without AI, and recruitment suffered for the same reason. METR concluded its estimate was likely a lower bound on true speedup and abandoned the design.[^metr-2026-update]
- **A pay cut confounds the follow-up.** METR reduced participation pay from $150 to $50 an hour and says this likely contributed to the selection problem, so the two datasets differ in more than their dates.[^metr-2026-update]
- **The headline uncertainty was published late and elsewhere.** A reader of the paper alone cannot state the interval on its central claim.
- **Everything here comes from one organization.** Two experiments and a survey, three data collections, one team.

## What this case demonstrates

1. Under randomization, allowing early-2025 AI tools made experienced maintainers of large mature repositories slower at defined issues in their own code, by 19% with an interval of +2% to +39%.
2. Self-assessment of AI's effect on one's own work can be wrong in sign, not merely in magnitude, and direct experience of the tool does not correct it.
3. Expert forecasting was wrong in the same direction and by more than the practitioners' — economists and ML researchers predicted roughly 38–39% speedups.
4. Task realism changes the answer: the contrast between a 55.8% speedup on a specified synthetic task[^peng-copilot] and a 19% slowdown on real issues in ten-year-old codebases is a fact about what is being measured.
5. The cost of AI assistance is concentrated in review and rework, and it is visible: acceptance under 44%, 9% of time cleaning output, 100% of developers modifying what they accept.
6. Familiarity is a moderator. Slowdown was larger where developers had more prior exposure to the task, and the tools help most where the developer knows least.
7. Rising adoption can destroy the ability to measure adoption's effects. A randomized design that requires a no-AI arm becomes unrunnable once participants decline the arm, and the resulting bias runs in a known direction.
8. Self-report and measurement diverge systematically, which METR's own 2026 survey concedes while nonetheless arguing surveys remain useful.[^metr-2026-survey]

## What this case does not demonstrate

- It does not show that AI tools slow down software developers generally. METR says so explicitly, and the moderators it identifies are absent from most software work.
- It does not measure AI's effect on work quality, only on time. The follow-up notes participants reporting quality differences between conditions that the design never captured.[^metr-2026-update]
- It does not describe current tools. The trial ran on Cursor Pro with Claude 3.5 and 3.7 Sonnet, before the agentic tools that reshaped the follow-up.
- It does not show that developers are still slowed down. METR's own reading in February 2026 is that developers are probably faster now, on evidence it calls very weak.[^metr-2026-update]
- It does not establish the size of any 2026 effect in either direction. Both follow-up intervals cross zero, and METR disowns the estimates.[^metr-2026-update]
- It does not tell an organization whether its AI spend pays back. There are no organizational costs or revenues anywhere in this record.
- It does not settle whether the perception gap persists. The 2026 survey measures perceptions with no counterfactual to check them against.[^metr-2026-survey]

## Evidence assessment

**Grade B — an unusually well-instrumented experiment with no chain outside the organization that ran it.**

The 2025 trial is the best-designed piece of evidence in this library. Randomization after task definition removes the output-inflation problem that undermines most field studies of coding tools; the primary outcome was validated against an independent measurement of the same quantity; four alternative estimators and four uncertainty procedures are reported; twenty-one candidate explanations were assessed and the authors state which five they think contributed, which ten are unresolved, and which six they find evidence against.[^metr-rct] The dataset is public. The authors' conclusions are hedged more carefully than most reporting of them.

Three things hold it at B rather than A.

*One institution.* This case carries three source families — the 2025 trial, the 2025–26 follow-up, and the 2026 survey — and by the letter of the triangulation rule that is three chains. It is not three independent chains. All three were designed, run, analysed, and published by METR, two of them by overlapping authors, and ten developers appear in both experiments. Counting them as independent corroboration would be a category error, and this case does not. The corroboration that exists is internal: screen recordings against self-report, and estimator against estimator.

*No peer review, and an interval published elsewhere.* The paper was on arXiv and unreviewed when read. Its central estimate's confidence interval is drawn in Figure 1 and stated nowhere in the text; the numeric bounds used here come from a blog post seven months later.[^metr-2026-update] The authors also conceded in the accompanying blog that clustered standard errors were forthcoming rather than published.[^metr-blog] For a result whose whole force is quantitative, that is a real hole.

*Recorded discrepancies.* METR's February 2026 post describes its earlier finding as a "20% slowdown" where the paper says 19%.[^metr-2026-update] The v2 abstract counts 21 candidate factors where METR's own blog summary says 20. Neither changes any conclusion; both are recorded rather than smoothed.

Conflicts run in both directions and are worth stating plainly. METR's remit gives it an interest in evidence that in-the-wild capability lags benchmarks, and this result serves that interest. Against that: it published a null-signal follow-up that wrote off an expensive experiment, it reports that its own staff give the lowest AI-uplift estimates of any group it surveyed and offers "METR staff overindex on METR's previous findings" among the explanations,[^metr-2026-survey] and it released the data. That is not the behaviour of a team protecting a result.

The fifth source is a contrast, not a corroboration, and only its abstract was read; three of its four authors worked for the vendor of the tool it evaluated.[^peng-copilot] Nothing in this case rests on it beyond the design contrast it illustrates.

Finally, the `causal` label applies to the 2025 trial's internal validity only. Everything about 2026 in this case is `Unknown` or `Attributed`, and the ledger below reflects that.

## Material claims

| Claim | Label | Evidence | What would change this |
| --- | --- | --- | --- |
| Allowing AI increased issue completion time by 19% for these developers. | Verified | Randomized trial, 246 issues, regression estimate reported in the abstract and Section 3, robust across four alternative estimators[^metr-rct] | An independent re-analysis of the released dataset reaching a materially different point estimate, or a coding error found in the published analysis |
| The 95% interval on that estimate runs from +2% to +39%. | Supported | Stated by METR in February 2026; the paper itself gives the interval only graphically[^metr-2026-update] | The interval being restated numerically in a corrected paper, or the forthcoming clustered standard errors giving different bounds |
| Developers estimated after the study that AI had sped them up by 20%, while it had slowed them by 19%. | Verified | Exit estimates against measured times, both reported in Section 3.1[^metr-rct] | Evidence that exit-survey wording elicited something other than a productivity estimate |
| Economics and machine-learning experts forecast speedups of 39% and 38%. | Verified | Forecasts from 34 economics and 54 ML experts, incentivized, reported in Section 3.1[^metr-rct] | A correction to the forecast elicitation or its summary statistics |
| The slowdown was not an artifact of self-reported time. | Supported | Screen-recording duration gives 25% against 24% self-reported on the same subset[^metr-rct] | Discovery that recording duration and working time diverge systematically by condition |
| Developers accepted fewer than 44% of AI generations and all reported modifying what they accepted. | Verified | Cursor analytics for 13 of 16 developers, plus exit survey[^metr-rct] | Release of the excluded three developers' analytics changing the acceptance rate materially |
| The slowdown was larger for developers more familiar with the task. | Supported | Heterogeneous treatment effect on self-reported prior exposure, collected only for the latter half of issues and not powered for multiple comparisons[^metr-rct] | A powered pre-registered test of the familiarity moderator, in either direction |
| AI tools slowed developers generally in early 2025. | Unknown | The trial sampled one narrow setting; the authors state the result is consistent with speedup on greenfield or unfamiliar code[^metr-rct] | Replication of the task-level design across settings with varying repository maturity and developer familiarity |
| Developers were faster with AI by early 2026. | Attributed | METR's own reading of its follow-up, which it calls very weak evidence with estimates it declines to stand behind[^metr-2026-update] | A study design that survives the selection problem, or observational data with a credible counterfactual |
| Selection effects made the follow-up experiment uninterpretable. | Attributed | METR's account: 30–50% of developers withholding tasks, harder recruitment, and a pay cut from $150 to $50 an hour[^metr-2026-update] | Publication of the follow-up's participation and dropout data allowing an outside estimate of the bias |
| Technical workers in early 2026 self-report a 1.4x to 2x gain in the value of their work. | Supported | Survey of 349 respondents with internal consistency checks, on a convenience sample with roughly 2% response rate[^metr-2026-survey] | A probability sample reaching a different median, or evidence the value question was misread |
| Those 2026 self-reports reflect actual productivity change. | Unknown | No counterfactual was measured; the author flags that the same population's self-reports were off by about 40 percentage points in 2025[^metr-2026-survey] | A trial that measures the same population's actual output against their self-reports |
| The contrast with earlier 55.8% speedup findings is explained by task realism rather than by tool differences. | Inference | Drawn from the design difference between a single specified synthetic task[^peng-copilot] and real issues in mature repositories, plus METR's own familiarity and complexity findings | An experiment holding tools constant while varying task realism, or holding realism constant while varying tools |

## Direct quotations

> “Surprisingly, we find that allowing AI actually increases completion time by 19%—AI tooling slowed developers down.”

— Becker, Rush, Barnes, and Rein[^metr-rct] · locator: Abstract, sentence 6

> “Furthermore, we show that both experts and developers drastically overestimate the usefulness of AI on developer productivity, even after they have spent many hours using the tools.”

— Becker, Rush, Barnes, and Rein[^metr-rct] · locator: Section 4, Discussion, paragraph 2

> “We caution readers against overgeneralizing on the basis of our results.”

— Becker, Rush, Barnes, and Rein[^metr-rct] · locator: Section 4.1, Key Caveats, "Setting-specific factors"

> “if I am the dedicated maintainer of a very specialized part of the codebase, there is no way agent mode can do better than me.”

— An unnamed participating developer, quoted by the authors[^metr-rct] · locator: Appendix C.1.2, High developer familiarity with repositories

> “my head’s going to explode if I try to do too much the old fashioned way because it’s like trying to get across the city walking when all of a sudden I was more used to taking an Uber.”

— A developer in the late-2025 study, explaining why he withheld tasks from randomization[^metr-2026-update] · locator: Selected developer quotes, third quotation

> “Altogether, these issues make it challenging to interpret our central estimate, and we believe it is likely a bad proxy for the real productivity impact of AI tools on these developers.”

— Becker, Rush, Cunningham, Rein, and Mahamud[^metr-2026-update] · locator: "Wider adoption of AI has made it more difficult to measure task-level productivity", final paragraph

> “our study in early 2025 found that people overestimated AI’s effect on their time spent on tasks by 40 percentage points on average.”

— Joel Becker[^metr-2026-survey] · locator: Summary, paragraph beginning "Importantly, survey results are not necessarily grounded in reality"

> “We compute confidence intervals accounting for the number of developers by using clustered standard errors (not reported in the released paper, but forthcoming).”

— METR, answering the anticipated objection that sixteen developers is too few[^metr-blog] · locator: Anticipated objections, "You only had 16 developers"

## Revision notes

- 2026-09-13 — Initial publication at Grade B. First case in the library labelled `causal`, and the label is scoped in the causal assessment to the 2025 trial's internal validity rather than to any general claim about AI and developer productivity. Held at B rather than A despite an exceptional design: all three data collections are METR's own, so the three source families are not three independent chains, and the case says so rather than letting the count stand. Two discrepancies recorded — METR describing its own 19% finding as 20% in February 2026, and the 21-versus-20 factor count between the v2 abstract and the blog summary. The confidence interval on the headline estimate is cited to the February 2026 post because the paper states it only graphically. `peng-copilot` is cited from its abstract alone, which its source note states, and carries no claim in this case.

[^metr-rct]: Becker, Rush, Barnes, and Rein, [“Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity”](https://arxiv.org/abs/2507.09089), arXiv:2507.09089 [cs.AI], v1 2025-07-12, v2 2025-07-25, CC BY 4.0.

[^metr-blog]: Becker, Rush, Barnes, and Rein, [“Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity”](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/), METR, 2025-07-10.

[^metr-2026-update]: Becker, Rush, Cunningham, Rein, and Mahamud, [“We are Changing our Developer Productivity Experiment Design”](https://metr.org/blog/2026-02-24-uplift-update/), METR, 2026-02-24.

[^metr-2026-survey]: Becker, [“Measuring the Self-Reported Impact of Early-2026 AI on Technical Worker Productivity”](https://metr.org/blog/2026-05-11-ai-usage-survey/), METR, 2026-05-11.

[^peng-copilot]: Peng, Kalliamvakou, Cihon, and Demirer, [“The Impact of AI on Developer Productivity: Evidence from GitHub Copilot”](https://arxiv.org/abs/2302.06590), arXiv:2302.06590, 2023-02-13.
