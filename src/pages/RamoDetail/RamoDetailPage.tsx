// src/pages/RamoDetail/RamoDetailPage.tsx
import { useState, useEffect } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { BookOpen, FileText, HelpCircle, CheckSquare, Award, ArrowRight, ChevronDown, ChevronUp, FileSpreadsheet } from 'lucide-react';


import { PageWrapper } from '../../components/layout/PageWrapper/index';
import { Tabs } from '../../components/ui/Tabs/index';
import { Button } from '../../components/ui/Button/index';
import { Progress } from '../../components/ui/Progress/index';
import { getRamos } from '../../data/ramos/index';
import type { Ramo } from '../../data/ramos/index';
import { useFlashcardsStore, useProgresoStore } from '../../store/index';
import { calcularSiguienteReview } from '../../utils/srs';
import type { RatingType } from '../../utils/srs';
import styles from './RamoDetailPage.module.css';


export function RamoDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'unidades';

  const [ramo, setRamo] = useState<Ramo | null>(null);
  const [expandedResumen, setExpandedResumen] = useState<string | null>(null);

  // Flashcards state
  const [fcIndex, setFcIndex] = useState(0);
  const [fcFlipped, setFcFlipped] = useState(false);
  const srsData = useFlashcardsStore((s) => s.srsData);
  const updateSRS = useFlashcardsStore((s) => s.updateSRS);

  // Quiz state
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [quizFinished, setQuizFinished] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const agregarQuiz = useProgresoStore((s) => s.agregarQuiz);
  const storeMateriales = useProgresoStore((s) => s.materiales);

  useEffect(() => {
    async function load() {
      const all = await getRamos();
      const match = all.find((r) => r.slug === slug);
      if (match) {
        setRamo(match);
      } else {
        navigate('/ramos');
      }
    }
    load();
  }, [slug, navigate]);

  if (!ramo) {
    return (
      <PageWrapper>
        <div>Cargando ramo...</div>
      </PageWrapper>
    );
  }

  const handleTabChange = (tabId: string) => {
    setSearchParams({ tab: tabId });
  };

  const tabsList = [
    { id: 'unidades', label: 'Unidades', icon: <BookOpen size={16} />, count: ramo.unidades.length },
    { id: 'resumenes', label: 'Resúmenes', icon: <FileText size={16} />, count: ramo.resumenes.length },
    { id: 'materiales', label: 'Materiales', icon: <FileText size={16} />, count: ramo.materiales.length },
    { id: 'flashcards', label: 'Flashcards', icon: <HelpCircle size={16} />, count: ramo.flashcards.length },
    { id: 'quizzes', label: 'Autoevaluación', icon: <CheckSquare size={16} />, count: ramo.quizzes.length },
  ];

  // ── FLASHCARD LOGIC ──
  const activeCard = ramo.flashcards[fcIndex];
  const handleRate = (rating: RatingType) => {
    if (!activeCard) return;
    const currentSRS = srsData[activeCard.id] || {
      intervalo: 1, facilidad: 2.5, repeticiones: 0,
      ultimaReview: null, proximaReview: null
    };
    const nextSRS = calcularSiguienteReview(currentSRS, rating);
    updateSRS(activeCard.id, nextSRS);

    setFcFlipped(false);
    setTimeout(() => {
      setFcIndex((prev) => (prev + 1) % ramo.flashcards.length);
    }, 200);
  };

  // ── QUIZ LOGIC ──
  const activeQuiz = ramo.quizzes[quizIndex];
  const handleOptionSelect = (opt: string) => {
    if (selectedOption !== null) return; // already answered
    setSelectedOption(opt);
    if (opt === activeQuiz.respuestaCorrecta) {
      setQuizScore((prev) => prev + 1);
    }
  };

  const handleNextQuiz = () => {
    setSelectedOption(null);
    if (quizIndex < ramo.quizzes.length - 1) {
      setQuizIndex((prev) => prev + 1);
    } else {
      setQuizFinished(true);
      // Save result in progress store
      agregarQuiz({
        id: `quiz-run-${Date.now()}`,
        puntaje: quizScore + (selectedOption === activeQuiz.respuestaCorrecta ? 1 : 0),
        total: ramo.quizzes.length,
        ramoId: ramo.id,
      });
    }
  };

  const resetQuiz = () => {
    setQuizIndex(0);
    setSelectedOption(null);
    setQuizScore(0);
    setQuizFinished(false);
  };

  return (
    <PageWrapper
      breadcrumbs={[
        { label: 'Mis Ramos', to: '/ramos' },
        { label: ramo.nombre },
      ]}
    >
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badgeAndCode}>
            <span style={{ fontSize: '12px', fontWeight: 'var(--fw-bold)', color: ramo.colorAccent, background: ramo.colorSubtle, padding: '3px 8px', borderRadius: '4px' }}>
              {ramo.codigoCorto}
            </span>
          </div>
          <h1 className={styles.title}>🌸 {ramo.nombre}</h1>
          <p className={styles.description}>{ramo.descripcion}</p>
        </div>

        {/* Tabs switcher */}
        <Tabs tabs={tabsList} activeTab={activeTab} onChange={handleTabChange}>
          {/* Tab content viewports */}
          {activeTab === 'unidades' && (
            <div className={styles.unidadesList}>
              {ramo.unidades.map((u) => (
                <div key={u.id} className={styles.unidadCard}>
                  <div className={styles.unidadHeader}>
                    <div>
                      <span className={styles.unidadNum}>Unidad {u.numero}</span>
                      <h3 className={styles.unidadTitle}>{u.titulo}</h3>
                      <span className={styles.unidadSub}>{u.subtitulo}</span>
                    </div>
                    <span style={{ fontSize: '12px', padding: '4px 8px', borderRadius: '12px', background: 'var(--color-surface-alt)', fontWeight: 'var(--fw-semibold)' }}>
                      {u.estado === 'completada' ? '✅ Completada' : u.estado === 'en_progreso' ? '🔵 En progreso' : '○ Pendiente'}
                    </span>
                  </div>
                  <div className={styles.temasGrid}>
                    {u.temas.map((tema, idx) => (
                      <div key={idx} className={styles.temaItem}>
                        <span style={{ color: ramo.colorAccent }}>•</span>
                        <span>{tema}</span>
                      </div>
                    ))}
                  </div>
                  <Progress value={u.progreso} color={ramo.colorAccent} size="sm" showValue label="Progreso de unidad" />
                </div>
              ))}
            </div>
          )}

          {activeTab === 'resumenes' && (
            <div className={styles.resumenesList}>
              {ramo.resumenes.map((r) => {
                const isOpen = expandedResumen === r.id;
                return (
                  <div key={r.id} className={styles.resumenCard} id={`resumen-card-${r.id}`}>
                    <div className={styles.resumenHeader} onClick={() => setExpandedResumen(isOpen ? null : r.id)}>
                      <div>
                        <h3 className={styles.resumenTitle}>{r.titulo}</h3>
                        <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>
                          Lectura estimada: {r.tiempoLectura} • Última edición: {r.ultimaEdicion}
                        </span>
                      </div>
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>

                    {isOpen && (
                      <div className={styles.resumenContent}>
                        {r.secciones.map((sec) => (
                          <div key={sec.id} className={styles.resumenSection}>
                            <h4 className={styles.resumenSecTitle}>{sec.titulo}</h4>
                            <p className={styles.resumenSecText}>{sec.contenido}</p>
                            {sec.conceptosClave.length > 0 && (
                              <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginTop: '4px' }}>
                                {sec.conceptosClave.map((c) => (
                                  <span key={c} style={{ fontSize: '11px', color: 'var(--color-primary)', background: 'var(--color-primary-subtle)', padding: '2px 6px', borderRadius: '4px' }}>
                                    {c}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === 'materiales' && (
            <div className={styles.materialsGrid}>
              {ramo.materiales.map((m) => {
                // Determine icon and color based on file type
                let Icon = FileText;
                let extensionLabel = 'PDF';
                let actionLabel = `Visor Integrado (${m.paginas} págs)`;

                if (m.extension === 'xlsx') {
                  Icon = FileSpreadsheet;
                  extensionLabel = 'EXCEL';
                  actionLabel = 'Descargar Planilla';
                } else if (m.extension === 'docx') {
                  Icon = FileText;
                  extensionLabel = 'WORD';
                  actionLabel = 'Descargar Documento';
                } else if (m.esPesado) {
                  extensionLabel = 'PDF (Grande)';
                  actionLabel = 'Abrir en pestaña nueva';
                }

                const handleCardClick = () => {
                  if (m.extension === 'docx' || m.extension === 'xlsx') {
                    // Trigger download
                    const link = document.createElement('a');
                    link.href = m.ruta;
                    link.download = m.nombreArchivo;
                    link.click();
                  } else if (m.esPesado) {
                    // Open in new tab
                    window.open(m.ruta, '_blank');
                  } else {
                    // Go to custom interactive viewer
                    navigate(`/ramos/${ramo.slug}/pdf/${m.id}`);
                  }
                };

                const isVisto = storeMateriales[m.id]?.visto || false;

                return (
                  <div
                    key={m.id}
                    className={styles.materialCard}
                    onClick={handleCardClick}
                    id={`material-card-${m.id}`}
                  >
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <div className={styles.matIconWrapper} style={{ backgroundColor: ramo.colorSubtle, color: ramo.colorAccent }}>
                        <Icon size={18} />
                      </div>
                      <div>
                        <h4 className={styles.matTitle}>{m.nombre}</h4>
                        <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <span>{extensionLabel}</span>
                          <span>•</span>
                          <span style={{ color: 'var(--color-primary)', fontWeight: 'var(--fw-medium)' }}>{actionLabel}</span>
                        </span>
                      </div>
                    </div>
                    <div style={{ marginTop: 'auto', paddingTop: '10px', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '11px', color: 'var(--color-text-secondary)' }}>
                        Unidad {m.unidad || 'General'}
                      </span>
                      <span style={{ fontSize: '11px', color: isVisto ? 'var(--color-secondary)' : 'var(--color-text-tertiary)', fontWeight: isVisto ? 'var(--fw-semibold)' : 'normal' }}>
                        {isVisto ? '✓ Leído' : 'Pendiente'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}


          {activeTab === 'flashcards' && (
            <div className={styles.fcContainer}>
              <div className={styles.fcHeader}>
                <span>Tarjeta {fcIndex + 1} de {ramo.flashcards.length}</span>
                <span>Repaso SRS</span>
              </div>

              {activeCard ? (
                <>
                  <div className={[styles.fcCard, fcFlipped && styles.flipped].filter(Boolean).join(' ')} onClick={() => setFcFlipped(!fcFlipped)} id="flashcard-box">
                    <div className={styles.fcInner}>
                      <div className={[styles.fcFace, styles.fcFront].join(' ')}>
                        <p className={styles.fcText}>{activeCard.frente}</p>
                        <span className={styles.fcTip}>Haz clic para voltear</span>
                      </div>
                      <div className={[styles.fcFace, styles.fcBack].join(' ')}>
                        <p className={styles.fcText}>{activeCard.reverso}</p>
                        <span className={styles.fcTip}>Haz clic para volver al frente</span>
                      </div>
                    </div>
                  </div>

                  {fcFlipped && (
                    <div className={styles.fcButtons} id="flashcard-srs-actions">
                      <Button variant="danger" size="sm" onClick={() => handleRate('again')} id="fc-btn-again">
                        Otra vez
                      </Button>
                      <Button variant="secondary" size="sm" onClick={() => handleRate('hard')} id="fc-btn-hard">
                        Difícil
                      </Button>
                      <Button variant="success" size="sm" onClick={() => handleRate('easy')} id="fc-btn-easy">
                        Fácil
                      </Button>
                    </div>
                  )}
                </>
              ) : (
                <div>No hay flashcards cargadas para este ramo.</div>
              )}
            </div>
          )}

          {activeTab === 'quizzes' && (
            <div className={styles.quizContainer}>
              {!quizFinished ? (
                activeQuiz ? (
                  <div className={styles.quizCard} id={`quiz-card-${activeQuiz.id}`}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '13px', color: 'var(--color-text-secondary)' }}>
                      <span>Pregunta {quizIndex + 1} de {ramo.quizzes.length}</span>
                      <span>Dificultad: {activeQuiz.dificultad}</span>
                    </div>

                    <p className={styles.quizQuestion}>{activeQuiz.pregunta}</p>

                    <div className={styles.quizOptions}>
                      {activeQuiz.opciones.map((opt) => {
                        let btnClass = styles.optionBtn;
                        if (selectedOption !== null) {
                          if (opt === activeQuiz.respuestaCorrecta) btnClass = [styles.optionBtn, styles.correct].join(' ');
                          else if (opt === selectedOption) btnClass = [styles.optionBtn, styles.incorrect].join(' ');
                        } else if (selectedOption === opt) {
                          btnClass = [styles.optionBtn, styles.selected].join(' ');
                        }

                        return (
                          <button
                            key={opt}
                            className={btnClass}
                            disabled={selectedOption !== null}
                            onClick={() => handleOptionSelect(opt)}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>

                    {selectedOption !== null && (
                      <div className={styles.explanation}>
                        <p style={{ fontWeight: 'bold', marginBottom: '4px' }}>
                          {selectedOption === activeQuiz.respuestaCorrecta ? '🎉 ¡Correcto!' : '❌ Incorrecto'}
                        </p>
                        <p>{activeQuiz.explicacion}</p>
                        <Button
                          variant="primary"
                          size="md"
                          iconRight={<ArrowRight size={16} />}
                          style={{ marginTop: '16px', float: 'right' }}
                          onClick={handleNextQuiz}
                          id="quiz-next-btn"
                        >
                          Siguiente
                        </Button>
                        <div style={{ clear: 'both' }} />
                      </div>
                    )}
                  </div>
                ) : (
                  <div>No hay preguntas de quiz cargadas.</div>
                )
              ) : (
                <div className={styles.quizCard} style={{ textAlign: 'center' }} id="quiz-finished-panel">
                  <Award size={64} style={{ color: 'var(--color-secondary)', margin: '0 auto var(--space-4)' }} />
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 'var(--fw-bold)' }}>
                    ¡Quiz completado!
                  </h3>
                  <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: '8px 0 24px' }}>
                    Tu puntuación: <strong>{quizScore}</strong> de <strong>{ramo.quizzes.length}</strong> correctas.
                  </p>
                  <Button variant="primary" onClick={resetQuiz} id="quiz-retry-btn">
                    Volver a intentar
                  </Button>
                </div>
              )}
            </div>
          )}
        </Tabs>
      </div>
    </PageWrapper>
  );
}

export default RamoDetailPage;
