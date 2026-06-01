import {
  MonitorDotIcon,
  PenTool03Icon,
  News01Icon,
  FlimSlateIcon,
} from "@hugeicons/core-free-icons";
import { IconSvgElement } from "@hugeicons/react";

export type ProductCategory = {
  title: string;
  description?: string;
  url: string;
  slug: string;
  icon?: IconSvgElement;
  thumbnail?: string;
};

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

export type GalleryItem = {
  src: string;
  alt: string;
  type: "image" | "video";
};

export const ProjectSkills = [
  "Figma",
  "UI/UX Design",
  "Web Design",
  "Shopify",
  "TailwindCSS",
  "NextJS",
  "React",
  "Photoshop",
  "Illustrator",
  "Davinci Resolve",
  "After Effects",
] as const;

export type ProjectSkills = (typeof ProjectSkills)[number];

export type Project = {
  name: string;
  href: string;
  description: string;
  thumbnail: string;
  type: ProjectCategories;
  gallery?: GalleryItem[];
  slug: string;
  video?: string;
  heroMedia?: string;
  details?: {
    year: number;
    client: string;
    skills: ProjectSkills[];
  };
  content?: {
    [key: string]: { text: string; media?: GalleryItem[] };
  };
};

export const ProjectCategories: Record<string, ProductCategory> = {
  Web: {
    title: "Web & UI Design",
    description:
      "Discover high-quality solutions that elevate user experiences.",
    url: "/portfolio/web-ui-design",
    thumbnail: "/gizengraphics/web-ux-ui--thumbnail.webp",
    slug: "web-ui-design",
    icon: MonitorDotIcon,
  },
  Branding: {
    title: "Branding",
    description: "Build identities that resonate with the company.",
    url: "/portfolio/branding",
    thumbnail: "/gizengraphics/branding--thumbnail.webp",
    slug: "branding",
    icon: PenTool03Icon,
  },
  Print: {
    title: "Print & Illustration",
    description: "Designed Illustrations and prints to impresss.",
    url: "/portfolio/print-illustrations",
    thumbnail: "/gizengraphics/prints--thumbnail.webp",
    slug: "print-illustrations",
    icon: News01Icon,
  },
  Editing: {
    title: "Film Editing",
    description: "Contracted film projects that will make you stand out.",
    url: "/portfolio/film-editing",
    thumbnail: "/gizengraphics/film-editing--thumbnail.webp",
    slug: "film-editing",
    icon: FlimSlateIcon,
  },
};

export type ProjectCategories = ProductCategory;

export const navigation: NavItem[] = [
  {
    name: "Portfolio",
    href: "/portfolio",
    sublinks: [
      { name: ProjectCategories.Web.title, href: ProjectCategories.Web.url },
      {
        name: ProjectCategories.Branding.title,
        href: ProjectCategories.Branding.url,
      },
      {
        name: ProjectCategories.Print.title,
        href: ProjectCategories.Print.url,
      },
      {
        name: ProjectCategories.Editing.title,
        href: ProjectCategories.Editing.url,
      },
    ],
  },
  { name: "About Me", href: "/about" },
  { name: "Contact Me", href: "mailto:garrettgizen@proton.me", type: "button" },
];

