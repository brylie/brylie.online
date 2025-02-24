import { getCollection, type CollectionEntry } from "astro:content";
import type { Project } from "../types/projects";
import { ProjectCategory } from "../types/projects";

/**
 * Get all featured projects, sorted by date
 * @returns Array of featured projects sorted by date (newest first)
 */
export async function getFeaturedProjects(): Promise<Project[]> {
  // Use the filter parameter in getCollection for better performance
  const featuredProjects = await getCollection(
    "projects",
    ({ data }: CollectionEntry<"projects">) => data.featured,
  );

  return featuredProjects.sort(
    (a: CollectionEntry<"projects">, b: CollectionEntry<"projects">): number =>
      new Date(b.data.datePublished).getTime() -
      new Date(a.data.datePublished).getTime(),
  );
}

/**
 * Get projects by category, sorted by date
 * @param category The project category to filter by
 * @returns Array of projects in the specified category sorted by date (newest first)
 */
export async function getProjectsByCategory(
  category: ProjectCategory,
): Promise<Project[]> {
  // Use the filter parameter in getCollection for better performance
  const categoryProjects = await getCollection(
    "projects",
    ({ data }: CollectionEntry<"projects">) => data.category === category,
  );

  return categoryProjects.sort(
    (a: CollectionEntry<"projects">, b: CollectionEntry<"projects">) =>
      new Date(b.data.datePublished).getTime() -
      new Date(a.data.datePublished).getTime(),
  );
}

/**
 * Get all projects, sorted by date
 * @returns Array of all projects sorted by date (newest first)
 */
export async function getAllProjects(): Promise<Project[]> {
  const allProjects = await getCollection("projects");

  return allProjects.sort(
    (a: CollectionEntry<"projects">, b: CollectionEntry<"projects">) =>
      new Date(b.data.datePublished).getTime() -
      new Date(a.data.datePublished).getTime(),
  );
}

/**
 * Get a project by its slug (derived from title)
 * @param slug The generated slug from title
 * @returns The matching project or undefined if not found
 */
export async function getProjectBySlug(
  slug: string,
): Promise<Project | undefined> {
  const allProjects = await getCollection("projects");

  // Find a project whose title generates the given slug
  return allProjects.find((project: Project) => project.data.slug === slug);
}
