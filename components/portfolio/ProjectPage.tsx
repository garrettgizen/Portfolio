import React from "react";
import Seperator from "@/components/Seperator";
import ProjectHeading from "@/components/portfolio/ProjectHeading";
import ProjectHero from "@/components/portfolio/ProjectHero";
import ProjectDiscovery from "@/components/portfolio/ProjectDiscovery";

import { Project } from "@/lib/types";

import { allProjects } from "@/lib/data";
import ProjectRelated from "./ProjectRelated";

interface ProjectPageProps {
  data: Project;
}

export default function ProjectPage({ data }: ProjectPageProps) {
  return (
    <>
      <ProjectHeading data={data} />
      <Seperator height={48} />

      <div aria-label="Post Details" className="border-border border-b">
        <div className="container px-0! grid-layout">
          <ProjectHero data={data} />
          {/* {Object.entries(data.content).map(([key, value]) => (
              <ProjectDiscovery
                key={key}
                sectionKey={key}
                value={value}
                data={data}
              />
            ))} */}
        </div>
      </div>

      <Seperator />
      {/* <ProjectRelated projects={typedProjects} /> */}
      <Seperator noGrid />
    </>
  );
}
