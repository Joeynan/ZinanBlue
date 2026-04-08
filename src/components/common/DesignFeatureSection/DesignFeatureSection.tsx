import React from 'react';
import { LocalizedString } from '../../../i18n/types';
import { useLanguage } from '../../../i18n/LanguageContext';
import styles from './DesignFeatureSection.module.css';

export interface DesignFeatureCard {
  number: string;
  description: LocalizedString;
  highlightTexts?: LocalizedString[];
}

export interface DesignFeatureItem {
  text: LocalizedString;
}

export interface DesignFeatureSectionData {
  position: number;
  title: LocalizedString;
  images: string[]; // 3 张图片
  cards: DesignFeatureCard[];
  features: DesignFeatureItem[];
  tagLabel: LocalizedString;
}

interface DesignFeatureSectionProps {
  data: DesignFeatureSectionData;
}

// 解析文本，高亮指定文字
const parseHighlightText = (text: string, highlights?: string[]) => {
  if (!highlights || highlights.length === 0) {
    return text;
  }

  const parts: React.ReactNode[] = [];
  let remainingText = text;
  let keyIndex = 0;

  highlights.forEach((highlight) => {
    const index = remainingText.indexOf(highlight);
    if (index !== -1) {
      if (index > 0) {
        parts.push(remainingText.substring(0, index));
      }
      parts.push(
        <strong key={keyIndex++} className={styles.highlight}>
          {highlight}
        </strong>
      );
      remainingText = remainingText.substring(index + highlight.length);
    }
  });

  if (remainingText) {
    parts.push(remainingText);
  }

  return parts;
};

export const DesignFeatureSection: React.FC<DesignFeatureSectionProps> = ({ data }) => {
  const { t } = useLanguage();
  const { title, images, cards, features, tagLabel } = data;

  return (
    <div className={styles.container}>
      {/* 标题 */}
      <div className={styles.header}>
        <div className={styles.titleIcon}></div>
        <h2 className={styles.title}>{t(title)}</h2>
      </div>

      {/* 三张图片 */}
      <div className={styles.imagesGrid}>
        {images.map((image, index) => (
          <div key={index} className={styles.imageWrapper}>
            <img
              src={image}
              alt={`设计特征图片 ${index + 1}`}
              className={styles.image}
            />
          </div>
        ))}
      </div>

      {/* 三个说明卡片 */}
      <div className={styles.cardsGrid}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardNumber}>
              <span>{card.number}</span>
            </div>
            <p className={styles.cardDescription}>
              {parseHighlightText(t(card.description), card.highlightTexts?.map(h => t(h)))}
            </p>
          </div>
        ))}
      </div>

      {/* 绿色标签 + 要点列表 */}
      <div className={styles.featuresWrapper}>
        <div className={styles.tagLabel}>{t(tagLabel)}</div>
        <div className={styles.featuresList}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureItem}>
              <span className={styles.bullet}>•</span>
              <span className={styles.featureText}>{t(feature.text)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
