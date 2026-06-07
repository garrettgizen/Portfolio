import React from "react";

//* Component Imports
import Hero from "@/components/Hero";
import Seperator from "@/components/Seperator";
import Quicklinks from "@/components/Quicklinks";
import CollectionList from "@/components/collection/CollectionList";

export default async function Home() {
  return (
    <>
      <Hero />
      <Seperator />
      <Quicklinks heading="Project Categories" />
      <Seperator />
      <CollectionList
        heading="Selected Work"
        sublink={{ label: "See Portfolio", href: "/" }}
      />
      <Seperator noGrid />
    </>
  );
}
