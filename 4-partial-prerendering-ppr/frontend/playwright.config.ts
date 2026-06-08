import { defineConfig, devices } from "@playwright/test";

const PORT = Number(process.env.FE_PORT ?? "3410");
// Use localhost (not 127.0.0.1) so Playwright cookies seeded for http://localhost:3410
// are attached to navigations — the two are distinct cookie domains.
const BASE_URL = `http://localhost:${PORT}`;

export default defineConfig({
  testDir: "./scripts",
  fullyParallel: false,
  workers: 1,
  reporter: "list",
  use: {
    baseURL: BASE_URL,
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chrome",
      use: { ...devices["Desktop Chrome"], channel: "chrome" },
    },
  ],
  webServer: {
    command: `npx next dev -p ${PORT}`,
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
