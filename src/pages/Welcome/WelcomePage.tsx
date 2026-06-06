// src/pages/Welcome/WelcomePage.tsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { daniela } from '../../data/daniela';
import { Button } from '../../components/ui/Button/index';
import styles from './WelcomePage.module.css';

// Inline botanical SVGs — no external deps
const LotusDecoration = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.petalTopRight}>
    <ellipse cx="100" cy="160" rx="18" ry="50" fill="currentColor" opacity="0.6" transform="rotate(-25 100 160)" />
    <ellipse cx="100" cy="160" rx="18" ry="50" fill="currentColor" opacity="0.5" />
    <ellipse cx="100" cy="160" rx="18" ry="50" fill="currentColor" opacity="0.6" transform="rotate(25 100 160)" />
    <ellipse cx="100" cy="160" rx="15" ry="42" fill="currentColor" opacity="0.4" transform="rotate(50 100 160)" />
    <ellipse cx="100" cy="160" rx="15" ry="42" fill="currentColor" opacity="0.4" transform="rotate(-50 100 160)" />
    <ellipse cx="100" cy="160" rx="12" ry="35" fill="currentColor" opacity="0.3" transform="rotate(75 100 160)" />
    <ellipse cx="100" cy="160" rx="12" ry="35" fill="currentColor" opacity="0.3" transform="rotate(-75 100 160)" />
    <circle cx="100" cy="155" r="12" fill="currentColor" opacity="0.7" />
    <path d="M85 175 Q100 168 115 175 Q100 185 85 175Z" fill="currentColor" opacity="0.4" />
    <path d="M78 180 Q100 172 122 180" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
    <line x1="100" y1="185" x2="100" y2="200" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    <line x1="92" y1="193" x2="100" y2="185" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <line x1="108" y1="193" x2="100" y2="185" stroke="currentColor" strokeWidth="1" opacity="0.3" />
  </svg>
);

const LeafDecoration = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.leafBottomLeft}>
    <path d="M30 180 Q80 100 160 40 Q100 120 30 180Z" fill="currentColor" opacity="0.8" />
    <path d="M30 180 Q80 100 160 40" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <path d="M30 180 Q55 145 90 120" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
    <path d="M30 180 Q65 130 110 100" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
    <path d="M30 180 Q75 118 130 82" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
    <path d="M50 160 Q80 130 110 115" stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
    <path d="M30 160 Q62 140 100 125 L90 115 Q70 135 50 150Z" fill="currentColor" opacity="0.15" />
    <path d="M40 140 Q70 120 105 108 L98 100 Q68 118 38 135Z" fill="currentColor" opacity="0.1" />
  </svg>
);

const SmallLotus = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.lotusCenter}>
    <ellipse cx="40" cy="55" rx="8" ry="22" fill="currentColor" opacity="0.6" transform="rotate(-20 40 55)" />
    <ellipse cx="40" cy="55" rx="8" ry="22" fill="currentColor" opacity="0.5" />
    <ellipse cx="40" cy="55" rx="8" ry="22" fill="currentColor" opacity="0.6" transform="rotate(20 40 55)" />
    <ellipse cx="40" cy="55" rx="6" ry="18" fill="currentColor" opacity="0.35" transform="rotate(42 40 55)" />
    <ellipse cx="40" cy="55" rx="6" ry="18" fill="currentColor" opacity="0.35" transform="rotate(-42 40 55)" />
    <circle cx="40" cy="52" r="5" fill="currentColor" opacity="0.7" />
    <line x1="40" y1="70" x2="40" y2="80" stroke="currentColor" strokeWidth="1" opacity="0.4" />
  </svg>
);

// Inline flower icon for the card
const FlowerIcon = () => (
  <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.flowerIcon}>
    <ellipse cx="28" cy="14" rx="6" ry="12" fill="currentColor" opacity="0.6" />
    <ellipse cx="28" cy="14" rx="6" ry="12" fill="currentColor" opacity="0.6" transform="rotate(60 28 28)" />
    <ellipse cx="28" cy="14" rx="6" ry="12" fill="currentColor" opacity="0.6" transform="rotate(120 28 28)" />
    <ellipse cx="28" cy="14" rx="6" ry="12" fill="currentColor" opacity="0.5" transform="rotate(180 28 28)" />
    <ellipse cx="28" cy="14" rx="6" ry="12" fill="currentColor" opacity="0.5" transform="rotate(240 28 28)" />
    <ellipse cx="28" cy="14" rx="6" ry="12" fill="currentColor" opacity="0.5" transform="rotate(300 28 28)" />
    <circle cx="28" cy="28" r="7" fill="currentColor" opacity="0.85" />
    <circle cx="28" cy="28" r="4" fill="white" opacity="0.4" />
  </svg>
);

export function WelcomePage() {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<'splash' | 'welcome'>('splash');

  useEffect(() => {
    const timer = setTimeout(() => setPhase('welcome'), 2200);
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    localStorage.setItem('dss-welcomed', 'true');
    navigate('/');
  };

  return (
    <div className={styles.container}>
      {/* Botanical decorations */}
      <div className={styles.botanical} aria-hidden="true">
        <LotusDecoration />
        <LeafDecoration />
        <SmallLotus />
      </div>

      {phase === 'splash' ? (
        <div className={styles.splash} key="splash">
          <div className={styles.splashMonogram}>
            <span className={styles.splashMonogramText}>D</span>
          </div>
          <div className={styles.splashDivider} />
          <span className={styles.loadingText}>Preparando tu espacio de estudio</span>
        </div>
      ) : (
        <div className={styles.welcomeCard} key="welcome">
          <FlowerIcon />

          <div className={styles.greeting}>
            <h1 className={styles.title} style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '32px', fontWeight: 400 }}>
              🌸 Espacio de Estudio
            </h1>
            <p className={styles.subtitle} style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 500, color: 'var(--color-primary)', marginTop: '4px' }}>
              Daniela Moraga
            </p>
          </div>

          <p className={styles.text}>{daniela.mensajeBienvenida}</p>

          <Button
            variant="primary"
            size="lg"
            onClick={handleEnter}
            iconRight={<BookOpen size={17} />}
            style={{ width: '100%', maxWidth: '260px' }}
            id="enter-space-btn"
            className={styles.enterBtn}
          >
            Ingresar a mi espacio
          </Button>

          <div className={styles.meta}>
            <span>{daniela.universidad}</span>
            <span className={styles.metaDot} />
            <span>{daniela.carrera}</span>
            <span className={styles.metaDot} />
            <span>Semestre {daniela.semestre}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default WelcomePage;
