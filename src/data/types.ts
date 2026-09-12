export type CategoryId = "pokemon" | "aventura" | "comunidad";

export interface WikiArticle {
  slug: string;
  title: string;
  description: string;
  category: CategoryId;
  icon: string;
  readingMinutes: number;
  featured?: boolean;
  tags: string[];
  sections: {
    id: string;
    title: string;
    paragraphs: string[];
    bullets?: string[];
    callout?: { title: string; text: string; type: "tip" | "info" | "warning" };
  }[];
  related: string[];
}
