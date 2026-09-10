import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

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
    }
  })
});

export const collections = { cases };
