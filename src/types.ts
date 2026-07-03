export interface TechItem {
  id: string;
  name: string;
  shortName: string; // e.g. "RE", "NE"
  category: 'Frontend' | 'Backend' | 'Tools';
  role: string; // e.g. "Frontend Library", "Database"
  color: string; // accent color class
}

export interface Milestone {
  id: string;
  year: string;
  title: string;
  company: string;
  responsibilities: string[];
  toolsUsed?: string[];
}

export interface Project {
  id: string;
  emoji: string;
  title: string;
  description: string;
  tags: string[];
  codeUrl: string;
  liveUrl: string;
  objective?: string;
  toolsUsed?: string[];
}

export interface EducationStage {
  period: string;
  degree: string;
  institution: string;
  score: string;
}

export interface CertificationItem {
  date: string;
  title: string;
}

export interface AcademicProject {
  period: string;
  title: string;
  role: string;
  objective: string;
  coreFocus: string;
}

export interface ExtraCurricular {
  period: string;
  organization: string;
  details: string[];
}
