import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const frontendRoot = path.dirname(fileURLToPath(import.meta.url));

/** Minimal Next.js config for the RSC boundaries lesson. */
const nextConfig: NextConfig = {
  outputFileTracingRoot: frontendRoot,
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
