# DANIELA'S STUDY SPACE
## Documento Técnico de Diseño — Plataforma Personal de Estudio
### Versión 1.0 — Diseño Completo Pre-Implementación

---

> *"Este espacio fue creado exclusivamente para ti, Daniela. Cada rincón de esta plataforma fue pensado para que estudiar se sienta tuyo, cómodo, y significativo."*

---

## TABLA DE CONTENIDOS

1. Concepto General del Producto
2. Identidad Visual
3. Experiencia de Usuario (UX)
4. Dashboard Principal
5. Página de Bienvenida Personalizada
6. Sistema de Materias
7. Sistema de Biblioteca de PDFs
8. Visualizador Integrado de PDFs
9. Sistema de Resúmenes
10. Sistema de Conceptos Clave
11. Sistema de Flashcards
12. Sistema de Autoevaluaciones
13. Sistema de Progreso Académico
14. Calendario Académico
15. Sistema de Búsqueda de Contenidos
16. Panel Principal — Análisis de Datos Cuantitativos
17. Preparación para Futuros Ramos
18. Arquitectura de Carpetas React
19. Componentes Reutilizables
20. Estructura de Navegación
21. Roadmap de Implementación

---

## 1. CONCEPTO GENERAL DEL PRODUCTO

### 1.1 Nombre de la Plataforma

**Daniela's Study Space** — abreviado como **DSS**.

El nombre no es genérico. No es "EduApp" ni "StudyPro". Es el nombre de ella. Eso es intencional: desde el primer segundo que Daniela abre la plataforma, sabe que este espacio es suyo.

### 1.2 Propósito Central

DSS es un **espacio digital personal de estudio universitario** diseñado específicamente para Daniela Moraga, estudiante de Psicología en la Universidad Mayor de Chile, tercer semestre. La plataforma centraliza todos sus materiales, organiza su proceso de aprendizaje, y la acompaña activamente en la preparación de sus evaluaciones.

No es un LMS (Learning Management System) institucional. No es Moodle. No es una app genérica de notas. Es un entorno diseñado como si un equipo completo de diseño y desarrollo hubiese dedicado meses a entender cómo estudia Daniela y cómo se puede mejorar esa experiencia.

### 1.3 Principios de Diseño del Producto

| Principio | Descripción |
|-----------|-------------|
| **Personalización Real** | El nombre de Daniela aparece en múltiples contextos, no como adorno sino como confirmación de pertenencia. |
| **Claridad sin Frialdad** | Organización rigurosa presentada con calidez visual y lenguaje cercano. |
| **Progresión Visible** | Daniela siempre puede ver cuánto ha avanzado, cuánto le falta, y qué viene. |
| **Cero Fricción** | Acceder a un PDF, una flashcard o un resumen debe tomar máximo dos clics. |
| **Escalabilidad Elegante** | Agregar un nuevo ramo debe sentirse natural, no como una tarea técnica. |
| **Motivación Integrada** | El diseño mismo es motivador: no depende de gamificación agresiva, sino de estética y sensación de logro. |

### 1.4 Usuario Central

```
Nombre:          Daniela Moraga
Edad:            19 años
Universidad:     Universidad Mayor de Chile
Carrera:         Psicología
Semestre:        Tercer semestre (en curso)
Ramo prioritario: Análisis de Datos Cuantitativos
Contexto:        Estudiante universitaria que necesita organización,
                 herramientas de estudio efectivas, y un espacio
                 propio que le genere motivación para rendir mejor.
```

### 1.5 Propuesta de Valor Diferencial

La diferencia entre DSS y cualquier otra solución de estudio es que **DSS conoce a Daniela**. No genéricamente — la conoce en el contexto de su carrera (Psicología), su semestre (tercero), sus necesidades específicas (estadística, datos cuantitativos, pensamiento crítico en ciencias sociales), y su contexto emocional (universitaria joven que necesita motivación real, no solo información).

---

## 2. IDENTIDAD VISUAL

### 2.1 Filosofía de Diseño Visual

La identidad visual de DSS se construye alrededor del concepto de **"Claridad Cálida"**: un equilibrio entre la precisión académica y la calidez personal. La plataforma debe verse sofisticada —digna de una estudiante universitaria seria— pero nunca fría, nunca institucional, nunca genérica.

El punto de referencia estético está en algún lugar entre **Notion**, **Linear**, y un cuaderno de apuntes bien diseñado. Elegante, con personalidad, funcional.

### 2.2 Paleta de Colores

#### Color Primario — "Daniela Blue"
```
Principal:     #3B6FE8   (Azul intenso, confianza, profundidad académica)
Oscuro:        #2851C4   (Para hover states, énfasis)
Claro:         #6B93F0   (Para elementos secundarios)
Muy Claro:     #E8EFFE   (Para backgrounds de cards y secciones)
```

#### Color Secundario — "Warm Sage"
```
Principal:     #5C8A6E   (Verde salvia, crecimiento, calma, psicología)
Oscuro:        #3D6B50
Claro:         #89B09A
Muy Claro:     #EBF3EE
```

#### Color de Acento — "Dusk Rose"
```
Principal:     #D4647A   (Rosa cálido, logros, alertas positivas)
Oscuro:        #B8475E
Claro:         #E8909E
Muy Claro:     #FDF0F2
```

#### Color Terciario — "Amber Focus"
```
Principal:     #E8952A   (Ámbar, deadlines, prioridades, recordatorios)
Oscuro:        #C4761A
Claro:         #F0B660
Muy Claro:     #FEF5E7
```

#### Neutrales
```
Background:    #F8F7F4   (Crema muy claro, papel de cuaderno premium)
Surface:       #FFFFFF   (Blanco puro para cards)
Surface Alt:   #F3F2EF   (Gris muy suave para secciones alternadas)
Border:        #E4E2DC   (Borde suave, orgánico)
Text Primary:  #1A1916   (Casi negro, cálido)
Text Secondary:#6B6860   (Gris cálido para subtextos)
Text Tertiary: #9E9C98   (Para metadatos, timestamps)
```

### 2.3 Tipografía

#### Display / Headers Principales
```
Familia:     "Playfair Display"
Fuente:      Google Fonts
Pesos:       400, 600, 700, 900
Uso:         Títulos de secciones principales, nombre de Daniela en
             el dashboard, títulos de materias.
Justificación: Elegante, con personalidad, reminiscente de libros
              universitarios de calidad. No es corporativa — es académica
              pero cálida.
```

#### UI / Interfaz Principal
```
Familia:     "DM Sans"
Fuente:      Google Fonts
Pesos:       300, 400, 500, 600
Uso:         Navegación, labels, body text, botones, inputs.
Justificación: Moderna, extremadamente legible, geométrica pero orgánica.
              Perfecta para interfaces educativas que necesitan
              profesionalismo sin rigidez.
```

#### Código / Datos / Estadísticas
```
Familia:     "JetBrains Mono"
Fuente:      Google Fonts
Pesos:       400, 500
Uso:         Valores numéricos en estadísticas, porcentajes de progreso,
             fórmulas en Análisis de Datos Cuantitativos.
Justificación: Cuando Daniela ve números de datos cuantitativos, deben
              verse como datos — precisos, técnicos, legibles.
```

### 2.4 Escala Tipográfica

```
Display XL:   Playfair Display 900, 48px, line-height 1.15
Display L:    Playfair Display 700, 36px, line-height 1.2
H1:           Playfair Display 700, 28px, line-height 1.3
H2:           DM Sans 600, 22px, line-height 1.35
H3:           DM Sans 600, 18px, line-height 1.4
H4:           DM Sans 500, 16px, line-height 1.4
Body L:       DM Sans 400, 16px, line-height 1.65
Body:         DM Sans 400, 14px, line-height 1.6
Body S:       DM Sans 400, 13px, line-height 1.55
Caption:      DM Sans 400, 12px, line-height 1.5
Label:        DM Sans 500, 11px, line-height 1.4, letter-spacing 0.08em
```

### 2.5 Espaciado y Layout

```
Sistema de Grid:    12 columnas con gutter de 24px
Breakpoints:        Mobile: 375px | Tablet: 768px | Desktop: 1280px | Wide: 1440px
Contenedor max:     1200px centrado
Espaciado base:     8px (múltiplos: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96)
Border Radius:      Cards: 16px | Botones: 10px | Inputs: 10px | Badges: 999px
```

### 2.6 Sombras y Elevación

```
Level 0:  none (elementos flat, sin elevación)
Level 1:  0 1px 3px rgba(26,25,22,0.06), 0 1px 2px rgba(26,25,22,0.04)
Level 2:  0 4px 12px rgba(26,25,22,0.08), 0 2px 4px rgba(26,25,22,0.04)
Level 3:  0 8px 24px rgba(26,25,22,0.10), 0 4px 8px rgba(26,25,22,0.06)
Level 4:  0 16px 40px rgba(26,25,22,0.12), 0 8px 16px rgba(26,25,22,0.08)
```

### 2.7 Iconografía

Sistema de iconos: **Lucide React** (consistente, moderno, abierto).
Tamaños estándar: 16px (inline), 20px (UI), 24px (acciones), 32px (secciones).
Estilo: línea, stroke uniforme de 1.5px. No rellenos. No sólidos.

### 2.8 Ilustraciones y Elementos Visuales

