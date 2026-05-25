/** @type {import('next').NextConfig} */

// Static security headers applied to every response.
// CSP is set per-request in middleware.ts (needs a per-request nonce).
const securityHeaders = [
  // 2 years, all subdomains, eligible for HSTS preload list.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Clickjacking protection (CSP frame-ancestors is also set in middleware).
  { key: "X-Frame-Options", value: "DENY" },
  // No MIME sniffing.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Don't leak the path on cross-origin navigations.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Deny powerful browser features we don't use.
  {
    key: "Permissions-Policy",
    value:
      "accelerometer=(), autoplay=(), camera=(), display-capture=(), encrypted-media=(), fullscreen=(self), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), sync-xhr=(), usb=(), web-share=(), xr-spatial-tracking=()",
  },
  // Origin isolation — enables process isolation, blocks postMessage from
  // cross-origin windows, eliminates a class of side-channel + XS-leak attacks.
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  // Same-origin resource policy — blocks other origins from embedding our
  // resources via <img>, <script>, etc.
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
  // No DNS-prefetch leak.
  { key: "X-DNS-Prefetch-Control", value: "off" },
];

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

  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
    ];
  },
};

export default nextConfig;
