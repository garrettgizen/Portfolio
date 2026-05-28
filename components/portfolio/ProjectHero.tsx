"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Project } from "@/lib/data";
import { delay } from "motion";

interface ProjectHeroProps {
  data: Project;
}

export default function ProjectHero({ data }: ProjectHeroProps) {
  const motionAnimation = {
    initial: { opacity: 0, translateY: 20 },
    whileInView: { opacity: 1, translateY: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: {
      type: "spring" as const,
      bounce: 0.4,
      duration: 1,
    },
  };

  return (
    <>
      <motion.article
        {...motionAnimation}
        transition={{
          type: "spring" as const,
          bounce: 0.4,
          delay: 0.6,
          duration: 0.4,
        }}
        className="container border-border border-b py-16"
      >
        <h2 className="font-bold text-xl w-full sm:w-6/10">
          {data.description}
        </h2>
      </motion.article>
      {data.heroMedia && (
        <motion.figure {...motionAnimation}>
          <Image
            className="relative!"
            fill
            alt={`${data.name} Banner`}
            src={data.heroMedia}
          ></Image>
        </motion.figure>
      )}
    </>
  );
}
