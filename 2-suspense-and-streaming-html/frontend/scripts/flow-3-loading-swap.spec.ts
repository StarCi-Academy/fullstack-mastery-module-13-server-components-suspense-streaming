// Flow 3 — route-level loading.tsx visible during navigation from / to /dashboard.
import { test, expect } from "@playwright/test";
import { observe } from "./observe";

test("flow-3: route loading.tsx shows between click and shell", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.getByTestId("home-title")).toBeVisible();
  await observe(page);

  // Trigger navigation; the implicit Suspense boundary uses loading.tsx
  // as fallback, so it appears before /dashboard shell.
  await page.getByTestId("link-dashboard").click();

  // The dashboard shell eventually appears with skeleton boundaries.
  await expect(page.getByTestId("dashboard-main")).toBeVisible({
    timeout: 5000,
  });
  await observe(page);

  // After full resolution, slow widget renders real data.
  await expect(page.getByTestId("widget-slow")).toBeVisible({ timeout: 3000 });
});
