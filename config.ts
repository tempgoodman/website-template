export type Locale = (typeof locales)[number];

export const locales = ["en", "zh-HK", "zh-CN"] as const;
export const defaultLocale: Locale = "en";
