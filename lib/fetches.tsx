import { getPayload } from "payload";
import configPromise from "@payload-config";
import { PortfolioProjectData, MediaCategory } from "./types";
import { Category } from "@/payload-types";

const payload = await getPayload({ config: configPromise });

export const getCategories = async () => {
  const categories = await payload.find({
    collection: "categories",
    overrideAccess: false,
    sort: "id",
  });

  const categoriesDocs = categories.docs as MediaCategory[];
  return categoriesDocs;
};

export const getPortfolioProjects = async () => {
  const allPortfolioProject = await payload.find({
    collection: "projects",
    sort: "id",
    depth: 2,
  });

  const allProjects = allPortfolioProject.docs as PortfolioProjectData[];
  return allProjects;
};

export const getRelatedProjects = async (slug: string, category: Category) => {
  const res = await payload.find({
    collection: "projects",
    sort: "category",
    limit: 3,
    depth: 2,
    where: {
      and: [
        {
          "category.id": {
            equals: category.id,
          },
        },
        {
          slug: {
            not_equals: slug,
          },
        },
      ],
    },
  });
  const relatedProjects = res.docs as PortfolioProjectData[];
  return relatedProjects;
};
