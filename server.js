const { readFileSync } = require("node:fs");
const { createServer } = require("node:http");
const { join } = require("node:path");

const port = process.env.PORT || 3000;
const files = {
  "/": ["index.html", "text/html; charset=utf-8"],
  "/index.html": ["index.html", "text/html; charset=utf-8"],
  "/styles.css": ["styles.css", "text/css; charset=utf-8"],
  "/script.js": ["script.js", "text/javascript; charset=utf-8"]
};

createServer((request, response) => {
  const file = files[new URL(request.url, "http://localhost").pathname];

  if (!file) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  response.writeHead(200, { "Content-Type": file[1] });
  response.end(readFileSync(join(__dirname, file[0])));
}).listen(port, () => console.log(`Blokedex: http://localhost:${port}`));
