import type { CollectionConfig } from "payload";

export const Collections: CollectionConfig = {
  slug: "collections",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "title",
    group: "Content",
  },
  hooks: {},
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "list",
      type: "relationship",
      relationTo: "projects",
      required: true,
      hasMany: true,
      admin: {
        isSortable: true,
        appearance: "drawer",
      },
    },
    {
      name: "slug",
      type: "text",
      required: true,
      admin: {
        position: "sidebar",
        components: {
          Field: "@/components/(backend)/NewSlugField#NewSlugField",
        },
      },
    },
  ],
};
