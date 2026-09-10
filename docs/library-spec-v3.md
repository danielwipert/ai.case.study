# Applied AI Case Study Library

**Specification:** v3.0

**Architecture:** Git repository + GitHub Pages

**Date:** 2026-09-10

**Status:** Implementation-ready

## 1. Purpose

Build a cloud-based, version-controlled library explaining how AI is applied to real work, organizations, and industries. The library will prioritize business application, operating change, economics, outcomes, risk, and evidence rather than model novelty or technical theory.

The same Git repository will serve as:

1. The canonical research store.
2. The editorial and revision history.
3. The source for a public static website hosted through GitHub Pages.

### Core questions

Every published case must answer:

1. What work, decision, or operating process changed?
2. Why did the organization introduce AI?
3. What did the AI system do, and what remained human or conventional software work?
4. What outcome, cost, harm, or limitation was observed?
5. How strong is the evidence, and what remains uncertain?

### Non-goals for the initial release

The first release will not include:

- A traditional database.
- A spreadsheet index.
- A content-management system.
- User accounts or an administrative dashboard.
- A backend API.
- A separate record for every source or claim.
- Full copies of books, paywalled articles, or large evidence archives.
- Automated AI-written cases published without human review.

---

## 2. Governing design principle

The system will preserve research integrity in the content model and validation rules, not through technical complexity.

The minimum architecture is:

```text
Markdown case -> automated validation -> Astro static build -> GitHub Pages
```

One Markdown file is the complete, canonical record for one case. YAML front matter supplies the metadata needed for organization and display. The body contains the research narrative, material claims, quotations, evidence assessment, sources, and limitations.

### What remains from v2

- Business-first editorial framing.
- Defined unit of analysis.
- Multiple case types.
- Open source admission based on evidence quality.
- Claim-level status labels.
- Evidence grades with written rationale.
- Causal restraint and competing explanations.
- Explicit generalization limits.
- Negative and inconclusive cases.
- Dates and revision history.

### What is simplified from v2

- Sources remain inside each case rather than in a separate source database.
- Material claims remain inside each case rather than in a central claim registry.
- Case status is metadata rather than a set of folders.
- Git history replaces a detailed manual version ledger.
- Case families and cross-case propositions are deferred until the collection can support them.
- The initial site has four principal page types and five filters.

---

## 3. Platform and capacity

### Platform

- **Cloud storage and version control:** GitHub repository.
- **Content:** Markdown with YAML front matter.
- **Static site generator:** Astro with TypeScript.
- **Metadata validation:** Astro content collections and Zod.
- **Deployment:** GitHub Actions to GitHub Pages.
- **Initial search:** Browser-side search over a generated case index.
- **Editing:** GitHub web editor or local Git workflow.

GitHub Pages hosts static HTML, CSS, and JavaScript generated from the repository. It is not the canonical data store; the Git repository is.

### Capacity

GitHub Pages recommends that its source repository and published site remain below 1 GB. GitHub warns on regular repository files above 50 MiB and blocks files above 100 MiB unless another storage mechanism is used.

This is ample for a text-first research library. At an illustrative average of 50 KB per completed case:

| Cases | Approximate source text |
| ---: | ---: |
| 100 | 5 MB |
| 1,000 | 50 MB |
| 5,000 | 250 MB |
| 10,000 | 500 MB |

Actual repository size will also include code, assets, build output, and Git history. The operating targets are:

- Keep the working repository below 250 MB where practical.
- Keep the published site below 500 MB.
- Do not commit source documents merely because storage is available.
- Review asset growth before introducing Git LFS or changing hosts.

Official references:

- [GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)
- [GitHub large-file guidance](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github)
- [GitHub Pages overview](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)

---

## 4. Repository structure

```text
applied-ai-cases/
├── README.md
├── package.json
├── astro.config.mjs
├── tsconfig.json
│
├── docs/
│   ├── library-spec-v3.md
│   ├── methodology.md
│   ├── source-policy.md
│   └── taxonomy.yml
│
├── templates/
│   └── case-template.md
│
├── src/
│   ├── content/
│   │   └── cases/
│   │       ├── 2026/
│   │       └── 2027/
│   ├── content.config.ts
│   ├── pages/
│   │   ├── index.astro
│   │   ├── explore.astro
│   │   ├── methodology.astro
│   │   └── cases/
│   │       └── [...slug].astro
│   ├── components/
│   └── styles/
│
├── public/
│   └── assets/
│
├── scripts/
│   └── validate-content.ts
│
└── .github/
    ├── workflows/
    │   ├── validate.yml
    │   └── deploy.yml
    ├── ISSUE_TEMPLATE/
    │   └── case-lead.yml
    └── pull_request_template.md
```

