import React from "react";

export function SparkleHeading({
  children,
  headingClass,
  underlineClass,
}: {
  children: React.ReactElement;
  headingClass?: string;
  underlineClass?: string;
}) {
  return (
    <div className="w-full  flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className={`heading ${headingClass} z-10`}>{children}</h1>
      <div className={`h-5 relative animate-pulse ${underlineClass}`}>
        {/* Gradients */}
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
      </div>
    </div>
  );
}
