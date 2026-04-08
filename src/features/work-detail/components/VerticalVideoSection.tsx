import React, { useEffect, useRef } from 'react';
import styles from '../../../pages/WorkDetail/WorkDetail.module.css';

interface VerticalVideoSectionProps {
  src: string;
  textLarge?: string;
  textSmall?: string;
}

export const VerticalVideoSection: React.FC<VerticalVideoSectionProps> = ({
  src,
  textLarge,
  textSmall,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {});
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.3 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.verticalVideoSection}>
      <video
        ref={videoRef}
        src={src}
        className={styles.verticalVideo}
        loop
        muted
        playsInline
      />
      <div className={styles.verticalVideoText}>
        {textLarge && <p className={styles.textLarge}>{textLarge}</p>}
        {textSmall && <p className={styles.textSmall}>{textSmall}</p>}
      </div>
    </div>
  );
};
