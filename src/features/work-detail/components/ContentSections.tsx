import React from 'react';
import { motion } from 'framer-motion';
import { ContentSection } from '../../../types/work';
import styles from '../../../pages/WorkDetail/WorkDetail.module.css';
import { TranslateFn } from './types';

interface ContentSectionsProps {
  sections: ContentSection[];
  t: TranslateFn;
  baseDelay?: number;
}

export const ContentSections: React.FC<ContentSectionsProps> = ({
  sections,
  t,
  baseDelay = 0.6,
}) => (
  <>
    {sections.map((section, sectionIndex) => (
      <motion.section
        key={sectionIndex}
        className={styles.section}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: baseDelay + sectionIndex * 0.1 }}
      >
        <h2 className={styles.sectionTitle}>{section.title}</h2>
        <div className={styles.sectionContent}>
          {section.content.map((block, blockIndex) => (
            <p
              key={blockIndex}
              className={block.type === 'large' ? styles.textLarge : styles.textSmall}
            >
              {t(block.text)}
            </p>
          ))}
        </div>
      </motion.section>
    ))}
  </>
);
