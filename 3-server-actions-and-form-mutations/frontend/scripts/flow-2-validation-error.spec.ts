import { test, expect } from "@playwright/test";
import { observe } from "./observe";

// Flow 2 — empty submit → Zod fails → useFormState surfaces "Required".
test("flow-2: empty body shows validation error", async ({ page }) => {
  await page.goto("/comments");
  await observe(page);

  const beforeCount = await page.getByTestId("comment-item").count();

  await page.getByTestId("submit-btn").click();
  await observe(page);

  await expect(page.getByTestId("error-msg")).toHaveText("Required");
  const afterCount = await page.getByTestId("comment-item").count();
  expect(afterCount).toBe(beforeCount);
});
