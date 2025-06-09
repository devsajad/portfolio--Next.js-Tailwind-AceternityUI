import { projects as originalProjects } from "@/app/_data/compsData";
import React from "react";
import { PinContainer } from "./ui/PinContainer";
import Image from "next/image";
import bg from "@/public/bg.png";
import { GoArrowUpRight } from "react-icons/go";
import { SparkleHeading } from "./ui/SparkleHeading";
import { getPlaceholer } from "../_lib/getPlaceholder";

export const RecentProjects = async () => {
  const projects = await Promise.all(
    originalProjects.map(async (project) => {
      // Get placeholder for the main project image
      const blurDataURL = await getPlaceholer(project.img);

      return {
        ...project,
        blurDataURL, // Add blurDataURL to the project object
      };
    }),
  );

  return (
    <section id="projects" className="md:mt-30 mt-15">
      <div className="mb-8 md:mb-0">
        <SparkleHeading underlineClass="w-[30rem] md:w-[40rem] lg:w-[60rem]">
          <p>
            A selection of
            <span className="text-primary"> recent projects</span>
          </p>
        </SparkleHeading>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-24 lg:gap-y-2 gap-y-17">
        {projects.map(
          ({ id, title, des, img, iconLists, link, blurDataURL }) => (
            <div
              key={id}
              className="h-[25rem] sm:w-[570px] lg:min-h-[32.5rem] flex items-center justify-center w-[80vw]"
            >
              <PinContainer title={link} href={link}>
                <div className="sm:w-[570px] sm:h-[40vh]  relative flex items-center justify-center w-[80vw] overflow-hidden h-[30vh] mb-10">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl">
                    <Image
                      priority={id === 1 || id === 2}
                      quality={70}
                      fill
                      src={bg}
                      alt="background of the project section"
                      placeholder="blur"
                    />

                    <Image
                      priority={id === 1 || id === 2}
                      quality={50}
                      fill
                      src={img}
                      alt={title}
                      className="bottom-0"
                      placeholder={blurDataURL ? "blur" : "empty"}
                      blurDataURL={blurDataURL}
                    />
                  </div>
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {title}
                </h1>
                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {des}
                </p>

                {/* Footer of the card */}
                <div className="mt-7 mb-3 flex items-center justify-between">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[.2] bg-black lg:h-10 lg:w-10"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <div className="aspect-square">
                          <Image
                            quality={70}
                            fill
                            src={icon}
                            alt="icon"
                            className="object-cover p-2"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-center gap-1">
                    <p className="text-purple text-primary flex text-sm md:text-sm lg:text-lg">
                      Check Live Site
                    </p>
                    <GoArrowUpRight className="text-primary " size={25} />
                  </div>
                </div>
              </PinContainer>
            </div>
          ),
        )}
      </div>
    </section>
  );
};
