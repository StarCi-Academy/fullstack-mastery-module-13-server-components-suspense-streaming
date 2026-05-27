import { Page } from "@playwright/test";

// VI: Helper `observe(page)` — trong headed mode sẽ pause để học viên quan sát; headless thì bỏ qua.
// (EN: `observe(page)` helper — pauses in headed mode for learners; no-op in headless.)
export async function observe(page: Page): Promise<void> {
  if (process.env.PWDEBUG || process.env.HEADED || !process.env.CI) {
    // VI: page.pause() chỉ thực sự dừng khi chạy headed/Inspector; headless sẽ no-op nhẹ.
    // (EN: page.pause() only blocks under headed/Inspector; headless is effectively a no-op.)
    if (process.env.PW_HEADED === "1") {
      await page.pause();
    }
  }
}
