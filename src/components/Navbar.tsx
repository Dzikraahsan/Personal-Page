import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
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
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<Record<string, HTMLAnchorElement | null>>({});

  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  useEffect(() => {
    const activeLink = linksRef.current[location.pathname];
    const container = containerRef.current;

    if (activeLink && container) {
      const activeRect = activeLink.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      // Hitung posisi relatif 'left' terhadap container navbar
      const relativeLeft = activeRect.left - containerRect.left;

      setIndicatorStyle({
        left: `${relativeLeft}px`,
        width: `${activeRect.width}px`,
        opacity: 1,
      });
    } else {
      setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [location.pathname]);

  // Close mobile menu on route change and restore focus to the toggle button
  useEffect(() => {
    if (mobileOpen) {
      setMobileOpen(false);
      menuButtonRef.current?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Escape key closes the mobile menu
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  return (
    <>
      <nav aria-label="Primary" className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
        <div className="container flex items-center justify-between h-14">
          <Link
            to="/"
            className="font-mono text-sm font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
          >
            Dzii<span className="text-primary">27</span>
          </Link>

          {/* Desktop */}
          <div
            ref={containerRef}
            className="relative hidden md:flex items-center gap-8 h-full py-1"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;

              return (
                <Link
                  key={link.to}
                  ref={(el) => {
                    linksRef.current[link.to] = el;
                  }}
                  to={link.to}
                  aria-current={isActive ? "page" : undefined}
                  className={`font-mono text-xs tracking-wide transition-colors duration-200 relative py-1 z-10 rounded-sm ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div
              className="absolute bottom-[1rem] h-[2px] bg-primary pointer-events-none opacity-90"
              style={{
                ...indicatorStyle,
                transition: "left 320ms cubic-bezier(0.25, 1, 0.5, 1), width 320ms cubic-bezier(0.25, 1, 0.5, 1), opacity 200ms ease",
                willChange: "left, width",
              }}
            />

            <ThemeToggle className="ml-2" />
          </div>

          {/* Mobile actions */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-foreground p-1 min-h-11 min-w-11 inline-flex items-center justify-center rounded-md"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-menu"
            >
              {mobileOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/30 backdrop-blur-xl flex flex-col justify-between p-6 pt-24"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

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
                      aria-current={isActive ? "page" : undefined}
                      className={`group relative flex items-center justify-between w-full p-4 rounded-xl border font-mono text-sm transition-all duration-200 ${
                        isActive
                          ? "bg-primary/5 border-primary/25 text-primary"
                          : "bg-surface/20 border-border/40 text-muted-foreground active:bg-surface/40 active:border-border/60 text-foreground"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`text-[10px] opacity-35 ${isActive ? "text-primary font-bold" : "text-muted-foreground"}`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="tracking-wide">{link.label}</span>
                      </div>

                      {isActive ? (
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_2px_hsl(var(--primary)/0.4)] animate-pulse" />
                      ) : (
                        <span className="text-[10px] opacity-0 group-active:opacity-100 group-hover:opacity-40 transition-opacity font-mono tracking-tighter">
                          -&gt;
                        </span>
                      )}

                      {isActive && (
                        <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

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
      </  AnimatePresence>
    </>
  );
};

export default Navbar;
