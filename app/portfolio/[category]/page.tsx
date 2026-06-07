import React from "react";
import { notFound } from "next/navigation";
import Seperator from "@/components/Seperator";
import PortfolioItem from "@/components/collection/PortfolioItem";
import CollectionHeading from "@/components/collection/CollectionHeading";
import { Project } from "@/lib/types";

interface PortfolioCategoryProps {
  params: Promise<{ category: string }>;
}

const apiEndPoint = process.env.HYGRAPH_ENDPOINT;

function getEndpoint() {
  if (!apiEndPoint) throw new Error("HYGRAPH_ENDPOINT is not defined");
  return apiEndPoint;
}

async function getCategory(categorySlug: string) {
  try {
    const response = await fetch(getEndpoint(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      next: { revalidate: 60 },
      body: JSON.stringify({
        query: `query data($slug: String!) {
        category(where: { slug: $slug }) {
          title
          slug
          description
        }
      }`,
        variables: { slug: categorySlug },
      }),
    });

    const json = await response.json();
    return json.data.category ?? [];
  } catch (e) {
    console.error(e);
  }
}

async function getAllProjects(categorySlug: string): Promise<Project[]> {
  const response = await fetch(getEndpoint(), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    next: { revalidate: 60 },
    body: JSON.stringify({
      query: `query data($slug: String!)  {
      projects(where: { category: { slug: $slug  } }){
         slug
    title
    description
   thumbnail{url}
    heroBanner {url}
    category{
      title
      slug
    }
    details {
      client
      skills
    }
        }
      }`,
      variables: { slug: categorySlug },
    }),
  });

  const json = await response.json();
  return json.data.projects ?? null;
}

export async function generateStaticParams() {
  const response = await fetch(getEndpoint(), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query {
        categories {
          slug
        }
      }`,
    }),
  });

  const json = await response.json();
  return json.data.categories.map((item: { slug: string }) => ({
    category: item.slug,
  }));
}

export default async function PortfolioCollectionPage({
  params,
}: PortfolioCategoryProps) {
  const { category } = await params;

  const [data, projects] = await Promise.all([
    getCategory(category),
    getAllProjects(category),
  ]);

  if (!data) notFound();

  console.log(projects);

  return (
    <>
      <section
        aria-label={`${data.title} Projects`}
        className="flex border-b border-border"
      >
        <div className="container grid-layout px-0!">
          <div className="flex flex-col flex-wrap gap-x-4 pt-24 tablet:pt-32 px-4 tablet:px-8 pb-16">
            <h2 className="font-heading text-5xl font-extrabold mb-2">
              {data.title}
            </h2>

            <p className="opacity-70 text-lg font-normal">{data.description}</p>
          </div>
          <div className="grid grid-cols-1 gap-1 px-2 sm:grid-cols-2 laptop:grid-cols-3! tablet:px-0">
            {projects.map((item, i) => (
              <PortfolioItem key={i} data={item} index={i} />
            ))}
          </div>
        </div>
      </section>
      <Seperator noGrid />
    </>
  );
}
