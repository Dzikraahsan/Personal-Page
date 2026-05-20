import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";

const tools = [
  {
    name: "Antigravity",
    subtitle: "Code Editor",
    icon: "https://res.cloudinary.com/da4fjxm1e/image/upload/v1775093756/Google-Antigravity-Icon-White_yd3qgp.png",
  },
  {
    name: "Cursor",
    subtitle: "Code Editor",
    icon: "https://www.cursor.com/assets/images/logo.svg",
  },
  {
    name: "Zed",
    subtitle: "Code Editor",
    icon: "https://res.cloudinary.com/da4fjxm1e/image/upload/v1775092890/zed-logo_sajpzu.png",
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
    icon: "https://cdn.simpleicons.org/php/FFFFFF",
  },
  {
    name: "Python",
    subtitle: "Language",
    icon: "https://cdn.simpleicons.org/python/3776AB",
  },
  {
    name: "Dart",
    subtitle: "Language",
    icon: "https://cdn.simpleicons.org/dart/white",
  },
  {
    name: "MySQL",
    subtitle: "Database",
    icon: "https://cdn.simpleicons.org/mysql/FFFFFF",
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
    icon: "https://cdn.simpleicons.org/supabase/FFFFFF",
  },
  {
    name: "Node JS",
    subtitle: "JavaScript Runtime",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Git",
    subtitle: "DVCS",
    icon: "https://cdn.simpleicons.org/git/FFFFFF",
  },
  {
    name: "GitHub",
    subtitle: "Repository",
    icon: "https://cdn.simpleicons.org/github/FFFFFF",
  },
  {
    name: "Vercel",
    subtitle: "Deployments",
    icon: "https://cdn.simpleicons.org/vercel/FFFFFF",
  },
  {
    name: "Railway",
    subtitle: "Deployments",
    icon: "https://cdn.simpleicons.org/railway/FFFFFF",
  },
  {
    name: "Cloudinary",
    subtitle: "Storage",
    icon: "https://cdn.simpleicons.org/cloudinary/FFFFFF",
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
  "Code Editor",
  "Language",
  "Framework",
  "Database",
  "JavaScript Runtime",
  "DVCS",
  "Repository",
  "Deployments",
  "Storage",
  "Design App",
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
    <div className="container pt-32 max-w-4xl pb-24">
      {/* Header */}
      <Reveal>
        <div className="mb-2">
          <span className="font-mono text-xs text-primary tracking-widest uppercase">
            profile
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          about
        </h1>
        <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
          software engineer · frontend developer · design & engineering
          intersection
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
              i'm a software engineer and frontend developer who loves building
              things at the intersection of design and engineering. i believe
              great software is equal parts technical precision and human
              empathy — every interaction should feel intentional, and every
              detail should have a purpose.
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
          {[
            { label: "Languages", count: grouped["Language"]?.length ?? 0 },
            { label: "Frameworks", count: grouped["Framework"]?.length ?? 0 },
            { label: "Databases", count: grouped["Database"]?.length ?? 0 },
            { label: "Total Tools", count: tools.length },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-card border border-border/50 p-4 flex flex-col gap-1"
            >
              <span className="text-2xl font-bold text-foreground">
                {stat.count}
              </span>
              <span className="text-xs text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Grouped by category */}
        <section className="-mb-[11rem]">
          <div className="space-y-16 mt-4">
            {orderedCategories.map((category, catIndex) => {
              const items = grouped[category];
              return (
                <Reveal key={category} delay={catIndex * 0.04} as="div">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="font-mono text-xs text-primary tracking-widest uppercase whitespace-nowrap">
                      {category}
                    </h3>
                    <div className="flex-1 border-t border-border/30" />
                    <span className="text-xs text-muted-foreground tabular-nums">
                      {items.length}
                    </span>
                  </div>
                  <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                    {items.map((tool, i) => (
                      <Reveal
                        key={tool.name}
                        index={i}
                        className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border/50 hover:border-primary/40 hover:scale-[1.03] transition-all duration-300"
                      >
                        <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-secondary flex items-center justify-center">
                          <img
                            src={tool.icon}
                            alt={tool.name}
                            className="w-5 h-5"
                            loading="lazy"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-foreground truncate">
                            {tool.name}
                          </p>
                          <p className="text-xs text-muted-foreground truncate">
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
