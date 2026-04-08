import { motion } from 'framer-motion';
import { WorkGallery } from '../../components/portfolio/WorkGallery';
import { useWorks } from '../../hooks/useWorks';
import { useLanguage } from '../../i18n/LanguageContext';
import { HomeHeroCta } from './components/HomeHeroCta';
import { LineWaves } from './components/LineWaves';
import styles from './Home.module.css';

export const Home: React.FC = () => {
  const { featuredWorks } = useWorks();
  const { t } = useLanguage();

  return (
    <div className={styles.home}>
      {/* Hero Section - Full Screen Image */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroWaves}>
          <LineWaves
            warpIntensity={0.86}
            edgeFadeWidth={0.12}
            brightness={0.18}
            colorCycleSpeed={1.12}
            enableMouseInteraction
            mouseInfluence={1.8}
          />
        </div>
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <div className={styles.heroInner}>
            <motion.p
              className={styles.heroEyebrow}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18 }}
            >
              {t('home.heroEyebrow')}
            </motion.p>

            <motion.h1
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {t('home.heroTitle')}
            </motion.h1>

            <motion.p
              className={styles.heroSubtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {t('home.heroSubtitle')}
            </motion.p>

            <motion.div
              className={styles.heroActions}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.68 }}
            >
              <HomeHeroCta to="/works">{t('home.viewWorks')}</HomeHeroCta>
            </motion.div>
          </div>
        </div>
      </section>

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
          />
        </div>
      </section>
    </div>
  );
};
