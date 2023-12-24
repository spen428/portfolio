import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { RequestWithLocale } from "./model";
import DataService from "./data.service";
import {
  corsOrigins,
  fallbackLocale,
  serverHostname,
  serverPort,
} from "./config";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = serverPort;
const hostname = serverHostname;

app.use(cors({ origin: corsOrigins }));
console.log("CORS policy is allowing requests from the following origins:");
console.log(corsOrigins);

app.get("/", (_: Request, res: Response) => res.send("OK"));

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

app.listen(port, hostname, () => {
  console.log(`⚡️[server]: Server is running at http://${hostname}:${port}`);
});
