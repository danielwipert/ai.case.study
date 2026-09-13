import { defineConfig } from "astro/config";
import { satteri } from "@astrojs/markdown-satteri";
import caseTables from "./scripts/hast-case-tables.mjs";

export default defineConfig({
  site: "https://danielwipert.github.io",
  base: "/ai.case.study",
  output: "static",
  trailingSlash: "always",
  markdown: {
    // Sätteri is Astro's default Markdown processor; this keeps it and only
    // adds the claim-label plugin, leaving footnotes and GFM tables alone.
    processor: satteri({ hastPlugins: [caseTables] })
  }
});
