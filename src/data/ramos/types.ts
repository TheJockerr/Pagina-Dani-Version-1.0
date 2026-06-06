// src/data/ramos/types.ts
// ──────────────────────────────────────────────────────────
// Core Ramo types extracted to break circular dependency:
//   ramos/index.ts imports sub-types from adc/ leaf files
//   adc/index.ts needs the Ramo interface → now imports from here
// ──────────────────────────────────────────────────────────
import type { Unidad } from './adc/unidades';
import type { Material } from './adc/materiales';
import type { Flashcard } from './adc/flashcards';
import type { Concepto } from './adc/conceptos';
import type { PreguntaQuiz } from './adc/quizzes';
import type { Resumen } from './adc/resumenes';

export interface ProgresoRamo {
  materialesVistos: number;
  totalMateriales: number;
  flashcardsRepasadas: number;
  totalFlashcards: number;
  quizzesCompletados: number;
  porcentajeGeneral: number;
}

export interface Ramo {
  id: string;
  slug: string;
  nombre: string;
  codigoCorto: string;
  semestre: number;
  año: number;
  colorAccent: string;
  colorSubtle: string;
  profesora: string;
  descripcion: string;
  estado: 'activo' | 'archivado' | 'próximo';
  progreso: ProgresoRamo;
  unidades: Unidad[];
  materiales: Material[];
  flashcards: Flashcard[];
  conceptos: Concepto[];
  quizzes: PreguntaQuiz[];
  resumenes: Resumen[];
}
