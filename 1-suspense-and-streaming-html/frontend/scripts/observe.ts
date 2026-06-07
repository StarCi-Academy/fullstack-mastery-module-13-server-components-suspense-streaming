// Observe helper — pauses the script in headed/debug mode for human inspection;
// no-op in headless mode so CI runs pass through without stopping.
import type { Page } from "@playwright/test";

export async function observe(page: Page): Promise<void> {
  if (process.env.PWDEBUG || process.env.HEADED || hasHeadedArg()) {
    await page.pause();
  }
}

function hasHeadedArg(): boolean {
  return process.argv.includes("--headed");
}
