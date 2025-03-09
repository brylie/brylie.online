import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Define the ProjectCategory enum as a Zod enum
const ProjectCategory = z.enum(["software", "music", "education"]);

// Define the ProjectStatus enum as a Zod enum
const ProjectStatus = z.enum(["in-progress", "completed", "planned"]);

// Define the Project schema using Zod
const projects = defineCollection({
  // Change from file loader to glob loader
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    // Basic information every project should have
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    url: z.string().url(), // Added URL validation

    // Project categorization and metadata
    category: ProjectCategory,
    featured: z.boolean(),
    status: ProjectStatus,
    datePublished: z.coerce.date(), // Changed to date type for better date handling
    lastUpdated: z.coerce.date().optional(),

    // Optional detailed information
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    githubUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),

    // Additional details for the portfolio page
    longDescription: z.string().optional(),
    achievements: z.array(z.string()).optional(),
    technologies: z.array(z.string()).optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z
    .object({
      title: z.string(),
      slug: z.string(),
      datePublished: z.coerce.date(),
      dateModified: z.coerce.date().optional(),
      description: z.string(),
      author: z.string(),
      image: z
        .object({
          url: z.string().url(),
          alt: z.string(),
        })
        .optional(),
      tags: z.array(z.string()),
      headline: z.string().optional(),
    })
    .transform((post) => ({
      ...post,
      formattedDate: new Date(post.datePublished).toLocaleDateString(
        undefined,
        {
          year: "numeric",
          month: "short",
          day: "numeric",
        },
      ),
    })),
});

export const collections = {
  blog,
  projects,
};
