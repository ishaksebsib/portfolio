import { Activity, Database, GitCommit, Server } from "lucide-react";

interface Contribution {
  hash: string;
  type: "PR" | "MERGE";
  repo: string;
  desc: string;
  time: string;
  graph: "start" | "mid" | "merge" | "end";
  link: string;
}

export function ContributionLog() {
  const contributions: Contribution[] = [
    {
      hash: "a4f12d8",
      type: "PR",
      repo: "vercel/next.js",
      desc: "fix(router): hydration mismatch in streaming",
      time: "2h ago",
      graph: "start", // *
      link: "https://github.com/vercel/next.js/pulls",
    },
    {
      hash: "b2c31e9",
      type: "MERGE",
      repo: "tailwindlabs/tailwindcss",
      desc: "feat(util): add sharp-edge support",
      time: "5h ago",
      graph: "merge", // |\
      link: "https://github.com/tailwindlabs/tailwindcss/pulls",
    },
    {
      hash: "d4e51f0",
      type: "PR",
      repo: "shadcn/ui",
      desc: "chore: update accordion tokens",
      time: "1d ago",
      graph: "mid", // | *
      link: "https://github.com/shadcn-ui/ui/pulls",
    },
    {
      hash: "e6a72b1",
      type: "PR",
      repo: "facebook/react",
      desc: "docs: clarify useOptimistic usage",
      time: "2d ago",
      graph: "end", // |/
      link: "https://github.com/facebook/react/pulls",
    },
  ];

  return (
    <div className="terminal-window h-full flex flex-col font-mono text-sm border border-border">
      {/* Complex Header / Stats Bar */}
      <div className="bg-muted border-b border-border p-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-[10px] tracking-widest text-muted-foreground">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-accent-cyan">
            <Activity size={12} /> TOTAL_PULL_REQUESTS
          </div>
          <div className="text-foreground text-lg font-bold">
            450<span className="text-accent-cyan animate-pulse">+</span>
          </div>
          <div>CONTRIBUTIONS_2025</div>
        </div>
        <div className="flex flex-col gap-1 border-l border-border pl-4">
          <div className="flex items-center gap-2 text-accent-green">
            <Server size={12} /> REPOSITORIES
          </div>
          <div className="text-foreground text-lg font-bold">12</div>
          <div>ACTIVE_PROJECTS</div>
        </div>
        <div className="flex flex-col gap-1 border-l border-border pl-4">
          <div className="flex items-center gap-2 text-accent-red">
            <Database size={12} /> MERGE_RATE
          </div>
          <div className="text-foreground text-lg font-bold">99.9%</div>
          <div>CODE_ACCURACY</div>
        </div>
        <div className="hidden md:flex flex-col gap-1 border-l border-border pl-4 justify-end items-end opacity-50">
          <div className="text-right">git log --graph --oneline</div>
          <div className="text-[8px]">HEAD -&gt; main, origin/main</div>
        </div>
      </div>

      {/* Git Graph Body */}
      <div className="p-6 md:p-8 space-y-1 bg-card/40 flex-1 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
          <GitCommit size={120} />
        </div>

        {contributions.map((c) => (
          <a
            key={c.hash}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 group cursor-pointer relative z-10 hover:bg-muted/20 -mx-4 px-4 py-2 transition-colors border-b border-border/30 last:border-b-0"
          >
            {/* ASCII Graph Column */}
            <div className="font-mono text-muted-foreground/40 whitespace-pre leading-none pt-1 select-none">
              {c.graph === "start" && (
                <span className="text-accent-cyan">*</span>
              )}
              {c.graph === "merge" && (
                <span className="text-purple-400">|\</span>
              )}
              {c.graph === "mid" && (
                <span className="text-muted-foreground/30">| *</span>
              )}
              {c.graph === "end" && (
                <span className="text-muted-foreground/30">|/</span>
              )}
            </div>

            {/* Commit Details */}
            <div className="flex-1 flex flex-col md:flex-row md:items-center gap-1 md:gap-4 pb-4 border-l border-border pl-4 ml-1 md:border-0 md:pl-0 md:ml-0 md:pb-0">
              <span className="text-muted-foreground text-xs">[{c.hash}]</span>
              <span
                className={`text-[10px] font-bold px-2 py-0.5 border ${
                  c.type === "PR"
                    ? "border-accent-blue bg-accent-blue/10 text-accent-blue"
                    : "border-accent-purple bg-accent-purple/10 text-accent-purple"
                }`}
              >
                {c.type}
              </span>
              <div className="flex-1 truncate">
                <span className="text-muted-foreground mr-2 group-hover:text-foreground transition-colors">
                  {c.repo}
                </span>
                <span className="text-foreground/80 group-hover:text-red-600 transition-colors">
                  {c.desc}
                </span>
              </div>
              <span className="text-[10px] text-muted-foreground/40 whitespace-nowrap">
                {c.time}
              </span>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity text-accent-cyan text-[10px] pointer-events-none">
                [OPEN_LINK]
              </div>
            </div>
          </a>
        ))}

        <div className="pl-0 md:pl-8 text-muted-foreground/30 pt-2 animate-pulse">
          <span className="mr-2">|</span>
          <span className="text-[10px]">waiting for stream...</span>
        </div>
      </div>
    </div>
  );
}
