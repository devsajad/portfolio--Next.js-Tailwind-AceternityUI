"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/app/_data/compsData";
import { motion } from "framer-motion";

export const Grid = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <section id="about" className="max-w-7xl mx-auto mt-35">
        <BentoGrid>
          {gridItems.map(
            ({
              id,
              title,
              description,
              className,
              imgClassName,
              titleClassName,
              img,
              spareImg,
            }) => (
              <BentoGridItem
                key={id}
                id={id}
                title={title}
                description={description}
                className={className}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
                img={img}
                spareImg={spareImg}
              />
            ),
          )}
        </BentoGrid>
      </section>
    </motion.div>
  );
};
