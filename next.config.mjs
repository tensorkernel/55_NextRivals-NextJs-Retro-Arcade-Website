/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d1geqzmavzu3y.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
