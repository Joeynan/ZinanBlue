import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import rough from 'roughjs';
import styles from './DoodleDecorations.module.css';

interface DoodleDecorationsProps {
  textElement: HTMLDivElement | null;
}

export const DoodleDecorations: React.FC<DoodleDecorationsProps> = ({ textElement }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [underlinePath, setUnderlinePath] = useState('');
  const [eyePos, setEyePos] = useState({ x: 0, y: 0, visible: false });
  const [smileyPos, setSmileyPos] = useState({ x: 0, y: 0, visible: false });

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = svgRef.current;
    const rc = rough.svg(svg);

    // Generate hand-drawn underline
    const node = rc.path('M 0 8 Q 40 2, 80 7 T 160 6 T 240 8', {
      roughness: 1.8,
      stroke: 'var(--doodle-stroke, #212121)',
      strokeWidth: 2.5,
      bowing: 1.2,
    });

    const pathEl = node.querySelector('path');
    if (pathEl) {
      setUnderlinePath(pathEl.getAttribute('d') || '');
    }
  }, []);

  useEffect(() => {
    const measure = () => {
      if (!textElement) return;
      const rect = textElement.getBoundingClientRect();
      const parentRect = textElement.closest(`.${styles.container}`)?.getBoundingClientRect();
      if (!parentRect) return;

      // Position eye relative to the "o" in "Hello" (roughly 38% through the first word)
      const eyeX = rect.left - parentRect.left + rect.width * 0.38;
      const eyeY = rect.top - parentRect.top + rect.height * 0.35;
      setEyePos({ x: eyeX, y: eyeY, visible: true });

      // Position smiley at bottom-right of text
      const smileyX = rect.right - parentRect.left + 20;
      const smileyY = rect.bottom - parentRect.top + 10;
      setSmileyPos({ x: smileyX, y: smileyY, visible: true });
    };

    const timer = setTimeout(measure, 400);
    window.addEventListener('resize', measure);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', measure);
    };
  }, [textElement]);

  return (
    <div className={styles.container}>
      <svg ref={svgRef} className={styles.hiddenSvg} aria-hidden="true" />

      {/* Eye in the "o" */}
      {eyePos.visible && (
        <motion.svg
          className={styles.eye}
          style={{ left: eyePos.x, top: eyePos.y }}
          width="32"
          height="32"
          viewBox="0 0 32 32"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.0, duration: 0.4, type: 'spring', stiffness: 300 }}
          aria-hidden="true"
        >
          <circle cx="16" cy="16" r="12" fill="none" stroke="var(--doodle-stroke, #212121)" strokeWidth="2" />
          <circle cx="16" cy="16" r="5" fill="var(--doodle-stroke, #212121)" />
          <circle cx="14.5" cy="14" r="1.5" fill="var(--doodle-bg, #F5F3F0)" />
        </motion.svg>
      )}

      {/* Smiley face */}
      {smileyPos.visible && (
        <motion.svg
          className={styles.smiley}
          style={{ left: smileyPos.x, top: smileyPos.y }}
          width="48"
          height="48"
          viewBox="0 0 48 48"
          initial={{ opacity: 0, scale: 0, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 2.0, duration: 0.5, type: 'spring', stiffness: 200 }}
          aria-hidden="true"
        >
          <circle cx="24" cy="24" r="20" fill="none" stroke="var(--doodle-stroke, #212121)" strokeWidth="2" />
          <circle cx="17" cy="20" r="2.2" fill="var(--doodle-stroke, #212121)" />
          <circle cx="31" cy="20" r="2.2" fill="var(--doodle-stroke, #212121)" />
          <path d="M 14 30 Q 24 38 34 30" fill="none" stroke="var(--doodle-stroke, #212121)" strokeWidth="2" strokeLinecap="round" />
        </motion.svg>
      )}

      {/* Hand-drawn underline beneath the text */}
      {underlinePath && (
        <motion.svg
          className={styles.underline}
          width="280"
          height="16"
          viewBox="0 0 280 16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.3 }}
          aria-hidden="true"
        >
          <path
            d={underlinePath}
            fill="none"
            stroke="var(--doodle-stroke, #212121)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </motion.svg>
      )}

      {/* Star / sparkle near top-right */}
      <motion.svg
        className={styles.star}
        width="36"
        height="36"
        viewBox="0 0 36 36"
        initial={{ opacity: 0, scale: 0, rotate: -30 }}
        animate={{ opacity: 0.7, scale: 1, rotate: 0 }}
        transition={{ delay: 2.3, duration: 0.5, type: 'spring', stiffness: 180 }}
        aria-hidden="true"
      >
        <path
          d="M 18 2 L 21 13 L 32 14 L 23 21 L 26 32 L 18 26 L 10 32 L 13 21 L 4 14 L 15 13 Z"
          fill="none"
          stroke="var(--doodle-stroke, #212121)"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </motion.svg>

      {/* Curly brace on the left */}
      <motion.svg
        className={styles.brace}
        width="30"
        height="80"
        viewBox="0 0 30 80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2.5, duration: 0.4 }}
        aria-hidden="true"
      >
        <path
          d="M 20 4 Q 8 4, 8 16 L 8 30 Q 2 36, 8 42 L 8 56 Q 8 68, 20 68"
          fill="none"
          stroke="var(--doodle-stroke, #212121)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </motion.svg>

      {/* Small arrow pointing down-right toward CTA */}
      <motion.svg
        className={styles.arrowDoodle}
        width="40"
        height="40"
        viewBox="0 0 40 40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.55 }}
        transition={{ delay: 2.6, duration: 0.4 }}
        aria-hidden="true"
      >
        <path d="M 6 6 Q 14 14, 30 30" fill="none" stroke="var(--doodle-stroke, #212121)" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M 22 28 L 32 30 L 30 20" fill="none" stroke="var(--doodle-stroke, #212121)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </motion.svg>

      {/* Scattered dots */}
      <motion.svg
        className={styles.dots}
        width="60"
        height="20"
        viewBox="0 0 60 20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2.8, duration: 0.4 }}
        aria-hidden="true"
      >
        <circle cx="8" cy="10" r="2.5" fill="var(--doodle-stroke, #212121)" />
        <circle cx="24" cy="6" r="1.8" fill="var(--doodle-stroke, #212121)" />
        <circle cx="38" cy="12" r="3" fill="var(--doodle-stroke, #212121)" />
        <circle cx="52" cy="8" r="2" fill="var(--doodle-stroke, #212121)" />
      </motion.svg>

      {/* Small heart doodle */}
      <motion.svg
        className={styles.heart}
        width="32"
        height="30"
        viewBox="0 0 32 30"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ delay: 2.9, duration: 0.4, type: 'spring', stiffness: 200 }}
        aria-hidden="true"
      >
        <path
          d="M 16 26 Q 4 16, 4 10 Q 4 2, 10 2 Q 14 2, 16 6 Q 18 2, 22 2 Q 28 2, 28 10 Q 28 16, 16 26 Z"
          fill="none"
          stroke="var(--doodle-stroke, #212121)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>

      {/* Zigzag decoration */}
      <motion.svg
        className={styles.zigzag}
        width="60"
        height="16"
        viewBox="0 0 60 16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ delay: 3.0, duration: 0.4 }}
        aria-hidden="true"
      >
        <path
          d="M 2 8 L 10 3 L 18 13 L 26 3 L 34 13 L 42 3 L 50 13 L 58 8"
          fill="none"
          stroke="var(--doodle-stroke, #212121)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </div>
  );
};
