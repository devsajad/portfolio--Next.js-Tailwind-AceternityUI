"use client";

import { cn } from "@/app/_lib/utils";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import { GridGlobe } from "./GridGlobe";
import Lottie from "lottie-react";
import animationData from "@/app/_data/animationData.json";
import { Button } from "./Button";
import { IoCopyOutline } from "react-icons/io5";
import { useState } from "react";
import Image from "next/image";
import codeBlockBg from "@/public/b5.svg";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "md:grid-row-7 mx-auto grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-5 lg:gap-8",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  title,
  description,
  className,
  imgClassName,
  titleClassName,
  img,
  spareImg,
}: {
  imgClassName?: string;
  titleClassName?: string;
  img?: string;
  spareImg?: string;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
}) => {
  const [isCopy, setCopy] = useState(false);

  function handleCopyClick() {
    navigator.clipboard.writeText("sajadzarepur@gmail.com");
    setCopy(true);
  }

  return (
    // Main Container
    <div
      className={cn(
        "group/bento bg-grid-background shadow-input relative row-span-1 flex flex-col justify-between space-y-4 overflow-hidden rounded-3xl border border-white/[0.1] bg-gradient-to-r from-[#04071d] to-[#0c0e23] transition duration-200 hover:shadow-xl dark:shadow-none",
        className,
      )}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        {/* Main image container */}
        <div className="absolute h-full w-full">
          {id === 5 && (
            <Image
              quality={70}
              src={codeBlockBg}
              alt="Picture of code block"
              className={imgClassName}
            />
          )}
          {img && (
            <Image
              quality={70}
              fill
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>

        {/* Spare Image container */}
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <div className="absolute h-full w-full ">
              <Image
                quality={70}
                fill
                src={spareImg}
                alt={spareImg}
                className="object-cover object-center"
              />
            </div>
          )}
        </div>

        {/* Item 6 Gradient (Absolute element related to main div) */}
        {id === 6 && <BackgroundGradientAnimation />}

        {/* Container for Texts and Items */}
        <div
          className={cn(
            titleClassName,
            "relative flex min-h-40 flex-col p-5 px-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full lg:p-10",
            id === 6 && "gap-3 md:gap-0 lg:p-6!",
          )}
        >
          {/* Grid Texts */}
          <div className="z-10 font-sans text-sm font-extralight text-[#C1C2D3] md:max-w-50 md:text-xs lg:text-base">
            {description}
          </div>

          <div
            className={`z-10 max-w-96 font-sans text-lg font-bold text-neutral-600 lg:text-3xl dark:text-neutral-300`}
          >
            {title}
          </div>

          {/* Item 2 */}

          {/* Item 3  */}
          {id === 3 && (
            <div className="absolute -right-3 flex w-fit gap-1 lg:-right-2 lg:gap-5">
              <div className="flex flex-col gap-3 md:gap-3">
                {["React.js", "Next.js", "TypeScript"].map((item, key) => (
                  <span
                    key={key}
                    className="rounded-lg bg-[#10132E] px-3 py-2 text-center text-xs text-[#C1C2D3] opacity-50 lg:px-3 lg:text-base lg:opacity-70"
                  >
                    {item}
                  </span>
                ))}
                <span className="rounded-lg bg-[#10132E] px-3 py-4 text-center lg:px-3"></span>
              </div>

              <div className="flex flex-col gap-3 md:gap-3">
                <span className="rounded-lg bg-[#10132E] px-3 py-4 text-center lg:px-3"></span>
                {["Tailwind", "Next.js", "TypeScript"].map((item, key) => (
                  <span
                    key={key}
                    className="rounded-lg bg-[#10132E] px-3 py-2 text-center text-xs text-[#C1C2D3] opacity-50 lg:px-3 lg:text-base lg:opacity-70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div>
              <div>
                <Lottie
                  className="absolute top-0"
                  key={isCopy ? "play" : "stop"}
                  loop={false}
                  autoplay={isCopy}
                  animationData={animationData}
                  rendererSettings={{
                    preserveAspectRatio: "",
                  }}
                />

                <Button
                  className="h-12"
                  handlClick={handleCopyClick}
                  type="button"
                >
                  <Button.Content className="bg-[#161a31] px-7 text-white lg:w-[12.5rem]">
                    {isCopy ? "Email compied" : "Copy my email"}
                    <IoCopyOutline className="w-2.5" />
                  </Button.Content>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
