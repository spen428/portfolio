import type { CvData, PersonalInfo, Project } from "@/services/data.model";
import axios from "axios";
import {
  computed,
  type ComputedRef,
  type Ref,
  ref,
  watch,
  type WritableComputedRef,
} from "vue";
import LocaleService from "@/services/locale.service";

type CacheContainer = {
  cvData?: string;
  projects?: string;
  personalInfo?: string;
};

export default new (class DataService {
  private readonly cache: {
    personalInfo: Ref<PersonalInfo>;
    cvData: Ref<CvData>;
    projects: Ref<Project[]>;
    fullName: ComputedRef<string>;
  } = {
    cvData: ref<CvData>({
      abstract: "",
      articles: [],
    }),
    projects: ref<Project[]>([]),
    personalInfo: ref<PersonalInfo>({
      cvUrl: { full: "", short: "" },
      emailAddress: "",
      fullName: "",
      fullNameRuby: "",
      github: { url: "", username: "" },
      linkedIn: { url: "" },
      location: { lines: [], url: "" },
      longerTagLine: "",
      phoneNumber: { intl: "", local: "" },
      tagLine: "",
    }),
    fullName: computed(() => this.cache.personalInfo.value.fullName),
  };

  constructor() {}

  public initializeWatches() {
    const locale = LocaleService.getCurrentLocale();
    watch(
      locale,
      async () => {
        await this.fetchAndCache("cvData", "/cv/data", locale);
        await this.fetchAndCache("projects", "/cv/projects", locale);
        await this.fetchAndCache("personalInfo", "/cv/personal-info", locale);
      },
      { immediate: true }
    );
  }

  public getCvData(): Ref<CvData> {
    return this.cache.cvData;
  }

  public getProjects(): Ref<Project[]> {
    return this.cache.projects;
  }

  public getPersonalInfo(): Ref<PersonalInfo> {
    return this.cache.personalInfo;
  }

  public getFullName(): Ref<string> {
    return this.cache.fullName;
  }

  private readonly httpClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });

  private readonly cacheForLocale: CacheContainer = {};

  private async fetchAndCache<T>(
    key: keyof CacheContainer,
    url: string,
    localeRef: WritableComputedRef<string>
  ): Promise<Ref<T>> {
    const locale = localeRef.value;
    if (this.cacheForLocale[key] === locale) {
      return this.cache[key] as Ref<T>;
    }

    const response = await this.httpClient.get(`${url}?locale=${locale}`);
    this.cacheForLocale[key] = locale;
    this.cache[key].value = response.data as any;
    return this.cache[key] as Ref<T>;
  }
})();
