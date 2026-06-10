import type { CollectionConfig } from "payload";

export const Categories: CollectionConfig = {
  slug: "categories",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "title",
    group: "Content",
  },
  hooks: {
    beforeChange: [
      ({ data }) => {
        if (data.slug) {
          data.url = `/portfolio/${data.slug}`;
        }
        return data;
      },
    ],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      type: "tabs",
      tabs: [
        {
          fields: [
            {
              name: "description", // required
              type: "textarea", // required
              required: true,
            },
          ],
          label: "Content",
        },
        {
          fields: [
            {
              name: "thumbnail", // required
              type: "upload", // required
              relationTo: "media", // required
              required: true,
            },
            {
              name: "icon", // required
              type: "upload", // required
              relationTo: "media", // required
              required: false,
            },
          ],
          label: "Media",
        },
      ],
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
    {
      name: "url",
      type: "text",
      admin: {
        readOnly: true,
        description: "Auto-generated from slug",
        position: "sidebar",
      },
    },
  ],
};
