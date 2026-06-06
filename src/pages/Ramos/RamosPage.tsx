// src/pages/Ramos/RamosPage.tsx
import { useNavigate } from 'react-router-dom';
import { PageWrapper } from '../../components/layout/PageWrapper/index';

import { Card } from '../../components/ui/Card/index';
import { Progress } from '../../components/ui/Progress/index';
import { ramosPreview } from '../../data/ramos/index';
import styles from './RamosPage.module.css';

export function RamosPage() {
  const navigate = useNavigate();

  const activeRamos = ramosPreview.filter((r) => r.estado === 'activo');
  const inactiveRamos = ramosPreview.filter((r) => r.estado !== 'activo');

  return (
    <PageWrapper breadcrumbs={[{ label: 'Mis Ramos' }]}>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>Mis Ramos</h1>
          <p className={styles.intro}>
            Aquí tienes acceso directo al contenido completo de cada una de tus materias.
            Selecciona un ramo para repasar resúmenes, practicar con flashcards, realizar quizzes o revisar lecturas.
          </p>
        </div>

        <div className={styles.grid}>
          {activeRamos.map((ramo) => (
            <Card
              key={ramo.id}
              clickable
              onClick={() => navigate(`/ramos/${ramo.slug}`)}
              style={{
                borderLeft: `4px solid ${ramo.colorAccent}`,
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-4)',
              }}
              id={`ramo-page-card-${ramo.id}`}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <span style={{ fontSize: '12px', fontWeight: 'var(--fw-bold)', color: ramo.colorAccent, background: ramo.colorSubtle, padding: '2px 6px', borderRadius: '4px' }}>
                    {ramo.codigoCorto}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 'var(--fw-bold)', marginTop: '8px', color: 'var(--color-text-primary)' }}>
                    {ramo.nombre}
                  </h3>
                </div>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>
                Ramo prioritario con material interactivo, flashcards y tests automatizados de preparación.
              </p>
              <div style={{ marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>Semestre {ramo.semestre}</span>
                <Progress value={ramo.porcentajeGeneral} size="sm" showValue color={ramo.colorAccent} style={{ width: '120px' }} />
              </div>
            </Card>
          ))}
        </div>

        {inactiveRamos.length > 0 && (
          <div style={{ marginTop: 'var(--space-4)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 'var(--fw-bold)', color: 'var(--color-text-primary)' }}>
              Próximos Semestres
            </h2>
            <div className={styles.grid}>
              {inactiveRamos.map((ramo) => (
                <Card
                  key={ramo.id}
                  style={{
                    opacity: 0.8,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-2)',
                    background: 'var(--color-surface-alt)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 'var(--fw-bold)', color: 'var(--color-text-secondary)' }}>
                      {ramo.nombre}
                    </h3>
                    <span style={{ fontSize: '11px', fontWeight: 'var(--fw-bold)', color: 'var(--color-text-tertiary)', background: 'var(--color-border)', padding: '2px 6px', borderRadius: '4px' }}>
                      {ramo.codigoCorto}
                    </span>
                  </div>
                  <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>
                    Plan de estudios · Semestre {ramo.semestre}
                  </span>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </PageWrapper>
  );
}

export default RamosPage;
