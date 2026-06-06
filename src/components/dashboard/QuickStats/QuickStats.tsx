// src/components/dashboard/QuickStats/QuickStats.tsx
import { useEffect, useState } from 'react';
import { useProgresoStore } from '../../../store/index';
import { evaluaciones } from '../../../data/evaluaciones';
import { diasHastaLabel } from '../../../utils/fechas';
import styles from './QuickStats.module.css';

// Premium custom botanical icons in place of standard tech icons
const LotusBudIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C12 2 9 8 9 12C9 16 12 22 12 22C12 22 15 16 15 12C15 8 12 2 12 2Z" fill="#C4889C" opacity="0.8"/>
    <path d="M12 4C10 9 7 13 7 17C7 19 8.5 20 10 20C11.5 20 12 18 12 18" stroke="#C4889C" strokeWidth="1.2"/>
    <path d="M12 4C14 9 17 13 17 17C17 19 15.5 20 14 20C12.5 20 12 18 12 18" stroke="#C4889C" strokeWidth="1.2"/>
    <circle cx="12" cy="21" r="1.5" fill="#7A9E89"/>
  </svg>
);

const LeafStemIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 20C8 17 12 13 19 5" stroke="#7A9E89" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M9 15C7 14 5.5 12.5 5 11" stroke="#7A9E89" strokeWidth="1.2"/>
    <path d="M12 12C14 13 15.5 14.5 16 16" stroke="#7A9E89" strokeWidth="1.2"/>
    <path d="M15 9C13 8 11.5 6.5 11 5" stroke="#7A9E89" strokeWidth="1.2"/>
  </svg>
);

const BlossomPetalsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12C12 12 7 9 7 6C7 3 12 4 12 4C12 4 17 3 17 6C17 9 12 12 12 12Z" fill="#7E6FA0" opacity="0.75"/>
    <path d="M12 12C12 12 9 17 6 17C3 17 4 12 4 12C4 12 3 7 6 7C9 7 12 12 12 12Z" fill="#C4889C" opacity="0.65"/>
    <circle cx="12" cy="12" r="3.5" fill="#C4A882"/>
  </svg>
);

export function QuickStats() {
  const { streak, horasEstudio } = useProgresoStore();
  const [nextEval, setNextEval] = useState<{ titulo: string; label: string } | null>(null);

  useEffect(() => {
    // Only search if there is any evaluation registered
    if (evaluaciones.length > 0) {
      const proxima = evaluaciones.find(e => !e.completada && (e.tipo === 'prueba' || e.tipo === 'examen'));
      if (proxima) {
        setNextEval({
          titulo: proxima.titulo.split('—')[0].trim(),
          label: diasHastaLabel(proxima.fecha)
        });
        return;
      }
    }
    setNextEval(null);
  }, []);

  return (
    <div className={styles.grid}>
      {/* Streak */}
      <div className={styles.card} id="stat-streak" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className={[styles.iconWrapper, styles.fire].join(' ')}>
          <LotusBudIcon />
        </div>
        <div className={styles.info}>
          <span className={styles.label}>Racha de Estudio</span>
          <span className={styles.value} style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 500 }}>
            {streak} días
          </span>
          <span className={styles.subtext}>{streak === 0 ? 'Empieza tu racha hoy 🌱' : '¡Excelente constancia! 🔥'}</span>
        </div>
      </div>

      {/* Next Eval */}
      <div className={styles.card} id="stat-next-eval" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className={[styles.iconWrapper, styles.eval].join(' ')}>
          <LeafStemIcon />
        </div>
        <div className={styles.info}>
          <span className={styles.label}>Evaluación Próxima</span>
          <span className={styles.value} style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 500 }}>
            {nextEval ? nextEval.label : 'Sin evaluaciones'}
          </span>
          <span className={styles.subtext}>{nextEval ? nextEval.titulo : 'Semestre al día 🌸'}</span>
        </div>
      </div>

      {/* Progress / Hours */}
      <div className={styles.card} id="stat-progress" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className={[styles.iconWrapper, styles.prog].join(' ')}>
          <BlossomPetalsIcon />
        </div>
        <div className={styles.info}>
          <span className={styles.label}>Tiempo Dedicado</span>
          <span className={styles.value} style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 500 }}>
            {Math.round(horasEstudio * 10) / 10} horas
          </span>
          <span className={styles.subtext}>{horasEstudio === 0 ? 'Inicia tus lecturas hoy ⏱️' : 'Acumulado este semestre 📊'}</span>
        </div>
      </div>
    </div>
  );
}

export default QuickStats;
