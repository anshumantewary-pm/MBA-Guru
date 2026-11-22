// Serves the academy, opens the main pages and every module tab in Chromium, and fails on any
// script error or empty page. usage: node academy/tools/smoke.js
const http = require("http");
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const root = path.join(__dirname, "..");
const types = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css" };
const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(req.url.split("?")[0]).replace(/^\/+/, "") || "index.html";
  const file = path.join(root, rel);
  if (!file.startsWith(root) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { "Content-Type": types[path.extname(file)] || "application/octet-stream" });
  fs.createReadStream(file).pipe(res);
});

(async () => {
  await new Promise((r) => server.listen(0, r));
  const base = `http://localhost:${server.address().port}/`;
  global.window = {};
  require(path.join(root, "content", "modules.js"));
  const ids = window.CATALOG_MODULES.map((m) => m.id);
  const pages = ["#/", "#/programme", "#/progress", "#/role/product", "#/role/sales", "#/role/marketing", "#/role/digital"];
  for (const id of ids) for (const t of ["overview", "lessons", "video", "quiz", "practice"]) pages.push(`#/module/${id}/${t}`);

  const browser = await chromium.launch();
  const page = await browser.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(`${page.url()}: ${e.message}`));
  page.on("console", (m) => { if (m.type() === "error" && !/fonts\.g/.test(m.text())) errors.push(`${page.url()}: ${m.text()}`); });
  for (const h of pages) {
    await page.goto(base + h);
    await page.waitForFunction(() => !document.querySelector(".loading"), null, { timeout: 5000 });
    const text = await page.locator("#app").innerText();
    if (text.trim().length < 200) errors.push(`${h}: page looks empty`);
    if (/coming soon|being prepared/i.test(text)) errors.push(`${h}: content missing`);
  }
  await browser.close();
  server.close();
  if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
  console.log(`OK: ${pages.length} pages rendered without errors`);
})();
