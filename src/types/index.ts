export interface ExperienceItem {
  role: string;
  company: string;
  companyDesc?: string;
  date: string;
  achievements: string[];
  tech: string[];
}

export interface Skill {
  name: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface Language {
  name: string;
  level: string;
  percentage: number;
}

export interface Interest {
  name: string;
  icon: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface InfoItem {
  icon: string;
  label: string;
  value: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactItem {
  icon: string;
  text: string;
  href?: string;
}

export interface PrintProject {
  name: string;
  desc: string;
  tech: string;
}

export interface PrintHighlight {
  value: string;
  label: string;
}
