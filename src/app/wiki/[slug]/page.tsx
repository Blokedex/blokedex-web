import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/data/wiki";
import { ArticlePage } from "@/components/article-page";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/wiki/${slug}/` },
    openGraph: {
      title: `${article.title} · Blokedex Wiki`,
      description: article.description,
      type: "article",
      locale: "es_ES",
      images: [{ url: "/images/hero-world.webp", width: 1672, height: 941 }],
    },
  };
}

export default async function WikiArticleRoute({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  return <ArticlePage key={article.slug} article={article} />;
}
