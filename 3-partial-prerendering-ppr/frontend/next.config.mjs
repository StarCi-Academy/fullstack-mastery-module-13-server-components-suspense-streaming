// next.config.mjs
// VI: Bật Partial Prerendering ở mức "incremental" — mỗi route phải opt-in qua `experimental_ppr`.
// EN: Enable Partial Prerendering at "incremental" — each route must opt in via `experimental_ppr`.
/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: {
    ppr: "incremental",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
