"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { allProjects } from "@/lib/data";
import PortfolioItem from "@/components/collection/PortfolioItem";
import { ProjectCategories } from "@/lib/data";
import Seperator from "@/components/Seperator";

function FilteredPortfolio() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter") ?? "All";

  const filterValue =
    filter === "All"
      ? "All"
      : (Object.values(ProjectCategories).find(
          (v) =>
            v
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "") === filter,
        ) ?? "All");

  const filteredProjects =
    filterValue === "All"
      ? allProjects
      : allProjects.filter((item) => item.type === filterValue);

  const setFilter = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const slug = value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    if (slug === "all") {
      params.delete("filter");
    } else {
      params.set("filter", slug);
    }
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <section
      aria-label="Portfolio Projects"
      className="flex border-b border-border"
    >
      <div className="container grid-layout px-0!">
        <div className="flex flex-col flex-wrap gap-x-4 pt-15 px-4 tablet:px-8 pb-11">
          <h2 className="font-heading text-5xl font-extrabold">Portfolio</h2>
          <p className="opacity-70 text-lg font-normal mb-10">
            Crafting considered design for brands, products, and the spaces in
            between.
          </p>
          <div
            className="flex flex-wrap gap-1 *:transition-colors *:duration-300 *:text-sm *:py-2 *:px-3 *:border-border *:border *:cursor-pointer *:w-fit *:has-checked:bg-foreground *:hover:text-background *:has-checked:text-background *:has-checked:border-foreground"
            aria-label="Project Filters"
          >
            <label
              className="relative filter-button"
              htmlFor="project-filters_all"
            >
              <input
                onChange={() => setFilter("All")}
                className="hidden"
                type="radio"
                id="project-filters_all"
                name="project-filters"
                value="All"
                checked={filter === "All"}
                readOnly
              />
              All
            </label>
            {Object.entries(ProjectCategories).map(([key, value]) => (
              <label
                className="relative filter-button"
                key={key}
                htmlFor={`project-filters_${key.toLowerCase()}`}
              >
                <input
                  onChange={() => setFilter(value)}
                  className="hidden"
                  type="radio"
                  id={`project-filters_${key.toLowerCase()}`}
                  name="project-filters"
                  value={value}
                  checked={
                    filter ===
                    value
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")
                      .replace(/(^-|-$)/g, "")
                  }
                  readOnly
                />
                {value}
              </label>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-1 px-2 sm:grid-cols-2 laptop:grid-cols-3! tablet:px-0">
          {filteredProjects.map((item, index) => (
            <motion.div key={item.slug} custom={index}>
              <PortfolioItem data={item} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <Suspense>
      <FilteredPortfolio />
      <Seperator noGrid />
    </Suspense>
  );
}
