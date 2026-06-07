import type { Page } from "@playwright/test";

// EN: observe helper — pauses for the Playwright Inspector when running in headed mode.
export async function observe(page: Page): Promise<void> {
  if (process.env.HEADED === "1" || process.argv.includes("--headed")) {
    await page.pause();
  }
}
