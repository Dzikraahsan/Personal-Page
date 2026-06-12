import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";
import {
  Code2,
  Server,
  FileCode,
  Palette,
  Clock,
  Wrench,
  ChevronDown,
  BookOpen,
  Target,
  TrendingUp,
  CheckCircle2,
  Circle,
} from "lucide-react";
import { useState } from "react";

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
  status: string;
  duration: string;
  tools: string[];
  icon: React.ElementType;
  logo?: string;
  detail: ExperimentDetail;
};

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
        // { name: "DartPad", category: "Playground" },
      ],
      timeInvestment: {
        started: "Early 2026",
        consistency: "Weekly sessions",
      },
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
      timeInvestment: {
        started: "Mid 2025",
        consistency: "Daily practice",
      },
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
        // { name: "ESLint", category: "Linting" },
      ],
      timeInvestment: {
        started: "Late 2024",
        consistency: "Daily",
      },
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
      timeInvestment: {
        started: "2023",
        consistency: "Completed",
      },
      personalNote:
        "HTML and CSS taught me that the web has a grain — a natural way things want to work. Fighting that grain produces brittle layouts. Working with it produces interfaces that feel right. That lesson shapes how I approach all frontend work now.",
    },
  },
];

const statusStyles: Record<string, string> = {
  learning: "text-primary border-primary/30 bg-primary/5",
  completed: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5",
  paused: "text-muted-foreground border-border bg-secondary",
};

const dotStyles: Record<string, string> = {
  learning: "bg-primary shadow-[0_0_8px_2px_hsl(var(--primary)/0.35)]",
  completed: "bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.3)]",
  paused: "bg-muted-foreground",
};

const accentBar: Record<string, string> = {
  learning: "from-primary/20 to-transparent",
  completed: "from-emerald-500/20 to-transparent",
  paused: "from-border to-transparent",
};

const stageColor: Record<string, string> = {
  beginner: "text-amber-400 border-amber-500/30 bg-amber-500/5",
  intermediate: "text-sky-400 border-sky-500/30 bg-sky-500/5",
  advanced: "text-violet-400 border-violet-500/30 bg-violet-500/5",
};

const progressBarColor: Record<string, string> = {
  learning: "bg-primary",
  completed: "bg-emerald-400",
  paused: "bg-muted-foreground",
};

type CardProps = {
  exp: Experiment;
};

