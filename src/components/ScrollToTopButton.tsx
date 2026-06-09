import { useEffect, useState, useCallback, useRef } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD = 300;

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const rafRef = useRef<number | null>(null);
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    if (rafRef.current !== null) return;

    rafRef.current = requestAnimationFrame(() => {
      const currentY = window.scrollY || document.documentElement.scrollTop;
      if (currentY !== lastScrollY.current) {
        lastScrollY.current = currentY;
        setVisible(currentY > SCROLL_THRESHOLD);
      }
      rafRef.current = null;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleScroll]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className={cn(
        "fixed z-50 flex items-center justify-center rounded-full",
        "border border-border bg-card/90 backdrop-blur-xl",
        "shadow-lg transition-all duration-300 ease-out",
        "hover:bg-primary hover:text-primary-foreground hover:shadow-xl hover:scale-105",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "bottom-5 right-4 size-10 md:bottom-8 md:right-8 md:size-11",
        visible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-3 opacity-0 pointer-events-none",
      )}
    >
      <ArrowUp className="size-4 md:size-5" />
    </button>
  );
}
