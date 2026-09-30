// Antepone el base path del sitio (p. ej. "/enraiza/" en GitHub Pages, "/" en un dominio propio).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path: string) => base + (path.startsWith('/') ? path : '/' + path);
