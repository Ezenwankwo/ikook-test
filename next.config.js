/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      "localhost",
      "townsmeet.s3.amazonaws.com",
      "api.builder.io",
      "cdn.builder.io",
      "images.unsplash.com",
      "www.svgrepo.com",
    ],
  },
};

module.exports = nextConfig;
