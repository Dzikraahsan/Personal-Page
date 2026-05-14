import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import {
  Archive,
  FlaskConical,
  Server,
  Calendar,
  Code2,
  Tag,
  FolderGit2,
  Cpu,
  Globe,
  Wallet,
  ClipboardList,
  ClipboardCheck,
  Home,
  Type,
} from "lucide-react";

type Status = "archived" | "completed" | "experimental" | "deprecated";

interface LegacyItem {
  title: string;
  context: string;
  period: string;
  stack: string[];
  status: Status;
  icon: typeof Code2;
}

interface Section {
  id: string;
  title: string;
  description: string;
  icon: typeof Archive;
  items: LegacyItem[];
}

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
        context:
          "Simple CRUD inventory built as a class project. Taught me routing, forms, and database basics.",
        period: "2024",
        stack: ["Laravel", "Blade", "MySQL"],
        status: "completed",
        icon: Server,
      },
      {
        title: "Dream Home",
        context:
          "Built a simple housing website to showcase property listings and basic layouts. Focused on structuring pages and understanding how Laravel handles routing and views.",
        period: "2024",
        stack: ["PHP", "Laravel", "CSS", "Bootstrap"],
        status: "archived",
        icon: Home,
      },
      {
        title: "Text Generator",
        context:
          "Built a simple text generator to experiment with input handling and dynamic output. Focused on updating content in real time based on user input.",
        period: "2025",
        stack: ["HTML", "CSS", "JavaScript"],
        status: "archived",
        icon: Type,
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
        context:
          "Built a simple finance tracker to manage income and expenses. Focused on handling data with Supabase and keeping everything in sync with the UI.",
        period: "2024",
        stack: ["React.js", "Vite", "Tailwind", "Supabase"],
        status: "completed",
        icon: Wallet,
      },
      {
        title: "Activities Tracking",
        context:
          "Built a simple activity tracker to record daily actions and store them locally. Focused on managing state and keeping the UI in sync with stored data.",
        period: "2024",
        stack: ["React.js", "Vite", "Tailwind"],
        status: "completed",
        icon: ClipboardList,
      },
      {
        title: "Cleanliness Assessment",
        context:
          "Built a simple system to record and evaluate cleanliness scores. Focused on handling form input, storing data in MySQL, and displaying results through Blade views.",
        period: "2025",
        stack: ["Laravel", "Blade", "MySQL"],
        status: "completed",
        icon: ClipboardCheck,
      },
    ],
  },
  {
    id: "systems",
    title: "deprecated projects",
    description:
      "stacks and tools i used heavily before moving on to something better.",
    icon: Archive,
    items: [
      {
        title: "Personal Portfolio v1",
        context:
          "First static portfolio built to learn semantic markup and basic layout systems.",
        period: "2024",
        stack: ["HTML", "CSS", "Bootstrap"],
        status: "deprecated",
        icon: Globe,
      },
      {
        title: "Salary Management System",
        context:
          "Building a salary management system to handle employee data, calculate wages, and keep everything organized in one place. Focused on how the backend connects with the database and how the data flows through the app.",
        period: "2024",
        stack: ["PHP", "MySQL"],
        status: "deprecated",
        icon: Code2,
      },
    ],
  },
];

const statusStyles: Record<Status, string> = {
  archived: "text-muted-foreground border-border bg-secondary",
  completed: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5",
  experimental: "text-amber-400 border-amber-500/30 bg-amber-500/5",
  deprecated: "text-muted-foreground border-border/60 bg-secondary/60",
};

const Legacy = () => (
  <PageTransition>
    <div className="container pt-32 -mb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
          legacy
        </h1>
        <p className="text-muted-foreground max-w-lg mb-12">
          an archive of past projects, experiments, and systems i've moved on
          from — kept here as a record of the path.
        </p>
      </motion.div>

      <div className="space-y-14">
        {sections.map((section, sIdx) => {
          const SectionIcon = section.icon;
          return (
            <motion.section
              key={section.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: sIdx * 0.05 }}
            >
              {/* Section header */}
              <div className="flex items-start gap-3 mb-5">
                <div className="shrink-0 w-9 h-9 rounded-lg bg-secondary/60 border border-border/60 flex items-center justify-center">
                  <SectionIcon size={16} className="text-primary" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold tracking-tight text-foreground">
                    {section.title}
                  </h2>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {section.description}
                  </p>
                </div>
              </div>

              {/* Timeline items */}
              <div className="relative pl-6 ml-4 border-l border-border/50">
                {section.items.map((item, i) => {
                  const ItemIcon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ delay: i * 0.04 }}
                      className="group relative py-4 first:pt-2 last:pb-0"
                    >
                      {/* Timeline dot */}
                      <span className="absolute -left-[27px] top-6 w-2 h-2 rounded-full bg-border group-hover:bg-primary transition-colors" />

                      <div className="rounded-lg border border-border/50 bg-card/40 p-5 hover:border-primary/40 hover:bg-card/70 hover:-translate-y-0.5 transition-all duration-300">
                        {/* Top row: icon + title + status */}
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <div className="flex items-center gap-2.5 min-w-0">
                            <ItemIcon
                              size={14}
                              className="text-muted-foreground group-hover:text-primary transition-colors shrink-0"
                            />
                            <h3 className="text-[15px] font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                              {item.title}
                            </h3>
                          </div>
                          <span
                            className={`shrink-0 font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full border ${statusStyles[item.status]}`}
                          >
                            {item.status}
                          </span>
                        </div>

                        {/* Context */}
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.context}
                        </p>

                        {/* Inner divider */}
                        <div className="my-3 border-t border-border/40" />

                        {/* Metadata row */}
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1.5">
                            <Calendar size={12} />
                            <span className="font-mono">{item.period}</span>
                          </div>
                          <div className="flex items-center gap-1.5 min-w-0">
                            <Tag size={12} className="shrink-0" />
                            <div className="flex flex-wrap gap-1.5">
                              {item.stack.map((tech) => (
                                <span
                                  key={tech}
                                  className="font-mono text-[10px] px-1.5 py-0.5 rounded-md bg-secondary/60 border border-border/50 text-foreground/75"
                                >
                                  {tech}
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
            </motion.section>
          );
        })}
      </div>
    </div>
  </PageTransition>
);

export default Legacy;