### Folder rules

- All case files remain in `src/content/cases/<year>/` for their full life.
- Cases do not move between lead, research, review, and published folders.
- Workflow state is controlled by the `status` field.
- Only cases with `status: published` or `status: archived` appear on the public site.
- Archived cases remain visible and retain their original URL.
- The year directory reflects the year the case ID was created.

---

## 5. Unit of analysis and identifiers

The default unit is one bounded AI intervention, evaluation, operating change, or incident in a defined workflow or environment during a stated period.

A company with several materially different AI applications should normally receive several cases. Closely related cases can be connected through `related_cases` without creating a formal case-family system initially.

### Case identifier

Format:

`AAI-YYYY-NNN`

Filename:

`AAI-YYYY-NNN-short-description.md`

Example:

`AAI-2026-001-openai-hugging-face-agent-incident.md`

Rules:

- Assign an ID when a lead becomes a repository record.
- Never reuse or renumber an ID.
- Do not change the ID when the title, status, or assessment changes.
- Use lowercase hyphenated filename descriptions.

---

## 6. Case types

Every case has one primary type. Secondary types are optional.

| Type | Principal question |
| --- | --- |
| `deployment` | How was AI introduced into operational work, and what resulted? |
| `failure-incident` | What failed, why did controls fail, what was affected, and what changed afterward? |
| `evaluation` | What did a field experiment, audit, or bounded test demonstrate? |
| `organizational-transformation` | How did AI change roles, processes, incentives, or decision rights? |
| `economic-case` | What were the costs, value mechanism, cost unit, and economic result? |
| `governance-regulatory` | How did governance, law, policy, or institutional control shape the application? |

The common template applies to every type. Specialized cases may add type-specific subsections. A failure or incident case should normally add detection, containment, blast radius, control failure, remediation, and residual risk.

---

## 7. Metadata model

YAML will contain only fields needed to identify, organize, validate, and display a case. Detailed research belongs in the Markdown body.

### Required for every repository record

```yaml
---
case_id: AAI-2026-001
title: "OpenAI and Hugging Face: Agent coordination across unintended infrastructure"
summary: "One- or two-sentence neutral description used on case cards and in search."
organization:
  - OpenAI
  - Hugging Face
case_type: failure-incident
industry:
  - software-technology
business_function:
  - security
status: research
created: 2026-09-10
tags:
  - agentic-ai
  - reward-hacking
---
```

### Required before publication

```yaml
deployment_stage: evaluation
outcome: negative
evidence_grade: B
last_verified: 2026-09-10
```

### Optional metadata

```yaml
secondary_case_types:
  - evaluation
geography:
  - US
environment: evaluation
deployment_pattern:
  - agentic-workflow
causal_strength: plausibly-causal
published: 2026-09-20
next_review: 2027-03-20
related_cases: []
```

### Controlled status values

- `lead`
- `research`
- `review`
- `published`
- `archived`

### Controlled evidence grades

- `A`
- `B`
- `C`
- `D`

### Controlled outcomes

- `positive`
- `negative`
- `mixed`
- `inconclusive`
- `unknown`

---

## 8. Canonical case template

