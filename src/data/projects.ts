export interface Project {
  name: string;
  description: string;
  /** Month the project started, shown as e.g. "Apr 2026". */
  date: Date;
  /** Short mono tag: main language or role. */
  meta: string;
  href: string;
  /** Shown on the home page. */
  featured?: boolean;
}

// Display order is curated, not by date. Dates are repo creation (or first contribution for helix-db).
export const projects: Project[] = [
  {
    name: "aisdk",
    description: "The AI toolkit for Rust, inspired by the Vercel AI SDK.",
    date: new Date("2025-07-20"),
    meta: "rust",
    href: "https://aisdk.rs/",
    featured: true,
  },
  {
    name: "helix-db",
    description: "Open-source graph-vector database built from scratch in Rust. Active contributor.",
    date: new Date("2025-08-16"),
    meta: "rust",
    href: "https://github.com/HelixDB/helix-db",
    featured: true,
  },
  {
    name: "xmux",
    description: "Control OpenCode from anywhere: Discord, Slack, or Telegram.",
    date: new Date("2026-04-09"),
    meta: "ts",
    href: "https://github.com/ishaksebsib/xmux",
    featured: true,
  },
  {
    name: "opencode-tree",
    description: "Tree plugin for the OpenCode TUI.",
    date: new Date("2026-04-18"),
    meta: "ts",
    href: "https://github.com/ishaksebsib/opencode-tree",
    featured: true,
  },
  {
    name: "distributed-log-service",
    description: "Fault-tolerant distributed log service, inspired by Apache Kafka. Replication, consensus, and networking.",
    date: new Date("2025-02-24"),
    meta: "go",
    href: "https://github.com/ishaksebsib/distributed-log-service",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const formatMonth = (date: Date) =>
  date.toLocaleDateString("en-US", { month: "short", year: "numeric", timeZone: "UTC" });
