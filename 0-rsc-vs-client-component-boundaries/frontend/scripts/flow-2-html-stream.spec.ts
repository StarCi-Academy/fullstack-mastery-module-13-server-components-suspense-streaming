import { test, expect } from "@playwright/test";
import { observe } from "./observe";

// VI: Flow 2 — HTML server-streamed đã chứa sẵn title/price (EN: Flow 2 — server-streamed HTML already contains title/price).
test("flow 2 — server streams product HTML before hydration", async ({ page, request }) => {
  // VI: Bước 1 — raw HTML từ server đã có content (EN: Step 1 — raw HTML from the server already includes product content).
  const res = await request.get("/products/1");
  expect(res.status()).toBe(200);
  const html = await res.text();
  expect(html).toContain("Mechanical Keyboard");
  // VI: React chèn comment markers giữa text → kiểm tra số rời (EN: React inserts comment markers between text → match the raw price token).
  expect(html).toContain("129");
  expect(html).toContain("product-price");

  await page.goto("/products/1");
  await observe(page);

  // VI: Bước 2 — Client component hydrate xong, click tăng count (EN: Step 2 — client component hydrates, click increments count).
  const button = page.getByTestId("add-to-cart");
  await expect(button).toHaveText(/Add to cart \(0\)/);
  await button.click();
  await expect(button).toHaveText(/Add to cart \(1\)/);
});
