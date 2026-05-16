import { Link } from 'react-router-dom';
import { useLanguage } from '../../../../i18n/LanguageContext';
import styles from './FeaturedWorksCta.module.css';

export const FeaturedWorksCta: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.slot}>
      <Link className={styles.cta} to="/works">
        <span className={styles.label}>{t('home.viewMoreWorks')}</span>
        <span className={styles.arrow} aria-hidden="true">
          →
        </span>
      </Link>
    </div>
  );
};
