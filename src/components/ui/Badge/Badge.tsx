// src/components/ui/Badge/Badge.tsx
import React from 'react';
import styles from './Badge.module.css';

type BadgeVariant = 'default' | 'success' | 'warning' | 'danger' | 'info';
type BadgeSize = 'sm' | 'md';

interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant = 'default', size = 'md', icon, children, className }: BadgeProps) {
  return (
    <span className={[styles.badge, styles[variant], styles[size], className].filter(Boolean).join(' ')}>
      {icon}
      {children}
    </span>
  );
}

export default Badge;
