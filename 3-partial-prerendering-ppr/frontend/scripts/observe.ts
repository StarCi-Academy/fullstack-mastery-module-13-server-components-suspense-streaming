// scripts/observe.ts
// VI: Helper pause script khi chạy headed để học viên quan sát UI qua Playwright Inspector.
// EN: Helper that pauses the script in headed runs so learners can observe UI via Playwright Inspector.
import type { Page } from "@playwright/test";

export async function observe(page: Page, label: string): Promise<void> {
  // VI: Chỉ pause khi PWDEBUG=1 (headed mode + Inspector); CI headless skip để không treo.
  // EN: Pause only when PWDEBUG=1 (headed + Inspector); CI headless skips so it does not hang.
  console.log(`[observe] ${label}`);
  if (process.env.PWDEBUG === "1" || process.env.PLAYWRIGHT_HEADED === "1") {
    await page.pause();
  }
}
