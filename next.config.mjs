/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
    ],
    deviceSizes: [360, 480, 640, 768, 1024, 1280, 1440, 1920],
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
