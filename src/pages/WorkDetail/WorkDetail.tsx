import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getWorkById } from '../../hooks/useWorks';
import { useLanguage } from '../../i18n/LanguageContext';
import { GeometricShape } from '../../components/common/GeometricShape';
import { GlassSurface } from '../../components/common/GlassSurface';
import { DetailModule } from '../../types/work';
import { renderBoldText } from '../../utils/richText';
import { OverviewSection } from '../../features/work-detail/components/OverviewSection';
import { ProjectVideoSection } from '../../features/work-detail/components/ProjectVideoSection';
import { ContentSections } from '../../features/work-detail/components/ContentSections';
import { DetailsIntro } from '../../features/work-detail/components/DetailsIntro';
import { DetailMediaBlock } from '../../features/work-detail/components/DetailMediaBlock';
import { buildDetailRenderItems } from '../../features/work-detail/utils/detailRenderItems';
import { detailModuleRegistry } from '../../features/work-detail/utils/detailModuleRegistry';
import styles from './WorkDetail.module.css';

export const WorkDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const work = getWorkById(id || '');

  if (!work) {
    return (
      <div className={styles.notFound}>
        <div className={styles.notFoundContent}>
          <GeometricShape type="triangle" color="red" size="xl" />
          <h1>{t('detail.notFound')}</h1>
          <p>{t('detail.notFoundDesc')}</p>
          <Link to="/works" className={styles.backLink}>
            {t('detail.backToList')}
          </Link>
        </div>
      </div>
    );
  }

  const overviewBlocks = work.contentSections?.find(
    (section) => section.title === 'Overview'
  )?.content;
  const contentSections = work.contentSections?.filter(
    (section) => section.title !== 'Overview'
  ) ?? [];
  const detailRenderItems = buildDetailRenderItems(work);
  const translateOptional = (value?: Parameters<typeof t>[0]) => (
    value ? t(value) : undefined
  );
  const buildDetailAlt = (imageNumber: number) => (
    `${t(work.title)} ${t('detail.imageShow')} ${imageNumber}`
  );
  const renderDetailMediaBlock = ({
    image,
    imageNumber,
    textLarge,
    textSmall,
    description,
    variant,
    childrenBetweenTextAndMedia,
  }: {
    image: string;
    imageNumber: number;
    textLarge?: Parameters<typeof t>[0];
    textSmall?: Parameters<typeof t>[0];
    description?: Parameters<typeof t>[0];
    variant?: 'default' | 'withText' | 'singleImage';
    childrenBetweenTextAndMedia?: React.ReactNode;
  }) => (
    <DetailMediaBlock
      image={image}
      alt={buildDetailAlt(imageNumber)}
      textLarge={translateOptional(textLarge)}
      textSmall={translateOptional(textSmall)}
      description={translateOptional(description)}
      variant={variant}
      childrenBetweenTextAndMedia={childrenBetweenTextAndMedia}
    />
  );
  const renderDetailModules = (modules: DetailModule[]) => (
    modules.map((module, index) => {
      const renderedModule = detailModuleRegistry[module.type](module, { t });
      return (
        <React.Fragment
          key={`${module.position}-${module.placement}-${module.type}-${module.key ?? index}`}
        >
          {renderedModule}
        </React.Fragment>
      );
    })
  );

  return (
    <motion.div
      className={styles.detail}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Back Button Container */}
      <div className={styles.backButtonContainer}>
        <Link to="/works" className={styles.backButton}>
          <GlassSurface
            variant="button"
            interactive
            className={styles.backButtonSurface}
            contentClassName={styles.backButtonSurfaceContent}
          >
            <span className={styles.backArrow}>←</span>
            {t('detail.back')}
          </GlassSurface>
        </Link>
      </div>

      {/* Hero Image */}
      <motion.div
        className={styles.hero}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <img
          src={work.images[0] || work.thumbnail}
          alt={t(work.title)}
          className={styles.heroImage}
        />
        <div className={styles.heroDecor}>
          <GeometricShape
            type={work.shapeType || 'circle'}
            color={work.accentColor || 'red'}
            size="lg"
          />
        </div>
      </motion.div>

      {/* Header - 标题区域 */}
      <div className={styles.header}>
        <div className={styles.container}>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {t(work.title)}
          </motion.h1>
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.main}>
            <OverviewSection
              title={t('detail.overview')}
              description={t(work.description)}
              overviewBlocks={overviewBlocks}
              year={work.year}
              role={work.role}
              tags={work.tags}
              awards={work.awards}
              demoUrl={work.demoUrl}
              t={t}
            />

            <ProjectVideoSection
              title={t('detail.video')}
              videoUrl={work.videoUrl}
              iframeTitle={`${work.title} ${t('detail.videoTitle')}`}
            />

            <ContentSections sections={contentSections} t={t} />

            {/* Project Details - 项目介绍（图片+文字） */}
            <motion.section
              className={styles.section}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h2 className={styles.sectionTitle}>
                {t('detail.details')}
              </h2>
              <DetailsIntro
                title={work.detailsIntro ? t(work.detailsIntro.title) : undefined}
                description={work.detailsIntro ? t(work.detailsIntro.description) : undefined}
              />
              <div className={styles.projectDetails}>
                {detailRenderItems.map((item) => (
                  <React.Fragment key={`detail-render-item-${item.position}`}>
                    {renderDetailModules(item.beforeModules)}
                    {renderDetailMediaBlock({
                      image: item.image,
                      imageNumber: item.position + 1,
                      textLarge: item.media.largeText,
                      textSmall: item.media.smallText,
                      description: item.media.description,
                      variant: item.media.variant,
                      childrenBetweenTextAndMedia: renderDetailModules(item.betweenModules),
                    })}
                    {renderDetailModules(item.afterModules)}
                  </React.Fragment>
                ))}

                {/* 结尾图片区域（4个设计特征之后） */}
                {work.endingImages && work.endingImages.map((endingImage, endingIndex) => (
                  <div key={`ending-image-${endingIndex}`} className={styles.detailItem}>
                    {endingImage.largeText && <p className={styles.textLarge}>{t(endingImage.largeText)}</p>}
                    {endingImage.smallText && <p className={styles.textSmall}>{renderBoldText(t(endingImage.smallText))}</p>}
                    <div className={styles.detailImage}>
                      <img
                        src={endingImage.image}
                        alt={`${work.title} ${t('detail.endingImage')} ${endingIndex + 1}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
