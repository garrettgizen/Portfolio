"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Project } from "@/lib/data";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  ArrowUpRight01Icon,
} from "@hugeicons/core-free-icons";

interface PortolioItemProps {
  data: Project;
  index: number;
}

export default function PortfolioItem({ data, index }: PortolioItemProps) {
  return (
    <motion.article
      initial={{ opacity: 0, translateY: -20 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        type: "spring" as const,
        bounce: 0.4,
        delay: (index % 3) * 0.1,
      }}
      aria-labelledby={`${data.name}-title`}
      className={`flex flex-col group   overflow-hidden cursor-pointer`}
    >
      <Link className="flex flex-col h-full" href={data.href}>
        <div
          style={{ backgroundImage: `url(${data.thumbnail})` }}
          className="relative flex items-end  w-full h-full p-6 bg-cover bg-center  aspect-square before:pointer-events-none  before:absolute before:top-0 before:left-0 before:w-full before:h-full  before:bg-linear-to-t before:opacity-0 before:from-foreground/90 before:from-5% before:to-60% before:to-transparent before:transition-all before:duration-350 tablet:group-hover:before:opacity-100"
        >
          <div
            aria-hidden
            className={`hidden tablet:flex p-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 absolute right-0 top-0 m-4 bg-background  pointer-events-none transition-all duration-500`}
          >
            <HugeiconsIcon size={28} icon={ArrowUpRight01Icon}></HugeiconsIcon>
          </div>
          <div className="opacity-0 z-1 text-background translate-y-full tablet:group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ">
            <h3
              className="font-heading font-extrabold text-xl leading-none"
              id={`${data.name}-title`}
            >
              {data.name}
            </h3>
            <h4 className=" opacity-80">{data.type}</h4>
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-x-2 justify-between mt-2 sm:hidden pb-8 transition-color duration-400 group-hover:text-primary">
          <h3
            className="font-heading font-extrabold text-lg leading-none"
            id={`${data.name}-title`}
          >
            {data.name}
          </h3>
          <h4 className=" opacity-80">{data.type}</h4>
        </div>
      </Link>
    </motion.article>
  );
}
