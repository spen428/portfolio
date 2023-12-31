export interface CvData {
  articles: Article[];
  abstract: string;
  lastModified: string;
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
  id: string;
  type: string;
  title: string;
  url: { url: string; external: boolean };
  thumbnailUrl: string;
  technologyIds?: string[];
  abstract?: string;
  learningObjectives?: string[];
  learningOutcomes?: string[];
  articleBody?: string;
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

export interface TechnologyWithIcon {
  id: string;
  name: string;
  logoUrl: string;
  color?: string;
}
