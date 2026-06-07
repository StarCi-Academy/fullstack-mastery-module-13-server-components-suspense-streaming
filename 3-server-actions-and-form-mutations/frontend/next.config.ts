import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const frontendRoot = path.dirname(fileURLToPath(import.meta.url));

/** Minimal Next.js config for the Server Actions lesson. */
const nextConfig: NextConfig = {
  // Pin tracing root to this frontend app (avoids monorepo lockfile confusion).
  outputFileTracingRoot: frontendRoot,
  // Allow CSS/JS chunks when opening via 127.0.0.1 instead of localhost in dev.
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
