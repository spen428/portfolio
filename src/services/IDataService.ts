export interface IDataService {
  getCvData(): CvData;

  getProjects(): Project[];

  getPersonalInfo(): PersonalInfo;

  getFullName(): string;
}

export interface CvData {
  articles: Article[];
}

interface Article {
  title: string;
  sections: Section[];
}

interface Section {
  title: string;
  subtitle?: string;
  dateRange?: { from: string; to: string };
  htmlContent: string;
}

export interface Project {
  id: number;
  title: string;
  url: { url: string; external: boolean };
  thumbnailUrl: string;
}

export interface PersonalInfo {
  phoneNumber: { intl: string; local: string };
  emailAddress: string;
  cvUrl: { full: string; short: string };
  location: {
    url: string;
    lines: string[];
  };
  fullName: string;
  tagLine: string;
  github: { url: string; username: string };
  longerTagLine: string;
  linkedIn: { url: string };
}
