import path from "node:path";

export const fallbackLocale = process.env.FALLBACK_LOCALE ?? "en-GB";
export const resourcePath =
  process.env.RES_PATH ?? path.resolve(__dirname, "../res");
export const dataPath = `${resourcePath}/${process.env.DATA_PATH ?? "dummy"}`;
