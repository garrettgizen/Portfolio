"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ProjectCategories } from "@/lib/data";
import {
  ArrowRight01Icon,
  ArrowUpRight01Icon,
} from "@hugeicons/core-free-icons";

interface quicklinksProp {
  heading?: string;
}

export default function Quicklinks({ heading }: quicklinksProp) {
  const [selected, setSelected] = useState<number | null>(0);
  const [pHeight, setpHeight] = useState(0);
  const pRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (pRef.current) {
      setpHeight(pRef.current.scrollHeight);
    }
  }, [selected]);

  return (
    <section
      aria-label={heading ? `${heading}` : "Quicklinks"}
      className="flex border-b border-border"
    >
      <div className="container grid-layout px-0!">
        <div className="hidden laptop:flex gap-1 h-150">
          {Object.values(ProjectCategories).map((link, i) => (
            <Link
              href={link.url}
              data-selected={selected === i}
              onMouseEnter={() => setSelected(i)}
              style={{ backgroundImage: `url(${link.thumbnail})` }}
              className={`group ${
                selected === i ? "flex-3" : "flex-1"
              } relative p-6 overflow-hidden flex  items-end  h-full bg-cover bg-center transition-all duration-700 cursor-pointer  before:absolute before:top-0 before:left-0 before:w-full before:h-full  before:bg-linear-to-t ${selected === i ? "before:from-foreground/80" : "before:from-foreground/70"}  before:from-5% before:to-60% before:to-transparent before:transition-all before:duration-700`}
              key={i}
            >
              <div
                aria-hidden
                className={`p-3 opacity-0 group-data-[selected=true]:opacity-100 absolute right-0 top-0 m-4  bg-background  pointer-events-none transition-all duration-500`}
              >
                {link.icon && (
                  <HugeiconsIcon size={28} icon={link.icon}></HugeiconsIcon>
                )}
              </div>

              <div className="relative flex flex-col text-background text-pretty max-w-2xs">
                <h3 className="text-xl font-heading font-bold leading-[100%]">
                  {link.title}
                </h3>
                <p
                  style={{ maxHeight: selected === i ? pHeight : 0 }}
                  ref={selected === i ? pRef : null}
                  className="translate-y-full h-full opacity-0 group-data-[selected=true]:translate-y-0 group-data-[selected=true]:opacity-80 mt-2 transition-all duration-700 overflow-hidden"
                >
                  {link.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <ul className="flex flex-col divide-y divide-border laptop:hidden">
          {Object.values(ProjectCategories).map((link, i) => (
            <Link
              className="group relative flex flex-row items-center justify-between gap-4 font-extrabold font-heading text-xl px-4 py-6 leading-none transition-colors duration-300 before:absolute before:-z-1 before:top-0 before:left-0 before:pointer-events-none before:bg-primary before:w-0 before:h-full before:transition-all before:duration-700 hover:text-background hover:before:w-full"
              key={i}
              href={link.title}
            >
              <div className="flex gap-4">
                {link.icon && (
                  <HugeiconsIcon
                    className="opacity-60"
                    size={22}
                    icon={link.icon}
                  ></HugeiconsIcon>
                )}
                <h4>{link.title}</h4>
              </div>

              <HugeiconsIcon
                aria-hidden
                size={32}
                icon={ArrowRight01Icon}
              ></HugeiconsIcon>
            </Link>
          ))}
        </ul>
      </div>
    </section>
  );
}
