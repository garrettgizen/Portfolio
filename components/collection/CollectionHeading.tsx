import { Project, ProjectCategories } from "@/lib/data";
import React from "react";

interface CollectionHeadingProps {
  data: ProjectCategories;
}

export default function CollectionHeading({ data }: CollectionHeadingProps) {
  return (
    <div className="flex flex-col flex-wrap gap-x-4 pt-32 px-4 tablet:px-8 pb-16">
      <h2 className="font-heading text-5xl font-extrabold">{data.title}</h2>

      <p className="opacity-70 text-lg font-normal">{data.description}</p>
    </div>
  );
}
