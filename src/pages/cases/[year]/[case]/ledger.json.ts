// The downloadable ledger (spec item H5),
// written once at build time. The shape is a proposal: the case header, then
// documents with captures, claims, rows with their computed labels, and
// Context statements, all by code so a reader can trace any row to a capture
// without the site.
import { loadCase } from "../../../../record/lib/record.mjs";
import { recordRoutes } from "../../../../record/lib/routes.mjs";

export function getStaticPaths() {
  return recordRoutes();
}

const linkOut = (link) => ({
  claim: link.claim,
  relation: link.relation,
  dependence: link.dependence ?? "none",
  relays: link.relays ?? null,
  check: link.mark.state === "unsigned" ? null : { state: link.mark.state, by: link.mark.by, date: link.mark.date, fingerprint: link.mark.fingerprint }
});

export function GET({ props }) {
  const record = loadCase(props.code);
  const h = record.header;
  const body = {
    format: "case-ledger",
    format_version: "0.1",
    notice: `The evidence ledger of ${h.public_id}, version ${h.version}. Every label is computed from the rows, claims and documents below.`,
    case: {
      code: record.code,
      public_id: h.public_id,
      title: h.title,
      summary: h.summary,
      status: h.status,
      version: h.version,
      case_grade: h.case_grade,
      verified: h.verified,
      next_review: h.next_review,
      charter: h.charter,
      headings: record.headings.map(({ n, name, status, reason, rows }) => ({ n, name, status, reason: reason ?? null, rows }))
    },
    publishers: record.publishers,
    documents: record.documents.map(({ claims, citedBy, publisherName, ...doc }) => ({ ...doc, cited_by: citedBy })),
    claims: record.claims.map(({ document, interest_display, ...claim }) => ({ ...claim, interest: interest_display ?? claim.interest, document })),
    rows: record.rows.map(({ links, label, plainVoiceAllowed, ...row }) => ({
      ...row,
      label: {
        display: label.display,
        support: label.support,
        conflict: label.conflict,
        origins: label.origins ?? 0,
        examiners: label.examiners ?? 0,
        route: label.route,
        computed: true
      },
      plain_voice_allowed: plainVoiceAllowed,
      links: links.map(linkOut)
    })),
    context: record.context.map(({ links, ...cx }) => ({ ...cx, links: links.map(linkOut) }))
  };
  return new Response(JSON.stringify(body, null, 2), {
    headers: { "Content-Type": "application/json; charset=utf-8" }
  });
}
