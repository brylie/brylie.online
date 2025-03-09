import { ProjectCategory } from "../types/projects";

export const categoryConfig = {
  [ProjectCategory.Software]: {
    color: "bg-blue-50 text-blue-900 border-blue-200",
    icon: "mdi:laptop",
    ariaLabel: "Software Development Project",
  },
  [ProjectCategory.Music]: {
    color: "bg-purple-50 text-purple-900 border-purple-200",
    icon: "mdi:music",
    ariaLabel: "Music Production Project",
  },
  [ProjectCategory.Education]: {
    color: "bg-green-50 text-green-900 border-green-200",
    icon: "mdi:book-open-page-variant",
    ariaLabel: "Educational Project",
  },
};
