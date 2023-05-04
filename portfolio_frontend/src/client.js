import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "jah6hw6f",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skZdNtJPMOmuU73377GEyIu2Pr8Gz3fsAe9vewlzyPyfXQO18UY2CrSEcgtSoCb5jZl8kPGpv9Vids86ZyZILPswCRQlgQZIkJLVW68YehMt8EKlxDXW62IZXHjJzPIFCyajfoqfq5RYE8MGDrKUz03k3aSHtmyG3ZjPwedQj2CizA3LwVIh",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