export const allProjects: Project[] = [
  {
    name: "Biktrix",
    href: `${ProjectCategories.Web.url}/biktrix`,
    description:
      "Your portal to every bass drop on the planet, from underground gatherings to sold-out stages.",
    thumbnail: "/gizengraphics/web-ux-ui--thumbnail.webp",
    type: ProjectCategories.Web,
    slug: "biktrix",
  },
  {
    name: "DRDP. (Dubstep Events App)",
    href: `${ProjectCategories.Web.url}/drdp`,
    description:
      "Your portal to every bass drop on the planet, from underground gatherings to sold-out stages.",
    thumbnail: "/gizengraphics/drpd-thumbnail.webp",
    heroMedia: "/gizengraphics/projects/drpd/drpd_banner.webp",
    type: ProjectCategories.Web,
    slug: "drdp",
    content: {
      brief: {
        text: "The project was to create an application that specifically focuses only on Dubstep music events. This can be either concerts, fundraisers, personal gatherings, etc. The location was specific, but I feel branching outside worldwide would be a better design to the final outcome. ",
        media: [
          {
            src: "/gizengraphics/projects/drpd/drpd_screen_promotion.webp",
            alt: "DRPD. Promotional Screens",
            type: "image",
          },
        ],
      },
      problem: {
        text: "Dubstep fans and event organizers have no dedicated space to discover, share, or promote dubstep-specific events — forcing them to sift through cluttered, genre-agnostic platforms like Facebook Events or Eventbrite, where niche underground shows get buried under mainstream noise.",
        media: [
          {
            src: "/gizengraphics/projects/drpd/drpd_welcome_promotion.webp",
            alt: "DRPD. Welcome Layout",
            type: "image",
          },
          {
            src: "/gizengraphics/projects/drpd/drpd_search_promotion.webp",
            alt: "DRPD. Search Layout",
            type: "image",
          },
          {
            src: "/gizengraphics/projects/drpd/drpd_event_promotion.webp",
            alt: "DRPD. Event Layout",
            type: "image",
          },
          {
            src: "/gizengraphics/projects/drpd/drpd_pages.webp",
            alt: "DRPD. All Screens",
            type: "image",
          },
        ],
      },
      results: {
        text: "The final product was delivered under the name DRDP — derived from the iconic dubstep moment of 'the drop', where the bass  hits hardest. The branding strikes a deliberate balance between playful  energy and a sci-fi aesthetic, mirroring the futuristic, otherworldly  sound that defines the dubstep genre. The result is a brand that feels native  to the culture it serves.",
      },
    },
    details: {
      year: 2025,
      client: "N/A (Concept)",
      skills: ["UI/UX Design", "Figma"],
    },
  },
  {
    name: "Framerate (Media Review App)",
    href: `${ProjectCategories.Web.url}/framerate`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    thumbnail: "/gizengraphics/Thumbnail-3.jpg",
    type: ProjectCategories.Web,
    slug: "framerate",
  },
  {
    name: "Project 863 - Season 4 (Unofficial Poster)",
    href: `${ProjectCategories.Print.url}/`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    thumbnail: "/gizengraphics/Thumbnail-863.jpg",
    type: ProjectCategories.Print,
    slug: "project-863-S3-unoffical-poster",
  },
  {
    name: "SpiderCool",
    href: `${ProjectCategories.Branding.url}/`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    thumbnail: "/gizengraphics/Thumbnail-1.jpg",
    type: ProjectCategories.Branding,
    slug: "spidercool",
  },
  {
    name: "Project 863 (Web Series)",
    href: `${ProjectCategories.Editing.url}/863`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    thumbnail: "/gizengraphics/Thumbnail.jpg",
    type: ProjectCategories.Editing,
    slug: "project-863-series",
  },
  {
    name: "Sandbox In The City",
    href: `${ProjectCategories.Editing.url}/sandbox-in-the-city`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    thumbnail: "/gizengraphics/Thumbnail-10.jpg",
    type: ProjectCategories.Web,
    slug: "sandbox-in-the-city",
  },
  {
    name: "Grey Owl Graphic T-Shirt",
    href: `${ProjectCategories.Print.url}/`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    thumbnail: "/gizengraphics/Thumbnail-5.jpg",
    type: ProjectCategories.Print,
    slug: "grey-owl-shirt",
  },
  {
    name: "SIMFC Homepage - Concept",
    href: `${ProjectCategories.Web.url}/simfc`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    thumbnail: "/gizengraphics/Thumbnail-6.jpg",
    type: ProjectCategories.Print,
    slug: "SIMFC",
  },
  {
    name: "Overkill",
    href: `${ProjectCategories.Branding.url}/`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    thumbnail: "/gizengraphics/Thumbnail-7.jpg",
    type: ProjectCategories.Branding,
    slug: "overkill",
  },
  {
    name: "Shadows On The Glass",
    href: `${ProjectCategories.Editing.url}/shadows-on-the-glass`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    thumbnail: "/gizengraphics/Thumbnail-8.jpg",
    type: ProjectCategories.Editing,
    slug: "shadows-on-the-glass",
  },
  {
    name: "Teamlinkt (Sports App)",
    href: `${ProjectCategories.Web.url}/teamlinkt`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    thumbnail: "/gizengraphics/Thumbnail-9.jpg",
    type: ProjectCategories.Web,
    slug: "teamlinkt",
  },
];

export const selectedWork: Project[] = allProjects.slice(0, 9);
