import { placeholderImage } from '../utils/placeholderImage'

// Datos de la galería "Expanding Cards" de Diseño Industrial.
// Reemplazá "image" por la ruta real de tu foto en /public/img/proyectos/
// cuando la tengas (ej: "/img/proyectos/bim-1.jpg"). Mientras tanto se
// muestra un placeholder generado localmente con el título del proyecto.

export const industrialCards = [
  {
    title: 'Diseño BIM',
    description: 'Modelado y coordinación de proyectos industriales usando Revit y Navisworks.',
    image: placeholderImage('Diseño BIM', 0),
  },
  {
    title: 'Modelado 3D',
    description: 'Piezas y ensambles industriales modelados en detalle.',
    image: placeholderImage('Modelado 3D', 1),
  },
  {
    title: 'Coordinación de Obra',
    description: 'Detección de interferencias y coordinación multidisciplinaria.',
    image: placeholderImage('Coordinación de Obra', 2),
  },
]
