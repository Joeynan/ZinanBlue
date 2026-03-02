import { motion } from 'framer-motion';
import { Button } from '../../components/common/Button';
import { WorkGallery } from '../../components/portfolio/WorkGallery';
import { useWorks } from '../../hooks/useWorks';
import heroImage from '../../assets/images/hero.png';
import styles from './Home.module.css';

export const Home: React.FC = () => {
  const { featuredWorks } = useWorks();

  return (
    <div className={styles.home}>
      {/* Hero Section - Full Screen Image */}
      <section className={styles.hero}>
        <img src={heroImage} alt="Hero" className={styles.heroImage} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            创意无限创意无限创意无限创意无限创意
            
          </motion.h1>

          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            探索设计的可能性
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Button to="/works" variant="glass" size="lg">
              View Works
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Works */}
      <section className={styles.featured}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured Works</h2>
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
