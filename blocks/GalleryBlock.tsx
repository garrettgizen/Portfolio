import type { Block } from "payload";

export const GalleryBlock: Block = {
  slug: "gallery",
  labels: {
    singular: "Gallery",
    plural: "Galleries",
  },
  fields: [
    {
      name: "gallery", // required
      type: "upload", // required
      relationTo: "media",
      hasMany: true,
    },
  ],
};
