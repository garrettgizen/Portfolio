import React from "react";
import { Category } from "@/payload-types";

interface CollectionHeadingProps {
  data: Category;
}

export default function CollectionHeading({ data }: CollectionHeadingProps) {
  return (
    <div className="flex flex-col flex-wrap gap-x-4 pt-24 tablet:pt-32 px-4 tablet:px-8 pb-16">
      <h2 className="font-heading text-5xl font-extrabold mb-2">
        {data.title}
      </h2>

      <p className="opacity-70 text-lg font-normal">{data.description}</p>
    </div>
  );
}
