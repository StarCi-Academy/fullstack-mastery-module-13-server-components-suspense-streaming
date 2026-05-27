// Playwright config — Google Chrome channel, headed via npm script.
// (EN: Cấu hình Playwright dùng Google Chrome thật, port 3390 theo lesson.)
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./scripts",
  fullyParallel: false,
  workers: 1,
  reporter: "list",
  use: {
    baseURL: "http://localhost:3390",
    trace: "off",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"], channel: "chrome" },
    },
  ],
});
