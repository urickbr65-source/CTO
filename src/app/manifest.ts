import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CTO - Centro de Tratamento Odontológico",
    short_name: "CTO",
    description:
      "Clínica odontológica especializada em implantes, próteses, lentes de contato dental, estética dental e clínica geral.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#2563EB",
    lang: "pt-BR",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
