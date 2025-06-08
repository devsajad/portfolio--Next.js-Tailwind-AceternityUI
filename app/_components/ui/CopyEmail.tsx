// CopyEmailClient.tsx
"use client";

import { useState } from "react";
import { Button } from "./Button";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "lottie-react";
import animationData from "@/app/_data/animationData.json";

export const CopyEmailClient = () => {
  const [isCopy, setCopy] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText("sajadzarepur@gmail.com");
    setCopy(true);
  };

  return (
    <>
      <Lottie
        className="absolute top-0"
        key={isCopy ? "play" : "stop"}
        loop={false}
        autoplay={isCopy}
        animationData={animationData}
      />
      <Button
        className="h-12 md:mt-3"
        handlClick={handleCopyClick}
        type="button"
      >
        <Button.Content className="bg-[#161a31] px-7 text-white lg:w-[12.5rem]">
          {isCopy ? "Email copied" : "Copy my email"}
          <IoCopyOutline className="w-2.5" />
        </Button.Content>
      </Button>
    </>
  );
};
