// src/hooks/useTimeOfDay.ts
// Determina el período del día y retorna el tema visual correspondiente,
// permitiendo anulación manual para cambiar la atmósfera del jardín a gusto.

export type TimeOfDay = 'morning' | 'afternoon' | 'night';
export type GardenMode = 'auto' | TimeOfDay;

export interface GardenTheme {
  period: TimeOfDay;
  label: string;
  greeting: string;
  emoji: string;
  vars: Record<string, string>;
}

function getPeriod(hour: number): TimeOfDay {
  if (hour >= 6 && hour < 13)  return 'morning';
  if (hour >= 13 && hour < 20) return 'afternoon';
  return 'night';
}

export const GARDEN_THEMES: Record<TimeOfDay, GardenTheme> = {
  morning: {
    period: 'morning',
    label: 'Buenos días',
    greeting: 'Buenos días',
    emoji: '🌸',
    vars: {
      '--theme-bg':             '#FFF7F0',
      '--theme-bg-secondary':   '#FFF0E8',
      '--theme-surface':        'rgba(255, 253, 250, 0.48)',
      '--theme-surface-alt':    'rgba(255, 246, 238, 0.38)',
      '--theme-border':         'rgba(224, 185, 155, 0.35)',
      '--theme-border-strong':  'rgba(210, 165, 130, 0.55)',
      '--theme-glow':           'rgba(255, 180, 120, 0.22)',
      '--theme-glow-hover':     '0 0 25px rgba(212, 149, 106, 0.35), 0 8px 32px rgba(180, 110, 80, 0.12)',
      '--theme-shadow':         '0 8px 32px rgba(180, 110, 80, 0.06), inset 0 1px 2px rgba(255,255,255,0.7)',
      '--theme-accent':         '#D4956A',
      '--theme-accent-subtle':  'rgba(255, 225, 195, 0.65)',
      '--theme-primary':        '#C4889C',
      '--theme-primary-subtle': 'rgba(255, 225, 225, 0.65)',
      '--theme-secondary':      '#8AAD6E',
      '--theme-text-primary':   '#2A2018',
      '--theme-text-secondary': '#6B5A4A',
      '--theme-mist1':          'rgba(255, 220, 185, 0.45)',
      '--theme-mist2':          'rgba(255, 200, 210, 0.38)',
      '--theme-mist3':          'rgba(200, 235, 195, 0.32)',
      '--theme-petal-color':    '#FFCBA4',
      '--theme-sky-top':        '#FFE8D6',
      '--theme-sky-bottom':     '#FFF5EE',
      '--theme-mountain':       'rgba(220, 170, 130, 0.20)',
      '--theme-topbar-bg':      'rgba(255, 250, 245, 0.65)',
    },
  },
  afternoon: {
    period: 'afternoon',
    label: 'Buenas tardes',
    greeting: 'Buenas tardes',
    emoji: '🌿',
    vars: {
      '--theme-bg':             '#F8F4ED',
      '--theme-bg-secondary':   '#F2EAE0',
      '--theme-surface':        'rgba(253, 251, 247, 0.42)',
      '--theme-surface-alt':    'rgba(242, 234, 224, 0.32)',
      '--theme-border':         'rgba(213, 203, 185, 0.32)',
      '--theme-border-strong':  'rgba(195, 183, 158, 0.50)',
      '--theme-glow':           'rgba(196, 136, 156, 0.18)',
      '--theme-glow-hover':     '0 0 25px rgba(196, 136, 156, 0.30), 0 8px 32px rgba(90, 60, 40, 0.12)',
      '--theme-shadow':         '0 8px 32px rgba(90, 60, 40, 0.06), inset 0 1px 2px rgba(255,255,255,0.6)',
      '--theme-accent':         '#C4889C',
      '--theme-accent-subtle':  'rgba(250, 240, 243, 0.70)',
      '--theme-primary':        '#7E6FA0',
      '--theme-primary-subtle': 'rgba(240, 237, 247, 0.70)',
      '--theme-secondary':      '#7A9E89',
      '--theme-text-primary':   '#2D2820',
      '--theme-text-secondary': '#6B6560',
      '--theme-mist1':          'rgba(240, 230, 250, 0.42)',
      '--theme-mist2':          'rgba(200, 235, 215, 0.38)',
      '--theme-mist3':          'rgba(250, 235, 240, 0.35)',
      '--theme-petal-color':    '#DEB0BF',
      '--theme-sky-top':        '#F0EBF8',
      '--theme-sky-bottom':     '#FAF7F2',
      '--theme-mountain':       'rgba(180, 165, 210, 0.20)',
      '--theme-topbar-bg':      'rgba(252, 248, 242, 0.65)',
    },
  },
  night: {
    period: 'night',
    label: 'Buenas noches',
    greeting: 'Buenas noches',
    emoji: '🌙',
    vars: {
      '--theme-bg':             '#0F0E1A',
      '--theme-bg-secondary':   '#141228',
      '--theme-surface':        'rgba(20, 17, 36, 0.58)',
      '--theme-surface-alt':    'rgba(12, 10, 24, 0.48)',
      '--theme-border':         'rgba(110, 95, 160, 0.35)',
      '--theme-border-strong':  'rgba(140, 120, 200, 0.55)',
      '--theme-glow':           'rgba(160, 130, 220, 0.22)',
      '--theme-glow-hover':     '0 0 25px rgba(176, 159, 216, 0.45), 0 8px 32px rgba(0, 0, 0, 0.4)',
      '--theme-shadow':         '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255,255,255,0.15)',
      '--theme-accent':         '#B09FD8',
      '--theme-accent-subtle':  'rgba(80, 60, 120, 0.55)',
      '--theme-primary':        '#9B87C8',
      '--theme-primary-subtle': 'rgba(60, 45, 100, 0.55)',
      '--theme-secondary':      '#6B8FAA',
      '--theme-text-primary':   '#EAE6F5',
      '--theme-text-secondary': '#A098C2',
      '--theme-mist1':          'rgba(80, 65, 130, 0.30)',
      '--theme-mist2':          'rgba(40, 55, 90, 0.25)',
      '--theme-mist3':          'rgba(100, 75, 140, 0.20)',
      '--theme-petal-color':    '#C8B4E8',
      '--theme-sky-top':        '#0A091A',
      '--theme-sky-bottom':     '#1A1530',
      '--theme-mountain':       'rgba(60, 50, 100, 0.40)',
      '--theme-topbar-bg':      'rgba(15, 13, 30, 0.65)',
    },
  },
};

