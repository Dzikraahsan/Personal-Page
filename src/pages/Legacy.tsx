import { useState, useMemo } from "react";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";
import {
  Archive,
  FlaskConical,
  Server,
  Calendar,
  Code2,
  FolderGit2,
  Cpu,
  Globe,
  Wallet,
  ClipboardList,
  ClipboardCheck,
  Home,
  Type,
  Layers,
  Clock,
  CheckCircle2,
  XCircle,
  BookOpen,
  Lightbulb,
  Target,
  BarChart2,
  Filter,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Status = "archived" | "completed" | "experimental" | "deprecated";
type Complexity = "low" | "medium" | "high";

interface TechGroup {
  label: string;
  items: string[];
}

interface LegacyItem {
  title: string;
  context: string;
  period: string;
  stack: string[];
  status: Status;
  icon: typeof Code2;
  archiveId: string;
  category: string;
  duration: string;
  complexity: Complexity;
  purpose: string;
  learnings: string[];
  highlights: string[];
  outcome: string;
  reflection: string;
  techGroups: TechGroup[];
}

interface Section {
  id: string;
  title: string;
  description: string;
  icon: typeof Archive;
  items: LegacyItem[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const sections: Section[] = [
  {
    id: "projects",
    title: "old projects",
    description:
      "early builds and shipped work that taught me how things actually break in production.",
    icon: FolderGit2,
    items: [
      {
        title: "Web School",
        archiveId: "WEB-2024-001",
        category: "Academic",
        context:
          "Simple CRUD inventory built as a class project. Taught me routing, forms, and database basics.",
        period: "2024",
        duration: "~3 months",
        stack: ["Laravel", "Blade", "MySQL"],
        status: "completed",
        complexity: "low",
        icon: Server,
        techGroups: [
          { label: "Backend", items: ["Laravel", "PHP"] },
          { label: "View", items: ["Blade"] },
          { label: "Database", items: ["MySQL"] },
        ],
        purpose:
          "Build a functional school inventory system for a class requirement — covering student records, subject management, and basic reporting.",
        learnings: [
          "CRUD Operations",
          "Form Handling",
          "Database Design",
          "MVC Pattern",
          "Server-side Routing",
        ],
        highlights: [
          "REST-style Routes",
          "Blade Templates",
          "MySQL Relations",
          "Auth Middleware",
        ],
        outcome: "Successfully completed",
        reflection:
          "I'd decouple the frontend from Blade today and use an API-first approach. The tight coupling made iterating on the UI slow and painful.",
      },
      {
        title: "Dream Home",
        archiveId: "WEB-2024-002",
        category: "Landing Page",
        context:
          "Built a simple housing website to showcase property listings and basic layouts. Focused on structuring pages and understanding how Laravel handles routing and views.",
        period: "2024",
        duration: "~6 weeks",
        stack: ["PHP", "Laravel", "CSS", "Bootstrap"],
        status: "archived",
        complexity: "low",
        icon: Home,
        techGroups: [
          { label: "Backend", items: ["Laravel", "PHP"] },
          { label: "Styling", items: ["CSS", "Bootstrap"] },
        ],
        purpose:
          "Create a property listing site to practice clean page structure, navigation, and static content presentation in a real-world context.",
        learnings: [
          "Responsive Layouts",
          "Bootstrap Grid",
          "Laravel Routing",
          "View Composition",
          "SEO Basics",
        ],
        highlights: [
          "Property Listing Grid",
          "Responsive Navigation",
          "Contact Form",
          "Dynamic Routes",
        ],
        outcome: "Prototype only",
        reflection:
          "Bootstrap made layout fast but created a dependency trap. I relied on it too heavily and never deeply understood the CSS it was writing for me.",
      },
      {
        title: "Text Generator",
        archiveId: "WEB-2025-001",
        category: "Utility",
        context:
          "Built a simple text generator to experiment with input handling and dynamic output. Focused on updating content in real time based on user input.",
        period: "2025",
        duration: "~2 weeks",
        stack: ["HTML", "CSS", "JavaScript"],
        status: "archived",
        complexity: "low",
        icon: Type,
        techGroups: [{ label: "Core", items: ["HTML", "CSS", "JavaScript"] }],
        purpose:
          "Explore real-time DOM manipulation and user input events without any framework — pure vanilla as a fundamentals exercise.",
        learnings: [
          "DOM Manipulation",
          "Event Listeners",
          "Real-time Updates",
          "String Operations",
          "Vanilla JS Patterns",
        ],
        highlights: [
          "Live Preview",
          "Input Validation",
          "Clipboard Copy",
          "Zero Dependencies",
        ],
        outcome: "Learning experiment",
        reflection:
          "Intentionally frameworkless. Going back to basics here helped me appreciate what React actually abstracts away. Worth doing again.",
      },
    ],
  },
  {
    id: "system",
    title: "build system",
    description:
      "small things i built to understand how stuff works — most of them were just tests and never meant to be finished.",
    icon: FlaskConical,
    items: [
      {
        title: "Finance",
        archiveId: "SYS-2024-001",
        category: "Dashboard",
        context:
          "Built a simple finance tracker to manage income and expenses. Focused on handling data with Supabase and keeping everything in sync with the UI.",
        period: "2024",
        duration: "~2 months",
        stack: ["React.js", "Vite", "Tailwind", "Supabase"],
        status: "completed",
        complexity: "medium",
        icon: Wallet,
        techGroups: [
          { label: "Frontend", items: ["React.js", "Vite", "Tailwind"] },
          { label: "Backend", items: ["Supabase"] },
        ],
        purpose:
          "Track personal income and expenses with persistent storage — my first time connecting a React app to a real backend service.",
        learnings: [
          "State Management",
          "Supabase Auth",
          "Real-time Sync",
          "Data Aggregation",
          "React Hooks",
        ],
        highlights: [
          "Transaction Dashboard",
          "Category Breakdown",
          "Supabase Realtime",
          "Authentication",
        ],
        outcome: "Successfully completed",
        reflection:
          "Supabase was a revelation for shipping fast. I'd add proper error boundaries and loading states — the optimistic UI I shipped was too naive.",
      },
      {
        title: "Activities Tracking",
        archiveId: "SYS-2024-002",
        category: "Productivity",
        context:
          "Built a simple activity tracker to record daily actions and store them locally. Focused on managing state and keeping the UI in sync with stored data.",
        period: "2024",
        duration: "~5 weeks",
        stack: ["React.js", "Vite", "Tailwind"],
        status: "completed",
        complexity: "low",
        icon: ClipboardList,
        techGroups: [
          { label: "Frontend", items: ["React.js", "Vite", "Tailwind"] },
          { label: "Storage", items: ["localStorage"] },
        ],
        purpose:
          "Log and review daily habits and tasks — a focused exercise in local state, persistence, and reactive UI without a backend.",
        learnings: [
          "Local Storage",
          "React State",
          "CRUD in React",
          "Component Composition",
          "Date Handling",
        ],
        highlights: [
          "Activity Log",
          "Local Persistence",
          "Daily Summary",
          "Filter by Date",
        ],
        outcome: "Successfully completed",
        reflection:
          "The localStorage layer was bolted on as an afterthought. I'd abstract it into a custom hook from day one to keep components clean.",
      },
      {
        title: "Cleanliness Assessment",
        archiveId: "SYS-2025-001",
        category: "Internal Tool",
        context:
          "Built a simple system to record and evaluate cleanliness scores. Focused on handling form input, storing data in MySQL, and displaying results through Blade views.",
        period: "2025",
        duration: "~6 weeks",
        stack: ["Laravel", "Blade", "MySQL"],
        status: "completed",
        complexity: "medium",
        icon: ClipboardCheck,
        techGroups: [
          { label: "Backend", items: ["Laravel", "PHP"] },
          { label: "View", items: ["Blade"] },
          { label: "Database", items: ["MySQL"] },
        ],
        purpose:
          "Digitize a manual inspection workflow — replace paper-based scoring sheets with a form-driven web system and a summary report view.",
        learnings: [
          "Form Validation",
          "Scoring Logic",
          "Report Generation",
          "Database Relations",
          "CRUD Operations",
        ],
        highlights: [
          "Score Calculator",
          "Assessment History",
          "Printable Report",
          "Role-based Access",
        ],
        outcome: "Successfully completed",
        reflection:
          "The domain logic ended up living inside controllers instead of a dedicated service layer. A service class per entity would have kept things testable.",
      },
    ],
  },
  {
    id: "deprecated",
    title: "deprecated projects",
    description:
      "stacks and tools i used heavily before moving on to something better.",
    icon: Archive,
    items: [
      {
        title: "Personal Portfolio v1",
        archiveId: "DEP-2024-001",
        category: "Portfolio",
        context:
          "First static portfolio built to learn semantic markup and basic layout systems.",
        period: "2024",
        duration: "~3 weeks",
        stack: ["HTML", "CSS", "Bootstrap"],
        status: "deprecated",
        complexity: "low",
        icon: Globe,
        techGroups: [
          { label: "Core", items: ["HTML", "CSS"] },
          { label: "Framework", items: ["Bootstrap"] },
        ],
        purpose:
          "Get a personal site live — learn how to structure a professional-looking page from scratch with no JavaScript.",
        learnings: [
          "Semantic HTML",
          "CSS Basics",
          "Grid Layout",
          "Bootstrap Utilities",
          "Page Structure",
        ],
        highlights: [
          "Responsive Layout",
          "Project Showcase",
          "Contact Section",
          "Zero JS",
        ],
        outcome: "Replaced by newer version",
        reflection:
          "This site is what made me want to learn React. Updating it required touching raw HTML everywhere — component thinking was the obvious fix.",
      },
      {
        title: "Salary Management System",
        archiveId: "DEP-2024-002",
        category: "Enterprise Tool",
        context:
          "Building a salary management system to handle employee data, calculate wages, and keep everything organized in one place. Focused on how the backend connects with the database and how the data flows through the app.",
        period: "2024",
        duration: "~4 months",
        stack: ["PHP", "MySQL"],
        status: "deprecated",
        complexity: "high",
        icon: Code2,
        techGroups: [
          { label: "Backend", items: ["PHP"] },
          { label: "Database", items: ["MySQL"] },
        ],
        purpose:
          "Handle employee payroll — store records, calculate monthly salaries with deductions, and generate printable pay slips.",
        learnings: [
          "Complex SQL Queries",
          "Data Relationships",
          "Business Logic",
          "Report Design",
          "PHP OOP",
        ],
        highlights: [
          "Payroll Engine",
          "Employee Records",
          "Pay Slip PDF",
          "Role-based Auth",
          "Audit Log",
        ],
        outcome: "Abandoned during development",
        reflection:
          "The scope grew faster than my skills at the time. I'd use a framework with proper ORM support today — raw PHP and raw SQL queries do not scale well when business rules get complex.",
      },
    ],
  },
];

// ─── Constants ─────────────────────────────────────────────────────────────────

const statusConfig: Record<
  Status,
  { label: string; cls: string; dot: string }
> = {
  archived: {
    label: "archived",
    cls: "text-muted-foreground border-border bg-secondary/40",
    dot: "bg-muted-foreground/60",
  },
  completed: {
    label: "completed",
    cls: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
    dot: "bg-emerald-400",
  },
  experimental: {
    label: "experimental",
    cls: "text-amber-400 border-amber-500/20 bg-amber-500/5",
    dot: "bg-amber-400",
  },
  deprecated: {
    label: "deprecated",
    cls: "text-muted-foreground border-border/40 bg-secondary/30",
    dot: "bg-muted-foreground/40",
  },
};

const complexityConfig: Record<Complexity, { label: string; cls: string }> = {
  low: { label: "Low", cls: "text-sky-400" },
  medium: { label: "Medium", cls: "text-violet-400" },
  high: { label: "High", cls: "text-rose-400" },
};

const ALL_STATUSES: Status[] = [
  "completed",
  "archived",
  "deprecated",
  "experimental",
];

// ─── Sub-components ────────────────────────────────────────────────────────────

interface SectionStatsProps {
  items: LegacyItem[];
}

const SectionStats = ({ items }: SectionStatsProps) => {
  const completed = items.filter((i) => i.status === "completed").length;
  const archived = items.filter(
    (i) => i.status === "archived" || i.status === "deprecated",
  ).length;
  const techs = new Set(items.flatMap((i) => i.stack)).size;

  return (
    <div className="flex flex-wrap items-center gap-3 mt-2">
      {[
        { label: "projects", value: items.length },
        { label: "completed", value: completed },
        { label: "archived", value: archived },
        { label: "technologies", value: techs },
      ].map(({ label, value }) => (
        <span
          key={label}
          className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-muted-foreground/70 bg-secondary/40 border border-border/40 rounded px-2 py-0.5"
        >
          <span className="text-foreground/80 font-semibold">{value}</span>
          {label}
        </span>
      ))}
    </div>
  );
};

interface FilterBarProps {
  activeStatus: Status | null;
  onStatusChange: (s: Status | null) => void;
}

const FilterBar = ({ activeStatus, onStatusChange }: FilterBarProps) => (
  <div className="flex flex-wrap items-center gap-2 mb-8">
    <span className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-muted-foreground/50 mr-1">
      <Filter size={10} />
      filter
    </span>
    <button
      onClick={() => onStatusChange(null)}
      className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded border transition-colors ${
        activeStatus === null
          ? "border-primary/50 bg-primary/8 text-foreground"
          : "border-border/40 bg-transparent text-muted-foreground hover:border-border hover:text-foreground/80"
      }`}
    >
      all
    </button>
    {ALL_STATUSES.map((s) => (
      <button
        key={s}
        onClick={() => onStatusChange(activeStatus === s ? null : s)}
        className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded border transition-colors ${
          activeStatus === s
            ? `border-current ${statusConfig[s].cls}`
            : "border-border/40 bg-transparent text-muted-foreground hover:border-border hover:text-foreground/80"
        }`}
      >
        {s}
      </button>
    ))}
  </div>
);

