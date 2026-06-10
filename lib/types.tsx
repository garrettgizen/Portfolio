import { Project, Category, Media } from "@/payload-types";

export type PortfolioProjectData = Omit<
  Project,
  "category" | "meta" | "heroBanner"
> & {
  category: Category;
  heroBanner?: Media | null;
  meta?: {
    title?: string | null;
    image?: Media | null;
    description?: string | null;
  };
};

export type ProjectCollections = Omit<Project, "list"> & {
  list: PortfolioProjectData[] | null;
};

export type MediaCategory = Omit<Category, "icon" | "thumbnail"> & {
  icon?: Media;
  thumbnail: Media;
};

export interface SubHeadingFields {
  id: string;
  heading: string;
  paragraph: string;
  blockName: string;
  blockType: "subHeading";
}

export interface GalleryImage {
  id: number;
  alt: string;
  url: string;
  width: number;
  height: number;
}

export interface GalleryFields {
  id: string;
  gallery: GalleryImage[];
  blockName: string;
  blockType: "gallery";
}

export type NavSublink = {
  name: string;
  href: string;
};

export type NavItem = {
  name: string;
  href: string;
  sublinks?: NavSublink[];
  type?: "button" | "link";
};
