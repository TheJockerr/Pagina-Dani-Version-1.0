// src/components/search/SearchCommand/SearchCommand.tsx
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, FileText, HelpCircle, Key, BookOpen, Clock } from 'lucide-react';
import { useUIStore } from '../../../store/index';
import { buildSearchIndex, search } from '../../../utils/search';
import type { SearchResult } from '../../../utils/search';

import { getRamos } from '../../../data/ramos/index';
import styles from './SearchCommand.module.css';

export function SearchCommand() {
  const navigate = useNavigate();
  const { searchOpen, setSearchOpen } = useUIStore();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [recentSearches, setRecentSearches] = useState<string[]>([
    'desviación estándar',
    'distribución normal',
    'hipótesis nula'
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load index data once
  useEffect(() => {
    async function loadAndIndex() {
      const ramos = await getRamos();
      // Flatten all materials, flashcards, concepts, summaries
      const materiales = ramos.flatMap(r => r.materiales);
      const flashcards = ramos.flatMap(r => r.flashcards);
      const conceptos = ramos.flatMap(r => r.conceptos);
      const resumenes = ramos.flatMap(r => r.resumenes);

      buildSearchIndex({ materiales, flashcards, conceptos, resumenes });
    }
    loadAndIndex();
  }, []);

  // Handle Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(!searchOpen);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchOpen, setSearchOpen]);

  // Focus input when opened
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setResults([]);
      setSelectedIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [searchOpen]);

  useEffect(() => {
    if (query.trim()) {
      const searchResults = search(query);
      setResults(searchResults);
      setSelectedIndex(0);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setSearchOpen(false);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(results.length, 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + results.length) % Math.max(results.length, 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[selectedIndex]) {
        handleSelect(results[selectedIndex]);
      }
    }
  };

  const handleSelect = (item: SearchResult) => {
    // Add to recents
    if (query.trim() && !recentSearches.includes(query.trim())) {
      setRecentSearches(prev => [query.trim(), ...prev.slice(0, 4)]);
    }
    setSearchOpen(false);
    navigate(item.url);
  };

  if (!searchOpen) return null;

  const getIcon = (type: string) => {
    switch (type) {
      case 'material': return <FileText size={16} style={{ color: 'var(--color-primary)' }} />;
      case 'flashcard': return <HelpCircle size={16} style={{ color: 'var(--color-accent)' }} />;
      case 'concepto': return <Key size={16} style={{ color: 'var(--color-amber)' }} />;
      case 'resumen': return <BookOpen size={16} style={{ color: 'var(--color-secondary)' }} />;
      default: return <FileText size={16} />;
    }
  };

  return (
    <div className={styles.overlay} onClick={(e) => { if (e.target === e.currentTarget) setSearchOpen(false); }}>
      <div className={styles.modal} onKeyDown={handleKeyDown}>
        <div className={styles.searchHeader}>
          <Search size={20} style={{ color: 'var(--color-text-tertiary)' }} />
          <input
            ref={inputRef}
            type="text"
            className={styles.searchInput}
            placeholder="Buscar conceptos, flashcards, resúmenes, PDFs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className={styles.closeBtn} onClick={() => setSearchOpen(false)}>ESC</button>
        </div>

        <div className={styles.body}>
          {query.trim() === '' ? (
            <>
              {recentSearches.length > 0 && (
                <div className={styles.section}>
                  <div className={styles.sectionTitle}>Búsquedas recientes</div>
                  <div className={styles.list}>
                    {recentSearches.map((term, i) => (
                      <div
                        key={i}
                        className={styles.recentSearchItem}
                        onClick={() => setQuery(term)}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <Clock size={14} style={{ color: 'var(--color-text-tertiary)' }} />
                          <span>{term}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className={styles.section}>
                <div className={styles.sectionTitle}>Accesos rápidos</div>
                <div className={styles.list}>
                  <div className={styles.item} onClick={() => { setSearchOpen(false); navigate('/ramos/adc'); }}>
                    <div className={styles.itemTitle}>Ir a Análisis de Datos Cuantitativos</div>
                    <div className={styles.itemSub}>Ramo prioritario del semestre</div>
                  </div>
                  <div className={styles.item} onClick={() => { setSearchOpen(false); navigate('/calendario'); }}>
                    <div className={styles.itemTitle}>Ver Calendario Académico</div>
                    <div className={styles.itemSub}>Evaluaciones, entregas y repasos</div>
                  </div>
                  <div className={styles.item} onClick={() => { setSearchOpen(false); navigate('/ramos/adc?tab=flashcards'); }}>
                    <div className={styles.itemTitle}>Repasar Flashcards de Hoy</div>
                    <div className={styles.itemSub}>Sistema de repetición espaciada (SRS)</div>
                  </div>
                </div>
              </div>
            </>
          ) : results.length > 0 ? (
            <div className={styles.section}>
              <div className={styles.sectionTitle}>Resultados de búsqueda</div>
              <div className={styles.list}>
                {results.map((item, idx) => (
                  <div
                    key={item.id}
                    className={[styles.item, idx === selectedIndex && styles.selected].filter(Boolean).join(' ')}
                    onClick={() => handleSelect(item)}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {getIcon(item.type)}
                      <span className={styles.itemTitle}>{item.titulo}</span>
                    </div>
                    <span className={styles.itemSub} style={{ marginLeft: '24px' }}>{item.subtitulo}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className={styles.emptyState}>
              No se encontraron resultados para "{query}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchCommand;
