// src/pages/PDFViewer/PDFViewerPage.tsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Bookmark, ArrowLeft, Save, Download, ExternalLink } from 'lucide-react';
import { PageWrapper } from '../../components/layout/PageWrapper/index';
import { Button } from '../../components/ui/Button/index';
import { useProgresoStore } from '../../store/index';
import { getRamos } from '../../data/ramos/index';
import type { Material } from '../../data/ramos/adc/materiales';
import styles from './PDFViewerPage.module.css';

export function PDFViewerPage() {
  const { pdfId } = useParams<{ pdfId: string }>();
  const navigate = useNavigate();

  const [material, setMaterial] = useState<Material | null>(null);
  const [numPages, setNumPages] = useState<number>(1);
  const [pageNumber, setPageNumber] = useState<number>(1);

  // Zustand states
  const { materiales, setUltimaPagina, setNota, toggleMarcador, marcarMaterialVisto } = useProgresoStore();
  const currentProgress = materiales[pdfId || ''] || {
    visto: false, ultimaVista: null, ultimaPagina: 1, notas: {}, marcadores: [],
  };

  useEffect(() => {
    async function load() {
      const all = await getRamos();
      const match = all.flatMap((r) => r.materiales).find((m) => m.id === pdfId);
      if (match) {
        setMaterial(match);
        setNumPages(match.paginas);
        setPageNumber(currentProgress.ultimaPagina || 1);
        marcarMaterialVisto(match.id);
      } else {
        navigate('/ramos');
      }
    }
    load();
  }, [pdfId, navigate]);

  if (!material) {
    return (
      <PageWrapper>
        <div style={{ padding: '40px', textAlign: 'center', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-ui)' }}>
          Cargando lector de PDF...
        </div>
      </PageWrapper>
    );
  }

  const handlePrevPage = () => {
    if (pageNumber > 1) {
      const newPage = pageNumber - 1;
      setPageNumber(newPage);
      setUltimaPagina(material.id, newPage);
    }
  };

  const handleNextPage = () => {
    if (pageNumber < numPages) {
      const newPage = pageNumber + 1;
      setPageNumber(newPage);
      setUltimaPagina(material.id, newPage);
    }
  };

  const handleNoteChange = (text: string) => {
    setNota(material.id, pageNumber, text);
  };

  const isBookmarked = currentProgress.marcadores.includes(pageNumber);

  const triggerDownload = () => {
    const link = document.createElement('a');
    link.href = material.ruta;
    link.download = material.nombreArchivo;
    link.click();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: 'var(--color-bg)' }}>
      {/* Topbar / Toolbar */}
      <div className={styles.toolbar} style={{ borderBottom: '1px solid var(--color-border)', background: 'var(--color-surface)' }}>
        <div className={styles.controls}>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(`/ramos/adc?tab=materiales`)}
            iconLeft={<ArrowLeft size={16} />}
            id="pdf-back-btn"
          >
            Volver
          </Button>
          <span style={{ fontSize: '14px', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 500, color: 'var(--color-text-primary)' }}>
            {material.nombre}
          </span>
        </div>

        <div className={styles.controls}>
          {/* Page selectors (acts as index for notes page mapping) */}
          <Button
            variant="ghost"
            size="sm"
            disabled={pageNumber <= 1}
            onClick={handlePrevPage}
            id="pdf-prev-btn"
          >
            <ChevronLeft size={18} />
          </Button>
          <span className={styles.pageIndicator} style={{ fontFamily: 'var(--font-ui)', fontSize: '12px' }}>
            Nota pág. {pageNumber} de {numPages}
          </span>
          <Button
            variant="ghost"
            size="sm"
            disabled={pageNumber >= numPages}
            onClick={handleNextPage}
            id="pdf-next-btn"
          >
            <ChevronRight size={18} />
          </Button>

          <span style={{ height: '20px', width: '1px', background: 'var(--color-border)', margin: '0 8px' }} />

          {/* Bookmark page */}
          <Button
            variant={isBookmarked ? 'primary' : 'ghost'}
            size="sm"
            onClick={() => toggleMarcador(material.id, pageNumber)}
            id="pdf-bookmark-btn"
            title="Marcar esta página"
          >
            <Bookmark size={16} />
          </Button>

          {/* Download button */}
          <Button
            variant="secondary"
            size="sm"
            onClick={triggerDownload}
            iconLeft={<Download size={16} />}
            id="pdf-download-btn"
          >
            Descargar
          </Button>
        </div>
      </div>

      <div className={styles.container} style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        {/* PDF Area Column */}
        <div className={styles.pdfColumn} style={{ flex: 1, height: '100%', padding: '16px', boxSizing: 'border-box', overflow: 'hidden' }}>
          {material.esPesado ? (
            /* Warning/Options card for heavy documents */
            <div
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                padding: '48px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                height: '100%',
                maxHeight: '520px',
                margin: 'auto',
                maxWidth: '600px',
                boxShadow: 'var(--shadow-2)',
              }}
            >
              <div style={{ fontSize: '64px' }}>🌸</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontStyle: 'italic', fontWeight: 500, color: 'var(--color-text-primary)' }}>
                Documento de Gran Tamaño
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', maxWidth: '440px', lineHeight: 1.6 }}>
                Este archivo (<code>{material.nombreArchivo}</code>) supera los 25 MB. Para asegurar un rendimiento óptimo y evitar sobrecargar tu navegador, te recomendamos abrirlo de forma externa.
              </p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <Button
                  variant="primary"
                  onClick={() => window.open(material.ruta, '_blank')}
                  iconRight={<ExternalLink size={16} />}
                >
                  Abrir en pestaña nueva
                </Button>
                <Button
                  variant="secondary"
                  onClick={triggerDownload}
                  iconRight={<Download size={16} />}
                >
                  Descargar archivo
                </Button>
              </div>
            </div>
          ) : (
            /* NATIVE NANO VISUALIZATION using iframe linked to standard PDF */
            <iframe
              src={`${material.ruta}#page=${pageNumber}`}
              title={material.nombre}
              width="100%"
              height="100%"
              style={{ border: 'none', background: '#fff', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-1)' }}
            />
          )}
        </div>

        {/* Notes Column */}
        <div className={styles.notesColumn} style={{ width: '360px', borderLeft: '1px solid var(--color-border)', background: 'var(--color-surface-warm)', display: 'flex', flexDirection: 'column' }}>
          <div className={styles.notesHeader} style={{ padding: '20px', borderBottom: '1px solid var(--color-border)' }}>
            <h3 className={styles.notesTitle} style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontStyle: 'italic', fontWeight: 500 }}>
              Notas de la Página {pageNumber}
            </h3>
            <span style={{ fontSize: '11px', color: 'var(--color-text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Auto-guardado</span>
          </div>

          <textarea
            className={styles.notesArea}
            placeholder={`Escribe aquí tus apuntes para la página ${pageNumber}...`}
            value={currentProgress.notas[pageNumber] || ''}
            onChange={(e) => handleNoteChange(e.target.value)}
            id="pdf-notes-input"
            style={{ flex: 1, padding: '20px', border: 'none', resize: 'none', background: 'transparent', fontFamily: 'var(--font-ui)', fontSize: '14px', lineHeight: 1.6, color: 'var(--color-text-primary)', outline: 'none' }}
          />

          <div className={styles.notesFooter} style={{ padding: '16px 20px', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--color-text-tertiary)', background: 'var(--color-surface)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Save size={12} />
              <span>Guardado en local</span>
            </div>
            <span>Pág {pageNumber}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PDFViewerPage;
