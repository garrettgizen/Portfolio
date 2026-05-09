"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Project } from "@/lib/data";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  ArrowUpRight01Icon,
} from "@hugeicons/core-free-icons";

type subLink = {
  label: string;
  href: string;
};

interface CollectionListProps {
  heading?: string;
  sublink?: subLink;
  data: Project[];
}

export default function CollectionList({
  heading,
  sublink,
  data,
}: CollectionListProps) {
  return (
    <section
      aria-label={heading ? `${heading}` : "Collection List"}
      className="flex border-b border-border"
    >
      <div className="container grid-layout px-0!">
        {heading && (
          <div className="flex flex-wrap items-center justify-between pt-15 px-4 pb-11">
            <h2 className="font-heading text-4xl font-extrabold">{heading}</h2>
            {sublink && (
              <Link
                className="flex  gap-1 items-end cursor-pointer text-primary font-bold hover:text-accent transition-colors"
                href={sublink.href}
              >
                {sublink.label}
                <HugeiconsIcon
                  aria-hidden
                  size={22}
                  icon={ArrowRight01Icon}
                ></HugeiconsIcon>
              </Link>
            )}
          </div>
        )}
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-1">
          {data.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, translateY: -20 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                type: "spring" as const,
                bounce: 0.4,
                delay: (index % 3) * 0.1,
              }}
              aria-labelledby={`${item.name}-title`}
              style={{ backgroundImage: `url(${item.thumbnail})` }}
              className={`group relative flex overflow-hidden items-end p-6 aspect-square  bg-cover bg-center cursor-pointer before:pointer-events-none  before:absolute before:top-0 before:left-0 before:w-full before:h-full  before:bg-linear-to-t before:opacity-0 before:from-foreground/90 before:from-5% before:to-60% before:to-transparent before:transition-all before:duration-350 hover:before:opacity-100`}
            >
              <div
                aria-hidden
                className={`p-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 absolute right-0 top-0 m-4 rounded-md bg-background  pointer-events-none transition-all duration-500`}
              >
                <HugeiconsIcon
                  size={28}
                  icon={ArrowUpRight01Icon}
                ></HugeiconsIcon>
              </div>
              <div className="opacity-0 z-1 text-background translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ">
                <h3
                  className="font-heading font-extrabold text-xl leading-none"
                  id={`${item.name}-title`}
                >
                  {item.name}
                </h3>
                <h4 className=" opacity-80">{item.type}</h4>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
