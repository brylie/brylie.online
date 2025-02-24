export enum ProjectCategory {
  Software = "software",
  Music = "music",
  Education = "education",
}

export enum ProjectStatus {
  InProgress = "in-progress",
  Completed = "completed",
  Planned = "planned",
}

export interface Project {
  // Basic information every project should have
  title: string;
  description: string;
  url: string;

  // Project categorization and metadata
  category: ProjectCategory;
  featured: boolean; // Indicates if this should appear on the home page
  status: ProjectStatus;
  datePublished: string;
  lastUpdated?: string;

  // Optional detailed information
  tags?: string[];
  image?: string;
  githubUrl?: string;
  demoUrl?: string;

  // Additional details that might be useful on the portfolio page
  longDescription?: string;
  achievements?: string[];
  technologies?: string[];
}
