import { test, expect } from "@playwright/test";
import { observe } from "./observe";

/**
 * Flow 3 — client island works independently after navigation; state resets on remount.
 */
test("flow 3 — client island stays interactive across navigation", async ({ page }) => {
  // Step 1: navigate and click twice
  await page.goto("/products/1");
  await observe(page);

  const buttonA = page.getByTestId("add-to-cart");
  await buttonA.click();
  await buttonA.click();
  await expect(buttonA).toHaveText(/Add to cart \(2\)/);

  // Step 2: navigate to product 2 — server re-renders fresh data
  await page.goto("/products/2");
  await expect(page.getByTestId("product-name")).toHaveText("Wireless Mouse");
  await expect(page.getByTestId("product-price")).toHaveText("$49");

  // Step 3: client state resets — component remounts with new productId
  const buttonB = page.getByTestId("add-to-cart");
  await expect(buttonB).toHaveText(/Add to cart \(0\)/);
});
