import { useI18n } from "vue-i18n";
import type { WritableComputedRef } from "vue";

const LOCAL_STORAGE_DEFAULT_LOCALE_KEY = "defaultLocale";

export default new (class LocaleService {
  public getCurrentLocale(): WritableComputedRef<string> {
    const { locale } = useI18n();
    return locale;
  }

  public setCurrentLocale(value: string) {
    this.getCurrentLocale().value = value;
  }

  public getDefaultLocaleFromLocalStorage(): string {
    const locale = localStorage.getItem(LOCAL_STORAGE_DEFAULT_LOCALE_KEY) ?? "";
    const { availableLocales } = useI18n();
    if (!availableLocales.includes(locale)) {
      localStorage.removeItem(LOCAL_STORAGE_DEFAULT_LOCALE_KEY);
      return "en-GB";
    }
    return locale;
  }

  public saveDefaultLocaleToLocalStorage(locale: string) {
    localStorage.setItem(LOCAL_STORAGE_DEFAULT_LOCALE_KEY, locale);
  }
})();
