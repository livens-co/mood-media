const category = {
  name: "category",
  title: "Kategorije",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Ime",
      type: "string",
      required: true,
    },
    {
      name: "key",
      title: "ID",
      type: "string",
      required: true,
    }
  ],
}

export default category;