import { pushToDataLayer } from "./gtm";
import { trackGaEvent, trackGaPageView } from "./ga";
import { trackMetaEvent, trackMetaPageView } from "./meta-pixel";
import { trackGoogleAdsConversion } from "./googleAds";

export type ConversionEventName =
  | "click_whatsapp"
  | "generate_lead"
  | "page_view"
  | "scroll_90"
  | "view_gallery"
  | "contact_click";

export function trackEvent(
  eventName: ConversionEventName,
  params?: Record<string, unknown>,
) {
  if (eventName === "page_view") {
    const path =
      typeof window !== "undefined"
        ? `${window.location.pathname}${window.location.search}`
        : "/";
    trackGaPageView(path);
    trackMetaPageView();
  }

  trackGaEvent(eventName, params);
  trackMetaEvent(eventName, params);
  pushToDataLayer(eventName, params);
}

export function trackWhatsAppClick(location: string) {
  trackGoogleAdsConversion();
  trackEvent("click_whatsapp", { location });
}

export function trackLeadClick(cta: "agendar_avaliacao" | "fazer_orcamento" | "entrar_em_contato") {
  trackEvent("generate_lead", { cta });
}

export function trackContactClick(channel: "whatsapp" | "telefone" | "instagram") {
  trackEvent("contact_click", { channel });
}
