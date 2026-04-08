import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../../pages/WorkDetail/WorkDetail.module.css';

interface ProjectVideoSectionProps {
  title: string;
  videoUrl?: string;
  iframeTitle: string;
  delay?: number;
}

export const ProjectVideoSection: React.FC<ProjectVideoSectionProps> = ({
  title,
  videoUrl,
  iframeTitle,
  delay = 0.6,
}) => {
  if (!videoUrl) {
    return null;
  }

  return (
    <motion.section
      className={styles.section}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.videoContainer}>
        <iframe
          className={styles.videoIframe}
          src={videoUrl}
          title={iframeTitle}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </motion.section>
  );
};
