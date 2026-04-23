"use client";
import React from "react";
import Link from "next/link";
import { navigation } from "@/lib/data";
import Logo from "./Logo";
import { motion } from "motion/react";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2, // delay between each child
    },
  },
};

const itemVariants = {
  hidden: { y: 20 },
  show: {
    y: 0,
    transition: {
      type: "spring" as const,
      bounce: 0.5,
      duration: 0.4,
    },
  },
};

export default function Navigation() {
  return (
    <header className="flex w-full border-b border-border">
      <div className="container grid-layout ">
        <div className="flex justify-between gap-4 items-center py-6 px-4 mw:px-10">
          <Link href="/">
            <Logo />
          </Link>
          <nav>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="flex gap-12 overflow-hidden"
            >
              {navigation.map((item) => (
                <motion.li
                  variants={itemVariants}
                  className={`text-base font-medium ${item.name === "Contact Me" ? `text-primary hover:text-accent` : `hover:text-primary`} transition-colors `}
                  key={item.name}
                >
                  <Link href={item.href}>{item.name}</Link>
                </motion.li>
              ))}
            </motion.ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
