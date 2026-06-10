"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { useShowSplash } from ".././SplashScreen";
import { NavItem } from "@/lib/types";

export default function Navbar({ navigation }: { navigation: NavItem[] }) {
  const [dropdownIndex, setdropdownIndex] = useState<number | null>(null);
  const showSplash = useShowSplash();

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
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

  const closeDropdown = () => setdropdownIndex(null);

  return (
    <div className="w-full border-b border-border hidden tablet:flex">
      <div className="container grid-layout">
        <div className="flex h-full justify-between gap-4 items-center">
          <Link href="/">
            <Logo />
          </Link>
          <nav className="h-full">
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate={!showSplash ? "show" : "hidden"}
              className="flex gap-12"
            >
              {navigation.map((item, index) => (
                <motion.li
                  variants={itemVariants}
                  className={`text-base font-medium ${item.type === "button" ? `text-primary hover:text-accent` : `hover:text-primary`} transition-colors`}
                  key={item.name}
                >
                  {item.sublinks ? (
                    <div
                      onMouseEnter={() => setdropdownIndex(index)}
                      onMouseLeave={closeDropdown}
                      className="group anchor/link-dropdown relative flex flex-col"
                    >
                      <Link
                        aria-expanded={dropdownIndex === index}
                        aria-controls={`menu-dropdown-${index}`}
                        data-menu-id={`menu-dropdown-${index}`}
                        href={item.href}
                        className="peer flex gap-0.5 items-end cursor-pointer py-6"
                        type="button"
                      >
                        {item.name}
                        <HugeiconsIcon
                          className="rotate-0 transition-transform duration-300 group-hover:rotate-180"
                          size={22}
                          icon={ArrowDown01Icon}
                          aria-hidden
                        />
                      </Link>

                      <div
                        aria-hidden={dropdownIndex !== index}
                        role="region"
                        aria-label={`${item.name} Dropdown Menu`}
                        id={`menu-dropdown-${index}`}
                        className="absolute top-full grid grid-rows-[0fr] group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all opacity-0 duration-300 ease-out anchored/link-dropdown anchored-bottom-span-right bg-background border border-border min-w-max w-45 z-50"
                      >
                        <ul className="overflow-hidden py-4 min-h-0 flex flex-col gap-2 text-foreground!">
                          {item.sublinks.map((sub) => (
                            <li
                              className="cursor-pointer px-4 hover:text-primary!"
                              key={sub.name}
                            >
                              <Link href={sub.href}>{sub.name}</Link>
                            </li>
                          ))}
                        </ul>
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
