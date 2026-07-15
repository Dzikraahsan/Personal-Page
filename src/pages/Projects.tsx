import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import {
  ArrowUpRight,
  Search,
  ChevronDown,
  X,
  Layers,
  CalendarDays,
  Star,
  Clock,
  User2,
} from "lucide-react";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";

// ─── Types ────────────────────────────────────────────────────────────────────

export type ProjectStatus =
  "Completed" | "Experimental" | "Archived" | "On Working";
export type Complexity = "Beginner" | "Intermediate" | "Advanced";
export type Category =
  "Full Stack" | "Frontend" | "Tool" | "Dashboard" | "Business" | "Portfolio";

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
  category: Category;
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

// ─── Data ─────────────────────────────────────────────────────────────────────

const allProjects: Project[] = [
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
    title: "Paperjam Club",
    description:
      "A curated space for makers, players, and storytellers. Built as a community-first platform where creative people can share projects, discoveries, and ideas in a calm, focused environment away from algorithmic noise.",
    tags: ["React", "Vite", "TypeScript", "Tailwind"],
    link: "",
    year: "2026",
    status: "On Working",
    category: "Full Stack",
    role: "Sole Developer",
    complexity: "Advanced",
    duration: "Ongoing",
    highlights: ["Community Feed", "Project Showcase", "Curated Discovery"],
    learnings: [
      "Community Platform Design",
      "Content Architecture",
      "Authentication Systems",
      "User Experience Design",
    ],
    challenges:
      "Designing a community platform that encourages meaningful interaction and content discovery while maintaining a calm, focused experience free from algorithmic distractions.",
    outcome:
      "Established a strong foundation for a community-first platform where makers, players, and storytellers can share projects, ideas, and discoveries in a more intentional environment.",
    technologies: [
      { label: "Frontend", items: ["React", "TypeScript", "Tailwind"] },
      { label: "Backend", items: ["Supabase"] },
      { label: "Tooling", items: ["Vite"] },
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
  {
    title: "Kaifood",
    description:
      "A food business website for a local restaurant that presents their full menu, brand story, and contact information in a clean, appetising layout optimised for mobile visitors.",
    tags: ["React", "Vite", "TypeScript", "Tailwind"],
    link: "https://www.kaifood.web.id/",
    year: "2025",
    status: "Completed",
    category: "Business",
    role: "Frontend Developer",
    complexity: "Intermediate",
    duration: "3 weeks",
    highlights: ["Menu Showcase", "Mobile First", "Brand Identity"],
    learnings: ["Client Work", "Responsive Design", "Content Strategy"],
    challenges:
      "Translating a physical menu and brand feel into a digital experience that works well on low-end mobile devices.",
    outcome:
      "Live in production, actively used by the business to drive customer engagement.",
    technologies: [
      { label: "Frontend", items: ["React", "TypeScript", "Tailwind"] },
      { label: "Tooling", items: ["Vite"] },
    ],
    liveDemo: "https://www.kaifood.web.id/",
  },
  {
    title: "Daily Activity",
    description:
      "A structured daily activity logger built to help track personal routines, habits, and tasks. Includes CRUD operations, local persistence, and a clean timeline view.",
    tags: ["React", "Vite", "TypeScript", "Tailwind"],
    link: "https://tracking-activities.vercel.app/",
    year: "2024",
    status: "Completed",
    category: "Tool",
    role: "Frontend Developer",
    complexity: "Intermediate",
    duration: "2 weeks",
    highlights: ["Activity Log", "CRUD Operations", "Timeline View"],
    learnings: ["State Management", "Local Storage", "UX for Habit Tracking"],
    challenges:
      "Keeping the interface frictionless enough that logging an activity takes under five seconds.",
    outcome:
      "Deployed and used personally. Solid foundation for a more feature-rich productivity tool.",
    technologies: [
      { label: "Frontend", items: ["React", "TypeScript", "Tailwind"] },
      { label: "Tooling", items: ["Vite"] },
    ],
    liveDemo: "https://tracking-activities.vercel.app/",
  },
  {
    title: "Dashboard",
    description:
      "An employee performance dashboard that records work hours and displays productivity statistics. Built with JavaScript before migrating to a TypeScript-first stack.",
    tags: ["React", "Vite", "JavaScript", "Tailwind"],
    link: "https://dashboard-40.vercel.app/",
    year: "2024",
    status: "Archived",
    category: "Dashboard",
    role: "Frontend Developer",
    complexity: "Beginner",
    duration: "2 weeks",
    highlights: ["Performance Stats", "Employee Records", "Data Tables"],
    learnings: ["Dashboard Layout", "Data Presentation", "Component Patterns"],
    challenges:
      "Building a readable data-heavy interface without overwhelming the user with too much information at once.",
    outcome:
      "Archived as a learning reference. Patterns from this project influenced later dashboard work.",
    technologies: [
      { label: "Frontend", items: ["React", "JavaScript", "Tailwind"] },
      { label: "Tooling", items: ["Vite"] },
    ],
    liveDemo: "https://dashboard-40.vercel.app/",
  },
  {
    title: "Finance Flow",
    description:
      "An experimental prototype exploring a new approach to personal finance management — focused on structured flows and guided data entry rather than freeform transaction logging.",
    tags: ["React", "Vite", "TypeScript", "Tailwind"],
    link: "https://finance-flow-beryl.vercel.app/",
    year: "2024",
    status: "Experimental",
    category: "Tool",
    role: "Designer & Developer",
    complexity: "Intermediate",
    duration: "1 week",
    highlights: ["Guided Flows", "Structured Input", "Financial UX"],
    learnings: ["Form UX", "Guided Interactions", "Prototype Thinking"],
    challenges:
      "Designing a financial UI that guides rather than instructs — making the right action feel like the obvious one.",
    outcome:
      "Prototype shipped. Concepts explored here will inform future finance tooling.",
    technologies: [
      { label: "Frontend", items: ["React", "TypeScript", "Tailwind"] },
      { label: "Tooling", items: ["Vite"] },
    ],
    liveDemo: "https://finance-flow-beryl.vercel.app/",
  },
  {
    title: "Text Generate",
    description:
      "A creative tool for generating and previewing text rendered in custom fonts. Useful for designers who want to quickly test typography choices before committing to them in a project.",
    tags: ["React", "Vite", "TypeScript", "Tailwind"],
    link: "https://text-studio-pro.vercel.app",
    year: "2024",
    status: "Experimental",
    category: "Tool",
    role: "Designer & Developer",
    complexity: "Beginner",
    duration: "1 week",
    highlights: ["Font Preview", "Custom Input", "Live Rendering"],
    learnings: ["Typography Systems", "Live Preview UX", "CSS Font APIs"],
    challenges:
      "Handling a large number of font options without degrading load performance or cluttering the interface.",
    outcome:
      "Shipped as a small utility. Still occasionally used for quick typography checks.",
    technologies: [
      { label: "Frontend", items: ["React", "TypeScript", "Tailwind"] },
      { label: "Tooling", items: ["Vite"] },
    ],
    liveDemo: "https://text-studio-pro.vercel.app",
  },
];

// ─── Shared constants ─────────────────────────────────────────────────────────

export const statusStyles: Record<ProjectStatus, string> = {
  Completed: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Experimental: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Archived: "bg-muted text-muted-foreground border-border",
  "On Working": "bg-sky-500/10 text-sky-400 border-sky-500/20",
};

export const statusDot: Record<ProjectStatus, string> = {
  Completed: "bg-emerald-400",
  Experimental: "bg-amber-400",
  Archived: "bg-muted-foreground",
  "On Working": "bg-sky-400",
};

export const complexityStyles: Record<Complexity, string> = {
  Beginner: "text-muted-foreground",
  Intermediate: "text-primary/70",
  Advanced: "text-primary",
};

const complexityBars: Record<Complexity, number> = {
  Beginner: 1,
  Intermediate: 2,
  Advanced: 3,
};

const ALL_STATUSES: ProjectStatus[] = [
  "Completed",
  "On Working",
  "Experimental",
  "Archived",
];
const ALL_YEARS = ["2024", "2025", "2026"];
const ALL_CATEGORIES: Category[] = [
  "Full Stack",
  "Frontend",
  "Tool",
  "Dashboard",
  "Business",
  "Portfolio",
];

// ─── Hooks ────────────────────────────────────────────────────────────────────

function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

// ─── Shared primitives ────────────────────────────────────────────────────────

export const StatusBadge = ({ status }: { status: ProjectStatus }) => (
  <span
    className={`inline-flex shrink-0 items-center gap-1.5 px-2 py-0.5 rounded-full border text-[10px] font-mono uppercase tracking-widest transition-colors duration-200 ${statusStyles[status]}`}
  >
    <span className={`h-1.5 w-1.5 rounded-full ${statusDot[status]}`} />
    {status}
  </span>
);

export const ComplexityBar = ({ level }: { level: Complexity }) => {
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

export const Chip = ({
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

export const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/40 block mb-2">
    {children}
  </span>
);

const FilterPill = ({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider px-3 py-1.5 rounded-full border transition-all duration-200 active:scale-95 ${
      active
        ? "border-primary/40 bg-primary/10 text-primary"
        : "border-border/50 bg-transparent text-muted-foreground hover:border-border hover:text-foreground"
    }`}
    style={{ willChange: "transform" }}
  >
    {children}
  </button>
);

// ─── Animated expand panel ────────────────────────────────────────────────────

const AnimatedPanel = ({
  open,
  children,
  reducedMotion,
}: {
  open: boolean;
  children: React.ReactNode;
  reducedMotion: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [visible, setVisible] = useState(false);
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    if (!open) {
      setVisible(false);
      setHeight(0);

      const timeout = setTimeout(
        () => setRendered(false),
        reducedMotion ? 0 : 280,
      );

      return () => clearTimeout(timeout);
    }

    setRendered(true);
  }, [open, reducedMotion]);

  useEffect(() => {
    if (!rendered || !ref.current) return;

    const updateHeight = () => {
      setHeight(ref.current?.scrollHeight ?? 0);
    };

    updateHeight();

    requestAnimationFrame(() => {
      setVisible(true);
    });

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [rendered]);

  if (!rendered) return null;

  return (
    <div
      style={{
        height: reducedMotion ? "auto" : height,
        overflow: "hidden",
        transition: reducedMotion
          ? "none"
          : "height 280ms cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      <div
        ref={ref}
        style={{
          opacity: reducedMotion ? 1 : visible ? 1 : 0,
          transform: reducedMotion
            ? "none"
            : visible
              ? "translateY(0)"
              : "translateY(-6px)",
          transition: reducedMotion
            ? "none"
            : "opacity 220ms ease 50ms, transform 220ms ease 50ms",
          willChange: "transform, opacity",
        }}
      >
        {children}
      </div>
    </div>
  );
};

// ─── Expand toggle button ─────────────────────────────────────────────────────

const ExpandToggle = ({
  expanded,
  onToggle,
  reducedMotion,
}: {
  expanded: boolean;
  onToggle: () => void;
  reducedMotion: boolean;
}) => (
  <button
    onClick={onToggle}
    className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-muted-foreground/50 hover:text-primary transition-colors duration-200"
  >
    <ChevronDown
      size={12}
      style={{
        transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
        transition: reducedMotion
          ? "none"
          : "transform 240ms cubic-bezier(0.4,0,0.2,1)",
      }}
    />
    {expanded ? "collapse" : "details"}
  </button>
);

// ─── Shared expanded content ──────────────────────────────────────────────────

const ExpandedContent = ({ project }: { project: Project }) => (
  <div className="flex flex-col gap-5 text-left">
    {/* Highlights Section */}
    <div>
      <SectionLabel>Highlights</SectionLabel>
      <div className="flex flex-wrap gap-1.5 mt-1">
        {project.highlights.map((h) => (
          <Chip
            key={h}
            className="text-[9px] px-1.5 py-0.5 bg-background/30 hover:translate-y-0"
          >
            {h}
          </Chip>
        ))}
      </div>
    </div>

    {/* Learnings Section */}
    <div>
      <SectionLabel>Learnings</SectionLabel>
      <div className="flex flex-wrap gap-1.5 mt-1">
        {project.learnings.map((l) => (
          <Chip
            key={l}
            className="text-[9px] px-1.5 py-0.5 bg-background/30 hover:translate-y-0"
          >
            {l}
          </Chip>
        ))}
      </div>
    </div>

    {/* Divider tipis antar bagian teks */}
    <div className="h-px bg-border/20 my-1" />

    {/* Challenge & Outcome - Disusun vertikal satu kolom agar tidak berhimpitan */}
    <div className="space-y-4">
      <div className="space-y-1">
        <SectionLabel>Challenge</SectionLabel>
        <p className="text-[12px] sm:text-xs text-muted-foreground/80 leading-relaxed font-normal">
          {project.challenges}
        </p>
      </div>

      <div className="space-y-1">
        <SectionLabel>Outcome</SectionLabel>
        <p className="text-[12px] sm:text-xs text-muted-foreground/80 leading-relaxed font-normal">
          {project.outcome}
        </p>
      </div>
    </div>
  </div>
);

// ─── Metadata row ─────────────────────────────────────────────────────────────

const MetaRow = ({ project }: { project: Project }) => (
  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] font-mono text-muted-foreground/60">
    <span className="inline-flex items-center gap-1.5">
      <CalendarDays size={11} className="shrink-0" />
      {project.year}
    </span>
    <span className="h-2.5 w-px bg-border/50" />
    <span className="inline-flex items-center gap-1.5">
      <Layers size={11} className="shrink-0" />
      {project.tags.length} stack
    </span>
    <span className="h-2.5 w-px bg-border/50" />
    <span className="inline-flex items-center gap-1.5">
      <Clock size={11} className="shrink-0" />
      {project.duration}
    </span>
    <span className="h-2.5 w-px bg-border/50" />
    <span className="inline-flex items-center gap-1.5">
      <User2 size={11} className="shrink-0" />
      {project.role}
    </span>
    <span className="h-2.5 w-px bg-border/50" />
    <ComplexityBar level={project.complexity} />
  </div>
);

// ─── Featured Card ────────────────────────────────────────────────────────────

const FeaturedCard = ({ project }: { project: Project }) => {
  const [expanded, setExpanded] = useState(false);
  const reducedMotion = useReducedMotion();
  const demoUrl = project.liveDemo || project.link || null;

  return (
    <div
      className="relative rounded-2xl border border-primary/20 bg-surface/40 overflow-hidden transition-all duration-300 md:hover:-translate-y-px md:hover:border-primary/30"
      style={{ willChange: "transform" }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="p-6 sm:p-12">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Star size={11} className="text-primary/60" />
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary/60">
              Featured Project
            </span>
          </div>
          <span className="text-[10px] font-mono text-muted-foreground/30 tracking-widest">
            01
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
          {/* Left */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-1">
                  {project.title}
                </h2>
                <span className="text-[11px] font-mono text-muted-foreground/50 uppercase tracking-wide">
                  {project.category}
                </span>
              </div>
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 flex items-center gap-1 text-muted-foreground/50 hover:text-primary transition-all duration-200 hover:-translate-y-0.5 hover:translate-x-0.5 mt-1"
                  style={{ willChange: "transform" }}
                >
                  <ArrowUpRight size={15} />
                </a>
              )}
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-xl">
              {project.description}
            </p>

            <MetaRow project={project} />
          </div>

          {/* Right: stats panel */}
          <div className="mt-6 lg:mt-0 lg:w-52 shrink-0">
            <div className="rounded-xl border border-border/40 bg-muted/20 divide-y divide-border/40">
              {[
                {
                  label: "Status",
                  node: <StatusBadge status={project.status} />,
                },
                {
                  label: "Complexity",
                  node: <ComplexityBar level={project.complexity} />,
                },
                {
                  label: "Duration",
                  node: (
                    <span className="text-[11px] font-mono text-foreground/70">
                      {project.duration}
                    </span>
                  ),
                },
                {
                  label: "Year",
                  node: (
                    <span className="text-[11px] font-mono text-foreground/70">
                      {project.year}
                    </span>
                  ),
                },
              ].map(({ label, node }) => (
                <div
                  key={label}
                  className="flex items-center justify-between px-4 py-2.5 text-[11px]"
                >
                  <span className="font-mono text-muted-foreground/50 uppercase tracking-wide">
                    {label}
                  </span>
                  {node}
                </div>
              ))}
              <div className="px-4 py-3">
                <span className="font-mono text-muted-foreground/50 uppercase tracking-wide text-[11px] block mb-2">
                  Stack
                </span>
                <div className="flex flex-col gap-3">
                  {project.technologies.map((g) => (
                    <div
                      key={g.label}
                      className="flex flex-col sm:flex-row sm:items-start gap-2"
                    >
                      <span className="text-[10px] font-mono text-muted-foreground/40 w-20 shrink-0 uppercase tracking-wider">
                        {g.label}
                      </span>

                      <div className="flex flex-wrap gap-1.5">
                        {g.items.map((item) => (
                          <Chip key={item}>{item}</Chip>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Toggle + expansion */}
        <div className="mt-5 pt-4 border-t border-border/40">
          <ExpandToggle
            expanded={expanded}
            onToggle={() => setExpanded((v) => !v)}
            reducedMotion={reducedMotion}
          />
          <AnimatedPanel open={expanded} reducedMotion={reducedMotion}>
            <div className="mt-5">
              <ExpandedContent project={project} />
            </div>
          </AnimatedPanel>
        </div>
      </div>
    </div>
  );
};

// ─── Project Card ──────────────────────────────────────────────────────────────

export const ProjectCard = ({
  project,
  index,
  onOpenDetails,
}: {
  project: Project;
  index: number;
  onOpenDetails: (project: Project) => void;
}) => {
  const demoUrl = project.liveDemo || project.link || null;

  return (
    <Reveal index={index}>
      <div
        onClick={() => onOpenDetails(project)}
        className="flex flex-col h-full rounded-2xl border border-border/50 bg-surface/20 md:hover:border-border/80 md:hover:bg-surface/30 md:hover:-translate-y-1 transition-all duration-250 cursor-pointer overflow-hidden group"
        style={{ willChange: "transform" }}
      >
        {/* Main Card Body */}
        <div className="flex flex-col flex-1 p-5 sm:p-6">
          {/* Header Area */}
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono text-muted-foreground/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-border/60" />
                <span className="text-[10px] font-mono uppercase tracking-wide text-muted-foreground/45">
                  {project.category}
                </span>
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-foreground truncate group-hover:text-primary transition-colors duration-200">
                {project.title}
              </h3>
            </div>
            <StatusBadge status={project.status} />
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3 flex-1">
            {project.description}
          </p>

          {/* Meta Information List */}
          <div className="space-y-2 pt-4 border-t border-border/30 text-[11px] font-mono text-muted-foreground/60">
            <div className="flex justify-between items-center">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays size={11} className="text-muted-foreground/40" />
                Year
              </span>
              <span className="text-foreground/70">{project.year}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="inline-flex items-center gap-1.5">
                <Layers size={11} className="text-muted-foreground/40" />
                Stack
              </span>
              <span className="text-foreground/70">
                {project.tags.length} technologies
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="inline-flex items-center gap-1.5">
                <Clock size={11} className="text-muted-foreground/40" />
                Duration
              </span>
              <span className="text-foreground/70">{project.duration}</span>
            </div>
          </div>
        </div>

        {/* Footer Actions (Static links pointing to Modal) */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-muted/10 border-t border-border/35 mt-auto">
          <button className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-muted-foreground/50 group-hover:text-primary transition-colors duration-200">
            <ChevronDown
              size={12}
              className="-rotate-90 group-hover:translate-x-0.5 transition-transform"
            />
            <span>view details</span>
          </button>

          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} // Supaya tidak men-trigger click modal
              className="inline-flex items-center gap-1 text-[11px] font-mono text-muted-foreground/50 hover:text-primary transition-all duration-200 hover:-translate-y-0.5"
              style={{ willChange: "transform" }}
            >
              <span>live demo</span>
              <ArrowUpRight size={12} />
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
};

// ─── Project Modal (Floating Detail) ──────────────────────────────────────────

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const reducedMotion = useReducedMotion();
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
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card Content */}
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
          {/* Header Strip Gradient */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {/* Modal Header */}
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

          {/* Scrollable Modal Body */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {/* Description */}
            <div>
              <SectionLabel>About Project</SectionLabel>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Quick Metrics Grid */}
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

            {/* Core Technologies Stack */}
            <div>
              <SectionLabel>Technology Stack</SectionLabel>
              <div className="flex flex-col gap-3 mt-2">
                {project.technologies.map((g) => (
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

            {/* Expanded Rich Details */}
            <div className="grid sm:grid-cols-2 gap-5 pt-4 border-t border-border/30">
              <div>
                <SectionLabel>Highlights</SectionLabel>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.highlights.map((h) => (
                    <Chip key={h}>{h}</Chip>
                  ))}
                </div>
              </div>
              <div>
                <SectionLabel>Learnings</SectionLabel>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.learnings.map((l) => (
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

          {/* Modal Footer / Action Bar */}
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

// ─── Page ─────────────────────────────────────────────────────────────────────

const Projects = () => {
  const [search, setSearch] = useState("");
  const [activeStatus, setActiveStatus] = useState<ProjectStatus | null>(null);
  const [activeYear, setActiveYear] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  // State baru untuk menampung data projek yang sedang dibuka di modal
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProject = allProjects[0];
  const restProjects = allProjects.slice(1);

  const completedCount = allProjects.filter(
    (p) => p.status === "Completed",
  ).length;
  const activeCount = allProjects.filter(
    (p) => p.status === "On Working",
  ).length;
  const experimentalCount = allProjects.filter(
    (p) => p.status === "Experimental",
  ).length;

  const allTechs = useMemo(() => {
    const set = new Set<string>();
    allProjects.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return set.size;
  }, []);

  const yearGroups = useMemo(() => {
    const map = new Map<string, number>();
    allProjects.forEach((p) => {
      map.set(p.year, (map.get(p.year) ?? 0) + 1);
    });
    return Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  }, []);

  const clearFilters = useCallback(() => {
    setSearch("");
    setActiveStatus(null);
    setActiveYear(null);
    setActiveCategory(null);
  }, []);

  const hasFilters = Boolean(
    search || activeStatus || activeYear || activeCategory,
  );

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return restProjects.filter((p) => {
      if (
        q &&
        !p.title.toLowerCase().includes(q) &&
        !p.category.toLowerCase().includes(q) &&
        !p.tags.some((t) => t.toLowerCase().includes(q))
      )
        return false;
      if (activeStatus && p.status !== activeStatus) return false;
      if (activeYear && p.year !== activeYear) return false;
      if (activeCategory && p.category !== activeCategory) return false;
      return true;
    });
  }, [search, activeStatus, activeYear, activeCategory, restProjects]);

  return (
    <PageTransition>
      <div className="container pt-28 sm:pt-32 pb-24">
        {/* ── Header ── */}
        <Reveal>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/50">
              / projects
            </span>
            <span className="h-px flex-1 max-w-[60px] bg-border/50" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/50">
              {String(allProjects.length).padStart(2, "0")} entries
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">
            projects
          </h1>
          <p className="text-muted-foreground max-w-xl text-sm sm:text-base leading-relaxed mb-8">
            a curated archive of things i've built — from quick experiments to
            full-stack applications. each entry is shipped, learned from, and
            documented.
          </p>

          {/* Stat strip */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-mono text-muted-foreground/70 mb-6">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {completedCount} completed
            </span>
            <span className="hidden sm:inline h-3 w-px bg-border/60" />
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              {activeCount} active
            </span>
            <span className="hidden sm:inline h-3 w-px bg-border/60" />
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              {experimentalCount} experimental
            </span>
            <span className="hidden sm:inline h-3 w-px bg-border/60" />
            <span className="text-muted-foreground/45">
              {allTechs} technologies
            </span>
          </div>

          {/* Year timeline */}
          <div className="flex items-center gap-4 mb-12 overflow-x-auto pb-1">
            {yearGroups.map(([year, count], i) => (
              <div key={year} className="flex items-center gap-4 shrink-0">
                {i > 0 && <span className="h-px w-6 bg-border/40 shrink-0" />}
                <div className="flex flex-col items-center gap-1">
                  <span className="text-[11px] font-mono text-foreground/70">
                    {year}
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-wide">
                    {count} {count === 1 ? "project" : "projects"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ── Featured ── */}
        <Reveal index={1}>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary/60">
              featured
            </span>
            <span className="h-px flex-1 bg-border/30" />
          </div>
          <FeaturedCard project={featuredProject} />
        </Reveal>

        {/* ── Archive ── */}
        <Reveal index={2}>
          <div className="flex items-center gap-3 mt-14 mb-6">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground/50">
              archive
            </span>
            <span className="h-px flex-1 bg-border/30" />
            <span className="text-[10px] font-mono text-muted-foreground/40 transition-all duration-300">
              {filtered.length} / {restProjects.length}
            </span>
          </div>
        </Reveal>

        {/* ── Search + Filters ── */}
        <Reveal index={3}>
          <div className="mb-6 space-y-3">
            <div className="relative">
              <Search
                size={13}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/40"
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="search by title, tech, or category…"
                className="w-full sm:max-w-sm bg-surface/30 border border-border/50 rounded-xl pl-9 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 outline-none focus:border-primary/40 focus:bg-surface/50 transition-all duration-200 font-mono"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {ALL_STATUSES.map((s) => (
                <FilterPill
                  key={s}
                  active={activeStatus === s}
                  onClick={() => setActiveStatus(activeStatus === s ? null : s)}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${statusDot[s]}`}
                  />
                  {s}
                </FilterPill>
              ))}
              <span className="h-5 w-px bg-border/40 self-center mx-1" />
              {ALL_YEARS.filter((y) =>
                restProjects.some((p) => p.year === y),
              ).map((y) => (
                <FilterPill
                  key={y}
                  active={activeYear === y}
                  onClick={() => setActiveYear(activeYear === y ? null : y)}
                >
                  {y}
                </FilterPill>
              ))}
              <span className="h-5 w-px bg-border/40 self-center mx-1" />
              {ALL_CATEGORIES.filter((c) =>
                restProjects.some((p) => p.category === c),
              ).map((c) => (
                <FilterPill
                  key={c}
                  active={activeCategory === c}
                  onClick={() =>
                    setActiveCategory(activeCategory === c ? null : c)
                  }
                >
                  {c}
                </FilterPill>
              ))}
              {hasFilters && (
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-muted-foreground/50 hover:text-foreground transition-colors duration-200 px-2 active:scale-95"
                  style={{ willChange: "transform" }}
                >
                  <X size={10} /> clear
                </button>
              )}
            </div>
          </div>
        </Reveal>

        {/* ── Project list ── */}
        <div>
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project, i) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={i}
                  onOpenDetails={(proj) => setSelectedProject(proj)}
                />
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="py-16 text-center">
                <p className="text-sm font-mono text-muted-foreground/50">
                  no projects match those filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-3 text-[11px] font-mono text-primary/60 hover:text-primary transition-colors duration-200"
                >
                  clear filters
                </button>
              </div>
            </Reveal>
          )}
        </div>

        {/* ── Shared Floating Detail Modal ── */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        {/* ── Footer note ── */}
        <Reveal index={4} className="mt-14 -mb-20">
          <div className="rounded-2xl border border-border/40 bg-surface/20 px-5 sm:px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 transition-colors duration-200 hover:border-border/60">
            <p className="text-sm text-muted-foreground">
              more projects live quietly on github — open source, drafts, and
              experiments.
            </p>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/40 shrink-0">
              archive · {new Date().getFullYear()}
            </span>
          </div>
        </Reveal>
      </div>
    </PageTransition>
  );
};

export default Projects;
