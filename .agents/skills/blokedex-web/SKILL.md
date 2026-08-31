---
name: blokedex-web
description: Mantener la web estática de Blokedex en este repositorio. Usar al inspeccionar, modificar, validar o publicar este proyecto; no usar para otros proyectos de Blokedex.
---

# Blokedex Web

Mantén este sitio deliberadamente pequeño, compatible con Vercel y sin dependencias salvo que una petición posterior las justifique.

## Estado del proyecto

- La entrada es `index.html` en la raíz.
- El documento se titula `Blokedex` y muestra `En construcción`.
- Vercel debe poder servir el repositorio como sitio estático sin paso de compilación.

## Al modificarlo

1. Lee el estado real del repositorio y conserva cambios del usuario que no pertenezcan a la petición.
2. Implementa la solución nativa más pequeña que satisfaga lo pedido.
3. Actualiza esta skill en el mismo cambio si varían la estructura, los comandos, el despliegue o las convenciones del proyecto.
4. Verifica al menos que la página sea HTML válido, tenga el título esperado y pueda servirse como sitio estático.
5. Crea un commit centrado solo en la modificación solicitada y sºbelo a `origin` cuando la petición autorice publicar. Nunca reescribas el historial ni incluyas archivos ajenos.

Si falla la autenticación o el remoto no existe, conserva el trabajo local y comunica exactamente el bloqueo.
