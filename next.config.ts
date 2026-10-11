import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
process.env.NEXT_PUBLIC_BASE_PATH = isProd ? "/nx-conglo" : "";
const basePath = isProd ? "/nx-conglo" : "";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.68.104"],
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;