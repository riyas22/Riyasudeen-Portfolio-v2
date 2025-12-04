/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Only allow images from your own domain or specific trusted providers
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'riyasudeen.me',
        port: '',
        pathname: '/**', // Allow all paths from this hostname
      },
    ],
    unoptimized: false, 
  },
  // Security headers to prevent XSS (Cross-Site Scripting)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;