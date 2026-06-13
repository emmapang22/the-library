import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "covers.openlibrary.org" },
      { hostname: "placehold.net" },
    ],
  },
};

export default nextConfig;