```markdown
---
case_id: AAI-YYYY-NNN
title: ""
summary: ""
organization: []
case_type: deployment
secondary_case_types: []
industry: []
business_function: []
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
tags: []
---

# [Case title]

## Case in one sentence

[Name the organization, the work or event, the AI intervention, and the best-supported result.]

## Executive summary

[Explain what happened, why it matters, the strongest finding, and the largest evidentiary limitation.]

## Research question

[State the bounded question this case answers.]

## Organization and operating context

- Organization and industry
- Relevant scale
- Business or institutional conditions
- Why this workflow, decision, or event mattered

## The situation before AI

- Previous workflow or environment
- People and systems involved
- Baseline, where available
- Constraint, failure point, or motivation

## The AI intervention or event

- What the system did
- What it did not do
- Users and affected parties
- Human role
- Data and surrounding software
- Deployment stage and scale
- Environment and system boundary

## Implementation and operating model

- Process redesign
- Ownership and decision rights
- Training and adoption
- Controls and monitoring
- Integration dependencies
- Implementation timeline

## Outcomes and economics

| Outcome | Baseline | Result | Period and denominator | Status | Source |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  | verified / supported / attributed / disputed / unknown |  |

Address business, operational, customer, workforce, risk, and economic effects when relevant. Do not use “efficiency” without defining what changed.

## Causal assessment and competing explanations

- Comparison or counterfactual
- Concurrent changes
- Model contribution
- Data, software, workflow, and human contributions
- Simpler non-AI alternative
- Competing explanations
- Causal strength

## Failures, limitations, and governance

- What failed or underperformed
- Where human intervention remained necessary
- Excluded users, cases, or environments
- Data, safety, privacy, bias, compliance, and security issues
- Detection, containment, blast radius, and remediation for incidents
- Unknowns and residual risks

## What this case demonstrates

[Two to four bounded findings supported by the evidence.]

## What this case does not demonstrate

[Prevent overgeneralization and identify the production or environmental boundary.]

## Evidence assessment

**Overall grade:** [A/B/C/D]

[Explain access to evidence, method transparency, independence, corroboration, measurement quality, and the largest limitation.]

## Material claims

| ID | Claim | Type | Status | Source | Limitation |
| --- | --- | --- | --- | --- | --- |
| C01 |  | observation / estimate / causal / interpretation / forecast | verified / supported / attributed / disputed / inference / unknown |  |  |

## Direct quotations

> “[Short exact quotation.]”

- Speaker or author
- Role at the time
- Original source
- Publication date
- Page, paragraph, section, or timestamp
- Context and reuse note

## Sources

1. **[Source role]** Author or organization. “Title.” Publisher, date. URL. Accessed YYYY-MM-DD. [Source-family or conflict note when relevant.]

## Revision notes

- YYYY-MM-DD: [Material correction, new evidence, or assessment change.]
```

---

## 9. Controlled taxonomy

The canonical values live in `docs/taxonomy.yml`. The validator rejects unrecognized controlled values. Freeform `tags` may be used for emerging concepts, but should be reviewed before becoming permanent facets.

### Initial industry values

- `agriculture`
- `automotive-mobility`
- `construction-real-estate`
- `consumer-goods`
- `education`
- `energy-utilities`
- `financial-services`
- `government-public-sector`
- `healthcare-life-sciences`
- `hospitality-travel`
- `insurance`
- `legal-professional-services`
- `manufacturing`
- `media-entertainment`
- `retail-ecommerce`
- `software-technology`
- `telecommunications`
- `transportation-logistics`

### Initial business-function values

- `customer-service`
- `engineering-it`
- `finance-accounting`
- `fraud-risk-compliance`
- `hr-workforce`
- `legal`
- `marketing`
- `operations`
- `product-rd`
- `procurement`
- `quality-safety`
- `sales`
- `security`
- `strategy-management`
- `supply-chain`

### Initial deployment-stage values

- `prototype`
- `pilot`
- `evaluation`
- `limited-production`
- `scaled-production`
- `paused`
- `retired`
- `unknown`

### Initial deployment-pattern values

- `employee-copilot`
- `customer-facing-assistant`
- `decision-support`
- `human-in-the-loop-workflow`
- `straight-through-automation`
- `agentic-workflow`
- `embedded-product-feature`
- `physical-system`

### Taxonomy rules

- Do not organize physical folders by industry, function, vendor, model, or outcome.
- Use one primary case type and only relevant facets.
- Do not create synonyms for existing controlled values.
- Record model and vendor as case facts or freeform tags, not primary organizing dimensions.
- Add a controlled value only when it represents a recurring, analytically useful distinction.
- Preserve deprecated values as aliases during migration.

---

## 10. Source and evidence policy

The library has no closed publication whitelist. Any identifiable source may generate a lead or contribute evidence. Evidentiary weight depends on proximity, access, method transparency, independence, corroboration, measurement quality, and disclosed limitations.

Major publications are useful but are not gatekeepers. A transparent investigation by a small research organization may be the strongest source in a case.

### Source roles

