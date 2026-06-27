export interface AcademicMetadata {
  name: string;
  email: string;
  educationLevel: "School (Class 9-12)" | "Undergraduate" | "Postgraduate" | "PhD";
  degreeMajor: string;
  institution: string;
  projectType: "Academic Assignment" | "Capstone" | "Thesis" | "Research Paper" | "Mini Project" | "Other";
  topic: string;
  subjectName?: string;
  pagesRequired: number;
  citationStyle: "APA" | "MLA" | "IEEE" | "Chicago";
  focusAreas?: string;
  language: string;
}

export interface ResearchReference {
  title: string;
  authors: string;
  year: string;
  summary: string;
  url: string;
}

export interface ResearchData {
  insights: string;
  methodology: string;
  references: ResearchReference[];
  fallbackActive?: boolean;
}

export interface GeneratedChapter {
  id: string;
  title: string;
  content: string;
}

export interface SavedReport {
  id: string;
  timestamp: string;
  metadata: AcademicMetadata;
  researchData: ResearchData;
  chapters: GeneratedChapter[];
}
