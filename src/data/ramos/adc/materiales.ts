// src/data/ramos/adc/materiales.ts
export type TipoMaterial = 'presentacion' | 'apuntes' | 'lectura' | 'guia' | 'ejercicios' | 'formulario' | 'otro';

export interface Material {
  id: string;
  nombre: string;
  nombreArchivo: string;
  ruta: string;
  ramo: string;
  unidad: number | null;
  tipo: TipoMaterial;
  semana: number | null;
  fechaSubida: string;
  visto: boolean;
  ultimaVista: string | null;
  tiempoLectura: string;
  paginas: number;
  etiquetas: string[];
  notas: string;
  esPesado?: boolean;
  extension?: string;
}

export const materialesADC: Material[] = [
  {
    id: 'mat_adc_u1_s1',
    nombre: 'Sesión 1: Introducción a la Estadística y Metodología',
    nombreArchivo: 'Sesion 2026 1.pdf',
    ruta: '/materials/adc/Sesion 2026 1.pdf',
    ramo: 'adc_2025',
    unidad: 1,
    tipo: 'presentacion',
    semana: 1,
    fechaSubida: '2026-03-05',
    visto: false,
    ultimaVista: null,
    tiempoLectura: '20 min',
    paginas: 38,
    etiquetas: ['introducción', 'metodología', 'cuantitativo'],
    notas: '',
    esPesado: false,
    extension: 'pdf'
  },
  {
    id: 'mat_adc_u1_s2_3',
    nombre: 'Sesión 2 y 3: Estadística Descriptiva y Visualización de Datos',
    nombreArchivo: 'sesión 2 y 3 2026.pdf',
    ruta: '/materials/adc/sesión 2 y 3 2026.pdf',
    ramo: 'adc_2025',
    unidad: 1,
    tipo: 'presentacion',
    semana: 2,
    fechaSubida: '2026-03-12',
    visto: false,
    ultimaVista: null,
    tiempoLectura: '25 min',
    paginas: 45,
    etiquetas: ['descriptiva', 'gráficos', 'tablas'],
    notas: '',
    esPesado: false,
    extension: 'pdf'
  },
  {
    id: 'mat_adc_u1_guia',
    nombre: 'Guía de Ejercicios de Preparación — Parcial 1 (2026)',
    nombreArchivo: 'Guia ejercicios parcial 1 2026.docx',
    ruta: '/materials/adc/Guia ejercicios parcial 1 2026.docx',
    ramo: 'adc_2025',
    unidad: 1,
    tipo: 'guia',
    semana: 3,
    fechaSubida: '2026-03-20',
    visto: false,
    ultimaVista: null,
    tiempoLectura: '35 min',
    paginas: 8,
    etiquetas: ['ejercicios', 'parcial 1', 'práctica descriptiva'],
    notas: '',
    esPesado: false,
    extension: 'docx'
  },
  {
    id: 'mat_adc_u2_s4',
    nombre: 'Sesión 4: Estimación de Parámetros e Intervalos de Confianza',
    nombreArchivo: 's4 Intervalos de Confianza 2026.pdf',
    ruta: '/materials/adc/s4 Intervalos de Confianza 2026.pdf',
    ramo: 'adc_2025',
    unidad: 2,
    tipo: 'presentacion',
    semana: 4,
    fechaSubida: '2026-04-02',
    visto: false,
    ultimaVista: null,
    tiempoLectura: '18 min',
    paginas: 24,
    etiquetas: ['intervalos de confianza', 'estimación', 'parámetros'],
    notas: '',
    esPesado: false,
    extension: 'pdf'
  },
  {
    id: 'mat_adc_u2_s5',
    nombre: 'Clase 15 de Mayo: Pruebas de Hipótesis Avanzadas (Presentación Completa)',
    nombreArchivo: 'Clase 15 de mayo.pdf',
    ruta: '/materials/adc/Clase 15 de mayo.pdf',
    ramo: 'adc_2025',
    unidad: 2,
    tipo: 'presentacion',
    semana: 5,
    fechaSubida: '2026-05-15',
    visto: false,
    ultimaVista: null,
    tiempoLectura: '60 min',
    paginas: 112,
    etiquetas: ['pruebas de hipótesis', 'errores tipo I y II', 'potencia estadística'],
    notas: '',
    esPesado: true,
    extension: 'pdf'
  },
  {
    id: 'mat_adc_u3_clase22',
    nombre: 'Clase 2.2: Pruebas de Hipótesis Comparativas y Diseños Experimentales',
    nombreArchivo: 'Copia de Clase 2.2,Pruebas de hipótesis.pdf',
    ruta: '/materials/adc/Copia de Clase 2.2,Pruebas de hipótesis.pdf',
    ramo: 'adc_2025',
    unidad: 3,
    tipo: 'presentacion',
    semana: 6,
    fechaSubida: '2026-05-22',
    visto: false,
    ultimaVista: null,
    tiempoLectura: '50 min',
    paginas: 74,
    etiquetas: ['pruebas de hipótesis', 'comparación de medias', 't-test'],
    notas: '',
    esPesado: true,
    extension: 'pdf'
  },
  {
    id: 'mat_adc_u3_taller',
    nombre: 'Taller Práctico: Análisis de Caso e Hipótesis de Normalidad',
    nombreArchivo: 'Taller análisis de caso, pruebas de normalidad.pdf',
    ruta: '/materials/adc/Taller análisis de caso, pruebas de normalidad.pdf',
    ramo: 'adc_2025',
    unidad: 3,
    tipo: 'ejercicios',
    semana: 7,
    fechaSubida: '2026-05-29',
    visto: false,
    ultimaVista: null,
    tiempoLectura: '15 min',
    paginas: 4,
    etiquetas: ['taller', 'normalidad', 'shapiro-wilk', 'kolmogorov'],
    notas: '',
    esPesado: false,
    extension: 'pdf'
  },
  {
    id: 'mat_adc_gen_tabla_normal',
    nombre: 'Tabla de Distribución Normal Estándar Reducida',
    nombreArchivo: 'Tabla_normal_estandar_o_reducida.pdf',
    ruta: '/materials/adc/Tabla_normal_estandar_o_reducida.pdf',
    ramo: 'adc_2025',
    unidad: null,
    tipo: 'formulario',
    semana: null,
    fechaSubida: '2026-03-05',
    visto: false,
    ultimaVista: null,
    tiempoLectura: '5 min',
    paginas: 2,
    etiquetas: ['tabla estadística', 'distribución normal', 'z-scores'],
    notas: '',
    esPesado: false,
    extension: 'pdf'
  },
  {
    id: 'mat_adc_gen_tabla_z',
    nombre: 'Tabla Z de Dos Colas (Z Doble)',
    nombreArchivo: 'tabla z doble.pdf',
    ruta: '/materials/adc/tabla z doble.pdf',
    ramo: 'adc_2025',
    unidad: null,
    tipo: 'formulario',
    semana: null,
    fechaSubida: '2026-03-05',
    visto: false,
    ultimaVista: null,
    tiempoLectura: '5 min',
    paginas: 2,
    etiquetas: ['tabla z', 'distribución z', 'dos colas'],
    notas: '',
    esPesado: false,
    extension: 'pdf'
  },
  {
    id: 'mat_adc_gen_xlsx',
    nombre: 'Base de Datos Métodos Cuantitativos (Dataset Práctico)',
    nombreArchivo: 'Base de datos metodos cuanti.xlsx',
    ruta: '/materials/adc/Base de datos metodos cuanti.xlsx',
    ramo: 'adc_2025',
    unidad: null,
    tipo: 'otro',
    semana: null,
    fechaSubida: '2026-03-05',
    visto: false,
    ultimaVista: null,
    tiempoLectura: '10 min',
    paginas: 1,
    etiquetas: ['base de datos', 'spss', 'excel', 'ejercicios prácticos'],
    notas: '',
    esPesado: false,
    extension: 'xlsx'
  }
];