Para los estados vacíos, páginas de bienvenida y momentos de celebración, se usarán ilustraciones SVG personalizadas de estilo **lineal cálido** (no flat 2D genérico, no 3D). Las ilustraciones deben sentirse como bocetos de cuaderno universitario — con pequeños detalles de psicología, libros, datos, etc.

### 2.9 Motion Design

```
Duración base:      200ms (micro-interacciones como hover, toggle)
Duración media:     350ms (transiciones de página, modales)
Duración larga:     500ms (animaciones de onboarding, celebraciones)
Easing estándar:    cubic-bezier(0.16, 1, 0.3, 1) — suave, natural
Easing entrada:     cubic-bezier(0.4, 0, 0.2, 1) — Material-like para datos
Principio:          Las animaciones deben reforzar la navegación, nunca
                    entorpecerla. Nada dura más de 500ms en flujos de estudio.
```

---

## 3. EXPERIENCIA DE USUARIO (UX)

### 3.1 Filosofía de UX

El principio guía de la UX de DSS es **"Estudiar, No Navegar"**. La plataforma existe para que Daniela estudie, no para que descubra cómo usar la plataforma. Cada decisión de UX debe reducir la carga cognitiva —que ya es alta en un contexto de estudio— no aumentarla.

### 3.2 Mapas de Usuario

#### Flujo 1: Sesión de Estudio Típica

```
INICIO
  │
  ▼
Dashboard Personal
  │  (Ve saludo, progreso del día, próxima evaluación)
  ▼
Selecciona Ramo
  │  (Click en "Análisis de Datos Cuantitativos")
  ▼
Panel del Ramo
  │  (Ve unidades, materiales disponibles, su progreso)
  ├──→ Opción A: Abrir PDF de clase
  │         └──→ Visualizador PDF
  ├──→ Opción B: Repasar Flashcards
  │         └──→ Modal de Flashcards
  ├──→ Opción C: Ver Resumen de Unidad
  │         └──→ Vista de Resumen
  └──→ Opción D: Hacer Autoevaluación
            └──→ Quiz Interactivo
                  └──→ Resultados + Áreas a Reforzar
```

#### Flujo 2: Preparación para Prueba

```
Dashboard
  │  (Ve alerta "Prueba en 3 días: Estadística Descriptiva")
  ▼
Accede al panel de preparación de prueba
  │
  ├──→ Revisa Conceptos Clave de la Unidad
  ├──→ Repasa Flashcards de la Unidad
  ├──→ Hace Autoevaluación Completa
  │         └──→ Identifica áreas débiles
  │                   └──→ Regresa a materiales específicos
  └──→ Accede al Resumen Rápido
```

#### Flujo 3: Buscar Contenido Específico

```
Cualquier pantalla
  │  (Atajo de teclado: Cmd/Ctrl + K)
  ▼
Barra de Búsqueda Global
  │  (Escribe "desviación estándar")
  ▼
Resultados agrupados:
  ├── PDFs que contienen el término (con contexto)
  ├── Flashcards relacionadas
  ├── Conceptos Clave
  └── Resúmenes
       └──→ Acceso directo al contenido
```

### 3.3 Principios de Interacción

**Consistencia Predecible**: Las acciones similares se hacen igual en toda la plataforma. Siempre el mismo botón primario, siempre el mismo patrón de modal, siempre el mismo diseño de card.

**Feedback Inmediato**: Cada acción tiene respuesta visual en menos de 100ms (aunque la acción tarde más). Loading states siempre presentes.

**Recuperación Fácil**: No hay acciones destructivas sin confirmación. No hay "pasos atrás" complicados.

**Contexto Permanente**: Daniela siempre sabe dónde está. Breadcrumbs, títulos claros, navegación activa resaltada.

### 3.4 Accesibilidad

- Contraste mínimo WCAG AA en todos los textos
- Todos los elementos interactivos tienen focus visible
- Navegación completa por teclado en elementos críticos
- Textos alternativos en imágenes relevantes
- Tamaño mínimo de target táctil: 44x44px

---

## 4. DASHBOARD PRINCIPAL

### 4.1 Concepto del Dashboard

El dashboard es el **"cuarto de estudio digital"** de Daniela. Es la primera pantalla que ve cada vez que abre la plataforma. Debe transmitir en segundos:
- Dónde estoy en mi semestre
- Qué debo estudiar hoy
- Cuánto he avanzado
- Qué se viene próximamente

### 4.2 Layout del Dashboard

```
┌─────────────────────────────────────────────────────────────────────┐
│  SIDEBAR  │                  MAIN CONTENT                           │
│  (240px)  │                  (fluid)                                │
│           │                                                         │
│  Logo     │  ┌─────────────────────────────────────────────────┐   │
│  DSS      │  │           HERO / SALUDO PERSONAL                │   │
│           │  │  "Buenos días, Daniela 👋"                       │   │
│  ─────    │  │  "Hoy es un buen día para repasar Estadística"  │   │
│           │  └─────────────────────────────────────────────────┘   │
│  🏠 Inicio│                                                         │
│  📚 Ramos │  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐   │
│  📅 Cal.  │  │ STREAK CARD  │ │ PRÓXIMA EVAL │ │ PROGRESO HOY │   │
│  📊 Prog. │  │  🔥 7 días   │ │  📋 Prueba   │ │  ████░░ 60%  │   │
│  🔍 Buscar│  │  estudiando  │ │  en 3 días   │ │  2/3 metas   │   │
│           │  └──────────────┘ └──────────────┘ └──────────────┘   │
│  ─────    │                                                         │
│           │  ┌─────────────────────────────────────────────────┐   │
│  📋 ADC   │  │           MIS RAMOS (semestre actual)            │   │
│  (ramo    │  │  ┌─────────────────┐  ┌─────────────────┐       │   │
│  activo)  │  │  │ ANÁLISIS DATOS  │  │   [+ Agregar]   │       │   │
│           │  │  │ CUANTITATIVOS   │  │   nuevo ramo    │       │   │
│           │  │  │ ████████░░ 78%  │  │                 │       │   │
│  ─────    │  │  │ 3 materiales    │  │                 │       │   │
│           │  │  │ nuevos          │  │                 │       │   │
│  ⚙️ Config │  │  └─────────────────┘  └─────────────────┘       │   │
│           │  └─────────────────────────────────────────────────┘   │
│           │                                                         │
│           │  ┌─────────────────────┐  ┌─────────────────────────┐ │
│           │  │   ACTIVIDAD RECIENTE│  │   PARA ESTUDIAR HOY     │ │
│           │  │   (últimas acciones)│  │   (sugerencias AI)      │ │
│           │  └─────────────────────┘  └─────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
```

### 4.3 Componentes del Dashboard

#### Hero/Saludo Personal
- Saludo con nombre completo, varía según hora del día
- Subtítulo inteligente: puede basarse en el día de la semana, proximidad a evaluaciones, o rachas de estudio
- Fecha actual en formato natural: "Miércoles, 4 de junio de 2025"
- Indicador del semestre: "Tercer semestre · Universidad Mayor"

#### Tarjetas de Resumen Rápido (3 columnas)
1. **Racha de Estudio**: Días consecutivos estudiando, con animación de fuego sutil
2. **Próxima Evaluación**: Contador regresivo visual, nombre del ramo y tipo de evaluación
3. **Progreso del Día**: Barra de progreso de metas diarias (configurable)

#### Módulo de Ramos Activos
- Cards de cada ramo con:
  - Nombre completo del ramo
  - Porcentaje de progreso del material
  - Número de flashcards disponibles
  - Número de materiales nuevos no revisados
  - Indicador visual de color asociado al ramo
  - CTA "Continuar estudiando"

#### Actividad Reciente
- Timeline de las últimas 5 acciones: "Abriste PDF de Unidad 2", "Completaste 15 flashcards", "Hiciste quiz: 8/10"

#### Para Estudiar Hoy
- Lista de sugerencias basadas en: proximidad de evaluaciones, tiempo desde última revisión de material, temas identificados como débiles en autoevaluaciones

---

## 5. PÁGINA DE BIENVENIDA PERSONALIZADA

### 5.1 Concepto

Esta pantalla aparece **la primera vez que Daniela accede a la plataforma**, y potencialmente en el inicio de cada semestre. Es el momento más emocional de la experiencia — un regalo visual que dice "esto fue hecho para ti".

### 5.2 Estructura de la Pantalla de Bienvenida

**Fase 1 — Splash (2 segundos)**
```
Pantalla completa, fondo gradiente muy suave (crema → blanco)
Centro: iniciales "DM" en tipografía Playfair Display, animación de entrada
Debajo: "Cargando tu espacio de estudio..."
```

**Fase 2 — Bienvenida Principal**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│    ┌─────────────────────────────────────────────────────┐     │
│    │                                                     │     │
│    │         Hola, Daniela Moraga. 🌿                   │     │
│    │                                                     │     │
│    │    Este espacio fue creado exclusivamente           │     │
│    │    para acompañarte en tu camino por la             │     │
│    │    Psicología.                                      │     │
│    │                                                     │     │
│    │    Aquí encontrarás todos tus materiales,           │     │
│    │    resúmenes, flashcards y herramientas            │     │
│    │    de estudio — organizados, accesibles            │     │
│    │    y pensados para ti.                              │     │
│    │                                                     │     │
│    │    Universidad Mayor · Psicología · Semestre 3     │     │
│    │                                                     │     │
│    │              [ Ingresar a mi espacio → ]           │     │
│    │                                                     │     │
│    └─────────────────────────────────────────────────────┘     │
│                                                                 │
│    Elementos decorativos sutiles: pequeñas ilustraciones de    │
│    libros, gráficos de datos, siluetas psicológicas.           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 5.3 Mensaje Inicial Fijo

