// scripts/flow-3-per-request-cookie.spec.ts
// VI: Flow 3 — đổi cookie giữa hai request, lỗ động đổi giá trị trong khi shell giữ nguyên.
// EN: Flow 3 — change cookie between two requests, dynamic hole updates while shell stays.
import { test, expect } from "@playwright/test";
import { observe } from "./observe";

test("flow 3 — cookie differs per request", async ({ page, context }) => {
  // VI: Request 1 với cart_count=1.
  // EN: Request 1 with cart_count=1.
  await context.addCookies([
    { name: "cart_count", value: "1", url: "http://localhost:3410" },
  ]);
  await page.goto("/product");
  await expect(page.getByRole("heading", { name: "Acme Widget" })).toBeVisible();
  await expect(page.getByTestId("cart-count")).toHaveText("Cart: 1");
  await observe(page, "first request — Cart: 1");

  // VI: Request 2 với cart_count=42 — clear cookie cũ trước.
  // EN: Request 2 with cart_count=42 — clear the old cookie first.
  await context.clearCookies();
  await context.addCookies([
    { name: "cart_count", value: "42", url: "http://localhost:3410" },
  ]);
  await page.reload();
  await expect(page.getByRole("heading", { name: "Acme Widget" })).toBeVisible();
  await expect(page.getByTestId("cart-count")).toHaveText("Cart: 42");
  await observe(page, "second request — Cart: 42, shell unchanged");
});
