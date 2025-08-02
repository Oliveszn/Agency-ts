import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "q7pyjitk",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-08-05",
});

export default client;
