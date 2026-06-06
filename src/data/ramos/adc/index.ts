// src/data/ramos/adc/index.ts
import { unidadesADC } from './unidades';
import { materialesADC } from './materiales';
import { flashcardsADC } from './flashcards';
import { conceptosADC } from './conceptos';
import { quizzesADC } from './quizzes';
import { resumenesADC } from './resumenes';
import type { Ramo } from '../types';

export const adcRamo: Ramo = {
  id: 'adc',
  slug: 'adc',
  nombre: 'Análisis de Datos Cuantitativos',
  codigoCorto: 'ADC',
  semestre: 3,
  año: 2025,
  colorAccent: '#7E6FA0',
  colorSubtle: '#F0EDF7',
  profesora: '[Por completar]',
  descripcion: 'Fundamentos de estadística y análisis cuantitativo aplicado a la Psicología',
  estado: 'activo',
  progreso: {
    materialesVistos: 0,
    totalMateriales: 10,
    flashcardsRepasadas: 0,
    totalFlashcards: 17,
    quizzesCompletados: 0,
    porcentajeGeneral: 0,
  },
  unidades: unidadesADC,
  materiales: materialesADC,
  flashcards: flashcardsADC,
  conceptos: conceptosADC,
  quizzes: quizzesADC,
  resumenes: resumenesADC,
};
