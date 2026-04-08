import React from 'react';
import { DesignPositioningAttribute, DesignPositioningSection as DesignPositioningSectionType } from '../../../types/work';
import { useLanguage } from '../../../i18n/LanguageContext';
import styles from './DesignPositioningSection.module.css';

interface DesignPositioningSectionProps {
  data: DesignPositioningSectionType;
}

const getMapCardVariantClassName = (variant?: DesignPositioningSectionType['mapItems'][number]['variant']) => {
  switch (variant) {
    case 'portrait':
      return styles.mapCardPortrait;
    case 'landscape':
      return styles.mapCardLandscape;
    case 'wide':
      return styles.mapCardWide;
    default:
      return '';
  }
};

const WalkerIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 88 88" className={className} aria-hidden="true">
    <circle cx="44" cy="13" r="8" fill="currentColor" />
    <path
      d="M44 25L34 38M44 25L55 34M39 31L29 50M39 31L45 45M45 45L34 69M45 45L56 66M55 34L68 46"
      fill="none"
      stroke="currentColor"
      strokeWidth="6.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PlusIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 56 56" className={className} aria-hidden="true">
    <path
      d="M28 10V46M10 28H46"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
    />
  </svg>
);

const GlassesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 92 64" className={className} aria-hidden="true">
    <path
      d="M12 28L30 18M80 28L62 18M18 30H36C40.4183 30 44 33.5817 44 38V44C44 48.4183 40.4183 52 36 52H22C17.5817 52 14 48.4183 14 44V34C14 31.7909 15.7909 30 18 30ZM56 30H74C78.4183 30 82 33.5817 82 38V44C82 48.4183 78.4183 52 74 52H60C55.5817 52 52 48.4183 52 44V38C52 33.5817 55.5817 30 60 30ZM44 38H52"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EmotionIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 20 20" className={className} aria-hidden="true">
    <path
      d="M10 2.5C6.134 2.5 3 5.634 3 9.5C3 12.535 4.94 15.116 7.646 16.075L10 18L12.354 16.075C15.06 15.116 17 12.535 17 9.5C17 5.634 13.866 2.5 10 2.5ZM7.3 9.2A1.1 1.1 0 1 1 7.3 7a1.1 1.1 0 0 1 0 2.2Zm5.4 0A1.1 1.1 0 1 1 12.7 7a1.1 1.1 0 0 1 0 2.2Zm-5.1 3.45c.65.9 1.46 1.35 2.4 1.35s1.75-.45 2.4-1.35"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DurationIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 20 20" className={className} aria-hidden="true">
    <path
      d="M7.5 2.75H12.5M10 5V8.8M10 10L12.3 11.8M6.15 4.35L4.7 2.9M13.85 4.35L15.3 2.9M10 17.25C13.728 17.25 16.75 14.228 16.75 10.5C16.75 6.77208 13.728 3.75 10 3.75C6.27208 3.75 3.25 6.77208 3.25 10.5C3.25 14.228 6.27208 17.25 10 17.25Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SpaceIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 20 20" className={className} aria-hidden="true">
    <path
      d="M4 4.5L10 2.75L16 4.5V15.5L10 17.25L4 15.5V4.5ZM10 2.75V17.25M4 4.5L10 6.25L16 4.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const getAttributeIcon = (icon: DesignPositioningAttribute['icon']) => {
  switch (icon) {
    case 'emotion':
      return <EmotionIcon className={styles.attributeIconSvg} />;
    case 'duration':
      return <DurationIcon className={styles.attributeIconSvg} />;
    case 'space':
      return <SpaceIcon className={styles.attributeIconSvg} />;
    default:
      return null;
  }
};

export const DesignPositioningSection: React.FC<DesignPositioningSectionProps> = ({ data }) => {
  const { t } = useLanguage();
  return (
    <section className={styles.sectionSurface}>
      <div className={styles.header}>
        <h2 className={styles.heading}>{t(data.heading)}</h2>
        {data.headingDescription && (
          <p className={styles.headingDescription}>{t(data.headingDescription)}</p>
        )}
        <div className={styles.headingUnderline} />
      </div>

      <div className={styles.layout}>
        <div className={styles.mapPanel}>
          <div className={styles.mapInner}>
            <div className={styles.verticalAxis} />
            <div className={styles.horizontalAxis} />
            <span className={styles.verticalAxisLabel}>{t(data.verticalAxisLabel)}</span>
            <span className={styles.horizontalAxisLabel}>{t(data.horizontalAxisLabel)}</span>

            {data.mapItems.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className={[styles.mapCard, getMapCardVariantClassName(item.variant)].filter(Boolean).join(' ')}
                style={
                  {
                    '--card-left': `${item.x}%`,
                    '--card-top': `${item.y}%`,
                  } as React.CSSProperties
                }
              >
                <div className={styles.mapCardImageFrame}>
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.imageAlt ? item.imageAlt : t(item.title)}
                      className={styles.mapCardImage}
                    />
                  ) : (
                    <div className={styles.mapCardPlaceholder}>
                      <span className={styles.mapCardPlaceholderText}>{t(item.placeholderLabel ?? item.title)}</span>
                    </div>
                  )}
                </div>
                <div className={styles.mapCardTitle}>{t(item.title)}</div>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.connector} aria-hidden="true">
          <div className={styles.connectorDot} />
          <div className={styles.connectorLine} />
        </div>

        <aside className={styles.aside}>
          <div className={styles.visionBlock}>
            <div className={styles.visionLabel}>{t(data.visionLabel)}</div>
            <div className={styles.visionCard}>
              <WalkerIcon className={styles.heroIcon} />
              <PlusIcon className={styles.plusIcon} />
              <GlassesIcon className={styles.heroIcon} />
            </div>
            <h3 className={styles.visionTitle}>{t(data.visionTitle)}</h3>
            <div className={styles.visionDescription}>
              {data.visionDescription.map((paragraph, index) => (
                <p key={index} className={styles.visionParagraph}>
                  {t(paragraph)}
                </p>
              ))}
            </div>
          </div>

          <div className={styles.attributesCard}>
            <div className={styles.attributesLabel}>{t(data.attributesLabel)}</div>
            <div className={styles.attributesList}>
              {data.attributes.map((attribute, index) => (
                <div key={`${attribute.title}-${index}`} className={styles.attributeItem}>
                  <div className={styles.attributeIcon}>{getAttributeIcon(attribute.icon)}</div>
                  <div className={styles.attributeContent}>
                    <h4 className={styles.attributeTitle}>{t(attribute.title)}</h4>
                    <p className={styles.attributeDescription}>{t(attribute.description)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};
