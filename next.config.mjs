/** @type {import('next').NextConfig} */
/* const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig */
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
};

export default nextConfig;