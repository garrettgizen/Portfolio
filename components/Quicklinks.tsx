"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { quicklinks } from "../lib/data";
import { HugeiconsIcon } from "@hugeicons/react";

export default function Quicklinks() {
  const [selected, setSelected] = useState<number | null>(0);
  const [pHeight, setpHeight] = useState(0);
  const pRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (pRef.current) {
      setpHeight(pRef.current.scrollHeight);
    }
  }, [selected]);

  return (
    <section className="flex border-b border-border">
      <div className="container grid-layout bg-border/20 px-0!">
        <div className="flex gap-1 h-114 p-4">
          {quicklinks.map((link, i) => (
            <Link
              href={link.href}
              data-selected={selected === i}
              onMouseEnter={() => setSelected(i)}
              style={{ backgroundImage: `url(${link.thumbnail})` }}
              className={`group ${
                selected === i ? "flex-3" : "flex-1"
              } relative p-6 rounded-2xl rounded-br-none! overflow-hidden flex  items-end  h-full bg-cover bg-center transition-all duration-700 cursor-pointer  before:absolute before:top-0 before:left-0 before:w-full before:h-full  before:bg-linear-to-t ${selected === i ? "before:from-foreground/80" : "before:from-foreground/70"}  before:from-5% before:to-60% before:to-transparent before:transition-all before:duration-700`}
              key={i}
            >
              <div
                className={`p-3 opacity-0 group-data-[selected=true]:opacity-100 absolute right-0 top-0 m-4 rounded-md bg-background  pointer-events-none transition-all duration-500`}
              >
                <HugeiconsIcon size={28} icon={link.icon}></HugeiconsIcon>
              </div>

              <div className="relative flex flex-col text-background text-pretty max-w-2xs">
                <h3 className="text-xl font-heading font-bold leading-[100%]">
                  {link.name}
                </h3>
                <p
                  style={{ maxHeight: selected === i ? pHeight : 0 }}
                  ref={selected === i ? pRef : null}
                  className="translate-y-full h-full opacity-0 group-data-[selected=true]:translate-y-0 group-data-[selected=true]:opacity-80 mt-2 transition-all duration-700 overflow-hidden"
                >
                  {link.paragraph}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
