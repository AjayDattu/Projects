/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'], // Add the Cloudinary domain here
    deviceSizes: [320, 420, 768, 1024, 1200], // Define device sizes for optimized image loading
    imageSizes: [16, 32, 48, 64, 128, 256, 384], // Define image sizes to ensure optimization
  },
  // Enable the PWA plugin if you're using Progressive Web App setup
  // pwa: {
  //   dest: 'public',
  //   register: true,
  //   skipWaiting: true,
  // },
  reactStrictMode: true, // Enable React Strict Mode for detecting potential issues
  swcMinify: true, // Enable SWC-based minification for faster builds
  webpack(config) {
    // Customize Webpack configuration here if needed
    return config;
  },
};

export default nextConfig;
