"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { articles, categories, getCategory } from "@/data/wiki";
import type { CategoryId, WikiArticle } from "@/data/types";
import { Icon } from "./icon";
import { useWiki } from "./wiki-shell";

export function GuideCard({ article }: { article: WikiArticle }) {
  const { saved, toggleSaved } = useWiki();
  const isSaved = saved.includes(article.slug);
  return (
    <div className={`guide-card ${article.category}`}>
      <Link className="guide-card-link" href={`/wiki/${article.slug}/`}>
        <div className="guide-card-top">
          <span className="guide-icon">
            <Icon name={article.icon} size={22} />
          </span>
          <span className="guide-category">
            {getCategory(article.category).label}
          </span>
        </div>
        <h3>
          {article.title}
          <Icon name="arrow-right" size={18} />
        </h3>
        <p>{article.description}</p>
        <div className="guide-card-bottom">
          <span>
            <Icon name="clock" size={13} /> {article.readingMinutes} min de
            lectura
          </span>
          <span>
            Leer guía <Icon name="arrow-right" size={13} />
          </span>
        </div>
      </Link>
      <button
        className={`card-save icon-button ${isSaved ? "is-saved" : ""}`}
        aria-label={`${isSaved ? "Quitar de" : "Añadir a"} guardadas: ${article.title}`}
        aria-pressed={isSaved}
        onClick={() => toggleSaved(article.slug)}
      >
        <Icon name="bookmark" size={17} />
      </button>
    </div>
  );
}

