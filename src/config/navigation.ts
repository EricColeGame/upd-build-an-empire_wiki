import type { LucideIcon } from "lucide-react";
import { Code2, Compass, Package, RefreshCw, Settings2, TrendingUp, Users } from "lucide-react";

export interface NavItem {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
}

// Category slugs mirror the article directories under content/<locale>/ and the
// categories produced by the long-tail keyword clustering for this game.
export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: Compass, isContentType: true },
  { key: "codes", path: "/codes", icon: Code2, isContentType: true },
  { key: "progression", path: "/progression", icon: TrendingUp, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Settings2, isContentType: true },
  { key: "items", path: "/items", icon: Package, isContentType: true },
  { key: "updates", path: "/updates", icon: RefreshCw, isContentType: true },
  { key: "community", path: "/community", icon: Users, isContentType: true },
] satisfies readonly NavItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