El mensaje de bienvenida es fijo e inamovible en el código. Es un mensaje personal, cálido, que sirve como carta de presentación de la plataforma. No es generado dinámicamente — es un texto cuidadosamente escrito que permanece como el regalo original.

---

## 6. SISTEMA DE MATERIAS

### 6.1 Arquitectura de Materias

Cada materia es un **módulo autocontenido** dentro de la plataforma. Tiene su propio espacio visual, su propia identidad de color (heredada del sistema principal pero con un acento único), y su propia jerarquía de contenido.

### 6.2 Estructura de Datos de una Materia

```javascript
{
  id: "adc_2025",
  nombre: "Análisis de Datos Cuantitativos",
  codigoCorto: "ADC",
  semestre: 3,
  año: 2025,
  colorAccent: "#3B6FE8",
  profesora: "[nombre a completar]",
  descripcion: "Fundamentos de estadística y análisis cuantitativo aplicado a la Psicología",
  unidades: [...],
  materiales: [...],
  evaluaciones: [...],
  progreso: {
    materialesVistos: 0,
    flashcardsRepasadas: 0,
    quizzesCompletados: 0,
    porcentajeGeneral: 0
  },
  estado: "activo" // activo | archivado | próximo
}
```

### 6.3 Vista de Detalle de una Materia

La página interna de cada materia tiene:

```
┌─────────────────────────────────────────────────────────────────┐
│  ← Volver    ANÁLISIS DE DATOS CUANTITATIVOS          ADC       │
│  ─────────────────────────────────────────────────────────────  │
│                                                                  │
│  BARRA DE PROGRESO GENERAL ████████░░ 78%                       │
│                                                                  │
│  TABS: [ Materiales ] [ Resúmenes ] [ Flashcards ] [ Quizzes ]  │
│         [ Conceptos Clave ] [ Calendario ]                       │
│  ─────────────────────────────────────────────────────────────  │
│                                                                  │
│  UNIDADES                                                        │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  UNIDAD 1: Estadística Descriptiva               ✅ 100% │   │
│  │  4 PDFs · 12 flashcards · 1 quiz completado             │   │
│  └──────────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  UNIDAD 2: Distribuciones de Probabilidad        🔵 60%  │   │
│  │  3 PDFs · 8 flashcards · quiz pendiente                  │   │
│  └──────────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  UNIDAD 3: Pruebas de Hipótesis                  ○ 0%   │   │
│  │  2 PDFs agregados recientemente                          │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

### 6.4 Materias Futuras Planificadas

La arquitectura debe soportar desde el inicio estas categorías de materias de Psicología:

```
Área Clínica:
  - Psicopatología
  - Técnicas Psicoterapéuticas
  - Psicología Clínica

Área Investigación:
  - Análisis de Datos Cuantitativos (ACTUAL)
  - Metodología de Investigación
  - Estadística Aplicada a la Psicología

Área Desarrollo:
  - Psicología del Desarrollo
  - Psicología Evolutiva

Área Social/Organizacional:
  - Psicología Social
  - Psicología Organizacional

Área Fundamentos:
  - Historia y Sistemas en Psicología
  - Neurociencias
  - Teorías de la Personalidad
```

---

## 7. SISTEMA DE BIBLIOTECA DE PDFs

### 7.1 Concepto

La biblioteca es el **corazón de contenidos** de DSS. Todos los PDFs, presentaciones y apuntes que Daniela necesita están aquí, organizados de manera que encontrar cualquier material tome menos de 10 segundos.

### 7.2 Organización Jerárquica

```
📚 BIBLIOTECA
├── 📂 Análisis de Datos Cuantitativos
│   ├── 📁 Unidad 1 — Estadística Descriptiva
│   │   ├── 📄 PPT_01_Introduccion_Estadistica.pdf
│   │   ├── 📄 PPT_02_Medidas_Tendencia_Central.pdf
│   │   ├── 📄 Apuntes_Clase_Semana1.pdf
│   │   └── 📄 Guia_Ejercicios_U1.pdf
│   ├── 📁 Unidad 2 — Distribuciones
│   │   ├── 📄 PPT_03_Distribuciones.pdf
│   │   └── 📄 Lectura_Obligatoria_Cap3.pdf
│   └── 📁 Material General
│       ├── 📄 Programa_del_Ramo.pdf
│       └── 📄 Formula_Sheet.pdf
└── 📂 [Futuros Ramos]
```

### 7.3 Metadata de Cada Archivo

```javascript
{
  id: "pdf_adc_u1_01",
  nombre: "Introducción a la Estadística",
  nombreArchivo: "PPT_01_Introduccion_Estadistica.pdf",
  ruta: "/materials/adc/unidad1/PPT_01_Introduccion_Estadistica.pdf",
  ramo: "adc_2025",
  unidad: 1,
  tipo: "presentacion", // presentacion | apuntes | lectura | guia | ejercicios | otro
  semana: 1,
  fechaSubida: "2025-03-10",
  visto: false,
  ultimaVista: null,
  tiempoLectura: "15 min", // estimado
  paginas: 24,
  etiquetas: ["estadística descriptiva", "introducción", "conceptos básicos"],
  notas: "" // notas personales de Daniela sobre este material
}
```

### 7.4 Vista de la Biblioteca

**Vista Grid** (por defecto para explorar):
```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│  📄           │  │  📄           │  │  📄           │
│               │  │               │  │               │
│  Introducción │  │  Medidas de   │  │  Apuntes     │
│  Estadística  │  │  Tendencia    │  │  Clase 1     │
│               │  │               │  │               │
│  24 págs      │  │  18 págs      │  │  8 págs      │
│  Semana 1     │  │  Semana 2     │  │  Semana 1    │
│  ✅ Visto     │  │  ✅ Visto     │  │  ○ No visto  │
└──────────────┘  └──────────────┘  └──────────────┘
```

**Vista Lista** (para gestión rápida):
Tabla con columnas: Icono · Nombre · Tipo · Semana · Páginas · Estado · Última vista · Acciones

### 7.5 Filtros de la Biblioteca

- Por Ramo
- Por Unidad
- Por Tipo (presentación, apuntes, lectura, etc.)
- Por Estado (visto / no visto / en progreso)
- Por Semana
- Por Etiquetas

---

## 8. VISUALIZADOR INTEGRADO DE PDFs

### 8.1 Concepto

Daniela no debe salir de la plataforma para leer un PDF. El visualizador está integrado directamente en DSS, y ofrece una experiencia de lectura mejor que abrir el archivo en otra pestaña.

### 8.2 Tecnología Recomendada

**react-pdf** (versión más reciente de @react-pdf/renderer o pdfjs-dist). Es la librería más madura para renderizar PDFs en React sin salir de la aplicación.

### 8.3 Layout del Visualizador

```
┌─────────────────────────────────────────────────────────────────┐
│  ← Biblioteca   PPT_01_Introduccion_Estadistica.pdf     ⚙️  ✕  │
│  ─────────────────────────────────────────────────────────────  │
│                                                                  │
│  TOOLBAR:  ◀ Página 3 / 24 ▶  [-] 100% [+]  [↔ Pantalla]      │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                                                         │   │
│  │  SIDEBAR MINIATURAS  │  CONTENIDO PDF PRINCIPAL         │   │
│  │  (60px)              │  (fluid)                         │   │
│  │                      │                                  │   │
│  │  [miniatura 1] ✓     │  [página renderizada del PDF]   │   │
│  │  [miniatura 2] ✓     │                                  │   │
│  │  [miniatura 3] →     │                                  │   │
│  │  [miniatura 4]       │                                  │   │
│  │  [miniatura 5]       │                                  │   │
│  │                      │                                  │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│  BARRA INFERIOR: 📝 Agregar nota  🔖 Marcar página  📤 Compartir│
└─────────────────────────────────────────────────────────────────┘
```

### 8.4 Funcionalidades del Visualizador

- Navegación por páginas (anterior / siguiente / número directo)
- Zoom in/out (50% a 200%)
- Modo pantalla completa
- Miniaturas de navegación lateral
- Marcador de última página vista (persistido en localStorage)
- Notas personales por página (texto simple, guardado en localStorage)
- Marcadores de páginas importantes
- Indicador de progreso de lectura
- Tiempo estimado de lectura restante

---

## 9. SISTEMA DE RESÚMENES

### 9.1 Concepto

Los resúmenes en DSS no son documentos de texto largos. Son **resúmenes estructurados** por unidad, con formato visual claro: secciones colapsables, ideas principales destacadas, y acceso rápido a los conceptos clave de cada sección.

### 9.2 Estructura de un Resumen

```javascript
{
  id: "resumen_adc_u1",
  titulo: "Unidad 1: Estadística Descriptiva",
  ramo: "adc_2025",
  unidad: 1,
  fechaCreacion: "2025-03-15",
  ultimaEdicion: "2025-04-02",
  secciones: [
    {
      id: "sec_1",
      titulo: "¿Qué es la Estadística Descriptiva?",
      contenido: "Texto del resumen...",
      conceptosClave: ["media", "mediana", "moda"],
      nivel: "esencial" // esencial | ampliado | adicional
    }
  ],
  tiempoLectura: "8 min",
  visto: false
}
```

### 9.3 Vista de Resumen

```
┌─────────────────────────────────────────────────────────────────┐
│  Resumen · Unidad 1                                    ✏️ Editar│
│                                                                  │
│  ESTADÍSTICA DESCRIPTIVA                                        │
│  ─────────────────────────────────────────────────────────────  │
│  ⏱ 8 min de lectura  |  Última edición: 2 abr                  │
│                                                                  │
│  ▼ ¿QUÉ ES LA ESTADÍSTICA DESCRIPTIVA?          [Esencial]     │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  La estadística descriptiva es el conjunto de...        │   │
│  │                                                         │   │
│  │  Conceptos clave: [media] [mediana] [moda]              │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ▼ MEDIDAS DE TENDENCIA CENTRAL                  [Esencial]    │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  ...                                                    │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ► MEDIDAS DE DISPERSIÓN                         [Ampliado]    │
│  ► REPRESENTACIÓN GRÁFICA                        [Adicional]   │
└─────────────────────────────────────────────────────────────────┘
```

### 9.4 Resumen Rápido (Quick Summary)

Vista especial de "resumen de resumen" — los 5 puntos más importantes de una unidad en formato de lista, pensado para repasar 10 minutos antes de una evaluación.

---

## 10. SISTEMA DE CONCEPTOS CLAVE

### 10.1 Concepto

El glosario inteligente de DSS. Cada concepto importante de cada ramo tiene su propia entrada, conectada a los materiales donde aparece.

### 10.2 Estructura de un Concepto

```javascript
{
  id: "concepto_media_aritmetica",
  termino: "Media Aritmética",
  definicion: "Suma de todos los valores de un conjunto dividida entre el número total de valores.",
  formula: "x̄ = (Σxᵢ) / n",
  ejemplo: "Para los valores 2, 4, 6: x̄ = (2+4+6)/3 = 4",
  ramo: "adc_2025",
  unidad: 1,
  importancia: "alta", // alta | media | baja
  relacionadosCon: ["mediana", "moda", "medidas_tendencia_central"],
  apareceEn: ["pdf_adc_u1_01", "pdf_adc_u1_02"], // IDs de materiales
  tieneFlashcard: true,
  visto: false,
  etiquetas: ["estadística descriptiva", "tendencia central"]
}
```

### 10.3 Vista del Glosario

```
┌─────────────────────────────────────────────────────────────────┐
│  Conceptos Clave · ADC                    🔍 Buscar concepto   │
│                                                                  │
│  FILTROS: [Todos] [Alta Importancia] [No vistos] [Unidad 1▾]   │
│                                                                  │
│  RESULTADOS (24 conceptos)                                       │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  🔴 Media Aritmética                          [U1]      │   │
│  │  Suma de todos los valores dividida entre n             │   │
│  │  Fórmula: x̄ = (Σxᵢ) / n    [Ver detalle →]            │   │
│  └─────────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  🔴 Desviación Estándar                       [U1]      │   │
│  │  Medida de dispersión que indica...           [Ver →]   │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

