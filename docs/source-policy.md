# Source and citation policy

## Principle: evaluate the evidence, not the logo

There is no closed whitelist. Major publications can provide excellent reporting, but independent research groups, incident investigators, regulators, court records, technical postmortems, labor organizations, and local specialists may hold the best evidence. A source is admitted according to provenance, access, methods, conflicts, corroboration, and relevance.

## Source roles

Each material source should be treated as one or more of:

- **Primary record:** official report, filing, court record, dataset, audit, internal document, interview, or direct artifact.
- **Independent analysis:** research or investigation conducted outside the organization at issue.
- **Independent reporting:** accountable journalism with identifiable authorship, sourcing, and corrections practices.
- **Subject statement:** company blog, executive interview, press release, or vendor case study. Valuable for what the subject says, not independent confirmation.
- **Context:** scholarship, standards, books, or background reporting that explains the domain but does not prove the case's central claims.

## Admission test

Before relying on a source, record answers to these questions:

1. **Identity:** Who produced it, and can their expertise or reporting role be established?
2. **Access:** What evidence did they directly see—data, systems, documents, participants, or only public claims?
3. **Method:** Do they explain how facts were gathered and analyzed?
4. **Provenance:** Are documents, data, timestamps, and quotations traceable?
5. **Independence:** Who funded, commissioned, edited, or granted access? What incentives or conflicts exist?
6. **Corroboration:** Which important claims are confirmed by a genuinely separate source?
7. **Accountability:** Is there a corrections channel, stable archive, version history, or named contact?
8. **Security and integrity:** Is the domain authentic, served over HTTPS, and free of signs of impersonation or tampering?

An independent group can be a core source when it performs well on this test. Independence is not binary: research may be editorially independent while depending on access granted by the subject. The case must disclose that distinction.

## Preferred source families

- Government, regulatory, judicial, legislative, and standards bodies
- Peer-reviewed research and well-documented working papers
- Audits, incident reports, datasets, filings, and organizational records
- Accountable newsrooms with strong corrections and sourcing practices, including Reuters, AP, Financial Times, The New York Times, Bloomberg, The Wall Street Journal, WIRED, and high-quality trade press
- Independent research or civil-society organizations with named authors, transparent methods, and inspectable evidence
- Subject or vendor materials, used with explicit conflict labeling and corroboration

These are starting points, not automatic endorsements. Reputation never substitutes for claim-level review.

## Exclusions and cautions

Do not publish a material claim based only on an unattributed social post, content farm, synthetic summary, scraped repost, undisclosed affiliate page, or an unverifiable screenshot. Anonymous sources may be used only through an accountable intermediary and must be labeled. AI-generated text is never evidence. Wikipedia and aggregators can help discover sources but should not anchor a consequential claim.

## Citation and quotation rules

- Cite the source closest to the original evidence.
- Put citations immediately after the claim they support.
- Record author or institution, title, publisher, publication date, URL or DOI, access date, and archived URL when useful.
- Never imply that one citation supports an entire paragraph if it supports only one sentence.
- Keep direct quotations short, exact, and contextualized; include speaker and location when available.
- Give every quotation a footnote citing a source id from the front matter and a `locator:` naming the section, page, paragraph, or timestamp. When the passage cannot be located precisely, write `locator: unrecorded — <reason>`; validation reports that as an evidence gap instead of passing it silently.
- Do not copy full articles, paywalled text, or source PDFs into the repository unless their license explicitly permits redistribution.
- If a link dies, preserve the citation and add a lawful archive link; do not silently replace the source.

## Triangulation rule

For every central claim, seek a primary record plus independent corroboration. If this is impossible, publish only when the gap is itself important, downgrade the evidence grade, and say exactly what remains unverified. Multiple stories repeating the same original report count as one evidentiary chain, not multiple confirmations.

## Structured source metadata

Each case records its material sources once, as a machine-readable `sources` block in the front matter. Validation reads that block, and the case page renders it as the evidence ledger: grade, source count, chain count, archive coverage, and every source grouped under its evidentiary chain. In-body footnotes still carry claim-level citations, and `evidence_upgrade_path` records what would have to exist for the case to earn a higher grade.

| Field | Required | Purpose |
| --- | --- | --- |
| `id` | yes | Short lowercase key used to reference the source from claims and footnotes. |
| `author` | yes | Person or responsible organization. |
| `title` | yes | Complete title. |
| `publisher` | yes | Publisher or issuing body. |
| `url` | yes | Canonical https URL, DOI, docket, or stable identifier. |
| `accessed` | yes | Date the source was last read. |
| `roles` | yes | One or more controlled source roles. |
| `published` | when known | Publication date. |
| `updated` | when known | Date of a material revision. |
| `archive_url` | when available | Lawful archive snapshot, so the citation survives link rot. |
| `source_family` | when material | Shared-origin key, described below. |
| `access` | recommended | What original evidence this source could actually inspect. |
| `conflicts` | recommended | Funding, commissioning, access constraint, or incentive. Write `None disclosed.` when none. |
| `notes` | optional | Anything else a reader needs in order to weigh the source. |

### Where the admission test is recorded

The eight admission questions map onto the structured source fields, so the test is a record rather than a habit:

| Question | Field |
| --- | --- |
| Identity | `author`, `publisher` |
| Access | `access` |
| Method | `method` |
| Provenance | `url`, `archive_url` |
| Independence | `conflicts` |
| Corroboration | `corroboration`, `source_family` |
| Accountability | `accountability` |
| Security and integrity | `url` (https is required) |

The case page renders these under each source, so a reader weighs the evidence with the same information the editor used. A source carrying original evidence—`primary-investigation` or `direct-evidence`—that records no `method` is reported as an evidence gap.

### Controlled source roles

- `direct-evidence` — original records, filings, logs, contracts, transcripts, data, or decisions.
- `primary-investigation` — original investigation with access to evidence and a stated method.
- `participant-account` — evidence or explanation from an involved organization or person.
- `independent-reporting` — outside reporting, interviews, confirmation, contradiction, and context.
- `analysis` — interpretation, competing explanations, and significance.
- `discovery` — lead generation only; trace important claims to their origin.

### Source families

Sources that trace back to the same original evidence share one `source_family` value. Under the triangulation rule they count as a single evidentiary chain no matter how many outlets repeat them, and the count of distinct families—not the count of sources—is what supports an evidence grade.
