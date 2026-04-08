import { useEffect, useMemo, useState, type CSSProperties, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './HomeHeroCta.module.css';

interface HomeHeroCtaProps {
  to: string;
  children: ReactNode;
  className?: string;
}

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export const HomeHeroCta: React.FC<HomeHeroCtaProps> = ({
  to,
  children,
  className = '',
}) => {
  const [mx, setMx] = useState(0.5);
  const [my, setMy] = useState(0.5);
  const [hovered, setHovered] = useState(false);
  const [interactiveEnabled, setInteractiveEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const desktopPointerQuery = window.matchMedia('(min-width: 769px) and (hover: hover) and (pointer: fine)');

    const updateCapabilities = () => {
      const enabled = !reducedMotionQuery.matches && desktopPointerQuery.matches;
      setInteractiveEnabled(enabled);

      if (!enabled) {
        setHovered(false);
        setMx(0.5);
        setMy(0.5);
      }
    };

    updateCapabilities();

    if (typeof reducedMotionQuery.addEventListener === 'function') {
      reducedMotionQuery.addEventListener('change', updateCapabilities);
      desktopPointerQuery.addEventListener('change', updateCapabilities);

      return () => {
        reducedMotionQuery.removeEventListener('change', updateCapabilities);
        desktopPointerQuery.removeEventListener('change', updateCapabilities);
      };
    }

    reducedMotionQuery.addListener(updateCapabilities);
    desktopPointerQuery.addListener(updateCapabilities);

    return () => {
      reducedMotionQuery.removeListener(updateCapabilities);
      desktopPointerQuery.removeListener(updateCapabilities);
    };
  }, []);

  const styleVars = useMemo(
    () =>
      ({
        '--mx': `${mx}`,
        '--my': `${my}`,
        '--hover': hovered && interactiveEnabled ? '1' : '0',
      }) as CSSProperties,
    [hovered, interactiveEnabled, mx, my],
  );

  const handlePointerMove: React.PointerEventHandler<HTMLAnchorElement> = (event) => {
    if (!interactiveEnabled) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = clamp((event.clientX - rect.left) / rect.width, 0, 1);
    const y = clamp((event.clientY - rect.top) / rect.height, 0, 1);

    setMx(x);
    setMy(y);
  };

  const linkClassName = [styles.ctaLink, className].filter(Boolean).join(' ');

  return (
    <Link
      to={to}
      className={linkClassName}
      style={styleVars}
      onPointerEnter={() => {
        if (interactiveEnabled) {
          setHovered(true);
        }
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => {
        setHovered(false);
        setMx(0.5);
        setMy(0.5);
      }}
    >
      <span className={styles.ctaBackdrop} aria-hidden="true" />
      <span className={styles.ctaEdgeGlow} aria-hidden="true" />
      <span className={styles.ctaLabel}>
        {children}
        <svg
          className={styles.ctaArrow}
          viewBox="0 0 18 18"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M4 9h9" />
          <path d="M10.5 5.5 14 9l-3.5 3.5" />
        </svg>
      </span>
    </Link>
  );
};
