import React from 'react';
import { motion } from 'framer-motion';
import { ContentBlock } from '../../../types/work';
import { LocalizedString } from '../../../i18n/types';
import { renderBoldText } from '../../../utils/richText';
import styles from '../../../pages/WorkDetail/WorkDetail.module.css';
import { ProjectMetaCard } from './ProjectMetaCard';
import { TranslateFn } from './types';

interface OverviewSectionProps {
  title: string;
  description: string;
  overviewBlocks?: ContentBlock[];
  year: number;
  role?: string;
  tags: string[];
  awards?: LocalizedString[];
  t: TranslateFn;
  delay?: number;
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({
  title,
  description,
  overviewBlocks,
  year,
  role,
  tags,
  awards,
  t,
  delay = 0.5,
}) => (
  <motion.section
    className={styles.sectionWithInfo}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
  >
    <div className={styles.descriptionWrapper}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <p className={styles.textLarge}>{description}</p>
      {overviewBlocks?.map((block, index) => (
        <p
          key={index}
          className={block.type === 'large' ? styles.textLarge : styles.textSmall}
        >
          {renderBoldText(t(block.text))}
        </p>
      ))}
    </div>
    <ProjectMetaCard
      year={year}
      role={role}
      tags={tags}
      awards={awards}
      t={t}
    />
  </motion.section>
);
