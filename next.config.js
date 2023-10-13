/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn2.iconfinder.com',
          port: '',
          pathname: '/data/icons/board-games-5/66/1-512.png',
        },
      ],
    },
  }