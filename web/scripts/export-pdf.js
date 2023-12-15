import fs from "fs";
import puppeteer from "puppeteer";

async function exportPdf(url, filename) {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto(url, {
    waitUntil: "networkidle0",
  });
  if (!fs.existsSync("./bin")) {
    fs.mkdirSync("./bin");
  }
  const path = `./bin/${filename}.pdf`;
  await page.pdf({
    format: "A4",
    path,
    margin: { top: "10mm", left: "10mm", bottom: "10mm", right: "10mm" },
  });
  await browser.close();
  console.log("Exported PDF to " + path);
}

(async () => {
  await exportPdf("http://localhost:5173/cv", "CV");
  await exportPdf("http://localhost:5173/test/breakpoints", "breakpoints");
})();
