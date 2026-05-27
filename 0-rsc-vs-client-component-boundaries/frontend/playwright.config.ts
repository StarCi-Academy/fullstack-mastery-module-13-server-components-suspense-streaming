import { defineConfig, devices } from "@playwright/test";

// VI: Config Playwright dùng channel chrome thật (EN: Playwright config using real Chrome channel).
export default defineConfig({
  testDir: "./scripts",
  fullyParallel: false,
  workers: 1,
  reporter: [["list"]],
  use: {
    baseURL: "http://localhost:3380",
    trace: "off",
  },
  projects: [
    {
      name: "chrome",
      use: { ...devices["Desktop Chrome"], channel: "chrome" },
    },
  ],
});
