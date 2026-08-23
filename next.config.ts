import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Cloudflare Workers can't run the sharp-based optimizer; serve images as-is.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
