import { normalize } from "normalize-diacritics";
import { isUniqueAcrossAllDocuments } from "@/lib/isUniqueAcrossAllDocuments";

const article = {
  name: "article",
  title: "Članci",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Naslov",
      type: "string",
      required: true,
    },
    {
      name: "slug",
      title: "URL nastavak",
      type: "slug",
      options: {
        source: "title",
        isUnique: isUniqueAcrossAllDocuments,
        slugify: async (input: string) => {
          const normalizedInput = await normalize(input);
          return normalizedInput
            .toLowerCase()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_]+/g, "-");
        },
      },
      required: true,
    },
    {
      name: "date",
      title: "Datum",
      type: "date",
      options: {
        dateFormat: "D.M.YYYY",
      },
      // required: true,
    },
    {
      name: "thumbnail",
      title: "Naslovna slika",
      type: "image",
      options: {
        hotspot: true,
      },
      required: true,
    },
    {
      name: "body",
      title: "Članak",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
      required: true,
    },
    // {
    //   name: "author",
    //   title: "Autor",
    //   type: "reference",
    //   to: [{ type: "author" }],
    //   required: true,
    // },
    {
      name: "authors",
      title: "Autori",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "author" }],
        },
      ],
    },
    {
      name: "categories",
      title: "Kategorije",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }],
        },
      ],
    },
    {
      name: "creators",
      title: "Kreatori",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "creator" }],
        },
      ],
    },
  ],
};

export default article;
