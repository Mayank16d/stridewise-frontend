/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
      appDir: true,
  },
  swcMinify: true,
  optimizeFonts: true,
  images: {
      domains: ['res.cloudinary.com', 'randomuser.me', 'localhost:3000', 'example.com'],
      minimumCacheTTL: 15000000,
  },
};

module.exports = nextConfig;