| Role | Proper use |
| --- | --- |
| `direct-evidence` | Original records, filings, logs, contracts, transcripts, data, or decisions |
| `primary-investigation` | Original investigation with access to evidence and a stated method |
| `participant-account` | Evidence or explanation from an involved organization or person |
| `independent-reporting` | Outside reporting, interviews, confirmation, contradiction, and context |
| `analysis` | Interpretation, competing explanations, and significance |
| `discovery` | Lead generation; trace important claims to their origin |

### Source-quality questions

For every source carrying a material claim, ask:

1. How close was the source to the event?
2. What original evidence could it inspect?
3. Is the method visible?
4. What relationship, incentive, funding, or access constraint exists?
5. Is the claim independently corroborated?
6. What evidence was unavailable?
7. Are corrections, changes, and uncertainty disclosed?

### Source families

Several articles repeating one report do not constitute several independent sources. When dependence matters, identify the common origin in the citation note.

Example:

`[Source family: METR–Redwood incident investigation]`

### Full citation requirements

Every material source should include:

- Author or responsible organization.
- Complete title.
- Publisher or issuing body.
- Publication and update date, when available.
- Canonical URL, DOI, filing number, docket, or stable identifier.
- Access date.
- Source role.
- Page, paragraph, section, or timestamp for quotations and precise claims.
- Sponsorship, commissioning, conflict, or source-family note when material.

### Direct quotations

- Preserve exact wording and meaningful punctuation.
- Record speaker, role at the time, source, date, locator, and context.
- Prefer the original source over an article quoting another source.
- Keep public quotations brief unless permission or an applicable license allows more.
- Do not circumvent paywalls.

### Discovery-only material

Search snippets, social posts, Reddit, Wikipedia, unsourced podcasts, aggregators, and AI summaries may identify leads. They should not establish a material claim when the original evidence can be found.

### Reject or quarantine

- Fabricated or unverifiable sources.
- AI-generated or scraped pages with unclear provenance.
- SEO content farms.
- Sources concealing sponsorship or conflicts.
- Claims visible only in a search snippet.
- Material whose collection or republication would be unlawful or seriously unethical.

---

## 11. Evidence and claim standards

### Case grades

| Grade | Standard |
| --- | --- |
| **A: Verified** | Strong direct evidence, a transparent primary investigation, or a rigorous evaluation supports the central findings; meaningful corroboration exists where reasonably available. |
| **B: Well supported** | Credible original evidence supports the central account, but access, corroboration, measurement, completeness, or reproducibility has a material limitation. |
| **C: Attributed** | The deployment or event is credible, but central outcome claims depend mainly on a participant, vendor, or single incomplete source. |
| **D: Lead only** | Evidence is promotional, anecdotal, incomplete, contradictory, or not traceable to an original source. |

Only A and B cases should normally be published as verified research. A C case may be published when attribution and limitations are central to the case. D remains unpublished.

### Claim labels

- **Verified:** Directly supported by strong evidence and corroborated where reasonable.
- **Supported:** Credible evidence supports the claim, but proof, precision, or causality is incomplete.
- **Attributed:** A named participant made the claim; the library has not independently verified it.
- **Disputed:** Credible sources materially disagree.
- **Inference:** The case author derived the conclusion from cited facts.
- **Unknown:** Available evidence does not resolve the question.

Apply labels to material outcome, scale, cost, causal, harm, and forecast claims. Do not build a ledger for trivial background facts.

### Causal restraint

When a case asserts that AI produced an outcome, it must address:

- Baseline or comparison.
- Relevant denominator and time period.
- Concurrent process, staffing, policy, demand, or software changes.
- Plausible non-AI explanation.
- Contribution of the model versus data, software, workflow, and people.
- Appropriate causal strength: `descriptive`, `associational`, `plausibly-causal`, or `causal`.

---

## 12. Research and editorial workflow

### Step 1: Capture

Create a GitHub issue or minimal Markdown record with the organization, application or event, discovery source, and likely significance.

### Step 2: Triage

Confirm that the case concerns a bounded real-world deployment, evaluation, transformation, economic question, governance action, or incident. Reject generic product announcements and unsupported predictions.

### Step 3: Frame

Assign the permanent case ID. Define the research question, case type, unit of analysis, time boundary, and central uncertainty.

### Step 4: Research

