/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ['@grapesjs/studio-sdk'],
    webpack: (config) => {
      // Resolve potential issues with React being imported multiple times
      config.resolve.alias = {
        ...config.resolve.alias,
        react: require.resolve('react'),
        'react-dom': require.resolve('react-dom')
      };
      return config;
    }
  };
export default nextConfig;
