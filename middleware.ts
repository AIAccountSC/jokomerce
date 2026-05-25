import { NextResponse, type NextRequest } from "next/server";

/**
 * Per-request Content-Security-Policy with a fresh nonce.
 *
 * - `script-src 'self' 'nonce-…' 'strict-dynamic'` lets only scripts that
 *   carry the matching nonce execute; trusted scripts can then load further
 *   scripts via 'strict-dynamic'.
 * - `style-src 'self' 'unsafe-inline'` — Next.js injects critical CSS inline;
 *   strict style-src isn't compatible with the framework today.
 * - `frame-ancestors 'none'` — clickjacking protection (in addition to XFO).
 * - `require-trusted-types-for 'script'` — Trusted Types for script sinks.
 *
 * Image origins mirror the Unsplash + Picsum hosts we use, plus Next.js
 * image-optimization endpoint (served from /_next/image — same origin).
 */
export function middleware(request: NextRequest) {
  const nonce = btoa(crypto.randomUUID());
  const isDev = process.env.NODE_ENV !== "production";

  // Dev needs eval for hot-reload + inline error overlay; prod is strict.
  const scriptSrc = isDev
    ? `'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-eval'`
    : `'self' 'nonce-${nonce}' 'strict-dynamic'`;

  const csp = [
    `default-src 'self'`,
    `script-src ${scriptSrc}`,
    `style-src 'self' 'unsafe-inline'`,
    `img-src 'self' data: blob: https://images.unsplash.com https://picsum.photos`,
    `font-src 'self' data:`,
    `connect-src 'self'${isDev ? " ws: wss:" : ""}`,
    `frame-ancestors 'none'`,
    `form-action 'self' mailto:`,
    `base-uri 'self'`,
    `object-src 'none'`,
    `manifest-src 'self'`,
    `require-trusted-types-for 'script'`,
    `upgrade-insecure-requests`,
  ]
    .join("; ")
    .replace(/\s+/g, " ")
    .trim();

  // Pass nonce through request headers so the layout can read it via
  // next/headers and stamp inline <script> tags with the same nonce.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("content-security-policy", csp);

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set("content-security-policy", csp);
  return response;
}

export const config = {
  matcher: [
    // Apply CSP to all routes EXCEPT static/image/preview assets that don't
    // execute JS — these are served by Next.js's own optimization endpoint
    // and don't need a per-request nonce.
    {
      source:
        "/((?!api|_next/static|_next/image|favicon.ico|icon|apple-icon|opengraph-image|sitemap.xml|robots.txt).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
