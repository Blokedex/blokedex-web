"use client";

import Link from "next/link";
import { useState } from "react";
import { articles, getCategory, normalize } from "@/data/wiki";
import { Icon } from "@/components/icon";
import { useWiki } from "@/components/wiki-shell";

export function SavedPage() {
  const { saved, toggleSaved, openSearch } = useWiki();
  const [query, setQuery] = useState("");
  const savedArticles = saved
    .map((slug) => articles.find((article) => article.slug === slug))
    .filter((article) => article !== undefined);
  const words = normalize(query.trim()).split(/\s+/).filter(Boolean);
  const filtered = savedArticles.filter((article) => {
    const text = normalize(
      `${article.title} ${article.description} ${article.tags.join(" ")} ${getCategory(article.category).label}`,
    );
    return words.every((word) => text.includes(word));
  });

  return (
    <div className="saved-page page-enter">
      <nav className="breadcrumb" aria-label="Ruta de navegación">
        <Link href="/">La wiki</Link>
        <Icon name="chevron-right" size={13} />
        <span aria-current="page">Guías guardadas</span>
      </nav>
      <header className="article-header">
        <p className="eyebrow">TU PROPIA COLECCIÓN</p>
        <h1>
          Tus guías, <span className="accent-text">siempre a mano.</span>
        </h1>
        <p className="article-intro">
          Un lugar para esos descubrimientos a los que quieres volver. Tus guías
          se guardan en este navegador.
        </p>
      </header>

      {savedArticles.length > 0 ? (
        <>
          <div className="saved-toolbar">
            <label className="saved-search">
              <Icon name="search" size={19} />
              <input
                type="search"
                placeholder="Buscar en tus guías..."
                aria-label="Buscar en guías guardadas"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              {query && (
                <button
                  type="button"
                  className="icon-button"
                  aria-label="Borrar búsqueda"
                  onClick={() => setQuery("")}
                >
                  <Icon name="x" size={16} />
                </button>
              )}
            </label>
            <span className="saved-results-count" aria-live="polite">
              {filtered.length} {filtered.length === 1 ? "guía" : "guías"}
              {query && ` de ${savedArticles.length}`}
            </span>
          </div>
          {filtered.length > 0 ? (
            <div className="guide-grid">
              {filtered.map((article) => (
                <article
                  className={`guide-card ${article.category}`}
                  key={article.slug}
                >
                  <div className="saved-card-top">
                    <span className={`card-icon ${article.category}`}>
                      <Icon name={article.icon} size={25} />
                    </span>
                    <button
                      type="button"
                      className="icon-button"
                      onClick={() => toggleSaved(article.slug)}
                      aria-label={`Quitar ${article.title} de guías guardadas`}
                      title="Quitar de guardadas"
                    >
                      <Icon name="bookmark" size={19} />
                    </button>
                  </div>
                  <Link
                    className="saved-card-link"
                    href={`/wiki/${article.slug}/`}
                  >
                    <span className="eyebrow">
                      {getCategory(article.category).label}
                    </span>
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                    <span className="saved-card-meta">
                      <span>
                        <Icon name="clock" size={14} /> {article.readingMinutes}{" "}
                        min de lectura
                      </span>
                      <Icon name="arrow-right" size={18} />
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <Icon name="search" size={38} />
              <h2>No hay coincidencias en tu colección</h2>
              <p>Prueba con otra palabra o vuelve a ver todas tus guías.</p>
              <button
                type="button"
                className="button button-secondary"
                onClick={() => setQuery("")}
              >
                Ver todas las guardadas
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="empty-state">
          <span className="article-heading-icon">
            <Icon name="bookmark" size={36} />
          </span>
          <p className="eyebrow">AQUÍ EMPIEZA TU COLECCIÓN</p>
          <h2>Una buena guía merece guardarse.</h2>
          <p>
            Pulsa «Guardar guía» en cualquier artículo para encontrarlo aquí. Tu
            próxima aventura puede empezar por una pequeña idea.
          </p>
          <div className="article-actions">
            <Link className="button button-primary" href="/#explora">
              Explorar las guías <Icon name="arrow-right" size={17} />
            </Link>
            <button
              type="button"
              className="button button-secondary"
              onClick={openSearch}
            >
              <Icon name="search" size={17} />
              Buscar una mecánica
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
