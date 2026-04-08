import React from 'react';
import styles from '../../../pages/WorkDetail/WorkDetail.module.css';
import { renderBoldText } from '../../../utils/richText';

interface DetailsIntroProps {
  title?: string;
  description?: string;
}

export const DetailsIntro: React.FC<DetailsIntroProps> = ({
  title,
  description,
}) => {
  if (!title && !description) {
    return null;
  }

  return (
    <div className={styles.detailsIntro}>
      {title && <p className={styles.textLarge}>{title}</p>}
      {description && <p className={styles.textSmall}>{renderBoldText(description)}</p>}
    </div>
  );
};
