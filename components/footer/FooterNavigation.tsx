"use client";

import React, { Fragment } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUp02Icon } from "@hugeicons/core-free-icons";
import { NavItem } from "@/lib/types";

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

export default function FooterNavigation({
  navigation,
}: {
  navigation: NavItem[];
}) {
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
            <motion.div
              key={index}
              className="hover:scale-105 hover:text-primary transition-[scale,color]  duration-500"
              variants={navigationItemVariants}
            >
              <Link
                onNavigate={(e) => {
                  scrollToTop();
                }}
                href={link.href}
              >
                {link.name}
              </Link>
            </motion.div>

            {link.sublinks?.map((sublink, subIndex) => (
              <motion.div
                variants={navigationItemVariants}
                className="text-[#939393] hover:scale-105 hover:text-primary hover:opacity-100  transition-[scale,color] duration-500"
                key={subIndex}
              >
                <Link
                  onNavigate={(e) => {
                    scrollToTop();
                  }}
                  scroll={false}
                  href={sublink.href}
                >
                  {sublink.name}
                </Link>
              </motion.div>
            ))}
          </Fragment>
        ))}
      </motion.ul>

      <button
        onClick={scrollToTop}
        aria-label="Scroll To Top"
        className="group flex gap-4 text-left w-fit h-fit items-center font-bold cursor-pointer overflow-hidden scroll-top-button"
      >
        Scroll To Top
        <div
          aria-hidden
          className="bg-primary text-background aspect-square p-2"
        >
          <div className="arrow-icon">
            <HugeiconsIcon size={24} icon={ArrowUp02Icon} />
          </div>
        </div>
      </button>
    </div>
  );
}
