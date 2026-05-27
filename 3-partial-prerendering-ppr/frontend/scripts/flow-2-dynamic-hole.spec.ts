// scripts/flow-2-dynamic-hole.spec.ts
// VI: Flow 2 — shell paint trước, lỗ động swap fallback `Cart: …` thành `Cart: 7` từ cookie.
// EN: Flow 2 — shell paints first, the dynamic hole swaps the `Cart: …` fallback for `Cart: 7` from the cookie.
import { test, expect } from "@playwright/test";
import { observe } from "./observe";

test("flow 2 — dynamic hole streams in", async ({ page, context }) => {
  await context.addCookies([
    { name: "cart_count", value: "7", url: "http://localhost:3410" },
  ]);

  await page.goto("/product");

  await expect(page.getByRole("heading", { name: "Acme Widget" })).toBeVisible();
  await observe(page, "shell visible + fallback or final cart");

  await expect(page.getByTestId("cart-count")).toHaveText("Cart: 7");
  await observe(page, "dynamic hole swapped to Cart: 7");
});
