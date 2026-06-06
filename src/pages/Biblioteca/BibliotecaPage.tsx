// src/pages/Biblioteca/BibliotecaPage.tsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Search, Library, FileSpreadsheet } from 'lucide-react';

import { PageWrapper } from '../../components/layout/PageWrapper/index';
import { getRamos } from '../../data/ramos/index';
import type { Material } from '../../data/ramos/adc/materiales';
import styles from './BibliotecaPage.module.css';

export function BibliotecaPage() {
  const navigate = useNavigate();
  const [materials, setMaterials] = useState<Material[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterUnit, setFilterUnit] = useState<string>('all');
  const [filterType, setFilterType] = useState<string>('all');
  const [filterSeen, setFilterSeen] = useState<string>('all');

  useEffect(() => {
    async function load() {
      const ramos = await getRamos();
      const allMaterials = ramos.flatMap((r) => r.materiales);
      setMaterials(allMaterials);
    }
    load();
  }, []);

  const filteredMaterials = materials.filter((m) => {
    const matchesSearch = m.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.etiquetas.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesUnit = filterUnit === 'all' ||
      (filterUnit === 'null' && m.unidad === null) ||
      m.unidad === parseInt(filterUnit);

    const matchesType = filterType === 'all' || m.tipo === filterType;

    const matchesSeen = filterSeen === 'all' ||
      (filterSeen === 'seen' && m.visto) ||
      (filterSeen === 'unseen' && !m.visto);

    return matchesSearch && matchesUnit && matchesType && matchesSeen;
  });

  const handleCardAction = (m: Material) => {
    if (m.extension === 'docx' || m.extension === 'xlsx') {
      const link = document.createElement('a');
      link.href = m.ruta;
      link.download = m.nombreArchivo;
      link.click();
    } else if (m.esPesado) {
      window.open(m.ruta, '_blank');
    } else {
      navigate(`/ramos/adc/pdf/${m.id}`);
    }
  };

  const getFileIcon = (m: Material) => {
    if (m.extension === 'xlsx') return <FileSpreadsheet size={18} />;
    return <FileText size={18} />;
  };

  const getFormatLabel = (m: Material) => {
    if (m.extension === 'xlsx') return 'Excel';
    if (m.extension === 'docx') return 'Word';
    if (m.esPesado) return `PDF · ${m.paginas} págs (grande)`;
    return `PDF · ${m.paginas} págs`;
  };

  return (
    <PageWrapper breadcrumbs={[{ label: 'Biblioteca Académica' }]}>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>🌸 Biblioteca Académica Daniela Moraga</h1>
          <p className={styles.intro}>
            Busca y filtra todos los materiales de tus ramos. Accede al visor interactivo de PDFs para estudiar a doble columna y tomar notas personalizadas.
          </p>
        </div>

        {/* Filters */}
        <div className={styles.filters}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1, minWidth: '240px', background: 'var(--color-bg)', padding: '0 12px', borderRadius: '4px', border: '1px solid var(--color-border)' }}>
            <Search size={16} style={{ color: 'var(--color-text-tertiary)' }} />
            <input
              type="text"
              placeholder="Buscar por nombre o etiquetas..."
              className={styles.searchInput}
              style={{ border: 'none', padding: '8px 0' }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <select
            className={styles.select}
            value={filterUnit}
            onChange={(e) => setFilterUnit(e.target.value)}
            aria-label="Filtrar por unidad"
          >
            <option value="all">Todas las Unidades</option>
            <option value="1">Unidad 1</option>
            <option value="2">Unidad 2</option>
            <option value="3">Unidad 3</option>
            <option value="null">General</option>
          </select>

          <select
            className={styles.select}
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            aria-label="Filtrar por tipo de documento"
          >
            <option value="all">Todos los Tipos</option>
            <option value="presentacion">Presentación</option>
            <option value="ejercicios">Ejercicios</option>
            <option value="formulario">Formulario</option>
            <option value="otro">Otro</option>
          </select>

          <select
            className={styles.select}
            value={filterSeen}
            onChange={(e) => setFilterSeen(e.target.value)}
            aria-label="Filtrar por estado de visto"
          >
            <option value="all">Todos los Estados</option>
            <option value="seen">Vistos</option>
            <option value="unseen">Pendientes</option>
          </select>
        </div>

        {/* Grid */}
        {filteredMaterials.length > 0 ? (
          <div className={styles.grid}>
            {filteredMaterials.map((m) => (
              <div
                key={m.id}
                className={styles.card}
                onClick={() => handleCardAction(m)}
                id={`biblioteca-card-${m.id}`}
                title={m.notas || m.nombre}
              >
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <div className={styles.iconWrapper}>{getFileIcon(m)}</div>
                  <div>
                    <h4 className={styles.matTitle}>{m.nombre}</h4>
                    <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>
                      {getFormatLabel(m)}
                    </span>
                  </div>
                </div>
                {m.notas && (
                  <p style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginTop: '6px', lineHeight: 1.5, borderLeft: '2px solid var(--color-border)', paddingLeft: '8px' }}>
                    {m.notas}
                  </p>
                )}
                <div style={{ marginTop: 'auto', paddingTop: '10px', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '11px', color: 'var(--color-text-secondary)' }}>
                    {m.unidad ? `Unidad ${m.unidad}` : 'Material General'}
                  </span>
                  <span style={{ fontSize: '11px', color: m.visto ? 'var(--color-secondary)' : 'var(--color-text-tertiary)' }}>
                    {m.visto ? '✓ Revisado' : 'Pendiente'}
                  </span>
                </div>
              </div>
            ))}
          </div>

        ) : (
          <div style={{ textAlign: 'center', padding: '40px', background: 'var(--color-surface)', borderRadius: '8px', border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)' }}>
            <Library size={48} style={{ margin: '0 auto 12px', color: 'var(--color-text-tertiary)' }} />
            <p>No se encontraron materiales con los filtros actuales.</p>
          </div>
        )}
      </div>
    </PageWrapper>
  );
}

export default BibliotecaPage;
