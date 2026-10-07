import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // The site is a single static page, so export it as plain HTML/CSS/JS into `out/`.
  // This keeps the existing nginx Docker setup working without a Node server.
  output: 'export',
}

export default nextConfig
