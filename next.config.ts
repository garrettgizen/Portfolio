import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: "/gizengraphics/",
  basePath: "/gizengraphics",
  trailingSlash: true,
  images: {
    unoptimized: true ,
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.graphassets.com',
      },
     ]
    },
};

export default nextConfig;