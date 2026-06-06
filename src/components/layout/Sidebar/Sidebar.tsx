// src/components/layout/Sidebar/Sidebar.tsx
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, BookOpen, Library, Calendar, BarChart2, Settings, Search } from 'lucide-react';
import { ramosPreview } from '../../../data/ramos/index';
import { useUIStore } from '../../../store/index';
import { useTimeOfDay, setGardenMode } from '../../../hooks/useTimeOfDay';
import type { GardenMode } from '../../../hooks/useTimeOfDay';
import styles from './Sidebar.module.css';

function AmbianceSwitcher() {
  const { mode } = useTimeOfDay();

  const options: Array<{ value: GardenMode; label: string; title: string }> = [
    { value: 'morning',   label: '🌅', title: 'Mañana' },
    { value: 'afternoon', label: '☀️', title: 'Tarde' },
    { value: 'night',     label: '🌙', title: 'Noche' },
    { value: 'auto',      label: '🔄', title: 'Automático' }
  ];

  return (
    <div className={styles.ambianceSelector}>
      <span className={styles.ambianceTitle}>Jardín</span>
      <div className={styles.ambianceButtons}>
        {options.map((opt) => (
          <button
            key={opt.value}
            className={[styles.ambianceBtn, mode === opt.value && styles.active].filter(Boolean).join(' ')}
            onClick={() => setGardenMode(opt.value)}
            title={opt.title}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

const mainNav = [
  { to: '/',           label: 'Dashboard',   icon: <LayoutDashboard size={16} />, id: 'nav-dashboard' },
  { to: '/ramos',      label: 'Mis Ramos',   icon: <BookOpen size={16} />,        id: 'nav-ramos' },
  { to: '/biblioteca', label: 'Biblioteca',  icon: <Library size={16} />,         id: 'nav-biblioteca' },
  { to: '/calendario', label: 'Calendario',  icon: <Calendar size={16} />,        id: 'nav-calendario' },
  { to: '/progreso',   label: 'Mi Progreso', icon: <BarChart2 size={16} />,       id: 'nav-progreso' },
];

const ramosActivos = ramosPreview.filter(r => r.estado === 'activo');

export function Sidebar() {
  const { sidebarOpen, setSearchOpen } = useUIStore();

  return (
    <>
      <aside className={[styles.sidebar, !sidebarOpen && styles.collapsed].filter(Boolean).join(' ')}>
        {/* Logo / Identidad */}
        <div className={styles.logo}>
          <div className={styles.logoMark}>
            <span className={styles.logoMarkText}>D</span>
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoName} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              🌸 Daniela Moraga
            </span>
            <span className={styles.logoSub}>Psicología | U. Mayor</span>
          </div>
        </div>

        <nav className={styles.nav}>
          {/* Search shortcut */}
          <button
            id="sidebar-search-btn"
            className={styles.navItem}
            onClick={() => setSearchOpen(true)}
            style={{ border: 'none', background: 'transparent', width: 'calc(100% - 24px)', textAlign: 'left' }}
          >
            <Search size={16} />
            Buscar
            <span style={{ marginLeft: 'auto', fontSize: '10px', color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-mono)' }}>⌃K</span>
          </button>

          {/* Main navigation */}
          {mainNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              id={item.id}
              className={({ isActive }) => [styles.navItem, isActive && styles.active].filter(Boolean).join(' ')}
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}

          {/* Active ramos section */}
          {ramosActivos.length > 0 && (
            <div className={styles.section}>
              <p className={styles.sectionLabel}>Ramos Activos</p>
              {ramosActivos.map((ramo) => (
                <NavLink
                  key={ramo.id}
                  to={`/ramos/${ramo.slug}`}
                  id={`nav-ramo-${ramo.id}`}
                  className={({ isActive }) => [styles.ramoItem, isActive && styles.active].filter(Boolean).join(' ')}
                >
                  <span className={styles.ramoDot} style={{ background: ramo.colorAccent }} />
                  {ramo.codigoCorto} — {ramo.nombre.split(' ').slice(0, 3).join(' ')}
                </NavLink>
              ))}
            </div>
          )}
        </nav>

        {/* Ambiance Switcher */}
        <AmbianceSwitcher />

        <div className={styles.footer}>
          <NavLink
            to="/configuracion"
            id="nav-config"
            className={({ isActive }) => [styles.navItem, isActive && styles.active].filter(Boolean).join(' ')}
            style={{ margin: 0 }}
          >
            <Settings size={16} />
            Configuración
          </NavLink>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
