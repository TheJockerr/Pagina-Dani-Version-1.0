// src/components/ui/Card/Card.tsx
import React from 'react';
import styles from './Card.module.css';

type CardVariant = 'default' | 'elevated' | 'bordered' | 'highlighted';
type CardPadding = 'sm' | 'md' | 'lg' | 'none';

interface CardProps {
  variant?: CardVariant;
  padding?: CardPadding;
  clickable?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
  id?: string;
}

export function Card({ variant = 'default', padding = 'md', clickable, onClick, style, className, children, id }: CardProps) {
  return (
    <div
      id={id}
      className={[styles.card, styles[variant], styles[padding], clickable && styles.clickable, className].filter(Boolean).join(' ')}
      style={style}
      onClick={onClick}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      onKeyDown={clickable && onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); } : undefined}
    >
      {children}
    </div>
  );
}

export default Card;
