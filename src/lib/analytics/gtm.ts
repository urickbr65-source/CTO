import { GTM_ID, hasValidGtmId } from "./env";

export function getGtmId(): string | undefined {
  if (!hasValidGtmId) {
    return undefined;
  }

  return GTM_ID;
}

export function pushToDataLayer(event: string, payload?: Record<string, unknown>) {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...payload });
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}
