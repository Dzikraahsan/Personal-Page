import { useState, useEffect } from "react";
import {
  Code2,
  Server,
  FileCode,
  Palette,
  Clock,
  BookOpen,
  Target,
  TrendingUp,
  CheckCircle2,
  Circle,
  Layers,
} from "lucide-react";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";

// ─── Types ────────────────────────────────────────────────────────────────────

type Milestone = {
  label: string;
  done: boolean;
};

type TechItem = {
  name: string;
  category: string;
  logo?: string;
};

type SkillGroup = {
  label: string;
  items: string[];
};

type ExperimentDetail = {
  overview: string;
  journeyNarrative: string;
  currentFocus: string[];
  skillGroups: SkillGroup[];
  milestones: Milestone[];
  progressPercent: number;
  progressStage: "beginner" | "intermediate" | "advanced";
  techEcosystem: TechItem[];
  timeInvestment: {
    started: string;
    consistency: string;
  };
  personalNote: string;
};

type Experiment = {
  title: string;
  description: string;
  status: "learning" | "completed" | "paused";
  duration: string;
  tools: string[];
  icon: React.ElementType;
  logo?: string;
  detail: ExperimentDetail;
};

// ─── Data (Keep Original Structure) ──────────────────────────────────────────

const experiments: Experiment[] = [
  {
    title: "Learn Dart",
    description:
      "Learning the fundamentals of Dart, from its basic syntax to how the core concepts work together in building simple applications.",
    status: "learning",
    duration: "Ongoing · 2026",
    tools: ["SDK", "Flutter"],
    icon: Code2,
    logo: "https://cdn.simpleicons.org/dart",
    detail: {
      overview:
        "Dart caught my attention as the language powering Flutter — a framework that lets you build cross-platform apps from a single codebase. I started it to expand beyond web and understand how mobile UI development works at a lower level.",
      journeyNarrative:
        "Getting into Dart felt surprisingly approachable coming from TypeScript. The type system is strict and familiar, and the syntax doesn't throw too many surprises. I started by working through the official Dart tour, then moved into small CLI scripts to test the language constructs. The async/await model felt similar to JavaScript, which helped a lot. Where I struggled early on was understanding how Dart's sound null safety works in practice — especially when migrating patterns I knew from JS. Over time, clicking through Flutter's widget tree started making more sense as I understood how Dart classes and constructors compose. I'm currently focused on solidifying OOP principles in Dart before going deeper into Flutter's reactive model.",
      currentFocus: [
        "Dart OOP",
        "Null Safety",
        "Async Streams",
        "Flutter Widgets",
      ],
      skillGroups: [
        {
          label: "Core",
          items: ["Variables", "Functions", "Classes", "Null Safety"],
        },
        { label: "Async", items: ["Future", "async/await", "Streams"] },
        {
          label: "Flutter",
          items: ["Widgets", "StatefulWidget", "Hot Reload"],
        },
      ],
      milestones: [
        { label: "Learned Dart Syntax", done: true },
        { label: "Understood Null Safety", done: false },
        { label: "Built First CLI App", done: false },
        { label: "Flutter Widget Basics", done: false },
        { label: "State Management", done: false },
        { label: "Published App", done: false },
      ],
      progressPercent: 10,
      progressStage: "beginner",
      techEcosystem: [
        {
          name: "Dart",
          category: "Language",
          logo: "https://cdn.simpleicons.org/dart",
        },
        {
          name: "Flutter",
          category: "UI Framework",
          logo: "https://cdn.simpleicons.org/flutter/54C5F8",
        },
      ],
      timeInvestment: { started: "Early 2026", consistency: "Weekly sessions" },
      personalNote:
        "Dart is the first language I've picked up that feels like it was designed with UI in mind from the start. The way everything composes in Flutter's widget tree is genuinely elegant once it clicks. Still early days, but I can already feel the potential.",
    },
  },
  {
    title: "Learn React.js",
    description:
      "Exploring how React works, from its structure to the way everything connects and runs together.",
    status: "learning",
    duration: "Ongoing · 2025 - now",
    tools: ["React", "Vite", "JSX", "TSX", "Tailwind CSS"],
    icon: Code2,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    detail: {
      overview:
        "React is the framework powering this very portfolio. I chose it as my primary frontend framework because of its component model, massive ecosystem, and how naturally it pairs with TypeScript. It's become my main tool for building interactive UIs.",
      journeyNarrative:
        "I started React with a basic understanding of JavaScript and immediately noticed the learning curve wasn't the syntax — it was the mental model. Understanding why React re-renders, how to think in components, and when to lift state up took real time. The transition from class components to hooks was where things finally clicked. useState and useEffect became second nature, but I had to fight through several broken component cycles before understanding how the dependency array actually worked. Working with TypeScript in React was a turning point — it made my components feel deliberate and safe. This portfolio itself is the biggest React project I've built, and every component I wrote here taught me something new about composition, props design, and animation integration.",
      currentFocus: [
        "Custom Hooks",
        "Context API",
        "React Router",
        "TypeScript Generics",
      ],
      skillGroups: [
        { label: "Core", items: ["Components", "Props", "State", "Hooks"] },
        {
          label: "Routing",
          items: ["React Router", "Dynamic Routes", "Layouts"],
        },
        {
          label: "Styling",
          items: ["Tailwind CSS", "CSS Variables", "Animations"],
        },
        {
          label: "TypeScript",
          items: ["Type Safety", "Interfaces", "Generics"],
        },
      ],
      milestones: [
        { label: "Understood JSX & TSX", done: true },
        { label: "Integrated TypeScript", done: true },
        { label: "Mastered useState / useEffect", done: false },
        { label: "Built Reusable Components", done: false },
        { label: "Context API & Global State", done: false },
        { label: "Advanced Patterns", done: false },
      ],
      progressPercent: 23,
      progressStage: "beginner",
      techEcosystem: [
        {
          name: "React",
          category: "UI Library",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Vite",
          category: "Build Tool",
          logo: "https://cdn.simpleicons.org/vite/646CFF",
        },
        {
          name: "TypeScript",
          category: "Language",
          logo: "https://cdn.simpleicons.org/typescript/3178C6",
        },
        {
          name: "Tailwind CSS",
          category: "Styling",
          logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
        },
      ],
      timeInvestment: { started: "Mid 2025", consistency: "Daily practice" },
      personalNote:
        "React changed how I think about UI. Before it, I thought about pages — now I think about components, state, and data flow. Building this portfolio in React pushed my understanding further than any tutorial could. Every design decision forced a real architectural choice.",
    },
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
    detail: {
      overview:
        "Laravel introduced me to backend development through a framework that makes PHP feel modern. I started it to understand how servers, routing, and databases work together — the parts of an app that React doesn't touch.",
      journeyNarrative:
        "Going into Laravel, I had very little PHP experience. The framework's opinionated structure actually helped — instead of making dozens of architecture decisions, I followed Laravel's conventions and focused on understanding each layer. Routes made sense quickly, then controllers, then Blade templates. Eloquent ORM was a revelation: I could interact with a MySQL database using expressive, readable PHP without writing raw SQL constantly. The hardest part was wrapping my head around the middleware pipeline and how requests flow through the application. I've built a few small CRUD apps — a task manager and a basic blog — which helped me see how authentication, validation, and database relationships connect in a real project.",
      currentFocus: [
        "Eloquent Relationships",
        "Laravel Auth",
        "REST APIs",
        "Middleware",
      ],
      skillGroups: [
        {
          label: "Routing",
          items: ["Route Definitions", "Route Groups", "Middleware"],
        },
        {
          label: "Database",
          items: ["Migrations", "Eloquent ORM", "Relationships", "Seeders"],
        },
        { label: "Auth", items: ["Laravel Breeze", "Sessions", "Policies"] },
        {
          label: "Backend",
          items: ["Controllers", "Request Validation", "Blade Views"],
        },
      ],
      milestones: [
        { label: "Learned PHP Basics", done: true },
        { label: "Understood MVC Pattern", done: true },
        { label: "Built First CRUD App", done: true },
        { label: "Deployed Laravel App", done: true },
        { label: "Implemented Authentication", done: false },
        { label: "Built REST API", done: false },
      ],
      progressPercent: 61,
      progressStage: "intermediate",
      techEcosystem: [
        {
          name: "Laravel",
          category: "PHP Framework",
          logo: "https://cdn.simpleicons.org/laravel/FF2D20",
        },
        {
          name: "PHP",
          category: "Language",
          logo: "https://cdn.simpleicons.org/php/777BB4",
        },
        {
          name: "MySQL",
          category: "Database",
          logo: "https://cdn.simpleicons.org/mysql/white",
        },
        {
          name: "Composer",
          category: "Package Manager",
          logo: "https://cdn.simpleicons.org/composer",
        },
      ],
      timeInvestment: {
        started: "Early 2025",
        consistency: "Several times a week",
      },
      personalNote:
        "Laravel gave me a genuine appreciation for backend architecture. Seeing a request travel from a route through middleware, hit a controller, query a database via Eloquent, and return a response — that full picture changed how I think about web apps entirely.",
    },
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
    detail: {
      overview:
        "JavaScript was the first programming language that felt immediately real — changes showed up in the browser instantly. TypeScript followed naturally when I wanted to write code that didn't break in surprising ways. Together, they form the foundation of everything else I've built.",
      journeyNarrative:
        "My JavaScript journey started with basic DOM manipulation — querying elements, adding event listeners, toggling classes. The early wins were small but satisfying. Things got harder when asynchronous programming arrived: callbacks were confusing, Promises were better but still awkward, and async/await finally made async code readable. I spent a long time on closures and how scope works in JavaScript, which paid off later when understanding React hooks. TypeScript came after a few months of plain JS, introduced through a React project. The compiler errors felt brutal at first, but over time they became a trusted collaborator — catching mistakes before runtime. Strict typing changed how I design functions and interfaces.",
      currentFocus: [
        "TypeScript Generics",
        "Advanced Types",
        "Module System",
        "Async Patterns",
      ],
      skillGroups: [
        {
          label: "JS Core",
          items: ["Closures", "Prototypes", "Event Loop", "Scope"],
        },
        { label: "Async", items: ["Promises", "async/await", "fetch API"] },
        {
          label: "TypeScript",
          items: ["Interfaces", "Types", "Enums", "Generics"],
        },
        { label: "DOM", items: ["Selectors", "Events", "Mutation Observer"] },
      ],
      milestones: [
        { label: "DOM Manipulation", done: true },
        { label: "Async / Promises", done: true },
        { label: "ES6+ Syntax", done: true },
        { label: "TypeScript Basics", done: true },
        { label: "Advanced TypeScript Patterns", done: false },
        { label: "Design Patterns in JS", done: false },
      ],
      progressPercent: 65,
      progressStage: "intermediate",
      techEcosystem: [
        {
          name: "JavaScript",
          category: "Language",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "TypeScript",
          category: "Language",
          logo: "https://cdn.simpleicons.org/typescript/3178C6",
        },
        {
          name: "Node.js",
          category: "Runtime",
          logo: "https://cdn.simpleicons.org/nodedotjs",
        },
      ],
      timeInvestment: { started: "Late 2024", consistency: "Daily" },
      personalNote:
        "JS and TS are the languages I think in now. TypeScript especially — once I stopped seeing it as optional extra work and started seeing it as documentation that runs, everything changed. I write better code because of it.",
    },
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
    detail: {
      overview:
        "HTML and CSS were the starting point — the raw materials of the web. This is where I first understood that building interfaces is a real craft, not just dragging things around. CSS in particular turned out to be far deeper than I initially expected.",
      journeyNarrative:
        "I started with basic HTML structure — headings, paragraphs, links, images. Getting my first styled page to look like something recognizable was genuinely exciting. CSS started simple but quickly revealed its depth: the box model tripped me up, float layouts were confusing, and centering things felt like a mystery. Flexbox was a breakthrough — it made layout logic feel intuitive. Grid came next and opened up two-dimensional control I didn't realize I needed. Responsive design with media queries took time to internalize, but building layouts that broke on mobile and fixing them built real intuition. By the end, I was comfortable with Bootstrap for rapid layout, but preferred writing custom CSS when I wanted precision.",
      currentFocus: [
        "CSS Architecture",
        "Animation Polish",
        "Utility-First Approach",
      ],
      skillGroups: [
        {
          label: "Layout",
          items: ["Flexbox", "CSS Grid", "Box Model", "Positioning"],
        },
        {
          label: "Responsive",
          items: ["Media Queries", "Fluid Layouts", "Mobile First"],
        },
        {
          label: "Visual",
          items: [
            "Transitions",
            "Transforms",
            "Custom Properties",
            "Gradients",
          ],
        },
        { label: "Frameworks", items: ["Bootstrap", "Tailwind CSS"] },
      ],
      milestones: [
        { label: "HTML Structure & Semantics", done: true },
        { label: "CSS Box Model & Selectors", done: true },
        { label: "Flexbox & Grid Layouts", done: true },
        { label: "Responsive Design", done: true },
        { label: "CSS Animations", done: true },
        { label: "Component-Level Design Systems", done: true },
      ],
      progressPercent: 100,
      progressStage: "intermediate",
      techEcosystem: [
        {
          name: "HTML5",
          category: "Markup",
          logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
        },
        {
          name: "CSS3",
          category: "Styling",
          logo: "https://cdn.simpleicons.org/css",
        },
        {
          name: "Bootstrap",
          category: "CSS Framework",
          logo: "https://cdn.simpleicons.org/bootstrap/7952B3",
        },
        {
          name: "Tailwind CSS",
          category: "Utility Framework",
          logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
        },
      ],
      timeInvestment: { started: "2023", consistency: "Completed" },
      personalNote:
        "HTML and CSS taught me that the web has a grain — a natural way things want to work. Fighting that grain produces brittle layouts. Working with it produces interfaces that feel right. That lesson shapes how I approach all frontend work now.",
    },
  },
];