Find the original evidence. Map source dependence. Build the material claim table before polishing the narrative. Seek costs, failures, adverse effects, and contradictory evidence.

### Step 5: Write

Complete the common case template. Explain the organizational setting and work before the technology. Separate facts, participant claims, estimates, interpretations, and forecasts.

### Step 6: Review

Check citations, quotations, numbers, dates, roles, source families, competing explanations, generalization limits, and evidence grade. Use a pull request for meaningful published cases even when one person performs both passes.

### Step 7: Publish

Set `status: published`, add `published` and `last_verified`, and merge to `main`. GitHub Actions validates, builds, and deploys the site.

### Step 8: Maintain

Update the same file when material evidence changes. Add a brief revision note for corrections, deployment changes, incidents, regulatory actions, pauses, retirements, or evidence-grade changes. Git retains the complete revision history.

---

## 13. Automated validation

`scripts/validate-content.ts` and the Astro content schema will enforce the minimum integrity rules.

### Required checks

- Every case ID is unique and matches `AAI-YYYY-NNN`.
- Filenames begin with the matching case ID.
- Required front-matter fields are present.
- Controlled fields use approved taxonomy values.
- Dates use `YYYY-MM-DD`.
- Published cases contain every required section.
- Published cases have an evidence grade and `last_verified` date.
- Published A/B cases contain at least two material sources or explicitly explain why one strong primary investigation is sufficient.
- Every direct quotation has a source and locator.
- Related case IDs resolve.
- Duplicate slugs and broken internal links fail validation.
- Draft cases are excluded from the public build.

### Deployment rule

If validation or the site build fails, deployment stops. The prior working Pages version remains live.

---

## 14. Public website

The initial site will contain four principal page types.

### Home

- Definition and purpose of the library.
- Featured or recently verified cases.
- Recently updated assessments.
- Link to the explorer and methodology.

### Explore

- Keyword search over title, organization, summary, and tags.
- Filters for industry, business function, case type, outcome, and evidence grade.
- Sort by publication date, verification date, title, and evidence grade.
- Clear results count and removable filter chips.

### Case

- Case title and one-sentence finding.
- Organization and taxonomy badges.
- Evidence grade and last-verified date.
- Full case narrative.
- Material claims.
- Quotations and citations.
- Related cases.
- Revision notes.

### Methodology

- Inclusion and exclusion rules.
- Source policy.
- Evidence grades and claim labels.
- Causal and generalization standards.
- Correction and update policy.

### Initial design requirements

- Mobile responsive.
- High readability and restrained editorial design.
- Accessible color contrast and keyboard navigation.
- Permanent case URLs.
- No login, forms, personalization, or user tracking required for v1.

---

## 15. GitHub workflow and deployment

### Branch model

- `main` contains the deployable library.
- A case may be researched on `case/AAI-YYYY-NNN-short-slug`.
- Pull requests run validation and show the exact proposed changes.
- Merging to `main` triggers the production build.

For small corrections, direct commits may be allowed while the project has one maintainer. Published evidence-grade changes should use a pull request.

### Repository visibility

Preferred configuration:

- Private source repository when the GitHub plan supports Pages from private repositories.
- Public Pages site containing only approved records.

If the repository is public, assume that drafts, branches, issues, commit history, and deleted content remain discoverable. Do not commit confidential research notes or sensitive evidence.

### Deployment

The GitHub Actions workflow will:

1. Check out the repository.
2. Install locked dependencies.
3. Run content validation.
4. Build the Astro static site.
5. Check internal links and output size.
6. Upload the Pages artifact.
7. Deploy to GitHub Pages.

Official implementation references:

- [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [Astro deployment to GitHub Pages](https://docs.astro.build/en/guides/deploy/github/)

---

## 16. File, copyright, and security policy

### Store in the repository

- Original case Markdown.
- Methodology and taxonomy files.
- Citation metadata and source URLs.
- Brief permissible quotations.
- Original, licensed, or public-domain images needed by the site.
- Small public documents whose reuse is clearly permitted and analytically necessary.

### Do not store in the repository

- The uploaded AI and machine-learning books.
- Full copies of copyrighted or paywalled articles.
- Large raw datasets.
- Video or audio archives.
- Credentials, secrets, personal data, or private records.
- Unremediated exploit instructions.
- Sensitive chain-of-thought or restricted system material.

The uploaded books should be represented through a private foundations catalog containing bibliographic information and subject tags. Their full files should remain in authorized private storage outside the Git repository.

### Preservation without copying

When a source may disappear, preserve:

- Full citation.
- Canonical and lawful archived URL.
- Access date.
- Document identifier or content hash when appropriate.
- Short supporting quotation and precise locator.
- Note that a lawful private copy exists, without publishing it.

Git LFS is not part of the initial design.

---

## 17. Minimum publication gate

A case may be published only when:

- [ ] The case ID, organization, type, unit of analysis, and time boundary are clear.
- [ ] The real workflow, decision, evaluation, or incident is identified.
- [ ] The pre-AI state or relevant baseline is described, or its absence is explicit.
- [ ] The model contribution is separated from data, software, workflow, and human contributions.
- [ ] Material metrics include units, periods, denominators, and sources where available.
- [ ] Participant and vendor claims are attributed.
- [ ] Material claims have status labels.
- [ ] Source dependence is disclosed where it could create false corroboration.
- [ ] Direct quotations have exact sources and locators.
- [ ] Costs, failures, limitations, and adverse effects were actively sought.
- [ ] Competing explanations and causal strength are addressed when relevant.
- [ ] The case states what it does not demonstrate.
- [ ] The evidence grade has a written rationale.
- [ ] Copyright, security, privacy, and disclosure risks were reviewed.
- [ ] Automated validation passes.

---

## 18. Deferred capabilities and activation triggers

The architecture should grow only when actual use demonstrates a need.

| Capability | Defer until |
| --- | --- |
| Full-text Pagefind search | Metadata search becomes inadequate, approximately 50–100 cases |
| Central source registry | Sources are repeatedly reused or updating citations becomes error-prone |
| Central claims registry | Cross-case claim comparison becomes a recurring workflow |
| Formal case families | Three or more clusters contain multiple connected cases |
| Proposition records | The collection contains enough independent cases to test recurring relationships |
| Coverage dashboard | Collection bias becomes difficult to evaluate manually |
| Contributor roles or CMS | Nontechnical contributors regularly edit the library |
| External database or API | Static generation or Markdown editing creates a measured operational problem |
| Alternate hosting | Pages capacity, build time, access control, or bandwidth becomes a real constraint |

Deferred capabilities must not shape the initial implementation unless they impose a cheap compatibility requirement, such as stable IDs or consistent tags.

---

## 19. Initial build scope

The first working release will include:

1. Git repository and Astro project.
2. GitHub Pages deployment workflow.
3. Versioned methodology, source policy, and taxonomy.
4. Enforced Markdown case schema.
5. Reusable case template.
6. Home, Explore, Case, and Methodology pages.
7. Search across title, organization, summary, and tags.
8. Five filters: industry, business function, case type, outcome, and evidence grade.
9. GitHub issue form for case leads.
10. Three initial cases:
    - One failure or incident case.
    - One ordinary business deployment.
    - One economic or organizational-transformation case.

The OpenAI–Hugging Face investigation should be the first incident case because it exercises source dependence, independent investigation, participant disclosure, uncertain counts, incident chronology, environmental limits, and competing explanations.

---

## 20. Acceptance criteria

The first release is complete when:

- A new case can be created by copying one Markdown template.
- Invalid metadata causes a clear validation failure.
- Draft cases remain absent from the public build.
- Published cases automatically appear on the home and explorer pages.
- All five filters can be combined.
- Search returns cases by title, organization, summary, and tags.
- Every case has a permanent URL.
- Evidence grades, claim labels, sources, and last-verified dates display correctly.
- A merge to `main` automatically deploys a working GitHub Pages site.
- The repository contains no uploaded books, paywalled articles, secrets, or inappropriate large binaries.
- The complete project can be cloned and built from the README instructions.

---

## 21. Final architecture decision

The Applied AI Case Study Library will launch as a text-first static research site backed by Git.

Its governing model is:

- **One repository.**
- **One Markdown file per case.**
- **One controlled taxonomy.**
- **One automated validation path.**
- **One static Pages deployment.**

This is the smallest architecture that provides cloud access, durable revision history, reliable citations, controlled metadata, evidence discipline, and a professional public interface. More complex data structures will be introduced only when the size and actual use of the collection justify them.
