/**
 * Two small table treatments for case pages.
 *
 * 1. Wide tables are marked so the stylesheet can let them break out of the
 *    prose column into the gutter. A four-column claim ledger is unreadable
 *    squeezed into 720px, and only the build step knows the column count.
 * 2. Claim labels are wrapped so they can be styled.
 *
 * On (2): wraps the claim labels in a case's "Material claims" table. The library's claim vocabulary is its core editorial signal, and in
 * a long table of prose it is otherwise invisible.
 *
 * A Sätteri HAST plugin, not a rehype one: Astro's default Markdown processor
 * is Sätteri, whose plugins are filtered visitors that mutate through a
 * context rather than unified transformers that mutate the tree directly.
 * Passed via `markdown.processor: satteri({ hastPlugins: [...] })` so the rest
 * of the pipeline — footnotes, smart punctuation, GFM tables — is untouched.
 *
 * Deliberately narrow: it only rewrites cells in a column whose header cell
 * reads exactly "Label", and only when the cell's whole text is one of the six
 * controlled labels. A table without that header, or a cell holding anything
 * else, is left alone — so an outcomes table with an "Unknown" cell in it is
 * never mistaken for a claim ledger.
 */

const LABELS = new Set(["verified", "supported", "attributed", "disputed", "inference", "unknown"]);

const isElement = (node, tagName) => node?.type === "element" && node.tagName === tagName;

/** Rows in document order, paired with the section they came from. */
function rowsOf(table) {
  const rows = [];
  for (const child of table.children ?? []) {
    if (isElement(child, "tr")) rows.push({ section: "tbody", row: child });
    else if (["thead", "tbody", "tfoot"].includes(child?.tagName)) {
      for (const row of child.children ?? []) {
        if (isElement(row, "tr")) rows.push({ section: child.tagName, row });
      }
    }
  }
  return rows;
}

const cellsOf = (row) =>
  (row.children ?? []).filter((cell) => isElement(cell, "td") || isElement(cell, "th"));

export default {
  name: "case-tables",
  element: {
    filter: ["table"],
    visit(table, ctx) {
      const rows = rowsOf(table);
      const header = rows.find(
        ({ section, row }) => section === "thead" || cellsOf(row).some((cell) => isElement(cell, "th"))
      );
      if (!header) return;

      const headerCells = cellsOf(header.row);

      // Four or more columns of prose needs more room than the prose column has.
      if (headerCells.length >= 4) ctx.setProperty(table, "className", ["wide-table"]);

      const labelIndex = headerCells.findIndex(
        (cell) => ctx.textContent(cell).trim().toLowerCase() === "label"
      );
      if (labelIndex === -1) return;

      for (const { row } of rows) {
        if (row === header.row) continue;
        const cell = cellsOf(row)[labelIndex];
        if (!cell || !isElement(cell, "td")) continue;

        const text = ctx.textContent(cell).trim();
        if (!LABELS.has(text.toLowerCase())) continue;

        ctx.replaceNode(cell, {
          type: "element",
          tagName: "td",
          properties: { className: ["claim-cell"] },
          children: [
            {
              type: "element",
              tagName: "span",
              properties: { className: ["claim-label"], "data-label": text.toLowerCase() },
              children: [{ type: "text", value: text }]
            }
          ]
        });
      }
    }
  }
};
