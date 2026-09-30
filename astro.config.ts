import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { site } from './src/site.config';

// En GitHub Pages el workflow define SITE_URL y BASE_PATH (p. ej. "/enraiza").
// Con dominio propio, BASE_PATH queda vacío y el sitio vive en la raíz.
export default defineConfig({
  site: process.env.SITE_URL || site.url,
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
