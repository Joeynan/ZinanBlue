import React from 'react';
import { CollageGallery } from '../../../components/common/CollageGallery';
import { ResearchInsights } from '../../../components/common/ResearchInsights/ResearchInsights';
import { Detail11GifSection } from '../../../components/common/Detail11GifSection/Detail11GifSection';
import { Detail12ImageSection } from '../../../components/common/Detail12ImageSection/Detail12ImageSection';
import { PainPointsSection } from '../../../components/common/PainPointsSection/PainPointsSection';
import { DesignPositioningSection } from '../../../components/common/DesignPositioningSection/DesignPositioningSection';
import { PainToFeatureSection } from '../../../components/common/PainToFeatureSection/PainToFeatureSection';
import { StepsSection } from '../../../components/common/StepsSection/StepsSection';
import { PainPointScenarios } from '../../../components/common/PainPointScenarios/PainPointScenarios';
import { DesignPositioningCards } from '../../../components/common/DesignPositioningCards/DesignPositioningCards';
import { DesignFeatureSection } from '../../../components/common/DesignFeatureSection/DesignFeatureSection';
import styles from '../../../pages/WorkDetail/WorkDetail.module.css';
import { renderBoldText } from '../../../utils/richText';
import { DetailModule } from '../../../types/work';
import { TranslateFn } from '../components/types';
import { VideoGroup } from '../components/VideoGroup';
import { VerticalVideoSection } from '../components/VerticalVideoSection';

interface DetailModuleRendererContext {
  t: TranslateFn;
}

type DetailModuleRenderer = (module: DetailModule, context: DetailModuleRendererContext) => React.ReactNode;

export const detailModuleRegistry: Record<DetailModule['type'], DetailModuleRenderer> = {
  stepsSection: (module) => {
    const data = module.data as Extract<DetailModule, { type: 'stepsSection' }>['data'];
    return (
      <div className={styles.detailItem}>
        <StepsSection data={data} />
      </div>
    );
  },
  painPointsSection: (module) => {
    const data = module.data as Extract<DetailModule, { type: 'painPointsSection' }>['data'];
    return (
      <div className={styles.detailItem}>
        <PainPointsSection data={data} />
      </div>
    );
  },
  designPositioningSection: (module) => {
    const data = module.data as Extract<DetailModule, { type: 'designPositioningSection' }>['data'];
    return (
      <div className={styles.detailItem}>
        <DesignPositioningSection data={data} />
      </div>
    );
  },
  painToFeatureSection: (module) => {
    const data = module.data as Extract<DetailModule, { type: 'painToFeatureSection' }>['data'];
    return (
      <div className={styles.detailItem}>
        <PainToFeatureSection data={data} />
      </div>
    );
  },
  painPointScenarios: (module) => {
    const data = module.data as Extract<DetailModule, { type: 'painPointScenarios' }>['data'];
    return (
      <div className={styles.detailItem}>
        <PainPointScenarios data={data} />
      </div>
    );
  },
  designPositioningCards: (module, { t }) => {
    const data = module.data as Extract<DetailModule, { type: 'designPositioningCards' }>['data'];
    return (
    <div className={styles.detailItem}>
      <DesignPositioningCards data={data} />
      {data.afterLargeText && <p className={styles.textLarge}>{t(data.afterLargeText)}</p>}
      {data.afterSmallText && (
        <p className={styles.textSmall}>{renderBoldText(t(data.afterSmallText))}</p>
      )}
    </div>
    );
  },
  videoGroup: (module) => {
    const data = module.data as Extract<DetailModule, { type: 'videoGroup' }>['data'];
    return (
      <div className={styles.detailItem}>
        <VideoGroup
          large={data.large}
          smallTop={data.smallTop}
          smallBottom={data.smallBottom}
        />
      </div>
    );
  },
  verticalVideo: (module, { t }) => {
    const data = module.data as Extract<DetailModule, { type: 'verticalVideo' }>['data'];
    return (
      <div className={styles.detailItem}>
        <VerticalVideoSection
          src={data.src}
          textLarge={data.textLarge ? t(data.textLarge) : undefined}
          textSmall={data.textSmall ? t(data.textSmall) : undefined}
        />
      </div>
    );
  },
  collageGallery: (module, { t }) => {
    const data = module.data as Extract<DetailModule, { type: 'collageGallery' }>['data'];
    return (
    <div className={styles.detailItem}>
      <CollageGallery
        images={data.images}
        layout={data.layout}
        title={data.title}
        description={data.description}
      />
      {data.afterLargeText && <p className={styles.textLarge}>{t(data.afterLargeText)}</p>}
      {data.afterSmallText && (
        <p className={styles.textSmall}>{renderBoldText(t(data.afterSmallText))}</p>
      )}
    </div>
    );
  },
  designFeatureSection: (module) => {
    const data = module.data as Extract<DetailModule, { type: 'designFeatureSection' }>['data'];
    return (
      <div className={styles.detailItem}>
        <DesignFeatureSection data={data} />
      </div>
    );
  },
  researchInsights: (module) => {
    const data = module.data as Extract<DetailModule, { type: 'researchInsights' }>['data'];
    return (
      <div className={styles.detailItem}>
        <ResearchInsights data={data} />
      </div>
    );
  },
  detail11GifSection: (module) => {
    const data = module.data as Extract<DetailModule, { type: 'detail11GifSection' }>['data'];
    return (
      <div className={styles.detailItem}>
        <Detail11GifSection data={data} />
      </div>
    );
  },
  detail12ImageSection: (module) => {
    const data = module.data as Extract<DetailModule, { type: 'detail12ImageSection' }>['data'];
    return (
      <div className={styles.detailItem}>
        <Detail12ImageSection data={data} textSmallClassName={styles.textSmall} />
      </div>
    );
  },
};
