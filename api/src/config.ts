import path from "node:path";

export const fallbackLocale = process.env.FALLBACK_LOCALE ?? "en-GB";
export const resourcePath =
  process.env.RES_PATH ?? path.resolve(__dirname, "../res");
export const dataPath = `${resourcePath}/${process.env.DATA_PATH ?? "dummy"}`;
export const serverPort = process.env.PORT ?? 5000;
export const corsOrigins = (
  process.env.CORS_ORIGINS ?? "http://localhost:5173"
).split(",");
