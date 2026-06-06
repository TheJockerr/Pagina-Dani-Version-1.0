// src/store/index.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { SRSData } from '../data/ramos/adc/flashcards';

// ── UI State ──
interface UIState {
  sidebarOpen: boolean;
  searchOpen: boolean;
  setSidebarOpen: (v: boolean) => void;
  setSearchOpen: (v: boolean) => void;
  toggleSidebar: () => void;
  toggleSearch: () => void;
}

export const useUIStore = create<UIState>()((set) => ({
  sidebarOpen: true,
  searchOpen: false,
  setSidebarOpen: (v) => set({ sidebarOpen: v }),
  setSearchOpen: (v) => set({ searchOpen: v }),
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
  toggleSearch: () => set((s) => ({ searchOpen: !s.searchOpen })),
}));

// ── Progreso State ──
interface MaterialProgress {
  visto: boolean;
  ultimaVista: string | null;
  ultimaPagina: number;
  notas: Record<number, string>;
  marcadores: number[];
}

interface ProgresoState {
  materiales: Record<string, MaterialProgress>;
  streak: number;
  ultimoEstudio: string | null;
  horasEstudio: number;
  historialQuizzes: { id: string; fecha: string; puntaje: number; total: number; ramoId: string }[];
  marcarMaterialVisto: (id: string) => void;
  setUltimaPagina: (id: string, pagina: number) => void;
  setNota: (materialId: string, pagina: number, nota: string) => void;
  toggleMarcador: (materialId: string, pagina: number) => void;
  registrarSesion: (minutos: number) => void;
  agregarQuiz: (quiz: { id: string; puntaje: number; total: number; ramoId: string }) => void;
  getMaterialProgress: (id: string) => MaterialProgress;
}

const defaultMaterialProgress = (): MaterialProgress => ({
  visto: false, ultimaVista: null, ultimaPagina: 1, notas: {}, marcadores: [],
});

export const useProgresoStore = create<ProgresoState>()(
  persist(
    (set, get) => ({
      materiales: {},
      streak: 0,
      ultimoEstudio: null,
      horasEstudio: 0,
      historialQuizzes: [],
      getMaterialProgress: (id) => get().materiales[id] ?? defaultMaterialProgress(),
      marcarMaterialVisto: (id) => set((s) => ({
        materiales: {
          ...s.materiales,
          [id]: { ...(s.materiales[id] ?? defaultMaterialProgress()), visto: true, ultimaVista: new Date().toISOString() },
        },
      })),
      setUltimaPagina: (id, pagina) => set((s) => ({
        materiales: { ...s.materiales, [id]: { ...(s.materiales[id] ?? defaultMaterialProgress()), ultimaPagina: pagina } },
      })),
      setNota: (materialId, pagina, nota) => set((s) => ({
        materiales: {
          ...s.materiales,
          [materialId]: {
            ...(s.materiales[materialId] ?? defaultMaterialProgress()),
            notas: { ...(s.materiales[materialId]?.notas ?? {}), [pagina]: nota },
          },
        },
      })),
      toggleMarcador: (materialId, pagina) => set((s) => {
        const mat = s.materiales[materialId] ?? defaultMaterialProgress();
        const marcadores = mat.marcadores.includes(pagina)
          ? mat.marcadores.filter((p) => p !== pagina)
          : [...mat.marcadores, pagina];
        return { materiales: { ...s.materiales, [materialId]: { ...mat, marcadores } } };
      }),
      registrarSesion: (minutos) => set((s) => ({
        horasEstudio: s.horasEstudio + minutos / 60,
        ultimoEstudio: new Date().toISOString(),
      })),
      agregarQuiz: (quiz) => set((s) => ({
        historialQuizzes: [...s.historialQuizzes, { ...quiz, fecha: new Date().toISOString() }],
      })),
    }),
    { name: 'dss-progreso' }
  )
);

// ── Flashcards SRS State ──
interface FlashcardsState {
  srsData: Record<string, SRSData>;
  updateSRS: (id: string, data: SRSData) => void;
  getSRS: (id: string) => SRSData | null;
}

export const useFlashcardsStore = create<FlashcardsState>()(
  persist(
    (set, get) => ({
      srsData: {},
      updateSRS: (id, data) => set((s) => ({ srsData: { ...s.srsData, [id]: data } })),
      getSRS: (id) => get().srsData[id] ?? null,
    }),
    { name: 'dss-flashcards-srs' }
  )
);

// ── Calendario State ──
import type { Evaluacion } from '../data/evaluaciones';
interface CalendarioState {
  eventosExtra: Evaluacion[];
  addEvento: (evento: Evaluacion) => void;
  removeEvento: (id: string) => void;
}

export const useCalendarioStore = create<CalendarioState>()(
  persist(
    (set) => ({
      eventosExtra: [],
      addEvento: (evento) => set((s) => ({ eventosExtra: [...s.eventosExtra, evento] })),
      removeEvento: (id) => set((s) => ({ eventosExtra: s.eventosExtra.filter((e) => e.id !== id) })),
    }),
    { name: 'dss-calendario' }
  )
);
