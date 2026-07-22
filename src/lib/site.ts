const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined) ??
  "http://localhost:3000";

export const SITE_URL = rawSiteUrl.endsWith("/")
  ? rawSiteUrl.slice(0, -1)
  : rawSiteUrl;

export const SITE_NAME = "CTO - Centro de Tratamento Odontológico";
export const SITE_DESCRIPTION =
  "Clínica odontológica especializada em implantes, próteses, lentes de contato dental, estética dental e clínica geral.";
