# Enraíza

Sitio web de Enraíza: calzado respetuoso hecho a mano y a medida, y talleres de confección de calzado en Valdivia.

Construido con [Astro](https://astro.build) (sitio estático). El diseño de referencia está en `design_handoff_enraiza_web/`.

## Desarrollo

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview  # sirve dist/
npm run check    # chequeo de tipos
```

## Deploy

Cada push a `main` publica el sitio en GitHub Pages (`.github/workflows/deploy.yml`):
https://papafrita.github.io/enraiza/

El workflow le pasa a Astro la URL y el base path de Pages (`SITE_URL`, `BASE_PATH`); los links internos usan
`url()` de `src/lib/url.ts` para respetarlo. Con un dominio propio configurado en Pages, el base path queda vacío
y no hay que cambiar código.

## Dónde se edita cada cosa

| Qué | Dónde |
|---|---|
| WhatsApp, Instagram, email, dominio, mostrar/ocultar testimonios | `src/site.config.ts` |
| Modelos (agregar uno = agregar un JSON + su foto) | `src/content/modelos/*.json`, fotos en `src/assets/modelos/` |
| Tabla de tallas y tipos de suela | `src/lib/modelos.ts` |
| Colores, tipografía, botones, acordeón | `src/styles/global.css` |
| Páginas | `src/pages/` |

Las imágenes se optimizan automáticamente (AVIF/WebP, tamaños responsivos) al hacer build.
Los favicons se generan desde el logo con `node scripts/favicons.mjs`.

## Pendientes con el cliente

- [ ] Número real de WhatsApp (hoy es un placeholder `56900000000`).
- [ ] Dominio definitivo (`site.url`, hoy `https://enraizazapatos.cl`).
- [ ] Testimonios reales (los actuales son de ejemplo).
- [ ] Fechas, duración y valor de los talleres.
- [ ] Confirmar dirección, horarios, nombres de los fundadores y email (página Contacto).
- [ ] Confirmar tabla de tallas.
- [ ] Logo en SVG/PNG transparente (hoy se usa `mix-blend-mode: multiply` sobre PNG con fondo crema).
- [ ] Fotos en alta resolución, sobre todo `medir-pie.png` y `taller-visita.png`.
