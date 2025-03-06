/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  webpack: (config) => {
    return config;
  },
  // You might need to add transpilePackages
  transpilePackages: ['@grapesjs/studio-sdk'],
};

export default nextConfig;
