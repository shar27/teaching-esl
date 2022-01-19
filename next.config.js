module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./scripts/sitemap-generator");
    }
    return config;
  },
 
  reactStrictMode: true,
  
  images: {
    domains: ['images.ctfassets.net'],
  
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
