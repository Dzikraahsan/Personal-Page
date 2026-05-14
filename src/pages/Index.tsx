import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Archive,
  Layers,
  Activity,
} from "lucide-react";
import PageTransition from "@/components/PageTransition";
import ProjectCard from "@/components/ProjectCard";
import ProfileCard from "@/components/ProfileCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand } from "@fortawesome/free-solid-svg-icons";
import LogoLoop from "@/components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const featuredProjects = [
  {
    title: "Paperjam Club",
    description:
      "Paperjam Club is a curated space for makers, players, and storytellers.",
    tags: ["React", "Vite", "TypeScript", "Tailwind"],
    link: "",
    year: "2026",
    status: "On Working" as const,
  },
  {
    title: "Kaifood",
    description: "A food business website that sells various menus.",
    tags: ["React", "Vite", "TypeScript", "Tailwind"],
    link: "https://www.kaifood.web.id/",
    year: "2024",
    status: "Completed" as const,
  },
  {
    title: "Finance",
    description:
      "A personal finance website that helps users track their income and expenses.",
    tags: ["React", "Vite", "TypeScript", "Tailwind", "Supabase"],
    link: "https://dzii-finance.vercel.app",
    year: "2024",
    status: "Completed" as const,
  },
];

const techLogos = [
  { node: <SiReact size={20} />, title: "React", href: "https://react.dev" },
  {
    node: <SiNextdotjs size={20} />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: <SiTypescript size={20} />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss size={20} />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

const tools = [
  // Code Editor
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

  // Framework
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

  // Language
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

  // Database
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

  // JavaScript Runtime
  {
    name: "Node JS",
    subtitle: "JavaScript Runtime",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },

  // Distributed Version Control System
  {
    name: "Git",
    subtitle: "DVCS",
    icon: "https://cdn.simpleicons.org/git/FFFFFF",
  },

  // Repository
  {
    name: "GitHub",
    subtitle: "Repository",
    icon: "https://cdn.simpleicons.org/github/FFFFFF",
  },

  // Deployments
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

  // Storage
  {
    name: "Cloudinary",
    subtitle: "Storage",
    icon: "https://cdn.simpleicons.org/cloudinary/FFFFFF",
  },

  // Design App
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

const toolLogos = tools.map((tool) => ({
  node: (
    <img
      src={tool.icon}
      alt={tool.name}
      className="w-7 h-7 object-contain opacity-100 brightness-125 transition"
      loading="lazy"
    />
  ),
  title: tool.name,
}));

const Index = () => {
  return (
    <PageTransition>
      <div className="container pt-28 sm:pt-32 md:pt-36 -mb-0">
        {/* Hero */}
        <section className="min-h-[55vh] md:min-h-[60vh] flex flex-col justify-center py-6 md:py-0">
          <div className="grid gap-12 sm:gap-14 md:gap-12 md:grid-cols-[1fr_auto] md:items-center">
            {/* HERO TEXT */}
            <div className="order-2 md:order-1 flex flex-col justify-center pt-2 md:pt-0">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-mono text-xs text-primary mb-5 tracking-[0.24em] uppercase"
              >
                frontend developer
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl sm:text-6xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-7 max-w-2xl"
              >
                hi, i'm <span className="text-gradient">Dzikra</span>{" "}
                <span className="wave">👋</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-[15px] sm:text-lg text-muted-foreground max-w-xl leading-[1.9] mb-10"
              >
                i build modern, scalable, and user-focused web applications.
                passionate about clean code, great design, and solving real
                problems with technology.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-3"
              >
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-mono text-xs tracking-wider uppercase px-6 py-3 rounded-xl hover:glow-sm transition-all duration-300"
                >
                  view projects <ArrowRight size={14} />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-border text-foreground font-mono text-xs tracking-wider uppercase px-6 py-3 rounded-xl hover:border-primary/60 hover:text-primary transition-all duration-300"
                >
                  contact me
                </Link>
              </motion.div>
            </div>

            {/* PROFILE CARD */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end w-full mx-auto">
              <ProfileCard
                avatarUrl="https://res.cloudinary.com/da4fjxm1e/image/upload/v1778729787/dzii27-trsnprnt_kvonuu.png"
                miniAvatarUrl="https://res.cloudinary.com/da4fjxm1e/image/upload/v1778729787/dzii27-trsnprnt_kvonuu.png"
                name="Dzikra Ahsan"
                title="Frontend Developer"
                handle="dzikraahsan"
                status="Available"
                contactText="Contact"
                showUserInfo={false}
                enableTilt={true}
                enableMobileTilt={false}
                className="w-full max-w-[360px] sm:max-w-[440px] md:max-w-[500px] mx-auto md:mx-0"
              />
            </div>
          </div>
        </section>

        {/* LogoLoop */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          className="py-12 md:py-16 mt-16 md:mt-32 border-t border-border/40 overflow-hidden"
        >
          <div
            className="relative w-full overflow-hidden
            before:absolute before:left-0 before:top-0 before:h-full before:w-24
            before:bg-gradient-to-r before:from-background before:to-transparent
            after:absolute after:right-0 after:top-0 after:h-full after:w-24
            after:bg-gradient-to-l after:from-background after:to-transparent"
          >
            <div className="relative h-[32px] flex items-center">
              <LogoLoop
                logos={toolLogos}
                speed={25}
                direction="left"
                logoHeight={36}
                gap={50}
                ariaLabel="Tools & Tech Stack"
              />
            </div>
          </div>
        </motion.section>

        {/* About Preview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="py-16 border-t border-border/40"
        >
          <h2 className="font-mono text-xs text-primary tracking-widest uppercase mb-6">
            about
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mb-4">
            i'm a software engineer and frontend developer who loves building
            things at the intersection of design and engineering. i believe
            great software is equal parts technical precision and human empathy
            — every interaction should feel intentional, and every detail should
            have a purpose.
          </p>
          <Link
            to="/about"
            className="font-mono text-xs text-primary hover:underline inline-flex items-center gap-1"
          >
            read more <ArrowRight size={12} />
          </Link>
        </motion.section>

        {/* Featured Projects */}
        <section className="py-16 border-t border-border/40">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-mono text-xs text-primary tracking-widest uppercase">
              featured projects
            </h2>
            <Link
              to="/projects"
              className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
            >
              view all <ArrowRight size={12} />
            </Link>
          </div>
          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.title} {...project} index={i} />
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 border-t border-border/40">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-mono text-xs text-primary tracking-widest uppercase">
              explore more
            </h2>
            <span className="font-mono text-[10px] text-muted-foreground tracking-wider uppercase">
              2 sections
            </span>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                to: "/learning-journey",
                label: "learning journey",
                title: "Learning Journey",
                description:
                  "things i'm currently learning, building, and figuring out along the way.",
                icon: BookOpen,
                meta: [
                  { icon: Layers, text: "5 entries" },
                  { icon: Activity, text: "active" },
                ],
              },
              {
                to: "/legacy",
                label: "legacy",
                title: "Legacy",
                description:
                  "an archive of past projects, experiments, and systems i've moved on from.",
                icon: Archive,
                meta: [
                  { icon: Layers, text: "8 records" },
                  { icon: Activity, text: "archive" },
                ],
              },
            ].map(({ to, label, title, description, icon: Icon, meta }) => (
              <Link
                key={to}
                to={to}
                className="group relative flex flex-col rounded-xl border border-border/60 bg-surface/30 p-6 overflow-hidden transition-all duration-300 md:hover:-translate-y-1 md:hover:border-primary/40 md:hover:shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.2)]"
                style={{ willChange: "transform" }}
              >
                {/* top accent line */}
                <span className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />

                {/* Top: icon + label + arrow */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-background/60 text-primary transition-all duration-300 md:group-hover:border-primary/40 md:group-hover:scale-105">
                      <Icon size={16} />
                    </div>
                    <h3 className="font-mono text-xs text-primary tracking-widest uppercase">
                      {label}
                    </h3>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-muted-foreground transition-all duration-300 md:group-hover:text-primary md:group-hover:-translate-y-0.5 md:group-hover:translate-x-0.5"
                  />
                </div>

                {/* Title + description */}
                <h4 className="text-lg font-semibold tracking-tight text-foreground mb-2 md:group-hover:text-primary transition-colors">
                  {title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {description}
                </p>

                <div className="flex-1" />

                {/* Divider */}
                <div className="h-px w-full bg-border/60 mb-4" />

                {/* Metadata */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-mono text-muted-foreground">
                  {meta.map((m) => {
                    const MIcon = m.icon;
                    return (
                      <span
                        key={m.text}
                        className="inline-flex items-center gap-1.5"
                      >
                        <MIcon size={11} />
                        {m.text}
                      </span>
                    );
                  })}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Closing Section */}
        <section className="py-24 border-t border-border/40">
          <div className="mx-auto max-w-[1100px]">
            <div className="relative rounded-2xl border border-border/60 bg-surface/40 px-6 py-14 sm:px-12 sm:py-20 overflow-hidden">
              {/* subtle accent */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 0%, hsl(var(--primary)) 0%, transparent 40%), radial-gradient(circle at 80% 100%, hsl(var(--primary)) 0%, transparent 40%)",
                }}
              />
              <div className="relative flex flex-col items-center text-center">
                <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-primary mb-6">
                  <span className="h-px w-8 bg-primary/40" />
                  let's connect
                  <span className="h-px w-8 bg-primary/40" />
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5 max-w-2xl">
                  have an idea worth building?
                </h2>
                <p className="text-base text-muted-foreground max-w-xl leading-relaxed mb-10">
                  i'm always open to interesting projects, collaborations, and
                  conversations. let's turn your idea into something real.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-mono text-xs tracking-wider uppercase px-5 py-2.5 rounded-md hover:glow-sm transition-all duration-300"
                  >
                    get in touch <ArrowRight size={14} />
                  </Link>
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 border border-border text-foreground font-mono text-xs tracking-wider uppercase px-5 py-2.5 rounded-md hover:border-primary/60 hover:text-primary transition-all duration-300"
                  >
                    explore work
                  </Link>
                </div>

                <div className="mt-12 h-px w-24 bg-border/60" />

                <p className="mt-6 font-mono text-[11px] tracking-wide text-muted-foreground">
                  built with care · crafted in code
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Index;
