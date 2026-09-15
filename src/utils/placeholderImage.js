// Genera una imagen placeholder (SVG como data URI) con degradé y el título centrado.
// Útil mientras no hay fotos reales del proyecto todavía.
// Reemplazá el campo "image" en industrialCards.js por una ruta real
// (ej: "/img/proyectos/mi-foto.jpg") en cuanto tengas las fotos.

const PALETTES = [
  ['#f59e0b', '#78350f'],
  ['#6b7280', '#111827'],
  ['#0ea5e9', '#0c4a6e'],
  ['#10b981', '#064e3b'],
  ['#ef4444', '#7f1d1d'],
  ['#8b5cf6', '#4c1d95'],
]

export const placeholderImage = (title, seed = 0) => {
  const [from, to] = PALETTES[seed % PALETTES.length]
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${from}" />
          <stop offset="100%" stop-color="${to}" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#g)" />
      <text x="50%" y="50%" font-family="sans-serif" font-size="36" font-weight="700"
        fill="white" text-anchor="middle" dominant-baseline="middle">${title}</text>
    </svg>
  `.trim()

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}
