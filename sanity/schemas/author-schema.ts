const author = {
  name: "author",
  title: "Autori",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Ime",
      type: "string",
      required: true,
    },
    {
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};

export default author;
