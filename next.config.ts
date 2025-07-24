import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Add external domains if needed
    dangerouslyAllowSVG: true, // If using SVG icons
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Add this to properly expose environment variables
  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  },
  // Enable trailing slashes if needed
  trailingSlash: false,
}

export default nextConfig;
