import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // 廃止した事業（Zeroichi Home）のページは、旧URLからトップへ恒久転送
  async redirects() {
    return [{ source: "/zeroichi-home", destination: "/", permanent: true }];
  },
};

export default nextConfig;
