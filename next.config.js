/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'] // It's not necessary to set the https protocol
  }
}

module.exports = nextConfig
