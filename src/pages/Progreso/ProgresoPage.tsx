// src/pages/Progreso/ProgresoPage.tsx
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PageWrapper } from '../../components/layout/PageWrapper/index';
import { useProgresoStore } from '../../store/index';
import { formatFechaCorta } from '../../utils/fechas';
import styles from './ProgresoPage.module.css';

const chartData = [
  { name: 'Lun', horas: 1.5 },
  { name: 'Mar', horas: 2.0 },
  { name: 'Mié', horas: 1.2 },
  { name: 'Jue', horas: 2.5 },
  { name: 'Vie', horas: 0.8 },
  { name: 'Sáb', horas: 3.0 },
  { name: 'Dom', horas: 2.0 },
];

export function ProgresoPage() {
  const { streak, horasEstudio, historialQuizzes } = useProgresoStore();

  return (
    <PageWrapper breadcrumbs={[{ label: 'Mi Progreso' }]}>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>Tu Rendimiento Académico</h1>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            Monitorea tus horas de estudio semanal, racha de constancia y resultados en autoevaluaciones.
          </p>
        </div>

        {/* Top Cards */}
        <div className={styles.grid}>
          <div className={styles.statCard}>
            <span className={styles.statLabel}>Racha Actual</span>
            <span className={styles.statValue}>{streak} días</span>
            <span style={{ fontSize: '11px', color: 'var(--color-text-tertiary)' }}>¡Sigue así, Daniela! 🔥</span>
          </div>

          <div className={styles.statCard}>
            <span className={styles.statLabel}>Horas Dedicadas</span>
            <span className={styles.statValue}>{Math.round(horasEstudio * 10) / 10} hrs</span>
            <span style={{ fontSize: '11px', color: 'var(--color-text-tertiary)' }}>Acumulado este semestre ⏱️</span>
          </div>

          <div className={styles.statCard}>
            <span className={styles.statLabel}>Autoevaluaciones</span>
            <span className={styles.statValue}>{historialQuizzes.length} quicios</span>
            <span style={{ fontSize: '11px', color: 'var(--color-text-tertiary)' }}>Completados con éxito 🎯</span>
          </div>
        </div>

        {/* Charts & History */}
        <div className={styles.chartCard}>
          <h3 className={styles.chartTitle}>Dedicación Semanal (Horas)</h3>
          <div className={styles.chartWrapper}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorHoras" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border)" />
                <XAxis dataKey="name" stroke="var(--color-text-tertiary)" fontSize={11} tickLine={false} />
                <YAxis stroke="var(--color-text-tertiary)" fontSize={11} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '4px',
                    fontFamily: 'var(--font-ui)',
                    fontSize: '12px',
                  }}
                />
                <Area type="monotone" dataKey="horas" stroke="var(--color-primary)" strokeWidth={2} fillOpacity={1} fill="url(#colorHoras)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Quizzes History */}
        <div className={styles.quizzesCard} id="quizzes-history-panel">
          <h3 className={styles.chartTitle}>Historial de Quizzes</h3>
          <div className={styles.quizList}>
            {historialQuizzes.map((q, idx) => (
              <div key={q.id || idx} className={styles.quizRow}>
                <div className={styles.quizInfo}>
                  <span className={styles.quizTitle}>Autoevaluación: Análisis de Datos Cuantitativos</span>
                  <span className={styles.quizDate}>{formatFechaCorta(q.fecha)}</span>
                </div>
                <span className={styles.quizScore}>
                  {q.puntaje} / {q.total}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default ProgresoPage;
