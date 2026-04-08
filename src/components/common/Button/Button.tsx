import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { GlassSurface } from '../GlassSurface';
import styles from './Button.module.css';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  disabled = false,
  className = '',
}) => {
  const isGlass = variant === 'glass';
  const classes = `${styles.button} ${isGlass ? styles.glassButton : styles[variant]} ${styles[size]} ${className}`.trim();
  const content = isGlass ? (
    <GlassSurface
      variant="button"
      interactive
      className={styles.glassSurface}
      contentClassName={styles.glassSurfaceContent}
    >
      <span className={styles.glassLabel}>{children}</span>
    </GlassSurface>
  ) : children;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
};
