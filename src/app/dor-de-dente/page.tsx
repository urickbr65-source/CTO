import type { Metadata } from "next";
import { DorDeDentePageContent } from "@/components/landing/DorDeDentePageContent";
import { ServicePageLayout } from "@/components/landing/ServicePageLayout";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const pageTitle = "Dor de Dente em Alta Floresta | CTO Odontológica";
const pageDescription =
  "Esta com dor de dente? Atendimento odontologico em Alta Floresta. Agende sua consulta pelo WhatsApp.";
const pagePath = "/dor-de-dente";
const pageUrl = `${SITE_URL}${pagePath}`;

const faqItems = [
  {
    question: "Dor de dente pode esperar alguns dias?",
    answer:
      "Nem sempre. Dor persistente pode indicar infeccao ou inflamacao profunda. O ideal e avaliar o quanto antes.",
  },
  {
    question: "Vocês atendem urgencia odontologica?",
    answer:
      "Sim. Nossa equipe realiza avaliacao do quadro e orienta o melhor tratamento para alivio rapido e seguro.",
  },
  {
    question: "Posso tomar remedio por conta propria?",
    answer:
      "A automedicacao pode mascarar sintomas. Recomendamos avaliacao odontologica para tratar a causa da dor.",
  },
  {
    question: "Depois que a dor melhora, preciso tratar?",
    answer:
      "Sim. Mesmo sem dor, o problema pode continuar evoluindo. O tratamento evita agravamentos.",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "dor de dente em alta floresta",
    "dentista urgencia alta floresta",
    "atendimento odontologico alta floresta",
    "clinica odontologica alta floresta",
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
        alt: "Atendimento odontologico para dor de dente",
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
      "@type": "Service",
      name: "Atendimento para dor de dente",
      serviceType: "Urgencia odontologica",
      areaServed: "Alta Floresta - MT",
      provider: {
        "@type": "Dentist",
        name: SITE_NAME,
      },
      url: pageUrl,
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function DorDeDentePage() {
  return (
    <ServicePageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <DorDeDentePageContent />
    </ServicePageLayout>
  );
}
