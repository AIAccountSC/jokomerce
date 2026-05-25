import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SERVICES, getService } from "@/lib/services";
import { ServiceDetail } from "./ServiceDetail";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = getService(params.slug);
  if (!s) return {};
  const text = s.lead.de.replace(/<[^>]+>/g, "");
  return {
    title: `${s.title.de} · Jokomerce`,
    description: text,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = getService(params.slug);
  if (!s) notFound();
  return <ServiceDetail service={s} />;
}
