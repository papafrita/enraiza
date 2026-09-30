// Genera favicon.png y apple-touch-icon.png desde el símbolo del logo, sobre fondo crema.
// Uso: node scripts/favicons.mjs
import sharp from 'sharp';

const cream = { r: 255, g: 247, b: 228, alpha: 1 };
const src = 'src/assets/mark.png';

async function icon(size, pad, out) {
  const inner = Math.round(size * (1 - pad * 2));
  const mark = await sharp(src).resize({ height: inner, width: inner, fit: 'contain', background: cream }).toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: cream } })
    .composite([{ input: mark, gravity: 'center' }])
    .png()
    .toFile(out);
}

await icon(64, 0.06, 'public/favicon.png');
await icon(180, 0.12, 'public/apple-touch-icon.png');
