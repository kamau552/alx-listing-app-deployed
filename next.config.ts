import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Add external domains if needed
    dangerouslyAllowSVG: true, // If using SVG icons
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  }
}

export default nextConfig;
