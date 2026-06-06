// src/data/ramos/adc/conceptos.ts

export type ImportanciaConcepto = 'alta' | 'media' | 'baja';

export interface Concepto {
  id: string;
  termino: string;
  definicion: string;
  formula?: string;
  ejemplo?: string;
  ramo: string;
  unidad: number;
  importancia: ImportanciaConcepto;
  relacionadosCon: string[];
  apareceEn: string[];
  tieneFlashcard: boolean;
  visto: boolean;
  etiquetas: string[];
}

export const conceptosADC: Concepto[] = [
  { id: 'c_media', termino: 'Media Aritmética', definicion: 'Suma de todos los valores de un conjunto dividida entre el número total de valores.', formula: 'x̄ = (Σxᵢ) / n', ejemplo: 'Para 2, 4, 6: x̄ = (2+4+6)/3 = 4', ramo: 'adc_2025', unidad: 1, importancia: 'alta', relacionadosCon: ['c_mediana', 'c_moda', 'c_varianza'], apareceEn: ['pdf_adc_u1_01', 'pdf_adc_u1_02'], tieneFlashcard: true, visto: true, etiquetas: ['tendencia central'] },
  { id: 'c_mediana', termino: 'Mediana', definicion: 'Valor que divide un conjunto de datos ordenados en dos mitades iguales. Es el valor central.', formula: 'Valor posición (n+1)/2', ejemplo: 'Para 1, 3, 5, 7, 9 → Mediana = 5', ramo: 'adc_2025', unidad: 1, importancia: 'alta', relacionadosCon: ['c_media', 'c_moda'], apareceEn: ['pdf_adc_u1_02'], tieneFlashcard: true, visto: true, etiquetas: ['tendencia central'] },
  { id: 'c_moda', termino: 'Moda', definicion: 'Valor que aparece con mayor frecuencia en un conjunto de datos.', formula: undefined, ejemplo: 'Para 2, 3, 3, 4, 5 → Moda = 3', ramo: 'adc_2025', unidad: 1, importancia: 'alta', relacionadosCon: ['c_media', 'c_mediana'], apareceEn: ['pdf_adc_u1_02'], tieneFlashcard: true, visto: true, etiquetas: ['tendencia central'] },
  { id: 'c_varianza', termino: 'Varianza', definicion: 'Promedio de las diferencias cuadráticas entre cada valor y la media. Mide la dispersión de los datos.', formula: 's² = Σ(xᵢ-x̄)² / (n-1)', ejemplo: 'Alta varianza = datos muy dispersos', ramo: 'adc_2025', unidad: 1, importancia: 'alta', relacionadosCon: ['c_desv_est', 'c_media'], apareceEn: ['pdf_adc_u1_03'], tieneFlashcard: true, visto: true, etiquetas: ['dispersión'] },
  { id: 'c_desv_est', termino: 'Desviación Estándar', definicion: 'Raíz cuadrada de la varianza. Mide cuánto se alejan los datos de la media en las mismas unidades originales.', formula: 's = √[Σ(xᵢ-x̄)² / (n-1)]', ejemplo: 'Si s=2, los datos se alejan ~2 unidades de la media', ramo: 'adc_2025', unidad: 1, importancia: 'alta', relacionadosCon: ['c_varianza', 'c_media'], apareceEn: ['pdf_adc_u1_03'], tieneFlashcard: true, visto: true, etiquetas: ['dispersión'] },
  { id: 'c_rango', termino: 'Rango', definicion: 'Diferencia entre el valor máximo y mínimo de un conjunto de datos.', formula: 'R = Xmáx - Xmín', ejemplo: 'Para 2, 5, 8, 10 → R = 10 - 2 = 8', ramo: 'adc_2025', unidad: 1, importancia: 'media', relacionadosCon: ['c_varianza'], apareceEn: ['pdf_adc_u1_03'], tieneFlashcard: true, visto: true, etiquetas: ['dispersión'] },
  { id: 'c_dist_normal', termino: 'Distribución Normal', definicion: 'Distribución de probabilidad simétrica en forma de campana (curva de Gauss) donde media, mediana y moda coinciden.', formula: 'f(x) = (1/σ√2π) · e^(-½((x-μ)/σ)²)', ejemplo: 'Las notas de un curso suelen distribuirse normalmente', ramo: 'adc_2025', unidad: 2, importancia: 'alta', relacionadosCon: ['c_zscore', 'c_media'], apareceEn: ['pdf_adc_u2_01'], tieneFlashcard: true, visto: true, etiquetas: ['distribuciones', 'probabilidad'] },
  { id: 'c_zscore', termino: 'Z-score (Puntuación Z)', definicion: 'Medida estandarizada que indica cuántas desviaciones estándar se aleja un valor de la media de su distribución.', formula: 'z = (x - μ) / σ', ejemplo: 'z=1.5 significa que x está 1.5 desviaciones sobre la media', ramo: 'adc_2025', unidad: 2, importancia: 'alta', relacionadosCon: ['c_dist_normal', 'c_desv_est'], apareceEn: ['pdf_adc_u2_02'], tieneFlashcard: true, visto: true, etiquetas: ['estandarización', 'distribuciones'] },
  { id: 'c_hipotesis_nula', termino: 'Hipótesis Nula (H₀)', definicion: 'Afirmación de que no existe efecto o diferencia significativa entre grupos o variables. Es la hipótesis que se pone a prueba.', formula: 'H₀: μ₁ = μ₂', ejemplo: 'H₀: "No hay diferencia en las notas entre grupos A y B"', ramo: 'adc_2025', unidad: 3, importancia: 'alta', relacionadosCon: ['c_hipotesis_alt', 'c_valor_p'], apareceEn: [], tieneFlashcard: true, visto: false, etiquetas: ['hipótesis', 'inferencia'] },
  { id: 'c_hipotesis_alt', termino: 'Hipótesis Alternativa (H₁)', definicion: 'Afirmación que contradice la hipótesis nula. Plantea que sí existe un efecto, diferencia o relación.', formula: 'H₁: μ₁ ≠ μ₂', ejemplo: 'H₁: "Sí hay diferencia en las notas entre grupos A y B"', ramo: 'adc_2025', unidad: 3, importancia: 'alta', relacionadosCon: ['c_hipotesis_nula', 'c_valor_p'], apareceEn: [], tieneFlashcard: true, visto: false, etiquetas: ['hipótesis', 'inferencia'] },
  { id: 'c_valor_p', termino: 'Valor p (p-value)', definicion: 'Probabilidad de obtener un resultado igual o más extremo que el observado, asumiendo que H₀ es verdadera. Si p < 0.05, se rechaza H₀.', formula: 'p < α → rechazar H₀', ejemplo: 'p = 0.03 → hay diferencia estadísticamente significativa', ramo: 'adc_2025', unidad: 3, importancia: 'alta', relacionadosCon: ['c_hipotesis_nula', 'c_nivel_sig'], apareceEn: [], tieneFlashcard: true, visto: false, etiquetas: ['significancia', 'inferencia'] },
  { id: 'c_nivel_sig', termino: 'Nivel de Significación (α)', definicion: 'Umbral de probabilidad que se acepta para cometer un error tipo I (rechazar H₀ cuando es verdadera). Usualmente α = 0.05.', formula: 'α = 0.05 (estándar)', ejemplo: 'α=0.05 significa 5% de probabilidad de error tipo I', ramo: 'adc_2025', unidad: 3, importancia: 'alta', relacionadosCon: ['c_valor_p'], apareceEn: [], tieneFlashcard: true, visto: false, etiquetas: ['significancia', 'inferencia'] },
];
