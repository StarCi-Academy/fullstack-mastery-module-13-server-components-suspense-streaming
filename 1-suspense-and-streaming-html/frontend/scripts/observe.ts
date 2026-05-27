// Observe helper — pauses script in headed mode for human inspection.
// (EN: Helper observe — pause script ở headed mode, no-op khi headless trên CI.)
import type { Page } from "@playwright/test";

export async function observe(page: Page): Promise<void> {
  if (process.env.PWDEBUG || process.env.HEADED || hasHeadedArg()) {
    await page.pause();
  }
}

function hasHeadedArg(): boolean {
  return process.argv.includes("--headed");
}