---

## 11. SISTEMA DE FLASHCARDS

### 11.1 Concepto

Las flashcards de DSS usan el principio de **repetición espaciada** (Spaced Repetition System — SRS). Daniela repasa las tarjetas, indica si la recordó fácil, difícil, o no la recordó, y el sistema ajusta cuándo mostrársela de nuevo.

### 11.2 Estructura de una Flashcard

```javascript
{
  id: "fc_media_001",
  frente: "¿Cuál es la fórmula de la Media Aritmética?",
  reverso: "x̄ = (Σxᵢ) / n\n\nDonde:\n• x̄ = media\n• Σxᵢ = suma de todos los valores\n• n = número de valores",
  imagen: null, // ruta a imagen opcional
  ramo: "adc_2025",
  unidad: 1,
  conceptoRelacionado: "concepto_media_aritmetica",
  dificultad: "facil", // facil | medio | dificil
  srs: {
    intervalo: 1, // días hasta próxima revisión
    facilidad: 2.5, // factor de facilidad SRS
    repeticiones: 0,
    ultimaReview: null,
    proximaReview: null
  }
}
```

### 11.3 Modo de Estudio de Flashcards

```
┌─────────────────────────────────────────────────────────────────┐
│  Flashcards · ADC Unidad 1       Progreso: 7/24    ✕ Salir    │
│  ─────────────────────────────────────────────────────────────  │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                                                         │   │
│  │                                                         │   │
│  │      ¿Cuál es la fórmula de la                         │   │
│  │      Media Aritmética?                                  │   │
│  │                                                         │   │
│  │                                                         │   │
│  │              [ Voltear tarjeta ]                       │   │
│  │                                                         │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│                    ═══════════════════════                      │
│                   (después de voltear)                          │
│                    ═══════════════════════                      │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │   x̄ = (Σxᵢ) / n                                        │   │
│  │                                                         │   │
│  │   Donde: x̄ = media, Σxᵢ = suma, n = N valores          │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ¿Cómo te fue?                                                  │
│  [ 😰 No la sabía ] [ 🤔 Con dificultad ] [ 😊 Fácil ]         │
└─────────────────────────────────────────────────────────────────┘
```

### 11.4 Sesión de Flashcards

- Modos: Por unidad | Por ramo completo | Solo las difíciles | Modo examen (orden aleatorio)
- Estadísticas al final: porcentaje recordado, tiempo de sesión, mejora respecto a sesión anterior
- Opción de agregar nota personal a una flashcard durante la sesión

---

## 12. SISTEMA DE AUTOEVALUACIONES

### 12.1 Concepto

Los quizzes de DSS están diseñados para que Daniela **evalúe su comprensión real**, no solo si memorizó datos. Las preguntas pueden ser de opción múltiple, verdadero/falso, o completar la fórmula/definición.

### 12.2 Estructura de una Pregunta

```javascript
{
  id: "q_u1_001",
  tipo: "opcion_multiple", // opcion_multiple | verdadero_falso | completar
  pregunta: "Si los valores de un conjunto son 2, 4, 6, 8, 10, ¿cuál es la media aritmética?",
  opciones: ["4", "6", "5", "8"],
  respuestaCorrecta: "6",
  explicacion: "La media se calcula sumando todos los valores (30) y dividiendo entre el número de valores (5): 30/5 = 6",
  dificultad: "basico", // basico | intermedio | avanzado
  ramo: "adc_2025",
  unidad: 1,
  conceptosEvaluados: ["media_aritmetica"],
  tiempoRecomendado: 60 // segundos
}
```

### 12.3 Flujo de Autoevaluación

```
SELECCIÓN
  │  Elige: Ramo → Unidad → Número de preguntas (5/10/20/todas)
  │  Modo: Estudio (ve respuestas al instante) | Examen (ve al final)
  ▼
QUIZ
  │  Pregunta 1/10 — Barra de progreso — Temporizador opcional
  ▼
RESULTADOS
  │  Puntuación: 8/10 (80%)
  │  Tiempo total: 6:32
  │  Preguntas incorrectas: lista con explicación
  │  Conceptos a reforzar: [links a material]
  │  Comparación: "Mejoré 20% respecto a la vez anterior"
  ▼
ACCIONES POST-QUIZ
  │  [ Revisar respuestas ]
  │  [ Ir a conceptos débiles ]
  │  [ Repetir quiz ]
  └──[ Volver al panel del ramo ]
```

### 12.4 Vista de Resultados Detallados

```
┌─────────────────────────────────────────────────────────────────┐
│  Resultados · Quiz Unidad 1 · ADC                               │
│                                                                  │
│           ████████░░  80%                                       │
│           8 de 10 preguntas correctas                           │
│                                                                  │
│  ⏱ Tiempo: 6:32    📈 +20% vs. quiz anterior                   │
│                                                                  │
│  DESGLOSE POR CONCEPTO                                          │
│  ✅ Media Aritmética          3/3  ████████████ 100%            │
│  ✅ Mediana                   2/2  ████████████ 100%            │
│  ⚠️ Desviación Estándar       1/3  ████░░░░░░░░  33%            │
│  ✅ Varianza                  2/2  ████████████ 100%            │
│                                                                  │
│  📌 RECOMENDACIÓN                                               │
│  Refuerza Desviación Estándar. Te recomendamos revisar:         │
│  [ PPT_02_Medidas_Dispersion ] [ Flashcards de Dispersión ]     │
│                                                                  │
│  [ Repetir quiz ] [ Ver explicaciones ] [ Ir al panel ]         │
└─────────────────────────────────────────────────────────────────┘
```

---

## 13. SISTEMA DE PROGRESO ACADÉMICO

### 13.1 Concepto

El dashboard de progreso da a Daniela una vista **honesta y motivadora** de su avance. No es un sistema de puntos gamificado — es un reflejo real de cuánto ha estudiado y cuán bien está dominando cada tema.

### 13.2 Métricas Rastreadas

```
POR RAMO:
├── % de materiales vistos
├── % de flashcards dominadas (según SRS)
├── Promedio de quizzes (últimas 5 sesiones)
├── Tiempo total de estudio (acumulado)
├── Racha de estudio actual (días consecutivos)
├── Temas identificados como fuertes
└── Temas identificados como débiles

POR SESIÓN:
├── Fecha y hora
├── Duración
├── Ramo estudiado
├── Materiales revisados
├── Flashcards repasadas
└── Quizzes completados (con puntaje)

GLOBAL:
├── Total de horas de estudio
├── Racha más larga
├── Número de materiales revisados
└── Evolución de puntajes de quiz en el tiempo
```

