"use client";

import React, { Fragment } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { navigation } from "@/lib/data";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUp02Icon } from "@hugeicons/core-free-icons";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const NavigationVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const navigationItemVariants = {
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

export default function FooterNavigation() {
  return (
    <div className="flex flex-row gap-y-12 gap-x-4 justify-between items-end">
      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={NavigationVariants}
        className="text-lg flex flex-col"
      >
        {navigation.map((link, index) => (
          <Fragment key={index}>
            <motion.a
              key={index}
              className="hover:scale-105 hover:text-primary transition-[scale,color]  duration-500"
              variants={navigationItemVariants}
              href={link.href}
            >
              {link.name}
            </motion.a>

            {link.sublinks?.map((sublink, subIndex) => (
              <motion.a
                variants={navigationItemVariants}
                className="text-[#939393] hover:scale-105 hover:text-primary hover:opacity-100  transition-[scale,color] duration-500"
                key={subIndex}
                href={sublink.href}
              >
                {sublink.name}
              </motion.a>
            ))}
          </Fragment>
        ))}
      </motion.ul>

      <motion.button
        initial="hidden"
        whileHover="hover"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {
            y: 20,
            opacity: 0,
            transition: { type: "spring" as const, bounce: 0.5, duration: 1 },
          },
          show: {
            y: 0,
            opacity: 1,
            transition: {
              type: "spring" as const,
              bounce: 0.5,
              duration: 0.4,
              delay: 0.9,
            },
          },
        }}
        onClick={scrollToTop}
        aria-label="Scroll To Top"
        className="group flex gap-4 text-left w-fit h-fit items-center font-bold cursor-pointer overflow-hidden"
      >
        Scroll To Top
        <motion.div
          aria-hidden
          className="bg-primary text-background aspect-square p-2"
        >
          <motion.div
            variants={{
              hover: { y: [0, "-150%", "-150%", "150%", "150%", 0] },
            }}
            transition={{
              duration: 0.8,
              ease: [0.8, -0.4, 0.5, 1],
              times: [0, 0.5, 0.5, 0.5, 0.5, 1],
              type: "keyframes",
            }}
          >
            <HugeiconsIcon size={24} icon={ArrowUp02Icon} />
          </motion.div>
        </motion.div>
      </motion.button>
    </div>
  );
}
