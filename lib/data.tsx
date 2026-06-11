import { getCategories } from "./fetches";
import type { NavItem } from "./types";

export const getNavigation = async (): Promise<NavItem[]> => {
  const categories = await getCategories();

  return [
    {
      name: "Portfolio",
      href: "/portfolio",
      sublinks: categories.map((category) => ({
        name: category.title,
        href: `/portfolio/${category.slug}`,
      })),
    },
    { name: "About Me", href: "/about" },
    {
      name: "Contact Me",
      href: "mailto:garrettgizen@proton.me",
      type: "button",
    },
  ];
};
