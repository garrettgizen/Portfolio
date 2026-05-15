import type { NextConfig } from "next";

// next.config.js
const nextConfig = {
  output: "export",
  assetPrefix: "/portfolio/",
  basePath: "/portfolio",
  trailingSlash: true,
};

module.exports = nextConfig;
