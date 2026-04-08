import React from 'react';
import styles from '../../../pages/WorkDetail/WorkDetail.module.css';
import { renderBoldText } from '../../../utils/richText';

interface DetailMediaBlockProps {
  image: string;
  alt: string;
  textLarge?: string;
  textSmall?: string;
  description?: string;
  variant?: 'default' | 'withText' | 'singleImage';
  childrenBetweenTextAndMedia?: React.ReactNode;
}

export const DetailMediaBlock: React.FC<DetailMediaBlockProps> = ({
  image,
  alt,
  textLarge,
  textSmall,
  description,
  variant,
  childrenBetweenTextAndMedia,
}) => {
  const resolvedVariant = variant ?? (textLarge || textSmall ? 'withText' : 'default');
  const wrapperClassName =
    resolvedVariant === 'withText' ? styles.detailItemWithText : styles.detailItem;

  return (
    <div className={wrapperClassName}>
      {textLarge && <p className={styles.textLarge}>{textLarge}</p>}
      {textSmall && <p className={styles.textSmall}>{renderBoldText(textSmall)}</p>}
      {childrenBetweenTextAndMedia}
      {resolvedVariant === 'singleImage' ? (
        <img src={image} alt={alt} className={styles.detailImageSingle} />
      ) : (
        <div className={styles.detailImage}>
          <img src={image} alt={alt} />
        </div>
      )}
      {description && <p className={styles.textSmall}>{renderBoldText(description)}</p>}
    </div>
  );
};
