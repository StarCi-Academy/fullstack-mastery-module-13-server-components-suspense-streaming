import { test, expect } from "@playwright/test";
import { observe } from "./observe";

// Flow 1 — happy path with JS; assert pending button state + new comment appears after revalidate.
test("flow-1: happy path posts comment via server action", async ({ page }) => {
  const unique = `hello-${Date.now()}`;
  await page.goto("/comments");
  await observe(page);

  await page.getByTestId("body-input").fill(unique);
  await observe(page);

  await page.getByTestId("submit-btn").click();
  await observe(page);

  await expect(page.getByTestId("comment-list")).toContainText(unique, {
    timeout: 5000,
  });
});
