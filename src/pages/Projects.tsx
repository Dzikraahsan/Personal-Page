import PageTransition from "@/components/PageTransition";
import ProjectCard from "@/components/ProjectCard";
import ElectricCard from "@/components/ElectricCard";
import { motion } from "framer-motion";

const allProjects = [
  {
    title: "Kaifood",
    description: "A food business website that sells various menus.",
    tags: ["React", "Vite", "TypeScript", "Tailwind"],
    link: "https://www.kaifood.web.id/",
  },
  {
    title: "Portfolio",
    description: "A personal portfolio that contains information about myself.",
    tags: ["React", "Vite", "TypeScript", "Tailwind"],
    link: "https://portfoliodzikra.vercel.app/",
  },
  {
    title: "Finance",
    description:
      "A personal finance website that helps users track their income and expenses.",
    tags: ["React", "Vite", "TypeScript", "Tailwind", "Supabase"],
    link: "https://dzii-finance.vercel.app",
  },
  {
    title: "Daily Activity",
    description:
      "A website used to record daily activities, with several features that can be used.",
    tags: ["React", "Vite", "TypeScript", "Tailwind"],
    link: "https://tracking-activities.vercel.app/",
  },
  {
    title: "Dashboard",
    description:
      "A website that has the function of recording employee work and performance statistics.",
    tags: ["React", "Vite", "JavaScript", "Tailwind"],
    link: "https://dashboard-40.vercel.app/",
  },
  {
    title: "Finance Flow",
    description: "Web prototype for structured and recorded financial use.",
    tags: ["React", "Vite", "TypeScript", "Tailwind"],
    link: "https://finance-flow-beryl.vercel.app/",
  },
  {
    title: "Text Generate",
    description: "The website is used to generate text with custom fonts.",
    tags: ["React", "Vite", "TypeScript", "Tailwind"],
    link: "https://text-studio-pro.vercel.app",
  },
];

const Projects = () => (
  <PageTransition>
    <div className="container pt-32 -mb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
          projects
        </h1>
        <p className="text-muted-foreground max-w-lg mb-12">
          a collection of things i've built — from open source tools to
          full-stack applications.
        </p>
      </motion.div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 items-stretch">
        {allProjects.map((project, i) => (
          <ElectricCard
            color="#7df9ff"
            speed={0.4}
            chaos={0.01}
            thickness={1}
            style={{
              borderRadius: 24,
              padding: 1,
            }}
          >
            <ProjectCard {...project} index={i} className="h-[320px] w-full" />
          </ElectricCard>
        ))}
      </div>
    </div>
  </PageTransition>
);

export default Projects;
