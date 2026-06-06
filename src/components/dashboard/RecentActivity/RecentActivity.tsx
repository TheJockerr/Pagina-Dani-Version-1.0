// src/components/dashboard/RecentActivity/RecentActivity.tsx
import { useEffect, useState } from 'react';
import { useProgresoStore } from '../../../store/index';
import { formatTiempoRelativo } from '../../../utils/fechas';
import { materialesADC } from '../../../data/ramos/adc/materiales';
import styles from './RecentActivity.module.css';

interface ActivityItem {
  id: string;
  text: string;
  fecha: string;
  active?: boolean;
}

export function RecentActivity() {
  const { historialQuizzes, materiales } = useProgresoStore();
  const [activities, setActivities] = useState<ActivityItem[]>([]);

  useEffect(() => {
    // 1. Quizzes
    const quizActivities: ActivityItem[] = historialQuizzes.map((q, idx) => ({
      id: q.id || `quiz-act-${idx}`,
      text: `Completaste quiz: ${q.puntaje}/${q.total} en Análisis de Datos Cuantitativos 📝`,
      fecha: q.fecha,
      active: true,
    }));

    // 2. Seen materials
    const seenActivities: ActivityItem[] = Object.entries(materiales)
      .filter(([_, progress]) => progress.visto && progress.ultimaVista)
      .map(([id, progress]) => {
        const matInfo = materialesADC.find(m => m.id === id);
        return {
          id: `seen-${id}`,
          text: `Leíste: "${matInfo ? matInfo.nombre : id}" 📖`,
          fecha: progress.ultimaVista || new Date().toISOString(),
          active: false,
        };
      });

    // Combine and sort by date descending
    const combined = [...quizActivities, ...seenActivities]
      .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())
      .slice(0, 5);

    setActivities(combined);
  }, [historialQuizzes, materiales]);

  return (
    <div className={styles.activity} id="recent-activity-panel">
      <h3 className={styles.title} style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 500 }}>
        Actividad Reciente
      </h3>
      <div className={styles.timeline}>
        {activities.length > 0 ? (
          activities.map((item) => (
            <div key={item.id} className={styles.item}>
              <div className={[styles.dot, item.active && styles.dotActive].filter(Boolean).join(' ')} />
              <div className={styles.info}>
                <span className={styles.text}>{item.text}</span>
                <span className={styles.time}>{formatTiempoRelativo(item.fecha)}</span>
              </div>
            </div>
          ))
        ) : (
          <div style={{ padding: '20px 0', textAlign: 'center', color: 'var(--color-text-tertiary)', fontSize: '13px' }}>
            Sin actividad registrada. ¡Comienza a estudiar hoy! 🌱
          </div>
        )}
      </div>
    </div>
  );
}

export default RecentActivity;
