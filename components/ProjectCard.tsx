import {
  ArrowUpRight,
  FileJson,
  Github,
  Network,
  Share2,
  Terminal,
} from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  stack?: string[];
}

const TechIcons: Record<string, React.ReactNode> = {
  React: (
    <svg
      viewBox="0 0 24 24"
      className="w-3.5 h-3.5 fill-current"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm-2-4v2h6v-2H9z"
        fill="none"
      />
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
        fill="currentColor"
        opacity="0.5"
      />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <g transform="rotate(60 12 12)">
        <ellipse
          cx="12"
          cy="12"
          rx="9"
          ry="3.5"
          fill="none"
          stroke="currentColor"
        />
      </g>
      <g transform="rotate(-60 12 12)">
        <ellipse
          cx="12"
          cy="12"
          rx="9"
          ry="3.5"
          fill="none"
          stroke="currentColor"
        />
      </g>
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.5"
        fill="none"
        stroke="currentColor"
      />
    </svg>
  ),
  "Next.js": (
    <svg
      viewBox="0 0 24 24"
      className="w-3.5 h-3.5 fill-current"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.665 21.01L14.75 15.655L14.165 14.865V21H12.33V3H14.165L18.665 9.15V3H20.495V21.01H18.665ZM5.49499 3H3.5V21H5.49499V3Z"
        fill="currentColor"
      />
    </svg>
  ),
  Rust: (
    <svg
      viewBox="0 0 24 24"
      className="w-3.5 h-3.5 fill-current"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.03 9.423a.138.138 0 00-.135-.164l-1.928-.052a.14.14 0 01-.132-.178l.63-1.824a.14.14 0 00-.106-.184l-1.895-.418a.138.138 0 01-.09-.2l.965-1.674a.14.14 0 00-.063-.2l-1.782-.777a.14.14 0 01-.053-.217l1.246-1.482a.14.14 0 00-.016-.21l-1.587-1.118a.14.14 0 01-.004-.222l1.464-1.264a.139.139 0 00.03-.207L16.99.308a.14.14 0 00-.184-.105l-1.824.63a.14.14 0 01-.178-.132l-.052-1.928a.139.139 0 00-.164-.135L12 1.342l-2.588-1.704a.139.139 0 00-.164.135l-.052 1.928a.14.14 0 01-.178.132l-1.824-.63a.14.14 0 00-.184.105l-1.584 2.701a.139.139 0 00.03.207l1.464 1.264a.14.14 0 01-.004.222l-1.587 1.118a.14.14 0 00-.016.21l1.246 1.482a.14.14 0 01-.053.217l-1.782.777a.14.14 0 00-.063.2l.965 1.674a.138.138 0 01-.09.2l-1.895.418a.14.14 0 00-.106.184l.63 1.824a.14.14 0 01-.132.178l-1.928.052a.138.138 0 00-.135.164l1.704 2.588-1.704 2.588a.138.138 0 00.135.164l1.928.052a.14.14 0 01.132.178l-.63 1.824a.14.14 0 00.106.184l1.895.418a.138.138 0 01.09.2l-.965 1.674a.14.14 0 00.063.2l1.782.777a.14.14 0 01.053.217l-1.246 1.482a.14.14 0 00.016.21l1.587 1.118a.14.14 0 01.004.222l-1.464 1.264a.139.139 0 00-.03.207l1.584 2.701a.14.14 0 00.184.105l1.824-.63a.14.14 0 01.178.132l.052 1.928a.139.139 0 00.164.135L12 22.658l2.588 1.704a.139.139 0 00.164-.135l.052-1.928a.14.14 0 01.178-.132l1.824.63a.14.14 0 00.184-.105l1.584-2.701a.139.139 0 00-.03-.207l-1.464-1.264a.14.14 0 01.004-.222l1.587-1.118a.14.14 0 00.016-.21l-1.246-1.482a.14.14 0 01.053-.217l1.782-.777a.14.14 0 00.063-.2l-.965-1.674a.138.138 0 01.09-.2l1.895-.418a.14.14 0 00.106-.184l-.63-1.824a.14.14 0 01.132-.178l1.928-.052a.138.138 0 00.135-.164l-1.704-2.588 1.704-2.588zM6.5 16.5A1.5 1.5 0 118 18a1.5 1.5 0 01-1.5-1.5zm3.5-5a1.5 1.5 0 111.5 1.5A1.5 1.5 0 0110 11.5zm5 5a1.5 1.5 0 111.5 1.5A1.5 1.5 0 0115 16.5zm3.5-5a1.5 1.5 0 111.5 1.5A1.5 1.5 0 0118.5 11.5z"
        fill="currentColor"
      />
    </svg>
  ),
  Tailwind: (
    <svg
      viewBox="0 0 24 24"
      className="w-3.5 h-3.5 fill-current"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.001 5.4c-2.3 0-3.9 1.5-3.9 1.5s1.3-1.4 3.1-1.4c1.1 0 1.9.3 2.5.7.9.6 1.3 1.5 2.1 3.4 1 2.5 3 4.1 6.2 3.8h.2c-2.5 0-4-1.7-4-1.7s1.3 1.4 3.1 1.4c1.2 0 2.1-.5 2.7-1.3.8-1 1.1-2.4 2.1-4.7C27.5 3 24.3 1 20 1h-.2c2.5 0 4 1.7 4 1.7s-1.3-1.4-3.1-1.4c-1.3 0-2.2.5-2.9 1.4-.9 1.2-1.3 2.7-2.3 5C14.001 11 11.001 13 6.601 13h-.2c2.5 0 4 1.7 4 1.7s-1.3-1.4-3.1-1.4c-1.2 0-2.1.5-2.7 1.3-.8 1-1.1 2.4-2.1 4.7-1.3 3.1-3.9 4.4-6.5 4.4H-4c2.3 0 3.9-1.5 3.9-1.5s-1.3 1.4-3.1 1.4c-1.1 0-1.9-.3-2.5-.7-.9-.6-1.3-1.5-2.1-3.4-1-2.5-3-4.1-6.2-3.8h-.2c2.5 0 4 1.7 4 1.7s-1.3-1.4-3.1-1.4c-1.2 0-2.1.5-2.7 1.3-.8 1-1.1 2.4-2.1 4.7-1.3 3.1-3.9 4.4-6.5 4.4h-2"
        fill="currentColor"
      />
    </svg>
  ),
  OpenAI: (
    <svg
      viewBox="0 0 24 24"
      className="w-3.5 h-3.5 fill-current"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1195 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7865a4.4944 4.4944 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.09-1.1069l2.445-1.4116 2.445 1.4116v2.7913l-2.445 1.4164-2.445-1.4164z"
        fill="currentColor"
      />
    </svg>
  ),
  Vercel: (
    <svg
      viewBox="0 0 24 24"
      className="w-3.5 h-3.5 fill-current"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 1L24 22H0L12 1Z" fill="currentColor" />
    </svg>
  ),
  "D3.js": <span className="font-bold text-[9px] tracking-tighter">D3</span>,
  JSON: <FileJson size={14} />,
  "VS Code API": <Terminal size={14} />,
  Networking: <Network size={14} />,
  P2P: <Share2 size={14} />,
};

