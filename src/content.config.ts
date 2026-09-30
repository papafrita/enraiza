import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Un archivo JSON por modelo en src/content/modelos/. El nombre del archivo es el slug (/tienda/<slug>/).
const modelos = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/modelos' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      kind: z.string(),
      order: z.number(),
      description: z.string(),
      features: z.array(z.string()),
      image: image(),
      alt: z.string(),
      shape: z.enum(['blobA', 'arch', 'blobB', 'leaf']),
    }),
});

export const collections = { modelos };
