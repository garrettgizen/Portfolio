"use client";

import React from "react";
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
      staggerChildren: 0.16,
      delayChildren: 0.16, // delay between each child
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
    <div className="flex flex-wrap flex-row justify-between items-end">
      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={NavigationVariants}
        className="text-lg flex flex-col"
      >
        {navigation.map((link, index) => (
          <>
            <motion.a
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
          </>
        ))}
      </motion.ul>

      <button
        onClick={scrollToTop}
        aria-label="Scroll To Top"
        className="flex gap-4 items-center font-bold cursor-pointer"
      >
        Scroll To Top{" "}
        <HugeiconsIcon
          aria-hidden
          size={42}
          className="bg-primary text-background aspect-square p-2"
          icon={ArrowUp02Icon}
        />
      </button>
    </div>
  );
}
