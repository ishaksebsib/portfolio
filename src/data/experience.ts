export interface Role {
  role: string;
  company: string;
  /** First month in the role. */
  start: Date;
  /** Last month in the role; omit while current. */
  end?: Date;
  summary: string;
}

// Newest first. Back-to-back roles, May 2022 – present (4 yrs 7 mos as of Nov 2026).
export const experience: Role[] = [
  {
    role: "Full Stack AI Engineer",
    company: "Turing",
    start: new Date("2025-07-01"),
    summary: "Own AI product features end to end for client platforms serving 50k+ monthly users, from LLM integrations to multi-agent workflows.",
  },
  {
    role: "AI/ML Research Engineer",
    company: "SingularityNET",
    start: new Date("2024-11-01"),
    end: new Date("2025-06-01"),
    summary: "Research on MOSES, an evolutionary system that evolves interpretable programs to find patterns in biomedical and financial data.",
  },
  {
    role: "Full Stack Engineer",
    company: "iCog Labs",
    start: new Date("2023-05-01"),
    end: new Date("2024-10-01"),
    summary: "Designed and built Leyu.ai, where 500+ local annotators, many of them women and youth, collect culturally accurate AI training data in 5 Ethiopian languages.",
  },
  {
    role: "Frontend Developer",
    company: "TechSpotDEV",
    start: new Date("2022-05-01"),
    end: new Date("2023-04-01"),
    summary: "Turned client ideas into launched products, owning the frontend from first design to production.",
  },
];

/** Year range for the timeline, e.g. "2023 – 2024" or "2025 – now". */
export const formatPeriod = ({ start, end }: Role) => {
  const from = start.getUTCFullYear();
  const to = end ? end.getUTCFullYear() : "now";
  return from === to ? `${from}` : `${from} – ${to}`;
};
