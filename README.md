# Blokedex Wiki

Wiki en español del servidor Blokedex, creada con Next.js, React y TypeScript. Incluye 24 guías redactadas a partir del código y las configuraciones del servidor, sin comandos del juego.

## Desarrollo

Requiere Node.js 22.13 o posterior y npm.

```sh
npm ci
npm run dev
```

Abre http://localhost:3000. Todo el proyecto y sus recursos están en esta carpeta.

## Compilar y revisar

```sh
npm run check:content
npm run build
npm start
```

La compilación comprueba TypeScript y genera HTML estático en `out/`, incluida una página por guía. `npm start` sirve esa carpeta localmente. Para otro puerto, define `PORT` en el entorno. También puedes ejecutar `npm run typecheck` por separado después de generar los tipos de Next.js.

## Vercel

Importa el repositorio o despliega esta carpeta con Vercel. Selecciona **Next.js**, directorio raíz de la wiki, instalación `npm ci` y compilación `npm run build`. Mantén la detección automática de salida: la configuración exporta a `out/`. No necesita base de datos, servidor Minecraft ni credenciales.

Vercel aporta automáticamente el dominio para metadatos y sitemap. Con un dominio propio, configura `NEXT_PUBLIC_SITE_URL` con su URL HTTPS y vuelve a desplegar. Consulta `docs/DEPLOYMENT.md` para el procedimiento completo.

## Funcionalidades

- Buscador local de títulos, etiquetas y contenido, con atajo Ctrl/Cmd + K.
- Categorías, filtros y enlaces directos a las secciones de cada guía.
- Guías guardadas en el navegador, con búsqueda y eliminación.
- Tema oscuro y claro persistente, diseño móvil e índice de lectura.
- Transiciones breves y respeto de la preferencia de movimiento reducido.
- Fuentes locales, portada WebP, metadatos sociales, sitemap y página 404.

## Contenido y recursos

Los artículos se mantienen en `src/data/pokemon.ts` y `src/data/world.ts`; el contrato está en `src/data/types.ts`. El buscador, las rutas y las categorías se actualizan a partir de esos datos.

La trazabilidad de las fuentes está en `docs/sources-pokemon.md` y `docs/sources-world.md`. Son documentos de mantenimiento: no están en `public/` ni se incluyen en la exportación web. La revisión del servidor fue estática, realizada el 9 de septiembre de 2026. Los valores documentados deben revisarse al cambiar la configuración. No se consultaron datos de jugadores ni se inició Minecraft.

El logo original proporcionado está en `public/images/blokedex.png`. `hero-world.webp` es una ilustración ambiental generada para esta wiki, no una captura del servidor. El PNG de origen se conserva en `docs/assets/`.

No se muestran un estado de conexión, cifras de jugadores ni enlaces de acceso al servidor sin una fuente confirmada. La aplicación no usa analítica, cuentas de usuario ni solicitudes a servicios externos para buscar o guardar guías.
