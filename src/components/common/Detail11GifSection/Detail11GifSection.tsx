import React from 'react';
import { Detail11GifSection as Detail11GifSectionType } from '../../../types/work';
import { useLanguage } from '../../../i18n/LanguageContext';
import styles from './Detail11GifSection.module.css';

interface Detail11GifSectionProps {
  data: Detail11GifSectionType;
}

export const Detail11GifSection: React.FC<Detail11GifSectionProps> = ({ data }) => {
  const { t } = useLanguage();
  return (
    <div className={styles.container}>
        <div className={styles.gifRow}>
        <img src={data.gifLeft} alt="GIF 1" className={styles.gif} />
        <img src={data.gifRight} alt="GIF 2" className={styles.gif} />
      </div>
      {data.description && (
        <p className={styles.description}>{t(data.description)}</p>
      )}
    </div>
  );
};
