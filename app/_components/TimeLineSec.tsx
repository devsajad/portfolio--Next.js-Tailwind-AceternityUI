import React from "react";
import { Timeline } from "@/app/_components/ui/Timeline";
import { Button } from "./ui/Button";
import { timelineData } from "../_data/compsData";

export function TimeLineSec() {
  const data = timelineData.map((item) => ({
    title: (
      <>
        <p className="text-lg md:text-2xl lg:text-3xl text-gray-400 font-light">
          {item.year}
        </p>
        <p className="text-gray-300 font-bold text-xl md:text-3xl">
          {item.title}
        </p>
      </>
    ),
    content: (
      <>
        <header>
          <p className="font-light text-base text-gray-300 mt-2">
            {item.description}
          </p>
          <div className="space-x-2 mt-4">
            {item.badges.map((badge: string, i: number) => (
              <Button key={i} className="h-7" type="button">
                <Button.Content className="text-black-100 px-2 font-extra text-xs">
                  <span>{badge}</span>
                </Button.Content>
              </Button>
            ))}
          </div>
        </header>
      </>
    ),
  }));

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
