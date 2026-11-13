export interface Project {
  name: string;
  description: string;
  /** My part in it. Shown first so stars are never read as solo credit. */
  role: "Creator" | "Co-creator" | "Contributor" | "Active contributor";
  /** Fallback label when there's no traction worth showing; omit to show nothing. */
  language?: string;
  href: string;
  /** `owner/name` on GitHub, for the star count. */
  repo?: string;
  /** crates.io name, for the download count. */
  crate?: string;
  /** Shown on the home page. */
  featured?: boolean;
}

// Display order is curated, not by date. Keep it as is.
export const projects: Project[] = [
  {
    name: "aisdk",
    description: "The AI toolkit for Rust, inspired by the Vercel AI SDK.",
    role: "Co-creator",
    language: "Rust",
    href: "https://aisdk.rs/",
    repo: "lazy-hq/aisdk",
    crate: "aisdk",
    featured: true,
  },
  {
    name: "helix-db",
    description: "Open-source graph-vector database built from scratch in Rust.",
    role: "Active contributor",
    language: "Rust",
    href: "https://github.com/HelixDB/helix-db",
    repo: "HelixDB/helix-db",
    featured: true,
  },
  {
    name: "xmux",
    description: "Control your coding agents from anywhere: Discord, Slack, or Telegram.",
    role: "Creator",
    href: "https://github.com/ishaksebsib/xmux",
    repo: "ishaksebsib/xmux",
    featured: true,
  },
  {
    name: "opencode-tree",
    description: "Tree plugin for the OpenCode TUI.",
    role: "Creator",
    language: "TypeScript",
    href: "https://github.com/ishaksebsib/opencode-tree",
    repo: "ishaksebsib/opencode-tree",
    featured: true,
  },
  {
    name: "distributed-log-service",
    description: "Fault-tolerant distributed log service, inspired by Apache Kafka. Replication, consensus, and networking.",
    role: "Creator",
    language: "Go",
    href: "https://github.com/ishaksebsib/distributed-log-service",
    repo: "ishaksebsib/distributed-log-service",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

/** Below this, a star count hurts more than it helps, so it's hidden. */
export const MIN_STARS = 50;
