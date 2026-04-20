import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  index: number;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  tags,
  link,
  index,
  className = "",
}: ProjectCardProps) => (
  <motion.a
    href={link || "#"}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
    className="group block border border-border/60 rounded-lg p-6 hover:border-primary/40 hover:glow-border transition-all duration-300"
  >
    <div className="h-full flex flex-col p-6 rounded-2xl bg-surface/60 backdrop-blur border border-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold tracking-tight text-foreground">
          {title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      <div className="flex-1" />

      <div className="space-y-4 pt-6">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono uppercase tracking-wide px-2 py-1 rounded-md bg-muted text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-mono text-primary hover:underline"
        >
          visit
        </a>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition bg-gradient-to-br from-primary/5 to-transparent" />
    </div>
  </motion.a>
);

export default ProjectCard;
