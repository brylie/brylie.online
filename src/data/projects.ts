export interface Project {
    // Basic information every project should have
    title: string;
    description: string;
    url: string;

    // Project categorization and metadata
    category: 'software' | 'music' | 'education';
    featured: boolean;  // Indicates if this should appear on the home page
    status: 'in-progress' | 'completed' | 'planned';
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
