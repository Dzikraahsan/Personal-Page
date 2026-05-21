import PageTransition from "@/components/PageTransition";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import type { ProjectStatus } from "@/components/ProjectCard";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  year: string;
  status: ProjectStatus;
}

const allProjects: Project[] = [
  {
    title: "Paperjam Club",
    description:
      "Paperjam Club is a curated space for makers, players, and storytellers.",
    tags: ["React", "Vite", "TypeScript", "Tailwind"],
    link: "",
    year: "2026",
    status: "On Working",
  },
  {
    title: "Kaifood",
    description: "A food business website that sells various menus.",
    tags: ["React", "Vite", "TypeScript", "Tailwind"],
    link: "https://www.kaifood.web.id/",
    year: "2024",
    status: "Completed",
  },
  {
    title: "Portfolio",
    description: "A personal portfolio that contains information about myself.",
    tags: ["React", "Vite", "TypeScript", "Tailwind"],
    link: "https://portfoliodzikra.vercel.app/",
    year: "2024",
    status: "Completed",
  },
  {
    title: "Finance",
    description:
      "A personal finance website that helps users track their income and expenses.",
    tags: ["React", "Vite", "TypeScript", "Tailwind", "Supabase"],
    link: "https://dzii-finance.vercel.app",
    year: "2024",
    status: "Completed",
  },
  {
    title: "Daily Activity",
    description:
      "A website used to record daily activities, with several features that can be used.",
    tags: ["React", "Vite", "TypeScript", "Tailwind"],
    link: "https://tracking-activities.vercel.app/",
    year: "2024",
    status: "Completed",
  },
  {
    title: "Dashboard",
    description:
      "A website that has the function of recording employee work and performance statistics.",
    tags: ["React", "Vite", "JavaScript", "Tailwind"],
    link: "https://dashboard-40.vercel.app/",
    year: "2023",
    status: "Archived",
  },
  {
    title: "Finance Flow",
    description: "Web prototype for structured and recorded financial use.",
    tags: ["React", "Vite", "TypeScript", "Tailwind"],
    link: "https://finance-flow-beryl.vercel.app/",
    year: "2024",
    status: "Experimental",
  },
  {
    title: "Text Generate",
    description: "The website is used to generate text with custom fonts.",
    tags: ["React", "Vite", "TypeScript", "Tailwind"],
    link: "https://text-studio-pro.vercel.app",
    year: "2024",
    status: "Experimental",
  },
];

const spanClasses = [
  "lg:col-span-6",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-3",
  "lg:col-span-3",
];

const total = allProjects.length;
const completedCount = allProjects.filter(
  (p) => p.status === "Completed",
).length;
const activeCount = allProjects.filter((p) => p.status === "On Working").length;

const Projects = () => (
  <PageTransition>
    <div className="container pt-28 sm:pt-32 -mb-8">
      {/* Header */}
      <Reveal>
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/60">
            / projects
          </span>
          <span className="h-px flex-1 max-w-[80px] bg-border/60" />
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/60">
            {String(total).padStart(2, "0")} entries
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">
          projects
        </h1>
        <p className="text-muted-foreground max-w-xl text-sm sm:text-base leading-relaxed">
          a curated archive of things i've built — from quick experiments to
          full-stack applications. each entry is shipped, learned from, and
          documented.
        </p>

        {/* Stat strip */}
        <div className="mt-6 mb-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-mono text-muted-foreground/80">
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
            {allProjects.filter((p) => p.status === "Experimental").length}{" "}
            experimental
          </span>
        </div>
      </Reveal>

      {/* Featured label */}
      <Reveal index={1}>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary/70">
            featured
          </span>
          <span className="h-px flex-1 bg-border/40" />
        </div>
      </Reveal>

      {/* Editorial grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 sm:gap-6 lg:gap-7 items-stretch">
        {allProjects.map((project, i) => {
          const isFeatured = i === 0;
          return (
            <ProjectCard
              key={project.title}
              {...project}
              index={i}
              featured={isFeatured}
              className={`${isFeatured ? "md:col-span-2" : ""} ${
                spanClasses[i] ?? "lg:col-span-3"
              }`}
            />
          );
        })}
      </div>

      {/* Footer note */}
      <Reveal index={2} className="mt-12 sm:mt-16">
        <div className="rounded-2xl border border-border/40 bg-surface/30 px-5 sm:px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            more projects live quietly on github — open source, drafts, and
            experiments.
          </p>
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/60">
            archive · {new Date().getFullYear()}
          </span>
        </div>
      </Reveal>
    </div>
  </PageTransition>
);

export default Projects;
