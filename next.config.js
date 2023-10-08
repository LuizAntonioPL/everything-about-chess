/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.chesscomfiles.com',
          port: '',
          pathname: '/uploads/images_users/tiny_mce/Eyechess/phpKbhHi2.png',
        },
      ],
    },
  }