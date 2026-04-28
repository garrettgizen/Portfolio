import {
  MonitorDotIcon,
  PenTool03Icon,
  News01Icon,
  FlimSlateIcon,
} from "@hugeicons/core-free-icons";

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

export const navigation: NavItem[] = [
  {
    name: "Portfolio",
    href: "/portfolio",
    sublinks: [
      { name: "Web & UI Design", href: "/portfolio/web-ui-design" },
      { name: "Branding", href: "/portfolio/branding" },
      { name: "Print & Illustration", href: "/portfolio/prints" },
      { name: "Film Editing", href: "/portfolio/video-editing" },
    ],
  },
  { name: "About Me", href: "/about" },
  { name: "Contact Me", href: "/contact", type: "button" },
];

export const quicklinks = [
  {
    name: "Web & UI Design",
    href: "/portfolio/web-ui-design",
    thumbnail: "/web-ux-ui--thumbnail.webp",
    paragraph: "Discover high-quality solutions that elevate user experiences.",
    icon: MonitorDotIcon,
  },
  {
    name: "Branding",
    href: "/portfolio/branding",
    thumbnail: "/branding--thumbnail.webp",
    paragraph: "Build identities that resonate with the company.",
    icon: PenTool03Icon,
  },
  {
    name: "Print & Illustration",
    href: "/portfolio/prints",
    thumbnail: "/prints--thumbnail.webp",
    paragraph: "Designed Illustrations and prints to impresss.",
    icon: News01Icon,
  },
  {
    name: "Film Editing",
    href: "/portfolio/video-editing",
    thumbnail: "/film-editing--thumbnail.webp",
    paragraph: "Contracted film projects that will make you stand out.",
    icon: FlimSlateIcon,
  },
];
