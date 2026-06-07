import { ProjectCategory } from "@/lib/types";
import QuicklinkCards from "./QuicklinkCards";

interface quicklinksProp {
  heading?: string;
}

async function getData(): Promise<ProjectCategory[]> {
  const apiEndPoint = process.env.HYGRAPH_ENDPOINT;
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

export default async function Quicklinks({ heading }: quicklinksProp) {
  const categories = await getData();
  return <QuicklinkCards categories={categories} heading={heading} />;
}
