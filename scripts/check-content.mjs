import { readFileSync } from "node:fs";
import ts from "typescript";

async function load(file, key) {
  const source = readFileSync(
    new URL(`../src/data/${file}.ts`, import.meta.url),
    "utf8",
  );
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2022,
    },
  });
  return (
    await import(
      `data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`
    )
  )[key];
}
const articles = [
  ...(await load("pokemon", "pokemonArticles")),
  ...(await load("world", "worldArticles")),
];
const errors = [];
const slugs = new Set();
const check = (condition, message) => {
  if (!condition) errors.push(message);
};
for (const a of articles) {
  check(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(a.slug), `Slug inválido: ${a.slug}`);
  check(!slugs.has(a.slug), `Slug duplicado: ${a.slug}`);
  slugs.add(a.slug);
  check(
    ["pokemon", "aventura", "comunidad"].includes(a.category),
    `Categoría inválida: ${a.slug}`,
  );
  check(
    a.title?.trim() &&
      a.description?.trim() &&
      a.sections?.length > 0 &&
      a.tags?.length > 0 &&
      a.readingMinutes > 0,
    `Artículo incompleto: ${a.slug}`,
  );
  const ids = new Set();
  for (const s of a.sections) {
    check(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(s.id) && !ids.has(s.id),
      `Sección inválida/duplicada: ${a.slug}#${s.id}`,
    );
    ids.add(s.id);
    check(
      s.title?.trim() &&
        s.paragraphs?.length &&
        s.paragraphs.every((p) => p.trim()),
      `Sección vacía: ${a.slug}#${s.id}`,
    );
  }
  const publicText = JSON.stringify(a);
  check(
    !/(?:Sebi\s+Cobble|Sergio(?:Jobs|Chat|Day)|[A-Z]:\\|api[_-]?key|password|BEGIN PRIVATE KEY)/i.test(
      publicText,
    ),
    `Dato técnico o privado: ${a.slug}`,
  );
  check(
    !/(?:^|[\s"'`])\/[a-z][a-z0-9_-]*(?:\s|["'`])/i.test(publicText),
    `Posible comando del juego: ${a.slug}`,
  );
}
for (const a of articles)
  for (const slug of a.related)
    check(
      slugs.has(slug) && slug !== a.slug,
      `Relacionado inválido: ${a.slug} → ${slug}`,
    );
for (const slug of [
  "primeros-pasos",
  "menus",
  "exploracion",
  "tu-equipo",
  "crianza",
  "fusiones",
  "legendarios",
  "medallas",
  "misiones",
  "economia",
  "gts",
  "protecciones",
  "clanes",
  "recompensas",
])
  check(slugs.has(slug), `Destino de navegación ausente: ${slug}`);
if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else
  console.log(
    `${articles.length} guías y ${articles.reduce((sum, a) => sum + a.sections.length, 0)} secciones verificadas: enlaces válidos, estructura completa y sin comandos de juego.`,
  );
