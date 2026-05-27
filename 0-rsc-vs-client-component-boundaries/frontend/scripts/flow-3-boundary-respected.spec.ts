import { test, expect } from "@playwright/test";
import { observe } from "./observe";

// VI: Flow 3 — Client component vẫn hoạt động độc lập sau khi rời trang, ranh giới respected
// (EN: Flow 3 — Client component works independently after route change; boundary respected).
test("flow 3 — client island stays interactive across navigation", async ({ page }) => {
  await page.goto("/products/1");
  await observe(page);

  const buttonA = page.getByTestId("add-to-cart");
  await buttonA.click();
  await buttonA.click();
  await expect(buttonA).toHaveText(/Add to cart \(2\)/);

  // VI: Điều hướng sang product 2 → server render lại (EN: navigate to product 2 → server re-renders fresh data).
  await page.goto("/products/2");
  await expect(page.getByTestId("product-name")).toHaveText("Wireless Mouse");
  await expect(page.getByTestId("product-price")).toHaveText("$49");

  // VI: State client reset (component remount với productId mới) (EN: client state resets — remount with new productId).
  const buttonB = page.getByTestId("add-to-cart");
  await expect(buttonB).toHaveText(/Add to cart \(0\)/);
});
