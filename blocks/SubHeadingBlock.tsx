import type { Block } from "payload";

export const SubHeadingBlock: Block = {
  slug: "subHeading",
  labels: {
    singular: "Sub Heading",
    plural: "Sub Headings",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      label: "Heading",
      required: true,
    },
    {
      name: "paragraph",
      type: "textarea",
      label: "Paragraph",
      required: true,
    },
  ],
};
