import React from "react";

export const Button = ({
  children,
  handlClick,
  className,
  type,
}: {
  children: React.ReactNode;
  className: string;
  handlClick?: () => void;
  type: "button" | "submit" | "reset";
}) => {
  return (
    <button
      type={type}
      onClick={handlClick}
      className={`${className} relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-md p-[1px]`}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      {children}
    </button>
  );
};

function Content({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <span
      className={`${className} inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-md text-sm font-medium backdrop-blur-3xl`}
    >
      {children}
    </span>
  );
}

Button.Content = Content;
