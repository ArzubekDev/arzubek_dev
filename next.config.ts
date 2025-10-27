import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },

  reactStrictMode: true,

  experimental: {
    optimizePackageImports: ["react", "react-dom"],
  },
};

export default nextConfig;
