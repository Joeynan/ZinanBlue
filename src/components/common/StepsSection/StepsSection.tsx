import React from 'react';
import { StepsSection as StepsSectionType } from '../../../types/work';
import { useLanguage } from '../../../i18n/LanguageContext';
import styles from './StepsSection.module.css';

interface StepsSectionProps {
  data: StepsSectionType;
}

export const StepsSection: React.FC<StepsSectionProps> = ({ data }) => {
  const { t } = useLanguage();
  const { steps } = data;

  return (
    <div className={styles.stepsSectionSurface}>
      <div className={styles.stepsContainer}>
        {steps.map((step, index) => (
          <div
            key={index}
            className={`${styles.stepShell} ${index % 2 === 1 ? styles.stepShellShifted : ''}`}
          >
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>{step.stepNumber}</div>
              <div className={styles.iconContainer}>
                <img src={step.icon} alt="" className={styles.icon} />
              </div>
              <h3 className={styles.stepTitle}>{t(step.title)}</h3>
              <p className={styles.stepDescription}>{t(step.description)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
