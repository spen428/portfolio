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
    return this.readFileForLocale("cv/cv-data", locale);
  }

  public getProjects(locale: string): Project[] {
    return this.readFileForLocale("cv/projects", locale);
  }

  public getPersonalInfo(locale: string): PersonalInfo {
    return this.readFileForLocale("cv/personal-info", locale);
  }

  public getCommercialExperience(locale: string): CommercialExperience {
    return this.readFileForLocale("cv/commercial-experience", locale);
  }

  private readFileForLocale<T>(basePath: string, locale: string): T {
    if (process.env.NODE_ENV !== "production") {
      basePath = `dummy/${basePath}`;
    }

    let fullPath = `res/${basePath}.${locale}.json`;
    if (!fs.existsSync(fullPath)) {
      console.warn(`File does not exist: ${fullPath}`);
      fullPath = `res/${basePath}.${fallbackLocale}.json`;
      if (!fs.existsSync(fullPath)) {
        throw new Error(`No data for ${basePath}`);
      }
    }

    const buffer = fs.readFileSync(fullPath);
    return JSON.parse(buffer.toString()) as T;
  }
})();
