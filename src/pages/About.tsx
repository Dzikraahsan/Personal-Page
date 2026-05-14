import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";

const tools = [
  // Code Editor
  {
    name: "Antigravity",
    subtitle: "Code Editor",
    icon: "https://res.cloudinary.com/da4fjxm1e/image/upload/v1775093756/Google-Antigravity-Icon-White_yd3qgp.png",
  },
  {
    name: "Cursor",
    subtitle: "Code Editor",
    icon: "https://www.cursor.com/assets/images/logo.svg",
  },
  {
    name: "Zed",
    subtitle: "Code Editor",
    icon: "https://res.cloudinary.com/da4fjxm1e/image/upload/v1775092890/zed-logo_sajpzu.png",
  },

  // Framework
  {
    name: "React JS",
    subtitle: "Framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next JS",
    subtitle: "Framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Laravel",
    subtitle: "Framework",
    icon: "https://cdn.simpleicons.org/laravel/FF2D20",
  },
  {
    name: "Tailwind CSS",
    subtitle: "Framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Bootstrap",
    subtitle: "Framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },

  // Language
  {
    name: "JavaScript",
    subtitle: "Language",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    subtitle: "Language",
    icon: "https://cdn.simpleicons.org/typescript/3178C6",
  },
  {
    name: "PHP",
    subtitle: "Language",
    icon: "https://cdn.simpleicons.org/php/FFFFFF",
  },
  {
    name: "Python",
    subtitle: "Language",
    icon: "https://cdn.simpleicons.org/python/3776AB",
  },
  {
    name: "Dart",
    subtitle: "Language",
    icon: "https://cdn.simpleicons.org/dart/white",
  },

  // Database
  {
    name: "MySQL",
    subtitle: "Database",
    icon: "https://cdn.simpleicons.org/mysql/FFFFFF",
  },
  {
    name: "TIDB",
    subtitle: "Database",
    icon: "https://cdn.simpleicons.org/databricks/FF3621",
  },
  {
    name: "Firebase",
    subtitle: "Database",
    icon: "https://cdn.simpleicons.org/firebase/FFCA28",
  },
  {
    name: "Supabase",
    subtitle: "Database",
    icon: "https://cdn.simpleicons.org/supabase/FFFFFF",
  },

  // JavaScript Runtime
  {
    name: "Node JS",
    subtitle: "JavaScript Runtime",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },

  // Distributed Version Control System
  {
    name: "Git",
    subtitle: "DVCS",
    icon: "https://cdn.simpleicons.org/git/FFFFFF",
  },

  // Repository
  {
    name: "GitHub",
    subtitle: "Repository",
    icon: "https://cdn.simpleicons.org/github/FFFFFF",
  },

  // Deployments
  {
    name: "Vercel",
    subtitle: "Deployments",
    icon: "https://cdn.simpleicons.org/vercel/FFFFFF",
  },
  {
    name: "Railway",
    subtitle: "Deployments",
    icon: "https://cdn.simpleicons.org/railway/FFFFFF",
  },

  // Storage
  {
    name: "Cloudinary",
    subtitle: "Storage",
    icon: "https://cdn.simpleicons.org/cloudinary/FFFFFF",
  },

  // Design App
  {
    name: "Canva",
    subtitle: "Design App",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
  },
  {
    name: "Figma",
    subtitle: "Design App",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
];

const About = () => (
  <PageTransition>
    <div className="container pt-32 -mb-10 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
          about
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="space-y-5 text-muted-foreground leading-relaxed mb-16"
      >
        <p>
          i'm a software engineer and frontend developer who loves building
          things at the intersection of design and engineering. i believe great
          software is equal parts technical precision and human empathy — every
          interaction should feel intentional, and every detail should have a
          purpose.
        </p>
        <p>
          i started coding out of curiosity — tinkering with small projects,
          breaking things, and figuring out how to put them back together. that
          curiosity never really went away. these days, i spend most of my time
          crafting user interfaces, building web applications, and exploring
          ways to make the web feel faster, more intuitive, and more enjoyable
          to use.
        </p>
        <p>
          when i'm not coding, you'll probably find me diving into design
          systems, experimenting with typography, or just taking a walk while
          listening to a good podcast.
        </p>
      </motion.div>

      {/* Philosophy */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        className="mb-16"
      >
        <h2 className="font-mono text-xs text-primary tracking-widest uppercase mb-4">
          philosophy
        </h2>
        <blockquote className="border-l-2 border-primary/40 pl-4 text-muted-foreground italic leading-relaxed">
          Object-oriented programming languages support encapsulation, thereby
          improving the ability of software to be reused, refined, tested,
          maintained, and extended. The full benefit of this support can only be
          realized if encapsulation is maximized during the design process.
        </blockquote>
      </motion.section>

      {/* Skills */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <h2 className="font-mono text-xs text-primary tracking-widest uppercase mb-6">
          skills & tools
        </h2>
        <div className="grid gap-4 md:gap-4 lg:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-4 p-3 rounded-xl bg-card border border-border/50 hover:border-primary/40 hover:scale-[1.03] transition-all duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-5 h-5"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {tool.name}
                </p>
                <p className="text-xs text-muted-foreground">{tool.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  </PageTransition>
);

export default About;
