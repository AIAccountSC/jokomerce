import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "Über mich — Joachim Heidel",
  description:
    "Joachim Heidel — Head of Marketplace & CMO auf Zeit. 1 000+ Produktlaunches. DE / US. Marketplace, Multichannel, Shopify D2C, ERP, AI-Workflows.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Über mich — Joachim Heidel · Jokomerce",
    description:
      "Marketplace- & D2C-Operator mit voller P&L-Verantwortung. Aus Inhouse, Agentur und Interim-Setups — DE und US.",
    url: "/about",
    images: ["/joachim/joachim-hero.jpg"],
  },
};

export default function Page() {
  return <AboutClient />;
}
