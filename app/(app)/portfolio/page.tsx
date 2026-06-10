import Seperator from "@/components/Seperator";
import FilteredCollection from "@/components/collection/FilteredCollection";
import { getCategories, getPortfolioProjects } from "@/lib/fetches";

export default async function Page() {
  const [categories, allPortfolioProject] = await Promise.all([
    getCategories(),
    getPortfolioProjects(),
  ]);

  return (
    <>
      <FilteredCollection
        categories={categories}
        projects={allPortfolioProject}
      />
      <Seperator noGrid />
    </>
  );
}
