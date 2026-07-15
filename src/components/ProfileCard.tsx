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
  borderThickness = 3,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
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

  return (
    <div
      className={`relative w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] mx-auto md:mx-0 ${className}`.trim()}
      style={{ aspectRatio: "0.84", minHeight: "380px" }}
    >
      {/* ── Outer Layer: Full Loop Animating Gradient Border ── */}
      <div
        className="absolute inset-0 rounded-[25px] overflow-hidden"
        style={{
          padding: `${borderThickness}px`,
          backgroundImage: `linear-gradient(to right, hsl(var(--primary)), hsl(179, 100%, 64%), hsl(var(--primary)))`,
          backgroundSize: "200% 100%",
          animation: "gradient-move 3s linear infinite",
          willChange: "background-position",
        }}
      >
        {/* Glow Reflection Masking Backing */}
        <div
          className="absolute inset-0 blur-md opacity-40 pointer-events-none rounded-[25px]"
          style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--primary)), hsl(179, 100%, 64%), hsl(var(--primary)))`,
            backgroundSize: "200% 100%",
            animation: "gradient-move 3s linear infinite",
          }}
        />

        {/* ── Inner Layer: Main Card Shell Content ── */}
        <div
          ref={cardRef}
          // Mengembalikan background-gradient asli (#4fa3d1 ke #0b1d3a) agar warna dalam kartu presisi
          className="relative w-full h-full overflow-hidden rounded-[23px] bg-[linear-gradient(180deg,#4fa3d1_0%,#0b1d3a_100%)]"
        >
          {/* Avatar Graphic */}
          <img
            src={avatarUrl}
            alt={name ?? "Profile"}
            className="absolute inset-0 h-full w-full object-contain object-bottom select-none z-0"
            loading="eager"
            draggable="false"
          />

          {/* Vignette Shadow Overlay */}
          {/*<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none z-15" />*/}

          {/* User Profile Identifiers */}
          {showUserInfo && (
            <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-1 z-20">
              {name && (
                <span className="text-white font-bold tracking-tight text-xl leading-tight">
                  {name}
                </span>
              )}
              {title && (
                <span className="text-muted-foreground font-mono text-xs tracking-wide">
                  {title}
                </span>
              )}

              <div className="flex items-center gap-2 mt-1">
                {handle && (
                  <span className="text-muted-foreground/50 font-mono text-[11px]">
                    @{handle}
                  </span>
                )}
                {status && (
                  <div className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-emerald-400 shadow-[0_0_6px_1px_rgba(52,211,153,0.4)] animate-pulse" />
                    <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400">
                      {status}
                    </span>
                  </div>
                )}
              </div>

              {contactText && (
                <button
                  onClick={onContactClick}
                  className="mt-3 self-start px-4 py-1.5 rounded-xl border border-border/40 bg-surface/30 backdrop-blur-sm text-foreground font-mono text-xs hover:border-primary/40 active:bg-surface/50 transition-all duration-200"
                >
                  {contactText}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
