import React, { useState } from 'react';
import { CollageImage, Detail12ImageSection as Detail12ImageSectionType } from '../../../types/work';
import { ImageLightbox } from '../ImageLightbox/ImageLightbox';
import { useLanguage } from '../../../i18n/LanguageContext';
import { renderBoldText } from '../../../utils/richText';
import styles from './Detail12ImageSection.module.css';

interface Detail12ImageSectionProps {
  data: Detail12ImageSectionType;
  textSmallClassName?: string;  // 可选：从父组件传入样式类名
}

export const Detail12ImageSection: React.FC<Detail12ImageSectionProps> = ({ data, textSmallClassName }) => {
  const { t } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const images: CollageImage[] = [
    { src: data.imageLeft, alt: 'Image 1' },
    { src: data.imageRight, alt: 'Image 2' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.imageRow}>
        <button type="button" className={styles.imageButton} onClick={() => setLightboxIndex(0)}>
          <div className={styles.imageWrapper}>
            <img src={data.imageLeft} alt="Image 1" className={styles.image} />
          </div>
        </button>
        <button type="button" className={styles.imageButton} onClick={() => setLightboxIndex(1)}>
          <div className={styles.imageWrapper}>
            <img src={data.imageRight} alt="Image 2" className={styles.image} />
          </div>
        </button>
      </div>
      {data.description && (
        <p className={textSmallClassName || styles.description}>{renderBoldText(t(data.description))}</p>
      )}
      {lightboxIndex !== null && (
        <ImageLightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((lightboxIndex + images.length - 1) % images.length)}
          onNext={() => setLightboxIndex((lightboxIndex + 1) % images.length)}
        />
      )}
    </div>
  );
};
