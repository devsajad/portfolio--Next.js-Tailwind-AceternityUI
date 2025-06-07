import React from "react";
import { StarsBackground } from "./StarsBackground";
import { ShootingStars } from "./ShootingStars";
import { Spotlight } from "./Spotlight";

export const BodyLightsStars = () => {
  return (
    <div>
      <StarsBackground
        starDensity={0.00015}
        minTwinkleSpeed={0.2}
        className="z-10"
      />
      <ShootingStars className="z-10" />

      <Spotlight fill="white" className="md:-top-10 -left-10 h-screen" />
      <Spotlight
        fill="purple"
        className="top-5 left-full h-[80dvh] w-[80dvw]"
      />
      <Spotlight fill="blue" className="left-50 h-[90dvh] md:left-70" />
    </div>
  );
};