interface ArchiveEntryProps {
  item: LegacyItem;
  index: number;
}

const ArchiveEntry = ({ item, index }: ArchiveEntryProps) => {
  const ItemIcon = item.icon;
  const sc = statusConfig[item.status];
  const cc = complexityConfig[item.complexity];

  return (
    <Reveal
      key={item.title}
      index={index}
      className="group relative py-3 first:pt-1 last:pb-0"
    >
      {/* Timeline Bullet Accent */}
      <span
        className={`absolute -left-[31px] top-6.5 w-3 h-3 rounded-full border border-background bg-border/70 group-hover:bg-primary group-hover:scale-110 group-hover:shadow-[0_0_8px_1px_hsl(var(--primary)/0.5)] transition-all duration-300 z-10`}
      />

      {/*
        CARD WRAPPER
      */}
      <div className="rounded-2xl border border-border/40 bg-surface/10 hover:border-border/70 hover:bg-surface/15 transition-all duration-300 ease-out overflow-hidden shadow-[0_4px_20px_-12px_hsl(var(--primary)/0.02)]">

        <div className="p-5 sm:p-6 block">
          {/* Top meta tier: ID & Category metadata */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground/40 uppercase">
              {item.archiveId}
            </span>
            <span className="font-mono text-[9px] tracking-wider uppercase text-muted-foreground/50 px-2 py-0.5 rounded border border-border/40 bg-background/40">
              {item.category}
            </span>
          </div>

          {/* Main Tier: Icon, Title & Status indicators */}
          <div className="flex items-start justify-between gap-4 mb-3.5">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="p-1.5 rounded-lg border bg-background/40 border-border/50 text-muted-foreground group-hover:border-primary/20 group-hover:text-primary transition-colors duration-300">
                <ItemIcon size={14} className="shrink-0" />
              </div>
              <h3 className="text-[16px] font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                {item.title}
              </h3>
            </div>

            <div className="flex items-center gap-2 shrink-0 mt-[2px]">
              <span
                className={`inline-flex items-center gap-1.5 font-mono text-[9px] tracking-widest uppercase px-2 py-0.5 rounded-full border ${sc.cls}`}
              >
                <span className={`w-1 h-1 rounded-full ${sc.dot}`} />
                {sc.label}
              </span>
            </div>
          </div>

          {/* Core context description */}
          <p className="text-sm text-muted-foreground/85 leading-relaxed mb-4 max-w-2xl">
            {item.context}
          </p>

          {/* Horizontal metrics row */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-mono text-muted-foreground/60 pt-3 border-t border-border/20 mb-5">
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={11} className="text-muted-foreground/40" />
              {item.period}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={11} className="text-muted-foreground/40" />
              {item.duration}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Layers size={11} className="text-muted-foreground/40" />
              {item.stack.length} technologies
            </span>
            <span className={`inline-flex items-center gap-1.5 ${cc.cls}`}>
              <BarChart2 size={11} className="opacity-80" />
              {cc.label} Complexity
            </span>
          </div>

          {/* Detailed Content Ecosystem Area */}
          <div className="border-t border-border/20 pt-5 grid grid-cols-1 md:grid-cols-2 gap-6 bg-muted/5 -mx-5 sm:-mx-6 px-5 sm:px-6">

            {/* 1. Tech Ecosystem Stack breakdown */}
            <div className="space-y-3">
              <h4 className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground/40">
                <Cpu size={10} className="text-muted-foreground/50" />
                Technology Stack
              </h4>
              <div className="space-y-2">
                {item.techGroups.map((g) => (
                  <div key={g.label} className="flex items-start gap-3">
                    <span className="text-[10px] font-mono text-muted-foreground/40 w-16 shrink-0 mt-0.5 uppercase tracking-wider">
                      {g.label}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {g.items.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-background/50 border border-border/40 text-muted-foreground transition-all hover:border-border/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Project Core Purpose */}
            <div className="space-y-2.5">
              <h4 className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground/40">
                <Target size={10} className="text-muted-foreground/50" />
                Project Purpose
              </h4>
              <p className="text-xs text-muted-foreground/80 leading-relaxed max-w-xl">
                {item.purpose}
              </p>
            </div>

            {/* 3. Engineering Learnings nodes */}
            <div className="space-y-2.5">
              <h4 className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground/40">
                <BookOpen size={10} className="text-muted-foreground/50" />
                Key Learnings
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {item.learnings.map((l) => (
                  <span
                    key={l}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-primary/5 border border-primary/15 text-primary/70"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>

            {/* 4. Architecture Highlights */}
            <div className="space-y-2.5">
              <h4 className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground/40">
                <Lightbulb size={10} className="text-muted-foreground/50" />
                Technical Highlights
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {item.highlights.map((h) => (
                  <span
                    key={h}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-background/40 border border-border/40 text-muted-foreground/80"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>

            {/* 5. Production Outcome & Post-mortem Reflection */}
            <div className="md:col-span-2 pt-4 border-t border-border/20 mt-2 pb-1">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="space-y-1.5">
                  <h4 className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground/40">
                    <CheckCircle2 size={10} className="text-emerald-400/60" />
                    Final Outcome
                  </h4>
                  <p className="text-xs font-mono text-foreground/80 leading-relaxed">
                    {item.outcome}
                  </p>
                </div>

                <div className="hidden sm:block w-px bg-border/20 self-stretch my-1" />

                <div className="sm:col-span-2 space-y-1.5">
                  <h4 className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground/40">
                    <XCircle size={10} className="text-primary/60" />
                    Retrospective Reflection
                  </h4>
                  <p className="text-xs text-muted-foreground/75 leading-relaxed italic border-l-2 border-primary/20 pl-3 ml-1 py-0.5">
                    "{item.reflection}"
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Reveal>
  );
};

// ─── Page ──────────────────────────────────────────────────────────────────────

const Legacy = () => {
  const [activeStatus, setActiveStatus] = useState<Status | null>(null);

  const filteredSections = useMemo(
    () =>
      sections.map((s) => ({
        ...s,
        items: activeStatus
          ? s.items.filter((i) => i.status === activeStatus)
          : s.items,
      })),
    [activeStatus],
  );

  const totalProjects = sections.reduce((a, s) => a + s.items.length, 0);
  const totalCompleted = sections.reduce(
    (a, s) => a + s.items.filter((i) => i.status === "completed").length,
    0,
  );

  return (
    <PageTransition>
      <div className="container pt-32 -mb-8">
        {/* ── Page header ── */}
        <Reveal>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/60">
              / legacy
            </span>
            <span className="h-px flex-1 max-w-[80px] bg-border/60" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/60">
              archive
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">
            legacy
          </h1>
          <p className="text-muted-foreground max-w-lg mb-4">
            an archive of past projects, experiments, and systems i've moved on
            from — kept here as a record of the path.
          </p>

          {/* Page-level stats */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/40 mr-1">
              index
            </span>
            {[
              { label: "entries", value: totalProjects },
              { label: "completed", value: totalCompleted },
              { label: "sections", value: sections.length },
            ].map(({ label, value }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-muted-foreground/60 bg-secondary/30 border border-border/30 rounded px-2 py-0.5"
              >
                <span className="text-foreground/70 font-semibold">
                  {value}
                </span>
                {label}
              </span>
            ))}
          </div>
        </Reveal>

        {/* ── Filter bar ── */}
        <Reveal index={1}>
          <FilterBar
            activeStatus={activeStatus}
            onStatusChange={setActiveStatus}
          />
        </Reveal>

        {/* ── Sections ── */}
        <div className="space-y-14">
          {filteredSections.map((section, sIdx) => {
            const SectionIcon = section.icon;
            if (section.items.length === 0) return null;

            return (
              <Reveal as="section" key={section.id} index={sIdx + 2}>
                {/* Section header */}
                <div className="flex items-start gap-3 mb-2">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-secondary/60 border border-border/60 flex items-center justify-center">
                    <SectionIcon size={16} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg font-semibold tracking-tight text-foreground">
                      {section.title}
                    </h2>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {section.description}
                    </p>
                    <SectionStats items={section.items} />
                  </div>
                </div>

                {/* Timeline items */}
                <div className="relative pl-6 ml-4 mt-5 border-l border-border/50">
                  {section.items.map((item, i) => (
                    <ArchiveEntry key={item.title} item={item} index={i} />
                  ))}
                </div>
              </Reveal>
            );
          })}

          {/* Empty state */}
          {filteredSections.every((s) => s.items.length === 0) && (
            <div className="py-16 text-center text-muted-foreground/50 text-sm font-mono">
              no entries match this filter.
            </div>
          )}
        </div>

        {/* ── Footer record ── */}
        <Reveal>
          <div className="mt-10 mb-7 border-t border-border/30 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[10px] font-mono uppercase tracking-widest text-muted-foreground/30">
            <span>archive — personal engineering record</span>
            <span>
              {totalProjects} total entries across {sections.length} collections
            </span>
          </div>
        </Reveal>
      </div>
    </PageTransition>
  );
};

export default Legacy;
