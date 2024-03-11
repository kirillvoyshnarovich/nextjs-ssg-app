/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd2norla3tyc4cn.cloudfront.net',
        port: '',
        pathname: '/i/s3/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/games',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
