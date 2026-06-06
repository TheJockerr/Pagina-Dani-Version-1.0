// src/components/garden/GardenThemeProvider.tsx
// Aplica las CSS custom properties del tema al :root dinámicamente.
// También escribe una clase 'morning' | 'afternoon' | 'night' en <html>
// para que los módulos CSS puedan hacer :global(.night) .card { ... }

import { useEffect } from 'react';
import { useTimeOfDay } from '../../hooks/useTimeOfDay';

export function GardenThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useTimeOfDay();

  useEffect(() => {
    const root = document.documentElement;

    // Apply all theme CSS variables
    Object.entries(theme.vars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    // Set time-of-day class on <html> for CSS module overrides
    root.classList.remove('morning', 'afternoon', 'night');
    root.classList.add(theme.period);

    // Update body background immediately (no flash)
    document.body.style.backgroundColor = theme.vars['--theme-bg'];
    document.body.style.color = theme.vars['--theme-text-primary'];

  }, [theme]);

  return <>{children}</>;
}

export default GardenThemeProvider;
