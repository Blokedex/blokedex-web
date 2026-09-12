import Link from "next/link";
import { Icon } from "@/components/icon";
export default function NotFound() {
  return (
    <div className="not-found page-enter">
      <span className="eyebrow">FUERA DEL MAPA · 404</span>
      <Icon name="compass" size={70} />
      <h1>Esta ruta está por descubrir.</h1>
      <p>
        La guía que buscas no existe o ha cambiado de lugar. Vuelve al inicio
        para encontrar tu siguiente aventura.
      </p>
      <Link href="/" className="button button-primary">
        <Icon name="arrow-left" size={17} /> Volver a la wiki
      </Link>
    </div>
  );
}
