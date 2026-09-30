// Datos de contacto y marca. Editar aquí para cambiarlos en todo el sitio.
export const site = {
  name: 'Enraíza',
  // Dominio público (se usa en canonical, Open Graph y sitemap).
  url: 'https://enraizazapatos.cl',
  // PENDIENTE: reemplazar por el número real (solo dígitos, con código de país).
  whatsapp: '56900000000',
  instagram: 'enraizazapatos',
  // PENDIENTE: confirmar con el cliente.
  email: 'taller@enraizazapatos.cl',
  // Los testimonios actuales son de ejemplo: dejar en false hasta tener reales.
  showTestimonials: true,
};

export const igHandle = '@' + site.instagram;
export const igLink = `https://instagram.com/${site.instagram}`;
export const mailLink = `mailto:${site.email}`;

export function waLink(text: string): string {
  return `https://wa.me/${site.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(text)}`;
}

export const waGeneral = waLink('Hola Enraíza, quisiera hacer una consulta.');
export const waTaller = waLink('Hola Enraíza, quiero información sobre el próximo taller.');
