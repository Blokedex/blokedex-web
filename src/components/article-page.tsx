"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getArticle, getCategory } from "@/data/wiki";
import type { WikiArticle } from "@/data/types";
import { Icon } from "@/components/icon";
import { useWiki } from "@/components/wiki-shell";

export function ArticlePage({ article }: { article: WikiArticle }) {
  const { saved, toggleSaved, openSearch } = useWiki();
  const category = getCategory(article.category);
  const isSaved = saved.includes(article.slug);
  const bodyRef = useRef<HTMLDivElement>(null);
  const feedbackTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [activeSection, setActiveSection] = useState(
    article.sections[0]?.id ?? "",
  );
  const [progress, setProgress] = useState(0);
  const [copyFeedback, setCopyFeedback] = useState("");
  const [manualLink, setManualLink] = useState("");
  const related = [...new Set(article.related)]
    .map(getArticle)
    .filter(
      (item): item is WikiArticle =>
        Boolean(item) && item?.slug !== article.slug,
    )
    .slice(0, 3);

  useEffect(() => {
    let frame = 0;
    function updateReading() {
      frame = 0;
      const body = bodyRef.current;
      if (!body) return;
      const bounds = body.getBoundingClientRect();
      const distance = Math.max(1, bounds.height - window.innerHeight + 160);
      setProgress(
        Math.round(
          Math.min(1, Math.max(0, (160 - bounds.top) / distance)) * 100,
        ),
      );
      let current = article.sections[0]?.id ?? "";
      for (const section of article.sections) {
        const element = document.getElementById(section.id);
        if (element && element.getBoundingClientRect().top <= 190)
          current = section.id;
      }
      setActiveSection(current);
    }
    function scheduleUpdate() {
      if (!frame) frame = requestAnimationFrame(updateReading);
    }
    updateReading();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [article.slug, article.sections]);

  useEffect(
    () => () => {
      if (feedbackTimer.current) clearTimeout(feedbackTimer.current);
    },
    [],
  );

  async function copyLink() {
    const url = `${window.location.origin}/wiki/${article.slug}/`;
    let copied = false;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
        copied = true;
      }
    } catch {
      /* Older browsers can use the selection fallback below. */
    }
    if (!copied) {
      const previousFocus = document.activeElement;
      const field = document.createElement("textarea");
      field.value = url;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      try {
        copied = document.execCommand("copy");
      } catch {
        copied = false;
      }
      field.remove();
      if (previousFocus instanceof HTMLElement)
        previousFocus.focus({ preventScroll: true });
    }
    setManualLink(copied ? "" : url);
    setCopyFeedback(
      copied ? "Enlace copiado" : "Selecciona el enlace para copiarlo.",
    );
    if (feedbackTimer.current) clearTimeout(feedbackTimer.current);
    feedbackTimer.current = setTimeout(() => setCopyFeedback(""), 3500);
  }

  return (
    <div className="article-layout page-enter">
      <div className="article-content">
        <nav className="breadcrumb" aria-label="Ruta de navegación">
          <Link href="/">La wiki</Link>
          <Icon name="chevron-right" size={13} />
          <Link href={`/?categoria=${category.id}#explora`}>
            {category.label}
          </Link>
          <Icon name="chevron-right" size={13} />
          <span aria-current="page">{article.title}</span>
        </nav>

        <header className="article-header">
          <div className="article-meta">
            <span className="eyebrow">{category.label}</span>
            <span>
              <Icon name="clock" size={14} /> {article.readingMinutes} min de
              lectura
            </span>
          </div>
          <span className={`article-heading-icon ${article.category}`}>
            <Icon name={article.icon} size={31} />
          </span>
          <h1>{article.title}</h1>
          <p className="article-intro">{article.description}</p>
          <div className="article-actions">
            <button
              type="button"
              className={`button ${isSaved ? "button-primary" : "button-secondary"}`}
              aria-pressed={isSaved}
              onClick={() => toggleSaved(article.slug)}
            >
              <Icon name={isSaved ? "check" : "bookmark"} size={17} />
              {isSaved ? "Guía guardada" : "Guardar guía"}
            </button>
            <button
              type="button"
              className="button button-secondary"
              onClick={copyLink}
            >
              <Icon
                name={copyFeedback === "Enlace copiado" ? "check" : "link"}
                size={17}
              />
              Compartir
            </button>
            <span className="copy-feedback" role="status" aria-live="polite">
              {copyFeedback}
            </span>
          </div>
          {manualLink && (
            <label className="copy-link-fallback">
              Enlace de esta guía
              <input
                readOnly
                value={manualLink}
                onFocus={(event) => event.currentTarget.select()}
                aria-label="Enlace para copiar manualmente"
              />
            </label>
          )}
          <p className="article-review">
            <Icon name="shield-check" size={14} /> Revisada el{" "}
            <time dateTime="2026-09-09">9 de septiembre de 2026</time>
          </p>
          <details className="mobile-toc">
            <summary>
              En esta guía <Icon name="chevron-down" size={16} />
            </summary>
            <nav aria-label="Secciones de la guía">
              {article.sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`toc-link ${activeSection === section.id ? "is-active" : ""}`}
                  onClick={(event) => {
                    setActiveSection(section.id);
                    event.currentTarget
                      .closest("details")
                      ?.removeAttribute("open");
                  }}
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </details>
        </header>

        <div className="article-body" ref={bodyRef}>
          {article.sections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              className="article-section"
              aria-labelledby={`${section.id}-title`}
            >
              <h2 id={`${section.id}-title`} className="article-section-title">
                <span aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex}>{paragraph}</p>
              ))}
              {section.bullets && (
                <ul>
                  {section.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex}>{bullet}</li>
                  ))}
                </ul>
              )}
              {section.callout && (
                <aside
                  className={`callout callout-${section.callout.type}`}
                  aria-label={section.callout.title}
                >
                  <Icon
                    name={
                      section.callout.type === "tip"
                        ? "sparkles"
                        : section.callout.type === "warning"
                          ? "shield"
                          : "info"
                    }
                    size={21}
                  />
                  <div>
                    <h3>{section.callout.title}</h3>
                    <p>{section.callout.text}</p>
                  </div>
                </aside>
              )}
            </section>
          ))}
        </div>

        <div className="article-tag-list" aria-label="Temas de esta guía">
          {article.tags.map((tag) => (
            <span className="article-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        {related.length > 0 && (
          <section className="related-guides" aria-labelledby="related-title">
            <div className="section-heading">
              <div>
                <p className="eyebrow">SIGUE EXPLORANDO</p>
                <h2 id="related-title">Tu siguiente descubrimiento</h2>
              </div>
            </div>
            {related.map((item) => (
              <Link
                href={`/wiki/${item.slug}/`}
                className="related-card"
                key={item.slug}
              >
                <span className={`related-card-icon ${item.category}`}>
                  <Icon name={item.icon} size={22} />
                </span>
                <span className="related-card-copy">
                  <small>{getCategory(item.category).label}</small>
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </span>
                <Icon
                  name="arrow-right"
                  size={20}
                  className="related-card-arrow"
                />
              </Link>
            ))}
          </section>
        )}
      </div>

      <aside className="article-toc" aria-label="Índice de esta guía">
        <p className="article-toc-heading">EN ESTA GUÍA</p>
        <nav>
          {article.sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`toc-link ${activeSection === section.id ? "is-active" : ""}`}
              aria-current={
                activeSection === section.id ? "location" : undefined
              }
              onClick={() => setActiveSection(section.id)}
            >
              {section.title}
            </a>
          ))}
        </nav>
        <div className="toc-progress-label">
          <span>Tu progreso</span>
          <span>{progress}%</span>
        </div>
        <div
          className="reading-progress"
          role="progressbar"
          aria-label="Progreso de lectura"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
        >
          <span
            className="reading-progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <button
          type="button"
          className="button button-secondary"
          onClick={openSearch}
        >
          <Icon name="search" size={16} />
          Buscar otra guía
        </button>
      </aside>
    </div>
  );
}
