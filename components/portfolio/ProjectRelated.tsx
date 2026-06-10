import React from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import PortfolioItem from "@/components/collection/PortfolioItem";
import { PortfolioProjectData } from "@/lib/types";
import { getRelatedProjects } from "@/lib/fetches";
import Seperator from "../Seperator";

interface ProjectRelatedProps {
  project: PortfolioProjectData;
}

export default async function ProjectRelated({ project }: ProjectRelatedProps) {
  const relatedProjects = await getRelatedProjects(
    project.slug,
    project.category,
  );

  if (!relatedProjects || relatedProjects.length === 0) {
    return <Seperator noGrid />;
  }

  return (
    <>
      <Seperator />
      <section
        className="flex border-b border-border"
        aria-label="Related Projects"
      >
        <div className="container grid-layout px-0!">
          <div className="flex flex-wrap gap-x-4 items-center justify-between pt-15 px-4 tablet:px-8 pb-11">
            <h2 className="font-heading text-3xl font-extrabold">
              Related Projects
            </h2>

            <Link
              className="flex  gap-1 items-end cursor-pointer text-primary font-bold hover:text-accent transition-colors"
              href="/"
            >
              View All Projects
              <HugeiconsIcon
                aria-hidden
                size={22}
                icon={ArrowRight01Icon}
              ></HugeiconsIcon>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-1 px-2 tablet:grid-cols-3 tablet:px-0 ">
            {relatedProjects.map(
              (project: PortfolioProjectData, index: number) => (
                <PortfolioItem
                  key={project.slug}
                  index={index}
                  data={project}
                />
              ),
            )}
          </div>
        </div>
      </section>
      <Seperator noGrid />
    </>
  );
}
