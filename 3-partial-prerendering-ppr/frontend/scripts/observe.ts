// scripts/observe.ts
// EN: Helper that pauses the script in headed runs so learners can observe UI via Playwright Inspector.
import type { Page } from "@playwright/test";

export async function observe(page: Page, label: string): Promise<void> {
  // EN: Pause only when PWDEBUG=1 (headed + Inspector); CI headless skips so it does not hang.
  console.log(`[observe] ${label}`);
  if (process.env.PWDEBUG === "1" || process.env.PLAYWRIGHT_HEADED === "1") {
    await page.pause();
  }
}
