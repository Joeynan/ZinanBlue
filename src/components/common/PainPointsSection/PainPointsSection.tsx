import React from 'react';
import { PainPointsSection as PainPointsSectionType } from '../../../types/work';
import { useLanguage } from '../../../i18n/LanguageContext';
import styles from './PainPointsSection.module.css';

interface PainPointsSectionProps {
  data: PainPointsSectionType;
}

export const PainPointsSection: React.FC<PainPointsSectionProps> = ({ data }) => {
  const { t } = useLanguage();
  return (
    <div className={styles.sectionSurface}>
      {data.introText && (
        <p className={styles.introText}>{t(data.introText)}</p>
      )}
      <div className={styles.cardsGrid}>
        {data.items.map((item, index) => (
          <article key={index} className={styles.card}>
            <div className={styles.imageFrame}>
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.imageAlt ? item.imageAlt : t(item.title)}
                  className={styles.image}
                />
              ) : (
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderBadge}>{item.placeholderLabel ? t(item.placeholderLabel) : `0${index + 1}`}</div>
                </div>
              )}
            </div>

            <div className={styles.content}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowLine} />
                <span className={styles.eyebrowText}>{t(item.label)}</span>
              </div>
              <h3 className={styles.title}>{t(item.title)}</h3>
              <div className={styles.body}>
                {item.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex} className={styles.paragraph}>
                    {t(paragraph)}
                  </p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
