import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
  // assetPrefix: "/",
  // basePath: "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default withPayload(nextConfig);