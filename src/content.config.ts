import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const sourceRole = z.enum([
  "direct-evidence",
  "primary-investigation",
  "participant-account",
  "independent-reporting",
  "analysis",
  "discovery"
]);

const httpsUrl = z.string().regex(/^https:\/\/\S+$/, "Use a complete https URL.");

const source = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/, "Source ids use lowercase letters, digits, and hyphens."),
  author: z.string().min(2),
  title: z.string().min(5),
  publisher: z.string().min(2),
  published: z.coerce.date().optional(),
  updated: z.coerce.date().optional(),
  url: httpsUrl,
  archive_url: httpsUrl.optional(),
  accessed: z.coerce.date(),
  roles: z.array(sourceRole).min(1),
  source_family: z.string().optional(),
  access: z.string().optional(),
  conflicts: z.string().optional(),
  notes: z.string().optional()
});

const cases = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/cases" }),
  schema: z.object({
    case_id: z.string().regex(/^AAI-\d{4}-\d{3}$/),
    title: z.string().min(10),
    summary: z.string().min(40),
    organization: z.array(z.string()).min(1),
    case_type: z.enum([
      "deployment",
      "failure-incident",
      "evaluation",
      "organizational-transformation",
      "economic-case",
      "governance-regulatory"
    ]),
    secondary_case_types: z.array(z.string()).default([]),
    industry: z.array(z.string()).min(1),
    business_function: z.array(z.string()).min(1),
    deployment_stage: z.enum([
      "prototype",
      "pilot",
      "evaluation",
      "limited-production",
      "scaled-production",
      "paused",
      "retired",
      "unknown"
    ]),
    outcome: z.enum(["positive", "negative", "mixed", "inconclusive", "unknown"]),
    evidence_grade: z.enum(["A", "B", "C", "D"]),
    status: z.enum(["lead", "research", "review", "published", "archived"]),
    created: z.coerce.date(),
    published: z.coerce.date().optional(),
    last_verified: z.coerce.date().optional(),
    next_review: z.coerce.date().optional(),
    geography: z.array(z.string()).default([]),
    environment: z.enum([
      "laboratory",
      "evaluation",
      "shadow-mode",
      "production",
      "adversarial-test",
      "mixed",
      "unknown"
    ]).default("unknown"),
    deployment_pattern: z.array(z.string()).default([]),
    causal_strength: z.enum([
      "descriptive",
      "associational",
      "plausibly-causal",
      "causal"
    ]).default("descriptive"),
    related_cases: z.array(z.string()).default([]),
    sources: z.array(source).default([]),
    tags: z.array(z.string()).default([])
  }).superRefine((data, ctx) => {
    if (["published", "archived"].includes(data.status)) {
      if (!data.published) {
        ctx.addIssue({ code: "custom", path: ["published"], message: "Published cases require a publication date." });
      }
      if (!data.last_verified) {
        ctx.addIssue({ code: "custom", path: ["last_verified"], message: "Published cases require a last-verified date." });
      }
      if (data.evidence_grade === "D") {
        ctx.addIssue({ code: "custom", path: ["evidence_grade"], message: "Grade D leads cannot be published." });
      }
      if (data.sources.length === 0) {
        ctx.addIssue({ code: "custom", path: ["sources"], message: "Published cases require at least one structured source." });
      }
    }

    const seen = new Set<string>();
    data.sources.forEach((entry, index) => {
      if (seen.has(entry.id)) {
        ctx.addIssue({ code: "custom", path: ["sources", index, "id"], message: `Duplicate source id "${entry.id}".` });
      }
      seen.add(entry.id);
    });
  })
});

export const collections = { cases };
