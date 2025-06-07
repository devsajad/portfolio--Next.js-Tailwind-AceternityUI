import Image from "next/image";
import React from "react";
import { HoverBorderGradient } from "./HoverBorderGradient";
import avatarImg from "@/public/avatar-main.webp";

export const Avatar = () => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center relative mb-2">
      <Image
        quality={80}
        placeholder="blur"
        src={avatarImg}
        alt="sajjad zarepour avatar in space"
        width={100}
        height={100}
      />

      <div className="flex justify-center text-center -mt-7">
        <HoverBorderGradient containerClassName="text-black!" as="button">
          <div className="flex gap-1">
            <div
              className="mr-1 flex aspect-square h-[14px] w-[14px] animate-pulse rounded-full bg-green-500/50 dark:bg-green-400/50 sm:m-0 md:mr-1"
              aria-hidden="true"
            >
              <div className="m-auto h-2 w-2 rounded-full bg-green-500 dark:bg-green-400"></div>
            </div>
            <span className="max-w-80 text-center text-xs tracking-wider text-blue-100">
              HI I&apos;m Sajjad Zarepour
            </span>
          </div>
        </HoverBorderGradient>
      </div>
    </div>
  );
};
