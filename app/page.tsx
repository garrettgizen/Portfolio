import React from "react";
import Hero from "@/components/Hero";
import Seperator from "@/components/Seperator";
import Quicklinks from "@/components/Quicklinks";

export default function Home() {
  return (
    <main>
      <Hero />
      <Seperator />
      <Quicklinks />
      <Seperator height={60} />
    </main>
  );
}
