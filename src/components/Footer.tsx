import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 py-8 mt-32 bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/80">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} Dzikra. all rights reserved.
      </p>
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/Dzikraahsan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Github size={16} />
        </a>
        <a
          href="https://www.linkedin.com/in/dzikra-ahsan-1b2154386?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Linkedin size={16} />
        </a>
        <a
          href="mailto:dzikraahsan10@gmail.com"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Mail size={16} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
