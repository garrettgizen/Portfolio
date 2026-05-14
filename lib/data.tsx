import {
  MonitorDotIcon,
  PenTool03Icon,
  News01Icon,
  FlimSlateIcon,
} from "@hugeicons/core-free-icons";
import { IconSvgElement } from "@hugeicons/react";
import { a } from "motion/react-client";

export enum ProjectCategories {
  Web = "Web & UI Design",
  Branding = "Branding",
  Print = "Print & Illustration",
  Editing = "Film Editing",
}

export enum ProjectCategoriesLinks {
  Web = "/portfolio/web-ui-design",
  Branding = "/portfolio/branding",
  Print = "/portfolio/print-illustrations",
  Editing = "/portfolio/film-editing",
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

export type quickLinkItem = {
  name: string;
  href: string;
  thumbnail: string;
  paragraph: string;
  icon?: IconSvgElement;
};

export type GalleryItem = {
  src: string;
  alt: string;
  type: "image" | "video";
};

export type Project = {
  name: string;
  href: string;
  description: string;
  thumbnail: string;
  type: ProjectCategories;
  gallery?: GalleryItem[];
  slug: string;
  video?: string;
};

export const navigation: NavItem[] = [
  {
    name: "Portfolio",
    href: "/portfolio",
    sublinks: [
      { name: ProjectCategories.Web, href: ProjectCategoriesLinks.Web },
      {
        name: ProjectCategories.Branding,
        href: ProjectCategoriesLinks.Branding,
      },
      { name: ProjectCategories.Print, href: ProjectCategoriesLinks.Print },
      { name: ProjectCategories.Editing, href: ProjectCategoriesLinks.Editing },
    ],
  },
  { name: "About Me", href: "/about" },
  { name: "Contact Me", href: "mailto:garrettgizen@proton.me", type: "button" },
];

export const quicklinks: quickLinkItem[] = [
  {
    name: ProjectCategories.Web,
    href: ProjectCategoriesLinks.Web,
    thumbnail: "/web-ux-ui--thumbnail.webp",
    paragraph: "Discover high-quality solutions that elevate user experiences.",
    icon: MonitorDotIcon,
  },
  {
    name: ProjectCategories.Branding,
    href: ProjectCategoriesLinks.Branding,
    thumbnail: "/branding--thumbnail.webp",
    paragraph: "Build identities that resonate with the company.",
    icon: PenTool03Icon,
  },
  {
    name: ProjectCategories.Print,
    href: ProjectCategoriesLinks.Print,
    thumbnail: "/prints--thumbnail.webp",
    paragraph: "Designed Illustrations and prints to impresss.",
    icon: News01Icon,
  },
  {
    name: ProjectCategories.Editing,
    href: ProjectCategoriesLinks.Editing,
    thumbnail: "/film-editing--thumbnail.webp",
    paragraph: "Contracted film projects that will make you stand out.",
    icon: FlimSlateIcon,
  },
];

export const allProjects: Project[] = [
  {
    name: "Biktrix",
    href: `${ProjectCategoriesLinks.Web}/biktrix`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    thumbnail: "/web-ux-ui--thumbnail.webp",
    type: ProjectCategories.Web,
    slug: "biktrix",
  },
  {
    name: "DRDP. (Dubstep Events App)",
    href: `${ProjectCategoriesLinks.Web}/drdp`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    thumbnail: "/Thumbnail-4.jpg",
    type: ProjectCategories.Web,
    slug: "drdp",
  },
  {
    name: "Framerate (Media Review App)",
    href: `${ProjectCategoriesLinks.Web}/framerate`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    thumbnail: "/Thumbnail-3.jpg",
    type: ProjectCategories.Web,
    slug: "framerate",
  },
  {
    name: "Project 863 - Season 4 (Unofficial Poster)",
    href: `${ProjectCategoriesLinks.Print}/`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    thumbnail: "/Thumbnail-863.jpg",
    type: ProjectCategories.Print,
    slug: "project-863-S3-unoffical-poster",
  },
  {
    name: "SpiderCool",
    href: `${ProjectCategoriesLinks.Branding}/`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    thumbnail: "/Thumbnail-1.jpg",
    type: ProjectCategories.Branding,
    slug: "spidercool",
  },
  {
    name: "Project 863 (Web Series)",
    href: `${ProjectCategoriesLinks.Editing}/863`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    thumbnail: "/Thumbnail.jpg",
    type: ProjectCategories.Editing,
    slug: "project-863-series",
  },
  {
    name: "Sandbox In The City",
    href: `${ProjectCategoriesLinks.Editing}/sandbox-in-the-city`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    thumbnail: "/Thumbnail-10.jpg",
    type: ProjectCategories.Web,
    slug: "sandbox-in-the-city",
  },
  {
    name: "Grey Owl Graphic T-Shirt",
    href: `${ProjectCategoriesLinks.Print}/`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    thumbnail: "/Thumbnail-5.jpg",
    type: ProjectCategories.Print,
    slug: "grey-owl-shirt",
  },
  {
    name: "SIMFC Homepage - Concept",
    href: `${ProjectCategoriesLinks.Web}/simfc`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    thumbnail: "/Thumbnail-6.jpg",
    type: ProjectCategories.Print,
    slug: "SIMFC",
  },
  {
    name: "Overkill",
    href: `${ProjectCategoriesLinks.Branding}/`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    thumbnail: "/Thumbnail-7.jpg",
    type: ProjectCategories.Branding,
    slug: "overkill",
  },
  {
    name: "Shadows On The Glass",
    href: `${ProjectCategoriesLinks.Editing}/shadows-on-the-glass`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    thumbnail: "/Thumbnail-8.jpg",
    type: ProjectCategories.Editing,
    slug: "shadows-on-the-glass",
  },
  {
    name: "Teamlinkt (Sports App)",
    href: `${ProjectCategoriesLinks.Web}/teamlinkt`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    thumbnail: "/Thumbnail-9.jpg",
    type: ProjectCategories.Web,
    slug: "teamlinkt",
  },
];

export const selectedWork: Project[] = allProjects.slice(0, 9);
