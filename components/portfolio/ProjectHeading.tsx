"use client";

import Link from "next/link";
import { Project } from "@/lib/types";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft02Icon } from "@hugeicons/core-free-icons";
import { motion } from "motion/react";

interface ProjectHeadingProps {
  data: Project;
}

export default function ProjectHeading({ data }: ProjectHeadingProps) {
  const MotionVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const MotionChildrenVariants = {
    hidden: {
      y: 20,
      opacity: 0,
      transition: { type: "spring" as const, bounce: 0.5, duration: 1 },
    },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, bounce: 0.5, duration: 0.4 },
    },
  };

  return (
    <article aria-label="Post Heading" className="border-border border-b">
      <div className="container grid-layout">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={MotionVariants}
          className="flex flex-col gap-4 py-16 tablet:pt-24 pb-12"
        >
          <Link
            aria-label={`Back To ${data.category.title}`}
            className="flex flex-row items-center gap-1 text-primary cursor-pointer w-fit transition-colors duration-300 hover:text-accent"
            href={`/portfolio/${data.category.slug}`}
          >
            <HugeiconsIcon aria-hidden size={20} icon={ArrowLeft02Icon} />
            Back
          </Link>
          <motion.h1
            variants={MotionChildrenVariants}
            className="text-5xl font-heading font-black"
          >
            {data.title}
          </motion.h1>
          {data.details && (
            <motion.ul
              variants={MotionChildrenVariants}
              className="flex flex-wrap gap-x-11 gap-y-2 mt-3"
            >
              {Object.entries(data.details).map(([key, value]) => (
                <li className="flex flex-col w-full xs:w-fit" key={key}>
                  <h6 className="capitalize opacity-60">{key}</h6>
                  <p className="capitalize">
                    {" "}
                    {Array.isArray(value)
                      ? value
                          .map((v) => v.replace(/_/g, " ").replace(/And/g, "/"))
                          .join(", ")
                      : value
                          .toString()
                          .replace(/_/g, " ")
                          .replace(/And/g, "/")}
                  </p>
                </li>
              ))}
            </motion.ul>
          )}
        </motion.div>
      </div>
    </article>
  );
}
