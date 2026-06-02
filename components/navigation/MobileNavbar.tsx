import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { motion } from "motion/react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  Cancel01Icon,
  Menu01Icon,
} from "@hugeicons/core-free-icons";
import { navigation } from "@/lib/data";
import { sub } from "motion/react-client";
import { useShowSplash } from ".././SplashScreen";
import { usePathname } from "next/navigation";

export default function MobileNavbar() {
  const [expandMenu, setexpandMenu] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState<Record<number, boolean>>({});
  const [mainMenuOpen, setmainMenuOpen] = useState(true);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3, // delay between each child
      },
    },
  };

  const itemVariants = {
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
  function toggleMenu() {
    document.body.classList.toggle("overflow-hidden");
    setexpandMenu(!expandMenu);
    setmainMenuOpen(true); // reset to main menu when toggling
    setOpenSubMenus({}); // close any open submenus
  }

  function closeMenu() {
    document.body.classList.remove("overflow-hidden");
    setexpandMenu(false);
    setmainMenuOpen(true); // reset to main menu when toggling
    setOpenSubMenus({}); // close any open submenus
  }

  function openSubMenu(index: number) {
    setOpenSubMenus((prev) => ({ ...prev, [index]: true }));
    setmainMenuOpen(false);
  }

  function closeSubMenu(index: number) {
    setOpenSubMenus((prev) => ({ ...prev, [index]: false }));
    setmainMenuOpen(true);
  }

  //We need to reset the menu when we change the pathname, so we don't have it open on rerender.
  const pathname = usePathname();
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <div
      className={`flex border-b border-border transition-all ease-[cubic-bezier(.51,-0.14,.31,1)] duration-500 ${expandMenu ? "h-dvh bg-primary text-background border-primary" : "h-16"} tablet:hidden`}
    >
      <div className="flex w-full overflow-hidden">
        <div className="container">
          <div className="flex justify-between gap-4 items-center h-auto *:py-1 overflow-hidden">
            <div>
              <Link href="/">
                <Logo expanded={expandMenu} className={"size-14"} />
              </Link>
            </div>
            <button
              aria-controls="mobile-navigation-main"
              className={`group flex items-center justify-center aspect-square cursor-pointer opacity-100 transition-all duration-300 ${expandMenu ? "hover:text-background hover:opacity-75" : "hover:text-primary"}`}
              aria-label={
                expandMenu ? "Close Navigation Menu" : "Open Navigation Menu"
              }
              aria-expanded={expandMenu}
              onClick={toggleMenu}
            >
              <HugeiconsIcon
                aria-hidden
                className="size-8 rotate-0 transition-transform group-aria-expanded:rotate-180"
                icon={expandMenu ? Cancel01Icon : Menu01Icon}
              />
            </button>
          </div>
          <motion.ul
            role="navigation"
            aria-hidden={!expandMenu}
            variants={containerVariants}
            initial="hidden"
            data-menu-open={mainMenuOpen}
            animate={expandMenu ? "show" : "hidden"}
            id="mobile-navigation-main"
            className={`flex flex-col justify-center h-full -mt-16  opacity-100  transition-all duration-750 data-[menu-open=false]:opacity-0 data-[menu-open=false]:-translate-x-[calc(100%+2rem)] ${expandMenu ? "pointer-events-auto" : "pointer-events-none"}  `}
          >
            {navigation.map((item, index) => {
              const isActive = pathname.includes(item.href);
              return (
                <motion.li
                  className="text-xl border-b border-background/30 py-4 cursor-pointer"
                  variants={itemVariants}
                  key={index}
                >
                  {item.sublinks ? (
                    <button
                      type="button"
                      onClick={() => openSubMenu(index)}
                      data-menu={`${item.name.toLowerCase()}-menu-${index}`}
                      aria-label={`${item.name} Submenu`}
                      aria-controls={`${item.name.toLowerCase()}-menu-${index}`}
                      className="group flex w-full items-center cursor-pointer justify-between opacity-100 duration-300 transition-opacity hover:opacity-75"
                    >
                      {item.name}

                      <HugeiconsIcon
                        aria-hidden
                        className="translate-0 transition-transform duration-300 group-hover:-translate-y-1 "
                        size={32}
                        icon={ArrowRight01Icon}
                      ></HugeiconsIcon>
                    </button>
                  ) : (
                    <Link
                      className={`group flex w-full items-center justify-between opacity-100 duration-300 transition-opacity hover:opacity-75 ${isActive && "opacity-60!"}`}
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.li>
              );
            })}
          </motion.ul>
          {navigation.map(
            (item, index) =>
              item.sublinks && (
                <ul
                  key={item.name}
                  aria-hidden={!openSubMenus[index]}
                  data-menu-open={openSubMenus[index]}
                  className={`absolute bottom-0 left-0 flex flex-col justify-center h-[calc(100dvh-4rem)] -mt-16 w-full translate-x-full opacity-0 transition-all duration-750 data-[menu-open=true]:opacity-100 data-[menu-open=true]:translate-x-0  ${expandMenu ? "pointer-events-auto" : "pointer-events-none h-0"}`}
                  id={`${item.name.toLowerCase()}-menu-${index}`}
                >
                  <div className="container">
                    <button
                      className="flex -ml-2 gap-1 items-center text-lg text-background/70 py-2 cursor-pointer"
                      aria-label="Back To Navigation Menu"
                      onClick={() => {
                        closeSubMenu(index);
                      }}
                      type="button"
                    >
                      <HugeiconsIcon
                        aria-hidden
                        size={20}
                        icon={ArrowLeft01Icon}
                      ></HugeiconsIcon>
                      Back
                    </button>
                    {item.sublinks.map((sub, index) => {
                      const isActive = pathname.includes(sub.href);

                      return (
                        <li
                          className="text-xl border-b border-background/30 py-4 cursor-pointer"
                          key={index}
                        >
                          <Link
                            className={`group flex w-full items-center justify-between opacity-100 duration-300 transition-opacity hover:opacity-75 ${isActive && "opacity-60!"}`}
                            href={sub.href}
                            key={sub.name}
                          >
                            {sub.name}
                          </Link>
                        </li>
                      );
                    })}
                  </div>
                </ul>
              ),
          )}
        </div>
      </div>
    </div>
  );
}
