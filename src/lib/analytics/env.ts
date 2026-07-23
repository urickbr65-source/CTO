export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export const hasValidGtmId = Boolean(
  GTM_ID && /^GTM-[A-Z0-9]+$/i.test(GTM_ID),
);

export const hasValidGaId = Boolean(
  GA_MEASUREMENT_ID && /^G-[A-Z0-9]+$/i.test(GA_MEASUREMENT_ID),
);

export const hasValidGoogleAdsId = Boolean(
  GOOGLE_ADS_ID && /^AW-\d+$/.test(GOOGLE_ADS_ID),
);

export const hasValidMetaPixelId = Boolean(
  META_PIXEL_ID && /^[0-9]{8,20}$/.test(META_PIXEL_ID),
);
