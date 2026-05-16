import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import rough from 'roughjs';
import styles from './HandDrawnCta.module.css';

interface HandDrawnCtaProps {
  to: string;
  children: React.ReactNode;
}

export const HandDrawnCta: React.FC<HandDrawnCtaProps> = ({ to, children }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [borderPath, setBorderPath] = useState('');

  useEffect(() => {
    if (!svgRef.current) return;
    const svg = svgRef.current;
    const rc = rough.svg(svg);

    // Hand-drawn rounded rectangle border
    const node = rc.path(
      'M 12 4 Q 4 4, 4 12 L 4 36 Q 4 44, 12 44 L 188 44 Q 196 44, 196 36 L 196 12 Q 196 4, 188 4 Z',
      {
        roughness: 1.5,
        stroke: 'var(--doodle-stroke, #212121)',
        strokeWidth: 2,
        bowing: 1,
      },
    );

    const pathEl = node.querySelector('path');
    if (pathEl) {
      setBorderPath(pathEl.getAttribute('d') || '');
    }
  }, []);

  return (
    <Link to={to} className={styles.ctaLink}>
      <svg
        ref={svgRef}
        className={styles.ctaBorder}
        viewBox="0 0 200 48"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* rough.js renders here, we extract the path */}
      </svg>
      {borderPath && (
        <svg
          className={styles.ctaBorderDisplay}
          viewBox="0 0 200 48"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d={borderPath}
            fill="none"
            stroke="var(--doodle-stroke, #212121)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      <span className={styles.ctaLabel}>
        {children}
        <svg
          className={styles.ctaArrow}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
};
