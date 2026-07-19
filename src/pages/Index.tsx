import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Archive,
  Layers,
  Activity,
  FolderGit2,
  Mail,
  X,
  CalendarDays,
  Clock,
} from "lucide-react";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import ProfileCard from "@/components/ProfileCard";
import LogoLoop from "@/components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

export type ProjectStatus =
  "Completed" | "Experimental" | "Archived" | "On Working";
export type Complexity = "Beginner" | "Intermediate" | "Advanced";

export interface TechGroup {
  label: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  year: string;
  status: ProjectStatus;
  featured?: boolean;
  category: string;
  role: string;
  complexity: Complexity;
  duration: string;
  highlights: string[];
  learnings: string[];
  challenges: string;
  outcome: string;
  technologies: TechGroup[];
  repository?: string;
  liveDemo?: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const statusStyles: Record<ProjectStatus, string> = {
  Completed: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Experimental: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Archived: "bg-muted text-muted-foreground border-border",
  "On Working": "bg-sky-500/10 text-sky-400 border-sky-500/20",
};

const statusDotStyles: Record<ProjectStatus, string> = {
  Completed: "bg-emerald-400",
  Experimental: "bg-amber-400",
  Archived: "bg-muted-foreground",
  "On Working": "bg-sky-400",
};

const complexityStyles: Record<Complexity, string> = {
  Beginner: "text-muted-foreground",
  Intermediate: "text-primary/70",
  Advanced: "text-primary",
};

const complexityBars: Record<Complexity, number> = {
  Beginner: 1,
  Intermediate: 2,
  Advanced: 3,
};

const featuredProjects: Project[] = [
  {
    title: "Finance",
    description:
      "A personal finance tracker that allows users to log income and expenses, visualise spending patterns, and understand their financial health over time with a clean dashboard interface.",
    tags: ["React", "Vite", "TypeScript", "Tailwind", "Supabase"],
    link: "https://dzii-finance.vercel.app",
    year: "2025",
    status: "Completed",
    featured: true,
    category: "Full Stack",
    role: "Full Stack Developer",
    complexity: "Advanced",
    duration: "7 weeks",
    highlights: ["Auth System", "Expense Tracking", "Data Visualisation"],
    learnings: [
      "Supabase Integration",
      "Database Design",
      "Auth Flows",
      "Chart Libraries",
    ],
    challenges:
      "Building a reliable financial tracking system with accurate calculations, structured data management, and meaningful visual insights across different transaction types.",
    outcome:
      "Successfully delivered a complete finance tracker that helps users monitor income, expenses, and spending trends through an intuitive dashboard experience.",
    technologies: [
      { label: "Frontend", items: ["React", "TypeScript", "Tailwind"] },
      { label: "Backend", items: ["Supabase"] },
      { label: "Tooling", items: ["Vite"] },
    ],
    liveDemo: "",
  },
  {
    title: "Football Terrace",
    description:
      "A modern football culture platform that brings together editorial storytelling, curated apparel, and an active global community. Designed to celebrate football beyond the ninety minutes through long-form journalism, matchday culture, events, and thoughtfully crafted merchandise.",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS"],
    link: "",
    year: "2026",
    status: "On Working",
    category: "Full Stack",
    role: "Sole Developer",
    complexity: "Advanced",
    duration: "Ongoing",
    highlights: [
      "Editorial Football Stories",
      "Interactive Community Platform",
      "Premium Apparel Collection",
      "Matchday Event Directory",
      "Dynamic Story Routing",
      "Product Catalog & Archive",
      "Responsive User Experience",
      "Modern Editorial Interface",
    ],
    learnings: [
      "Scalable Frontend Architecture",
      "Component-Driven Design",
      "Editorial Content Modeling",
      "Responsive Interface Design",
      "Advanced State Management",
      "Performance Optimization",
      "User Experience Design",
      "Information Architecture",
    ],
    challenges:
      "Building a cohesive football platform that seamlessly combines editorial content, community engagement, and merchandise within a consistent design system. The project required balancing readability, performance, scalability, and responsive behavior while maintaining a premium editorial experience across desktop and mobile devices.",
    outcome:
      "Developed a scalable football culture platform that integrates long-form storytelling, community experiences, and curated apparel into a unified ecosystem. The application establishes a strong foundation for future expansion, including richer community features, enhanced editorial content, and e-commerce capabilities while preserving a consistent and immersive user experience.",
    technologies: [
      {
        label: "Frontend",
        items: ["React", "TypeScript", "Tailwind CSS", "TanStack Router"],
      },
      {
        label: "Backend",
        items: ["Supabase"],
      },
      {
        label: "Tooling",
        items: ["Vite", "ESLint", "Git", "npm"],
      },
    ],
    liveDemo: "",
  },
  {
    title: "Portfolio",
    description:
      "A personal page presenting my work, skills, and background. Designed with a dark minimal aesthetic and smooth reveal animations to create a calm, focused browsing experience.",
    tags: ["React", "Vite", "TypeScript", "Tailwind"],
    link: "https://dzii27-page.vercel.app",
    year: "2026",
    status: "Completed",
    category: "Portfolio",
    role: "Designer & Developer",
    complexity: "Intermediate",
    duration: "2 weeks",
    highlights: ["Reveal Animations", "Dark Minimal", "Project Archive"],
    learnings: ["Motion Design", "Personal Branding", "Component Architecture"],
    challenges:
      "Creating a design that is distinctive and personal without becoming overly decorative or distracting from the work itself.",
    outcome:
      "Live personal site used for professional outreach and project documentation.",
    technologies: [
      { label: "Frontend", items: ["React", "TypeScript", "Tailwind"] },
      { label: "Tooling", items: ["Vite"] },
    ],
    liveDemo: "https://dzii27-page.vercel.app",
  },
];

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

const StatusBadge = ({ status }: { status: ProjectStatus }) => (
  <span
    className={`inline-flex shrink-0 items-center gap-1.5 px-2 py-0.5 rounded-full border text-[10px] font-mono uppercase tracking-widest transition-colors duration-200 ${statusStyles[status]}`}
  >
    <span className={`h-1.5 w-1.5 rounded-full ${statusDotStyles[status]}`} />
    {status}
  </span>
);

const ComplexityBar = ({ level }: { level: Complexity }) => {
  const filled = complexityBars[level];
  return (
    <span
      className={`inline-flex items-center gap-0.5 ${complexityStyles[level]}`}
    >
      {[1, 2, 3].map((n) => (
        <span
          key={n}
          className={`h-2 w-0.5 rounded-full transition-colors duration-200 ${
            n <= filled ? "bg-current" : "bg-current/20"
          }`}
        />
      ))}
      <span className="ml-1 text-[10px] font-mono uppercase tracking-wide">
        {level}
      </span>
    </span>
  );
};

const Chip = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span
    className={`inline-flex items-center whitespace-nowrap text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md border border-border/50 bg-background/50 text-muted-foreground transition-all duration-200 hover:-translate-y-px hover:border-border/70 ${className}`}
    style={{ willChange: "transform" }}
  >
    {children}
  </span>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/40 block mb-2">
    {children}
  </span>
);

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      setMounted(true);
      const animationFrame = requestAnimationFrame(() => {
        setVisible(true);
      });
      return () => cancelAnimationFrame(animationFrame);
    } else {
      setVisible(false);
      const timeout = setTimeout(() => {
        setMounted(false);
        document.body.style.overflow = "";
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [project]);

  if (!mounted && !project) return null;

  const demoUrl = project?.liveDemo || project?.link || null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${
        visible
          ? "bg-background/40 backdrop-blur-md opacity-100"
          : "bg-background/0 backdrop-blur-none opacity-0"
      }`}
      style={{
        transitionTimingFunction: visible
          ? "cubic-bezier(0.215, 0.610, 0.355, 1)"
          : "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
      }}
    >
      <div className="absolute inset-0" onClick={onClose} />

      {project && (
        <div
          className={`relative w-full max-w-2xl max-h-[85vh] flex flex-col rounded-2xl border border-primary/25 bg-surface/70 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-300 ${
            visible
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-4"
          }`}
          style={{
            willChange: "transform, opacity",
            transitionTimingFunction: visible
              ? "cubic-bezier(0.215, 0.610, 0.355, 1)"
              : "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
          }}
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="flex items-start justify-between p-5 sm:p-6 border-b border-border/40">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono uppercase tracking-wide text-primary/70">
                  {project.category}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-border/60" />
                <span className="text-[10px] font-mono text-muted-foreground/45">
                  {project.year}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                {project.title}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg border border-border/40 bg-surface/40 text-muted-foreground hover:text-foreground hover:border-border transition-colors duration-200"
            >
              <X size={16} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div>
              <SectionLabel>About Project</SectionLabel>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-muted/10 p-4 rounded-xl border border-border/30">
              <div>
                <span className="block text-[10px] font-mono uppercase text-muted-foreground/50">
                  Status
                </span>
                <div className="mt-1">
                  <StatusBadge status={project.status} />
                </div>
              </div>
              <div>
                <span className="block text-[10px] font-mono uppercase text-muted-foreground/50">
                  Duration
                </span>
                <span className="block text-xs font-mono text-foreground mt-1">
                  {project.duration}
                </span>
              </div>
              <div>
                <span className="block text-[10px] font-mono uppercase text-muted-foreground/50">
                  Role
                </span>
                <span className="block text-xs font-mono text-foreground mt-1 truncate">
                  {project.role}
                </span>
              </div>
              <div>
                <span className="block text-[10px] font-mono uppercase text-muted-foreground/50">
                  Complexity
                </span>
                <div className="mt-1">
                  <ComplexityBar level={project.complexity} />
                </div>
              </div>
            </div>

            <div>
              <SectionLabel>Technology Stack</SectionLabel>
              <div className="flex flex-col gap-3 mt-2">
                {project.technologies?.map((g) => (
                  <div
                    key={g.label}
                    className="flex flex-col sm:flex-row sm:items-center gap-2"
                  >
                    <span className="text-[10px] font-mono text-muted-foreground/50 w-20 shrink-0 uppercase tracking-wider">
                      {g.label}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {g.items.map((item) => (
                        <Chip key={item} className="bg-background/40">
                          {item}
                        </Chip>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 pt-4 border-t border-border/30">
              <div>
                <SectionLabel>Highlights</SectionLabel>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.highlights?.map((h) => (
                    <Chip key={h}>{h}</Chip>
                  ))}
                </div>
              </div>
              <div>
                <SectionLabel>Learnings</SectionLabel>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.learnings?.map((l) => (
                    <Chip key={l}>{l}</Chip>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 pt-4 border-t border-border/30">
              <div className="space-y-1">
                <SectionLabel>Challenge</SectionLabel>
                <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed">
                  {project.challenges}
                </p>
              </div>
              <div className="space-y-1">
                <SectionLabel>Outcome</SectionLabel>
                <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed">
                  {project.outcome}
                </p>
              </div>
            </div>
          </div>

          {demoUrl && (
            <div className="flex items-center justify-end px-5 py-4 bg-muted/20 border-t border-border/40">
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 hover:bg-primary/25 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>launch live site</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <PageTransition>
      <div className="container pt-28 sm:pt-32 md:pt-36 -mb-0">
        <div className="flex items-center gap-3 mb-6 -mt-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/60">
            / index
          </span>
          <span className="h-px flex-1 max-w-[80px] bg-border/60" />
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/60">
            homepage
          </span>
        </div>

        <section className="min-h-[55vh] md:min-h-[60vh] flex flex-col justify-center py-6 md:py-0 relative">
          <div className="grid gap-12 sm:gap-14 md:gap-12 md:grid-cols-[1fr_auto] md:items-center md:-translate-y-[3%]">
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
                className="text-4xl sm:text-5xl font-bold leading-[1.05] tracking-tight mb-7 max-w-2xl"
              >
                hi, i'm{" "}
                <span className="text-gradient font-bold pr-1">Dzikra</span>{" "}
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
                  className="group/cta-prim inline-flex items-center gap-2 bg-primary text-primary-foreground font-mono text-xs tracking-wider uppercase px-6 py-3 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-px hover:shadow-[0_8px_30px_rgb(var(--primary-rgb)/0.3)] active:scale-[0.98]"
                  style={{ willChange: "transform" }}
                >
                  view projects{" "}
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 ease-out group-hover/cta-prim:translate-x-1"
                  />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-border bg-transparent text-foreground font-mono text-xs tracking-wider uppercase px-6 py-3 rounded-xl hover:bg-surface/50 hover:border-primary/40 hover:text-primary transition-all duration-300 hover:scale-[1.02] hover:-translate-y-px active:scale-[0.98]"
                  style={{ willChange: "transform" }}
                >
                  contact me
                </Link>
              </motion.div>
            </div>

            <div className="order-1 md:order-2 flex justify-center md:justify-end w-full mx-auto">
              <ProfileCard
                avatarUrl="https://res.cloudinary.com/da4fjxm1e/image/upload/v1779339552/dzii27-trsnprnt_kvonuu_qwd8wg.png"
                miniAvatarUrl="https://res.cloudinary.com/da4fjxm1e/image/upload/v1779339552/dzii27-trsnprnt_kvonuu_qwd8wg.png"
                name="Dzikra Ahsan"
                title="Frontend Developer"
                handle="dzikraahsan"
                status="Available"
                contactText="Contact"
                showUserInfo={false}
                enableTilt={false}
                enableMobileTilt={false}
                className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] mx-auto md:mx-0"
              />
            </div>
          </div>
        </section>

        <Reveal
          as="section"
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
        </Reveal>

        <Reveal
          as="section"
          className="py-20 md:py-24 border-t border-border/40"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-12">
            {/* Left: Introduction */}
            <div className="md:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-7">
                  <h2 className="font-mono text-xs text-primary tracking-widest uppercase">
                    about
                  </h2>
                  <span aria-hidden="true" className="h-px flex-1 bg-border/40" />
                </div>

                <p className="text-muted-foreground leading-[1.85] max-w-xl text-[15px] sm:text-lg mb-8">
                  i'm a frontend developer who loves building things at the
                  intersection of design and engineering. i believe great software
                  is equal parts technical precision and human empathy — every
                  interaction should feel intentional, and every detail should
                  have a purpose.
                </p>

                <span className="font-mono text-[12px] tracking-[0.2em] uppercase text-muted-foreground/50 block mb-4">
                   // philosophy
                </span>

                <p className="text-muted-foreground leading-[1.85] max-w-xl text-[15px] sm:text-lg mb-8">
                  Object-oriented programming languages support encapsulation,
                  thereby improving the ability of software to be reused, refined,
                  tested, maintained, and extended. The full benefit of this support
                  can only be realized if encapsulation is maximized during the design process.
                </p>
              </div>

              <div className="mt-auto">
                <Link
                  to="/about"
                  className="group font-mono text-xs text-primary inline-flex items-center gap-1.5 py-2 pr-2 rounded-sm outline-none focus-visible:ring-1 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <span className="relative">
                    read more
                    <span className="absolute left-0 -bottom-0.5 h-px w-full bg-primary origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100" />
                  </span>
                  <ArrowRight
                    size={12}
                    className="transition-transform duration-300 ease-out group-hover:translate-x-1 group-focus-visible:translate-x-1"
                  />
                </Link>
              </div>
            </div>

            {/* Right: Custom Supportive Sidebar (Principles, Workflow, Focus, Tech Snapshot) */}
            <aside
              aria-labelledby="about-preview-details-label"
              className="pt-10 md:pt-0 border-t md:border-t-0 md:border-l border-border/40 md:pl-10 md:col-span-5 space-y-9"
            >
              <h2 id="about-preview-details-label" className="sr-only">
                about details snapshot
              </h2>

              {/* 1. Principles */}
              <div>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 block mb-4">
                  01 // principles
                </span>
                <ul className="space-y-4">
                  {[
                    { title: "precision", desc: "pixel perfect, refined easing curves, performant execution." },
                    { title: "clarity", desc: "hiding inner complexity behind obvious, natural interactions." },
                    { title: "craft", desc: "caring deeply about internal details most people will never notice." },
                  ].map((p, idx) => (
                    <li key={p.title} className="flex items-start gap-3">
                      <span className="font-mono text-[11px] text-primary/70 tabular-nums pt-0.5">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h4 className="font-mono text-xs text-foreground tracking-wide mb-0.5">{p.title}</h4>
                        <p className="text-[11px] text-muted-foreground/85 leading-relaxed">{p.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 2. Workflow */}
              <div>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 block mb-3">
                  02 // workflow
                </span>
                <div className="flex flex-wrap items-center gap-1.5 font-mono text-[10px] text-muted-foreground/75">
                  {["think", "design", "prototype", "engineer", "ship"].map((step, idx, arr) => (
                    <div key={step} className="flex items-center gap-1.5">
                      <span className="text-foreground hover:text-primary transition-colors duration-200">
                        {step}
                      </span>
                      {idx < arr.length - 1 && <span className="text-muted-foreground/30">→</span>}
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Current Focus */}
              <div>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 block mb-2.5">
                  03 // current focus
                </span>
                <p className="text-xs text-muted-foreground/90 leading-relaxed max-w-sm">
                  architecting production-grade React/Vite structures, diving deeper into dynamic interactive systems, and studying visual storytelling in football culture interfaces.
                </p>
              </div>

              {/* 4. Tech Snapshot */}
              <div>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 block mb-3">
                  04 // tech snapshot
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase"].map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center text-[10px] font-mono px-2 py-0.5 rounded-md border border-border/50 bg-surface/20 text-muted-foreground/80 hover:text-primary hover:border-primary/30 transition-all duration-300 hover:-translate-y-px"
                      style={{ willChange: "transform" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </Reveal>

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
              <ProjectCard
                key={project.title}
                {...project}
                index={i}
                onOpenDetails={(proj) => setSelectedProject(proj as Project)}
              />
            ))}
          </div>
        </section>

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
                to: "/projects",
                label: "projects",
                title: "Projects",
                description:
                  "a curated archive of things i've built — from quick experiments to full-stack applications. each entry is shipped, learned from, and documented.",
                icon: FolderGit2,
                meta: [
                  { icon: Layers, text: "9 projects" },
                  { icon: Activity, text: "craft & code" },
                ],
              },
              {
                to: "/journey",
                label: "journey",
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
              {
                to: "/contact",
                label: "contact",
                title: "Contact",
                description:
                  "have a project in mind, a question, or just want to say hi? i'd love to hear from you.",
                icon: Mail,
                meta: [
                  { icon: Layers, text: "form & quick info" },
                  { icon: Activity, text: "connect" },
                ],
              },
            ].map(({ to, label, title, description, icon: Icon, meta }) => (
              <Link
                key={to}
                to={to}
                className="group relative flex flex-col rounded-xl border border-border/60 bg-surface/30 p-6 overflow-hidden transition-all duration-300 md:hover:-translate-y-1 md:hover:border-primary/40 md:hover:shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.2)]"
                style={{ willChange: "transform" }}
              >
                <span className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />

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

                <h4 className="text-lg font-semibold tracking-tight text-foreground mb-2 md:group-hover:text-primary transition-colors">
                  {title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {description}
                </p>

                <div className="flex-1" />

                <div className="h-px w-full bg-border/60 mb-4" />

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

        <section className="pt-32 border-t border-border/40">
          <div className="mx-auto max-w-[1100px]">
            <div className="relative rounded-2xl border border-border/60 bg-surface/40 px-6 py-14 sm:px-12 sm:py-20 overflow-hidden">
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

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </PageTransition>
  );
};

export default Index;
