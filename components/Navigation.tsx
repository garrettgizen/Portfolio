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
      staggerChildren: 0.2, // delay between each child
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      bounce: 0.5,
      duration: 0.6,
    },
  },
};

export default function Navigation() {
  return (
    <header className="w-full border-b border-border">
      <div className="container border-x border-border py-6 px-12!">
        <div className="flex justify-between gap-4 items-center">
          <Link href="/">
            <Logo />
          </Link>
          <nav>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="flex gap-12"
            >
              {navigation.map((item) => (
                <motion.li
                  variants={itemVariants}
                  className="font-medium transition-colors hover:text-primary"
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
