import type { LucideIcon } from "lucide-react";

export interface NavItem {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
}

// Navigation is intentionally empty until the new game's content types are
// finalised; category modules and MDX files are rebuilt in later steps.
export const NAVIGATION_CONFIG: NavItem[] = [];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
