module.exports = async (page, scenario, vp) => {
  await page.goto("http://localhost:5173");
  await page.evaluate(() => {
    localStorage.setItem("defaultLocale", "ja-JP");
  });
};
