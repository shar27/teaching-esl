module.exports = {
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
      CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
      CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN
    },
  },
}
