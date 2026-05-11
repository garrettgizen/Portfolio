"use client";

import React from "react";
import { motion } from "motion/react";

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
    transition: { type: "spring" as const, bounce: 0.5, duration: 1 },
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring" as const, bounce: 0.5, duration: 0.4 },
  },
};

export default function FooterContact() {
  return (
    <motion.div
      className="flex flex-col gap-2 tablet:max-w-97"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={MotionVariants}
    >
      <motion.span variants={MotionChildrenVariants} className="text-[#939393]">
        Let’s Chat
      </motion.span>
      <motion.h5 variants={MotionChildrenVariants} className="text-lg mb-6">
        <strong>Like what you see?</strong> How about we get in touch and let’s
        build our dream designs.
      </motion.h5>
      <motion.a
        variants={MotionChildrenVariants}
        className="button dark"
        href="mailto:garrettgizen@proton.me"
      >
        Email Me Now!
      </motion.a>
    </motion.div>
  );
}