### 13.3 Vista de Progreso

```
┌─────────────────────────────────────────────────────────────────┐
│  Mi Progreso · Análisis de Datos Cuantitativos                  │
│                                                                  │
│  RESUMEN GENERAL                                                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │ 🔥 7 días    │  │ ⏱ 14 horas  │  │ 📊 Quiz: 76% │         │
│  │ de racha     │  │ de estudio   │  │  promedio    │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
│                                                                  │
│  PROGRESO POR UNIDAD                                            │
│  Unidad 1 · Estadística Descriptiva                             │
│  Materiales  ██████████ 100%                                    │
│  Flashcards  ████████░░  80%                                    │
│  Quiz avg    ████████░░  82%                                    │
│                                                                  │
│  Unidad 2 · Distribuciones                                      │
│  Materiales  ██████░░░░  60%                                    │
│  Flashcards  ████░░░░░░  40%                                    │
│  Quiz avg    ██████░░░░  60%                                    │
│                                                                  │
│  EVOLUCIÓN DE QUIZZES (gráfico de línea)                        │
│  [gráfico temporal de puntajes en quiz por semana]              │
│                                                                  │
│  MAPA DE CALOR — Actividad de estudio (últimos 30 días)         │
│  [Grid calendario con intensidad de color según actividad]      │
└─────────────────────────────────────────────────────────────────┘
```

---

## 14. CALENDARIO ACADÉMICO

### 14.1 Concepto

El calendario de DSS es **académico, no genérico**. Está diseñado específicamente para el contexto universitario de Daniela: fechas de entrega, pruebas, sesiones de repaso planificadas, y deadlines.

### 14.2 Tipos de Eventos

```javascript
const tiposEvento = {
  prueba: { color: "#D4647A", icono: "📋", prioridad: "alta" },
  examen: { color: "#E8952A", icono: "📝", prioridad: "alta" },
  entrega: { color: "#3B6FE8", icono: "📤", prioridad: "alta" },
  repaso: { color: "#5C8A6E", icono: "📚", prioridad: "media" },
  clase: { color: "#9E9C98", icono: "🎓", prioridad: "baja" },
  personal: { color: "#6B93F0", icono: "⭐", prioridad: "baja" }
};
```

### 14.3 Vista del Calendario

Vista mensual como vista principal, con cambio a vista semanal y vista de lista. Los días con evaluaciones tienen indicador visual prominente. La semana actual siempre está resaltada.

Funcionalidad especial: **"Planificador de Repaso Automático"** — cuando Daniela agrega una prueba, el sistema sugiere automáticamente sesiones de repaso en los días previos con el material relevante de esa unidad.

---

## 15. SISTEMA DE BÚSQUEDA DE CONTENIDOS

### 15.1 Concepto

Búsqueda global que indexa **todo el contenido de texto** de la plataforma: nombres de materiales, resúmenes, conceptos clave, preguntas de flashcards, etiquetas de PDFs.

### 15.2 Funcionamiento

Activación: `Cmd+K` (Mac) / `Ctrl+K` (Windows/Linux) — **command palette** estilo Linear/Notion.

```
┌─────────────────────────────────────────────────────────────────┐
│  🔍  Buscar en todos mis materiales...                          │
│  ─────────────────────────────────────────────────────────────  │
│                                                                  │
│  Búsqueda reciente:                                             │
│  ○ desviación estándar                                          │
│  ○ prueba t de student                                          │
│  ○ distribución normal                                          │
│                                                                  │
│  Accesos rápidos:                                               │
│  📂 Ir a Análisis de Datos Cuantitativos                        │
│  📅 Abrir Calendario                                            │
│  🃏 Flashcards de hoy                                           │
└─────────────────────────────────────────────────────────────────┘
```

Al escribir, los resultados aparecen agrupados por tipo:

```
┌─────────────────────────────────────────────────────────────────┐
│  🔍  desviación estándar                          ←  [Esc]     │
│  ─────────────────────────────────────────────────────────────  │
│                                                                  │
│  CONCEPTOS CLAVE (2)                                            │
│  → Desviación Estándar — ADC Unidad 1                          │
│  → Desviación Típica — ADC Unidad 1                            │
│                                                                  │
│  FLASHCARDS (4)                                                 │
│  → ¿Cuál es la fórmula de la desviación...                     │
│  → ¿Qué diferencia hay entre desviación...                     │
│                                                                  │
│  MATERIALES PDF (3)                                             │
│  → PPT_02_Medidas_Dispersion.pdf — página 8                    │
│  → Apuntes_Semana3.pdf — página 2                              │
│  → Guia_Ejercicios_U1.pdf — página 15                          │
│                                                                  │
│  RESÚMENES (1)                                                  │
│  → Unidad 1: Sección "Medidas de Dispersión"                   │
└─────────────────────────────────────────────────────────────────┘
```

### 15.3 Implementación Técnica

Para la búsqueda de PDFs: La búsqueda en PDFs se basa en **metadatos y etiquetas** definidas al agregar el archivo, no en OCR/extracción de texto completo. El índice de búsqueda es un array en memoria (o localStorage) con todos los metadatos y textos de resúmenes/conceptos/flashcards. Librería recomendada: **Fuse.js** para búsqueda fuzzy sin backend.

---

## 16. PANEL PRINCIPAL — ANÁLISIS DE DATOS CUANTITATIVOS

### 16.1 Concepto del Panel ADC

Este panel es el primer ramo real de DSS. Merece un diseño especialmente pensado para el tipo de contenido que tiene: **estadística, fórmulas, datos, gráficos**. La identidad visual del panel ADC debe transmitir precisión y profundidad analítica.

### 16.2 Layout del Panel ADC

```
┌─────────────────────────────────────────────────────────────────┐
│  ANÁLISIS DE DATOS CUANTITATIVOS          Semestre 3 · 2025    │
│  ─────────────────────────────────────────────────────────────  │
│                                                                  │
│  Progreso General: ████████░░ 78%                               │
│                                                                  │
│  [ Materiales ] [ Resúmenes ] [ Flashcards ] [ Quizzes ]        │
│  [ Conceptos Clave ] [ Mi Progreso ] [ Calendario ]             │
│  ─────────────────────────────────────────────────────────────  │
│                                                                  │
│  UNIDADES DEL RAMO                                              │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  U1  ESTADÍSTICA DESCRIPTIVA                    ✅ 100% │   │
│  │      Media · Mediana · Moda · Dispersión                │   │
│  │      4 PDFs | 12 Flashcards | Quiz: 85%                 │   │
│  │      [ Ver materiales ] [ Repasar flashcards ]          │   │
│  └─────────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  U2  DISTRIBUCIONES DE PROBABILIDAD             🔵 60%  │   │
│  │      Normal · Binomial · Poisson                        │   │
│  │      3 PDFs | 8 Flashcards | Quiz pendiente             │   │
│  │      [ Ver materiales ] [ Hacer quiz ]                  │   │
│  └─────────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  U3  PRUEBAS DE HIPÓTESIS                       ○  0%   │   │
│  │      Prueba t · Chi-cuadrado · ANOVA                    │   │
│  │      2 PDFs nuevos                                      │   │
│  │      [ Comenzar ]                                       │   │
│  └─────────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  U4  CORRELACIÓN Y REGRESIÓN                    ○  0%   │   │
│  │      Pearson · Spearman · Regresión Lineal              │   │
│  │      Materiales próximamente                            │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│  PREPARACIÓN RÁPIDA                                             │
│  ┌─────────────────┐  ┌─────────────────┐                      │
│  │ 🃏 Flashcards   │  │ 📝 Quiz Rápido  │                      │
│  │    del día      │  │   10 preguntas  │                      │
│  │  [ Iniciar ]    │  │   [ Iniciar ]   │                      │
│  └─────────────────┘  └─────────────────┘                      │
└─────────────────────────────────────────────────────────────────┘
```

### 16.3 Contenido Específico ADC Planificado

**Unidades sugeridas para ADC en Psicología:**

```
UNIDAD 1: Estadística Descriptiva
  - Conceptos básicos: población, muestra, variables
  - Escalas de medición (nominal, ordinal, intervalo, razón)
  - Medidas de tendencia central (media, mediana, moda)
  - Medidas de dispersión (rango, varianza, desviación estándar)
  - Distribución de frecuencias y tablas
  - Gráficos estadísticos (histogramas, diagramas de caja)

UNIDAD 2: Distribuciones de Probabilidad
  - Conceptos de probabilidad
  - Distribución normal y curva de Gauss
  - Z-scores y puntajes estandarizados
  - Distribución t de Student
  - Distribución Chi-cuadrado

UNIDAD 3: Pruebas de Hipótesis
  - Hipótesis nula e hipótesis alternativa
  - Niveles de significación y valor p
  - Prueba t para una muestra
  - Prueba t para muestras independientes
  - Prueba t para muestras relacionadas
  - Chi-cuadrado de independencia

UNIDAD 4: Correlación y Regresión
  - Correlación de Pearson
  - Correlación de Spearman
  - Regresión lineal simple
  - Interpretación de resultados

MATERIAL ESPECIAL ADC:
  - Hoja de fórmulas (Formula Sheet siempre visible)
  - Tabla de valores críticos Z
  - Tabla de valores t
  - Tabla de Chi-cuadrado
  - Ejemplos con SPSS/Jamovi (si aplica)
```

