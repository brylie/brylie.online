// Common color classes for tags and technologies
export const getTechnologyClasses = () =>
  "bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-800/40";

export const getTagClasses = () =>
  "bg-teal-100 text-teal-800 hover:bg-teal-200 dark:bg-teal-900/30 dark:text-teal-300 dark:hover:bg-teal-800/40";

// Common base classes for both tags and technologies
export const getCommonTagClasses = () =>
  "px-2.5 py-1 text-xs rounded-full transition-all duration-300 hover:scale-105";
