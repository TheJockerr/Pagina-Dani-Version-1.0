// src/pages/Calendario/CalendarioPage.tsx
import { useState } from 'react';
import { Plus, ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';
import { PageWrapper } from '../../components/layout/PageWrapper/index';
import { Button } from '../../components/ui/Button/index';
import { Modal } from '../../components/ui/Modal/index';
import { useCalendarioStore } from '../../store/index';
import { evaluaciones, tiposEvento } from '../../data/evaluaciones';
import type { TipoEvento, Evaluacion } from '../../data/evaluaciones';
import { formatFechaCorta } from '../../utils/fechas';
import styles from './CalendarioPage.module.css';

interface CalendarGridCell {
  dayNum: number;
  dateStr: string;
  isCurrentMonth: boolean;
  isToday?: boolean;
}


export function CalendarioPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const eventosExtra = useCalendarioStore((s) => s.eventosExtra);
  const addEvento = useCalendarioStore((s) => s.addEvento);

  const [newEvent, setNewEvent] = useState({
    titulo: '',
    tipo: 'repaso' as TipoEvento,
    ramo: 'Análisis de Datos Cuantitativos',
    ramoId: 'adc',
    fecha: '2025-06-20',
    descripcion: '',
  });

  // Combine static evaluations with user's custom events
  const allEvents = [...evaluaciones, ...eventosExtra];

  // We will display June 2025 as the base month (since crucial finals are in June/July)
  const currentMonthName = 'Junio 2025';

  // June 2025: Sunday is June 1st.
  // In a standard Monday-first grid:
  // Week 1 starts with 6 days of May (May 26 - May 31)
  // Then June 1 - June 30
  // Then 5 days of July (July 1 - July 5) to complete a 42-cell grid
  const daysInGrid: CalendarGridCell[] = [

    // May days
    { dayNum: 26, dateStr: '2025-05-26', isCurrentMonth: false },
    { dayNum: 27, dateStr: '2025-05-27', isCurrentMonth: false },
    { dayNum: 28, dateStr: '2025-05-28', isCurrentMonth: false },
    { dayNum: 29, dateStr: '2025-05-29', isCurrentMonth: false },
    { dayNum: 30, dateStr: '2025-05-30', isCurrentMonth: false },
    { dayNum: 31, dateStr: '2025-05-31', isCurrentMonth: false },
    // June days
    ...Array.from({ length: 30 }, (_, i) => ({
      dayNum: i + 1,
      dateStr: `2025-06-${String(i + 1).padStart(2, '0')}`,
      isCurrentMonth: true,
      isToday: i + 1 === 5, // let's mark June 5, 2025 as today
    })),
    // July days
    { dayNum: 1, dateStr: '2025-07-01', isCurrentMonth: false },
    { dayNum: 2, dateStr: '2025-07-02', isCurrentMonth: false },
    { dayNum: 3, dateStr: '2025-07-03', isCurrentMonth: false },
    { dayNum: 4, dateStr: '2025-07-04', isCurrentMonth: false },
    { dayNum: 5, dateStr: '2025-07-05', isCurrentMonth: false },
    { dayNum: 6, dateStr: '2025-07-06', isCurrentMonth: false },
  ];

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEvent.titulo) return;

    const added: Evaluacion = {
      id: `custom-evt-${Date.now()}`,
      titulo: newEvent.titulo,
      tipo: newEvent.tipo,
      ramo: newEvent.ramo,
      ramoId: newEvent.ramoId,
      fecha: newEvent.fecha,
      descripcion: newEvent.descripcion,
      completada: false,
    };

    addEvento(added);
    setNewEvent({
      titulo: '',
      tipo: 'repaso',
      ramo: 'Análisis de Datos Cuantitativos',
      ramoId: 'adc',
      fecha: '2025-06-20',
      descripcion: '',
    });
    setModalOpen(false);
  };

  // Sort upcoming events
  const upcomingList = allEvents
    .filter(e => new Date(e.fecha) >= new Date('2025-06-05')) // filtered from June 5 onwards
    .sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());

  return (
    <PageWrapper breadcrumbs={[{ label: 'Calendario' }]}>
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div>
            <h1 className={styles.title}>Calendario de Actividades</h1>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Organiza tus entregas, exámenes y sesiones de repaso de este semestre.
            </p>
          </div>
          <Button
            variant="primary"
            iconLeft={<Plus size={18} />}
            onClick={() => setModalOpen(true)}
            id="add-calendar-event-btn"
          >
            Añadir evento
          </Button>
        </div>

        <div className={styles.grid}>
          {/* Calendar Box */}
          <div className={styles.calendarCard}>
            <div className={styles.monthHeader}>
              <h2 className={styles.monthTitle}>{currentMonthName}</h2>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Button variant="ghost" size="sm" style={{ padding: '4px' }} aria-label="Mes anterior">
                  <ChevronLeft size={16} />
                </Button>
                <Button variant="ghost" size="sm" style={{ padding: '4px' }} aria-label="Mes siguiente">
                  <ChevronRight size={16} />
                </Button>
              </div>
            </div>

            <div className={styles.dayLabels}>
              <span>Lun</span>
              <span>Mar</span>
              <span>Mié</span>
              <span>Jue</span>
              <span>Vie</span>
              <span>Sáb</span>
              <span>Dom</span>
            </div>

            <div className={styles.daysGrid}>
              {daysInGrid.map((cell, idx) => {
                const dayEvents = allEvents.filter(e => e.fecha === cell.dateStr);

                return (
                  <div
                    key={idx}
                    className={[
                      styles.dayCell,
                      !cell.isCurrentMonth && styles.otherMonth,
                      cell.isToday && styles.today
                    ].filter(Boolean).join(' ')}
                  >
                    <span className={styles.dayNum}>{cell.dayNum}</span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', overflow: 'hidden' }}>
                      {dayEvents.map(e => (
                        <div
                          key={e.id}
                          className={styles.eventBadge}
                          style={{ backgroundColor: tiposEvento[e.tipo].color }}
                          title={`${e.titulo} - ${e.descripcion || ''}`}
                        >
                          {e.titulo.split('—')[0].trim()}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* List Sidebar */}
          <div className={styles.eventsListCard} id="upcoming-events-sidebar">
            <h3 className={styles.listTitle}>Próximas Fechas</h3>
            <div className={styles.listItems}>
              {upcomingList.length > 0 ? (
                upcomingList.map((e) => (
                  <div key={e.id} className={styles.listItem}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <span className={styles.listItemTitle}>{e.titulo}</span>
                      <span
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: tiposEvento[e.tipo].color,
                          marginTop: '4px'
                        }}
                      />
                    </div>
                    {e.descripcion && <span style={{ fontSize: '11px', color: 'var(--color-text-secondary)' }}>{e.descripcion}</span>}
                    <div className={styles.listItemMeta}>
                      <span>{e.ramo}</span>
                      <span>{formatFechaCorta(e.fecha)}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div style={{ textAlign: 'center', padding: '24px 0', color: 'var(--color-text-tertiary)' }}>
                  <AlertCircle size={32} style={{ margin: '0 auto 8px', opacity: 0.5 }} />
                  <span>Sin eventos próximos</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Add Custom Event Modal */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Añadir Evento al Calendario">
        <form onSubmit={handleAddSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
            <label style={{ fontSize: '12px', fontWeight: 'var(--fw-semibold)', color: 'var(--color-text-secondary)' }}>
              Título del Evento
            </label>
            <input
              type="text"
              required
              placeholder="Ej. Repaso prueba hipótesis"
              style={{
                padding: 'var(--space-2) var(--space-3)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border)',
                outline: 'none',
                fontFamily: 'var(--font-ui)',
              }}
              value={newEvent.titulo}
              onChange={(e) => setNewEvent({ ...newEvent, titulo: e.target.value })}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
            <label style={{ fontSize: '12px', fontWeight: 'var(--fw-semibold)', color: 'var(--color-text-secondary)' }}>
              Tipo de Evento
            </label>
            <select
              style={{
                padding: 'var(--space-2) var(--space-3)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border)',
                outline: 'none',
                fontFamily: 'var(--font-ui)',
                background: 'var(--color-surface)',
              }}
              value={newEvent.tipo}
              onChange={(e) => setNewEvent({ ...newEvent, tipo: e.target.value as TipoEvento })}

            >
              <option value="prueba">Prueba</option>
              <option value="examen">Examen</option>
              <option value="entrega">Entrega / Tarea</option>
              <option value="repaso">Sesión de Repaso</option>
              <option value="personal">Personal</option>
            </select>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
            <label style={{ fontSize: '12px', fontWeight: 'var(--fw-semibold)', color: 'var(--color-text-secondary)' }}>
              Fecha
            </label>
            <input
              type="date"
              required
              style={{
                padding: 'var(--space-2) var(--space-3)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border)',
                outline: 'none',
                fontFamily: 'var(--font-ui)',
              }}
              value={newEvent.fecha}
              onChange={(e) => setNewEvent({ ...newEvent, fecha: e.target.value })}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
            <label style={{ fontSize: '12px', fontWeight: 'var(--fw-semibold)', color: 'var(--color-text-secondary)' }}>
              Descripción / Notas
            </label>
            <textarea
              placeholder="Ej. Revisar fórmulas de muestras independientes..."
              style={{
                padding: 'var(--space-2) var(--space-3)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border)',
                outline: 'none',
                fontFamily: 'var(--font-ui)',
                minHeight: '80px',
                resize: 'vertical',
              }}
              value={newEvent.descripcion}
              onChange={(e) => setNewEvent({ ...newEvent, descripcion: e.target.value })}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-2)', marginTop: 'var(--space-2)' }}>
            <Button variant="ghost" type="button" onClick={() => setModalOpen(false)}>
              Cancelar
            </Button>
            <Button variant="primary" type="submit" id="submit-custom-event-btn">
              Crear Evento
            </Button>
          </div>
        </form>
      </Modal>
    </PageWrapper>
  );
}

export default CalendarioPage;
