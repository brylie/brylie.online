import type { CollectionEntry } from "astro:content";

// Define the ProjectCategory enum values
export enum ProjectCategory {
  Software = "software",
  Music = "music",
  Education = "education",
}

// Define the ProjectStatus enum values
export enum ProjectStatus {
  InProgress = "in-progress",
  Completed = "completed",
  Planned = "planned",
}

// Use Astro's auto-generated type for project entries
export type Project = CollectionEntry<"projects">;

// Helper function to convert from enum value to display text
export function formatProjectCategory(category: string): string {
  const categoryMap: Record<string, string> = {
    [ProjectCategory.Software]: "Software",
    [ProjectCategory.Music]: "Music",
    [ProjectCategory.Education]: "Education",
  };

  return categoryMap[category] || category;
}

// Helper function to convert from enum value to display text
export function formatProjectStatus(status: string): string {
  const statusMap: Record<string, string> = {
    [ProjectStatus.InProgress]: "In Progress",
    [ProjectStatus.Completed]: "Completed",
    [ProjectStatus.Planned]: "Planned",
  };

  return statusMap[status] || status;
}
