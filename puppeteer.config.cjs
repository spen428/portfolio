const { join } = require("path");

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
  cacheDirectory: join(__dirname, ".cache", "puppeteer"),
  executablePath:
    ".cache/puppeteer/chrome/linux-119.0.6045.105/chrome-linux64/chrome",
};
