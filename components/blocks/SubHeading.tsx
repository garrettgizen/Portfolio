"use client";

import React from "react";
import { SubHeadingFields } from "@/lib/types";
import { SerializedBlockNode } from "@payloadcms/richtext-lexical";
import { motion } from "motion/react";

interface SubHeadingProps {
  data: SerializedBlockNode<SubHeadingFields>;
  children?: React.ReactNode;
}

export const SubHeading = ({ data, children }: SubHeadingProps) => {
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
    <article aria-label={`${data.fields.heading}`}>
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={MotionVariants}
          className="grid grid-cols-1 gap-4 sm:grid-cols-[0.5fr_1fr] py-16"
        >
          <motion.h5
            variants={MotionChildrenVariants}
            className="capitalize  text-[#737373]"
          >
            {data.fields.heading}
          </motion.h5>
          <motion.p
            className=" leading-loose text-pretty sm:text-base"
            variants={MotionChildrenVariants}
          >
            {children}
          </motion.p>
        </motion.div>
      </div>
    </article>
  );
};
