import { Github, Terminal, Twitter } from "lucide-react";
import { ContributionLog } from "@/components/ContributionLog";
import { ProjectCard } from "@/components/ProjectCard";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  const projects = [
    {
      title: "AI-SDK",
      description:
        "An open-source Rust library for building AI Powered Applications, inspired by the Vercel AI SDK.",
      githubUrl: "https://github.com/lazy-hq/aisdk",
      liveUrl: "https://aisdk.rs",
      stack: ["Rust"],
    },
    {
      title: "G",
      description:
        "AI agent for github repositories. modernizing the way we collaborate.",
      githubUrl: "https://github.com/ishaksebsib/g",
      stack: ["Rust"],
    },
    {
      title: "Distributed_Log_Service",
      description:
        "A scalable and fault-tolerant distributed log service written in Go, inspired by Apache Kafka. Explores replication, consensus, and networking in distributed systems.",
      githubUrl: "https://github.com",
      stack: ["Golang", "Grpc", "Distributed Systems"],
    },
    {
      title: "Helix_DB (Active Contributor)",
      description:
        "HelixDB is an open-source graph-vector database built from scratch in Rust.",
      stack: ["Rust"],
      githubUrl: "https://github.com/HelixDB/helix-db",
    },
  ];

  return (
    <main className="space-y-20">
      {/* HEADER / NAV */}
      <header className="flex justify-between items-end border-b border-border pb-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-heading tracking-widest text-foreground mb-2">
            ISHAK <span className="text-accent-red">SEBSIB</span>
          </h1>
          <div className="font-label text-muted-foreground flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 animate-pulse"></span>
            SYS.ONLINE // ishak.io
          </div>
        </div>
        <div className="hidden md:flex gap-8 font-label text-xs">
          <a
            href="#logs"
            className="hover:text-accent-cyan hover:underline decoration-accent-cyan underline-offset-4 pointer-events-auto cursor-pointer"
          >
            [ OPEN_SOURCE ]
          </a>
          <a
            href="#projects"
            className="hover:text-accent-red hover:underline decoration-accent-red underline-offset-4 pointer-events-auto cursor-pointer"
          >
            [ PROJECTS ]
          </a>
          <a
            href="#blog"
            className="hover:text-accent-green hover:underline decoration-accent-green underline-offset-4 pointer-events-auto cursor-pointer"
          >
            [ BLOG ]
          </a>
          <ThemeToggle />
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8">
        {/* Intro Terminal */}
        <div className="terminal-window flex flex-col h-full min-h-[300px]">
          <div className="terminal-header flex justify-between items-center">
            <span className="font-label text-muted-foreground">USR_BIO.TXT</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 border border-border"></div>
              <div className="w-3 h-3 border border-border"></div>
              <div className="w-3 h-3 border border-border bg-border"></div>
            </div>
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center flex-1 space-y-6">
            <div className="font-heading text-xl text-foreground mb-4">
              <span className="text-accent-red mr-2">&gt;</span>
              Curious by nature.
            </div>

            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
              I engineer high-performance software across low-level systems and
              modern full-stack architectures, with a particular passion for
              developer tools.
            </p>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/ishaksebsib"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-terminal border border-border px-6 py-2 hover:bg-foreground hover:text-background transition-colors font-label flex items-center gap-2"
              >
                <Github size={14} /> GITHUB_
              </a>
              <a
                href="https://x.com/IshakSebsib"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-terminal border border-border px-6 py-2 hover:bg-accent-cyan hover:text-black transition-colors font-label flex items-center gap-2"
              >
                <Twitter size={14} /> TWITTER_
              </a>
            </div>
          </div>
        </div>

        {/* Stats / Quick Info */}
        <div className="space-y-4 flex flex-col">
          <div className="terminal-window p-6 flex-1 hover:border-accent-green/50 transition-colors group">
            <div className="font-label text-accent-green mb-2">
              CURRENT_STATUS
            </div>
            <div className="text-2xl text-foreground font-mono">
              Building{" "}
              <a
                href="https://aisdk.rs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-green underline decoration-accent-green/30 underline-offset-4 transition-all"
              >
                AI-SDK
              </a>
            </div>
          </div>

          <div className="terminal-window p-6 flex-1 hover:border-accent-cyan/50 transition-colors group">
            <div className="font-label text-accent-cyan mb-2">
              STACK_PREF
            </div>
            <div className="text-lg text-muted-foreground font-mono">
              TS / Rust / Ocaml
            </div>
          </div>

          <div className="terminal-window p-6 flex-1 hover:border-accent-red/50 transition-colors group">
            <div className="font-label text-accent-red mb-2">
              LOCATION
            </div>
            <div className="text-xl text-foreground font-mono">ETH_ // Remote</div>
          </div>
        </div>
      </section>

      {/* OPEN SOURCE / CONTRIBUTIONS SECTION */}
      <section id="logs" className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 bg-accent-cyan"></div>
          <h2 className="font-heading text-2xl text-foreground">
            OPEN_SOURCE_CONTRIBUTIONS
          </h2>
          <div className="h-px bg-border flex-1"></div>
        </div>

        <p className="font-mono text-sm text-muted-foreground max-w-3xl">
          <span className="text-accent-red mr-2">&gt;</span>
          Actively participating in the open-source ecosystem. You can inspect
          my contributions to major repositories like{" "}
          <span className="text-foreground">Vercel</span>,{" "}
          <span className="text-foreground">Tailwind Labs</span>, and{" "}
          <span className="text-foreground">React</span> below.
        </p>

        <div className="w-full">
          <ContributionLog />
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 bg-accent-red"></div>
          <h2 className="font-heading text-2xl text-foreground">PROJECTS</h2>
          <div className="h-px bg-border flex-1"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer id="contact" className="border-t border-border pt-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="font-heading text-xl text-foreground mb-2">
              INITIALIZE_CONNECTION
            </div>
            <p className="font-mono text-muted-foreground text-sm max-w-sm">
              Ready to collaborate on next-gen systems. Send a signal.
            </p>
          </div>

          <a
            href="mailto:hello@ishak.io"
            className="group terminal-window px-8 py-4 hover:bg-accent-red hover:text-black hover:border-accent-red transition-all cursor-pointer"
          >
            <div className="font-label opacity-50 group-hover:opacity-100 flex items-center gap-2">
              <Terminal size={12} />
              SEND_MAIL_TO
            </div>
            <div className="text-xl font-mono mt-1 text-foreground group-hover:text-black">hello@ishak.io</div>
          </a>
        </div>

        <div className="mt-20 border-t border-border pt-6 flex justify-between font-label text-[10px] text-muted-foreground/40">
          <div>
            <span className="bg-muted px-1">ISHAK_SEBSIB_PF_V2</span>
          </div>
          <div>
            <span className="bg-muted px-1">NO_COPYRIGHT // OPEN_PROTOCOL</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
