import { projects } from './projectData';
import type { Project } from './projects';
import { ProjectCategory } from './projects';

export function getFeaturedProjects(): Project[] {
    return projects
        .filter(project => project.featured)
        .sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime());
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
    return projects
        .filter(project => project.category === category)
        .sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime());
}

export function getAllProjects(): Project[] {
    return [...projects].sort((a, b) =>
        new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
    );
}
