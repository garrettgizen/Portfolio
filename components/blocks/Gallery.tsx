"use client";

import { GalleryFields } from "@/lib/types";
import React from "react";
import { SerializedBlockNode } from "@payloadcms/richtext-lexical";
import { motion } from "motion/react";
import Image from "next/image";

interface GalleryProps {
  data: SerializedBlockNode<GalleryFields>;
}

export const Gallery = ({ data }: GalleryProps) => {
  const motionAnimation = {
    initial: { opacity: 0, translateY: 20 },
    whileInView: { opacity: 1, translateY: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: {
      type: "spring" as const,
      bounce: 0.4,
    },
  };

  return (
    <div aria-label="Gallery" className="flex gap-2 flex-col">
      {data.fields.gallery.map((media) => (
        <motion.figure
          className="relative"
          key={media.alt}
          {...motionAnimation}
        >
          <Image
            className="relative!"
            fill
            alt={`${media.alt} Banner`}
            src={media.url}
          ></Image>
        </motion.figure>
      ))}
    </div>
  );
};
