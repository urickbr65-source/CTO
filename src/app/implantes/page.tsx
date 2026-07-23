import type { Metadata } from "next";
import { ImplantesPageContent } from "@/components/landing/ImplantesPageContent";
import { ServicePageLayout } from "@/components/landing/ServicePageLayout";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const pageTitle = "Implantes Dentarios em Alta Floresta | CTO Odontológica";
const pageDescription =
  "Conheca nossos tratamentos com implantes dentarios e agende sua avaliacao.";
const pagePath = "/implantes";
const pageUrl = `${SITE_URL}${pagePath}`;

const faqItems = [
  {
    question: "Implante dentario doi?",
    answer:
      "Com planejamento adequado e acompanhamento profissional, o procedimento e bem tolerado pela maioria dos pacientes.",
  },
  {
    question: "Quanto tempo leva o tratamento?",
    answer:
      "O prazo varia conforme cada caso. Na avaliacao, explicamos as etapas e o cronograma previsto para voce.",
  },
  {
    question: "Qualquer pessoa pode fazer implante?",
    answer:
      "A indicacao depende da avaliacao clinica. Exames e planejamento definem a melhor conduta para cada paciente.",
  },
  {
    question: "Implante substitui dente natural com seguranca?",
    answer:
      "Sim, quando bem indicado e executado, o implante oferece estabilidade e excelente desempenho funcional.",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "implantes dentarios alta floresta",
    "dentista implante alta floresta",
    "reabilitacao oral alta floresta",
    "avaliacao de implantes",
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
        alt: "Implantes dentarios em Alta Floresta",
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
      name: "Implantes dentarios",
      serviceType: "Reabilitacao oral com implantes",
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

export default function ImplantesPage() {
  return (
    <ServicePageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <ImplantesPageContent />
    </ServicePageLayout>
  );
}