export function HomePage() {
  const { openSearch } = useWiki();
  const [filter, setFilter] = useState<CategoryId | "all">("all");
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    const category = new URLSearchParams(window.location.search).get(
      "categoria",
    );
    if (
      category === "pokemon" ||
      category === "aventura" ||
      category === "comunidad"
    )
      setFilter(category);
  }, []);
  const filtered = useMemo(() => {
    const order = [
      "crianza",
      "fusiones",
      "medallas",
      "protecciones",
      "gts",
      "clanes",
    ];
    return articles
      .filter((article) => filter === "all" || article.category === filter)
      .sort((a, b) => {
        const ai = order.indexOf(a.slug);
        const bi = order.indexOf(b.slug);
        return (ai < 0 ? 100 : ai) - (bi < 0 ? 100 : bi);
      });
  }, [filter]);

  function selectCategory(category: CategoryId | "all") {
    setFilter(category);
    setShowAll(false);
  }

  return (
    <div className="home-page page-enter">
      <div className="page-context">
        <div className="breadcrumb">
          <Icon name="home" size={14} />
          <Icon name="chevron-right" size={13} />
          <span>Bienvenido a la wiki</span>
        </div>
        <span className="context-note">
          <span className="mini-spark">✧</span> Un mundo de posibilidades
        </span>
      </div>
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero-image"
          src="/images/hero-world.webp"
          alt="Ilustración de un valle de Minecraft con bosques, montañas y un lago turquesa"
          fetchPriority="high"
          width="1672"
          height="941"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <span className="hero-eyebrow">
            <span /> TU COMPAÑERA DE AVENTURAS
          </span>
          <h1 id="hero-title">
            Un mundo de bloques.
            <br />
            Infinitas <span>historias.</span>
          </h1>
          <p>
            Todo lo que necesitas para vivir Blokedex.
            <br className="desktop-break" /> Descubre sus mecánicas, encuentra
            tu camino
            <br className="desktop-break" /> y lleva tu aventura al siguiente
            nivel.
          </p>
          <div className="hero-actions">
            <Link
              href="/wiki/primeros-pasos/"
              className="button button-primary"
            >
              Empieza tu aventura <Icon name="arrow-right" size={17} />
            </Link>
            <button className="hero-search" onClick={openSearch}>
              <Icon name="search" size={18} /> Buscar una guía
            </button>
          </div>
        </div>
        <div className="hero-bottom">
          <span>
            <Icon name="pokeball" size={15} /> COBBLEMON
          </span>
          <span className="hero-dot" />
          <span>
            <Icon name="mountain" size={15} /> SUPERVIVENCIA
          </span>
          <span className="hero-dot" />
          <span>
            <Icon name="users" size={15} /> COMUNIDAD
          </span>
        </div>
        <div className="hero-coordinate">
          <Icon name="compass" size={18} />
          <span>
            EL SIGUIENTE CAPÍTULO
            <br />
            <strong>LO ESCRIBES TÚ</strong>
          </span>
        </div>
      </section>

      <section className="start-banner" aria-label="Guía de inicio">
        <span className="start-icon">
          <Icon name="book-open" size={24} />
        </span>
        <div>
          <h2>
            ¿Acabas de llegar a Blokedex?{" "}
            <span>Estás en el lugar correcto.</span>
          </h2>
          <p>
            Tu primer equipo, los menús y todo lo esencial para empezar con buen
            pie.
          </p>
        </div>
        <Link href="/wiki/primeros-pasos/">
          Ver primeros pasos <Icon name="arrow-right" size={17} />
        </Link>
      </section>

      <section className="category-section" aria-labelledby="category-title">
        <div className="section-heading">
          <div>
            <span className="eyebrow">ELIGE TU CAMINO</span>
            <h2 id="category-title">¿Qué quieres descubrir?</h2>
          </div>
          <span className="section-detail">
            Un lugar para cada parte de tu aventura.
          </span>
        </div>
        <div className="category-grid">
          {categories.map((category, index) => (
            <a
              key={category.id}
              href="#explora"
              className={`category-card ${category.id}`}
              onClick={() => selectCategory(category.id)}
            >
              <div className="category-top">
                <span className="category-number">0{index + 1}</span>
                <span className="category-arrow">
                  <Icon name="arrow-right" size={18} />
                </span>
              </div>
              <div className="category-art">
                <div className="art-orbit orbit-one" />
                <div className="art-orbit orbit-two" />
                <span className="art-center">
                  <Icon name={category.icon} size={64} />
                </span>
                <span className="art-star star-one">✦</span>
                <span className="art-star star-two">+</span>
                <span className="art-diamond" />
              </div>
              <span className="category-eyebrow">{category.eyebrow}</span>
              <h3>{category.label}</h3>
              <p>{category.description}</p>
              <span className="category-count">
                {
                  articles.filter((article) => article.category === category.id)
                    .length
                }{" "}
                guías para explorar <Icon name="chevron-right" size={14} />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section
        id="explora"
        className="explore-section"
        aria-labelledby="guides-title"
      >
        <div className="section-heading">
          <div>
            <span className="eyebrow">A UN PASO DE SABER MÁS</span>
            <h2 id="guides-title">Pequeñas guías. Grandes aventuras.</h2>
          </div>
          <span className="article-total">
            <Icon name="book-open" size={15} /> {articles.length} guías
          </span>
        </div>
        <div
          className="filter-row"
          role="group"
          aria-label="Filtrar guías por categoría"
        >
          <button
            className={
              filter === "all" ? "filter-button active" : "filter-button"
            }
            aria-pressed={filter === "all"}
            onClick={() => selectCategory("all")}
          >
            Todas las guías
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              className={
                filter === category.id
                  ? "filter-button active"
                  : "filter-button"
              }
              aria-pressed={filter === category.id}
              onClick={() => selectCategory(category.id)}
            >
              <Icon name={category.icon} size={15} />
              {category.label}
            </button>
          ))}
        </div>
        <div className="guide-grid" key={filter}>
          {(showAll ? filtered : filtered.slice(0, 6)).map((article) => (
            <GuideCard key={article.slug} article={article} />
          ))}
        </div>
        <div className="guides-more">
          <span aria-live="polite">
            {Math.min(showAll ? filtered.length : 6, filtered.length)} de{" "}
            {filtered.length} guías
          </span>
          {filtered.length > 6 && (
            <button
              className="button button-secondary"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Mostrar menos" : "Explorar todas las guías"}
              <Icon name={showAll ? "arrow-right" : "arrow-down"} size={16} />
            </button>
          )}
        </div>
      </section>

      <section className="journey-section" aria-labelledby="journey-title">
        <div className="journey-intro">
          <span className="eyebrow">PASO A PASO, A TU RITMO</span>
          <h2 id="journey-title">
            Tu historia
            <br />
            empieza <span>aquí.</span>
          </h2>
          <p>
            No hace falta saberlo todo.
            <br />
            Solo dar el primer paso.
          </p>
          <Icon name="compass" size={82} />
        </div>
        <div className="journey-steps">
          {[
            {
              number: "01",
              title: "Familiarízate con tu nuevo mundo",
              text: "Conoce los menús y encuentra las herramientas para tu aventura.",
              slug: "primeros-pasos",
              icon: "compass",
            },
            {
              number: "02",
              title: "Dale forma a tu equipo",
              text: "Aprende a consultar tus Pokémon y prepáralos para lo que viene.",
              slug: "tu-equipo",
              icon: "pokeball",
            },
            {
              number: "03",
              title: "Haz de Blokedex tu hogar",
              text: "Protege tu espacio y descubre todo lo que ofrece jugar en comunidad.",
              slug: "protecciones",
              icon: "shield-check",
            },
          ].map((step) => (
            <Link
              href={`/wiki/${step.slug}/`}
              key={step.number}
              className="journey-step"
            >
              <span className="step-number">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
              <Icon name="arrow-right" size={19} />
            </Link>
          ))}
        </div>
      </section>

      <section className="help-banner">
        <div className="help-symbol">
          <Icon name="circle-help" size={26} />
        </div>
        <div>
          <h2>La respuesta puede estar más cerca de lo que crees.</h2>
          <p>Busca una mecánica, un objeto o eso que te da curiosidad.</p>
        </div>
        <button className="button button-secondary" onClick={openSearch}>
          <Icon name="search" size={16} /> Buscar en la wiki
        </button>
      </section>
    </div>
  );
}
