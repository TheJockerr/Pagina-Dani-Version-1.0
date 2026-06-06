// src/components/layout/PageWrapper/PageWrapper.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search } from 'lucide-react';
import { Sidebar } from '../Sidebar/index';
import { OrientalGardenCanvas } from '../../garden/OrientalGardenCanvas';
import { useUIStore } from '../../../store/index';
import styles from './PageWrapper.module.css';

interface Breadcrumb { label: string; to?: string; }

interface PageWrapperProps {
  children: React.ReactNode;
  breadcrumbs?: Breadcrumb[];
  fullWidth?: boolean;
}

export function PageWrapper({ children, breadcrumbs, fullWidth }: PageWrapperProps) {
  const { toggleSidebar, setSearchOpen } = useUIStore();

  return (
    <div className={styles.layout}>
      {/* 🌸 Oriental Garden — the living backdrop */}
      <OrientalGardenCanvas />

      <Sidebar />

      <main className={[styles.main, fullWidth && styles.fullWidth].filter(Boolean).join(' ')}>
        <div className={styles.topbar}>
          <button id="topbar-menu-btn" className={styles.menuBtn} onClick={toggleSidebar} aria-label="Menú">
            <Menu size={20} />
          </button>

          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className={styles.breadcrumbs} aria-label="breadcrumb">
              <Link to="/" className={styles.breadcrumb}>Inicio</Link>
              {breadcrumbs.map((bc, i) => (
                <React.Fragment key={i}>
                  <span className={styles.sep}>›</span>
                  {bc.to ? (
                    <Link to={bc.to} className={styles.breadcrumb}>{bc.label}</Link>
                  ) : (
                    <span className={[styles.breadcrumb, styles.current].join(' ')}>{bc.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}

          <div className={styles.topbarRight}>
            <button
              id="topbar-search-btn"
              className={styles.searchBtn}
              onClick={() => setSearchOpen(true)}
              aria-label="Búsqueda global"
            >
              <Search size={14} />
              <span>Buscar...</span>
              <span className={styles.kbd}>⌃K</span>
            </button>
          </div>
        </div>

        <div className={styles.content}>
          {children}
        </div>
      </main>
    </div>
  );
}

export default PageWrapper;
