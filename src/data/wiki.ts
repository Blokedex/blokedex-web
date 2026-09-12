import { pokemonArticles } from "./pokemon";
import { worldArticles } from "./world";
import type { CategoryId } from "./types";

export const articles = [...worldArticles, ...pokemonArticles];
export const categories: {
  id: CategoryId;
  label: string;
  eyebrow: string;
  description: string;
  icon: string;
}[] = [
  {
    id: "pokemon",
    label: "Universo Pokémon",
    eyebrow: "CAPTURA. ENTRENA. EVOLUCIONA.",
    description:
      "De tu primer compañero a un equipo extraordinario. Descubre todo su potencial.",
    icon: "pokeball",
  },
  {
    id: "aventura",
    label: "Tu aventura",
    eyebrow: "EXPLORA. CONSTRUYE. PROGRESA.",
    description:
      "Encuentra tu lugar, protege lo que construyes y haz que cada expedición cuente.",
    icon: "compass",
  },
  {
    id: "comunidad",
    label: "Juega en comunidad",
    eyebrow: "CONECTA. COMPARTE. CRECE.",
    description:
      "Comercia, forma un clan y descubre lo que podéis conseguir juntos.",
    icon: "users",
  },
];
export const getArticle = (slug: string) =>
  articles.find((article) => article.slug === slug);
export const getCategory = (id: CategoryId) =>
  categories.find((category) => category.id === id)!;
export const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("es");
export function searchArticles(query: string) {
  const words = normalize(query.trim()).split(/\s+/).filter(Boolean);
  if (!words.length)
    return articles.filter((article) => article.featured).slice(0, 6);
  return articles
    .map((article) => {
      const title = normalize(article.title + " " + article.tags.join(" "));
      const full = normalize(
        article.description +
          " " +
          article.sections
            .map(
              (section) =>
                section.title +
                " " +
                section.paragraphs.join(" ") +
                " " +
                (section.bullets ?? []).join(" ") +
                " " +
                (section.callout?.text ?? ""),
            )
            .join(" "),
      );
      const score = words.every(
        (word) => title.includes(word) || full.includes(word),
      )
        ? words.reduce(
            (total, word) => total + (title.includes(word) ? 5 : 1),
            0,
          )
        : 0;
      return { article, score };
    })
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((result) => result.article);
}
