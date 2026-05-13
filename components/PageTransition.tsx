"use client";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={isHome ? { opacity: 0, y: 16 } : false}
        animate={isHome ? { opacity: 1, y: 0 } : false}
        exit={isHome ? { opacity: 0, y: -16 } : undefined}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
