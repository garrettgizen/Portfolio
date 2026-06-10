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

// export const allProjects: Project[] = [
//   {
//     name: "Biktrix",
//     href: `${ProjectCategories.Web.url}/biktrix`,
//     description:
//       "Your portal to every bass drop on the planet, from underground gatherings to sold-out stages.",
//     thumbnail: " /web-ux-ui--thumbnail.webp",
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
//     thumbnail: " /drpd-thumbnail.webp",
//     heroMedia: " /projects/drpd/drpd_banner.webp",
//     type: ProjectCategories.Web,
//     slug: "drdp",
//     content: {
//       brief: {
//         text: "The project was to create an application that specifically focuses only on Dubstep music events. This can be either concerts, fundraisers, personal gatherings, etc. The location was specific, but I feel branching outside worldwide would be a better design to the final outcome. ",
//         media: [
//           {
//             src: " /projects/drpd/drpd_screen_promotion.webp",
//             alt: "DRPD. Promotional Screens",
//             type: "image",
//           },
//         ],
//       },
//       problem: {
//         text: "Dubstep fans and event organizers have no dedicated space to discover, share, or promote dubstep-specific events — forcing them to sift through cluttered, genre-agnostic platforms like Facebook Events or Eventbrite, where niche underground shows get buried under mainstream noise.",
//         media: [
//           {
//             src: " /projects/drpd/drpd_welcome_promotion.webp",
//             alt: "DRPD. Welcome Layout",
//             type: "image",
//           },
//           {
//             src: " /projects/drpd/drpd_search_promotion.webp",
//             alt: "DRPD. Search Layout",
//             type: "image",
//           },
//           {
//             src: " /projects/drpd/drpd_event_promotion.webp",
//             alt: "DRPD. Event Layout",
//             type: "image",
//           },
//           {
//             src: " /projects/drpd/drpd_pages.webp",
//             alt: "DRPD. All Screens",
//             type: "image",
//           },
//         ],
//       },
//       results: {
//         text: "The final product was delivered under the name DRDP — derived from the iconic dubstep moment of 'the drop', where the bass  hits hardest. The branding strikes a deliberate balance between playful  energy and a sci-fi aesthetic, mirroring the futuristic, otherworldly  sound that defines the dubstep genre. The result is a brand that feels native  to the culture it serves.",

//   {
//     name: "Enchanted Entertainment",
//     href: `${ProjectCategories.Branding.url}/enchanted-entertainment`,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     thumbnail: " /Thumbnail-7.jpg",
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
//     thumbnail: " /Thumbnail-7.jpg",
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
//     thumbnail: " /Thumbnail-7.jpg",
//     type: ProjectCategories.Branding,
//     slug: "enchanted-entertainment",
//     details: {
//       year: 2015,
//       client: "Ham Studios",
//       skills: ["Illustrator", "Photoshop"],
//     },
//   },
// ];
