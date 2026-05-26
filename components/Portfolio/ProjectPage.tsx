import React from "react";
import Seperator from "@/components/Seperator";
import ProjectHeading from "@/components/Portfolio/ProjectHeading";
import ProjectHero from "@/components/Portfolio/ProjectHero";
import ProjectDiscovery from "@/components/Portfolio/ProjectDiscovery";
import { Project } from "@/lib/data";

interface ProjectPageProps {
  data: Project;
}

export default function ProjectPage({ data }: ProjectPageProps) {
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

      <Seperator noGrid />
    </>
  );
}