import { useState, useEffect } from 'react';

let listeners: Array<(mode: GardenMode) => void> = [];

export function getGardenMode(): GardenMode {
  return (localStorage.getItem('dss-garden-mode') as GardenMode) || 'auto';
}

export function setGardenMode(mode: GardenMode) {
  localStorage.setItem('dss-garden-mode', mode);
  listeners.forEach(l => l(mode));
}

export function useTimeOfDay() {
  const [mode, setMode] = useState<GardenMode>(getGardenMode);
  const [theme, setTheme] = useState<GardenTheme>(() => {
    const currentMode = getGardenMode();
    if (currentMode === 'auto') {
      const hour = new Date().getHours();
      return GARDEN_THEMES[getPeriod(hour)];
    }
    return GARDEN_THEMES[currentMode];
  });

  useEffect(() => {
    const handleModeChange = (newMode: GardenMode) => {
      setMode(newMode);
      if (newMode === 'auto') {
        const hour = new Date().getHours();
        setTheme(GARDEN_THEMES[getPeriod(hour)]);
      } else {
        setTheme(GARDEN_THEMES[newMode]);
      }
    };

    listeners.push(handleModeChange);

    const interval = setInterval(() => {
      if (getGardenMode() === 'auto') {
        const hour = new Date().getHours();
        const newPeriod = getPeriod(hour);
        setTheme(prev => prev.period === newPeriod ? prev : GARDEN_THEMES[newPeriod]);
      }
    }, 60000);

    return () => {
      listeners = listeners.filter(l => l !== handleModeChange);
      clearInterval(interval);
    };
  }, []);

  return { ...theme, mode };
}
