// src/components/ui/Button/Button.tsx
import React from 'react';
import { Loader2 } from 'lucide-react';
import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'success';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  as?: 'button' | 'a';
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', loading, fullWidth, iconLeft, iconRight, children, className, disabled, as: Tag = 'button', href, ...props }, ref) => {
    const cls = [
      styles.btn,
      styles[variant],
      styles[size],
      fullWidth && styles.fullWidth,
      iconRight && !iconLeft && styles.iconRight,
      className,
    ].filter(Boolean).join(' ');

    if (Tag === 'a') {
      return (
        <a href={href} className={cls}>
          {loading ? <Loader2 size={14} className="animate-spin" /> : iconLeft}
          {children}
          {!loading && iconRight}
        </a>
      );
    }

    return (
      <button ref={ref} className={cls} disabled={disabled || loading} {...props}>
        {loading ? <Loader2 size={14} className="animate-spin" /> : iconLeft}
        {children}
        {!loading && iconRight}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
