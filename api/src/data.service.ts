import type {
  CommercialExperience,
  CvData,
  PersonalInfo,
  Project,
} from "./data.model";
import * as fs from "fs";
import { fallbackLocale } from "./config";

export default new (class DataService {
  public getCvData(locale: string): CvData {
    return this.readFileForLocale("cv-data", locale);
  }

  public getProjects(locale: string): Project[] {
    return this.readFileForLocale("projects", locale);
  }

  public getPersonalInfo(locale: string): PersonalInfo {
    return this.readFileForLocale("personal-info", locale);
  }

  public getCommercialExperience(locale: string): CommercialExperience {
    return this.readFileForLocale("commercial-experience", locale);
  }

  private readFileForLocale<T>(path: string, locale: string): T {
    const root =
      process.env.NODE_ENV === "production" ? "res/data" : "res/dummy";

    let fullPath = `${root}/${path}.${locale}.json`;
    if (!fs.existsSync(fullPath)) {
      console.warn(`File does not exist: ${fullPath}`);
      fullPath = `${root}/${path}.${fallbackLocale}.json`;
      if (!fs.existsSync(fullPath)) {
        throw new Error(`No data for ${path}`);
      }
    }

    const buffer = fs.readFileSync(fullPath);
    return JSON.parse(buffer.toString()) as T;
  }
})();
