import type { Block } from "payload";

export const HTMLBlock: Block = {
  slug: "htmlBlock",
  labels: {
    singular: "HTML Block",
    plural: "HTML Blocks",
  },
  fields: [
    {
      name: "html",
      type: "code",
      label: "HTML",
      admin: {
        language: "html",
      },
    },
  ],
};
