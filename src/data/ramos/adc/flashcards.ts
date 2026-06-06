// src/data/ramos/adc/flashcards.ts
export type DificultadFlashcard = 'facil' | 'medio' | 'dificil';

export interface SRSData {
  intervalo: number; facilidad: number; repeticiones: number;
  ultimaReview: string | null; proximaReview: string | null;
}

export interface Flashcard {
  id: string; frente: string; reverso: string;
  ramo: string; unidad: number; conceptoRelacionado: string;
  dificultad: DificultadFlashcard; srs: SRSData;
}

const srs0 = (): SRSData => ({ intervalo: 1, facilidad: 2.5, repeticiones: 0, ultimaReview: null, proximaReview: null });

export const flashcardsADC: Flashcard[] = [
  { id: 'fc_u1_01', frente: '¿Cuál es la fórmula de la Media Aritmética?', reverso: 'x̄ = (Σxᵢ) / n\n\nDonde x̄ = media, Σxᵢ = suma de valores, n = número de valores', ramo: 'adc_2025', unidad: 1, conceptoRelacionado: 'c_media', dificultad: 'facil', srs: srs0() },
  { id: 'fc_u1_02', frente: '¿Qué es la Mediana y cómo se calcula?', reverso: 'Valor central de datos ordenados.\nN impar → posición (n+1)/2\nN par → promedio de posiciones n/2 y n/2+1', ramo: 'adc_2025', unidad: 1, conceptoRelacionado: 'c_mediana', dificultad: 'facil', srs: srs0() },
  { id: 'fc_u1_03', frente: '¿Qué es la Moda?', reverso: 'El valor que aparece con mayor frecuencia.\nPuede ser unimodal, bimodal o multimodal.', ramo: 'adc_2025', unidad: 1, conceptoRelacionado: 'c_moda', dificultad: 'facil', srs: srs0() },
  { id: 'fc_u1_04', frente: '¿Cuándo conviene usar la Mediana en lugar de la Media?', reverso: 'Cuando existen outliers o la distribución es asimétrica.\nEjemplo: ingresos de una población (la media se infla por los muy ricos).', ramo: 'adc_2025', unidad: 1, conceptoRelacionado: 'c_mediana', dificultad: 'medio', srs: srs0() },
  { id: 'fc_u1_05', frente: '¿Cuál es la fórmula de la Varianza muestral?', reverso: 's² = Σ(xᵢ - x̄)² / (n - 1)\n\nSe divide por n-1 para estimado insesgado de la varianza poblacional.', ramo: 'adc_2025', unidad: 1, conceptoRelacionado: 'c_varianza', dificultad: 'medio', srs: srs0() },
  { id: 'fc_u1_06', frente: '¿Cómo se relacionan Varianza y Desviación Estándar?', reverso: 's = √s²\nLa desviación estándar es la raíz cuadrada de la varianza.\nVentaja: mismas unidades que los datos originales.', ramo: 'adc_2025', unidad: 1, conceptoRelacionado: 'c_desv_est', dificultad: 'facil', srs: srs0() },
  { id: 'fc_u1_07', frente: '¿Qué indica una Desviación Estándar alta vs. baja?', reverso: 'Alta → datos muy dispersos (alejados de la media)\nBaja → datos concentrados cerca de la media', ramo: 'adc_2025', unidad: 1, conceptoRelacionado: 'c_desv_est', dificultad: 'medio', srs: srs0() },
  { id: 'fc_u1_08', frente: '¿Qué es el Rango y cuál es su limitación?', reverso: 'R = Xmáx - Xmín\nLimitación: solo usa 2 valores, muy sensible a outliers.', ramo: 'adc_2025', unidad: 1, conceptoRelacionado: 'c_rango', dificultad: 'facil', srs: srs0() },
  { id: 'fc_u1_09', frente: '¿Cuáles son las 4 escalas de medición?', reverso: '1. Nominal: categorías sin orden (género, color)\n2. Ordinal: orden sin distancias iguales (ranking)\n3. Intervalo: distancias iguales sin cero absoluto (°C)\n4. Razón: cero absoluto (peso, edad)', ramo: 'adc_2025', unidad: 1, conceptoRelacionado: 'c_media', dificultad: 'medio', srs: srs0() },
  { id: 'fc_u2_01', frente: '¿Cómo se caracteriza la Distribución Normal?', reverso: '• Campana simétrica\n• Media = Mediana = Moda\n• 68% datos entre ±1σ\n• 95% entre ±2σ\n• 99.7% entre ±3σ (Regla 68-95-99.7)', ramo: 'adc_2025', unidad: 2, conceptoRelacionado: 'c_dist_normal', dificultad: 'medio', srs: srs0() },
  { id: 'fc_u2_02', frente: '¿Cuál es la fórmula del Z-score?', reverso: 'z = (x - μ) / σ\n\nDonde x = valor, μ = media, σ = desviación estándar.\nIndica cuántas desviaciones se aleja x de la media.', ramo: 'adc_2025', unidad: 2, conceptoRelacionado: 'c_zscore', dificultad: 'facil', srs: srs0() },
  { id: 'fc_u2_03', frente: '¿Qué significa un z-score de +2.0?', reverso: 'El valor está 2 desviaciones estándar POR ENCIMA de la media.\nEn distribución normal: solo 2.28% de datos está más alto.', ramo: 'adc_2025', unidad: 2, conceptoRelacionado: 'c_zscore', dificultad: 'medio', srs: srs0() },
  { id: 'fc_u2_04', frente: '¿Cuándo se usa la Distribución t de Student?', reverso: 'Cuando n < 30 y no se conoce σ poblacional.\nA mayor n, la distribución t se aproxima a la normal.', ramo: 'adc_2025', unidad: 2, conceptoRelacionado: 'c_hipotesis_nula', dificultad: 'medio', srs: srs0() },
  { id: 'fc_u3_01', frente: '¿Qué es la Hipótesis Nula (H₀)?', reverso: 'Hipótesis de "no efecto" o "no diferencia".\nEj: "No hay diferencia en ansiedad entre grupo A y B."\nSiempre es la que se contrasta estadísticamente.', ramo: 'adc_2025', unidad: 3, conceptoRelacionado: 'c_hipotesis_nula', dificultad: 'facil', srs: srs0() },
  { id: 'fc_u3_02', frente: '¿Qué significa p < 0.05?', reverso: 'La probabilidad de obtener estos resultados (si H₀ fuera verdadera) es < 5%.\n→ Se rechaza H₀\n→ Los resultados son estadísticamente significativos', ramo: 'adc_2025', unidad: 3, conceptoRelacionado: 'c_valor_p', dificultad: 'medio', srs: srs0() },
  { id: 'fc_u3_03', frente: '¿Cuál es la diferencia entre Error Tipo I y Error Tipo II?', reverso: 'Error Tipo I (α): Rechazar H₀ cuando es verdadera → Falso positivo\nError Tipo II (β): No rechazar H₀ cuando es falsa → Falso negativo', ramo: 'adc_2025', unidad: 3, conceptoRelacionado: 'c_nivel_sig', dificultad: 'dificil', srs: srs0() },
  { id: 'fc_u3_04', frente: '¿Qué es la Prueba t para muestras independientes?', reverso: 'Compara las medias de dos grupos distintos e independientes.\nEj: comparar ansiedad en Grupo A vs Grupo B.\nRequiere: distribución normal, varianzas homogéneas.', ramo: 'adc_2025', unidad: 3, conceptoRelacionado: 'c_hipotesis_nula', dificultad: 'dificil', srs: srs0() },
];
