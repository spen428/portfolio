import path from "node:path";

export const fallbackLocale = process.env.FALLBACK_LOCALE ?? "en-GB";
export const resourcePath =
  process.env.RES_PATH ?? path.resolve(__dirname, "../res");
export const dataPath = `${resourcePath}/${process.env.DATA_PATH ?? "dummy"}`;
export const serverPort = parseInt(process.env.SERVER_PORT ?? "15000");
export const serverHostname = process.env.SERVER_HOSTNAME ?? "localhost";
export const corsOrigins = (
  process.env.CORS_ORIGINS ?? "http://localhost:5173"
).split(",");
