import { defineConfig, devices } from "@playwright/test";

// VI: Cấu hình Playwright dùng Google Chrome thật (channel: 'chrome'), trỏ về dev server port 3400.
// (EN: Playwright config using real Google Chrome (channel: 'chrome'), pointed at dev server on 3400.)
export default defineConfig({
  testDir: "./scripts",
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1,
  reporter: [["list"]],
  use: {
    baseURL: "http://localhost:3400",
    trace: "off",
  },
  projects: [
    {
      name: "chrome",
      use: { ...devices["Desktop Chrome"], channel: "chrome" },
    },
  ],
});
