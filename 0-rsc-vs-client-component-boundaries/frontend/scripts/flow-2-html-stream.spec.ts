import { test, expect } from "@playwright/test";
import { observe } from "./observe";

/**
 * Flow 2 — server-streamed HTML already contains product data; client island hydrates.
 */
test("flow 2 — server streams product HTML before hydration", async ({ page, request }) => {
  // Step 1: raw HTML from the server already includes product content
  const res = await request.get("/products/1");
  expect(res.status()).toBe(200);
  const html = await res.text();
  expect(html).toContain("Mechanical Keyboard");
  // React inserts comment markers between text — match the raw price token.
  expect(html).toContain("129");
  expect(html).toContain("product-price");

  await page.goto("/products/1");
  await observe(page);

  // Step 2: client component hydrates and click increments the count
  const button = page.getByTestId("add-to-cart");
  await expect(button).toHaveText(/Add to cart \(0\)/);
  await button.click();
  await expect(button).toHaveText(/Add to cart \(1\)/);
});
