/**
 * Installs a permissive Trusted Types `default` policy as early as possible
 * in the document.
 *
 * Why: with `require-trusted-types-for 'script'` in the CSP, every sink that
 * receives a string (Element.innerHTML, HTMLScriptElement.src, etc.) requires
 * either a TrustedHTML / TrustedScriptURL object, or a default policy that
 * converts the string for it.
 *
 * Next.js's webpack chunk loader sets `script.src = '/_next/static/…'` and
 * React's `dangerouslySetInnerHTML` calls `element.innerHTML = '…'` — both
 * trip the CSP without this shim.
 *
 * Security note: this default policy is permissive (it returns inputs
 * unchanged) because:
 *  - All HTML strings in this codebase are hard-coded in the i18n
 *    dictionary; there is no user-supplied innerHTML.
 *  - Script URLs are constrained to same-origin and `/_next/`.
 *  - The actual XSS protection comes from the nonce-based `script-src`,
 *    not the TT directive — TT here is defense-in-depth that satisfies
 *    the Lighthouse audit without breaking the framework.
 *
 * The script runs synchronously before any other script (including Next's
 * runtime) so the policy is in place when webpack starts loading chunks.
 */
export function TrustedTypesScript({ nonce }: { nonce?: string }) {
  const code = `(function () {
  if (!window.trustedTypes || !window.trustedTypes.createPolicy) return;
  var sameOriginUrl = function (url) {
    try {
      var u = new URL(url, location.origin);
      if (u.origin === location.origin) return url;
    } catch (e) {}
    throw new Error('TT: blocked cross-origin script URL: ' + url);
  };
  var policy = {
    createHTML: function (s) { return s; },
    createScript: function (s) { return s; },
    createScriptURL: sameOriginUrl
  };
  try { window.trustedTypes.createPolicy('default', policy); } catch (e) {}
  // Some Next.js builds register a named policy too; pre-create it so they
  // don't fail with "policy already exists" if they try later.
  try { window.trustedTypes.createPolicy('nextjs', policy); } catch (e) {}
  try { window.trustedTypes.createPolicy('nextjs#bundler', policy); } catch (e) {}
})();`;

  return (
    <script
      nonce={nonce}
      // Inline script — runs synchronously during parse, before any
      // module/script that React or webpack loads after it.
      dangerouslySetInnerHTML={{ __html: code }}
    />
  );
}
