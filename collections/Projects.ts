import type { CollectionConfig } from "payload";
import {
  MetaTitleField,
  MetaImageField,
  MetaDescriptionField,
  OverviewField,
  PreviewField,
} from "@payloadcms/plugin-seo/fields";
import { lexicalEditor, BlocksFeature } from "@payloadcms/richtext-lexical";
import { HTMLBlock } from "@/blocks/HTMLBlock";
import { SubHeadingBlock } from "@/blocks/SubHeadingBlock";
import { GalleryBlock } from "@/blocks/GalleryBlock";

export const Projects: CollectionConfig = {
  slug: "projects",
  access: {
    read: () => true,
  },
  admin: {
    preview: (doc: { slug?: string }) =>
      `${process.env.NEXT_PUBLIC_SITE_URL}/portfolio/${doc?.slug}`,
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
              name: "heroBanner", // required
              type: "upload", // required
              relationTo: "media",
            },
            {
              name: "details",
              type: "group",
              fields: [
                {
                  type: "number",
                  required: true,
                  name: "year",
                },
                {
                  type: "text",
                  required: true,
                  name: "client",
                },
                {
                  type: "select",
                  required: true,
                  name: "skills",
                  options: [
                    {
                      label: "Figma",
                      value: "Figma",
                    },
                    {
                      label: "UI/UX Design",
                      value: "UI/UX Design",
                    },
                    {
                      label: "Web Design",
                      value: "Web Design",
                    },
                    {
                      label: "Shopify",
                      value: "Shopify",
                    },
                    {
                      label: "NextJS",
                      value: "NextJS",
                    },
                    {
                      label: "React",
                      value: "React",
                    },
                    {
                      label: "Photoshop",
                      value: "Photoshop",
                    },
                    {
                      label: "Illustrator",
                      value: "Illustrator",
                    },
                    {
                      label: "Davinci Resolve",
                      value: "Davinci Resolve",
                    },
                    {
                      label: "After Effects",
                      value: "After Effects",
                    },
                    {
                      label: "Premiere Pro",
                      value: "Premiere Pro",
                    },
                    {
                      label: "WordPress",
                      value: "WordPress",
                    },
                    {
                      label: "Adobe XD",
                      value: "Adobe XD",
                    },
                  ],
                  hasMany: true,
                },
              ],
              label: "Details",
            },
            {
              name: "description",
              type: "textarea",
              required: true,
            },
            {
              name: "content",
              type: "richText",
              required: true,
              // Pass the Lexical editor here and override base settings as necessary
              editor: lexicalEditor({
                features: ({ rootFeatures }) => [
                  ...rootFeatures,
                  BlocksFeature({
                    blocks: [HTMLBlock, SubHeadingBlock, GalleryBlock],
                  }),
                ],
              }),
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
      name: "category",
      type: "relationship",
      relationTo: "categories",
      required: true,
      admin: {
        position: "sidebar",
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
