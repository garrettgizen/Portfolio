import React from "react";
import { getCategories, getPortfolioProjects } from "@/lib/fetches";

//* Component Imports
import Hero from "@/components/Hero";
import Seperator from "@/components/Seperator";
import Quicklinks from "@/components/Quicklinks";
import CollectionList from "@/components/collection/CollectionList";

export default async function Home() {
  const allPortfolioProject = await getPortfolioProjects();
  const categories = await getCategories();

  return (
    <>
      <Hero />
      <Seperator />
      <Quicklinks data={categories} heading="Project Categories" />
      <Seperator />
      <CollectionList
        heading="Selected Work"
        sublink={{ label: "See Portfolio", href: "/" }}
        data={allPortfolioProject}
      />
      <Seperator noGrid />
    </>
  );
}
