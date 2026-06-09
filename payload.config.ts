import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Categories } from "./collections/Categories";
import { Projects } from "./collections/Projects";
import { en } from "@payloadcms/translations/languages/en";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  i18n: {
    translations: {
      en: {
        "plugin-seo": {
          almostThere: "Almost there",
          autoGenerate: "Auto-generate",
          bestPractices: "best practices",
          characterCount: "{{current}}/{{minLength}}-{{maxLength}} chars, ",
          charactersLeftOver: "{{characters}} left over",
          charactersToGo: "{{characters}} to go",
          charactersTooMany: "{{characters}} too many",
          checksPassing: "{{current}}/{{max}} checks are passing",
          good: "Good",
          imageAutoGenerationTip:
            "Auto-generation will retrieve the selected hero image.",
          lengthTipDescription:
            "This should be between {{minLength}} and {{maxLength}} characters. For help in writing quality meta descriptions, see ",
          lengthTipTitle:
            "This should be between {{minLength}} and {{maxLength}} characters. For help in writing quality meta titles, see ",
          missing: "Missing",
          noImage: "No image",
          preview: "Preview",
          previewDescription:
            "Exact result listings may vary based on content and search relevancy.",
          tooLong: "Too long",
          tooShort: "Too short",
        },
      },
    },
  },

  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    livePreview: {
      url: "http://localhost:3000",
      collections: ["projects"],
    },
  },
  collections: [Users, Media, Categories, Projects],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL || "",
    },
  }),

  sharp,
  plugins: [],
});
