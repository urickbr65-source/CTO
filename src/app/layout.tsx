import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "CTO - Centro de Tratamento Odontológico | Alta Floresta e Nova Monte Verde",
  description: SITE_DESCRIPTION,
  keywords: [
    "clínica odontológica",
    "dentista em Alta Floresta",
    "dentista em Nova Monte Verde",
    "implantes dentários",
    "próteses dentárias",
    "estética dental",
    "reabilitação oral",
  ],
  alternates: {
    canonical: "/",
  },
  robots:
    process.env.NODE_ENV === "production"
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        }
      : {
          index: false,
          follow: false,
        },
  authors: [{ name: "CTO - Centro de Tratamento Odontológico" }],
  creator: "CTO - Centro de Tratamento Odontológico",
  publisher: "CTO - Centro de Tratamento Odontológico",
  category: "healthcare",

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "CTO - Centro de Tratamento Odontológico | Alta Floresta e Nova Monte Verde",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/imagens/imagem2.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Rodrigo Ramos - CTO Centro de Tratamento Odontológico",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CTO - Centro de Tratamento Odontológico | Alta Floresta e Nova Monte Verde",
    description: SITE_DESCRIPTION,
    images: ["/imagens/imagem2.jpg"],
  },

  manifest: "/manifest.webmanifest",

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  image: `${SITE_URL}/imagens/imagem2.jpg`,
  url: SITE_URL,
  telephone: "+55 66 99255-8900",
  areaServed: ["Alta Floresta - MT", "Nova Monte Verde - MT"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Alta Floresta",
    addressRegion: "MT",
    addressCountry: "BR",
  },
  sameAs: [
    "https://instagram.com/ctodontologico_af",
    "https://instagram.com/ctonovamonteverde",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AnalyticsProvider />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}