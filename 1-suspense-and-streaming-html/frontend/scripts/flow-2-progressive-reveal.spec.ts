// Flow 2 — Quick resolves first, Medium next, Slow last; each streams independently.
import { test, expect } from "@playwright/test";
import { observe } from "./observe";

test("flow-2: widgets reveal in 50/500/1500ms order", async ({ page }) => {
  await page.goto("/dashboard");
  await observe(page);

  await expect(page.getByTestId("widget-quick")).toBeVisible({ timeout: 3000 });
  await observe(page);

  await expect(page.getByTestId("widget-medium")).toBeVisible({ timeout: 3000 });
  await observe(page);

  await expect(page.getByTestId("widget-slow")).toBeVisible({ timeout: 3000 });
  await expect(page.getByTestId("widget-slow")).toHaveText(/Slow data ready/);
});
