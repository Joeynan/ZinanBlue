import React from 'react';
import styles from '../../../pages/WorkDetail/WorkDetail.module.css';
import { TranslateFn } from './types';
import { LocalizedString } from '../../../i18n/types';

interface ProjectMetaCardProps {
  year: number;
  role?: string;
  tags: string[];
  awards?: LocalizedString[];
  t: TranslateFn;
}

export const ProjectMetaCard: React.FC<ProjectMetaCardProps> = ({
  year,
  role,
  tags,
  awards,
  t,
}) => (
  <div className={styles.infoBox}>
    <div className={styles.infoRow}>
      <span className={styles.infoLabel}>{t('detail.year')}</span>
      <span className={styles.infoValue}>{year}</span>
    </div>
    <div className={styles.infoRow}>
      <span className={styles.infoLabel}>{t('detail.role')}</span>
      <span className={styles.infoValue}>{role || '-'}</span>
    </div>
    <div className={styles.infoRow}>
      <span className={styles.infoLabel}>{t('detail.tags')}</span>
      <div className={styles.tagsList}>
        {tags.map((tag, index) => (
          <span key={index} className={styles.tagItem}>
            {tag}
          </span>
        ))}
      </div>
    </div>
    <div className={styles.infoRow}>
      <span className={styles.infoLabel}>{t('detail.award')}</span>
      {awards && awards.length > 0 ? (
        <div className={styles.awardsList}>
          {awards.map((award, index) => (
            <span key={index} className={styles.awardItem}>
              <img
                src="/icons/trophy.svg"
                alt=""
                className={styles.awardIcon}
              />
              {t(award)}
            </span>
          ))}
        </div>
      ) : (
        <span className={styles.infoValue}>-</span>
      )}
    </div>
  </div>
);
