import type { NextConfig } from "next";

// VI: Cấu hình Next.js tối thiểu cho lesson Server Actions.
// (EN: Minimal Next.js config for the Server Actions lesson.)
const nextConfig: NextConfig = {
  experimental: {
    // VI: Bật server actions (mặc định đã bật ở Next 15, khai báo cho rõ).
    // (EN: Enable server actions explicitly — already on by default in Next 15.)
  },
};

export default nextConfig;
