import { allProjects } from "@/lib/data";
import CollectionList from "@/components/collection/CollectionList";
import React from "react";

export default function page() {
  return (
    <>
      <CollectionList heading="Portfolio" data={allProjects} />
    </>
  );
}
