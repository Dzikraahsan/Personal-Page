import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import ProjectCard from "@/components/ProjectCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand } from "@fortawesome/free-solid-svg-icons";
import LogoLoop from "@/components/LogoLoop";
import ElectricCard from "@/components/ElectricCard";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const featuredProjects = [
  {
    title: "Kaifood",
    description: "A food business website that sells various menus.",
    tags: ["React", "Vite", "TypeScript", "Tailwind"],
    link: "https://www.kaifood.web.id/",
  },
  {
    title: "Finance",
    description:
      "A personal finance website that helps users track their income and expenses.",
    tags: ["React", "Vite", "TypeScript", "Tailwind", "Supabase"],
    link: "https://dzii-finance.vercel.app",
  },
  {
    title: "Portfolio",
    description: "A personal portfolio that contains information about myself.",
    tags: ["React", "Vite", "TypeScript", "Tailwind"],
    link: "https://portfoliodzikra.vercel.app/",
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
  href: "#",
}));

const Index = () => {
  return (
    <PageTransition>
      <div className="container pt-[9rem] -mb-0">
        {/* Hero */}
        <section className="min-h-[60vh] flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-mono text-xs text-primary mb-4 tracking-widest uppercase"
          >
            software engineer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6 max-w-2xl"
          >
            hai, i'm <span className="text-gradient">Dzikra</span>{" "}
            <span className="wave">👋</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed mb-8"
          >
            i build modern, scalable, and user-focused web applications.
            passionate about clean code, great design, and solving real problems
            with technology.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-mono text-xs tracking-wider uppercase px-5 py-2.5 rounded-md hover:glow-sm transition-all duration-300"
            >
              view projects <ArrowRight size={14} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-border text-foreground font-mono text-xs tracking-wider uppercase px-5 py-2.5 rounded-md hover:border-primary/60 hover:text-primary transition-all duration-300"
            >
              contact me
            </Link>
          </motion.div>
        </section>

        {/* LogoLoop */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-16 mt-48 border-t border-border/40 overflow-hidden"
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
          viewport={{ once: true }}
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
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <ElectricCard
                key={project.title}
                color="#7df9ff"
                speed={0.6}
                chaos={0.08}
                style={{ borderRadius: 16 }}
              >
                <div className="h-[330px] flex">
                  <ProjectCard
                    {...project}
                    index={i}
                    className="h-full w-full flex flex-col"
                  />
                </div>
              </ElectricCard>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 border-t border-border/40">
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              to="/learning-journey"
              className="group border border-border/60 rounded-lg p-6 hover:border-primary/40 transition-all duration-300"
            >
              <h3 className="font-mono text-xs text-primary tracking-widest uppercase mb-2">
                learning journey
              </h3>
              <p className="text-sm text-muted-foreground">
                things i'm currently learning, building, and figuring out along
                the way.
              </p>
            </Link>

            <Link
              to="/legacy"
              className="group border border-border/60 rounded-lg p-6 hover:border-primary/40 transition-all duration-300"
            >
              <h3 className="font-mono text-xs text-primary tracking-widest uppercase mb-2">
                legacy
              </h3>
              <p className="text-sm text-muted-foreground">
                a glimpse into the people who shaped my journey in programming.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Index;
