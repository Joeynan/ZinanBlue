import { useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './HandDrawnText.module.css';

interface HandDrawnTextProps {
  onTextReady?: (element: HTMLDivElement) => void;
}

export const HandDrawnText: React.FC<HandDrawnTextProps> = ({ onTextReady }) => {
  const prefersReducedMotion = useReducedMotion();

  const textCallbackRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (node && onTextReady) {
        onTextReady(node);
      }
    },
    [onTextReady],
  );

  const line1Variants = {
    hidden: { clipPath: 'inset(0 100% 0 0)' },
    visible: {
      clipPath: 'inset(0 0% 0 0)',
      transition: { duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const line2Variants = {
    hidden: { clipPath: 'inset(0 100% 0 0)' },
    visible: {
      clipPath: 'inset(0 0% 0 0)',
      transition: { duration: 1.0, delay: 1.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <div ref={textCallbackRef} className={styles.textContainer}>
      <motion.div
        variants={containerVariants}
        initial={prefersReducedMotion ? 'visible' : 'hidden'}
        animate="visible"
      >
        <div className={styles.line1}>
          <motion.span
            className={styles.greeting}
            variants={line1Variants}
          >
            Hello,
          </motion.span>
        </div>

        <div className={styles.line2}>
          <motion.span
            className={styles.subtitle}
            variants={line2Variants}
          >
            welcome to my website
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
};
