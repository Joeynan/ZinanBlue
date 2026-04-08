import React, { CSSProperties } from 'react';
import styles from './GlassSurface.module.css';

type GlassSurfaceVariant = 'button' | 'capsule' | 'toggle';

export interface GlassSurfaceProps {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  variant?: 'button' | 'capsule' | 'toggle';
  interactive?: boolean;
  style?: CSSProperties;
}

const variantClassMap: Record<GlassSurfaceVariant, string> = {
  button: styles.buttonVariant,
  capsule: styles.capsuleVariant,
  toggle: styles.toggleVariant,
};

const normalizeDimension = (value?: number | string) => {
  if (typeof value === 'number') {
    return `${value}px`;
  }

  return value;
};

export const GlassSurface: React.FC<GlassSurfaceProps> = ({
  children,
  className = '',
  contentClassName = '',
  width,
  height,
  borderRadius = 999,
  variant = 'button',
  interactive = false,
  style = {},
}) => {
  const surfaceClasses = [
    styles.glassSurface,
    styles.fallbackSurface,
    variantClassMap[variant],
    interactive ? styles.interactive : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const contentClasses = [styles.content, contentClassName].filter(Boolean).join(' ');
  const surfaceStyle = {
    ...style,
    width: normalizeDimension(width),
    height: normalizeDimension(height),
    borderRadius: `${borderRadius}px`,
    ['--glass-surface-radius' as const]: `${borderRadius}px`,
  } as CSSProperties;

  return (
    <div className={surfaceClasses} style={surfaceStyle}>
      <div className={contentClasses}>
        {children}
      </div>
    </div>
  );
};
