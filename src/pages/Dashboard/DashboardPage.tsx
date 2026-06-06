// src/pages/Dashboard/DashboardPage.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

import { PageWrapper } from '../../components/layout/PageWrapper/index';
import { WelcomeHero, QuickStats, RecentActivity, StudyToday } from '../../components/dashboard/index';
import { Modal } from '../../components/ui/Modal/index';
import { Button } from '../../components/ui/Button/index';
import { Progress } from '../../components/ui/Progress/index';
import { ramosPreview } from '../../data/ramos/index';
import { useProgresoStore } from '../../store/index';
import styles from './DashboardPage.module.css';

export function DashboardPage() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [ramosList, setRamosList] = useState(ramosPreview);
  const [newRamo, setNewRamo] = useState({
    nombre: '',
    codigo: '',
    color: '#9B7FD4',
  });

  const storeMateriales = useProgresoStore((s) => s.materiales);

  const activeRamos = ramosList.filter((r) => r.estado === 'activo').map((r) => {
    if (r.id === 'adc') {
      const seenCount = Object.entries(storeMateriales).filter(([id, val]) => id.startsWith('mat_adc') && val.visto).length;
      const progressPercent = Math.round((seenCount / 10) * 100);
      return { ...r, porcentajeGeneral: progressPercent };
    }
    return r;
  });
  const upcomingRamos = ramosList.filter((r) => r.estado === 'próximo');

  const handleAddRamo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRamo.nombre || !newRamo.codigo) return;

    const newSlug = newRamo.nombre.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const newlyAdded = {
      id: newSlug,
      slug: newSlug,
      nombre: newRamo.nombre,
      codigoCorto: newRamo.codigo.toUpperCase(),
      colorAccent: newRamo.color,
      colorSubtle: `${newRamo.color}15`,
      estado: 'activo' as const,
      semestre: 3,
      porcentajeGeneral: 0,
    };

    setRamosList((prev) => [...prev, newlyAdded]);
    setNewRamo({ nombre: '', codigo: '', color: '#9B7FD4' });
    setModalOpen(false);
  };

  return (
    <PageWrapper>
      <div className={styles.dashboard}>
        {/* Welcome message */}
        <WelcomeHero />

        {/* Dynamic statistics */}
        <QuickStats />

        {/* Active Ramos Section */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>🌸 Tus Ramos Activos</h2>
          <div className={styles.ramosGrid}>
            {activeRamos.map((ramo) => (
              <div
                key={ramo.id}
                className={styles.ramoCard}
                onClick={() => navigate(`/ramos/${ramo.slug}`)}
                style={{
                  '--accent-color': ramo.colorAccent,
                  '--subtle-color': ramo.colorSubtle,
                } as React.CSSProperties}
                id={`ramo-card-${ramo.id}`}
              >
                <div className={styles.ramoHeader}>
                  <h3 className={styles.ramoTitle}>{ramo.nombre}</h3>
                  <span className={styles.ramoCode}>{ramo.codigoCorto}</span>
                </div>
                <p className={styles.ramoDesc}>
                  Accede a tus apuntes, resúmenes, flashcards y quicios interactivos.
                </p>
                <div className={styles.ramoFooter}>
                  <div className={styles.ramoMeta}>
                    <BookOpen size={14} />
                    <span>Semestre {ramo.semestre}</span>
                  </div>
                  <Progress value={ramo.porcentajeGeneral} size="sm" showValue color={ramo.colorAccent} label="Progreso" style={{ maxWidth: '140px' }} />
                </div>
              </div>
            ))}

            {/* Add New Subject Dotted Card */}
            <div className={styles.addRamoCard} onClick={() => setModalOpen(true)} id="add-ramo-card">
              <span className={styles.addIcon}>+</span>
              <span style={{ fontWeight: 'var(--fw-medium)' }}>Inscribir nuevo ramo</span>
              <span style={{ fontSize: '11px', color: 'var(--color-text-tertiary)' }}>Añade tus materias a DSS</span>
            </div>
          </div>
        </div>

        {/* Activity & Study suggestions Grid */}
        <div className={styles.splitGrid}>
          <StudyToday />
          <RecentActivity />
        </div>

        {/* Upcoming subjects list */}
        {upcomingRamos.length > 0 && (
          <div className={styles.section} style={{ marginTop: 'var(--space-4)' }}>
            <h2 className={styles.sectionTitle}>🌸 Próximos Ramos en tu Carrera</h2>
            <div className={styles.ramosGrid} style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              {upcomingRamos.slice(0, 3).map((ramo) => (
                <div
                  key={ramo.id}
                  className={styles.ramoCard}
                  style={{
                    '--accent-color': 'var(--color-text-tertiary)',
                    '--subtle-color': 'var(--color-surface-alt)',
                    opacity: 0.75,
                    cursor: 'default',
                  } as React.CSSProperties}
                >
                  <div className={styles.ramoHeader}>
                    <h3 className={styles.ramoTitle} style={{ fontSize: '15px' }}>{ramo.nombre}</h3>
                    <span className={styles.ramoCode} style={{ background: 'var(--color-border)', color: 'var(--color-text-secondary)' }}>
                      {ramo.codigoCorto}
                    </span>
                  </div>
                  <div className={styles.ramoFooter} style={{ border: 'none', padding: 0 }}>
                    <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>Semestre {ramo.semestre}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Add new subject Modal */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Inscribir Nuevo Ramo">
        <form onSubmit={handleAddRamo} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
            <label style={{ fontSize: '12px', fontWeight: 'var(--fw-semibold)', color: 'var(--color-text-secondary)' }}>
              Nombre del Ramo
            </label>
            <input
              type="text"
              required
              placeholder="Ej. Psicología Organizacional"
              style={{
                padding: 'var(--space-2) var(--space-3)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border)',
                outline: 'none',
                fontFamily: 'var(--font-ui)',
              }}
              value={newRamo.nombre}
              onChange={(e) => setNewRamo({ ...newRamo, nombre: e.target.value })}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
            <label style={{ fontSize: '12px', fontWeight: 'var(--fw-semibold)', color: 'var(--color-text-secondary)' }}>
              Código Corto (Sigla)
            </label>
            <input
              type="text"
              required
              maxLength={4}
              placeholder="Ej. PSO"
              style={{
                padding: 'var(--space-2) var(--space-3)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border)',
                outline: 'none',
                fontFamily: 'var(--font-ui)',
              }}
              value={newRamo.codigo}
              onChange={(e) => setNewRamo({ ...newRamo, codigo: e.target.value })}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
            <label style={{ fontSize: '12px', fontWeight: 'var(--fw-semibold)', color: 'var(--color-text-secondary)' }}>
              Color Temático
            </label>
            <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
              {['#3B6FE8', '#D4647A', '#5C8A6E', '#E8952A', '#9B7FD4', '#2851C4'].map((col) => (
                <button
                  key={col}
                  type="button"
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: col,
                    border: newRamo.color === col ? '2px solid var(--color-text-primary)' : '1px solid transparent',
                    cursor: 'pointer',
                  }}
                  onClick={() => setNewRamo({ ...newRamo, color: col })}
                />
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-2)', marginTop: 'var(--space-2)' }}>
            <Button variant="ghost" type="button" onClick={() => setModalOpen(false)}>
              Cancelar
            </Button>
            <Button variant="primary" type="submit" id="submit-new-ramo-btn">
              Añadir Ramo
            </Button>
          </div>
        </form>
      </Modal>
    </PageWrapper>
  );
}

export default DashboardPage;
