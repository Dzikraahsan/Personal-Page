import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { to: "/", label: "home" },
  { to: "/about", label: "about" },
  { to: "/projects", label: "projects" },
  { to: "/journey", label: "journey" },
  { to: "/legacy", label: "legacy" },
  { to: "/contact", label: "contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
        <div className="container flex items-center justify-between h-14">
          <Link
            to="/"
            className="font-mono text-sm font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
          >
            Dzii<span className="text-primary">27</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-mono text-xs tracking-wide transition-colors relative py-1 ${
                  location.pathname === link.to
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {location.pathname === link.to && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-0.5 left-0 right-0 h-px bg-primary"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 40,
                      mass: 0.7,
                      restDelta: 0.001,
                    }}
                  />
                )}
              </Link>
            ))}
            <ThemeToggle className="ml-2" />
          </div>

          {/* Mobile actions */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-foreground p-1"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/30 backdrop-blur-xl flex flex-col justify-between p-6 pt-24"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

            {/* Main Links Container */}
            <div className="relative flex flex-col gap-2.5 w-full max-w-sm mx-auto my-auto">
              <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-muted-foreground/45 block mb-1 pl-1">
                / navigation menu
              </span>

              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.to;

                return (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      delay: i * 0.04,
                    }}
                    className="w-full"
                  >
                    <Link
                      to={link.to}
                      onClick={() => setMobileOpen(false)}
                      className={`group relative flex items-center justify-between w-full p-4 rounded-xl border font-mono text-sm transition-all duration-200 ${
                        isActive
                          ? "bg-primary/5 border-primary/25 text-primary"
                          : "bg-surface/20 border-border/40 text-muted-foreground active:bg-surface/40 active:border-border/60 text-foreground"
                      }`}
                    >
                      {/* Left Side: Index Indicator + Label */}
                      <div className="flex items-center gap-3">
                        <span
                          className={`text-[10px] opacity-35 ${isActive ? "text-primary font-bold" : "text-muted-foreground"}`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="tracking-wide">{link.label}</span>
                      </div>

                      {/* Right Side Status Element */}
                      {isActive ? (
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_2px_hsl(var(--primary)/0.4)] animate-pulse" />
                      ) : (
                        <span className="text-[10px] opacity-0 group-active:opacity-100 group-hover:opacity-40 transition-opacity font-mono tracking-tighter">
                          -&gt;
                        </span>
                      )}

                      {/* Ambient Top Light Line on Active */}
                      {isActive && (
                        <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Mini Footer Mobile Menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="relative border-t border-border/30 pt-4 text-center w-full max-w-sm mx-auto font-mono text-[9px] text-muted-foreground/30 tracking-widest uppercase"
            >
              dzii27 © personal page
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
