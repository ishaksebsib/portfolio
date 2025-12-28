import { ArrowUpRight } from "lucide-react";
import { type SimpleIcon, siGithub } from "simple-icons";

interface ProjectCardProps {
  title: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  stack?: SimpleIcon[];
}

// Icon component using simple-icons
const Icon = ({
  icon,
  size = 14,
  ariaLabel,
}: {
  icon: { path: string };
  size?: number;
  ariaLabel?: string;
}) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    aria-label={ariaLabel}
  >
    <path d={icon.path} />
  </svg>
);

export function ProjectCard({
  title,
  description,
  githubUrl,
  liveUrl,
  stack,
}: ProjectCardProps) {
  return (
    <div className="group terminal-window transition-all duration-200 hover:border-accent-red/80 hover:shadow-lg hover:shadow-accent-red/5 h-full flex flex-col focus-ring">
      <div className="terminal-header flex items-center justify-between py-2 px-4 border-b border-border bg-muted/30">
        <div className="font-label text-[9px] text-muted-foreground tracking-[0.2em]">
          OBJ: {title.toUpperCase()}
        </div>
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-foreground/10 group-hover:bg-red-500/50 transition-colors"></div>
          <div className="w-2 h-2 bg-foreground/10 group-hover:bg-yellow-500/50 transition-colors"></div>
          <div className="w-2 h-2 bg-foreground/10 group-hover:bg-green-500/50 transition-colors"></div>
        </div>
      </div>

      <div className="p-6 md:p-8 space-y-6 flex-1 flex flex-col">
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
          <h3 className="text-xl font-heading tracking-wider text-foreground group-hover:text-accent-red transition-colors shrink-0">
            {title}
          </h3>

          {stack && (
            <div className="hidden sm:flex flex-wrap gap-2">
              {stack.map((tech) => (
                <div
                  key={tech.title}
                  title={tech.title}
                  className="w-6 h-6 flex items-center justify-center bg-card border border-border text-muted-foreground hover:text-accent-cyan hover:border-accent-cyan hover:bg-accent-cyan/10 transition-all rounded-sm cursor-help"
                >
                  <Icon size={18} icon={tech} ariaLabel={tech.title} />
                </div>
              ))}
            </div>
          )}
        </div>

        <p className="font-body text-sm leading-relaxed opacity-75 flex-1">
          <span className="text-accent-red mr-2">&gt;</span>
          {description}
        </p>

        <div className="pt-6 border-t border-border flex items-center justify-between">
          <div className="flex gap-4">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-xs font-mono uppercase"
              >
                <Icon icon={siGithub} ariaLabel="GitHub" />
                <span className="mt-1">Source</span>
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent-red transition-colors flex items-center gap-2 text-xs font-mono uppercase"
              >
                <ArrowUpRight size={14} />
                <span className="mt-1">Live</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
