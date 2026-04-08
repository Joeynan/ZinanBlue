import { motion } from 'framer-motion';
import { WorkCard } from '../../components/portfolio/WorkCard';
import { useWorks } from '../../hooks/useWorks';
import { useLanguage } from '../../i18n/LanguageContext';
import { GeometricShape } from '../../components/common/GeometricShape';
import styles from './Works.module.css';

// 分类图标组件
const CircleIcon = () => (
  <svg width="32" height="32" viewBox="0 0 16 16" className={styles.categoryIcon}>
    <circle cx="8" cy="8" r="7" fill="var(--color-primary-red)" />
  </svg>
);

const SquareIcon = () => (
  <svg width="28" height="28" viewBox="0 0 14 14" className={styles.categoryIcon}>
    <rect x="1" y="1" width="12" height="12" rx="1" fill="var(--color-primary-yellow)" />
  </svg>
);

const TriangleIcon = () => (
  <svg width="32" height="32" viewBox="0 0 16 16" className={styles.categoryIcon}>
    <path
      d="M8 1L15 14H1L8 1Z"
      fill="var(--color-primary-blue)"
      stroke="var(--color-primary-blue)"
      strokeWidth="0.3"
      strokeLinejoin="round"
    />
  </svg>
);

const LogoIcon = () => (
  <div className={styles.logoIconWrapper}>
    <GeometricShape type="circle" color="red" size={24} />
    <GeometricShape type="square" color="yellow" size={24} />
    <GeometricShape type="triangle" color="blue" size={24} />
  </div>
);

const categories = [
  { id: 'hci-research', titleKey: 'category.hci', icon: CircleIcon },
  { id: 'hardware-design-development', titleKey: 'category.hardware', icon: SquareIcon },
  { id: 'industrial-design', titleKey: 'category.industrial', icon: TriangleIcon },
  { id: 'other-design', titleKey: 'category.other', icon: LogoIcon },
];

export const Works: React.FC = () => {
  const { works } = useWorks();
  const { t } = useLanguage();

  const getWorksByCategory = (categoryId: string) => {
    return works.filter(work => work.categoryType === categoryId);
  };

  return (
    <div className={styles.works}>
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.title}>{t('works.title')}</h1>
        <p className={styles.subtitle}>{t('works.subtitle')}</p>
      </motion.header>

      <div className={styles.container}>
        {categories.map((category, index) => {
          const categoryWorks = getWorksByCategory(category.id);
          if (categoryWorks.length === 0) return null;
          const IconComponent = category.icon;

          return (
            <motion.section
              key={category.id}
              className={styles.categorySection}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1), duration: 0.5 }}
            >
              <div className={styles.categoryHeader}>
                <div className={styles.categoryTitleWrapper}>
                  <IconComponent />
                  <h2 className={styles.categoryTitle}>{t(category.titleKey)}</h2>
                </div>
                <div className={styles.categoryDecor} />
              </div>

              <div className={styles.worksGrid}>
                {categoryWorks.map((work, idx) => (
                  <WorkCard
                    key={work.id}
                    work={work}
                    index={idx}
                    variant="default"
                  />
                ))}
              </div>
            </motion.section>
          );
        })}
      </div>
    </div>
  );
};
