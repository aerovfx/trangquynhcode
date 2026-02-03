/**
 * Application-wide constants and configuration
 */
export const config = {
  // Base URL
  baseUrl: "https://trangquynhcode.ai",

  // GitHub
  github: {
    repoUrl: "https://github.com/anomalyco/trangquynhcode",
    starsFormatted: {
      compact: "70K",
      full: "70,000",
    },
  },

  // Social links
  social: {
    twitter: "https://x.com/trangquynhcode",
    discord: "https://discord.gg/trangquynhcode",
  },

  // Static stats (used on landing page)
  stats: {
    contributors: "500",
    commits: "7,000",
    monthlyUsers: "650,000",
  },
} as const
