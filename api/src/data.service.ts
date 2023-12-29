import type {
  CommercialExperience,
  CvData,
  PersonalInfo,
  Project,
} from "@shared/data.model";
import * as fs from "fs";
import { dataPath, fallbackLocale } from "./config";

export default new (class DataService {
  public async getCvData(locale: string): Promise<CvData> {
    return await this.readFileForLocale("cv-data", locale);
  }

  public async getProjects(locale: string): Promise<Project[]> {
    return await this.readFileForLocale("projects", locale);
  }

  public async getPersonalInfo(locale: string): Promise<PersonalInfo> {
    return await this.readFileForLocale("personal-info", locale);
  }

  public async getCommercialExperience(
    locale: string
  ): Promise<CommercialExperience> {
    return await this.readFileForLocale("commercial-experience", locale);
  }

  private async readFileForLocale<T>(
    subPath: string,
    locale: string
  ): Promise<T> {
    const filePath = this.firstExtantFileOrNull([
      `${dataPath}/${subPath}.${locale}.js`,
      `${dataPath}/${subPath}.${locale}.json`,
      `${dataPath}/${subPath}.${fallbackLocale}.js`,
      `${dataPath}/${subPath}.${fallbackLocale}.json`,
    ]);
    if (!filePath) {
      throw new Error(`No data for ${subPath}`);
    }

    if (filePath.endsWith(".json")) {
      const buffer = fs.readFileSync(filePath);
      return JSON.parse(buffer.toString()) as T;
    }
    if (filePath.endsWith(".js")) {
      const module = await import(filePath);
      return module.default as T;
    }
    throw new Error(`File has an unhandled file extension: ${filePath}`);
  }

  private firstExtantFileOrNull(paths: string[]): string | null {
    for (const path of paths) {
      if (fs.existsSync(path)) return path;
      console.debug(`[DataService] File does not exist: ${path}`);
    }
    return null;
  }
})();
