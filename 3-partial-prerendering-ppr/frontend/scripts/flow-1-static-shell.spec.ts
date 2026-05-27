// scripts/flow-1-static-shell.spec.ts
// VI: Flow 1 — kiểm chứng shell tĩnh phát trước, response 200 và shell hiển thị ngay.
// EN: Flow 1 — verify the static shell ships first, response 200 and shell visible immediately.
import { test, expect } from "@playwright/test";
import { observe } from "./observe";

test("flow 1 — static shell served first", async ({ page, context }) => {
  await context.addCookies([
    { name: "cart_count", value: "3", url: "http://localhost:3410" },
  ]);

  const response = await page.goto("/product");
  expect(response?.status()).toBe(200);

  await observe(page, "static shell loaded; response 200");

  await expect(page.getByRole("heading", { name: "Acme Widget" })).toBeVisible();
  await expect(page.getByText("Static description")).toBeVisible();

  await observe(page, "static shell visible (header + description)");
});
