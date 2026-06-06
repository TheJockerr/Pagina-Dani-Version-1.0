// src/pages/Configuracion/ConfiguracionPage.tsx
import { useState } from 'react';
import { PageWrapper } from '../../components/layout/PageWrapper/index';
import { Button } from '../../components/ui/Button/index';
import { daniela } from '../../data/daniela';
import styles from './ConfiguracionPage.module.css';

export function ConfiguracionPage() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'sepia'>('light');

  const handleClearCache = () => {
    if (window.confirm('¿Estás segura de que deseas restablecer tu progreso? Esto borrará tus notas, flashcards y estadísticas.')) {
      localStorage.clear();
      window.location.href = '/welcome';
    }
  };

  const handleExportData = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(localStorage, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `dss-backup-${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <PageWrapper breadcrumbs={[{ label: 'Configuración' }]}>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>Configuración del Espacio</h1>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            Personaliza el comportamiento de la plataforma, limpia tu base de datos local o exporta tus estadísticas.
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>Perfil de Estudiante</h2>
          <div className={styles.row}>
            <div className={styles.info}>
              <span className={styles.label}>Nombre completo</span>
              <span className={styles.desc}>{daniela.nombreCompleto}</span>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.info}>
              <span className={styles.label}>Carrera y Universidad</span>
              <span className={styles.desc}>{daniela.carrera} • {daniela.universidad}</span>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.info}>
              <span className={styles.label}>Semestre actual</span>
              <span className={styles.desc}>Semestre {daniela.semestre} (2025)</span>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>Apariencia y Lectura</h2>
          <div className={styles.row}>
            <div className={styles.info}>
              <span className={styles.label}>Tema Visual</span>
              <span className={styles.desc}>Selecciona el estilo visual de tu espacio</span>
            </div>
            <select
              className={styles.select}
              value={theme}
              onChange={(e) => {
                const val = e.target.value as 'light' | 'dark' | 'sepia';
                setTheme(val);
                document.documentElement.setAttribute('data-theme', val);
              }}
              aria-label="Seleccionar tema visual"
            >
              <option value="light">Claro Cálido</option>
              <option value="dark">Oscuro (Noche)</option>
              <option value="sepia">Sepia (Lectura)</option>
            </select>
          </div>
        </div>

        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>Mantenimiento y Datos</h2>
          <div className={styles.row}>
            <div className={styles.info}>
              <span className={styles.label}>Restablecer progreso</span>
              <span className={styles.desc}>Borra las notas guardadas y reinicia el algoritmo de flashcards</span>
            </div>
            <Button variant="danger" size="sm" onClick={handleClearCache} id="clear-cache-btn">
              Borrar Datos
            </Button>
          </div>
          <div className={styles.row}>
            <div className={styles.info}>
              <span className={styles.label}>Exportar datos</span>
              <span className={styles.desc}>Descarga una copia de seguridad en formato JSON</span>
            </div>
            <Button variant="secondary" size="sm" onClick={handleExportData} id="export-data-btn">
              Exportar JSON
            </Button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default ConfiguracionPage;
