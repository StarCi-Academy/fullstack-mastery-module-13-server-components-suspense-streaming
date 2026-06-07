// scripts/flow-2-dynamic-hole.spec.ts
// EN: Flow 2 — shell paints first, the dynamic hole swaps the `Cart: …` fallback for `Cart: 7` from the cookie.
import { test, expect } from "@playwright/test";
import { observe } from "./observe";

test("flow 2 — dynamic hole streams in", async ({ page, context }) => {
  await context.addCookies([
    { name: "cart_count", value: "7", url: "http://localhost:3410" },
  ]);

  await page.goto("/product");

  await expect(page.getByRole("heading", { name: "Acme Widget" })).toBeVisible();
  await observe(page, "shell visible");

  // Best-effort: the prerendered `CartFallback` placeholder (data-testid="cart-fallback")
  // is baked INTO the shell, so it can paint before the dynamic hole streams in. The race
  // is intentionally tolerant — on a fast stream the hole may already be resolved, so we
  // only observe (never hard-assert) the fallback to illustrate placeholder-before-content.
  if (await page.getByTestId("cart-fallback").isVisible().catch(() => false)) {
    await observe(page, "fallback visible before stream (Cart: …)");
  }

  await expect(page.getByTestId("cart-count")).toHaveText("Cart: 7");
  await observe(page, "dynamic hole swapped to Cart: 7");
});
