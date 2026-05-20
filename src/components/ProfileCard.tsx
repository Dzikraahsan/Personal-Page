import React from "react";

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
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  avatarUrl = TRANSPARENT_PIXEL,
  className = "",
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-[30px] bg-[linear-gradient(180deg,#4fa3d1_0%,#0b1d3a_100%)] ${className}`.trim()}
      style={{
        aspectRatio: "0.84",
        minHeight: "380px",
      }}
    >
      <img
        src={avatarUrl}
        alt="Profile"
        className="absolute inset-0 h-full w-full object-contain object-bottom"
        loading="eager"
        draggable="false"
      />
    </div>
  );
};

export default ProfileCard;
