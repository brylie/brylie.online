import { projects } from "./projectData";
import type { Project } from "./projects";
import { ProjectCategory } from "./projects";

export function getFeaturedProjects(): Project[] {
  return projects
    .filter((project) => project.featured)
    .sort(
      (a, b) =>
        new Date(b.datePublished).getTime() -
        new Date(a.datePublished).getTime(),
    );
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects
    .filter((project) => project.category === category)
    .sort(
      (a, b) =>
        new Date(b.datePublished).getTime() -
        new Date(a.datePublished).getTime(),
    );
}

export function getAllProjects(): Project[] {
  return [...projects].sort(
    (a, b) =>
      new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime(),
  );
}

// Helper function to generate a URL-friendly slug
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD") // Normalize Unicode characters
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .replace(/[^a-z0-9]+/g, "-") // Replace special characters with hyphens
    .replace(/(^-|-$)/g, ""); // Remove leading and trailing hyphens
}
