import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Code2, Server, FileCode, Palette, Clock, Wrench } from "lucide-react";

const experiments = [
  {
    title: "Learn Dart",
    description:
      "Learning the fundamentals of Dart, from its basic syntax to how the core concepts work together in building simple applications.",
    status: "learning",
    duration: "Ongoing · 2026",
    tools: ["SDK", "Flutter"],
    icon: Code2,
  },
  {
    title: "Learn React.js",
    description:
      "Exploring how React works, from its structure to the way everything connects and runs together.",
    status: "learning",
    duration: "Ongoing · 2025 - now",
    tools: ["React", "Vite", "TSX"],
    icon: Code2,
  },
  {
    title: "Learn Laravel",
    description:
      "Exploring the fundamentals of Laravel, from how its structure works to handling routes, views, and simple database integration.",
    status: "learning",
    duration: "Ongoing · 2025 - now",
    tools: ["Laravel", "PHP", "MySQL"],
    icon: Server,
  },
  {
    title: "Learn JavaScript & TypeScript",
    description:
      "Learning the basics of JavaScript and TypeScript, from working with the DOM to understanding state and how everything behaves in a simple application.",
    status: "learning",
    duration: "Ongoing · 2024 — now",
    tools: ["JavaScript", "TypeScript", "DOM"],
    icon: FileCode,
  },
  {
    title: "Learn HTML & CSS",
    description:
      "Learning the basics of HTML and CSS, from building simple page structures to styling layouts and understanding how everything comes together on the web.",
    status: "completed",
    duration: "2023 — 2024",
    tools: ["HTML", "CSS", "Tailwind", "Bootstrap"],
    icon: Palette,
  },
];

const statusStyles: Record<string, string> = {
  learning: "text-primary border-primary/30 bg-primary/5",
  completed: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5",
  paused: "text-muted-foreground border-border bg-secondary",
};

const Labs = () => (
  <PageTransition>
    <div className="container pt-32 -mb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
          learning journey
        </h1>
        <p className="text-muted-foreground max-w-lg mb-12">
          things i'm currently learning, building, and figuring out along the
          way.
        </p>
      </motion.div>
      <div className="grid gap-5 md:grid-cols-2">
        {experiments.map((exp, i) => {
          const Icon = exp.icon;
          return (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.08 }}
              className="group flex flex-col border border-border/60 rounded-xl p-7 hover:border-primary/40 hover:glow-border hover:-translate-y-1 transition-all duration-300"
            >
              {/* Top: icon + title + status */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-start gap-3 min-w-0">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-secondary/60 border border-border/60 flex items-center justify-center group-hover:border-primary/40 group-hover:scale-105 transition-all duration-300">
                    <Icon
                      size={18}
                      className="text-muted-foreground group-hover:text-primary transition-colors"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-tight pt-1.5">
                    {exp.title}
                  </h3>
                </div>
                <span
                  className={`shrink-0 font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full border ${statusStyles[exp.status]}`}
                >
                  {exp.status}
                </span>
              </div>

              {/* Middle: description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {exp.description}
              </p>

              {/* Divider */}
              <div className="mt-auto border-t border-border/50 pt-4">
                {/* Bottom: metadata */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Clock size={12} />
                    <span className="font-mono">{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 min-w-0">
                    <Wrench size={12} className="shrink-0" />
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
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </PageTransition>
);

export default Labs;
