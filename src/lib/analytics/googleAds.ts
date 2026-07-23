export function trackGoogleAdsConversion() {
  if (typeof window === "undefined") return;

  const gtag = (window as any).gtag;

  if (typeof gtag !== "function") return;

  gtag("event", "conversion", {
    send_to: "AW-18343472512/4DbfCJuFqNUcEIDb7KpE",
    value: 1,
    currency: "BRL",
  });
}
