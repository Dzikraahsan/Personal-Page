import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";
import { Code2, Layers3, Database, Wrench } from "lucide-react";

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

const grouped = tools.reduce<Record<string, Tool[]>>((acc, tool) => {
  if (!acc[tool.subtitle]) acc[tool.subtitle] = [];
  acc[tool.subtitle].push(tool);
  return acc;
}, {});

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

const orderedCategories = categoryOrder.filter((c) => grouped[c]);

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

const About = () => (
  <PageTransition>
    <div className="container pt-32 pb-24">
      {/* Header */}
      <Reveal>
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/60">
            / about
          </span>
          <span className="h-px flex-1 max-w-[80px] bg-border/60" />
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/60">
            personal
          </span>
        </div>
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
      </Reveal>

      <Reveal>
        <div className="border-t border-border/40 mt-8 mb-12" />
      </Reveal>

      {/* Intro + Approach grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-14">
        <Reveal className="lg:col-span-3 space-y-5 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="font-mono text-xs text-primary tracking-widest uppercase mb-4">
              introduction
            </h2>
            <p>
              i'm a frontend developer who loves building things at the
              intersection of design and engineering. i believe great software
              is equal parts technical precision and human empathy — every
              interaction should feel intentional, and every detail should have
              a purpose.
            </p>
          </div>
          <p>
            i started coding out of curiosity — tinkering with small projects,
            breaking things, and figuring out how to put them back together.
            that curiosity never really went away. these days, i spend most of
            my time crafting user interfaces, building web applications, and
            exploring ways to make the web feel faster, more intuitive, and more
            enjoyable to use.
          </p>
          <p>
            when i'm not coding, you'll probably find me diving into design
            systems, experimenting with typography, or just taking a walk while
            listening to a good podcast.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-2">
          <h2 className="font-mono text-xs text-primary tracking-widest uppercase mb-4">
            approach
          </h2>
          <div className="space-y-3">
            {approachItems.map((item) => (
              <div
                key={item.label}
                className="p-3 rounded-xl bg-card border border-border/50 flex items-start gap-3 hover:border-primary/40 hover:bg-card/80 hover:scale-[1.02] transition-all duration-300 cursor-default"
              >
                <div className="flex-shrink-0 w-7 h-7 rounded-md bg-secondary flex items-center justify-center mt-0.5">
                  <span className="text-primary text-xs">{item.icon}</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-foreground">
                    {item.label}
                  </span>
                  <span className="text-xs text-muted-foreground leading-snug">
                    {item.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Philosophy */}
      <Reveal as="section" className="mb-14">
        <h2 className="font-mono text-xs text-primary tracking-widest uppercase mb-4">
          philosophy
        </h2>
        <div className="rounded-xl bg-card border border-border/50 p-6">
          <blockquote className="border-l-2 border-primary/40 pl-4 text-muted-foreground italic leading-relaxed">
            Object-oriented programming languages support encapsulation, thereby
            improving the ability of software to be reused, refined, tested,
            maintained, and extended. The full benefit of this support can only
            be realized if encapsulation is maximized during the design process.
          </blockquote>
        </div>
      </Reveal>

      <Reveal>
        <div className="border-t border-border/40 mb-12" />
      </Reveal>

      {/* Skills overview counts */}
      <Reveal as="section" className="mb-12">
        <h2 className="font-mono text-xs text-primary tracking-widest uppercase mb-6">
          skills & tools
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-20">
          {(
            [
              {
                label: "Languages",
                count: grouped["Language"]?.length ?? 0,
                icon: Code2,
                description: "Core languages used",
                accent: "from-sky-500/20 to-transparent",
                glow: "hover:shadow-sky-500/10",
                iconColor: "text-sky-400",
                borderAccent: "hover:border-sky-500/40",
              },
              {
                label: "Frameworks",
                count: grouped["Framework"]?.length ?? 0,
                icon: Layers3,
                description: "Libraries & runtimes",
                accent: "from-violet-500/20 to-transparent",
                glow: "hover:shadow-violet-500/10",
                iconColor: "text-violet-400",
                borderAccent: "hover:border-violet-500/40",
              },
              {
                label: "Databases",
                count: grouped["Database"]?.length ?? 0,
                icon: Database,
                description: "Storage solutions",
                accent: "from-emerald-500/20 to-transparent",
                glow: "hover:shadow-emerald-500/10",
                iconColor: "text-emerald-400",
                borderAccent: "hover:border-emerald-500/40",
              },
              {
                label: "Total Tools",
                count: tools.length,
                icon: Wrench,
                description: "Across all categories",
                accent: "from-amber-500/20 to-transparent",
                glow: "hover:shadow-amber-500/10",
                iconColor: "text-amber-400",
                borderAccent: "hover:border-amber-500/40",
              },
            ] as const
          ).map(
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
                  "group relative rounded-xl bg-card border border-border/50 p-4 flex flex-col gap-3 overflow-hidden",
                  "transition-all duration-300 ease-out",
                  "hover:-translate-y-0.5 hover:shadow-lg",
                  glow,
                  borderAccent,
                ].join(" ")}
              >
                {/* Top accent line */}
                <div
                  className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${accent}`}
                />

                {/* Radial background glow */}
                <div
                  className={`absolute -top-6 -right-6 w-20 h-20 rounded-full bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`}
                />

                {/* Corner accent */}
                <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-border/60 group-hover:bg-current transition-colors duration-300" />

                {/* Icon */}
                <div
                  className={`w-7 h-7 rounded-md bg-border/20 flex items-center justify-center ${iconColor} transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon size={14} strokeWidth={1.8} />
                </div>

                {/* Count */}
                <div className="flex flex-col gap-0.5">
                  <span className="text-3xl font-bold text-foreground leading-none tracking-tight tabular-nums">
                    {count}
                  </span>

                  {/* Label + description */}
                  <span className="text-sm font-medium text-foreground/80 leading-snug mt-1.5">
                    {label}
                  </span>
                  <span className="text-xs text-muted-foreground leading-snug">
                    {description}
                  </span>
                </div>

                {/* Bottom decorative line */}
                <div
                  className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r ${accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </div>
            ),
          )}
        </div>

        {/* Grouped by category */}
        <section className="-mb-[11rem]">
          <div className="space-y-12 mt-4">
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
        </section>
      </Reveal>
    </div>
  </PageTransition>
);

export default About;
