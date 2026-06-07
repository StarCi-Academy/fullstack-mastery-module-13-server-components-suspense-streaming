import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // EN: Skip root eslint at build — this is a sub-project under the module repo.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
