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

// export const ProjectSkills = [
//   "Figma",
//   "UI/UX Design",
//   "Web Design",
//   "Shopify",
//   "NextJS",
//   "React",
//   "Photoshop",
//   "Illustrator",
//   "Davinci Resolve",
//   "After Effects",
//   "Premiere Pro",
//   "Wordpress",
//   "Adobe XD",
// ] as const;

// export type ProjectSkills = (typeof ProjectSkills)[number];

// export type Project = {
//   name: string;
//   href: string;
//   description: string;
//   thumbnail: string;
//   type: ProjectCategories;
//   gallery?: GalleryItem[];
//   slug: string;
//   video?: string;
//   heroMedia?: string;
//   details?: {
//     year: number;
//     client: string;
//     skills: ProjectSkills[];
//   };
//   content?: {
//     [key: string]: { text: string; media?: GalleryItem[] };
//   };
// };

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
      {
        name: ProjectCategories.Web.title,
        href: "/portfolio/web-and-ui-design",
      },
      {
        name: ProjectCategories.Branding.title,
        href: "/portfolio/branding",
      },
      {
        name: ProjectCategories.Print.title,
        href: "/portfolio/print-and-illustration",
      },
      {
        name: ProjectCategories.Editing.title,
        href: "/portfolio/film-editing/",
      },
    ],
  },
  { name: "About Me", href: "/about" },
  { name: "Contact Me", href: "mailto:garrettgizen@proton.me", type: "button" },
];

// export const allProjects: Project[] = [
//   {
//     name: "Biktrix",
//     href: `${ProjectCategories.Web.url}/biktrix`,
//     description:
//       "Your portal to every bass drop on the planet, from underground gatherings to sold-out stages.",
//     thumbnail: "/gizengraphics/web-ux-ui--thumbnail.webp",
//     type: ProjectCategories.Web,
//     slug: "biktrix",
//     details: {
//       year: 2021,
//       client: "Biktrix",
//       skills: ["UI/UX Design", "Figma", "Web Design", "Shopify"],
//     },
//   },
//   {
//     name: "DRDP. (Dubstep Events App)",
//     href: `${ProjectCategories.Web.url}/drdp`,
//     description:
//       "Your portal to every bass drop on the planet, from underground gatherings to sold-out stages.",
//     thumbnail: "/gizengraphics/drpd-thumbnail.webp",
//     heroMedia: "/gizengraphics/projects/drpd/drpd_banner.webp",
//     type: ProjectCategories.Web,
//     slug: "drdp",
//     content: {
//       brief: {
//         text: "The project was to create an application that specifically focuses only on Dubstep music events. This can be either concerts, fundraisers, personal gatherings, etc. The location was specific, but I feel branching outside worldwide would be a better design to the final outcome. ",
//         media: [
//           {
//             src: "/gizengraphics/projects/drpd/drpd_screen_promotion.webp",
//             alt: "DRPD. Promotional Screens",
//             type: "image",
//           },
//         ],
//       },
//       problem: {
//         text: "Dubstep fans and event organizers have no dedicated space to discover, share, or promote dubstep-specific events — forcing them to sift through cluttered, genre-agnostic platforms like Facebook Events or Eventbrite, where niche underground shows get buried under mainstream noise.",
//         media: [
//           {
//             src: "/gizengraphics/projects/drpd/drpd_welcome_promotion.webp",
//             alt: "DRPD. Welcome Layout",
//             type: "image",
//           },
//           {
//             src: "/gizengraphics/projects/drpd/drpd_search_promotion.webp",
//             alt: "DRPD. Search Layout",
//             type: "image",
//           },
//           {
//             src: "/gizengraphics/projects/drpd/drpd_event_promotion.webp",
//             alt: "DRPD. Event Layout",
//             type: "image",
//           },
//           {
//             src: "/gizengraphics/projects/drpd/drpd_pages.webp",
//             alt: "DRPD. All Screens",
//             type: "image",
//           },
//         ],
//       },
//       results: {
//         text: "The final product was delivered under the name DRDP — derived from the iconic dubstep moment of 'the drop', where the bass  hits hardest. The branding strikes a deliberate balance between playful  energy and a sci-fi aesthetic, mirroring the futuristic, otherworldly  sound that defines the dubstep genre. The result is a brand that feels native  to the culture it serves.",
//       },
//     },
//     details: {
//       year: 2025,
//       client: "N/A (Concept)",
//       skills: ["UI/UX Design", "Figma"],
//     },
//   },
//   {
//     name: "Framerate (Media Review App)",
//     href: `${ProjectCategories.Web.url}/framerate`,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     thumbnail: "/gizengraphics/Thumbnail-3.jpg",
//     type: ProjectCategories.Web,
//     slug: "framerate",
//     details: {
//       year: 2024,
//       client: "N/A (Concept)",
//       skills: ["UI/UX Design", "Figma"],
//     },
//   },
//   {
//     name: "Project 863 - Unofficial Posters",
//     href: `${ProjectCategories.Print.url}/`,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     thumbnail: "/gizengraphics/Thumbnail-863.jpg",
//     type: ProjectCategories.Print,
//     slug: "project-863-unoffical-poster",
//     details: {
//       year: 2025,
//       client: "N/A (Concept)",
//       skills: ["Photoshop", "Illustrator"],
//     },
//   },
//   {
//     name: "SpiderCool",
//     href: `${ProjectCategories.Branding.url}/`,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     thumbnail: "/gizengraphics/Thumbnail-1.jpg",
//     type: ProjectCategories.Branding,
//     slug: "spidercool",
//     details: {
//       year: 2014,
//       client: "Dimensional Control. Inc",
//       skills: ["Photoshop", "Illustrator"],
//     },
//   },
//   {
//     name: "Project 863 (Web Series)",
//     href: `${ProjectCategories.Editing.url}/863`,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     thumbnail: "/gizengraphics/Thumbnail.jpg",
//     type: ProjectCategories.Editing,
//     slug: "project-863-series",
//     details: {
//       year: 2024,
//       client: "Spellbound Inc.",
//       skills: ["Premiere Pro", "After Effects"],
//     },
//   },
//   {
//     name: "Sandbox In The City",
//     href: `${ProjectCategories.Editing.url}/sandbox-in-the-city`,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     thumbnail: "/gizengraphics/Thumbnail-10.jpg",
//     type: ProjectCategories.Web,
//     slug: "sandbox-in-the-city",
//     details: {
//       year: 2025,
//       client: "Sandbox In The City",
//       skills: ["Figma", "Shopify", "Web Design", "UI/UX Design"],
//     },
//   },
//   {
//     name: "Grey Owl Graphic T-Shirt",
//     href: `${ProjectCategories.Print.url}/`,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     thumbnail: "/gizengraphics/Thumbnail-5.jpg",
//     type: ProjectCategories.Print,
//     slug: "grey-owl-shirt",
//     details: {
//       year: 2021,
//       client: "Grey Owl Center",
//       skills: ["Photoshop", "Illustrator"],
//     },
//   },

