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
import PortfolioItem from "./PortfolioItem";

type subLink = {
  label: string;
  href: string;
};

interface CollectionListProps {
  heading?: string;
  sublink?: subLink;
  data: Project[];
  filters?: string[];
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
          <div className="flex flex-wrap gap-x-4 items-center justify-between pt-15 px-4 tablet:px-8 pb-11">
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
        <div className="grid grid-cols-1 gap-1 px-2 sm:grid-cols-2 laptop:grid-cols-3! tablet:px-0 ">
          {data.map((item, index) => (
            <PortfolioItem data={item} key={item.slug} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
