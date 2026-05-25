"use client";

import Link from "next/link";
import { useT } from "@/lib/i18n";
import { COPY } from "@/lib/copy";

export function FinalCTA() {
  const t = useT();
  const lang = t({ de: "de", en: "en" });
  return (
    <section className="final-cta" id="contact-cta">
      <div className="row">
        <h2
          data-reveal
          dangerouslySetInnerHTML={{ __html: lang === "en" ? COPY.finalCTA.h2En : COPY.finalCTA.h2De }}
        />
        <p data-reveal style={{ ["--reveal-delay" as never]: "100ms" }}>
          {t(COPY.finalCTA.body)}
        </p>
        <div className="final-cta-actions">
          <Link className="btn solid" href="/contact">
            <span>{t(COPY.cta.bookCall)}</span> <span className="arr">→</span>
          </Link>
          <a
            className="btn"
            href="https://www.linkedin.com/in/joachim-heidel-803b36134/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <span className="arr">↗</span>
          </a>
          <span className="avail">{t(COPY.cta.available)}</span>
        </div>
      </div>
    </section>
  );
}
