import { ProjectCategories } from "@/lib/data";
import Seperator from "@/components/Seperator";
import FilteredCollection from "@/components/collection/FilteredCollection";
import { Project } from "@/lib/types";

const apiEndPoint = process.env.HYGRAPH_ENDPOINT;
async function getCategories(): Promise<ProjectCategories[]> {
  if (!apiEndPoint) throw new Error("HYGRAPH_ENDPOINT is not defined");

  const response = await fetch(apiEndPoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query data{
  categories{
    title
    slug
    description
    thumbnail{url}
    icon{url}
  }
}
`,
    }),
  });
  const json = await response.json();
  return json.data.categories;
}

async function getAllProjects(): Promise<Project[]> {
  if (!apiEndPoint) throw new Error("HYGRAPH_ENDPOINT is not defined");

  const response = await fetch(apiEndPoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query data{
  projects {
    slug
    title
   thumbnail{url}
    category{
      title
    }
  }
}`,
    }),
  });
  const json = await response.json();
  return json.data.projects;
}

export default async function Page() {
  const [categories, projects] = await Promise.all([
    getCategories(),
    getAllProjects(),
  ]);

  return (
    <>
      <FilteredCollection data={projects} categories={categories} />
      <Seperator noGrid />
    </>
  );
}
