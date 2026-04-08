import React, { useState, useRef, useEffect } from 'react';
import { CollageImage } from '../../../types/work';
import { LocalizedString } from '../../../i18n/types';
import { ImageLightbox } from '../ImageLightbox/ImageLightbox';
import { useLanguage } from '../../../i18n/LanguageContext';
import { renderBoldText } from '../../../utils/richText';
import styles from './CollageGallery.module.css';

interface CollageGalleryProps {
  images: CollageImage[];
  layout?: 'horizontal' | 'scattered' | 'editorial' | 'interactive';
  title?: LocalizedString;
  description?: LocalizedString;
}

export const CollageGallery: React.FC<CollageGalleryProps> = ({ images, layout, description }) => {
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Interactive 布局专用状态
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [floatingCardIndex, setFloatingCardIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  // 根据图片数量或显式指定的 layout 决定布局类型
  const isHorizontalLayout = layout === 'horizontal' || (!layout && images.length === 4);
  const isScatteredLayout = layout === 'scattered' || (!layout && images.length === 6);
  const isEditorialLayout = layout === 'editorial';
  const isInteractiveLayout = layout === 'interactive';

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  const handlePrevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Interactive 布局：鼠标移动处理（带平滑跟随效果）
  useEffect(() => {
    if (hoveredIndex !== null && !window.matchMedia('(max-width: 768px)').matches) {
      const animate = () => {
        setCardPosition((prev) => ({
          x: prev.x + (mousePosition.x - prev.x) * 0.15,
          y: prev.y + (mousePosition.y - prev.y) * 0.15,
        }));
        animationRef.current = requestAnimationFrame(animate);
      };
      animationRef.current = requestAnimationFrame(animate);
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, [hoveredIndex, mousePosition]);

  // Interactive 布局：鼠标事件处理
  const handleInteractiveMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleInteractiveMouseEnter = (index: number) => {
    setHoveredIndex(index);
    setFloatingCardIndex(index);
    setCardPosition({ x: mousePosition.x, y: mousePosition.y });
  };

  const handleInteractiveMouseLeave = () => {
    setHoveredIndex(null);
  };

  // 移动端：点击展开/收起
  const handleMobileToggle = (index: number) => {
    setMobileExpandedIndex(mobileExpandedIndex === index ? null : index);
  };

  const floatingCardImage = floatingCardIndex !== null ? images[floatingCardIndex] : null;

  return (
    <>
      {/* Interactive 布局 - 2x2 网格 + 跟随鼠标的信息卡 */}
      {isInteractiveLayout ? (
        <div
          ref={containerRef}
          className={styles.interactiveGallery}
          onMouseMove={handleInteractiveMouseMove}
          onMouseLeave={handleInteractiveMouseLeave}
        >
          {images.map((image, index) => (
            <div key={index} className={styles.interactiveItem}>
              <div
                className={`${styles.interactiveImageWrapper} ${hoveredIndex === index ? styles.active : ''}`}
                onMouseEnter={() => handleInteractiveMouseEnter(index)}
                onClick={() => handleMobileToggle(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt || `Product ${index + 1}`}
                  className={styles.interactiveImage}
                />
              </div>

              {/* 移动端展开的信息卡 */}
              {mobileExpandedIndex === index && (
                <div className={styles.interactiveMobileCard}>
                  <h3 className={styles.interactiveCardTitle}>{image.title && t(image.title)}</h3>
                  <p className={styles.interactiveCardDesc}>{image.description && t(image.description)}</p>
                  <div className={styles.interactiveCardProsCons}>
                    <div className={styles.interactiveCardPros}>
                      <span className={styles.interactiveCardLabel}>{t('common.pros')}</span>
                      <ul>
                        {image.pros?.map((pro, i) => (
                          <li key={i}>{t(pro)}</li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.interactiveCardCons}>
                      <span className={styles.interactiveCardLabel}>{t('common.cons')}</span>
                      <ul>
                        {image.cons?.map((con, i) => (
                          <li key={i}>{t(con)}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* 桌面端悬浮信息卡 */}
          <div
            className={`${styles.interactiveFloatingCard} ${hoveredIndex !== null ? styles.visible : ''}`}
            style={{
              left: `${cardPosition.x + 20}px`,
              top: `${cardPosition.y + 20}px`,
            }}
            aria-hidden={hoveredIndex === null}
          >
            {floatingCardImage && (
              <>
                <h3 className={styles.interactiveCardTitle}>{floatingCardImage.title && t(floatingCardImage.title)}</h3>
                <p className={styles.interactiveCardDesc}>{floatingCardImage.description && t(floatingCardImage.description)}</p>
                <div className={styles.interactiveCardProsCons}>
                  <div className={styles.interactiveCardPros}>
                    <span className={styles.interactiveCardLabel}>{t('common.pros')}</span>
                    <ul>
                      {floatingCardImage.pros?.map((pro, i) => (
                        <li key={i}>{t(pro)}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.interactiveCardCons}>
                    <span className={styles.interactiveCardLabel}>{t('common.cons')}</span>
                    <ul>
                      {floatingCardImage.cons?.map((con, i) => (
                        <li key={i}>{t(con)}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      ) : isEditorialLayout ? (
        /* Editorial 布局 - 杂志式不规则拼贴 */
        <div className={styles.editorialGallery}>
          {/* 左侧大图 */}
          <div
            className={styles.editorialMain}
            onClick={() => handleImageClick(0)}
          >
            <div className={styles.editorialImageWrapper}>
              <img
                src={images[0]?.src}
                alt={images[0]?.alt || 'Main image'}
                className={styles.editorialImage}
              />
            </div>
          </div>

          {/* 右侧区域 */}
          <div className={styles.editorialSide}>
            {/* 中间列 - 上下两张小图 */}
            <div className={styles.editorialMiddle}>
              <div
                className={styles.editorialSmallTop}
                onClick={() => handleImageClick(1)}
              >
                <div className={styles.editorialImageWrapper}>
                  <img
                    src={images[1]?.src}
                    alt={images[1]?.alt || 'Small image 1'}
                    className={styles.editorialImage}
                  />
                </div>
              </div>
              <div
                className={styles.editorialSmallBottom}
                onClick={() => handleImageClick(2)}
              >
                <div className={styles.editorialImageWrapper}>
                  <img
                    src={images[2]?.src}
                    alt={images[2]?.alt || 'Small image 2'}
                    className={styles.editorialImage}
                  />
                </div>
              </div>
            </div>

            {/* 最右侧 - 纵向长图 */}
            <div
              className={styles.editorialTall}
              onClick={() => handleImageClick(3)}
            >
              <div className={styles.editorialImageWrapper}>
                <img
                  src={images[3]?.src}
                  alt={images[3]?.alt || 'Tall image'}
                  className={styles.editorialImage}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* 其他布局 */
        <div className={`${styles.collageGallery} ${isHorizontalLayout ? styles.horizontalLayout : ''} ${isScatteredLayout ? styles.scatteredLayout : ''}`}>
          {images.map((image, index) => (
            <div
              key={index}
              className={styles.collageItem}
              style={{
                transform: `rotate(${image.rotation || 0}deg)`,
              }}
              onClick={() => handleImageClick(index)}
            >
              <img
                src={image.src}
                alt={image.alt || `Gallery image ${index + 1}`}
                className={styles.collageImage}
              />
              {image.hoverText && (
                <div className={styles.hoverOverlay}>
                  <span className={styles.hoverText}>{t(image.hoverText)}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* 集锦下方的文字内容 */}
      {description && (
        <div className={styles.collageText}>
          <p className={styles.collageDescription}>{renderBoldText(t(description))}</p>
        </div>
      )}

      {lightboxOpen && (
        <ImageLightbox
          images={images}
          currentIndex={currentIndex}
          onClose={handleCloseLightbox}
          onPrev={handlePrevImage}
          onNext={handleNextImage}
        />
      )}
    </>
  );
};
