/** @type {import('next').NextConfig} */
const nextConfig = {
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000, // Check for changes every second
      aggregateTimeout: 300, // Delay the rebuild after the first change
    };
    return config;
  },
  distDir: '.next',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
      {
        source: '/resume',
        destination: '/home',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
