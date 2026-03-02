import { CSSProperties, ReactNode } from 'react';
import styles from './GeometricShape.module.css';
import { ShapeColor, ShapeType } from '../../../types/work';

interface GeometricShapeProps {
  type: ShapeType;
  color?: ShapeColor;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  rotation?: number;
  opacity?: number;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

export const GeometricShape: React.FC<GeometricShapeProps> = ({
  type,
  color = 'black',
  size = 'md',
  rotation = 0,
  opacity = 1,
  className = '',
  children,
  onClick,
}) => {
  const sizeValue = typeof size === 'number'
    ? `${size}px`
    : `var(--shape-${size})`;

  const colorMap: Record<ShapeColor, string> = {
    red: 'var(--color-primary-red)',
    yellow: 'var(--color-primary-yellow)',
    blue: 'var(--color-primary-blue)',
    black: 'var(--color-black)',
    white: 'var(--color-white)',
    gray: 'var(--color-gray-300)',
  };

  const style: CSSProperties = {
    width: sizeValue,
    height: sizeValue,
    backgroundColor: colorMap[color],
    transform: `rotate(${rotation}deg)`,
    opacity,
  };

  return (
    <div
      className={`${styles.shape} ${styles[type]} ${className}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
