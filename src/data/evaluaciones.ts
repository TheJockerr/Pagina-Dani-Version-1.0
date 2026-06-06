// src/data/evaluaciones.ts
// Evaluaciones del semestre — vacías por defecto hasta registrar datos reales

export type TipoEvento = 'prueba' | 'examen' | 'entrega' | 'repaso' | 'clase' | 'personal';

export interface Evaluacion {
  id: string;
  titulo: string;
  tipo: TipoEvento;
  ramo: string;
  ramoId: string;
  fecha: string; // ISO date
  hora?: string;
  descripcion?: string;
  unidad?: number;
  completada: boolean;
}

export const evaluaciones: Evaluacion[] = [];

export const tiposEvento: Record<TipoEvento, { color: string; label: string; prioridad: 'alta' | 'media' | 'baja' }> = {
  prueba:   { color: '#C4889C', label: 'Prueba',   prioridad: 'alta' },
  examen:   { color: '#7E6FA0', label: 'Examen',   prioridad: 'alta' },
  entrega:  { color: '#7A9E89', label: 'Entrega',  prioridad: 'alta' },
  repaso:   { color: '#C4A882', label: 'Repaso',   prioridad: 'media' },
  clase:    { color: '#9E9891', label: 'Clase',    prioridad: 'baja' },
  personal: { color: '#7E6FA0', label: 'Personal', prioridad: 'baja' },
};