### 16.4 Componente Especial: Formula Reference

Un panel lateral (collapsible) disponible en todo el módulo ADC que muestra las fórmulas clave en formato limpio:

```
┌─────────────────────────────────────┐
│  📐 REFERENCIA RÁPIDA DE FÓRMULAS  │
│  ─────────────────────────────────  │
│  MEDIA:     x̄ = Σxᵢ / n           │
│  MEDIANA:   valor central ordenado │
│  VARIANZA:  s² = Σ(xᵢ-x̄)² / n-1  │
│  DES.EST:   s = √s²                │
│  Z-SCORE:   z = (x - μ) / σ        │
│  ─────────────────────────────────  │
│  [ Ver todas las fórmulas ]        │
└─────────────────────────────────────┘
```

---

## 17. PREPARACIÓN PARA FUTUROS RAMOS

### 17.1 Arquitectura Extensible

La plataforma está diseñada para que agregar un nuevo ramo sea una operación simple que no requiere cambios estructurales en el código.

### 17.2 Proceso de Agregar un Nuevo Ramo

```
1. Crear carpeta en /src/data/ramos/[nuevo-ramo]/
2. Crear archivo index.js con la metadata del ramo
3. Agregar PDFs en /public/materials/[nuevo-ramo]/
4. Agregar referencias en /src/data/ramos/index.js
5. La plataforma automáticamente muestra el nuevo ramo
   en el dashboard, navegación, búsqueda, y progreso.
```

### 17.3 Template de Ramo Nuevo

```javascript
// src/data/ramos/psicopatologia/index.js
export const psicopatologia = {
  id: "psicopatologia_2025",
  nombre: "Psicopatología",
  codigoCorto: "PSP",
  semestre: 4,
  colorAccent: "#D4647A",
  descripcion: "Estudio de los trastornos mentales y su clasificación",
  unidades: [],
  materiales: [],
  evaluaciones: [],
  estado: "próximo"
};
```

### 17.4 Ramos de Psicología Pre-Configurados (vacíos)

La plataforma incluirá desde el inicio la estructura de los siguientes ramos (sin contenido, pero listos para ser llenados):

| Ramo | Código | Semestre estimado | Color |
|------|--------|------------------|-------|
| Análisis de Datos Cuantitativos | ADC | 3 (actual) | Azul |
| Psicopatología | PSP | 4 | Rosa |
| Neurociencias | NEU | 4 | Verde |
| Metodología de Investigación | MET | 5 | Ámbar |
| Psicología Clínica | CLI | 5 | Azul oscuro |
| Psicología del Desarrollo | DES | 4 | Verde claro |
| Psicología Social | SOC | 5 | Morado suave |

---

## 18. ARQUITECTURA DE CARPETAS REACT

### 18.1 Estructura Principal

```
daniela-study-space/
│
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── materials/                        # Materiales estáticos (PDFs, etc.)
│       ├── adc/
│       │   ├── unidad1/
│       │   │   ├── PPT_01_Intro.pdf
│       │   │   └── PPT_02_Medidas.pdf
│       │   ├── unidad2/
│       │   └── general/
│       └── [futuros-ramos]/
│
├── src/
│   │
│   ├── main.jsx                          # Entry point
│   ├── App.jsx                           # Router principal
│   │
│   ├── assets/                           # Recursos estáticos del frontend
│   │   ├── fonts/
│   │   ├── images/
│   │   │   └── illustrations/            # SVGs de estados vacíos, bienvenida
│   │   └── icons/
│   │
│   ├── styles/                           # Sistema de diseño global
│   │   ├── index.css                     # Variables CSS globales, reset
│   │   ├── typography.css                # Escala tipográfica
│   │   ├── colors.css                    # Paleta completa de colores
│   │   ├── spacing.css                   # Sistema de espaciado
│   │   └── animations.css                # Animaciones reutilizables
│   │
│   ├── data/                             # Datos estáticos de la plataforma
│   │   ├── ramos/
│   │   │   ├── index.js                  # Exporta todos los ramos
│   │   │   ├── adc/
│   │   │   │   ├── index.js              # Metadata del ramo ADC
│   │   │   │   ├── unidades.js           # Definición de unidades
│   │   │   │   ├── materiales.js         # Metadatos de PDFs
│   │   │   │   ├── flashcards.js         # Banco de flashcards
│   │   │   │   ├── conceptos.js          # Conceptos clave
│   │   │   │   ├── quizzes.js            # Preguntas de quizzes
│   │   │   │   └── resumenes.js          # Contenido de resúmenes
│   │   │   └── [futuro-ramo]/
│   │   ├── evaluaciones.js               # Fechas de evaluaciones del semestre
│   │   └── daniela.js                    # Perfil y datos personales
│   │
│   ├── store/                            # Estado global
│   │   ├── index.js                      # Store principal (Zustand)
│   │   ├── slices/
│   │   │   ├── uiSlice.js                # Estado de UI
│   │   │   ├── progresSlice.js           # Progreso de estudio
│   │   │   ├── flashcardsSlice.js        # Estado SRS de flashcards
│   │   │   ├── calendarioSlice.js        # Eventos del calendario
│   │   │   └── searchSlice.js            # Estado de búsqueda
│   │   └── persistence.js                # Helpers para localStorage
│   │
│   ├── hooks/                            # Custom hooks
│   │   ├── useProgreso.js                # Lógica de progreso
│   │   ├── useFlashcards.js              # Lógica SRS
│   │   ├── useSearch.js                  # Lógica de búsqueda global
│   │   ├── useCalendario.js              # Lógica de calendario
│   │   ├── usePDF.js                     # Lógica del visualizador PDF
│   │   └── useLocalStorage.js            # Persistencia genérica
│   │
│   ├── utils/                            # Funciones utilitarias
│   │   ├── srs.js                        # Algoritmo de repetición espaciada
│   │   ├── search.js                     # Construcción del índice de búsqueda
│   │   ├── progreso.js                   # Cálculo de métricas de progreso
│   │   ├── fechas.js                     # Formateo de fechas
│   │   └── strings.js                    # Helpers de texto
│   │
│   ├── components/                       # Componentes reutilizables
│   │   │
│   │   ├── ui/                           # Átomos y moléculas de UI
│   │   │   ├── Button/
│   │   │   ├── Input/
│   │   │   ├── Badge/
│   │   │   ├── Card/
│   │   │   ├── Modal/
│   │   │   ├── Tabs/
│   │   │   ├── Progress/
│   │   │   ├── Tooltip/
│   │   │   ├── Dropdown/
│   │   │   ├── Avatar/
│   │   │   └── Spinner/
│   │   │
│   │   ├── layout/                       # Componentes de estructura
│   │   │   ├── Sidebar/
│   │   │   ├── Header/
│   │   │   ├── PageWrapper/
│   │   │   ├── ContentLayout/
│   │   │   └── EmptyState/
│   │   │
│   │   ├── ramos/                        # Componentes de materias
│   │   │   ├── RamoCard/
│   │   │   ├── UnidadCard/
│   │   │   ├── RamoProgress/
│   │   │   └── RamoHeader/
│   │   │
│   │   ├── materiales/                   # Componentes de biblioteca
│   │   │   ├── MaterialCard/
│   │   │   ├── MaterialList/
│   │   │   ├── MaterialFilters/
│   │   │   └── MaterialBadge/
│   │   │
│   │   ├── pdf/                          # Visualizador PDF
│   │   │   ├── PDFViewer/
│   │   │   ├── PDFToolbar/
│   │   │   ├── PDFSidebar/
│   │   │   └── PDFPage/
│   │   │
│   │   ├── flashcards/                   # Componentes de flashcards
│   │   │   ├── FlashcardCard/
│   │   │   ├── FlashcardSession/
│   │   │   ├── FlashcardResults/
│   │   │   └── FlashcardModeSelector/
│   │   │
│   │   ├── quizzes/                      # Componentes de quizzes
│   │   │   ├── QuizQuestion/
│   │   │   ├── QuizSession/
│   │   │   ├── QuizResults/
│   │   │   └── QuizProgress/
│   │   │
│   │   ├── progreso/                     # Componentes de progreso
│   │   │   ├── ProgresoChart/
│   │   │   ├── ActivityHeatmap/
│   │   │   ├── StreakBadge/
│   │   │   └── MetricCard/
│   │   │
│   │   ├── calendario/                   # Componentes del calendario
│   │   │   ├── CalendarioView/
│   │   │   ├── EventCard/
│   │   │   ├── EventModal/
│   │   │   └── WeekView/
│   │   │
│   │   ├── search/                       # Búsqueda global
│   │   │   ├── SearchCommand/
│   │   │   ├── SearchResults/
│   │   │   └── SearchResult/
│   │   │
│   │   └── dashboard/                    # Componentes del dashboard
│   │       ├── WelcomeHero/
│   │       ├── QuickStats/
│   │       ├── RecentActivity/
│   │       └── StudyToday/
│   │
│   └── pages/                            # Páginas completas
│       ├── Welcome/
│       │   └── WelcomePage.jsx
│       ├── Dashboard/
│       │   └── DashboardPage.jsx
│       ├── Ramos/
│       │   ├── RamosPage.jsx
│       │   └── RamoDetailPage.jsx
│       ├── Materiales/
│       │   ├── MaterialesPage.jsx
│       │   └── PDFViewerPage.jsx
│       ├── Flashcards/
│       │   ├── FlashcardsPage.jsx
│       │   └── FlashcardSessionPage.jsx
│       ├── Quizzes/
│       │   ├── QuizzesPage.jsx
│       │   └── QuizSessionPage.jsx
│       ├── Progreso/
│       │   └── ProgresoPage.jsx
│       ├── Calendario/
│       │   └── CalendarioPage.jsx
│       └── Conceptos/
│           └── ConceptosPage.jsx
│
├── .env                                  # Variables de entorno
├── vite.config.js                        # Configuración Vite
├── package.json
├── tailwind.config.js                    # Configuración Tailwind
└── vercel.json                           # Configuración de despliegue
```

