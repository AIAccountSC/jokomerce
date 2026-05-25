import type { Metadata } from "next";
import LeistungenClient from "./LeistungenClient";

export const metadata: Metadata = {
  title: "Leistungen — 8 Module für Marketplace & D2C",
  description:
    "Head of Marketplace, Amazon Growth, Produktlaunch, Multichannel, Shopify & D2C, Operations & ERP, Customer Support, AI Workflows — einzeln oder als Head-of-Marketplace-Rolle mit P&L-Ownership.",
  alternates: { canonical: "/leistungen" },
  openGraph: {
    title: "Leistungen — Jokomerce",
    description:
      "8 Module für Marketplace & D2C — vom Head of Marketplace bis zur AI-Workflow-Automatisierung.",
    url: "/leistungen",
  },
};

export default function Page() {
  return <LeistungenClient />;
}
