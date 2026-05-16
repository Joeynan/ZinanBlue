import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Work } from '../../../types/work';
import { useLanguage } from '../../../i18n/LanguageContext';
import styles from './WorkCard.module.css';

interface WorkCardProps {
  work: Work;
  index: number;
  variant?: 'default' | 'featured' | 'compact';
}

export const WorkCard: React.FC<WorkCardProps> = ({
  work,
  index,
  variant = 'default',
}) => {
  const { t } = useLanguage();
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    hover: {
      y: -6,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.article
      className={`${styles.card} ${styles[variant]}`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      layout
    >
      <Link to={`/works/${work.id}`} className={styles.link}>
        {/* 图片容器 */}
        <div className={styles.mediaContainer}>
          <img
            src={work.thumbnail}
            alt={t(work.title)}
            className={styles.image}
            loading="lazy"
          />
          <div className={styles.imageOverlay} />
        </div>

        {/* 液态玻璃信息面板 */}
        <div className={styles.infoPanel}>
          {/* 标题行：标题左 + 年份右 */}
          <div className={styles.titleRow}>
            <h3 className={styles.title}>{t(work.title)}</h3>
            <span className={styles.year}>{work.year}</span>
          </div>

          {/* 标签行 */}
          <div className={styles.tagRow}>
            {work.tags.slice(0, 4).map((tag, index) => (
              <span key={index} className={styles.tag}>{t('tag.' + tag)}</span>
            ))}
          </div>
        </div>

        {/* 黄色进度条装饰 - 带毛玻璃效果 */}
        <div className={styles.borderDecor} />
      </Link>
    </motion.article>
  );
};
