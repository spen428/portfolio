export interface CvData {
  articles: Article[];
  abstract: string;
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
  fullNameRuby: string;
  tagLine: string;
  github: { url: string; username: string };
  longerTagLine: string;
  linkedIn: { url: string };
}

export interface CommercialExperience {
  introduction: string;
  articles: {
    title: string;
    logoUrl: string;
    tags: string[];
    introduction: string;
    sections: { title: string; body: string }[];
  }[];
}
