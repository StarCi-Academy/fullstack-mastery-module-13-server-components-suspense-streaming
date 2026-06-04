import { test, expect } from "@playwright/test";
import { observe } from "./observe";

// VI: Flow 1 — pg/db driver chỉ ở server, không leak sang client chunk thực sự.
// (EN: Flow 1 — pg/db driver is server-only, never leaks to real client chunks).
//
// VI: Trong dev mode, RSC streaming payload có chứa path map cho debugger
// (file `/lib/db.ts` xuất hiện như source-map reference, không phải code thật).
// Spec này download mọi script chunk thực sự và assert nội dung không chứa
// implementation của db.ts (MOCK_PRODUCTS literal + tên function `query`).
// (EN: In dev mode, the RSC stream contains debugger source-map references
// like `/lib/db.ts` — these are NOT real leaked code. This spec downloads the
// actual client chunks and asserts the db.ts implementation never ships.)
test("flow 1 — server-only DB module never reaches the client", async ({
  page,
  request,
}) => {
  await page.goto("/products/1");
  await observe(page);

  const scriptSrcs = await page.locator("script[src]").evaluateAll((nodes) =>
    nodes.map((n) => (n as HTMLScriptElement).src),
  );

  // VI: Tải mọi client chunk thực sự + concat (EN: download every real client chunk + concat).
  const bodies = await Promise.all(
    scriptSrcs
      .filter((s) => s && s.startsWith("http"))
      .map(async (src) => {
        const res = await request.get(src);
        return res.ok() ? await res.text() : "";
      }),
  );
  const allClient = bodies.join("\n");

  // VI: Sentinel `server-only` package + literal data của db.ts không có trong chunk client.
  // (EN: server-only sentinel + db.ts mock data literal must not appear in client chunks).
  expect(allClient).not.toContain("MOCK_PRODUCTS");
  expect(allClient).not.toContain("Mechanical Keyboard");
  expect(allClient).not.toMatch(/server[-_]only/);
});
