import React, { useEffect, useRef } from 'react';
import styles from '../../../pages/WorkDetail/WorkDetail.module.css';

interface VideoGroupProps {
  large: string;
  smallTop: string;
  smallBottom: string;
}

export const VideoGroup: React.FC<VideoGroupProps> = ({
  large,
  smallTop,
  smallBottom,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const largeVideoRef = useRef<HTMLVideoElement>(null);
  const smallTopVideoRef = useRef<HTMLVideoElement>(null);
  const smallBottomVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          largeVideoRef.current?.play().catch(() => {});
          smallTopVideoRef.current?.play().catch(() => {});
          smallBottomVideoRef.current?.play().catch(() => {});
        } else {
          largeVideoRef.current?.pause();
          smallTopVideoRef.current?.pause();
          smallBottomVideoRef.current?.pause();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={styles.videoGroup}>
      <div className={styles.videoGroupSmall}>
        <video
          ref={smallTopVideoRef}
          src={smallTop}
          className={styles.videoSmall}
          loop
          muted
          playsInline
        />
        <video
          ref={smallBottomVideoRef}
          src={smallBottom}
          className={styles.videoSmall}
          loop
          muted
          playsInline
        />
      </div>
      <video
        ref={largeVideoRef}
        src={large}
        className={styles.videoLarge}
        loop
        muted
        playsInline
      />
    </div>
  );
};