// ─── Style Mappings ───────────────────────────────────────────────────────────

const statusStyles: Record<string, string> = {
  learning: "text-primary border-primary/30 bg-primary/5",
  completed: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5",
  paused: "text-muted-foreground border-border bg-secondary",
};

const dotStyles: Record<string, string> = {
  learning: "bg-primary shadow-[0_0_8px_2px_hsl(var(--primary)/0.3)]",
  completed: "bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.25)]",
  paused: "bg-muted-foreground",
};

const stageColor: Record<string, string> = {
  beginner: "text-amber-400 border-amber-500/20 bg-amber-500/5",
  intermediate: "text-sky-400 border-sky-500/20 bg-sky-500/5",
  advanced: "text-violet-400 border-violet-500/20 bg-violet-500/5",
};

const progressBarColor: Record<string, string> = {
  learning: "bg-primary",
  completed: "bg-emerald-400",
  paused: "bg-muted-foreground",
};

// ─── Shared Component Primitives ──────────────────────────────────────────────

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-muted-foreground/45 block mb-1.5">
    {children}
  </span>
);

const Chip = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span
    className={`inline-flex items-center text-[10px] font-mono px-2 py-0.5 rounded-md border border-border/40 bg-background/40 text-muted-foreground/80 ${className}`}
  >
    {children}
  </span>
);

