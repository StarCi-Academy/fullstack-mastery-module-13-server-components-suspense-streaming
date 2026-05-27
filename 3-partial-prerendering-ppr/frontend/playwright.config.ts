// playwright.config.ts
// VI: Cấu hình Playwright chạy headed trên Google Chrome (channel:'chrome'), base URL trỏ port 3410.
// EN: Playwright config running headed on Google Chrome (channel:'chrome'), base URL on port 3410.
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./scripts",
  fullyParallel: false,
  workers: 1,
  reporter: "list",
  use: {
    baseURL: "http://localhost:3410",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chrome",
      use: { ...devices["Desktop Chrome"], channel: "chrome" },
    },
  ],
});
