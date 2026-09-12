import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { resolve, sep, extname } from "node:path";

const root = resolve("out");
if (!existsSync(resolve(root, "index.html"))) {
  console.error("Primero ejecuta npm run build para generar la wiki.");
  process.exit(1);
}
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".txt": "text/plain",
  ".xml": "application/xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
};
const port = Number(process.env.PORT || 3000);
createServer((req, res) => {
  let pathname;
  try {
    pathname = decodeURIComponent(
      new URL(req.url, "http://localhost").pathname,
    );
  } catch {
    res.writeHead(400).end("Solicitud no válida");
    return;
  }
  if (!["GET", "HEAD"].includes(req.method)) {
    res.writeHead(405, { Allow: "GET, HEAD" }).end();
    return;
  }
  let path = resolve(root, `.${pathname}`);
  if (path !== root && !path.startsWith(root + sep)) {
    res.writeHead(403).end();
    return;
  }
  if (existsSync(path) && statSync(path).isDirectory())
    path = resolve(path, "index.html");
  const found = existsSync(path) && statSync(path).isFile();
  if (!found) path = resolve(root, "404.html");
  res.writeHead(found ? 200 : 404, {
    "Content-Type": mime[extname(path)] || "application/octet-stream",
    "X-Content-Type-Options": "nosniff",
  });
  if (req.method === "HEAD") res.end();
  else
    createReadStream(path)
      .on("error", () => res.destroy())
      .pipe(res);
}).listen(port, "127.0.0.1", () =>
  console.log(`Blokedex Wiki: http://localhost:${port}`),
);