// ─── Individual RoadNode Component (Fully Expanded Structural Bento) ─────────

interface RoadNodeProps {
  exp: Experiment;
  index: number;
  isLast: boolean;
}

const RoadNode = ({ exp, index, isLast }: RoadNodeProps) => {
  const d = exp.detail;

  return (
    <Reveal index={index}>
      <div className="relative w-full flex items-stretch gap-4 sm:gap-6">
        {/* Left Axis Line Segment */}
        <div className="flex flex-col items-center shrink-0 w-8">
          <div className="relative z-10 flex items-center justify-center w-7 h-7 rounded-full bg-background border border-border/60">
            <div
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${dotStyles[exp.status]}`}
            />
          </div>
          {!isLast && (
            <div className="w-[1px] flex-1 bg-border/45 pointer-events-none mt-2 mb-2" />
          )}
        </div>

        {/* Right Expanded Block Content */}
        <div className="flex-1 border border-border/40 bg-surface/10 rounded-xl p-4 sm:p-5 overflow-hidden mb-8 space-y-5">
          {/* Main Top Header Block */}
          <div className="flex items-start justify-between gap-3 border-b border-border/30 pb-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[10px] text-muted-foreground/35">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-1 w-1 rounded-full bg-border/40" />
                <div className="flex items-center gap-1 text-[10px] text-muted-foreground/50 font-mono">
                  <Clock size={10} />
                  <span>{exp.duration}</span>
                </div>
              </div>
              <h3 className="text-base font-bold text-foreground leading-snug">
                {exp.title}
              </h3>
            </div>

            <span
              className={`font-mono text-[9px] tracking-wider uppercase px-2 py-0.5 rounded-full border shrink-0 ${statusStyles[exp.status]}`}
            >
              {exp.status}
            </span>
          </div>

          {/* Description & Overview */}
          <div className="space-y-1">
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {exp.description}
            </p>
            <p className="text-xs text-muted-foreground/60 leading-relaxed italic">
              {d.overview}
            </p>
          </div>

          {/* Continuous Progress Metric Track */}
          <div className="space-y-1">
            <div className="flex items-center justify-between text-[9px] font-mono text-muted-foreground/50">
              <div className="flex items-center gap-1">
                <TrendingUp size={10} />
                <span>PROGRESS ROADMAP</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span
                  className={`font-mono uppercase text-[7px] tracking-wider px-1.5 py-0.2 rounded border ${stageColor[d.progressStage]}`}
                >
                  {d.progressStage}
                </span>
                <span className="text-foreground/70 font-semibold">
                  {d.progressPercent}%
                </span>
              </div>
            </div>
            <div className="h-1 w-full rounded-full bg-secondary/50 overflow-hidden">
              <div
                className={`h-full rounded-full ${progressBarColor[exp.status]}`}
                style={{ width: `${d.progressPercent}%` }}
              />
            </div>
          </div>

          {/* Journey Narrative Segment */}
          <div className="space-y-1.5 bg-muted/5 p-3 rounded-lg border border-border/20">
            <div className="flex items-center gap-1 text-muted-foreground/40">
              <BookOpen size={10} />
              <SectionLabel>Journey Narrative</SectionLabel>
            </div>
            <p className="text-xs text-muted-foreground/80 leading-relaxed font-normal">
              {d.journeyNarrative}
            </p>
          </div>

          {/* Skills Acquired Bento Row */}
          <div className="space-y-2">
            <SectionLabel>Skills Acquired</SectionLabel>
            <div className="grid gap-1.5">
              {d.skillGroups.map((group) => (
                <div
                  key={group.label}
                  className="border border-border/20 bg-background/20 p-2 rounded flex flex-col sm:flex-row sm:items-center gap-2"
                >
                  <span className="font-mono text-[8px] text-primary/70 uppercase tracking-widest sm:w-16 shrink-0">
                    {group.label}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {group.items.map((skill) => (
                      <Chip
                        key={skill}
                        className="bg-background/60 border-border/20 text-[9px]"
                      >
                        {skill}
                      </Chip>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Milestones Checklist Container */}
          <div className="space-y-2">
            <SectionLabel>Milestones Path</SectionLabel>
            <div className="grid gap-1.5 bg-secondary/15 p-3 rounded-lg border border-border/20 font-mono text-[11px]">
              {d.milestones.map((m) => (
                <div key={m.label} className="flex items-center gap-2">
                  {m.done ? (
                    <CheckCircle2
                      size={11}
                      className="shrink-0 text-emerald-400"
                    />
                  ) : (
                    <Circle
                      size={11}
                      className="shrink-0 text-muted-foreground/25"
                    />
                  )}
                  <span
                    className={
                      m.done ? "text-foreground/80" : "text-muted-foreground/40"
                    }
                  >
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Ecosystem Matrix */}
          <div className="space-y-2">
            <div className="flex items-center gap-1 text-muted-foreground/40">
              <Layers size={10} />
              <SectionLabel>Tech Ecosystem</SectionLabel>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {d.techEcosystem.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 rounded bg-background/40 border border-border/30 p-1.5"
                >
                  {tech.logo ? (
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-3.5 h-3.5 object-contain shrink-0"
                    />
                  ) : (
                    <div className="w-3.5 h-3.5 rounded bg-secondary/80 border border-border/40 shrink-0" />
                  )}
                  <div className="min-w-0 font-mono leading-tight">
                    <div className="text-[10px] font-semibold text-foreground/80 truncate">
                      {tech.name}
                    </div>
                    <div className="text-[7px] text-muted-foreground/40 truncate uppercase tracking-tight">
                      {tech.category}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Micro Footer Time Investment */}
          <div className="grid grid-cols-2 gap-2 border-t border-border/20 pt-3 font-mono text-[10px] text-muted-foreground/50">
            <div>
              <span className="text-[7px] uppercase tracking-wider block">
                Started
              </span>
              <span className="text-foreground/60">
                {d.timeInvestment.started}
              </span>
            </div>
            <div>
              <span className="text-[7px] uppercase tracking-wider block">
                Consistency
              </span>
              <span className="text-foreground/60">
                {d.timeInvestment.consistency}
              </span>
            </div>
          </div>

          {/* Reflection Frame */}
          <div className="relative rounded border border-primary/20 bg-primary/5 p-3 overflow-hidden">
            <div className="absolute top-0 right-0 p-2 text-primary/5 select-none pointer-events-none">
              <Target size={30} />
            </div>
            <span className="font-mono text-[8px] uppercase tracking-widest text-primary/60 block mb-0.5">
              Reflection Note
            </span>
            <p className="text-xs text-muted-foreground/90 leading-relaxed italic">
              "{d.personalNote}"
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

// ─── Main Linear Journey Page Component ───────────────────────────────────────

const Labs = () => {
  return (
    <PageTransition>
      {/* Container utama diubah max-w-4xl agar layout memanjang dengan elegan */}
      <div className="container pt-28 sm:pt-32 -mb-[1rem] px-4 sm:px-6">
        {/* Header Section */}
        <Reveal>
          {/* Menghapus mx-auto agar element badge menempel penuh di kiri */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/60">
              / journey
            </span>
            <span className="h-px flex-1 max-w-[80px] bg-border/60" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/50 shrink-0">
              {String(experiments.length).padStart(2, "0")} checkpoints
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-left mb-3 text-foreground">
            learning journey
          </h1>
          {/* Menghapus mx-auto dan mengganti max-w-md ke max-w-xl agar deskripsi mengikuti kelebaran layout baru */}
          <p className="text-muted-foreground text-left max-w-xl text-xs sm:text-sm leading-relaxed mb-12">
            a strictly tracked compilation of syntax stacks and core frameworks
            i am internalizing.
          </p>
        </Reveal>

        {/* Linear Axis Timeline Layout - Menghapus max-w pembatas lama agar mekar ke 4xl */}
        <div className="relative flex flex-col w-full">
          {experiments.map((exp, i) => (
            <RoadNode
              key={exp.title}
              exp={exp}
              index={i}
              isLast={i === experiments.length - 1}
            />
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default Labs;
