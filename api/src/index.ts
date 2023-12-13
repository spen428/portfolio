import express, { Express, Response } from "express";
import dotenv from "dotenv";
import { RequestWithLocale } from "./model";
import DataService from "./data.service";
import { corsOrigins, fallbackLocale, serverPort } from "./config";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = serverPort;

app.use(cors({ origin: corsOrigins }));
console.log(corsOrigins);
app.get("/", (_, res: Response) => {
  res.send("OK");
});

app.get("/cv/data", (req: RequestWithLocale, res: Response) => {
  const locale = req.query.locale?.toString() ?? fallbackLocale;
  return res.json(DataService.getCvData(locale));
});
app.get("/cv/projects", (req: RequestWithLocale, res: Response) => {
  const locale = req.query.locale?.toString() ?? fallbackLocale;
  return res.json(DataService.getProjects(locale));
});
app.get("/cv/personal-info", (req: RequestWithLocale, res: Response) => {
  const locale = req.query.locale?.toString() ?? fallbackLocale;
  return res.json(DataService.getPersonalInfo(locale));
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
