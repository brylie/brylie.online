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

export const categoryConfig = {
  [ProjectCategory.Software]: {
    color: "bg-blue-50 text-blue-900 border-blue-200",
    icon: "💻",
    ariaLabel: "Software Development Project",
  },
  [ProjectCategory.Music]: {
    color: "bg-purple-50 text-purple-900 border-purple-200",
    icon: "🎵",
    ariaLabel: "Music Production Project",
  },
  [ProjectCategory.Education]: {
    color: "bg-green-50 text-green-900 border-green-200",
    icon: "📚",
    ariaLabel: "Educational Project",
  },
};
