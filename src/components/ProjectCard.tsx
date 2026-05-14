import { motion } from "framer-motion";
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
  Handshake,
  Network,
  Earth,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const isMobile = useIsMobile();
  const Icon = iconMap[title] || Code2;

  // On mobile: no animation — content is always visible immediately.
  // On desktop: subtle fade-in on mount (not scroll-dependent) to avoid
  // whileInView never firing if viewport detection fails.
  const motionProps = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.3,
      delay: isMobile ? 0 : Math.min(index * 0.05, 0.3),
    },
  };

  return (
    <motion.a
      href={link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      {...motionProps}
      className={`group relative flex flex-col rounded-2xl border border-border/60 bg-surface/40 p-6 transition-all duration-300 md:hover:-translate-y-1 md:hover:border-primary/40 md:hover:shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.2)] ${className}`}
      style={{ willChange: "transform" }}
    >
      {/* Top: icon + title + status */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-background/60 text-primary transition-colors md:group-hover:border-primary/40">
            <Icon size={16} />
          </div>
          <h3 className="text-base font-semibold tracking-tight text-foreground truncate">
            {title}
          </h3>
        </div>
        <ArrowUpRight
          size={16}
          className="shrink-0 text-muted-foreground transition-all duration-300 md:group-hover:text-primary md:group-hover:-translate-y-0.5 md:group-hover:translate-x-0.5"
        />
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-5">
        {description}
      </p>

      <div className="flex-1" />

      {/* Divider */}
      <div className="h-px w-full bg-border/60 mb-4" />

      {/* Metadata */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-mono text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays size={11} />
            {year}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Layers size={11} />
            {tags.length} stack
          </span>
          <span
            className={`ml-auto inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-[10px] uppercase tracking-wide ${statusStyles[status]}`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            {status}
          </span>
        </div>

        <div className="flex flex-wrap items-start gap-x-4 gap-y-3 w-full">
          {tags.map((tag) => (
            <span
              key={tag}
              className="shrink-0 whitespace-nowrap text-[10px] font-mono uppercase tracking-wide px-3 py-1.5 rounded-full bg-muted/60 text-muted-foreground border border-border/40"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
};

export default ProjectCard;
