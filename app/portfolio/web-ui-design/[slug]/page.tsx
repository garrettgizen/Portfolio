import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { selectedWork } from "@/lib/data";
import Seperator from "@/components/Seperator";
import {
  ProjectSkills,
  ProjectCategories,
  ProjectCategoriesLinks,
} from "@/lib/data";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft02Icon } from "@hugeicons/core-free-icons";

interface PostParams {
  params: Promise<{ slug: string }>;
}

// Add this ↓
export async function generateStaticParams() {
  return selectedWork.map((item) => ({
    slug: item.slug,
  }));
}

export default async function WebUIDesignPost({ params }: PostParams) {
  const { slug } = await params;
  const data = selectedWork.find((item) => item.slug === slug);

  if (!data) {
    notFound();
    return null; // unreachable, but satisfies TypeScript
  }

  return (
    <section>
      <article aria-label="Post Heading" className="border-border border-b">
        <div className="container grid-layout">
          <div className="flex flex-col gap-4 pt-23 pb-11">
            <Link
              aria-label={`Back To ${data.type}`}
              className="flex flex-row items-center gap-1 text-primary cursor-pointer w-fit transition-colors duration-300 hover:text-accent"
              href={
                ProjectCategoriesLinks[
                  Object.keys(ProjectCategories).find(
                    (key) =>
                      ProjectCategories[
                        key as keyof typeof ProjectCategories
                      ] === data.type,
                  ) as keyof typeof ProjectCategoriesLinks
                ]
              }
            >
              <HugeiconsIcon aria-hidden size={20} icon={ArrowLeft02Icon} />
              Back
            </Link>
            <h1 className="text-5xl font-heading font-black">{data.name}</h1>
            {data.details && (
              <ul className="flex gap-11 mt-3">
                {Object.entries(data.details).map(([key, value]) => (
                  <li className="flex flex-col" key={key}>
                    <h6 className="capitalize opacity-60">{key}</h6>
                    <p> {Array.isArray(value) ? value.join(", ") : value}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </article>
      <Seperator height={48} />
      {data.content && (
        <div aria-label="Post Details" className="border-border border-b">
          <div className="container px-0! grid-layout">
            <article className="container border-border border-b py-16">
              <h2 className="font-bold text-xl w-6/10">{data.description}</h2>
            </article>
            {data.heroMedia && (
              <Image
                className="relative!"
                fill
                alt={`${data.name} Banner`}
                src={data.heroMedia}
              ></Image>
            )}
            {Object.entries(data.content).map(([key, value]) => (
              <article aria-labelledby={`#${key}--subheading-${data.slug}`}>
                <div className="container" key={key}>
                  <div className="grid grid-cols-[0.5fr_1fr] py-16">
                    <h5
                      id={`${key}--subheading-${data.slug}`}
                      className="capitalize opacity-60 text-sm"
                    >
                      The {key}
                    </h5>
                    <p>{value.text}</p>
                  </div>
                </div>
                {Array.isArray(value.media) && (
                  <div className="flex gap-2 flex-col">
                    {value.media.map((media) =>
                      media.type === "image" ? (
                        <Image
                          className="relative!"
                          fill
                          alt={`${media.alt} Banner`}
                          src={media.src}
                        ></Image>
                      ) : (
                        "Video"
                      ),
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      )}
      <Seperator noGrid />
    </section>
  );
}
