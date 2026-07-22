import { META_PIXEL_ID, hasValidMetaPixelId } from "./env";

export function getMetaPixelId(): string | undefined {
  if (!hasValidMetaPixelId) {
    return undefined;
  }

  return META_PIXEL_ID;
}

export function trackMetaPageView() {
  if (typeof window === "undefined") {
    return;
  }

  window.fbq?.("track", "PageView");
}

export function trackMetaEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") {
    return;
  }

  window.fbq?.("trackCustom", eventName, params);
}

declare global {
  interface Window {
    fbq?: {
      (...args: unknown[]): void;
      callMethod?: (...args: unknown[]) => void;
      queue?: unknown[];
      loaded?: boolean;
      version?: string;
      push?: (...args: unknown[]) => void;
    };
    _fbq?: Window["fbq"];
  }
}
