import type { Page } from "@playwright/test";

// VI: Helper observe — headed mode pause cho Inspector (EN: observe helper — pauses for the Inspector in headed mode).
export async function observe(page: Page): Promise<void> {
  if (process.env.HEADED === "1" || process.argv.includes("--headed")) {
    await page.pause();
  }
}
