import { ReactNode, useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  /** index for automatic small stagger (overridden by `delay`) */
  index?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "header" | "footer" | "a";
} & Omit<HTMLMotionProps<"div">, "ref" | "initial" | "animate" | "transition" | "children">;

/**
 * Unified scroll-reveal motion primitive used across the whole site.
 * - Subtle fade + small lift, premium easing.
 * - Lighter, faster on mobile.
 * - Respects prefers-reduced-motion.
 * - Safety fallback: forces content visible after 1.2s in case the
 *   IntersectionObserver never fires (prevents stuck opacity:0).
 */
const Reveal = ({
  children,
  delay,
  index = 0,
  className,
  as = "div",
  ...rest
}: RevealProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.05,
    margin: "0px 0px -5% 0px",
  });
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  const [forceShow, setForceShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setForceShow(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const visible = inView || forceShow || prefersReducedMotion;

  const y = prefersReducedMotion ? 0 : isMobile ? 8 : 14;
  const duration = prefersReducedMotion ? 0 : isMobile ? 0.45 : 0.6;
  const stagger = isMobile ? 0.04 : 0.06;
  const computedDelay =
    prefersReducedMotion ? 0 : delay ?? Math.min(index * stagger, 0.25);

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration,
        delay: computedDelay,
        ease: [0.22, 1, 0.36, 1],
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
