// src/data/ramos/adc/resumenes.ts
export interface SeccionResumen {
  id: string; titulo: string; contenido: string;
  conceptosClave: string[]; nivel: 'esencial' | 'ampliado' | 'adicional';
}
export interface Resumen {
  id: string; titulo: string; ramo: string; unidad: number;
  fechaCreacion: string; ultimaEdicion: string;
  secciones: SeccionResumen[]; tiempoLectura: string; visto: boolean;
}

export const resumenesADC: Resumen[] = [
  {
    id: 'res_adc_u1', titulo: 'Unidad 1: Estadística Descriptiva', ramo: 'adc_2025', unidad: 1,
    fechaCreacion: '2025-03-15', ultimaEdicion: '2025-04-02', tiempoLectura: '10 min', visto: true,
    secciones: [
      { id: 's1_1', titulo: '¿Qué es la Estadística Descriptiva?', nivel: 'esencial', conceptosClave: ['población', 'muestra', 'variable'], contenido: 'La estadística descriptiva es el conjunto de métodos que permiten organizar, resumir y presentar datos de forma significativa. No busca generalizar a una población (eso lo hace la estadística inferencial), sino describir lo que se tiene.\n\nConceptos clave:\n• Población: conjunto completo de elementos de interés\n• Muestra: subconjunto representativo de la población\n• Variable: característica que se mide (puede ser cuantitativa o cualitativa)' },
      { id: 's1_2', titulo: 'Escalas de Medición', nivel: 'esencial', conceptosClave: ['nominal', 'ordinal', 'intervalo', 'razón'], contenido: 'Las escalas determinan qué operaciones matemáticas son válidas:\n\n1. Nominal: solo clasificar (género, color de ojos)\n2. Ordinal: clasificar Y ordenar (ranking, nivel socioeconómico)\n3. Intervalo: clasificar, ordenar Y distancias iguales, pero sin cero absoluto (temperatura en °C)\n4. Razón: todas las anteriores + cero absoluto (peso, edad, ingresos)' },
      { id: 's1_3', titulo: 'Medidas de Tendencia Central', nivel: 'esencial', conceptosClave: ['media', 'mediana', 'moda'], contenido: 'Resumen el "centro" de los datos:\n\n• Media (x̄ = Σxᵢ/n): promedio aritmético. Sensible a outliers.\n• Mediana: valor central cuando los datos están ordenados. Robusta a outliers.\n• Moda: valor más frecuente. Puede no ser única.\n\nRegla práctica: distribución simétrica → media; distribución asimétrica o con outliers → mediana.' },
      { id: 's1_4', titulo: 'Medidas de Dispersión', nivel: 'esencial', conceptosClave: ['varianza', 'desviación estándar', 'rango'], contenido: 'Miden qué tan dispersos están los datos:\n\n• Rango (R = Xmáx - Xmín): simple pero muy sensible a outliers\n• Varianza (s² = Σ(xᵢ-x̄)²/(n-1)): promedio de diferencias cuadráticas\n• Desviación Estándar (s = √s²): en mismas unidades que los datos\n\nImportante: s muestral usa n-1 (no n) para estimación insesgada.' },
      { id: 's1_5', titulo: 'Representación Gráfica', nivel: 'ampliado', conceptosClave: ['histograma', 'diagrama de caja', 'distribución de frecuencias'], contenido: 'Gráficos fundamentales:\n• Histograma: distribución de frecuencias de variables continuas\n• Diagrama de caja (boxplot): muestra mediana, cuartiles y outliers\n• Polígono de frecuencias: histograma en forma de línea\n• Distribución de frecuencias: tabla que organiza datos en clases o categorías' },
    ]
  },
  {
    id: 'res_adc_u2', titulo: 'Unidad 2: Distribuciones de Probabilidad', ramo: 'adc_2025', unidad: 2,
    fechaCreacion: '2025-04-20', ultimaEdicion: '2025-05-10', tiempoLectura: '12 min', visto: false,
    secciones: [
      { id: 's2_1', titulo: 'Probabilidad Básica', nivel: 'esencial', conceptosClave: ['probabilidad', 'evento', 'espacio muestral'], contenido: 'La probabilidad es la medida de la posibilidad de que ocurra un evento.\n\nP(A) = Casos favorables / Total de casos posibles\n\nPropiedades:\n• 0 ≤ P(A) ≤ 1\n• P(espacio muestral) = 1\n• P(A complemento) = 1 - P(A)' },
      { id: 's2_2', titulo: 'Distribución Normal', nivel: 'esencial', conceptosClave: ['distribución normal', 'curva de Gauss', 'simetría'], contenido: 'La distribución normal es la distribución más importante en estadística:\n\n• Forma de campana simétrica\n• Media = Mediana = Moda (en centro)\n• Caracterizada por μ (media) y σ (desviación estándar)\n• Regla 68-95-99.7: ±1σ = 68%, ±2σ = 95%, ±3σ = 99.7%\n\nMuchos fenómenos psicológicos y sociales se distribuyen normalmente.' },
      { id: 's2_3', titulo: 'Z-scores y Estandarización', nivel: 'esencial', conceptosClave: ['z-score', 'estandarización', 'distribución normal estándar'], contenido: 'El Z-score estandariza cualquier distribución normal:\n\nz = (x - μ) / σ\n\nInterpretación:\n• z = 0 → el valor está en la media\n• z > 0 → el valor está sobre la media\n• z < 0 → el valor está bajo la media\n• z = 1.96 → corresponde al 95% del área (crítico en pruebas)\n\nPermite comparar valores de distintas distribuciones.' },
      { id: 's2_4', titulo: 'Distribución t de Student', nivel: 'ampliado', conceptosClave: ['distribución t', 'grados de libertad', 'muestras pequeñas'], contenido: 'Cuando n < 30 y σ desconocida:\n\n• Similar a la normal pero con colas más gruesas\n• A mayor n → más se parece a la distribución normal\n• Se caracteriza por grados de libertad (gl = n - 1)\n• Valores críticos t > valores z para el mismo nivel de significación' },
    ]
  },
];
