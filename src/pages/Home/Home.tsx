import { WorkGallery } from '../../components/portfolio/WorkGallery';
import { useWorks } from '../../hooks/useWorks';
import { useLanguage } from '../../i18n/LanguageContext';
import { HandDrawnHero } from './components/HandDrawnHero/HandDrawnHero';
import { FeaturedWorksCta } from './components/FeaturedWorksCta/FeaturedWorksCta';
import styles from './Home.module.css';

export const Home: React.FC = () => {
  const { featuredWorks } = useWorks();
  const { t } = useLanguage();

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <HandDrawnHero />

      {/* Featured Works */}
      <section className={styles.featured}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{t('home.featuredWorks')}</h2>
            <div className={styles.sectionDecor} />
          </div>

          <WorkGallery
            works={featuredWorks.slice(0, 5)}
            layout="featured"
            columns={4}
            gap="md"
            trailingItem={<FeaturedWorksCta />}
          />
        </div>
      </section>
    </div>
  );
};
