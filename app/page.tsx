import React from "react";

//* Component Imports
import Hero from "@/components/Hero";
import Seperator from "@/components/Seperator";
import Quicklinks from "@/components/Quicklinks";
import CollectionList from "@/components/collection/CollectionList";

//* Data Imports
import { quicklinks, selectedWork } from "../lib/data";

export default function Home() {
  return (
    <>
      <Hero />
      <Seperator />
      <Quicklinks heading="Project Categories" links={quicklinks} />
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
