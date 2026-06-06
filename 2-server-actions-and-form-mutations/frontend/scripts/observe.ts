import { Page } from "@playwright/test";

// `observe(page)` helper — pauses in headed mode for learners; no-op in headless.
export async function observe(page: Page): Promise<void> {
  if (process.env.PWDEBUG || process.env.HEADED || !process.env.CI) {
    // page.pause() only blocks under headed/Inspector; headless is effectively a no-op.
    if (process.env.PW_HEADED === "1") {
      await page.pause();
    }
  }
}
