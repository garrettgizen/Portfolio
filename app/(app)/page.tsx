import React from "react";
import { getCategories, getCollection } from "@/lib/fetches";

//* Component Imports
import Hero from "@/components/Hero";
import Seperator from "@/components/Seperator";
import Quicklinks from "@/components/Quicklinks";
import CollectionList from "@/components/collection/CollectionList";

export default async function Home() {
  const selectedWork = await getCollection("selected-work");
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
        data={selectedWork}
      />
      <Seperator noGrid />
    </>
  );
}
