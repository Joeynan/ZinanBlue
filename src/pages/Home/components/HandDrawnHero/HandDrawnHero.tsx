import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { DoodleCanvas } from '../DoodleCanvas/DoodleCanvas';
import { DoodleDecorations } from '../DoodleDecorations/DoodleDecorations';
import { HandDrawnText } from '../HandDrawnText/HandDrawnText';
import { HandDrawnCta } from '../HandDrawnCta/HandDrawnCta';
import { useLanguage } from '../../../../i18n/LanguageContext';
import styles from './HandDrawnHero.module.css';

export const HandDrawnHero: React.FC = () => {
  const [textElement, setTextElement] = useState<HTMLDivElement | null>(null);
  const { t } = useLanguage();

  const handleTextReady = useCallback((element: HTMLDivElement) => {
    setTextElement(element);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <HandDrawnText onTextReady={handleTextReady} />
        <DoodleDecorations textElement={textElement} />

        <motion.div
          className={styles.heroActions}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <HandDrawnCta to="/works">{t('home.viewWorks')}</HandDrawnCta>
        </motion.div>
      </div>

      <DoodleCanvas />
    </section>
  );
};
