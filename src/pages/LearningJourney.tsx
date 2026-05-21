import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";
import { Code2, Server, FileCode, Palette, Clock, Wrench } from "lucide-react";

type Experiment = {
  title: string;
  description: string;
  status: string;
  duration: string;
  tools: string[];
  icon: React.ElementType;
  logo?: string;
};

const experiments: Experiment[] = [
  {
    title: "Learn Dart",
    description:
      "Learning the fundamentals of Dart, from its basic syntax to how the core concepts work together in building simple applications.",
    status: "learning",
    duration: "Ongoing · 2026",
    tools: ["SDK", "Flutter"],
    icon: Code2,
    logo: "https://cdn.simpleicons.org/dart/white",
  },
  {
    title: "Learn React.js",
    description:
      "Exploring how React works, from its structure to the way everything connects and runs together.",
    status: "learning",
    duration: "Ongoing · 2025 - now",
    tools: ["React", "Vite", "JSX", "TSX", "Tailwind CSS  "],
    icon: Code2,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    title: "Learn Laravel",
    description:
      "Exploring the fundamentals of Laravel, from how its structure works to handling routes, views, and simple database integration.",
    status: "learning",
    duration: "Ongoing · 2025 - now",
    tools: ["Laravel", "PHP", "MySQL"],
    icon: Server,
    logo: "https://cdn.simpleicons.org/laravel/FF2D20",
  },
  {
    title: "Learn JavaScript & TypeScript",
    description:
      "Learning the basics of JavaScript and TypeScript, from working with the DOM to understanding state and how everything behaves in a simple application.",
    status: "learning",
    duration: "Ongoing · 2024 — now",
    tools: ["JavaScript", "TypeScript", "DOM", "State"],
    icon: FileCode,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    title: "Learn HTML & CSS",
    description:
      "Learning the basics of HTML and CSS, from building simple page structures to styling layouts and understanding how everything comes together on the web.",
    status: "completed",
    duration: "2023 — 2024",
    tools: ["HTML", "CSS", "Bootstrap"],
    icon: Palette,
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  },
];

const statusStyles: Record<string, string> = {
  learning: "text-primary border-primary/30 bg-primary/5",
  completed: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5",
  paused: "text-muted-foreground border-border bg-secondary",
};

const dotStyles: Record<string, string> = {
  learning: "bg-primary shadow-[0_0_8px_2px_hsl(var(--primary)/0.35)]",
  completed: "bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.3)]",
  paused: "bg-muted-foreground",
};

const accentBar: Record<string, string> = {
  learning: "from-primary/20 to-transparent",
  completed: "from-emerald-500/20 to-transparent",
  paused: "from-border to-transparent",
};

const Labs = () => (
  <PageTransition>
    <div className="container pt-32 -mb-8">
      <Reveal>
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/60">
            / journey
          </span>
          <span className="h-px flex-1 max-w-[80px] bg-border/60" />
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/60">
            roadmap
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
          learning journey
        </h1>
        <p className="text-muted-foreground max-w-lg mb-12">
          things i'm currently learning, building, and figuring out along the
          way.
        </p>
      </Reveal>

      {/* Timeline wrapper */}
      <div className="relative">
        {/* Vertical timeline line */}
        <div
          className="absolute left-[18px] sm:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent, hsl(var(--border)) 8%, hsl(var(--border)) 92%, transparent)",
          }}
        />

        <div className="flex flex-col gap-0">
          {experiments.map((exp, i) => {
            const Icon = exp.icon;
            const isEven = i % 2 === 0;

            return (
              <Reveal key={exp.title} index={i}>
                <div
                  className={`relative flex items-start gap-0 mb-10 sm:mb-12 ${
                    isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`
                      w-full pl-10
                      sm:pl-0 sm:w-[calc(50%-28px)]
                      ${isEven ? "sm:pr-10" : "sm:pl-10"}
                    `}
                  >
                    <div className="group relative flex flex-col border border-border/60 rounded-xl overflow-hidden hover:border-primary/40 hover:glow-border hover:-translate-y-1 transition-all duration-300 bg-background/50">
                      {/* Top accent gradient bar */}
                      <div
                        className={`h-px w-full bg-gradient-to-r ${accentBar[exp.status]}`}
                      />

                      <div className="p-6">
                        {/* Header row: logo + title block + status */}
                        <div className="flex items-start gap-4 mb-4">
                          {/* Logo / icon area */}
                          <div className="shrink-0 flex flex-col items-center gap-2">
                            <div className="w-11 h-11 rounded-lg bg-secondary/60 border border-border/60 flex items-center justify-center group-hover:border-primary/40 group-hover:scale-105 transition-all duration-300 overflow-hidden">
                              {exp.logo ? (
                                <img
                                  src={exp.logo}
                                  alt={exp.title}
                                  className="w-6 h-6 object-contain"
                                  onError={(e) => {
                                    (
                                      e.currentTarget as HTMLImageElement
                                    ).style.display = "none";
                                    const fallback = e.currentTarget
                                      .nextElementSibling as HTMLElement | null;
                                    if (fallback)
                                      fallback.style.display = "flex";
                                  }}
                                />
                              ) : null}
                              <span
                                className="items-center justify-center"
                                style={{ display: exp.logo ? "none" : "flex" }}
                              >
                                <Icon
                                  size={18}
                                  className="text-muted-foreground group-hover:text-primary transition-colors"
                                />
                              </span>
                            </div>
                            {/* Lucide icon below logo as secondary indicator */}
                            {exp.logo && (
                              <div className="w-5 h-5 rounded-md bg-secondary/40 border border-border/40 flex items-center justify-center">
                                <Icon
                                  size={11}
                                  className="text-muted-foreground/60 group-hover:text-primary/60 transition-colors"
                                />
                              </div>
                            )}
                          </div>

                          {/* Title + duration */}
                          <div className="flex-1 min-w-0 pt-0.5">
                            <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-tight mb-1">
                              {exp.title}
                            </h3>
                            <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground/70">
                              <Clock size={10} />
                              <span className="font-mono">{exp.duration}</span>
                            </div>
                          </div>

                          {/* Status badge */}
                          <span
                            className={`shrink-0 font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full border ${statusStyles[exp.status]}`}
                          >
                            {exp.status}
                          </span>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-border/40 mb-4" />

                        {/* Description */}
                        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                          {exp.description}
                        </p>

                        {/* Tools section */}
                        <div className="rounded-lg bg-secondary/30 border border-border/40 px-3.5 py-3">
                          <div className="flex items-center gap-1.5 mb-2.5">
                            <Wrench
                              size={10}
                              className="text-muted-foreground/50"
                            />
                            <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/50">
                              stack
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.tools.map((tool) => (
                              <span
                                key={tool}
                                className="font-mono text-[10px] px-1.5 py-0.5 rounded-md bg-secondary/60 border border-border/50 text-foreground/75"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-[18px] sm:left-1/2 top-7 -translate-x-1/2 z-10 flex flex-col items-center">
                    <div
                      className={`w-3 h-3 rounded-full border-2 border-background transition-all duration-300 ${dotStyles[exp.status]}`}
                    />
                  </div>

                  {/* Spacer */}
                  <div className="hidden sm:block sm:w-[calc(50%-28px)]" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  </PageTransition>
);

export default Labs;
