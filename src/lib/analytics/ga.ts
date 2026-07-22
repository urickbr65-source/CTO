import { GA_MEASUREMENT_ID, hasValidGaId } from "./env";

function gtag(command: string, target: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || !hasValidGaId) {
    return;
  }

  window.gtag?.(command, target, params);
}

export function getGaMeasurementId(): string | undefined {
  if (!hasValidGaId) {
    return undefined;
  }

  return GA_MEASUREMENT_ID;
}

export function trackGaPageView(path: string) {
  if (!GA_MEASUREMENT_ID) {
    return;
  }

  gtag("event", "page_view", {
    page_path: path,
    page_location: typeof window !== "undefined" ? window.location.href : undefined,
    page_title: typeof document !== "undefined" ? document.title : undefined,
  });
}

export function trackGaEvent(eventName: string, params?: Record<string, unknown>) {
  gtag("event", eventName, params);
}

declare global {
  interface Window {
    gtag?: (command: string, target: string, params?: Record<string, unknown>) => void;
  }
}
