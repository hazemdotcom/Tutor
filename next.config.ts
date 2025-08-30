/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Don't fail build on ESLint errors
  },
}

module.exports = nextConfig