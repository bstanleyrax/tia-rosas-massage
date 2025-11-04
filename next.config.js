/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/tia-rosas-massage',
  assetPrefix: '/tia-rosas-massage',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig