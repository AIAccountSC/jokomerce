import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="foot-grid">
        <div className="col about-col">
          <Link href="/#top" className="brand">
            <span className="mark">J</span>
            <span className="brand-text">
              <span className="name">Jokomerce</span>
              <span className="sub">MARKETPLACE · D2C · P&amp;L</span>
            </span>
          </Link>
          <p>Head of Marketplace &amp; CMO auf Zeit für Marken, Händler und D2C-Brands.</p>
        </div>
        <div className="col">
          <h4>Leistungen</h4>
          <Link href="/#leistungen">Head of Marketplace</Link>
          <Link href="/#leistungen">Amazon Growth</Link>
          <Link href="/#leistungen">Multichannel</Link>
          <Link href="/#leistungen">Shopify &amp; D2C</Link>
        </div>
        <div className="col">
          <h4>Mehr</h4>
          <Link href="/#about">Über mich</Link>
          <Link href="/#cases">Cases</Link>
          <Link href="/#faq">FAQ</Link>
          <Link href="/#kontakt">Kontakt</Link>
        </div>
        <div className="col">
          <h4>Kontakt</h4>
          <a href="mailto:hello@jokomerce.de">hello@jokomerce.de</a>
          <a
            href="https://www.linkedin.com/in/joachim-heidel-803b36134/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="foot-bottom">
        <span>© 2026 Jokomerce · Joachim Heidel</span>
        <span>Impressum · Datenschutz</span>
      </div>
    </footer>
  );
}
