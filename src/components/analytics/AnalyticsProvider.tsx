"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import {
  GA_MEASUREMENT_ID,
  GOOGLE_ADS_ID,
  GTM_ID,
  META_PIXEL_ID,
  hasValidGaId,
  hasValidGoogleAdsId,
  hasValidGtmId,
  hasValidMetaPixelId,
} from "@/lib/analytics/env";
import { trackEvent } from "@/lib/analytics/events";

export function AnalyticsProvider() {
  const pathname = usePathname();
  const hasTrackedScroll = useRef(false);

  useEffect(() => {
    if (!pathname) {
      return;
    }

    trackEvent("page_view", {
      path:
        typeof window !== "undefined"
          ? `${window.location.pathname}${window.location.search}`
          : pathname,
    });
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      if (hasTrackedScroll.current) {
        return;
      }

      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;

      if (scrollable <= 0) {
        return;
      }

      const progress = (window.scrollY / scrollable) * 100;

      if (progress >= 90) {
        hasTrackedScroll.current = true;

        trackEvent("scroll_90", {
          path: `${window.location.pathname}${window.location.search}`,
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {hasValidGtmId ? (
        <>
          <Script id="gtm-base" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>

          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        </>
      ) : null}

      {hasValidGaId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />

          <Script id="ga4-base" strategy="afterInteractive">
            {`
window.dataLayer = window.dataLayer || [];

function gtag(){dataLayer.push(arguments);}

window.gtag = gtag;

gtag('js', new Date());

gtag('config', '${GA_MEASUREMENT_ID}', {
  send_page_view: false,
  anonymize_ip: true
});

${
  hasValidGoogleAdsId
    ? `gtag('config', '${GOOGLE_ADS_ID}');`
    : ""
}
`}
          </Script>
        </>
      ) : null}

      {hasValidMetaPixelId ? (
        <>
          <Script id="meta-pixel-base" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}
(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`}
          </Script>

          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      ) : null}
    </>
  );
}