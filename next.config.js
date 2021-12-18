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
      NEXT_PUBLIC_CONTENTFUL_ID: process.env.NEXT_PUBLIC_CONTENTFUL_ID,
      NEXT_PUBLIC_CONTENTFUL_TOKEN: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN
    },
  },
}
