import React from "react";
import Logo from "./Logo";
import { motion } from "motion/react";
import Link from "next/link";
import { navigation } from "@/lib/data";

export default function MobileNavbar() {
  return (
    <div className="container">
      <div className="flex justify-between gap-4 items-center py-2">
        <Link href="/">
          <Logo className={"size-12"} />
        </Link>
      </div>
    </div>
  );
}
