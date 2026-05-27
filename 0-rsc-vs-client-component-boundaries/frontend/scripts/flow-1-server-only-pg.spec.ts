import { test, expect } from "@playwright/test";
import { observe } from "./observe";

// VI: Flow 1 — pg/db driver chỉ ở server, không leak sang client bundle
// (EN: Flow 1 — pg/db driver is server-only, never leaks to the client bundle).
test("flow 1 — server-only DB module never reaches the client", async ({ page }) => {
  await page.goto("/products/1");
  await observe(page);

  // VI: Quét mọi script tag được hydrate ở client (EN: scan all hydrated client script tags).
  const scriptSrcs = await page.locator("script[src]").evaluateAll((nodes) =>
    nodes.map((n) => (n as HTMLScriptElement).src)
  );
  const inlineScripts = await page.locator("script:not([src])").evaluateAll((nodes) =>
    nodes.map((n) => (n as HTMLScriptElement).textContent ?? "")
  );

  // VI: server-only sentinel + tên file db.ts không xuất hiện trong client chunks
  // (EN: server-only sentinel + db.ts filename do not appear in client chunks).
  const allClient = [...scriptSrcs, ...inlineScripts].join("\n");
  expect(allClient).not.toContain("server-only");
  expect(allClient).not.toContain("/lib/db.ts");
});
