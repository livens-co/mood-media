import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;

const config = defineConfig({
  basePath: "/admin",
  title: "Mood Media",

  projectId,
  dataset,
  apiVersion, 
  useCdn: true,

  plugins: [deskTool(), visionTool()],

  schema: { types: schemas },
});

export default config;