---

## 19. COMPONENTES REUTILIZABLES

### 19.1 Inventario de Componentes Core

Cada componente debe estar documentado con sus props, variantes, y estados.

#### Button
```typescript
Props:
  variant: "primary" | "secondary" | "ghost" | "danger" | "success"
  size: "sm" | "md" | "lg"
  icon?: LucideIcon
  iconPosition?: "left" | "right"
  loading?: boolean
  disabled?: boolean
  fullWidth?: boolean
  onClick: () => void

Variantes visuales:
  primary:   Fondo azul DSS, texto blanco, hover más oscuro
  secondary: Fondo azul muy claro, texto azul DSS
  ghost:     Sin fondo, texto gris, hover fondo sutil
  danger:    Fondo rosa acento, texto blanco
  success:   Fondo verde salvia, texto blanco
```

#### Card
```typescript
Props:
  variant: "default" | "elevated" | "bordered" | "highlighted"
  padding: "sm" | "md" | "lg" | "none"
  clickable?: boolean
  color?: string  // Para cards de ramos con color custom
  children: ReactNode

Uso principal: Ramo cards, material cards, flashcard cards, metric cards
```

#### Progress
```typescript
Props:
  value: number        // 0-100
  variant: "bar" | "circle" | "dots"
  size: "sm" | "md" | "lg"
  color?: string
  label?: string
  showValue?: boolean
  animated?: boolean
```

#### Modal
```typescript
Props:
  open: boolean
  onClose: () => void
  title?: string
  size: "sm" | "md" | "lg" | "fullscreen"
  children: ReactNode

Uso: Flashcard sessions, confirmaciones, previews rápidos
```

#### Badge
```typescript
Props:
  variant: "default" | "success" | "warning" | "danger" | "info"
  size: "sm" | "md"
  icon?: LucideIcon
  children: ReactNode

Uso: Estado de materiales (visto/no visto), importancia de conceptos, tipo de archivos
```

#### EmptyState
```typescript
Props:
  illustration: string    // nombre de la ilustración SVG
  title: string
  description: string
  action?: {
    label: string
    onClick: () => void
  }

Uso: Biblioteca vacía, sin flashcards, sin eventos en calendario
```

#### Tabs
```typescript
Props:
  tabs: Array<{ id: string, label: string, icon?: LucideIcon }>
  activeTab: string
  onChange: (tabId: string) => void
  variant: "default" | "pills" | "underline"
```

### 19.2 Componentes de Dominio Específico

#### FlashcardCard
Muestra frente/reverso con animación de flip CSS. Props incluyen el objeto flashcard completo, onRate(rating: 'easy'|'hard'|'again'), y showBack booleano.

#### QuizQuestion
Renderiza los diferentes tipos de pregunta. Maneja la selección de respuesta, estado correcto/incorrecto, y muestra la explicación cuando corresponde.

#### PDFViewer
Integra react-pdf con controles de zoom, navegación por páginas, y sidebar de miniaturas. Persiste el progreso de lectura en localStorage.

#### ActivityHeatmap
Grid de 365 días con intensidad de color según actividad. Similar al contribution graph de GitHub. Construido con CSS Grid puro.

#### SearchCommand
Overlay de búsqueda global al estilo command palette. Indexa todos los datos en tiempo de inicialización usando Fuse.js. Activado por Cmd+K.

---

## 20. ESTRUCTURA DE NAVEGACIÓN

### 20.1 Diagrama de Navegación

```
WELCOME PAGE (primera vez)
│
└──→ DASHBOARD (raíz: /)
     │
     ├──→ RAMOS (/ramos)
     │    ├──→ ADC Detail (/ramos/adc)
     │    │    ├──→ Materiales tab
     │    │    │    └──→ PDF Viewer (/ramos/adc/pdf/:id)
     │    │    ├──→ Resúmenes tab
     │    │    ├──→ Conceptos Clave tab
     │    │    ├──→ Flashcards tab
     │    │    │    └──→ Flashcard Session (modal overlay)
     │    │    ├──→ Quizzes tab
     │    │    │    └──→ Quiz Session (/ramos/adc/quiz/:id)
     │    │    │         └──→ Quiz Results
     │    │    └──→ Mi Progreso tab
     │    └──→ [Futuro Ramo] Detail (/ramos/:ramoId)
     │
     ├──→ BIBLIOTECA (/biblioteca)
     │    └──→ PDF Viewer (/biblioteca/pdf/:id)
     │
     ├──→ CALENDARIO (/calendario)
     │
     ├──→ PROGRESO (/progreso)
     │
     └──→ BUSCAR (overlay global, Cmd+K)
```

### 20.2 Rutas y Router

```javascript
// App.jsx - Configuración de React Router v6

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "ramos", element: <RamosPage /> },
      { path: "ramos/:ramoId", element: <RamoDetailPage /> },
      { path: "ramos/:ramoId/pdf/:pdfId", element: <PDFViewerPage /> },
      { path: "ramos/:ramoId/quiz/:quizId", element: <QuizSessionPage /> },
      { path: "biblioteca", element: <MaterialesPage /> },
      { path: "biblioteca/pdf/:pdfId", element: <PDFViewerPage /> },
      { path: "calendario", element: <CalendarioPage /> },
      { path: "progreso", element: <ProgresoPage /> },
    ]
  },
  {
    path: "/bienvenida",
    element: <WelcomePage />
  }
]);
```

### 20.3 Sidebar Navigation

```
SIDEBAR (siempre visible en desktop, drawer en mobile)

┌─────────────────────────┐
│  DSS  · D.M.            │
│  ─────────────────────  │
│  🏠  Dashboard          │  → /
│  📚  Mis Ramos          │  → /ramos
│  📁  Biblioteca         │  → /biblioteca
│  📅  Calendario         │  → /calendario
│  📊  Mi Progreso        │  → /progreso
│  ─────────────────────  │
│  RAMOS ACTIVOS          │
│  ┤ ADC                  │  → /ramos/adc
│  ─────────────────────  │
│  ⚙️  Configuración      │
└─────────────────────────┘
```

### 20.4 Breadcrumbs

Siempre visibles en páginas de segundo nivel o más:

```
Dashboard  >  Análisis de Datos Cuantitativos  >  Flashcards
Dashboard  >  Biblioteca  >  PPT_01_Intro.pdf
```

---

## 21. ROADMAP DE IMPLEMENTACIÓN

### 21.1 Visión General del Roadmap

```
FASE 1: FUNDACIÓN          (Semana 1-2)
FASE 2: CONTENIDO CORE     (Semana 3-4)
FASE 3: HERRAMIENTAS       (Semana 5-6)
FASE 4: PROGRESO Y DATOS   (Semana 7-8)
FASE 5: PULIDO Y EXTRAS    (Semana 9-10)
```

### 21.2 Fase 1: Fundación (Semanas 1-2)

**Objetivo**: La plataforma existe, navega, y se ve bien.

```
Setup:
□ Inicializar proyecto con Vite + React
□ Configurar Tailwind CSS con los tokens de diseño personalizados
□ Configurar React Router v6
□ Configurar Zustand (estado global)
□ Agregar Google Fonts (Playfair Display, DM Sans, JetBrains Mono)
□ Crear el sistema de variables CSS globales

Componentes Base:
□ Sidebar layout
□ Header
□ Button (todas las variantes)
□ Card (todas las variantes)
□ Badge
□ Progress bar
□ EmptyState
□ PageWrapper

Páginas:
□ WelcomePage (pantalla de bienvenida personal)
□ DashboardPage (estructura completa, datos mock)
□ Layout responsivo completo

Despliegue:
□ Configurar Vercel
□ Primer deploy funcional

Entregable: Daniela puede ver su página de bienvenida y el dashboard con datos de ejemplo.
```

### 21.3 Fase 2: Sistema de Ramos y Materiales (Semanas 3-4)

**Objetivo**: Daniela puede navegar por su ramo y ver materiales.

```
Datos:
□ Crear estructura de datos completa para ADC
□ Definir unidades de ADC
□ Crear metadatos de todos los PDFs de ADC
□ Agregar PDFs a /public/materials/adc/

Componentes:
□ RamoCard
□ RamoDetailPage (con tabs)
□ UnidadCard
□ MaterialCard (grid y lista)
□ MaterialFilters
□ PDFViewer (integración react-pdf)
□ PDFToolbar
□ PDFSidebar (miniaturas)

Funcionalidad:
□ Marcar materiales como vistos
□ Persistir última página leída en localStorage
□ Notas por página en PDF
□ Marcadores de página

Entregable: Daniela puede acceder a todos sus PDFs de ADC desde la plataforma.
```

