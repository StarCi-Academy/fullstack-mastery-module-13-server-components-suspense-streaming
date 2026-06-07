import { test, expect } from "@playwright/test";
import { observe } from "./observe";

// EN: In dev mode the RSC streaming payload contains debugger source-map references
// like `/lib/db.ts` — these are NOT real leaked code. This spec downloads the
// actual script chunks and asserts the db.ts implementation never ships to the browser.

/**
 * Flow 1 — server-only DB module never reaches the client.
 * Downloads every real client chunk and asserts db.ts implementation is absent.
 */
test("flow 1 — server-only DB module never reaches the client", async ({ page, request }) => {
  // Step 1: navigate to the product page
  await page.goto("/products/1");
  await observe(page);

  // Step 2: collect all script chunk URLs loaded by the page
  const scriptSrcs = await page.locator("script[src]").evaluateAll((nodes) =>
    nodes.map((n) => (n as HTMLScriptElement).src),
  );

  // Step 3: download every chunk and assert db.ts implementation is absent
  const bodies = await Promise.all(
    scriptSrcs
      .filter((s) => s && s.startsWith("http"))
      .map(async (src) => {
        const res = await request.get(src);
        return res.ok() ? await res.text() : "";
      }),
  );
  const allClient = bodies.join("\n");

  // Mock data literal and server-only sentinel must not appear in client chunks.
  expect(allClient).not.toContain("MOCK_PRODUCTS");
  expect(allClient).not.toContain("Mechanical Keyboard");
  expect(allClient).not.toMatch(/server[-_]only/);
});
