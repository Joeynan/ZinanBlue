import { motion } from 'framer-motion';
import { Work } from '../../../types/work';
import { WorkCard } from '../WorkCard';
import styles from './WorkGallery.module.css';

interface WorkGalleryProps {
  works: Work[];
  layout?: 'grid' | 'masonry' | 'featured';
  columns?: 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  trailingItem?: React.ReactNode;
}

export const WorkGallery: React.FC<WorkGalleryProps> = ({
  works,
  layout = 'grid',
  columns = 3,
  gap = 'md',
  trailingItem,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const getLayoutClass = () => {
    switch (layout) {
      case 'masonry':
        return styles.masonry;
      case 'featured':
        return styles.featured;
      default:
        return styles.grid;
    }
  };

  const getColumnsClass = () => {
    return styles[`columns${columns}`];
  };

  const getGapClass = () => {
    return styles[`gap${gap.toUpperCase()}`];
  };

  return (
    <motion.div
      className={`${styles.gallery} ${getLayoutClass()} ${getColumnsClass()} ${getGapClass()}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {works.map((work, index) => (
        <WorkCard
          key={work.id}
          work={work}
          index={index}
          variant={layout === 'featured' && index === 0 ? 'featured' : 'default'}
        />
      ))}
      {trailingItem}
    </motion.div>
  );
};
