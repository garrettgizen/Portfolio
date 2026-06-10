import React from "react";
import Separator from "@/components/Seperator";
import ProjectHeading from "@/components/portfolio/ProjectHeading";
import ProjectHero from "@/components/portfolio/ProjectHero";
import {
  GalleryFields,
  PortfolioProjectData,
  SubHeadingFields,
} from "@/lib/types";
import { RichText } from "@payloadcms/richtext-lexical/react";
import {
  DefaultNodeTypes,
  SerializedBlockNode,
} from "@payloadcms/richtext-lexical";
import { JSXConvertersFunction } from "@payloadcms/richtext-lexical/react";
import { SubHeading } from "../blocks/SubHeading";
import { Gallery } from "../blocks/Gallery";
import ProjectRelated from "./ProjectRelated";

interface ProjectPageProps {
  data: PortfolioProjectData;
}

type NodeTypes =
  | DefaultNodeTypes
  | SerializedBlockNode<SubHeadingFields | GalleryFields>;

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({
  defaultConverters,
}) => ({
  ...defaultConverters,
  blocks: {
    subHeading: ({ node }) => (
      <SubHeading data={node}>{node.fields.paragraph}</SubHeading>
    ),
    gallery: ({ node }) => <Gallery data={node} />,
  },
});

export default function ProjectPage({ data }: ProjectPageProps) {
  return (
    <>
      <ProjectHeading data={data} />
      <Separator height={48} />
      {data.content && (
        <div aria-label="Post Details" className="border-border border-b">
          <div className="container px-0! grid-layout">
            <ProjectHero data={data} />
            <RichText data={data.content} converters={jsxConverters} />
          </div>
        </div>
      )}

      <ProjectRelated project={data} />
    </>
  );
}
