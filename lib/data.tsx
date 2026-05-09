import {
  MonitorDotIcon,
  PenTool03Icon,
  News01Icon,
  FlimSlateIcon,
} from "@hugeicons/core-free-icons";
import { IconSvgElement } from "@hugeicons/react";

export enum ProjectCategories {
  Web = "Web & UI Design",
  Branding = "Branding",
  Print = "Print & Illustration",
  Editing = "Film Editing",
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
};

export type Project = {
  name: string;
  href: string;
  description: string;
  thumbnail: string;
  type: ProjectCategories;
  gallery?: GalleryItem[];
};

export const navigation: NavItem[] = [
  {
    name: "Portfolio",
    href: "/portfolio",
    sublinks: [
      { name: ProjectCategories.Web, href: "/portfolio/web-ui-design" },
      { name: ProjectCategories.Branding, href: "/portfolio/branding" },
      { name: ProjectCategories.Print, href: "/portfolio/prints" },
      { name: ProjectCategories.Editing, href: "/portfolio/video-editing" },
    ],
  },
  { name: "About Me", href: "/about" },
  { name: "Contact Me", href: "/contact", type: "button" },
];

export const quicklinks: quickLinkItem[] = [
  {
    name: ProjectCategories.Web,
    href: "/portfolio/web-ui-design",
    thumbnail: "/web-ux-ui--thumbnail.webp",
    paragraph: "Discover high-quality solutions that elevate user experiences.",
    icon: MonitorDotIcon,
  },
  {
    name: ProjectCategories.Branding,
    href: "/portfolio/branding",
    thumbnail: "/branding--thumbnail.webp",
    paragraph: "Build identities that resonate with the company.",
    icon: PenTool03Icon,
  },
  {
    name: ProjectCategories.Print,
    href: "/portfolio/prints",
    thumbnail: "/prints--thumbnail.webp",
    paragraph: "Designed Illustrations and prints to impresss.",
    icon: News01Icon,
  },
  {
    name: ProjectCategories.Editing,
    href: "/portfolio/video-editing",
    thumbnail: "/film-editing--thumbnail.webp",
    paragraph: "Contracted film projects that will make you stand out.",
    icon: FlimSlateIcon,
  },
];

export const selectedWork: Project[] = [
  {
    name: "Biktrix",
    href: "/web-ux-ui--thumbnail.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    thumbnail: "/web-ux-ui--thumbnail.webp",
    type: ProjectCategories.Web,
  },
  {
    name: "Biktrix",
    href: "/web-ux-ui--thumbnail.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    thumbnail: "/web-ux-ui--thumbnail.webp",
    type: ProjectCategories.Web,
  },
  {
    name: "Biktrix",
    href: "/web-ux-ui--thumbnail.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    thumbnail: "/web-ux-ui--thumbnail.webp",
    type: ProjectCategories.Web,
  },
  {
    name: "Biktrix",
    href: "/web-ux-ui--thumbnail.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    thumbnail: "/web-ux-ui--thumbnail.webp",
    type: ProjectCategories.Web,
  },
  {
    name: "Biktrix",
    href: "/web-ux-ui--thumbnail.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    thumbnail: "/web-ux-ui--thumbnail.webp",
    type: ProjectCategories.Web,
  },
  {
    name: "Biktrix",
    href: "/web-ux-ui--thumbnail.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    thumbnail: "/web-ux-ui--thumbnail.webp",
    type: ProjectCategories.Web,
  },
  {
    name: "Biktrix",
    href: "/web-ux-ui--thumbnail.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    thumbnail: "/web-ux-ui--thumbnail.webp",
    type: ProjectCategories.Web,
  },
  {
    name: "Biktrix",
    href: "/web-ux-ui--thumbnail.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    thumbnail: "/web-ux-ui--thumbnail.webp",
    type: ProjectCategories.Web,
  },
];
