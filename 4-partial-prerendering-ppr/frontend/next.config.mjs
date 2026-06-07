import path from "node:path";
import { fileURLToPath } from "node:url";

const frontendRoot = path.dirname(fileURLToPath(import.meta.url));

/** Next.js config — incremental PPR opt-in per route via experimental_ppr. */
/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: {
    ppr: "incremental",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  outputFileTracingRoot: frontendRoot,
};

export default nextConfig;
