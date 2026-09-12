import type { Metadata } from "next";
import { SavedPage } from "@/components/saved-page";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Guías guardadas",
  description:
    "Tu colección de guías de Blokedex. Guarda tus descubrimientos y vuelve a ellos cuando los necesites.",
};

export default function SavedRoute() {
  return <SavedPage />;
}