export function ProjectCard({
  title,
  description,
  githubUrl,
  liveUrl,
  stack,
}: ProjectCardProps) {
  return (
    <div className="group terminal-window transition-all hover:border-accent-red/80 h-full flex flex-col">
      <div className="terminal-header flex items-center justify-between py-2 px-4 border-b border-white/5 bg-white/[0.02]">
        <div className="font-label text-[9px] text-white/40 tracking-[0.2em]">
          OBJ: {title.toUpperCase()}
        </div>
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-white/10 group-hover:bg-red-500/50 transition-colors"></div>
          <div className="w-2 h-2 bg-white/10 group-hover:bg-yellow-500/50 transition-colors"></div>
          <div className="w-2 h-2 bg-white/10 group-hover:bg-green-500/50 transition-colors"></div>
        </div>
      </div>

      <div className="p-6 md:p-8 space-y-6 flex-1 flex flex-col">
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
          <h3 className="text-xl font-heading tracking-wider text-white group-hover:text-accent-red transition-colors shrink-0">
            {title}
          </h3>

          {stack && (
            <div className="flex flex-wrap gap-2">
              {stack.map((tech) => (
                <div
                  key={tech}
                  title={tech}
                  className="w-6 h-6 flex items-center justify-center bg-white/5 border border-white/10 text-white/60 hover:text-accent-cyan hover:border-accent-cyan hover:bg-accent-cyan/10 transition-all rounded-sm cursor-help"
                >
                  {TechIcons[tech] || <Terminal size={12} />}
                </div>
              ))}
            </div>
          )}
        </div>

        <p className="font-body text-sm leading-relaxed opacity-60 flex-1">
          <span className="text-accent-red mr-2">&gt;</span>
          {description}
        </p>

        <div className="pt-6 border-t border-white/5 flex items-center justify-between">
          <div className="flex gap-4">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors flex items-center gap-2 text-xs font-mono uppercase"
              >
                <Github size={14} />
                <span>Source</span>
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-accent-red transition-colors flex items-center gap-2 text-xs font-mono uppercase"
              >
                <ArrowUpRight size={14} />
                <span>Deploy</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
