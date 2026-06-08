import type { CollectionConfig } from "payload";
import {
  MetaTitleField,
  MetaImageField,
  MetaDescriptionField,
  OverviewField,
  PreviewField,
} from "@payloadcms/plugin-seo/fields";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

export const Projects: CollectionConfig = {
  slug: "projects",
  access: {
    read: () => true,
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
          label: "Content",
          fields: [
            {
              name: "description",
              type: "textarea",
              required: true,
            },
            {
              name: "content",
              type: "richText",
              // Pass the Lexical editor here and override base settings as necessary
              editor: lexicalEditor({}),
            },
          ],
        },
        {
          name: "meta",
          label: "SEO",
          fields: [
            OverviewField({
              titlePath: "meta.title",
              descriptionPath: "meta.description",
              imagePath: "meta.image",
            }),
            MetaTitleField({ hasGenerateFn: true }),
            MetaImageField({ relationTo: "media" }),
            MetaDescriptionField({}),
            PreviewField({
              hasGenerateFn: true,
              titlePath: "meta.title",
              descriptionPath: "meta.description",
            }),
          ],
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