//   {
//     name: "Overkill",
//     href: `${ProjectCategories.Branding.url}/`,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     thumbnail: "/gizengraphics/Thumbnail-7.jpg",
//     type: ProjectCategories.Branding,
//     slug: "overkill",
//     details: {
//       year: 2025,
//       client: "N/A (Concept)",
//       skills: ["Illustrator"],
//     },
//   },
//   {
//     name: "Shadows On The Glass",
//     href: `${ProjectCategories.Editing.url}/shadows-on-the-glass`,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     thumbnail: "/gizengraphics/Thumbnail-8.jpg",
//     type: ProjectCategories.Editing,
//     slug: "shadows-on-the-glass",
//     details: {
//       year: 2025,
//       client: "Personal",
//       skills: ["Davinci Resolve"],
//     },
//   },
//   {
//     name: "Teamlinkt (Sports App)",
//     href: `${ProjectCategories.Web.url}/teamlinkt`,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     thumbnail: "/gizengraphics/Thumbnail-9.jpg",
//     type: ProjectCategories.Web,
//     slug: "teamlinkt",
//     details: {
//       year: 2021,
//       client: "Teamlinkt",
//       skills: ["Web Design", "UI/UX Design", "Adobe XD"],
//     },
//   },

//   {
//     name: "SIMFC Homepage - Concept",
//     href: `${ProjectCategories.Web.url}/simfc`,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     thumbnail: "/gizengraphics/Thumbnail-6.jpg",
//     type: ProjectCategories.Web,
//     slug: "SIMFC",
//     details: {
//       year: 2023,
//       client: "N/A (Concept)",
//       skills: ["Figma", "Web Design"],
//     },
//   },
//   {
//     name: "Steam Homepage - Concept",
//     href: `${ProjectCategories.Web.url}/steam-redesign`,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     thumbnail: "/gizengraphics/Thumbnail-6.jpg",
//     type: ProjectCategories.Web,
//     slug: "steam-redesign",
//     details: {
//       year: 2024,
//       client: "N/A (Concept)",
//       skills: ["Figma", "Web Design", "UI/UX Design"],
//     },
//   },
//   {
//     name: "Spellbound Application - Concept",
//     href: `${ProjectCategories.Web.url}/spellbound-app`,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     thumbnail: "/gizengraphics/Thumbnail-6.jpg",
//     type: ProjectCategories.Web,
//     slug: "spellbound-app",
//     details: {
//       year: 2024,
//       client: "N/A (Concept)",
//       skills: ["Figma", "Web Design", "UI/UX Design"],
//     },
//   },
//   {
//     name: "Teamlinkt - WordPress League Templates",
//     href: `${ProjectCategories.Web.url}/teamlinkt-wordpress`,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     thumbnail: "/gizengraphics/Thumbnail-6.jpg",
//     type: ProjectCategories.Web,
//     slug: "teamlinkt-wordpress",
//     details: {
//       year: 2021,
//       client: "Teamlinkt",
//       skills: ["Web Design", "UI/UX Design", "Wordpress"],
//     },
//   },
//   {
//     name: "B&G Wedding Website",
//     href: `${ProjectCategories.Web.url}/bg-wedding`,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     thumbnail: "/gizengraphics/Thumbnail-6.jpg",
//     type: ProjectCategories.Web,
//     slug: "bg-wedding",
//     details: {
//       year: 2024,
//       client: "Personal",
//       skills: ["Web Design", "UI/UX Design", "React", "Figma"],
//     },
//   },
//   {
//     name: "A&L Royal Education",
//     href: `${ProjectCategories.Branding.url}/al-royal-education`,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     thumbnail: "/gizengraphics/Thumbnail-7.jpg",
//     type: ProjectCategories.Branding,
//     slug: "al-royal-education",
//     details: {
//       year: 2022,
//       client: "A&L Royal Education",
//       skills: ["Illustrator"],
//     },
//   },
//   {
//     name: "Wisebuy",
//     href: `${ProjectCategories.Branding.url}/wisebuy`,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     thumbnail: "/gizengraphics/Thumbnail-7.jpg",
//     type: ProjectCategories.Branding,
//     slug: "wisebuy",
//     details: {
//       year: 2014,
//       client: "Wisebuy",
//       skills: ["Illustrator"],
//     },
//   },
//   {
//     name: "Quest Trailers",
//     href: `${ProjectCategories.Branding.url}/quest-trailers`,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     thumbnail: "/gizengraphics/Thumbnail-7.jpg",
//     type: ProjectCategories.Branding,
//     slug: "quest-trailers",
//     details: {
//       year: 2013,
//       client: "Quest Trailers",
//       skills: ["Illustrator", "Photoshop"],
//     },
//   },
//   {
//     name: "Ride! Indoor Cycling Studio",
//     href: `${ProjectCategories.Branding.url}/ride`,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     thumbnail: "/gizengraphics/Thumbnail-7.jpg",
//     type: ProjectCategories.Branding,
//     slug: "ride",
//     details: {
//       year: 2013,
//       client: "Ride! Studios Cobham",
//       skills: ["Illustrator"],
//     },
//   },
//   {
//     name: "Subject 4 Podcast",
//     href: `${ProjectCategories.Branding.url}/subject-4-podcast`,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     thumbnail: "/gizengraphics/Thumbnail-7.jpg",
//     type: ProjectCategories.Branding,
//     slug: "subject-4-podcast",
//     details: {
//       year: 2025,
//       client: "Subject 4 Podcast",
//       skills: ["Illustrator"],
//     },
//   },
//   {
//     name: "Enchanted Entertainment",
//     href: `${ProjectCategories.Branding.url}/enchanted-entertainment`,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     thumbnail: "/gizengraphics/Thumbnail-7.jpg",
//     type: ProjectCategories.Branding,
//     slug: "enchanted-entertainment",
//     details: {
//       year: 2015,
//       client: "Enchanted Entertainment",
//       skills: ["Illustrator", "Photoshop"],
//     },
//   },
//   {
//     name: "BRP Mobile Services Inc.",
//     href: `${ProjectCategories.Branding.url}/brp-mobile`,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     thumbnail: "/gizengraphics/Thumbnail-7.jpg",
//     type: ProjectCategories.Branding,
//     slug: "brp-mobile",
//     details: {
//       year: 2015,
//       client: "BRP Mobile Services Inc.",
//       skills: ["Illustrator", "Photoshop"],
//     },
//   },
//   {
//     name: "Ham Studios",
//     href: `${ProjectCategories.Branding.url}/enchanted-entertainment`,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     thumbnail: "/gizengraphics/Thumbnail-7.jpg",
//     type: ProjectCategories.Branding,
//     slug: "enchanted-entertainment",
//     details: {
//       year: 2015,
//       client: "Ham Studios",
//       skills: ["Illustrator", "Photoshop"],
//     },
//   },
// ];

// export const selectedWork: Project[] = allProjects.slice(0, 9);
