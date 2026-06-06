// src/data/daniela.ts
// Perfil personal de Daniela Moraga — datos fijos, no editables

export const daniela = {
  nombre: 'Daniela',
  apellido: 'Moraga',
  nombreCompleto: 'Daniela Moraga',
  iniciales: 'DM',
  universidad: 'Universidad Mayor de Chile',
  carrera: 'Psicología',
  semestre: 3,
  año: 2025,
  mensajeBienvenida: `Este espacio fue creado exclusivamente para acompañarte en tu camino por la Psicología. Aquí encontrarás todos tus materiales, resúmenes, flashcards y herramientas de estudio — organizados, accesibles y pensados para ti.`,
} as const;

export type DanielaProfile = typeof daniela;
