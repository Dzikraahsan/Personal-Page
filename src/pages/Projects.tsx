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
  <div className="grid sm:grid-cols-2 gap-5">
    <div>
      <SectionLabel>Highlights</SectionLabel>
      <div className="flex flex-wrap gap-1.5">
        {project.highlights.map((h) => (
          <Chip key={h}>{h}</Chip>
        ))}
      </div>
    </div>
    <div>
      <SectionLabel>Learnings</SectionLabel>
      <div className="flex flex-wrap gap-1.5">
        {project.learnings.map((l) => (
          <Chip key={l}>{l}</Chip>
        ))}
      </div>
    </div>
    <div>
      <SectionLabel>Challenge</SectionLabel>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {project.challenges}
      </p>
    </div>
    <div>
      <SectionLabel>Outcome</SectionLabel>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {project.outcome}
      </p>
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

// ─── Project Row ──────────────────────────────────────────────────────────────

const ProjectRow = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const [expanded, setExpanded] = useState(false);
  const reducedMotion = useReducedMotion();
  const demoUrl = project.liveDemo || project.link || null;

  return (
    <Reveal index={index}>
      <div
        className={`rounded-xl border overflow-hidden transition-all duration-250 ${
          expanded
            ? "border-primary/20 bg-surface/40"
            : "border-border/50 bg-surface/20 md:hover:border-border/80 md:hover:bg-surface/30 md:hover:-translate-y-px"
        }`}
        style={{ willChange: "transform" }}
      >
        <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5">
          {/* Number */}
          <span className="shrink-0 text-[11px] font-mono text-muted-foreground/25 mt-0.5 w-5 text-right">
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 mb-1.5">
              <h3 className="text-[15px] font-semibold tracking-tight text-foreground">
                {project.title}
              </h3>
              <span className="h-2.5 w-px bg-border/50" />
              <span className="text-[10px] font-mono uppercase tracking-wide text-muted-foreground/45">
                {project.category}
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] font-mono text-muted-foreground/55">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays size={11} />
                {project.year}
              </span>
              <span className="h-2.5 w-px bg-border/50" />
              <span className="inline-flex items-center gap-1.5">
                <Layers size={11} />
                {project.tags.length} stack
              </span>
              <span className="h-2.5 w-px bg-border/50" />
              <span className="inline-flex items-center gap-1.5">
                <Clock size={11} />
                {project.duration}
              </span>
              <span className="h-2.5 w-px bg-border/50 hidden sm:inline" />
              <span className="hidden sm:inline">
                <ComplexityBar level={project.complexity} />
              </span>
            </div>
          </div>

          {/* Right actions */}
          <div className="shrink-0 flex flex-col items-end gap-2 ml-1">
            <StatusBadge status={project.status} />
            <div className="flex items-center gap-2 mt-0.5">
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground/40 hover:text-primary transition-all duration-200 hover:-translate-y-0.5 hover:translate-x-0.5"
                  style={{ willChange: "transform" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ArrowUpRight size={13} />
                </a>
              )}
              <button
                onClick={() => setExpanded((v) => !v)}
                className="text-muted-foreground/35 hover:text-primary transition-colors duration-200"
              >
                <ChevronDown
                  size={13}
                  style={{
                    transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                    transition: reducedMotion
                      ? "none"
                      : "transform 240ms cubic-bezier(0.4,0,0.2,1)",
                  }}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Expanded panel */}
        <AnimatedPanel open={expanded} reducedMotion={reducedMotion}>
          <div className="border-t border-border/40 px-4 sm:px-5 py-5 pl-12 sm:pl-14">
            <ExpandedContent project={project} />
          </div>
        </AnimatedPanel>
      </div>
    </Reveal>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────

const Projects = () => {
  const [search, setSearch] = useState("");
  const [activeStatus, setActiveStatus] = useState<ProjectStatus | null>(null);
  const [activeYear, setActiveYear] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

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

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">
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
        <div className="space-y-3">
          {filtered.length > 0 ? (
            filtered.map((project, i) => (
              <ProjectRow key={project.title} project={project} index={i} />
            ))
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
