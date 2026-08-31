const { readFileSync } = require("node:fs");
const { createServer } = require("node:http");
const { join } = require("node:path");

const port = process.env.PORT || 3000;
const page = readFileSync(join(__dirname, "index.html"));

createServer((_, response) => {
  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  response.end(page);
}).listen(port, () => console.log(`Blokedex: http://localhost:${port}`));
