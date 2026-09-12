"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { articles, categories, getCategory, searchArticles } from "@/data/wiki";
import { Icon } from "./icon";

type WikiContextType = {
  saved: string[];
  toggleSaved: (slug: string) => void;
  openSearch: () => void;
};
const WikiContext = createContext<WikiContextType>({
  saved: [],
  toggleSaved: () => {},
  openSearch: () => {},
});
export const useWiki = () => useContext(WikiContext);

const navGroups = [
  {
    title: "EMPIEZA TU AVENTURA",
    links: [
      { slug: "primeros-pasos", label: "Primeros pasos", icon: "compass" },
      { slug: "menus", label: "Menús y navegación", icon: "layers" },
      { slug: "exploracion", label: "Exploración", icon: "map" },
    ],
  },
  {
    title: "UNIVERSO POKÉMON",
    links: [
      { slug: "tu-equipo", label: "Tu equipo Pokémon", icon: "pokeball" },
      { slug: "crianza", label: "Crianza y genética", icon: "egg" },
      { slug: "fusiones", label: "Fusiones", icon: "sparkles" },
      { slug: "legendarios", label: "Legendarios", icon: "flame" },
      { slug: "medallas", label: "Medallas y Liga", icon: "trophy" },
      { slug: "misiones", label: "Misiones", icon: "scroll-text" },
    ],
  },
  {
    title: "VIDA EN BLOKEDEX",
    links: [
      { slug: "economia", label: "Economía", icon: "coins" },
      { slug: "gts", label: "Mercado GTS", icon: "store" },
      { slug: "protecciones", label: "Protecciones", icon: "shield-check" },
      { slug: "clanes", label: "Clanes y comunidad", icon: "users" },
      { slug: "recompensas", label: "Recompensas", icon: "gift" },
    ],
  },
];

