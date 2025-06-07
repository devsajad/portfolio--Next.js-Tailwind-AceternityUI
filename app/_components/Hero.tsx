import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect ";
import { Button } from "./ui/Button";
import Link from "next/link";
import { Avatar } from "./ui/Avatar";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";

export const Hero = () => {
  return (
    <header className="md:pt-6 pb-20">
      <div className="relative z-10 my-20 flex flex-col items-center justify-center">
        <div>
          <Avatar />
          <h2 className="max-w-80 text-center text-xs tracking-wider text-blue-100 uppercase mt-6">
            Frontend Developer  / Next.js
          </h2>
        </div>

        <div className="flex max-w-[50-dvw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60dvw] mb-3 ">
          <TextGenerateEffect
            words="Bringing Ideas to Life Through Pixel-Perfect Frontends"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
        </div>
        <div className="grid grid-cols-2 gap-2 p-2 md:gap-4">
          <Link href="/projects">
            <Button className="h-12" type="button">
              <Button.Content className="text-black-100 px-5 md:px-9">
                <FiArrowUpRight className="w-5" />
                <span>My projects</span>
              </Button.Content>
            </Button>
          </Link>

          <Button className="h-12" type="button">
            <Button.Content className="bg-slate-950 text-white">
              <FiDownload className="w-5" />
              <span>My Resume</span>
            </Button.Content>
          </Button>
        </div>
      </div>
    </header>
  );
};
