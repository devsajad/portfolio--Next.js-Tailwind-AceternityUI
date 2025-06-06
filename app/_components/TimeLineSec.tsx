import React from "react";
import { Timeline } from "@/app/_components/ui/Timeline";

export function TimeLineSec() {
  const data = [
    {
      title: (
        <div className="">
          <p className="text-lg md:text-2xl lg:text-3xl text-gray-400 font-light">
            2020-2024
          </p>
          <p className="text-gray-300 font-bold text-xl md:text-3xl">
            Computer Engineering
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 font-light">
            University of Birjand
          </p>
        </div>
      ),
      content: (
        <div>
          <header>
            <p className="font-light text-base text-gray-300 ">
              Studied fundamental and advanced topics in computer engineering
              with a strong focus on software development, data structures, and
              web technologies. Developed hands-on experience through academic
              projects, self-study, and freelance work during the degree.
            </p>
          </header>
        </div>
      ),
    },
    {
      title: (
        <div className="">
          <p className="text-lg md:text-2xl lg:text-3xl text-gray-400 font-light">
            2024-2025
          </p>
          <p className="text-gray-300 font-bold text-xl md:text-3xl">
            Freelance Developer
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 font-light">
            Front-end
          </p>
        </div>
      ),
      content: (
        <div>
          <header>
            <p className="font-light text-base text-gray-300 ">
              Worked with various clients to design, build, and maintain
              responsive and accessible web interfaces. Specialized in building
              modern front-end applications using React, Tailwind CSS, and
              Next.js. Collaborated closely with designers and backend
              developers to deliver high-quality user experiences. Focused on
              performance optimization, component reusability, and clean,
              maintainable code.
            </p>
          </header>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip mt-40">
      <Timeline data={data} />
    </div>
  );
}
