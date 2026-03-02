import { motion } from 'framer-motion';
import { WorkCard } from '../../components/portfolio/WorkCard';
import { useWorks } from '../../hooks/useWorks';
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
    {/* 等边三角形：顶点在顶部中心 (50%, 0%)，底边两点在 (0%, 100%) 和 (100%, 100%) */}
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

// 定义分类信息 - 4个分类，带图标
const categories = [
  {
    id: 'hci-research',
    title: 'HCI Research',
    icon: CircleIcon,
  },
  {
    id: 'hardware-design-development',
    title: 'Hardware Design & Development',
    icon: SquareIcon,
  },
  {
    id: 'industrial-design',
    title: 'Industrial Design',
    icon: TriangleIcon,
  },
  {
    id: 'other-design',
    title: 'Other Design',
    icon: LogoIcon,
  },
] as const;

export const Works: React.FC = () => {
  const { works } = useWorks();

  // 按分类分组作品
  const getWorksByCategory = (categoryId: string) => {
    return works.filter(work => work.categoryType === categoryId);
  };

  return (
    <div className={styles.works}>
      {/* 页面头部 */}
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.title}>Works</h1>
        <p className={styles.subtitle}>作品集</p>
      </motion.header>

      <div className={styles.container}>
        {/* 按分类展示 - 只显示有作品的分类 */}
        {categories.map((category, index) => {
          const categoryWorks = getWorksByCategory(category.id);

          // 如果该分类没有作品，则不显示
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
              {/* 分类标题 */}
              <div className={styles.categoryHeader}>
                <div className={styles.categoryTitleWrapper}>
                  <IconComponent />
                  <h2 className={styles.categoryTitle}>{category.title}</h2>
                </div>
                <div className={styles.categoryDecor} />
              </div>

              {/* 作品网格 */}
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
