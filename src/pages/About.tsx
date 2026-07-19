import { useState, useMemo } from "react";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";
import {
  Code2,
  Layers3,
  Database,
  Wrench,
  Terminal,
  Compass,
  Sparkles,
  Layers,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

const tools = [
  {
    name: "Antigravity",
    subtitle: "Code Editor",
    icon: "https://res.cloudinary.com/da4fjxm1e/image/upload/e_colorize:100,co_rgb:3B82F6/v1775093756/Google-Antigravity-Icon-White_yd3qgp.png",
  },
  {
    name: "Cursor",
    subtitle: "Code Editor",
    icon: "https://www.cursor.com/assets/images/logo.svg",
  },
  {
    name: "Zed",
    subtitle: "Code Editor",
    icon: "https://cdn.simpleicons.org/zedindustries/181717/E5E7EB",
  },
  {
    name: "HTML5",
    subtitle: "Markup Language",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    subtitle: "Stylesheets",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "React JS",
    subtitle: "Framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next JS",
    subtitle: "Framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Laravel",
    subtitle: "Framework",
    icon: "https://cdn.simpleicons.org/laravel/FF2D20",
  },
  {
    name: "Tailwind CSS",
    subtitle: "Framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Bootstrap",
    subtitle: "Framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "JavaScript",
    subtitle: "Language",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    subtitle: "Language",
    icon: "https://cdn.simpleicons.org/typescript/3178C6",
  },
  {
    name: "PHP",
    subtitle: "Language",
    icon: "https://cdn.simpleicons.org/php",
  },
  {
    name: "Python",
    subtitle: "Language",
    icon: "https://cdn.simpleicons.org/python/3776AB",
  },
  {
    name: "Dart",
    subtitle: "Language",
    icon: "https://cdn.simpleicons.org/dart",
  },
  {
    name: "MySQL",
    subtitle: "Database",
    icon: "https://cdn.simpleicons.org/mysql",
  },
  {
    name: "TIDB",
    subtitle: "Database",
    icon: "https://cdn.simpleicons.org/databricks/FF3621",
  },
  {
    name: "Firebase",
    subtitle: "Database",
    icon: "https://cdn.simpleicons.org/firebase/FFCA28",
  },
  {
    name: "Supabase",
    subtitle: "Database",
    icon: "https://cdn.simpleicons.org/supabase",
  },
  {
    name: "Node JS",
    subtitle: "JavaScript Runtime",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Git",
    subtitle: "DVCS",
    icon: "https://cdn.simpleicons.org/git",
  },
  {
    name: "TanStack",
    subtitle: "Library",
    icon: "https://cdn.simpleicons.org/tanstack/FF4154/FF6B7A",
  },
  {
    name: "GitHub",
    subtitle: "Repository",
    icon: "https://cdn.simpleicons.org/github/181717/E5E7EB",
  },
  {
    name: "Vercel",
    subtitle: "Deployments",
    icon: "https://cdn.simpleicons.org/vercel/000000/E5E7EB",
  },
  {
    name: "Railway",
    subtitle: "Deployments",
    icon: "https://cdn.simpleicons.org/railway/7B3FF2/A78BFA",
  },
  {
    name: "Netlify",
    subtitle: "Deployments",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
  },
  {
    name: "Cloudflare Pages",
    subtitle: "Deployments",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg",
  },
  {
    name: "Cloudinary",
    subtitle: "Storage",
    icon: "https://cdn.simpleicons.org/cloudinary/2563EB/60A5FA",
  },
  {
    name: "Canva",
    subtitle: "Design App",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
  },
  {
    name: "Figma",
    subtitle: "Design App",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
];

type Tool = (typeof tools)[number];

const approachItems = [
  {
    icon: "✦",
    label: "Design-first",
    detail: "interfaces that feel intentional at every interaction",
  },
  {
    icon: "⊹",
    label: "Detail-oriented",
    detail: "typography, spacing, and motion all have purpose",
  },
  {
    icon: "◇",
    label: "Empathy-centered",
    detail: "software built around how people actually think",
  },
  {
    icon: "◎",
    label: "Curiosity-driven",
    detail: "always tinkering, breaking, and rebuilding",
  },
];

const categoryOrder = [
  "Language",
  "Framework",
  "Deployments",
  "Database",
  "Code Editor",
  "Design App",
  "Markup Language",
  "Stylesheets",
  "JavaScript Runtime",
  "DVCS",
  "Library",
  "Repository",
  "Storage",
];

const About = () => {
  const grouped = useMemo(() => {
    return tools.reduce<Record<string, Tool[]>>((acc, tool) => {
      if (!acc[tool.subtitle]) acc[tool.subtitle] = [];
      acc[tool.subtitle].push(tool);
      return acc;
    }, {});
  }, []);

  const orderedCategories = useMemo(() => {
    return categoryOrder.filter((c) => grouped[c]);
  }, [grouped]);

  const statsConfig = [
    {
      label: "Languages",
      count: grouped["Language"]?.length ?? 0,
      icon: Code2,
      description: "Core languages used",
      accent: "from-sky-500/20 to-transparent",
      glow: "hover:shadow-sky-500/5",
      iconColor: "text-sky-400",
      borderAccent: "hover:border-sky-500/30",
    },
    {
      label: "Frameworks",
      count: grouped["Framework"]?.length ?? 0,
      icon: Layers3,
      description: "Libraries & runtimes",
      accent: "from-violet-500/20 to-transparent",
      glow: "hover:shadow-violet-500/5",
      iconColor: "text-violet-400",
      borderAccent: "hover:border-violet-500/30",
    },
    {
      label: "Databases",
      count: grouped["Database"]?.length ?? 0,
      icon: Database,
      description: "Storage solutions",
      accent: "from-emerald-500/20 to-transparent",
      glow: "hover:shadow-emerald-500/5",
      iconColor: "text-emerald-400",
      borderAccent: "hover:border-emerald-500/30",
    },
    {
      label: "Total Tools",
      count: tools.length,
      icon: Wrench,
      description: "Across all categories",
      accent: "from-amber-500/20 to-transparent",
      glow: "hover:shadow-amber-500/5",
      iconColor: "text-amber-400",
      borderAccent: "hover:border-amber-500/30",
    },
  ] as const;

  return (
    <PageTransition>
      <div className="container pt-32 pb-24 relative overflow-hidden">
        {/* Ambient Aksen Cahaya Latar Belakang */}
        <div className="pointer-events-none absolute top-44 left-[-10%] w-96 h-96 bg-primary/5 rounded-full blur-[140px] opacity-40 z-0" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-96 right-[-10%] w-[28rem] h-[28rem] bg-primary/5 rounded-full blur-[160px] opacity-30 z-0" aria-hidden="true" />

        {/* ── SECTION 1: HEADER ── */}
        <div className="relative z-10 mb-12">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/50">
                / about
              </span>
              <span className="h-px flex-1 max-w-[60px] bg-border/40" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/50">
                personal
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="mb-2">
                  <span className="font-mono text-xs text-primary tracking-widest uppercase">
                    profile
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">
                  about
                </h1>
                <p className="text-muted-foreground text-sm sm:text-md max-w-xl leading-relaxed">
                  frontend developer · web developer · design enthusiast
                </p>
              </div>
              <div className="hidden md:block font-mono text-[10px] text-muted-foreground/30 text-right uppercase tracking-[0.15em] self-end pb-1">
                index node // 2026_rec
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="border-t border-border/40 mt-8" />
          </Reveal>
        </div>

        {/* ── SECTION 2: INTRO & APPROACH GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10 mb-16">
          {/* Narasi Introduction (Col 7) */}
          <Reveal className="lg:col-span-7 space-y-6 text-muted-foreground leading-relaxed">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Terminal size={12} className="text-primary/70" />
                <h2 className="font-mono text-xs text-primary tracking-widest uppercase">
                  introduction
                </h2>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground/90 leading-[1.8]">
                i'm a frontend developer who loves building things at the
                intersection of design and engineering. i believe great software
                is equal parts technical precision and human empathy — every
                interaction should feel intentional, and every detail should have
                a purpose.
              </p>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground/90 leading-[1.8]">
              i started coding out of curiosity — tinkering with small projects,
              breaking things, and figuring out how to put them back together.
              that curiosity never really went away. these days, i spend most of
              my time crafting user interfaces, building web applications, and
              exploring ways to make the web feel faster, more intuitive, and more
              enjoyable to use.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground/90 leading-[1.8]">
              when i'm not coding, you'll probably find me diving into design
              systems, experimenting with typography, or just taking a walk while
              listening to a good podcast.
            </p>
          </Reveal>

          {/* Core Approach Cards (Col 5) */}
          <Reveal delay={0.08} className="lg:col-span-5 w-full">
            <div className="flex items-center gap-2 mb-4">
              <Compass size={12} className="text-primary/70" />
              <h2 className="font-mono text-xs text-primary tracking-widest uppercase">
                approach
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {approachItems.map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-2xl bg-surface/10 border border-border/40 flex items-start gap-4 hover:border-border/80 hover:bg-surface/15 transition-all duration-300 ease-out group shadow-[0_4px_20px_-12px_hsl(var(--primary)/0.02)] cursor-default"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-background border border-border/50 text-muted-foreground group-hover:text-primary group-hover:border-primary/20 flex items-center justify-center mt-0.5 transition-colors duration-300">
                    <span className="text-xs font-mono">{item.icon}</span>
                  </div>
                  <div className="flex flex-col gap-1 min-w-0">
                    <span className="text-sm font-semibold text-foreground tracking-tight">
                      {item.label}
                    </span>
                    <span className="text-xs text-muted-foreground/80 leading-relaxed font-normal">
                      {item.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ── SECTION 3: PHILOSOPHY ARCHIVE BLOCK ── */}
        <Reveal as="section" className="mb-20 relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={12} className="text-primary/70" />
            <h2 className="font-mono text-xs text-primary tracking-widest uppercase">
              philosophy
            </h2>
          </div>
          <div className="rounded-2xl bg-surface/5 border border-border/40 p-6 relative overflow-hidden shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)]">
            <div className="absolute top-0 right-0 p-3 font-mono text-[9px] text-muted-foreground/20 uppercase tracking-widest select-none">
              OOP // Core_Spec
            </div>
            <blockquote className="border-l-2 border-primary/30 pl-5 text-sm sm:text-base text-muted-foreground/85 italic leading-relaxed font-normal max-w-4xl">
              Object-oriented programming languages support encapsulation, thereby
              improving the ability of software to be reused, refined, tested,
              maintained, and extended. The full benefit of this support can only
              be realized if encapsulation is maximized during the design process.
            </blockquote>
          </div>
        </Reveal>

        <Reveal>
          <div className="border-t border-border/40 mb-16" />
        </Reveal>

        {/* ── SECTION 4: SKILLS GRID OVERVIEW COUNTS ── */}
        <Reveal as="section" className="mb-14 relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <Layers size={12} className="text-primary/70" />
            <h2 className="font-mono text-xs text-primary tracking-widest uppercase">
              skills & tools
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
            {statsConfig.map(
              ({
                label,
                count,
                icon: Icon,
                description,
                accent,
                glow,
                iconColor,
                borderAccent,
              }) => (
                <div
                  key={label}
                  className={[
                    "group relative rounded-2xl bg-surface/10 border border-border/40 p-5 flex flex-col gap-4 overflow-hidden",
                    "transition-all duration-300 ease-out",
                    "hover:-translate-y-1 hover:shadow-xl",
                    glow,
                    borderAccent,
                  ].join(" ")}
                >
                  {/* Top accent line */}
                  <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${accent}`} />

                  {/* Radial background ambient glow */}
                  <div className={`absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />

                  {/* Corner accent micro-bullet */}
                  <div className="absolute top-3 right-3 w-1 h-1 rounded-full bg-border/80 group-hover:bg-primary transition-colors duration-300" />

                  {/* Icon Node wrapper */}
                  <div className={`w-8 h-8 rounded-xl bg-background border border-border/50 flex items-center justify-center ${iconColor} transition-all duration-300 group-hover:scale-105 group-hover:border-primary/20`}>
                    <Icon size={14} strokeWidth={1.8} />
                  </div>

                  {/* Count & description typography */}
                  <div className="flex flex-col gap-0.5">
                    <span className="text-4xl font-bold text-foreground leading-none tracking-tight tabular-nums">
                      {count}
                    </span>
                    <span className="text-xs font-semibold text-foreground/90 leading-snug mt-2">
                      {label}
                    </span>
                    <span className="text-[11px] text-muted-foreground/60 leading-snug font-normal">
                      {description}
                    </span>
                  </div>

                  {/* Bottom tracking line */}
                  <div className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </div>
              ),
            )}
          </div>

          {/* ── SECTION 5: GROUPED BY CATEGORY GRID ── */}
          <div className="space-y-12 mt-4 -mb-[150px]">
            {orderedCategories.map((category, catIndex) => {
              const items = grouped[category];
              return (
                <Reveal key={category} delay={catIndex * 0.04} as="div">
                  {/* Category Header */}
                  <div className="relative mb-5">
                    <div className="flex items-center gap-3">
                      {/* Accent dot */}
                      <div className="w-1 h-4 rounded-full bg-primary/60 flex-shrink-0" />

                      <h3 className="font-mono text-xs text-primary tracking-widest uppercase whitespace-nowrap">
                        {category}
                      </h3>

                      {/* Divider */}
                      <div className="flex-1 border-t border-border/30" />

                      {/* Count badge */}
                      <span className="inline-flex items-center justify-center min-w-[1.5rem] h-5 px-1.5 rounded-md bg-primary/10 border border-primary/20 text-[10px] font-mono text-primary tabular-nums">
                        {items.length}
                      </span>
                    </div>
                  </div>

                  {/* Tool Cards Grid */}
                  <div className="flex flex-wrap justify-center sm:justify-start lg:justify-center gap-2">
                    {items.map((tool, i) => (
                      <Reveal
                        key={tool.name}
                        index={i}
                        className={[
                          "group relative flex items-center gap-3 p-3 rounded-xl",
                          "w-[calc(50%-0.25rem)] sm:w-[calc(33.333%-0.375rem)] lg:w-[calc(25%-0.375rem)]",
                          "bg-card border border-border/50",
                          "hover:border-primary/40 hover:bg-card/80",
                          "hover:shadow-md hover:shadow-primary/5",
                          "hover:-translate-y-0.5",
                          "transition-all duration-300 ease-out",
                          "overflow-hidden",
                        ].join(" ")}
                      >
                        {/* Hover glow */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/[0.04] to-transparent transition-opacity duration-300 pointer-events-none rounded-xl" />

                        {/* Top accent line on hover */}
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-primary/40 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Icon container */}
                        <div className="relative flex-shrink-0 w-10 h-10 rounded-lg bg-secondary border border-border/40 group-hover:border-primary/20 flex items-center justify-center transition-colors duration-300">
                          <img
                            src={tool.icon}
                            alt={tool.name}
                            className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                            loading="lazy"
                          />
                        </div>

                        {/* Text */}
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-foreground truncate leading-tight">
                            {tool.name}
                          </p>
                          <p className="text-[11px] text-muted-foreground truncate mt-0.5 leading-tight">
                            {tool.subtitle}
                          </p>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Reveal>
      </div>
    </PageTransition>
  );
};

export default About;
