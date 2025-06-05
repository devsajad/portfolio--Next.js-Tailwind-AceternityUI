import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { StarsBackground } from "./ui/StarsBackground";
import { ShootingStars } from "./ui/ShootingStars";
import { TextGenerateEffect } from "./ui/TextGenerateEffect ";
import { Button } from "./ui/Button";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";

export const Hero = () => {
  return (
    <header className="pt-10 pb-20">
      <div>
        <StarsBackground starDensity={0.00015} minTwinkleSpeed={0.2} />
        <ShootingStars />
      </div>

      <div>
        <Spotlight fill="white" className="md: -top-10 -left-10 h-screen" />
        <Spotlight
          fill="purple"
          className="top-5 left-full h-[80dvh] w-[80dvw]"
        />
        <Spotlight fill="blue" className="left-50 h-[90dvh] md:left-70" />
      </div>

      <div className="relative z-10 my-20 flex items-center justify-center">
        <div className="flex max-w-[50-dvw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60dvw]">
          <h2 className="max-w-80 text-center text-xs tracking-wider text-blue-100 uppercase">
            Dynamic Web Magic with Next.js
          </h2>

          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="md:tex-lg mb-4 line-clamp-1 text-center text-sm text-gray-50 md:tracking-wider lg:text-2xl">
            Hi! I&apos;m Sajjad, a Front-end Developer based in Iran.
          </p>

          <div className="grid grid-cols-2 gap-2 p-2 md:gap-4">
            <Link href="#">
              <Button className="h-12">
                <Button.Content className="text-black-100 px-7">
                  Show my work
                  <FaLocationArrow className="w-2.5" />
                </Button.Content>
              </Button>
            </Link>

            <Button className="h-12">
              <Button.Content className="bg-slate-950 px-7 text-white">
                My Resume
                {/* <FaFileDownload className="w-2.5" /> */}
              </Button.Content>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
