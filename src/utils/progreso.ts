// src/utils/progreso.ts
import type { Ramo } from '../data/ramos/index';

export function calcularProgresoRamo(ramo: Ramo): number {
  const { materialesVistos, totalMateriales, flashcardsRepasadas, totalFlashcards, quizzesCompletados } = ramo.progreso;
  const pMateriales = totalMateriales > 0 ? (materialesVistos / totalMateriales) * 40 : 0;
  const pFlashcards = totalFlashcards > 0 ? (flashcardsRepasadas / totalFlashcards) * 30 : 0;
  const pQuizzes = quizzesCompletados > 0 ? Math.min(quizzesCompletados * 10, 30) : 0;
  return Math.round(pMateriales + pFlashcards + pQuizzes);
}

export function getColorProgreso(porcentaje: number): string {
  if (porcentaje >= 80) return 'var(--color-secondary)';
  if (porcentaje >= 50) return 'var(--color-primary)';
  if (porcentaje >= 20) return 'var(--color-amber)';
  return 'var(--color-text-tertiary)';
}

export function getLabelEstadoUnidad(estado: string): string {
  switch (estado) {
    case 'completada': return '✅ Completada';
    case 'en_progreso': return '🔵 En progreso';
    case 'no_iniciada': return '○ No iniciada';
    case 'proxima': return '⏳ Próximamente';
    default: return estado;
  }
}
