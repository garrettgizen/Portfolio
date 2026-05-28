import React from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { Project } from "@/lib/data";
import PortfolioItem from "@/components/collection/PortfolioItem";

interface ProjectRelatedProps {
  projects: Project[];
}

export default function ProjectRelated({ projects }: ProjectRelatedProps) {
  return (
    <section
      className="flex border-b border-border"
      aria-label="Related Projects"
    >
      <div className="container grid-layout px-0!">
        <div className="flex flex-wrap gap-x-4 items-center justify-between pt-15 px-4 tablet:px-8 pb-11">
          <h2 className="font-heading text-4xl font-extrabold">
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
          {projects.slice(0, 3).map((project, index) => (
            <PortfolioItem key={project.slug} index={index} data={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
