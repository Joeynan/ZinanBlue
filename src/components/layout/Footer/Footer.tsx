import { Link } from 'react-router-dom';
import { GeometricShape } from '../../common/GeometricShape';
import { useLanguage } from '../../../i18n/LanguageContext';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <div className={styles.logoShapes}>
                <GeometricShape type="circle" color="red" size="xs" />
                <GeometricShape type="square" color="yellow" size="xs" />
                <GeometricShape type="triangle" color="blue" size="xs" />
              </div>
              <span className={styles.logoText}>BAUHAUS</span>
            </Link>
            <p className={styles.tagline}>{t('footer.tagline')}</p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4>{t('footer.navigation')}</h4>
              <Link to="/">{t('nav.home')}</Link>
              <Link to="/works">{t('nav.works')}</Link>
              <Link to="/about">{t('nav.about')}</Link>
              <Link to="/contact">{t('footer.contact')}</Link>
            </div>

            <div className={styles.linkGroup}>
              <h4>{t('footer.social')}</h4>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">Dribbble</a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} {t('footer.copyright')}</p>
          <div className={styles.decorShapes}>
            <GeometricShape type="circle" color="red" size="xs" />
            <GeometricShape type="square" color="yellow" size="xs" />
            <GeometricShape type="triangle" color="blue" size="xs" />
          </div>
        </div>
      </div>
    </footer>
  );
};
