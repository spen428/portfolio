import { createI18n } from "vue-i18n";

import enGbGlobal from "@/i18n/en-GB/global.json";
import enGbRoutes from "@/i18n/en-GB/routes.json";

import jaJpGlobal from "@/i18n/ja-JP/global.json";
import jaJpRoutes from "@/i18n/ja-JP/routes.json";

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "en-GB",
  fallbackLocale: "en-GB",
  availableLocales: ["en-GB", "ja-JP"],
  messages: {
    "en-GB": { ...enGbGlobal, routes: enGbRoutes },
    "ja-JP": { ...jaJpGlobal, routes: jaJpRoutes },
  },
});
