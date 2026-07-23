import type { Metadata } from "next";
import { AgendarConsultaContent } from "@/components/landing/AgendarConsultaContent";
import { ServicePageLayout } from "@/components/landing/ServicePageLayout";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const pageTitle = "Agendar Consulta | CTO Odontológica";
const pageDescription =
  "Agende sua consulta odontologica em Alta Floresta pelo WhatsApp.";
const pagePath = "/agendar-consulta";
const pageUrl = `${SITE_URL}${pagePath}`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "agendar consulta odontologica",
    "dentista alta floresta whatsapp",
    "consulta odontologica alta floresta",
  ],
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: pageUrl,
    siteName: SITE_NAME,
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: "/imagens/imagem2.jpg",
        width: 1200,
        height: 630,
        alt: "Agendamento de consulta odontologica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/imagens/imagem2.jpg"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": pageUrl,
      url: pageUrl,
      name: pageTitle,
      description: pageDescription,
      inLanguage: "pt-BR",
      isPartOf: {
        "@id": SITE_URL,
      },
    },
    {
      "@type": "ContactPage",
      name: "Agendamento de consulta",
      url: pageUrl,
      about: SITE_NAME,
    },
  ],
};

export default function AgendarConsultaPage() {
  return (
    <ServicePageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <AgendarConsultaContent />
    </ServicePageLayout>
  );
}
