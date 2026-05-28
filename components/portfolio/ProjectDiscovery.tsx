"use client";

import { GalleryItem, Project } from "@/lib/data";
import Image from "next/image";
import { motion } from "motion/react";

interface ProjectDiscoveryProp {
  sectionKey: string;
  data: Project;
  value: NonNullable<Project["content"]>[string];
}

export default function ProjectDiscovery({
  sectionKey,
  data,
  value,
}: ProjectDiscoveryProp) {
  const motionAnimation = {
    initial: { opacity: 0, translateY: 20 },
    whileInView: { opacity: 1, translateY: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: {
      type: "spring" as const,
      bounce: 0.4,
    },
  };

  const MotionVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
        // delayChildren: 0.5,
      },
    },
  };

  const MotionChildrenVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <article aria-labelledby={`#${sectionKey}--subheading-${data.slug}`}>
      <div className="container" key={sectionKey}>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={MotionVariants}
          className="grid grid-cols-1 gap-4 sm:grid-cols-[0.5fr_1fr] py-16"
        >
          <motion.h5
            variants={MotionChildrenVariants}
            id={`${sectionKey}--subheading-${data.slug}`}
            className="capitalize  text-[#737373]"
          >
            The {sectionKey}
          </motion.h5>
          <motion.p
            className=" leading-loose text-pretty sm:text-base"
            variants={MotionChildrenVariants}
          >
            {value.text}
          </motion.p>
        </motion.div>
      </div>
      {Array.isArray(value.media) && (
        <div className="flex gap-2 flex-col">
          {value.media.map((media) =>
            media.type === "image" ? (
              <motion.figure key={media.alt} {...motionAnimation}>
                <Image
                  className="relative!"
                  fill
                  alt={`${media.alt} Banner`}
                  src={media.src}
                ></Image>
              </motion.figure>
            ) : (
              "Video"
            ),
          )}
        </div>
      )}
    </article>
  );
}
