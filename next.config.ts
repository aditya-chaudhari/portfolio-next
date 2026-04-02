import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

// Only for `next dev` (not lint/build/start). See:
// https://github.com/cloudflare/next-on-pages/blob/main/internal-packages/next-dev/README.md
if (process.argv[2] === "dev") {
  setupDevPlatform().catch(console.error);
}

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
