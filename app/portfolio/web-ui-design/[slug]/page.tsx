import React from "react";
import { notFound } from "next/navigation";
import { selectedWork } from "@/lib/data";

interface PostParams {
  params: Promise<{ slug: string }>;
}

export default async function WebUIDesignPost({ params }: PostParams) {
  const { slug } = await params;
  const data = selectedWork.find((item) => item.slug === slug);

  if (!data) {
    notFound();
    return null; // unreachable, but satisfies TypeScript
  }

  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  );
}
