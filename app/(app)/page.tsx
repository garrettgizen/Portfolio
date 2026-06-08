import React from "react";

//* Component Imports
import Hero from "@/components/Hero";
import Seperator from "@/components/Seperator";
import Quicklinks from "@/components/Quicklinks";
import CollectionList from "@/components/collection/CollectionList";
import { ProjectCategories } from "../../lib/data";
import { getPayload } from "payload";
import configPromise from "@payload-config";

//* Data Imports
import { selectedWork } from "../../lib/data";

export default async function Home() {
  const payload = await getPayload({ config: configPromise });
  console.log(payload);
  const data = await payload.find({
    collection: "categories",
    overrideAccess: false,
    select: {
      title: true,
    },
  });

  console.log(data.docs);

  return (
    <>
      <Hero />
      <Seperator />
      <Quicklinks heading="Project Categories" />
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
