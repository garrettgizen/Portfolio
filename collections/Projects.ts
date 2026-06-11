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
  orderable: true,
  slug: "projects",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "title",
    group: "Content",
    preview: (doc: { slug?: string }) =>
      `${process.env.NEXT_PUBLIC_SITE_URL}/portfolio/${doc?.slug}`,
  },
  hooks: {
    beforeChange: [
      async ({ data, req }) => {
        if (data.slug && data.category) {
          const category = await req.payload.findByID({
            collection: "categories",
            id: data.category,
          });
          data.url = `/portfolio/${category.slug}/${data.slug}`;
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
              defaultValue: {
                root: {
                  children: [
                    {
                      type: "block",
                      version: 2,
                      format: "",
                      fields: {
                        heading: "The Brief",
                        paragraph:
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        blockName: "The brief",
                        blockType: "subHeading",
                      },
                    },
                    {
                      type: "block",
                      version: 2,
                      format: "",
                      fields: {
                        gallery: [],
                        blockName: "Brief Gallery",
                        blockType: "gallery",
                      },
                    },
                    {
                      type: "block",
                      version: 2,
                      format: "",
                      fields: {
                        heading: "The Problem",
                        paragraph:
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        blockName: "The problem",
                        blockType: "subHeading",
                      },
                    },
                    {
                      type: "block",
                      version: 2,
                      format: "",
                      fields: {
                        gallery: [],
                        blockName: "",
                        blockType: "gallery",
                      },
                    },
                    {
                      type: "block",
                      version: 2,
                      format: "",
                      fields: {
                        heading: "The Results",
                        paragraph:
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        blockName: "The Results",
                        blockType: "subHeading",
                      },
                    },
                    {
                      children: [],
                      direction: null,
                      format: "",
                      indent: 0,
                      type: "paragraph",
                      version: 1,
                      textFormat: 0,
                      textStyle: "",
                    },
                  ],
                  direction: null,
                  format: "",
                  indent: 0,
                  type: "root",
                  version: 1,
                },
              },
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
            MetaDescriptionField({ hasGenerateFn: true }),
            MetaImageField({ relationTo: "media" }),
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
