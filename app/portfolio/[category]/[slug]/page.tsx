import { notFound } from "next/navigation";
import { Project } from "@/lib/types";
import ProjectPage from "@/components/portfolio/ProjectPage";

interface PostParams {
  params: Promise<{ category: string; slug: string }>;
}

const apiEndPoint = process.env.HYGRAPH_ENDPOINT;

async function getData(slug: string): Promise<Project | null> {
  if (!apiEndPoint) throw new Error("HYGRAPH_ENDPOINT is not defined");

  const response = await fetch(apiEndPoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query data($slug: String!) {
        project(where: { slug: $slug }) {
          slug
          title
          description
          thumbnail { url }
          heroBanner { url }
          category { title slug }
          details { year client skills }
        }
      }`,
      variables: { slug },
    }),
  });

  const json = await response.json();
  return json.data.project ?? null;
}

export async function generateStaticParams() {
  if (!apiEndPoint) throw new Error("HYGRAPH_ENDPOINT is not defined");

  const response = await fetch(apiEndPoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query {
        projects {
          slug
          category { slug }
        }
      }`,
    }),
  });

  const json = await response.json();
  return json.data.projects.map(
    (item: { slug: string; category: { slug: string } }) => ({
      category: item.category.slug,
      slug: item.slug,
    }),
  );
}

export default async function WebUIDesignPost({ params }: PostParams) {
  const { slug } = await params;
  const data = await getData(slug);

  if (!data) {
    notFound();
    return null;
  }

  return <section>{<ProjectPage data={data} />}</section>;
}
