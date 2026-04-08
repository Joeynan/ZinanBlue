import React from 'react';
import { PainToFeatureItem, PainToFeatureSection as PainToFeatureSectionType } from '../../../types/work';
import { useLanguage } from '../../../i18n/LanguageContext';
import styles from './PainToFeatureSection.module.css';

interface PainToFeatureSectionProps {
  data: PainToFeatureSectionType;
}

const ArrowIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 40" className={className} aria-hidden="true">
    <path
      d="M12 3V33M4.5 25.5L12 33L19.5 25.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const getFeatureIcon = (icon: PainToFeatureItem['featureIcon']) => {
  switch (icon) {
    case 'route':
      return <img src="/images/flowwalk/icon1.svg" alt="" className={styles.featureIcon} aria-hidden="true" />;
    case 'breath':
      return <img src="/images/flowwalk/icon2.svg" alt="" className={styles.featureIcon} aria-hidden="true" />;
    case 'agent':
      return <img src="/images/flowwalk/icon3.svg" alt="" className={styles.featureIcon} aria-hidden="true" />;
    default:
      return null;
  }
};

const renderPainCard = (item: PainToFeatureItem, index: number, t: (key: any) => string) => (
  <article key={`pain-${index}`} className={styles.painCard}>
    <div className={styles.painImageFrame}>
      <img src={item.painImage} alt={item.painImageAlt || t(item.painTitle)} className={styles.painImage} />
      <div className={styles.painImageGlow} aria-hidden="true" />
    </div>
    <div className={styles.painContent}>
      <div className={styles.painLabel}>{t(item.painLabel)}</div>
      <h3 className={styles.cardTitle}>{t(item.painTitle)}</h3>
      <p className={styles.cardDescription}>{t(item.painDescription)}</p>
    </div>
  </article>
);

const renderFeatureCard = (item: PainToFeatureItem, index: number, t: (key: any) => string) => (
  <article key={`feature-${index}`} className={styles.featureCard}>
    <div className={styles.featureCardTop}>
      <div className={styles.featureIconBadge}>{getFeatureIcon(item.featureIcon)}</div>
      <div className={styles.featureContent}>
        <h3 className={styles.cardTitle}>{t(item.featureTitle)}</h3>
        <p className={styles.cardDescription}>{t(item.featureDescription)}</p>
      </div>
    </div>
  </article>
);

export const PainToFeatureSection: React.FC<PainToFeatureSectionProps> = ({ data }) => {
  const { t } = useLanguage();
  return (
    <section className={styles.sectionSurface}>
      <div className={styles.headingRow}>
        <div className={styles.headingContent}>
          <h2 className={styles.sectionHeading}>{t(data.painHeading)}</h2>
          {data.painHeadingDescription && (
            <p className={styles.headingDescription}>{t(data.painHeadingDescription)}</p>
          )}
        </div>
        <div className={styles.headingDivider} />
      </div>

      <div className={styles.desktopMappings}>
        <div className={styles.painGrid}>
          {data.items.map((item, index) => renderPainCard(item, index, t))}
        </div>

        <div className={styles.arrowGrid} aria-hidden="true">
          {data.items.map((item, index) => (
            <div key={`arrow-${item.painLabel}-${index}`} className={styles.arrowWrap}>
              <ArrowIcon className={styles.arrowIcon} />
            </div>
          ))}
        </div>

        <div className={styles.featureHeadingRow}>
          <h2 className={styles.sectionHeading}>{t(data.featureHeading)}</h2>
        </div>

        <div className={styles.featureGrid}>
          {data.items.map((item, index) => renderFeatureCard(item, index, t))}
        </div>
      </div>

      <div className={styles.mobileFeatureHeading}>
        <h2 className={styles.sectionHeading}>{t(data.featureHeading)}</h2>
      </div>

      <div className={styles.mobileMappings}>
        {data.items.map((item, index) => (
          <div key={`${item.painLabel}-${index}`} className={styles.mobileGroup}>
            {renderPainCard(item, index, t)}
            <div className={styles.arrowWrap} aria-hidden="true">
              <ArrowIcon className={styles.arrowIcon} />
            </div>
            {renderFeatureCard(item, index, t)}
          </div>
        ))}
      </div>
    </section>
  );
};
