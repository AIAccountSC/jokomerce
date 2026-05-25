import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { LangProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jokomerce — Marketplace & D2C Wachstum mit P&L-Verantwortung",
  description:
    "Joachim Heidel — Head of Marketplace & CMO auf Zeit. Marketplace- und D2C-Wachstum mit echter P&L-Verantwortung. DE & US.",
  metadataBase: new URL("https://jokomerce.de"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" data-accent="yellow">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LangProvider>
          <Nav />
          {children}
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
