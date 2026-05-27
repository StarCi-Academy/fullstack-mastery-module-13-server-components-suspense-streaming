import { test, expect, chromium } from "@playwright/test";
import { observe } from "./observe";

// VI: Luồng 3 — progressive enhancement: dùng context javaScriptEnabled=false; form vẫn POST native.
// (EN: Flow 3 — progressive enhancement: context javaScriptEnabled=false; form still POSTs natively.)
test("flow-3: no-js form still submits via native POST", async () => {
  const browser = await chromium.launch({ channel: "chrome" });
  const ctx = await browser.newContext({ javaScriptEnabled: false });
  const page = await ctx.newPage();

  const unique = `no-js-${Date.now()}`;
  await page.goto("http://localhost:3400/comments");
  await observe(page);

  await page.locator('textarea[name="body"]').fill(unique);
  // VI: Submit native — không dùng click()-via-JS hooks, mà dùng form.requestSubmit khả dụng cả khi noJS.
  // (EN: Native submit via Enter on textarea wouldn't fire; click button directly as native POST.)
  await page.locator('button[type="submit"]').click();
  await page.waitForLoadState("load");
  await observe(page);

  await expect(page.locator('[data-testid="comment-list"]')).toContainText(
    unique,
    { timeout: 5000 },
  );

  await ctx.close();
  await browser.close();
});
