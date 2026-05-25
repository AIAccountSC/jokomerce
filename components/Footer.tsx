"use client";

import Link from "next/link";
import { useT } from "@/lib/i18n";
import { COPY } from "@/lib/copy";

export function Footer() {
  const t = useT();
  return (
    <footer className="site-footer">
      <div className="ft-grid">
        <div>
          <Link href="/" className="brand">
            Jokomerce
          </Link>
          <p style={{ marginTop: 16, maxWidth: "36ch", fontSize: 14, lineHeight: 1.6 }}>
            {t(COPY.footer.blurb)}
          </p>
        </div>
        <div className="col">
          <h4>{t(COPY.footer.services)}</h4>
          <Link href="/leistungen/head-of-marketplace">Head of Marketplace</Link>
          <Link href="/leistungen/amazon-growth">Amazon Growth</Link>
          <Link href="/leistungen/multichannel">Multichannel</Link>
          <Link href="/leistungen/shopify-d2c">Shopify &amp; D2C</Link>
          <Link href="/leistungen">{t(COPY.footer.all)}</Link>
        </div>
        <div className="col">
          <h4>{t(COPY.footer.site)}</h4>
          <Link href="/">{t(COPY.footer.home)}</Link>
          <Link href="/#cases">{t(COPY.footer.cases)}</Link>
          <Link href="/about">{t(COPY.footer.about)}</Link>
          <Link href="/contact">{t(COPY.footer.contact)}</Link>
        </div>
        <div className="col">
          <h4>{t(COPY.footer.contact)}</h4>
          <a href="mailto:hello@jokomerce.de">hello@jokomerce.de</a>
          <a
            href="https://www.linkedin.com/in/joachim-heidel-803b36134/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          <a href="#">{t(COPY.footer.imprint)}</a>
          <a href="#">{t(COPY.footer.privacy)}</a>
        </div>
      </div>
      <div className="copy">
        <span>{t(COPY.footer.copy)}</span>
        <span>{t(COPY.footer.tag)}</span>
      </div>
    </footer>
  );
}
