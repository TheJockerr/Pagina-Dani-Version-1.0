// src/utils/srs.ts
// Spaced Repetition System — SM2 algorithm
import type { SRSData } from '../data/ramos/adc/flashcards';

export type RatingType = 'again' | 'hard' | 'easy';

const ratingToQuality: Record<RatingType, number> = {
  again: 0,
  hard: 3,
  easy: 5,
};

export function calcularSiguienteReview(srs: SRSData, rating: RatingType): SRSData {
  const q = ratingToQuality[rating];
  const hoy = new Date().toISOString();

  let { intervalo, facilidad, repeticiones } = srs;

  if (q < 3) {
    // Reset
    repeticiones = 0;
    intervalo = 1;
  } else {
    if (repeticiones === 0) intervalo = 1;
    else if (repeticiones === 1) intervalo = 6;
    else intervalo = Math.round(intervalo * facilidad);

    repeticiones += 1;
    facilidad = Math.max(1.3, facilidad + 0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
  }

  const proxima = new Date();
  proxima.setDate(proxima.getDate() + intervalo);

  return {
    intervalo,
    facilidad,
    repeticiones,
    ultimaReview: hoy,
    proximaReview: proxima.toISOString(),
  };
}

export function necesitaReview(srs: SRSData): boolean {
  if (!srs.proximaReview) return true;
  return new Date(srs.proximaReview) <= new Date();
}

export function getPorcentajeDominado(flashcards: { srs: SRSData }[]): number {
  if (flashcards.length === 0) return 0;
  const dominadas = flashcards.filter(f => f.srs.repeticiones >= 3 && f.srs.facilidad > 2.0).length;
  return Math.round((dominadas / flashcards.length) * 100);
}
