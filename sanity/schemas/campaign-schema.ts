const campaign = {
  name: 'campaign',
  title: "Kampanje",
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Naslov',
      type:'string',
      required: true
    },
    {
      name: "position",
      title: "Position",
      type: "number",
    },
    {
      name: "image",
      title: "Slika",
      type: "image",
      required: true,
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
    },
    {
      title: 'Video',
      name: 'video',
      type: 'mux.video',
    },
    {
      title: 'Playback ID',
      name: 'playbackId',
      type:'string',
    }
  ]
}

export default campaign;