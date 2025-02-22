import type { Project } from "./projects";
import { ProjectCategory, ProjectStatus } from "./projects";

// Validation function that checks for duplicate titles
function validateUniqueTitles(projects: Project[]): void {
  const titleMap = new Map<string, string[]>();

  projects.forEach((project) => {
    const projectIdentifier = `"${project.title}" (${project.category})`;

    if (!titleMap.has(project.title)) {
      titleMap.set(project.title, [projectIdentifier]);
    } else {
      titleMap.get(project.title)?.push(projectIdentifier);
    }
  });

  const duplicates = Array.from(titleMap.entries()).filter(
    ([_, projects]) => projects.length > 1,
  );

  if (duplicates.length > 0) {
    const errorMessages = duplicates.map(([title, projects]) => {
      return `Title "${title}" is used by multiple projects:\n  ${projects.join("\n  ")}`;
    });

    throw new Error(
      "Duplicate titles found:\n\n" +
        errorMessages.join("\n\n") +
        "\n\nEach project must have a unique title.",
    );
  }
}

export const projects: Project[] = [
  {
    title: "Piano Fitness",
    description:
      "An open-source app to practice piano chords, arpeggios, and scales.",
    longDescription:
      "Piano fitness app - focusing on technique to supplement your repertoire practice. MIDI keyboard exercises, progress tracking. For piano students and teachers. Built with Godot.",
    url: "https://github.com/brylie/piano-fitness-app",
    category: ProjectCategory.Software,
    featured: true,
    status: ProjectStatus.InProgress,
    datePublished: "2024-02-20",
    lastUpdated: "2024-02-20",
    tags: ["Music Theory", "Piano"],
    technologies: ["Godot", "GDScript", "MIDI"],
    githubUrl: "https://github.com/brylie/piano-fitness-app",
    achievements: [
      "Added initial chord, scale, and arpeggio exercises",
      "Implemented MIDI keyboard input",
    ],
  },
  {
    title: "Dart for Everybody",
    description: "A textbook for learning the Dart programming language.",
    url: "https://flutterfriends.github.io/Dart-for-Everybody/",
    githubUrl: "https://github.com/FlutterFriends/Dart-for-Everybody",
    category: ProjectCategory.Education,
    featured: true,
    status: ProjectStatus.Completed,
    datePublished: "2023-11-13",
    tags: ["Dart", "Textbook", "Education"],
    technologies: ["JavaScript", "Markdown", "Quarto", "GitHub Pages"],
  },
  {
    title: "Tides of Change",
    description:
      "This instrumental album offers a mix of peaceful piano melodies, heartfelt folk tunes, and darker electronic soundscapes, creating a journey of varied moods for quiet listening.",
    longDescription:
      "This album is a diverse collection of instrumental pieces exploring a range of emotions and sonic landscapes. From the gentle, reflective piano melodies of classical influence and serene folk ballads featuring acoustic instruments, to darker, more experimental electronic tracks with industrial and ambient textures, the album journeys through melancholic introspection, heartfelt yearning, and unsettling atmospheres. It showcases a blend of acoustic and electronic instrumentation, unified by a focus on evocative mood creation and atmospheric depth, perfect for cinematic soundscapes and introspective listening.",
    url: "https://soundcloud.com/brylie/sets/tides-of-change",
    category: ProjectCategory.Music,
    featured: true,
    status: ProjectStatus.Completed,
    datePublished: "2024-11-17",
    tags: ["Ambient", "Electronic", "Orchestral"],
  },
  {
    title: "Murmurations",
    description:
      "A collection of ambient music pieces exploring the intersection of electronic and traditional musical elements.",
    url: "https://soundcloud.com/brylie/sets/murmurations",
    category: ProjectCategory.Music,
    featured: true,
    status: ProjectStatus.Completed,
    datePublished: "2024-07-31",
    tags: ["Ambient", "Electronic", "Orchestral"],
  },
  {
    title: "Flutter Friends",
    description:
      "A community-driven initiative to create educational resources for Flutter developers.",
    url: "https://flutterfriends.dev/",
    githubUrl: "https://github.com/FlutterFriends",
    category: ProjectCategory.Education,
    featured: true,
    status: ProjectStatus.InProgress,
    datePublished: "2023-11-13",
    tags: ["Flutter", "Dart", "Education"],
    technologies: ["Dart", "Flutter", "GitHub Pages"],
  },
  {
    title: "WesternFriend.org",
    description:
      "A website for Western Friend (westernfriend.org), a Quaker publication that provides resources and support for Quaker communities and individuals seeking to live out their faith in the world. Western Friend is part of the Religious Society of Friends.",
    url: "https://westernfriend.org/",
    category: ProjectCategory.Software,
    featured: true,
    status: ProjectStatus.InProgress,
    datePublished: "2023-11-13",
    tags: ["Quaker", "Religious Society of Friends", "Publication"],
    technologies: ["Python", "Django", "WagtailCMS", "JavaScript", "CSS"],
    githubUrl: "https://github.com/WesternFriend/westernfriend.org",
  },
  {
    title: "GeriLife",
    description:
      "Promoting wellness and independence for older adults by helping coordinate care and support.",
    url: "https://github.com/GeriLife",
    githubUrl: "https://github.com/GeriLife",
    category: ProjectCategory.Software,
    featured: false,
    status: ProjectStatus.Completed,
    datePublished: "2023-11-13",
    tags: ["Health", "Wellness", "Aging"],
    technologies: ["JavaScript", "Meteor.js", "Vue.js", "CSS"],
  },
];

// Validate titles when the module loads
validateUniqueTitles(projects);
