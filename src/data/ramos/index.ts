// src/data/ramos/index.ts
// Re-exports types from types.ts to maintain backward compatibility.
// getRamos() lazy-loads the ADC module to keep the bundle lean.
export type { Ramo, ProgresoRamo } from './types';

// Lazy-loaded: keeps main bundle light
export async function getRamos() {
  const { adcRamo } = await import('./adc/index');
  // Import type Ramo here only for return type inference — no circular issue
  return [adcRamo];
}

// Lightweight preview for sidebar/dashboard (no heavy data)
export const ramosPreview = [
  { id: 'adc', slug: 'adc', nombre: 'Análisis de Datos Cuantitativos', codigoCorto: 'ADC', colorAccent: '#7E6FA0', colorSubtle: '#F0EDF7', estado: 'activo' as const, semestre: 3, porcentajeGeneral: 0 },
  { id: 'psp', slug: 'psp', nombre: 'Psicopatología', codigoCorto: 'PSP', colorAccent: '#C4889C', colorSubtle: '#FAF0F3', estado: 'próximo' as const, semestre: 4, porcentajeGeneral: 0 },
  { id: 'neu', slug: 'neu', nombre: 'Neurociencias', codigoCorto: 'NEU', colorAccent: '#7A9E89', colorSubtle: '#EDF4F0', estado: 'próximo' as const, semestre: 4, porcentajeGeneral: 0 },
  { id: 'met', slug: 'met', nombre: 'Metodología de Investigación', codigoCorto: 'MET', colorAccent: '#C4A882', colorSubtle: '#FAF5ED', estado: 'próximo' as const, semestre: 5, porcentajeGeneral: 0 },
  { id: 'cli', slug: 'cli', nombre: 'Psicología Clínica', codigoCorto: 'CLI', colorAccent: '#7A8EA8', colorSubtle: '#EEF1F6', estado: 'próximo' as const, semestre: 5, porcentajeGeneral: 0 },
  { id: 'des', slug: 'des', nombre: 'Psicología del Desarrollo', codigoCorto: 'DES', colorAccent: '#9AB0A0', colorSubtle: '#EFF4F1', estado: 'próximo' as const, semestre: 4, porcentajeGeneral: 0 },
  { id: 'soc', slug: 'soc', nombre: 'Psicología Social', codigoCorto: 'SOC', colorAccent: '#A89BB8', colorSubtle: '#F4F1FA', estado: 'próximo' as const, semestre: 5, porcentajeGeneral: 0 },
];
