import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
  images : {
    remotePatterns: [new URL('https://pmyzorwuc8.ufs.sh/**')],
  },
};

export default nextConfig;
