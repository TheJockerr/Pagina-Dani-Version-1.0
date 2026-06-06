// src/data/ramos/adc/unidades.ts

export interface Unidad {
  id: string;
  numero: number;
  titulo: string;
  subtitulo: string;
  temas: string[];
  color: string;
  estado: 'completada' | 'en_progreso' | 'no_iniciada' | 'proxima';
  progreso: number; // 0-100
}

export const unidadesADC: Unidad[] = [
  {
    id: 'adc_u1',
    numero: 1,
    titulo: 'Estadística Descriptiva',
    subtitulo: 'Fundamentos del análisis cuantitativo',
    temas: ['Población y muestra', 'Escalas de medición', 'Medidas de tendencia central', 'Medidas de dispersión', 'Distribución de frecuencias', 'Gráficos estadísticos'],
    color: '#8B7FA8',
    estado: 'completada',
    progreso: 100,
  },
  {
    id: 'adc_u2',
    numero: 2,
    titulo: 'Distribuciones de Probabilidad',
    subtitulo: 'Curvas normales y estandarización',
    temas: ['Conceptos de probabilidad', 'Distribución normal y Gauss', 'Z-scores y puntajes estandarizados', 'Distribución t de Student', 'Distribución Chi-cuadrado'],
    color: '#7A9E89',
    estado: 'en_progreso',
    progreso: 60,
  },
  {
    id: 'adc_u3',
    numero: 3,
    titulo: 'Pruebas de Hipótesis',
    subtitulo: 'Inferencia estadística en Psicología',
    temas: ['Hipótesis nula e hipótesis alternativa', 'Niveles de significación y valor p', 'Prueba t para una muestra', 'Prueba t para muestras independientes', 'Prueba t para muestras relacionadas', 'Chi-cuadrado de independencia'],
    color: '#C4A882',
    estado: 'no_iniciada',
    progreso: 0,
  },
  {
    id: 'adc_u4',
    numero: 4,
    titulo: 'Correlación y Regresión',
    subtitulo: 'Relaciones entre variables',
    temas: ['Correlación de Pearson', 'Correlación de Spearman', 'Regresión lineal simple', 'Interpretación de resultados'],
    color: '#C4889C',
    estado: 'proxima',
    progreso: 0,
  },
];

