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

// Our collection of projects
export const projects: Project[] = [
    {
        title: "Piano Fitness",
        description: "An open-source app to practice piano chords, arpeggios, and scales.",
        longDescription: "Piano fitness app - focusing on technique to supplement your repertoire practice. MIDI keyboard exercises, progress tracking. For piano students and teachers. Built with Godot.",
        url: "https://github.com/brylie/piano-fitness-app",
        category: "software",
        featured: true,
        status: "in-progress",
        datePublished: "2024-02-20",
        lastUpdated: "2024-02-20",
        tags: ["Music Theory", "Piano"],
        technologies: ["Godot", "GDScript", "MIDI",],
        githubUrl: "https://github.com/brylie/piano-fitness-app",
        achievements: [
            "Added initial chord, scale, and arpeggio exercises",
            "Implemented MIDI keyboard input",
        ]
    },
    {
        title: "Dart for Everybody",
        description: "A textbook for learning the Dart programming language.",
        url: "https://flutterfriends.github.io/Dart-for-Everybody/",
        githubUrl: "https://github.com/FlutterFriends/Dart-for-Everybody",
        category: "education",
        featured: true,
        status: "completed",
        datePublished: "2023-11-13",
        tags: ["Dart", "Textbook", "Education"],
        technologies: ["JavaScript", "Markdown", "Quarto", "GitHub Pages"],
    },
    {
        title: "Tides of Change",
        description: "This instrumental album offers a mix of peaceful piano melodies, heartfelt folk tunes, and darker electronic soundscapes, creating a journey of varied moods for quiet listening.",
        longDescription: "This album is a diverse collection of instrumental pieces exploring a range of emotions and sonic landscapes. From the gentle, reflective piano melodies of classical influence and serene folk ballads featuring acoustic instruments, to darker, more experimental electronic tracks with industrial and ambient textures, the album journeys through melancholic introspection, heartfelt yearning, and unsettling atmospheres. It showcases a blend of acoustic and electronic instrumentation, unified by a focus on evocative mood creation and atmospheric depth, perfect for cinematic soundscapes and introspective listening.",
        url: "https://soundcloud.com/brylie/sets/tides-of-change",
        category: "music",
        featured: true,
        status: "completed",
        datePublished: "2024-11-17",
        tags: ["Ambient", "Electronic", "Orchestral"]
    },
    // SoundCloud album: https://soundcloud.com/brylie/sets/murmurations
    {
        title: "Murmurations",
        description: "A collection of ambient music pieces exploring the intersection of electronic and traditional musical elements.",
        url: "https://soundcloud.com/brylie/sets/murmurations",
        category: "music",
        featured: true,
        status: "completed",
        datePublished: "2024-07-31",
        tags: ["Ambient", "Electronic", "Orchestral"]
    }
];

// Helper functions to filter and sort projects
export function getFeaturedProjects(): Project[] {
    return projects
        .filter(project => project.featured)
        .sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime());
}

export function getProjectsByCategory(category: Project['category']): Project[] {
    return projects
        .filter(project => project.category === category)
        .sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime());
}

export function getAllProjects(): Project[] {
    return [...projects].sort((a, b) =>
        new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
    );
}