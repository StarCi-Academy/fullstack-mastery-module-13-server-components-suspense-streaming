import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // VI: Bỏ qua eslint root khi build vì repo này là sub-project (EN: skip root eslint at build — this is a sub-project).
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
