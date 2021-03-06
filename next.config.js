
module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./scripts/sitemap-generator");
    }
    return config;
  },
 
  i18n: {
   locales: ['en','fr', 'pl'],
   defaultLocale: 'en',
 },
  reactStrictMode: true,
  
  images: {
    domains: ['images.ctfassets.net', 'assets.ctfassets.net'],
  
  },
 
  
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
    env: {
      NEXT_GOOGLE: process.env.NEXT_PUBLIC_GOOGLE,
      
    },
  },
}
