import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow images from external CMS / storage providers
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http",  hostname: "**" },
    ],
    // Skip Next.js image optimization in development for simpler local image serving
    unoptimized: process.env.NODE_ENV === "development",
  },
};

export default nextConfig;