### 21.4 Fase 3: Herramientas de Estudio (Semanas 5-6)

**Objetivo**: Daniela puede usar flashcards, quizzes, ver resúmenes y conceptos clave.

```
Datos:
□ Crear banco de flashcards para ADC (mínimo 40 flashcards)
□ Crear banco de preguntas de quiz para ADC (mínimo 50 preguntas)
□ Crear resúmenes para las unidades 1 y 2 de ADC
□ Crear glosario de conceptos clave de ADC (mínimo 30 conceptos)

Componentes:
□ FlashcardCard (con animación de flip)
□ FlashcardSession
□ FlashcardModeSelector
□ FlashcardResults
□ QuizQuestion (opción múltiple, V/F)
□ QuizSession
□ QuizResults (con desglose por concepto)
□ ResumenView
□ ConceptoCard
□ GlossaryPage

Funcionalidad:
□ Algoritmo SRS para flashcards
□ Persistencia de estado SRS en localStorage
□ Cálculo de conceptos débiles post-quiz
□ Recomendaciones de material post-quiz

Entregable: Daniela puede repasar con flashcards, hacer quizzes, y ver sus resúmenes.
```

### 21.5 Fase 4: Progreso y Organización (Semanas 7-8)

**Objetivo**: Daniela puede ver su progreso real y organizar su semestre.

```
Componentes:
□ ProgresoPage completa
□ ActivityHeatmap
□ ProgresoChart (recharts)
□ StreakBadge
□ CalendarioPage
□ EventModal
□ Planificador de repaso

Funcionalidad:
□ Registro automático de sesiones de estudio
□ Cálculo de racha de estudio
□ Métricas por ramo (materiales vistos, quiz promedio)
□ Calendario con eventos
□ Notificaciones de evaluaciones próximas (banner en dashboard)
□ SearchCommand (Cmd+K) con Fuse.js

Entregable: Daniela puede ver su evolución, organizar su calendario, y encontrar cualquier contenido con búsqueda.
```

### 21.6 Fase 5: Pulido y Funcionalidades Extra (Semanas 9-10)

**Objetivo**: La plataforma está completamente pulida y lista para uso diario.

```
Pulido Visual:
□ Animaciones de transición entre páginas
□ Loading states en todos los componentes
□ Estados vacíos con ilustraciones
□ Micro-interacciones (hover, focus, active)
□ Responsivo completo (mobile + tablet)

Funcionalidades Extra:
□ Modo oscuro (opcional)
□ Quick Summary (resumen en 5 puntos)
□ Formula Reference sidebar para ADC
□ Notas personales en conceptos y resúmenes
□ Exportar progreso (opcional)

Escalabilidad:
□ Documentar proceso de agregar nuevo ramo
□ Crear template de ramo vacío
□ Preparar estructura para ramos futuros (PSP, NEU, etc.)

Entregable: DSS está completamente funcional, pulido, y listo para ser el compañero de estudio de Daniela.
```

### 21.7 Stack Tecnológico Recomendado

```
Framework:          React 18 + Vite
Routing:            React Router v6
Estado Global:      Zustand (simple, sin boilerplate, perfecto para este caso)
Estilos:            Tailwind CSS + CSS Variables custom
Visualización PDF:  react-pdf (pdfjs-dist wrapper)
Búsqueda:           Fuse.js (búsqueda fuzzy en cliente)
Gráficos:           Recharts (para gráficos de progreso)
Iconos:             Lucide React
Fechas:             date-fns
Animaciones:        Framer Motion (transiciones) + CSS (micro-interacciones)
Despliegue:         Vercel
```

### 21.8 Dependencias del proyecto (package.json relevante)

```json
{
  "dependencies": {
    "react": "^18.x",
    "react-dom": "^18.x",
    "react-router-dom": "^6.x",
    "zustand": "^4.x",
    "react-pdf": "^7.x",
    "fuse.js": "^7.x",
    "recharts": "^2.x",
    "lucide-react": "^0.x",
    "date-fns": "^3.x",
    "framer-motion": "^11.x"
  },
  "devDependencies": {
    "vite": "^5.x",
    "@vitejs/plugin-react": "^4.x",
    "tailwindcss": "^3.x",
    "autoprefixer": "^10.x",
    "postcss": "^8.x"
  }
}
```

### 21.9 Configuración de Vercel

```json
// vercel.json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/materials/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

Los PDFs en `/public/materials/` se sirven como archivos estáticos directamente por Vercel — sin backend, sin base de datos, sin costo adicional. El caché largo garantiza cargas rápidas para Daniela.

---

## APÉNDICE A: FUNCIONALIDADES INNOVADORAS PARA PSICOLOGÍA

### A.1 Técnica Pomodoro Integrada

Timer de estudio con ciclos de 25 minutos de estudio / 5 minutos de descanso, integrado directamente en el panel de cada ramo. Registra el tiempo de estudio por sesión para las métricas de progreso.

### A.2 Mapa Mental de Unidad

Vista visual de los conceptos clave de una unidad y sus relaciones entre sí. Construido con D3.js o una librería de grafos simple. Permite a Daniela ver cómo los conceptos se conectan — especialmente valioso en Psicología donde los conceptos se interrelacionan constantemente.

### A.3 "Modo Repaso de 10 Minutos"

Un modo especial activable desde el dashboard: dado que Daniela tiene 10 minutos libres, el sistema elige automáticamente las flashcards más críticas pendientes de revisión SRS y las 3 preguntas de quiz que más necesita repasar. Un sprint de estudio optimizado.

### A.4 Recordatorio de Revisión por Espaciado

El sistema notifica (via banner en dashboard) cuando han pasado 7 días desde que Daniela revisó un material. "Hace una semana revisaste 'Distribuciones de Probabilidad'. ¿Un repaso rápido?"

### A.5 "Antes de la Prueba" — Checklist Personalizado

Cuando se acerca una evaluación (detectada en el calendario), el dashboard muestra un checklist automático: ✅ Viste todos los PDFs de la unidad, ❌ Flashcards de la Unidad 2 pendientes, ❌ Quiz de práctica no completado. Un estado visual claro de qué falta para estar preparada.

### A.6 Anotaciones Contextuales en PDFs

No solo notas genéricas — notas **con etiquetas**: "Duda", "Importante para prueba", "Ejemplo interesante", "Preguntar en clases". Luego todas las anotaciones son buscables y filtrables.

### A.7 Comparador de Conceptos

Vista especial que permite poner dos conceptos lado a lado para comparar sus definiciones, diferencias y similitudes. Útil en Psicología para comparar: Media vs. Mediana, Prueba t vs. ANOVA, etc.

### A.8 Índice de Confianza Personal

En cada flashcard y quiz, Daniela puede indicar no solo si sabía la respuesta, sino también su nivel de confianza (1-5 estrellas). El sistema diferencia entre "sabía la respuesta por suerte" y "la sé con certeza". Esto mejora las sugerencias del SRS.

---

## APÉNDICE B: MENSAJES Y TONO DE VOZ

### B.1 Principios del Tono

- **Cercano pero no infantil**: No es una app para niños. Daniela tiene 19 años y es universitaria.
- **Motivador sin ser falso**: No "¡EXCELENTE TRABAJO! 🎉🎉🎉" sino "Vas bien. 3 días seguidos estudiando."
- **Honesto**: Si tiene 5 flashcards pendientes, dice 5. No las oculta.
- **Personal**: Usa "Daniela" o "tú", nunca "el/la usuario/a".

### B.2 Ejemplos de Mensajes

```
Saludo mañana:     "Buenos días, Daniela. Tienes una prueba en 4 días."
Saludo tarde:      "Buenas tardes. ¿Continuamos con Distribuciones?"
Logro:             "Completaste la Unidad 1. Bien hecho."
Alerta suave:      "Llevas 5 días sin repasar Desviación Estándar."
Motivación:        "7 días seguidos. Así se construye el conocimiento."
Estado vacío:      "Aquí aparecerán tus materiales cuando los agregues."
Quiz resultado:    "8 de 10. Desviación Estándar necesita un poco más."
```

---

## APÉNDICE C: CONSIDERACIONES DE DESEMPEÑO

### C.1 Estrategia de Carga de PDFs

Los PDFs no se cargan todos al inicio. Se usa **lazy loading**: solo se carga el PDF cuando Daniela lo abre. React.lazy() + Suspense para el componente PDFViewer.

### C.2 Persistencia de Estado

Todo el progreso de Daniela se guarda en **localStorage**:
- Estado de lectura de PDFs (visto / última página)
- Estado SRS de flashcards
- Historial de quizzes
- Notas personales en PDFs

Esto funciona sin backend. Si en el futuro se quiere sincronizar entre dispositivos, se puede agregar Supabase u otro backend sin cambiar la arquitectura del frontend.

### C.3 Búsqueda en Cliente

El índice de búsqueda (Fuse.js) se construye **una sola vez al montar la aplicación** y se mantiene en memoria. Para el volumen de datos de un semestre universitario, esto es completamente performante.

---

*Documento preparado para: Daniela Moraga — Universidad Mayor de Chile — Psicología*
*Este documento está listo para ser utilizado como especificación completa de implementación.*
*Versión: 1.0 — Junio 2025*
```
