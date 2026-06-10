import React from "react";
import { notFound } from "next/navigation";
import Seperator from "@/components/Seperator";
import PortfolioItem from "@/components/collection/PortfolioItem";
import CollectionHeading from "@/components/collection/CollectionHeading";
import { getCategories, getPortfolioProjects } from "@/lib/fetches";

interface PortfolioCategoryProps {
  params: Promise<{ category: string }>;
}

// Add this ↓
export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((item) => ({ category: item.slug }));
}

export default async function PortfolioCollectionPage({
  params,
}: PortfolioCategoryProps) {
  const { category } = await params;
  const [categories, allProjects] = await Promise.all([
    getCategories(),
    getPortfolioProjects(),
  ]);

  const data = categories.find((item) => item.slug === category);

  if (!data) notFound();

  const allCategoryProjects = allProjects.filter(
    (p) => p.category.title === data.title,
  );

  return (
    <>
      <section
        aria-label={`${data.title} Projects`}
        className="flex border-b border-border"
      >
        <div className="container grid-layout px-0!">
          <CollectionHeading data={data} />
          <div className="grid grid-cols-1 gap-1 px-2 sm:grid-cols-2 laptop:grid-cols-3! tablet:px-0">
            {allCategoryProjects.map((item, index) => (
              <div key={item.slug}>
                <PortfolioItem data={item} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Seperator noGrid />
    </>
  );
}
