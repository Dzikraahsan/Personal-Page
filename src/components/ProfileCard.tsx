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
  borderThickness = 1,
  animationDuration = 5000,
  borderColor = "#7eb8e0",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const startTimeRef = useRef<number | null>(null);
  const shineRef = useRef<SVGPathElement>(null);
  const [dims, setDims] = useState({ w: 0, h: 0 });
  const uid = useRef(`mb-${Math.random().toString(36).slice(2, 7)}`).current;

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

  useEffect(() => {
    if (!dims.w || !dims.h) return;
    const { w, h } = dims;
    const R = 25;
    const pathD = `M ${R} 0 H ${w - R} Q ${w} 0 ${w} ${R} V ${h - R} Q ${w} ${h} ${w - R} ${h} H ${R} Q 0 ${h} 0 ${h - R} V ${R} Q 0 0 ${R} 0 Z`;
    const tmp = document.createElementNS("http://www.w3.org/2000/svg", "path");
    tmp.setAttribute("d", pathD);
    const P = tmp.getTotalLength();
    const TRAIL = P * 0.22;

    const animate = (ts: number) => {
      if (startTimeRef.current === null) startTimeRef.current = ts;
      const t =
        ((ts - startTimeRef.current) % animationDuration) / animationDuration;
      const head = t * P;
      const tail = head - TRAIL;

      if (shineRef.current) {
        if (tail >= 0) {
          shineRef.current.setAttribute(
            "stroke-dasharray",
            `${TRAIL} ${P - TRAIL}`,
          );
          shineRef.current.setAttribute("stroke-dashoffset", `${-tail}`);
        } else {
          const seg1 = head;
          const seg2 = TRAIL - head;
          shineRef.current.setAttribute(
            "stroke-dasharray",
            `${seg1} ${P - TRAIL} ${seg2}`,
          );
          shineRef.current.setAttribute("stroke-dashoffset", "0");
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
  const R = 25;
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
              x="-80%"
              y="-80%"
              width="260%"
              height="260%"
            >
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient
              id={`${uid}-shine`}
              gradientUnits="userSpaceOnUse"
              x1="0"
              y1="0"
              x2={w}
              y2={h}
            >
              <stop offset="0%" stopColor={borderColor} stopOpacity="0" />
              <stop offset="40%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="60%" stopColor={borderColor} stopOpacity="1" />
              <stop offset="100%" stopColor={borderColor} stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Full static border */}
          <path
            d={pathD}
            fill="none"
            stroke={borderColor}
            strokeWidth={borderThickness}
            strokeOpacity={0.18}
          />

          {/* Shiny moving highlight */}
          <path
            ref={shineRef}
            d={pathD}
            fill="none"
            stroke={`url(#${uid}-shine)`}
            strokeWidth={borderThickness * 3}
            strokeLinecap="round"
            filter={`url(#${uid}-glow)`}
          />
        </svg>
      )}
    </div>
  );
};

export default ProfileCard;
