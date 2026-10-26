import { fileURLToPath } from "node:url";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // A lockfile higher up the tree (e.g. ~/yarn.lock) would otherwise be picked as the workspace root.
  outputFileTracingRoot: fileURLToPath(new URL(".", import.meta.url)),
  agentRules: false,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "avatars.githubusercontent.com" }],
  },
};

export default nextConfig;
