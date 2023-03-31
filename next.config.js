/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    topLevelAwait: true,
    runtime: "edge",
  },
}

module.exports = nextConfig
