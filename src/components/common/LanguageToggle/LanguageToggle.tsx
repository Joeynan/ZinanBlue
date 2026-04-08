import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../../i18n/LanguageContext';
import { GlassSurface } from '../GlassSurface';
import styles from './LanguageToggle.module.css';

export const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      className={styles.toggleButton}
      onClick={toggleLanguage}
      whileTap={{ scale: 0.9 }}
      aria-label={language === 'zh' ? 'Switch to English' : '切换到中文'}
    >
      <GlassSurface
        variant="button"
        interactive
        className={styles.toggleSurface}
        contentClassName={styles.toggleSurfaceContent}
      >
        <div className={styles.toggleInner}>
          <AnimatePresence mode="wait">
            <motion.span
              key={language}
              className={styles.label}
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {language === 'zh' ? 'EN' : '中'}
            </motion.span>
          </AnimatePresence>
        </div>
      </GlassSurface>
    </motion.button>
  );
};
