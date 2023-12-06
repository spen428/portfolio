import { useI18n } from "vue-i18n";
import type { WritableComputedRef } from "vue";

export default new (class LocaleService {
  public getCurrentLocaleRef(): WritableComputedRef<string> {
    const { locale } = useI18n();
    return locale;
  }

  public getCurrentLocale(): string {
    return this.getCurrentLocaleRef().value;
  }
})();
