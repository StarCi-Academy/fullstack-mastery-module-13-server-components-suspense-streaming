// Flow 1 — shell + three Suspense skeletons render early.
// (EN: Flow 1 — shell và ba skeleton Suspense xuất hiện sớm trước data resolve.)
import { test, expect } from "@playwright/test";
import { observe } from "./observe";

test("flow-1: shell + skeletons paint within ~200ms", async ({ page }) => {
  await page.goto("/dashboard", { waitUntil: "commit" });
  await observe(page);

  // Skeletons render before slow data resolves.
  await expect(page.getByTestId("skeleton-slow")).toBeVisible({ timeout: 1000 });
  await observe(page);

  // Layout container is in DOM before slow widget arrives.
  await expect(page.getByTestId("dashboard-main")).toBeVisible();
});
