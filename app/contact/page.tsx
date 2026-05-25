import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Kontakt — Erstgespräch anfragen",
  description:
    "Erstgespräch mit Joachim Heidel anfragen — ~30 Minuten, kein Deck, kein Sales-Pitch. Antwort binnen 1 Werktag. hello@jokomerce.de.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Kontakt — Jokomerce",
    description: "Erstgespräch anfragen. ~30 Minuten, kein Deck, kein Sales-Pitch.",
    url: "/contact",
  },
};

export default function Page() {
  return <ContactClient />;
}
