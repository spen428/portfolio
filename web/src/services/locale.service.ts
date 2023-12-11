import { useI18n } from "vue-i18n";
import type { WritableComputedRef } from "vue";

const LOCAL_STORAGE_DEFAULT_LOCALE_KEY = "defaultLocale";

export default new (class LocaleService {
  public getCurrentLocaleRef(): WritableComputedRef<string> {
    const { locale } = useI18n();
    return locale;
  }

  public getCurrentLocale(): string {
    return this.getCurrentLocaleRef().value;
  }

  public getDefaultLocaleFromLocalStorage(): string {
    return localStorage.getItem(LOCAL_STORAGE_DEFAULT_LOCALE_KEY) ?? "en-GB";
  }

  public saveDefaultLocaleToLocalStorage(locale: string) {
    localStorage.setItem(LOCAL_STORAGE_DEFAULT_LOCALE_KEY, locale);
  }
})();
