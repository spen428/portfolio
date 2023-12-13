import express, { Express, Response } from "express";
import dotenv from "dotenv";
import { RequestWithLocale } from "./model";
import DataService from "./data.service";
import { fallbackLocale } from "./config";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = 5000;

app.use(cors({ origin: ["http://localhost:5173", "http://10.4.4.125:5173"] }));

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
