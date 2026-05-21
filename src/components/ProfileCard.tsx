import React, { useRef, useEffect, useState, useCallback } from "react";

const TRANSPARENT_PIXEL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO7+Q5QAAAAASUVORK5CYII=";

interface ProfileCardProps {
  avatarUrl?: string;
  miniAvatarUrl?: string;
  name?: string;
  title?: string;
  handle?: string;
  status?: string;
  contactText?: string;
  showUserInfo?: boolean;
  enableTilt?: boolean;
  enableMobileTilt?: boolean;
  className?: string;
  onContactClick?: () => void;
  borderThickness?: number;
  animationDuration?: number;
  borderColor?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  avatarUrl = TRANSPARENT_PIXEL,
  miniAvatarUrl,
  name,
  title,
  handle,
  status,
  contactText,
  showUserInfo = false,
  enableTilt = false,
  enableMobileTilt = false,
  className = "",
  onContactClick,
  borderThickness = 1.25,
  animationDuration = 5000,
  borderColor = "#7eb8e0",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const startTimeRef = useRef<number | null>(null);
  const progressRef = useRef<number>(0);
  const [dims, setDims] = useState({ w: 0, h: 0 });

  const updateSize = useCallback(() => {
    if (!cardRef.current) return;
    setDims({
      w: cardRef.current.offsetWidth,
      h: cardRef.current.offsetHeight,
    });
  }, []);

  useEffect(() => {
    updateSize();
    const ro = new ResizeObserver(updateSize);
    if (cardRef.current) ro.observe(cardRef.current);
    return () => ro.disconnect();
  }, [updateSize]);

  const svgRef = useRef<SVGSVGElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const uid = useRef(`mb-${Math.random().toString(36).slice(2, 7)}`).current;

  useEffect(() => {
    if (!dims.w || !dims.h) return;

    const { w, h } = dims;
    const R = 30;
    const pathD = `M ${R} 0 H ${w - R} Q ${w} 0 ${w} ${R} V ${h - R} Q ${w} ${h} ${w - R} ${h} H ${R} Q 0 ${h} 0 ${h - R} V ${R} Q 0 0 ${R} 0 Z`;

    const tmp = document.createElementNS("http://www.w3.org/2000/svg", "path");
    tmp.setAttribute("d", pathD);
    const perimeter = tmp.getTotalLength();
    const TRAIL = 200;

    const animate = (ts: number) => {
      if (startTimeRef.current === null)
        startTimeRef.current = ts - progressRef.current * animationDuration;

      const progress =
        ((ts - startTimeRef.current) % animationDuration) / animationDuration;
      progressRef.current = progress;

      const head = progress * perimeter;
      const tail = head - TRAIL;

      if (lineRef.current) {
        if (tail >= 0) {
          lineRef.current.setAttribute(
            "stroke-dasharray",
            `${TRAIL} ${perimeter}`,
          );
          lineRef.current.setAttribute("stroke-dashoffset", `${-tail}`);
        } else {
          const seg1 = head;
          const gap = perimeter - TRAIL;
          const seg2 = TRAIL - head;
          lineRef.current.setAttribute(
            "stroke-dasharray",
            `${seg1} ${gap} ${seg2}`,
          );
          lineRef.current.setAttribute("stroke-dashoffset", "0");
        }
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animRef.current);
      startTimeRef.current = null;
    };
  }, [dims, animationDuration]);

  const { w, h } = dims;
  const R = 30;
  const pathD =
    w && h
      ? `M ${R} 0 H ${w - R} Q ${w} 0 ${w} ${R} V ${h - R} Q ${w} ${h} ${w - R} ${h} H ${R} Q 0 ${h} 0 ${h - R} V ${R} Q 0 0 ${R} 0 Z`
      : "";

  return (
    <div
      className={`relative w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] mx-auto md:mx-0 ${className}`.trim()}
      style={{ aspectRatio: "0.84", minHeight: "380px" }}
    >
      <div
        ref={cardRef}
        className="absolute inset-0 overflow-hidden rounded-[25px] bg-[linear-gradient(180deg,#4fa3d1_0%,#0b1d3a_100%)]"
      >
        <img
          src={avatarUrl}
          alt={name ?? "Profile"}
          className="absolute inset-0 h-full w-full object-contain object-bottom"
          loading="eager"
          draggable="false"
        />

        {showUserInfo && (
          <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-1">
            {name && (
              <span className="text-white font-semibold text-lg leading-tight">
                {name}
              </span>
            )}
            {title && <span className="text-white/70 text-sm">{title}</span>}
            <div className="flex items-center gap-2 mt-1">
              {handle && (
                <span className="text-white/50 text-xs">@{handle}</span>
              )}
              {status && (
                <span className="text-xs text-emerald-400 font-medium">
                  {status}
                </span>
              )}
            </div>
            {contactText && (
              <button
                onClick={onContactClick}
                className="mt-2 self-start px-4 py-1.5 rounded-full bg-white/20 text-white text-sm hover:bg-white/30 transition-colors"
              >
                {contactText}
              </button>
            )}
          </div>
        )}
      </div>

      {w > 0 && h > 0 && (
        <svg
          ref={svgRef}
          width={w}
          height={h}
          viewBox={`0 0 ${w} ${h}`}
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 10,
            overflow: "visible",
          }}
        >
          <defs>
            <filter
              id={`${uid}-glow`}
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d={pathD}
            fill="none"
            stroke={borderColor}
            strokeWidth={borderThickness}
            strokeOpacity={0.12}
          />

          <path
            ref={lineRef}
            d={pathD}
            fill="none"
            stroke={borderColor}
            strokeWidth={borderThickness * 2}
            strokeLinecap="round"
            filter={`url(#${uid}-glow)`}
            style={{ willChange: "stroke-dashoffset" }}
          />
        </svg>
      )}
    </div>
  );
};

export default ProfileCard;
