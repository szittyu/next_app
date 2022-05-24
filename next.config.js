/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "rickandmortyapi.com", "strapi-app-next.herokuapp.com"],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