export function WikiShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [saved, setSaved] = useState<string[]>([]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);
  const results = searchArticles(query).slice(0, 12);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("blokedex-saved") ?? "[]");
      if (Array.isArray(stored))
        setSaved(
          stored.filter(
            (slug): slug is string =>
              typeof slug === "string" && articles.some((a) => a.slug === slug),
          ),
        );
      setTheme(document.documentElement.dataset.theme ?? "dark");
    } catch {
      /* Local preferences are optional. */
    }
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);
  useEffect(() => {
    const media = window.matchMedia("(max-width: 760px)");
    const update = () => {
      setIsMobile(media.matches);
      if (!media.matches) setMobileOpen(false);
    };
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (!mobileOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        menuRef.current?.focus();
      }
      if (event.key !== "Tab") return;
      const focusable = [
        menuRef.current,
        ...document.querySelectorAll<HTMLElement>(
          "#sidebar-nav a, #sidebar-nav button",
        ),
      ].filter((node): node is HTMLElement => Boolean(node));
      const first = focusable[0];
      const last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [mobileOpen]);
  useEffect(() => {
    if (searchOpen)
      dialogRef.current
        ?.querySelectorAll(".search-result")
        [active]?.scrollIntoView({ block: "nearest" });
  }, [active, searchOpen]);
  useEffect(() => {
    document.body.style.overflow = mobileOpen || searchOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, searchOpen]);

  const openSearch = useCallback(() => {
    setQuery("");
    setActive(0);
    setSearchOpen(true);
    setMobileOpen(false);
    dialogRef.current?.showModal();
    requestAnimationFrame(() => searchRef.current?.focus());
  }, []);
  const closeSearch = useCallback(() => {
    dialogRef.current?.close();
    setSearchOpen(false);
  }, []);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (dialogRef.current?.open) closeSearch();
        else openSearch();
      }
      if (event.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openSearch, closeSearch]);

  function toggleSaved(slug: string) {
    setSaved((current) => {
      const next = current.includes(slug)
        ? current.filter((item) => item !== slug)
        : [...current, slug];
      try {
        localStorage.setItem("blokedex-saved", JSON.stringify(next));
      } catch {
        /* Keep working in memory. */
      }
      return next;
    });
  }
  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    setTheme(next);
    try {
      localStorage.setItem("blokedex-theme", next);
    } catch {
      /* Keep the active theme. */
    }
  }

  return (
    <WikiContext.Provider value={{ saved, toggleSaved, openSearch }}>
      <a className="skip-link" href="#main-content">
        Saltar al contenido
      </a>
      <header className="topbar">
        <div className="brand-area">
          <button
            ref={menuRef}
            className="icon-button mobile-menu"
            aria-label={mobileOpen ? "Cerrar navegación" : "Abrir navegación"}
            aria-expanded={mobileOpen}
            aria-controls="sidebar-nav"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Icon name={mobileOpen ? "x" : "menu"} />
          </button>
          <Link href="/" className="brand" aria-label="Blokedex Wiki, inicio">
            <img
              src="/images/blokedex-logo.webp"
              alt=""
              width="38"
              height="38"
            />
            <span>
              BLOKEDEX<span className="brand-dot">.</span>
            </span>
            <span className="wiki-label">WIKI</span>
          </Link>
        </div>
        <nav className="top-nav" aria-label="Navegación principal">
          <Link href="/" className={pathname === "/" ? "active" : ""}>
            La wiki
          </Link>
          <Link href="/#explora">Explorar guías</Link>
          <Link href="/wiki/primeros-pasos/">
            Cómo empezar <Icon name="external" size={13} />
          </Link>
        </nav>
        <div className="top-actions">
          <span className="version-badge">
            <span /> Minecraft 1.21.1
          </span>
          <span className="top-divider" />
          <button
            className="icon-button theme-toggle"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Activar tema claro" : "Activar tema oscuro"
            }
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} size={19} />
          </button>
        </div>
      </header>

      {mobileOpen && (
        <button
          className="sidebar-backdrop"
          aria-label="Cerrar navegación"
          onClick={() => setMobileOpen(false)}
        />
      )}
      <aside
        id="sidebar-nav"
        inert={isMobile && !mobileOpen}
        className={`sidebar ${mobileOpen ? "is-open" : ""}`}
        aria-label="Índice de la wiki"
      >
        <button className="sidebar-search" onClick={openSearch}>
          <Icon name="search" size={17} />
          <span>Buscar en la wiki...</span>
          <kbd>Ctrl K</kbd>
        </button>
        <nav>
          <Link
            href="/"
            className={`side-link home-link ${pathname === "/" ? "selected" : ""}`}
            onClick={() => setMobileOpen(false)}
          >
            <Icon name="home" size={18} />
            <span>Inicio</span>
            {pathname === "/" && <span className="selected-dot" />}
          </Link>
          {navGroups.map((group) => (
            <div className="nav-group" key={group.title}>
              <p className="nav-label">{group.title}</p>
              {group.links
                .filter((link) =>
                  articles.some((article) => article.slug === link.slug),
                )
                .map((link) => (
                  <Link
                    key={link.slug}
                    href={`/wiki/${link.slug}/`}
                    onClick={() => setMobileOpen(false)}
                    className={`side-link ${pathname === `/wiki/${link.slug}/` || pathname === `/wiki/${link.slug}` ? "selected" : ""}`}
                  >
                    <Icon name={link.icon} size={17} />
                    <span>{link.label}</span>
                    {link.slug === "fusiones" && (
                      <span className="tiny-tag">ÚNICO</span>
                    )}
                  </Link>
                ))}
            </div>
          ))}
          <Link
            href="/guardadas/"
            className={`side-link saved-nav ${pathname.startsWith("/guardadas") ? "selected" : ""}`}
            onClick={() => setMobileOpen(false)}
          >
            <Icon name="bookmark" size={17} />
            <span>Guías guardadas</span>
            <span className="saved-count">{saved.length}</span>
          </Link>
        </nav>
        <div className="sidebar-bottom">
          <div className="sidebar-tip">
            <span className="tip-symbol">
              <Icon name="sprout" size={19} />
            </span>
            <div>
              <strong>Cada aventura empieza aquí.</strong>
              <p>Aprende a tu ritmo. Juega a tu manera.</p>
            </div>
          </div>
          <div className="sidebar-foot">
            <span>HECHO PARA ENTRENADORES</span>
            <Icon name="heart" size={12} />
          </div>
        </div>
      </aside>

      <div className="page-wrap" inert={isMobile && mobileOpen}>
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <footer className="footer">
          <Link href="/" className="footer-brand">
            <Icon name="pokeball" size={18} /> BLOKEDEX <span>WIKI</span>
          </Link>
          <p>Tu próxima gran aventura empieza con una buena guía.</p>
          <a href="#main-content" className="back-top">
            Volver arriba <Icon name="arrow-right" size={14} />
          </a>
          <span className="footer-note">
            Proyecto de la comunidad. Sin afiliación con Mojang, Microsoft o The
            Pokémon Company.
          </span>
        </footer>
      </div>

      <dialog
        ref={dialogRef}
        className="search-dialog"
        aria-label="Buscar en la wiki"
        onCancel={() => setSearchOpen(false)}
        onClose={() => setSearchOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeSearch();
        }}
      >
        <div className="search-panel">
          <div className="search-input-row">
            <Icon name="search" size={22} />
            <input
              ref={searchRef}
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setActive(0);
              }}
              placeholder="¿Qué quieres descubrir?"
              aria-label="Buscar guías y mecánicas"
              aria-controls="search-results"
              autoComplete="off"
              onKeyDown={(event) => {
                if (event.key === "ArrowDown") {
                  event.preventDefault();
                  setActive((value) => Math.min(value + 1, results.length - 1));
                }
                if (event.key === "ArrowUp") {
                  event.preventDefault();
                  setActive((value) => Math.max(value - 1, 0));
                }
                if (event.key === "Enter" && results[active]) {
                  event.preventDefault();
                  closeSearch();
                  router.push(`/wiki/${results[active].slug}/`);
                }
              }}
            />
            <button
              className="icon-button"
              onClick={closeSearch}
              aria-label="Cerrar buscador"
            >
              <Icon name="x" />
            </button>
          </div>
          <div className="search-results" id="search-results">
            <p className="search-caption" aria-live="polite">
              {query
                ? `${results.length} ${results.length === 1 ? "guía encontrada" : "guías encontradas"}`
                : "UN BUEN LUGAR PARA EMPEZAR"}
            </p>
            {results.map((article, index) => (
              <Link
                key={article.slug}
                href={`/wiki/${article.slug}/`}
                className={`search-result ${active === index ? "is-active" : ""}`}
                onMouseEnter={() => setActive(index)}
                onClick={closeSearch}
              >
                <span className={`result-icon ${article.category}`}>
                  <Icon name={article.icon} />
                </span>
                <span>
                  <strong>{article.title}</strong>
                  <small>
                    {getCategory(article.category).label} ·{" "}
                    {article.description}
                  </small>
                </span>
                <Icon name="arrow-right" size={17} />
              </Link>
            ))}
            {!results.length && (
              <div className="empty-search">
                <Icon name="compass" size={36} />
                <h3>Aún no encontramos esa guía</h3>
                <p>
                  Prueba con «crianza», «clanes», «dinero» o una sola palabra.
                </p>
                <button
                  className="button button-secondary"
                  onClick={() => {
                    setQuery("");
                    searchRef.current?.focus();
                  }}
                >
                  Ver sugerencias
                </button>
              </div>
            )}
          </div>
          <div className="search-bottom">
            <span>
              <kbd>↑</kbd>
              <kbd>↓</kbd> para explorar <kbd>↵</kbd> para abrir
            </span>
            <span>
              <kbd>esc</kbd> para cerrar
            </span>
          </div>
        </div>
      </dialog>
    </WikiContext.Provider>
  );
}
