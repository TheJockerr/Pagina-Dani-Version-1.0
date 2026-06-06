// src/utils/search.ts
import Fuse from 'fuse.js';
import type { Material } from '../data/ramos/adc/materiales';
import type { Flashcard } from '../data/ramos/adc/flashcards';
import type { Concepto } from '../data/ramos/adc/conceptos';
import type { Resumen } from '../data/ramos/adc/resumenes';

export type SearchResultType = 'material' | 'flashcard' | 'concepto' | 'resumen';

export interface SearchResult {
  type: SearchResultType;
  id: string;
  titulo: string;
  subtitulo: string;
  ramo: string;
  url: string;
}



let fuseInstance: Fuse<SearchResult> | null = null;
let searchIndex: SearchResult[] = [];

export function buildSearchIndex(data: {
  materiales: Material[];
  flashcards: Flashcard[];
  conceptos: Concepto[];
  resumenes: Resumen[];
}): void {
  const materiales: SearchResult[] = data.materiales.map(m => ({
    type: 'material', id: m.id, titulo: m.nombre,
    subtitulo: `PDF · ${m.etiquetas.join(', ')}`,
    ramo: m.ramo, url: `/ramos/adc/pdf/${m.id}`,
  }));

  const flashcards: SearchResult[] = data.flashcards.map(f => ({
    type: 'flashcard', id: f.id, titulo: f.frente,
    subtitulo: `Flashcard · Unidad ${f.unidad}`,
    ramo: f.ramo, url: `/ramos/adc?tab=flashcards`,
  }));

  const conceptos: SearchResult[] = data.conceptos.map(c => ({
    type: 'concepto', id: c.id, titulo: c.termino,
    subtitulo: `Concepto · ${c.definicion.slice(0, 60)}…`,
    ramo: c.ramo, url: `/ramos/adc?tab=conceptos`,
  }));

  const resumenes: SearchResult[] = data.resumenes.map(r => ({
    type: 'resumen', id: r.id, titulo: r.titulo,
    subtitulo: `Resumen · ${r.tiempoLectura} lectura`,
    ramo: r.ramo, url: `/ramos/adc?tab=resumenes`,
  }));

  searchIndex = [...materiales, ...flashcards, ...conceptos, ...resumenes];

  fuseInstance = new Fuse(searchIndex, {
    keys: ['titulo', 'subtitulo'],
    threshold: 0.4,
    includeScore: true,
  });
}

export function search(query: string): SearchResult[] {
  if (!fuseInstance || !query.trim()) return [];
  return fuseInstance.search(query).map(r => r.item).slice(0, 12);
}

export function getSearchIndex(): SearchResult[] {
  return searchIndex;
}
