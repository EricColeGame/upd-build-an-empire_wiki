export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "UPD Build An Empire Wiki",
  shortName: "UPD Empire",
  logoText: "UPD",
  tagline: "Codes, Guides, Upgrades & Empire Building Strategies",
  description: "Your ultimate guide to UPD Build An Empire on Roblox! Explore active working codes, beginner guides, upgrade tips, building strategies, and empire progression.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://upd-build-an-empire.wiki",
  supportEmail: "support@upd-build-an-empire.wiki",
  gameUrl: "https://www.roblox.com/games/119858060335682/Build-an-Empire",
  heroVideoId: "A5AkAN1FBbo", // Roblox [UPD] Build an Empire gameplay showcase (DexaroGG)
  social: {
    discord: "https://www.roblox.com/communities/34815389/The-Art-Of-Games",
    youtube: "https://www.youtube.com/watch?v=A5AkAN1FBbo",
  },
  locales: ["en", "es", "pt", "de"],
  defaultLocale: "en",
};
