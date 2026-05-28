import React from "react";
import Seperator from "@/components/Seperator";
import ProjectHeading from "@/components/portfolio/ProjectHeading";
import ProjectHero from "@/components/portfolio/ProjectHero";
import ProjectDiscovery from "@/components/portfolio/ProjectDiscovery";
import { Project, allProjects } from "@/lib/data";
import ProjectRelated from "./ProjectRelated";

interface ProjectPageProps {
  data: Project;
}

export default function ProjectPage({ data }: ProjectPageProps) {
  const allTypedProjects = allProjects.filter((p) => p.type === data.type);
  const currentProjectIndex = allTypedProjects.findIndex(
    (p) => p.slug === data.slug,
  );
  const typedProjects = allTypedProjects.filter((p) => p.name !== data.name);

  const prevProject =
    currentProjectIndex === 0
      ? allTypedProjects[allTypedProjects.length - 1]
      : allTypedProjects[currentProjectIndex - 1];

  const nextProject =
    currentProjectIndex === allTypedProjects.length
      ? allTypedProjects[allTypedProjects.length + 1]
      : allTypedProjects[currentProjectIndex + 1];

  return (
    <>
      <ProjectHeading data={data} />
      <Seperator height={48} />
      {data.content && (
        <div aria-label="Post Details" className="border-border border-b">
          <div className="container px-0! grid-layout">
            <ProjectHero data={data} />
            {Object.entries(data.content).map(([key, value]) => (
              <ProjectDiscovery
                key={key}
                sectionKey={key}
                value={value}
                data={data}
              />
            ))}
          </div>
        </div>
      )}
      <Seperator />
      <ProjectRelated projects={typedProjects} />
      <Seperator noGrid />
    </>
  );
}
