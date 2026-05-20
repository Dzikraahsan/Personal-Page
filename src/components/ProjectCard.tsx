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

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  index: number;
  className?: string;
  year?: string;
  status?: "Completed" | "Experimental" | "Archived" | "On Working";
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

const statusStyles: Record<string, string> = {
  Completed: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Experimental: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Archived: "bg-muted text-muted-foreground border-border",
  "On Working": "bg-sky-500/10 text-sky-400 border-sky-500/20",
};

const statusDotStyles: Record<string, string> = {
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
}: ProjectCardProps) => {
  const Icon = iconMap[title] || Code2;

  return (
    <Reveal
      as="a"
      index={index}
      href={link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-surface/40 transition-all duration-300 md:hover:-translate-y-1 md:hover:border-primary/30 md:hover:shadow-[0_16px_40px_-12px_hsl(var(--primary)/0.18)] ${className}`}
      style={{ willChange: "transform" }}
    >
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 transition-opacity duration-500 md:group-hover:opacity-100" />

      {/* Header */}
      <div className="flex items-start justify-between gap-4 px-6 pt-6 pb-5">
        <div className="flex items-center gap-3.5 min-w-0">
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-background/80 text-primary shadow-sm transition-colors duration-300 md:group-hover:border-primary/40 md:group-hover:bg-background">
            <Icon size={17} strokeWidth={1.6} />
          </div>
          <div className="min-w-0">
            <h3 className="text-[15px] font-semibold leading-snug tracking-tight text-foreground truncate">
              {title}
            </h3>
            <p className="mt-0.5 text-[11px] font-mono text-muted-foreground/60 tracking-wide uppercase">
              {year}
            </p>
          </div>
        </div>
        <ArrowUpRight
          size={15}
          className="mt-0.5 shrink-0 text-muted-foreground/50 transition-all duration-300 md:group-hover:text-primary md:group-hover:-translate-y-0.5 md:group-hover:translate-x-0.5"
        />
      </div>

      {/* Divider */}
      <div className="mx-6 h-px bg-border/50" />

      {/* Description */}
      <div className="px-6 py-5">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      <div className="flex-1" />

      {/* Footer panel */}
      <div className="mx-4 mb-4 rounded-xl border border-border/40 bg-muted/30 px-4 py-3.5 space-y-3">
        {/* Metadata row */}
        <div className="flex items-center justify-between gap-3 text-[11px] font-mono text-muted-foreground">
          <div className="flex items-center gap-3">
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
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] uppercase tracking-widest font-mono ${statusStyles[status]}`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${statusDotStyles[status]}`}
            />
            {status}
          </span>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-border/40" />

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center whitespace-nowrap text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-lg bg-background/60 text-muted-foreground border border-border/50 transition-colors duration-200 md:group-hover:border-border/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
};

export default ProjectCard;
