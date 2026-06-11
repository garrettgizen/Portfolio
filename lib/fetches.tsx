import { getPayload } from "payload";
import configPromise from "@payload-config";
import {
  PortfolioProjectData,
  MediaCategory,
  ProjectCollections,
} from "./types";
import { Category } from "@/payload-types";

const payload = await getPayload({ config: configPromise });

export const getCollection = async (slug: string) => {
  const res = await payload.find({
    collection: "collections",
    depth: 2,
    where: {
      slug: {
        equals: slug,
      },
    },
  });
  const collection = res.docs[0] as unknown as ProjectCollections;
  return collection;
};

export const getCategories = async () => {
  const categories = await payload.find({
    collection: "categories",
    overrideAccess: false,
    sort: "id",
  });

  const categoriesDocs = categories.docs as MediaCategory[];
  return categoriesDocs;
};

export const getCategoryProjects = async (slug: string) => {
  const res = await payload.find({
    collection: "projects",
    depth: 2,
    where: {
      "category.slug": {
        equals: slug,
      },
    },
  });
  const relatedCategoryProjects = res.docs as PortfolioProjectData[];
  return relatedCategoryProjects;
};

export const getPortfolioProjects = async () => {
  const allPortfolioProject = await payload.find({
    collection: "projects",
    limit: 0,
    depth: 2,
  });

  const allProjects = allPortfolioProject.docs as PortfolioProjectData[];
  return allProjects;
};

export const getProject = async (slug: string) => {
  const res = await payload.find({
    collection: "projects",
    depth: 2,
    where: {
      slug: {
        equals: slug,
      },
    },
  });
  const project = res.docs[0] as PortfolioProjectData;
  return project;
};

export const getRelatedProjects = async (slug: string, category: Category) => {
  const res = await payload.find({
    collection: "projects",
    limit: 20, // fetch a larger pool
    depth: 2,
    where: {
      and: [
        { "category.id": { equals: category.id } },
        { slug: { not_equals: slug } },
      ],
    },
  });

  const shuffled = res.docs.sort(() => Math.random() - 0.5).slice(0, 3);

  return shuffled as PortfolioProjectData[];
};
