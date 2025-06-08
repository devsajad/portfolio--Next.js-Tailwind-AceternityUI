import React from "react";

export const FooterButtons = ({
  icon,
}: {
  children?: string;
  icon?: React.ReactElement;
}) => {
  const enhancedIcon = React.cloneElement(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon as React.ReactElement<any>,
    {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      className: `${(icon as any).props.className || ""} h-4 w-4 dark:text-neutral-300`,
    },
  );

  return (
    <button
      className="z-11 cursor-pointer group/btn shadow-input relative flex items-center justify-center p-2.5 rounded-md bg-gray-50 font-medium text-black dark:bg-project-background dark:border-border-color border"
      type="submit"
    >
      {enhancedIcon}
      <BottomGradient />
    </button>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};
