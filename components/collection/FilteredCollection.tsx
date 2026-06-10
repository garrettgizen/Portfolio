"use client";
import { Category } from "@/payload-types";
import { PortfolioProjectData } from "@/lib/types";
import { useRouter, useSearchParams } from "next/navigation";
import PortfolioItem from "./PortfolioItem";

interface FilteredCollectionProps {
  projects: PortfolioProjectData[];
  categories: Category[];
}

export default function FilteredCollection({
  projects,
  categories,
}: FilteredCollectionProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedFilter = searchParams.get("filter") ?? "";

  const filteredProjects =
    selectedFilter === ""
      ? projects
      : projects.filter((p) => p.category.slug === selectedFilter);

  const setSearchParams = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "") {
      params.delete("filter");
    } else {
      params.set("filter", value);
    }
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <section
      aria-label="Portfolio Projects"
      className="flex border-b border-border"
    >
      <div className="container grid-layout px-0!">
        <div className="flex flex-col flex-wrap gap-x-4 pt-32 px-4 tablet:px-8 pb-16">
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
                onChange={() => setSearchParams("")}
                className="hidden"
                type="radio"
                id="project-filters_all"
                name="project-filters"
                value="All"
                checked={selectedFilter === ""}
                readOnly
              />
              All
            </label>
            {categories.map((item) => (
              <label
                className="relative filter-button"
                key={item.slug}
                htmlFor={`project-filters_${item.slug}`}
              >
                <input
                  onChange={() => setSearchParams(item.slug)}
                  className="hidden"
                  type="radio"
                  id={`project-filters_${item.slug}`}
                  name="project-filters"
                  value={item.title}
                  checked={selectedFilter === item.slug}
                />
                {item.title}
              </label>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-1 px-2 sm:grid-cols-2 laptop:grid-cols-3! tablet:px-0">
          {filteredProjects.map((item, index) => (
            <div key={item.slug}>
              <PortfolioItem data={item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
