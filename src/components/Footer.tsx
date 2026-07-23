import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 py-8 mt-32 bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/80">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} Dzikra. all rights reserved.
      </p>
      <ul className="flex items-center gap-4" aria-label="Social links">
        <li>
          <a
            href="https://github.com/Dzikraahsan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in a new tab)"
            className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center justify-center min-h-11 min-w-11 rounded-md"
          >
            <Github size={16} aria-hidden="true" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/dzikra-ahsan-1b2154386?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in a new tab)"
            className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center justify-center min-h-11 min-w-11 rounded-md"
          >
            <Linkedin size={16} aria-hidden="true" />
          </a>
        </li>
        <li>
          <a
            href="mailto:dzikraahsan10@gmail.com"
            aria-label="Send email to dzikraahsan10@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center justify-center min-h-11 min-w-11 rounded-md"
          >
            <Mail size={16} aria-hidden="true" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
