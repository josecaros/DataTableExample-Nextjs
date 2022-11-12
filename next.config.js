/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: '/DataTableExample-Nextjs',
  assetPrefix: '/DataTableExample-Nextjs'
}

module.exports = nextConfig
