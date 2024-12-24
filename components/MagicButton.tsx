import React from "react";

/**
 * MagicButton Component
 * UI: Border magic from Tailwind CSS buttons
 * Link: https://ui.aceternity.com/components/tailwindcss-buttons
 */
const MagicButton = ({
  title,
  icon,
  position = "right", // Default to "right" if not provided
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position?: "left" | "right"; // Restrict to valid positions
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className={`relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none`}
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-5 gap-2 text-sm font-medium text-white backdrop-blur-3xl ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
