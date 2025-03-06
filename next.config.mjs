/** @type {import('next').NextConfig} */
// next.config.mjs

const nextConfig = {
    reactStrictMode: false,
    // Use only transpilePackages and remove serverExternalPackages
    transpilePackages: ['@grapesjs/studio-sdk'],
    
    // Add additional optimizations
    swcMinify: false, // Disable minification if it causes problems
    
    // Add cache configuration
    staticPageGenerationTimeout: 180,
    
    // Improve bundling
    webpack: (config) => {
      return config;
    },
  };
  
  export default nextConfig;