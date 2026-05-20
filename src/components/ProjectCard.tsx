import {
  ArrowUpRight,
  Code2,
  Wallet,
  User,
  CalendarDays,
  Layers,
  Activity,
  LayoutDashboard,
  Type,
  Utensils,
  Earth,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";

export type ProjectStatus =
  | "Completed"
  | "Experimental"
  | "Archived"
  | "On Working";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  index: number;
  className?: string;
  year?: string;
  status?: ProjectStatus;
  featured?: boolean;
}

const iconMap: Record<string, LucideIcon> = {
  "Paperjam Club": Earth,
  Kaifood: Utensils,
  Portfolio: User,
  Finance: Wallet,
  "Daily Activity": Activity,
  Dashboard: LayoutDashboard,
  "Finance Flow": Wallet,
  "Text Generate": Type,
};

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

const ProjectCard = ({
  title,
  description,
  tags,
  link,
  index,
  className = "",
  year = "2024",
  status = "Completed",
  featured = false,
}: ProjectCardProps) => {
  const Icon = iconMap[title] || Code2;
  const number = String(index + 1).padStart(2, "0");

  return (
    <Reveal
      as="a"
      index={index}
      href={link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-surface/40 transition-colors duration-300 md:hover:border-primary/30 ${
        featured ? "md:p-2" : ""
      } ${className}`}
    >
      {/* Top accent line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 transition-opacity duration-500 md:group-hover:opacity-100" />

      <div
        className={`relative flex h-full flex-col ${
          featured
            ? "rounded-xl border border-border/40 bg-background/30 lg:flex-row"
            : ""
        }`}
      >
        {/* Header */}
        <div
          className={`flex items-start justify-between gap-4 px-5 sm:px-6 pt-5 sm:pt-6 pb-4 sm:pb-5 ${
            featured
              ? "lg:flex-col lg:w-[42%] lg:border-r lg:border-border/40 lg:pb-6"
              : ""
          }`}
        >
          <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-background/80 text-primary shadow-sm transition-colors duration-300 md:group-hover:border-primary/40">
              <Icon size={17} strokeWidth={1.6} />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-muted-foreground/50 tracking-widest">
                  {number}
                </span>
                <span className="h-px w-4 bg-border/60" />
                <span className="text-[10px] font-mono text-muted-foreground/60 tracking-widest uppercase">
                  {year}
                </span>
              </div>
              <h3
                className={`mt-1 font-semibold leading-snug tracking-tight text-foreground truncate ${
                  featured ? "text-base sm:text-lg lg:text-xl" : "text-[15px]"
                }`}
              >
                {title}
              </h3>
            </div>
          </div>
          <ArrowUpRight
            size={16}
            className="mt-0.5 shrink-0 text-muted-foreground/50 transition-colors duration-300 md:group-hover:text-primary"
          />
        </div>

        {/* Body */}
        <div className={`flex flex-1 flex-col ${featured ? "lg:flex-1" : ""}`}>
          {/* Divider — hidden on featured horizontal layout */}
          <div
            className={`mx-5 sm:mx-6 h-px bg-border/50 ${
              featured ? "lg:hidden" : ""
            }`}
          />

          {/* Description */}
          <div
            className={`px-5 sm:px-6 py-4 sm:py-5 ${featured ? "lg:py-6" : ""}`}
          >
            <p
              className={`text-muted-foreground leading-relaxed ${
                featured ? "text-[15px] sm:text-base" : "text-sm"
              }`}
            >
              {description}
            </p>
          </div>

          <div className="flex-1" />

          {/* Footer panel */}
          <div className="mx-3 sm:mx-4 mb-3 sm:mb-4 rounded-xl border border-border/40 bg-muted/30 px-3.5 sm:px-4 py-3 sm:py-3.5 space-y-3">
            <div className="flex items-center justify-between gap-3 text-[11px] font-mono text-muted-foreground">
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                <span className="inline-flex items-center gap-1.5">
                  <Layers size={11} className="shrink-0" />
                  {tags.length} stack
                </span>
                <span className="h-2.5 w-px bg-border/60" />
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays size={11} className="shrink-0" />
                  {year}
                </span>
              </div>
              <span
                className={`inline-flex shrink-0 items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-full border text-[10px] uppercase tracking-widest font-mono ${statusStyles[status]}`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${statusDotStyles[status]}`}
                />
                <span className="hidden xs:inline sm:inline">{status}</span>
              </span>
            </div>

            <div className="h-px w-full bg-border/40" />

            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center whitespace-nowrap text-[10px] font-mono uppercase tracking-wider px-2 sm:px-2.5 py-1 rounded-lg bg-background/60 text-muted-foreground border border-border/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default ProjectCard;
