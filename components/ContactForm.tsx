"use client";

import { Reveal } from "./RevealOnView";

export function ContactForm() {
  return (
    <Reveal
      as="form"
      className="final-form"
      delay={80}
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("Danke! Ich melde mich.");
      }}
    >
      <div className="row-two">
        <div className="field">
          <label>Name</label>
          <input type="text" placeholder="Vorname Nachname" required />
        </div>
        <div className="field">
          <label>Unternehmen</label>
          <input type="text" placeholder="Brand / GmbH" />
        </div>
      </div>
      <div className="field">
        <label>E-Mail</label>
        <input type="email" placeholder="du@firma.com" required />
      </div>
      <div className="field">
        <label>Aktive Kanäle</label>
        <select defaultValue="Amazon">
          <option>Amazon</option>
          <option>Otto</option>
          <option>Kaufland</option>
          <option>eBay</option>
          <option>Shopify</option>
          <option>Mehrere Kanäle</option>
        </select>
      </div>
      <div className="field">
        <label>Kurzbeschreibung der aktuellen Herausforderung</label>
        <textarea placeholder="z. B. Amazon-Marge fixen + Otto aufbauen…" />
      </div>
      <div className="field">
        <label>Wunschstart</label>
        <select defaultValue="Sofort">
          <option>Sofort</option>
          <option>1–3 Monate</option>
          <option>Später</option>
        </select>
      </div>
      <button type="submit" className="cta-pill amber" style={{ justifyContent: "center", marginTop: 6 }}>
        Erstgespräch anfragen <span aria-hidden="true">→</span>
      </button>
    </Reveal>
  );
}
