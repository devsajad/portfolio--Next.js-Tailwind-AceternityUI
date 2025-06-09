// Helper function to get Base64 placeholder from a local image file
import fs from "node:fs/promises";
import path from "node:path";
import { getPlaiceholder } from "plaiceholder";

export const getPlaceholer = async (src: string) => {
  try {
    const file = await fs.readFile(path.join(process.cwd(), "public", src));

    const { base64 } = await getPlaiceholder(file);
    return base64;
  } catch (err) {
    console.error(`Could not generate placeholder for ${src}:`, err);
    return undefined;
  }
};
