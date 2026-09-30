import { getCollection, type CollectionEntry } from 'astro:content';
import { url } from './url';

export type Modelo = CollectionEntry<'modelos'>;

// Formas orgánicas de la identidad (border-radius).
export const shapes = {
  blobA: '58% 42% 52% 48% / 46% 56% 44% 54%',
  blobB: '44% 56% 40% 60% / 58% 42% 58% 42%',
  arch: '240px 240px 40px 40px',
  leaf: '40px 50% 40px 50%',
} as const;

export async function getModelos(): Promise<Modelo[]> {
  const all = await getCollection('modelos');
  return all.sort((a, b) => a.data.order - b.data.order);
}

export const modeloHref = (m: Modelo) => url(`/tienda/${m.id}/`);

// Tabla de tallas. PENDIENTE: confirmar tabla real con el cliente.
export const sizes: { cm: string; talla: number }[] = [
  [22.5, 34], [23.5, 35], [24, 36], [25, 37], [25.5, 38], [26, 39],
  [26.5, 40], [27.5, 41], [28, 42], [28.5, 43], [29.5, 44], [30, 45],
].map(([cm, talla]) => ({ cm: String(cm).replace('.', ','), talla }));

export const soles = [
  { label: 'Suela delgada', hint: 'Máxima sensibilidad del terreno' },
  { label: 'Suela urbana', hint: 'Más amortiguación para la ciudad' },
];