const JourneyCard = ({ exp }: CardProps) => {
  const [open, setOpen] = useState(false);
  const Icon = exp.icon;
  const d = exp.detail;

  return (
    <div className="group relative flex flex-col border border-border/60 rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300 bg-background/50">
      {/* Top accent bar */}
      <div
        className={`h-px w-full bg-gradient-to-r ${accentBar[exp.status]}`}
      />

      {/* ── Collapsed content ── */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          {/* Logo / icon */}
          <div className="shrink-0 flex flex-col items-center gap-2">
            <div className="w-11 h-11 rounded-lg bg-secondary/60 border border-border/60 flex items-center justify-center group-hover:border-primary/40 group-hover:scale-105 transition-all duration-300 overflow-hidden">
              {exp.logo ? (
                <img
                  src={exp.logo}
                  alt={exp.title}
                  className="w-6 h-6 object-contain"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display =
                      "none";
                    const fb = e.currentTarget
                      .nextElementSibling as HTMLElement | null;
                    if (fb) fb.style.display = "flex";
                  }}
                />
              ) : null}
              <span
                className="items-center justify-center"
                style={{ display: exp.logo ? "none" : "flex" }}
              >
                <Icon
                  size={18}
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                />
              </span>
            </div>
            {exp.logo && (
              <div className="w-5 h-5 rounded-md bg-secondary/40 border border-border/40 flex items-center justify-center">
                <Icon
                  size={11}
                  className="text-muted-foreground/60 group-hover:text-primary/60 transition-colors"
                />
              </div>
            )}
          </div>

          {/* Title + duration */}
          <div className="flex-1 min-w-0 pt-0.5">
            <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-tight mb-1">
              {exp.title}
            </h3>
            <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground/70">
              <Clock size={10} />
              <span className="font-mono">{exp.duration}</span>
            </div>
          </div>

          {/* Status badge */}
          <span
            className={`shrink-0 font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full border ${statusStyles[exp.status]}`}
          >
            {exp.status}
          </span>
        </div>

        {/* Divider */}
        <div className="border-t border-border/40 mb-4" />

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          {exp.description}
        </p>

        {/* Progress bar */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <TrendingUp size={10} className="text-muted-foreground/50" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/50">
                progress
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded-full border ${stageColor[d.progressStage]}`}
              >
                {d.progressStage}
              </span>
              <span className="font-mono text-[10px] text-muted-foreground/60">
                {d.progressPercent}%
              </span>
            </div>
          </div>
          <div className="h-1 w-full rounded-full bg-secondary/60 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-700 ${progressBarColor[exp.status]}`}
              style={{ width: `${d.progressPercent}%` }}
            />
          </div>
        </div>

        {/* Tools section */}
        <div className="rounded-lg bg-secondary/30 border border-border/40 px-3.5 py-3 mb-4">
          <div className="flex items-center gap-1.5 mb-2.5">
            <Wrench size={10} className="text-muted-foreground/50" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/50">
              stack
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {exp.tools.map((tool) => (
              <span
                key={tool}
                className="font-mono text-[10px] px-1.5 py-0.5 rounded-md bg-secondary/60 border border-border/50 text-foreground/75"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center justify-between text-[11px] font-mono text-muted-foreground/60 hover:text-primary transition-colors pt-1 pb-0.5 group/btn"
          aria-expanded={open}
        >
          <span className="uppercase tracking-widest text-[9px]">
            {open ? "collapse" : "expand journey"}
          </span>
          <ChevronDown
            size={13}
            className={`transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
          />
        </button>
      </div>

      {/* ── Expanded content ── */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="border-t border-border/40 px-6 pb-6 pt-5 flex flex-col gap-5">
          {/* Overview */}
          <div>
            <div className="flex items-center gap-1.5 mb-2.5">
              <BookOpen size={10} className="text-muted-foreground/50" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/50">
                overview
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {d.overview}
            </p>
          </div>

          <div className="border-t border-border/30" />

          {/* Journey narrative */}
          <div>
            <div className="flex items-center gap-1.5 mb-2.5">
              <Target size={10} className="text-muted-foreground/50" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/50">
                journey
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {d.journeyNarrative}
            </p>
          </div>

          <div className="border-t border-border/30" />

          {/* Skills acquired */}
          <div>
            <div className="flex items-center gap-1.5 mb-3">
              <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/50">
                skills acquired
              </span>
            </div>
            <div className="flex flex-col gap-2.5">
              {d.skillGroups.map((group) => (
                <div key={group.label}>
                  <span className="font-mono text-[9px] text-muted-foreground/40 uppercase tracking-widest mb-1.5 block">
                    {group.label}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-secondary/50 border border-border/40 text-foreground/70"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-border/30" />

          {/* Milestones */}
          <div>
            <div className="flex items-center gap-1.5 mb-3">
              <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/50">
                milestones
              </span>
            </div>
            <div className="flex flex-col gap-2">
              {d.milestones.map((m) => (
                <div key={m.label} className="flex items-center gap-2.5">
                  {m.done ? (
                    <CheckCircle2
                      size={13}
                      className="shrink-0 text-emerald-400"
                    />
                  ) : (
                    <Circle
                      size={13}
                      className="shrink-0 text-muted-foreground/25"
                    />
                  )}
                  <span
                    className={`text-sm font-mono ${m.done ? "text-foreground/80" : "text-muted-foreground/40"}`}
                  >
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-border/30" />

          {/* Current focus */}
          <div>
            <div className="flex items-center gap-1.5 mb-2.5">
              <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/50">
                current focus
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {d.currentFocus.map((f) => (
                <span
                  key={f}
                  className={`font-mono text-[10px] px-2 py-0.5 rounded-full border ${statusStyles[exp.status]}`}
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-border/30" />

          {/* Tech ecosystem */}
          <div>
            <div className="flex items-center gap-1.5 mb-3">
              <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/50">
                tech ecosystem
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {d.techEcosystem.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2.5 rounded-lg bg-secondary/30 border border-border/40 px-3 py-2"
                >
                  {tech.logo ? (
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-4 h-4 object-contain shrink-0"
                    />
                  ) : (
                    <div className="w-4 h-4 rounded bg-secondary/80 border border-border/50 shrink-0" />
                  )}
                  <div className="min-w-0">
                    <div className="text-[11px] font-medium text-foreground/80 truncate">
                      {tech.name}
                    </div>
                    <div className="font-mono text-[9px] text-muted-foreground/50 truncate">
                      {tech.category}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-border/30" />

          {/* Time investment */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/40 block mb-0.5">
                started
              </span>
              <span className="font-mono text-foreground/60">
                {d.timeInvestment.started}
              </span>
            </div>
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/40 block mb-0.5">
                consistency
              </span>
              <span className="font-mono text-foreground/60">
                {d.timeInvestment.consistency}
              </span>
            </div>
          </div>

          <div className="border-t border-border/30" />

          {/* Personal note */}
          <div className="rounded-lg bg-secondary/20 border border-border/30 px-4 py-3.5">
            <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/40 block mb-2">
              personal note
            </span>
            <p className="text-sm text-muted-foreground/80 leading-relaxed italic">
              "{d.personalNote}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Labs = () => (
  <PageTransition>
    <div className="container pt-32 -mb-8">
      <Reveal>
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/60">
            / journey
          </span>
          <span className="h-px flex-1 max-w-[80px] bg-border/60" />
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/60">
            roadmap
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
          learning journey
        </h1>
        <p className="text-muted-foreground max-w-lg mb-12">
          things i'm currently learning, building, and figuring out along the
          way.
        </p>
      </Reveal>

      <div className="relative">
        {/* Timeline line */}
        <div
          className="absolute left-[18px] sm:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent, hsl(var(--border)) 8%, hsl(var(--border)) 92%, transparent)",
          }}
        />

        <div className="flex flex-col gap-0">
          {experiments.map((exp, i) => {
            const isEven = i % 2 === 0;

            return (
              <Reveal key={exp.title} index={i}>
                <div
                  className={`relative flex items-start gap-0 mb-10 sm:mb-12 ${
                    isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`
                      w-full pl-10
                      sm:pl-0 sm:w-[calc(50%-28px)]
                      ${isEven ? "sm:pr-10" : "sm:pl-10"}
                    `}
                  >
                    <JourneyCard exp={exp} />
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-[18px] sm:left-1/2 top-7 -translate-x-1/2 z-10">
                    <div
                      className={`w-3 h-3 rounded-full border-2 border-background transition-all duration-300 ${dotStyles[exp.status]}`}
                    />
                  </div>

                  {/* Spacer */}
                  <div className="hidden sm:block sm:w-[calc(50%-28px)]" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  </PageTransition>
);

export default Labs;
