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
      { name: "Logo", href: "/portfolio/branding" },
      { name: "Prints", href: "/portfolio/prints" },
      { name: "Illustrations", href: "/portfolio/illustrations" },
      { name: "Film Editing", href: "/portfolio/video-editing" },
    ],
  },
  { name: "About Me", href: "/about" },
  { name: "Contact Me", href: "/contact", type: "button" },
];
