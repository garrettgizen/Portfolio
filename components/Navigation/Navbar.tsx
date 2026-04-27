"use client";

import React from "react";
import Link from "next/link";
import { navigation } from "@/lib/data";
import Logo from "./Logo";
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";

export default function Navbar() {
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
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        bounce: 0.5,
        duration: 0.4,
      },
    },
  };

  return (
    <div className=" w-full border-b border-border hidden tablet:flex">
      <div className="container grid-layout ">
        <div className="flex h-full justify-between gap-4 items-center px-4 mw:px-10">
          <a href="/">
            <Logo />
          </a>
          <nav className="h-full">
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="flex gap-12"
            >
              {navigation.map((item, index) => (
                <motion.li
                  variants={itemVariants}
                  className={`text-base font-medium ${item.type === "button" ? `text-primary hover:text-accent` : `hover:text-primary`} transition-colors `}
                  key={item.name}
                >
                  {item.sublinks ? (
                    <div className="group anchor/link-dropdown relative flex flex-col">
                      <Link
                        href={item.href}
                        className="peer flex gap-0.5 items-end cursor-pointer py-6"
                        type="button"
                      >
                        {item.name}
                        <HugeiconsIcon
                          className="rotate-0 transition-transform duration-300 group-hover:rotate-180"
                          size={22}
                          icon={ArrowDown01Icon}
                        />
                      </Link>

                      <div className="absolute top-full invisible grid grid-rows-[0fr] group-hover:visible group-hover:grid-rows-[1fr] transition-all duration-300 ease-out anchored/link-dropdown anchored-bottom-span-right bg-background border border-border min-w-max w-45 z-50">
                        <div className="overflow-hidden min-h-0">
                          <ul className="p-4 flex flex-col gap-2 text-foreground!">
                            {item.sublinks.map((sub) => (
                              <li
                                className="cursor-pointer hover:text-primary!"
                                key={sub.name}
                              >
                                <Link href={sub.href}> {sub.name}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link className="flex py-6" href={item.href}>
                      {item.name}
                    </Link>
                  )}
                </motion.li>
              ))}
            </motion.ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
