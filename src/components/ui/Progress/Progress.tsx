// src/components/ui/Progress/Progress.tsx
import styles from './Progress.module.css';

interface ProgressProps {
  value: number; // 0-100
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  label?: string;
  showValue?: boolean;
  animated?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function Progress({ value, size = 'md', color, label, showValue = false, animated = true, className, style }: ProgressProps) {
  const clamped = Math.min(100, Math.max(0, value));
  return (
    <div className={[styles.wrapper, styles[size], animated && styles.animated, className].filter(Boolean).join(' ')} style={style}>
      {(label || showValue) && (
        <div className={styles.header}>
          {label && <span className={styles.label}>{label}</span>}
          {showValue && <span className={styles.value}>{clamped}%</span>}
        </div>
      )}
      <div className={styles.track}>
        <div
          className={styles.fill}
          style={{ width: `${clamped}%`, '--progress-color': color } as React.CSSProperties}
          role="progressbar"
          aria-valuenow={clamped}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}

export default Progress;

