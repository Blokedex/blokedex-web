import type { Metadata, Viewport } from "next";
import { WikiShell } from "@/components/wiki-shell";
import { siteUrl } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Blokedex Wiki — Tu aventura empieza aquí",
    template: "%s | Blokedex Wiki",
  },
  description:
    "Tu guía para el mundo de Blokedex. Descubre la crianza Pokémon, fusiones, medallas, clanes, economía y todas las mecánicas del servidor de Minecraft.",
  applicationName: "Blokedex Wiki",
  icons: { icon: "/images/favicon.png", apple: "/images/apple-touch-icon.png" },
  openGraph: {
    title: "Blokedex Wiki",
    description:
      "Todo un mundo por descubrir. Tu guía de Blokedex, de los primeros pasos a tu próxima gran aventura.",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/images/hero-world.webp",
        width: 1672,
        height: 941,
        alt: "Valle de bloques con un lago turquesa, ilustración de la wiki Blokedex",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101716",
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{document.documentElement.dataset.theme=localStorage.getItem('blokedex-theme')==='light'?'light':'dark'}catch(e){document.documentElement.dataset.theme='dark'}",
          }}
        />
      </head>
      <body>
        <WikiShell>{children}</WikiShell>
      </body>
    </html>
  );
}
