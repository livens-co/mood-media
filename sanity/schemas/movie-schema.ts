const movie = {
  name: "movie",
  title: "Filmovi",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Naslov",
      type: "string",
      required: true,
    },
    {
      name: "banner",
      title: "Banner",
      type: "image",
      required: true,
    },
    {
      name: "link",
      title: "Link",
      type: "url",
      required: true,
    },
  ],
};

export default movie;