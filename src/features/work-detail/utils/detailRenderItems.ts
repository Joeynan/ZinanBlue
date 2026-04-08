import {
  DetailMediaConfig,
  DetailModule,
  DetailModulePlacement,
  Work,
} from '../../../types/work';

export interface DetailRenderItem {
  position: number;
  image: string;
  alt: string;
  media: DetailMediaConfig;
  beforeModules: DetailModule[];
  betweenModules: DetailModule[];
  afterModules: DetailModule[];
}

const legacyTextFieldPositions = (work: Work) => ([
  { position: 3, largeText: work.detailText4Large, smallText: work.detailText4Small },
  { position: 6, largeText: work.detailText9Large, smallText: work.detailText9Small },
  { position: 9, largeText: work.detailText10Large, smallText: work.detailText10Small },
  { position: 10, largeText: work.detailText11Large, smallText: work.detailText11Small },
  { position: 13, largeText: work.detailText14Large, smallText: work.detailText14Small },
  { position: 14, largeText: work.detailText15Large, smallText: work.detailText15Small },
]);

const mergeMediaEntry = (
  mediaMap: Map<number, DetailMediaConfig>,
  position: number,
  patch: Partial<DetailMediaConfig>
) => {
  const existing = mediaMap.get(position) ?? { position };
  mediaMap.set(position, {
    ...existing,
    ...patch,
    position,
  });
};

const hasMediaText = (media?: DetailMediaConfig) => Boolean(media?.largeText || media?.smallText);

const buildModuleIdentity = (module: DetailModule) =>
  `${module.position}:${module.placement}:${module.type}:${module.key ?? ''}`;

const getLegacyAfterPlacement = (
  position: number,
  detailTextPositions: Set<number>,
  type: DetailModule['type']
): DetailModulePlacement => {
  if (type === 'detail11GifSection' || type === 'detail12ImageSection') {
    return 'afterMedia';
  }

  return detailTextPositions.has(position) ? 'betweenTextAndMedia' : 'afterMedia';
};

export const normalizeLegacyDetailConfig = (work: Work): {
  detailMedia: DetailMediaConfig[];
  detailModules: DetailModule[];
} => {
  const mediaMap = new Map<number, DetailMediaConfig>();
  const detailTextPositions = new Set<number>();

  work.detailTexts?.forEach((config) => {
    if (config.largeText || config.smallText) {
      detailTextPositions.add(config.position);
    }

    mergeMediaEntry(mediaMap, config.position, {
      largeText: config.largeText,
      smallText: config.smallText,
      variant: config.largeText || config.smallText ? 'withText' : undefined,
    });
  });

  work.imageDescriptions?.forEach((description, position) => {
    if (position === 0 || !description) {
      return;
    }

    mergeMediaEntry(mediaMap, position, { description });
  });

  legacyTextFieldPositions(work).forEach(({ position, largeText, smallText }) => {
    if (!largeText && !smallText) {
      return;
    }

    mergeMediaEntry(mediaMap, position, {
      largeText,
      smallText,
      variant: 'withText',
    });
  });

  if (work.detail11GifSection && !hasMediaText(mediaMap.get(work.detail11GifSection.position))) {
    mergeMediaEntry(mediaMap, work.detail11GifSection.position, {
      variant: 'singleImage',
    });
  }

  if (work.detail12ImageSection && !hasMediaText(mediaMap.get(work.detail12ImageSection.position))) {
    mergeMediaEntry(mediaMap, work.detail12ImageSection.position, {
      variant: 'singleImage',
    });
  }

  const detailModules: DetailModule[] = [];

  if (work.stepsSection) {
    detailModules.push({
      position: work.stepsSection.position,
      placement: 'beforeMedia',
      type: 'stepsSection',
      data: work.stepsSection,
    });
  }

  if (work.painPointsSection) {
    detailModules.push({
      position: work.painPointsSection.position,
      placement: 'beforeMedia',
      type: 'painPointsSection',
      data: work.painPointsSection,
    });
  }

  if (work.designPositioningSection) {
    detailModules.push({
      position: work.designPositioningSection.position,
      placement: 'beforeMedia',
      type: 'designPositioningSection',
      data: work.designPositioningSection,
    });
  }

  if (work.painToFeatureSection) {
    detailModules.push({
      position: work.painToFeatureSection.position,
      placement: 'beforeMedia',
      type: 'painToFeatureSection',
      data: work.painToFeatureSection,
    });
  }

  if (work.painPointScenarios) {
    detailModules.push({
      position: work.painPointScenarios.position,
      placement: 'beforeMedia',
      type: 'painPointScenarios',
      data: work.painPointScenarios,
    });
  }

  if (work.designPositioningCards) {
    detailModules.push({
      position: work.designPositioningCards.position,
      placement: getLegacyAfterPlacement(
        work.designPositioningCards.position,
        detailTextPositions,
        'designPositioningCards'
      ),
      type: 'designPositioningCards',
      data: work.designPositioningCards,
    });
  }

  if (work.videoGroup) {
    detailModules.push({
      position: work.videoGroup.position,
      placement: getLegacyAfterPlacement(work.videoGroup.position, detailTextPositions, 'videoGroup'),
      type: 'videoGroup',
      data: work.videoGroup,
    });
  }

  if (work.verticalVideo) {
    detailModules.push({
      position: work.verticalVideo.position,
      placement: getLegacyAfterPlacement(
        work.verticalVideo.position,
        detailTextPositions,
        'verticalVideo'
      ),
      type: 'verticalVideo',
      data: work.verticalVideo,
    });
  }

  work.collageGalleries?.forEach((gallery, index) => {
    detailModules.push({
      position: gallery.position,
      placement: getLegacyAfterPlacement(gallery.position, detailTextPositions, 'collageGallery'),
      type: 'collageGallery',
      data: gallery,
      key: `collageGallery-${index}`,
    });
  });

  work.designFeatureSections?.forEach((section, index) => {
    detailModules.push({
      position: section.position,
      placement: getLegacyAfterPlacement(section.position, detailTextPositions, 'designFeatureSection'),
      type: 'designFeatureSection',
      data: section,
      key: `designFeatureSection-${index}`,
    });
  });

  if (work.researchInsights) {
    detailModules.push({
      position: work.researchInsights.position,
      placement: getLegacyAfterPlacement(
        work.researchInsights.position,
        detailTextPositions,
        'researchInsights'
      ),
      type: 'researchInsights',
      data: work.researchInsights,
    });
  }

  if (work.detail11GifSection) {
    detailModules.push({
      position: work.detail11GifSection.position,
      placement: 'afterMedia',
      type: 'detail11GifSection',
      data: work.detail11GifSection,
    });
  }

  if (work.detail12ImageSection) {
    detailModules.push({
      position: work.detail12ImageSection.position,
      placement: 'afterMedia',
      type: 'detail12ImageSection',
      data: work.detail12ImageSection,
    });
  }

  return {
    detailMedia: Array.from(mediaMap.values()).sort((a, b) => a.position - b.position),
    detailModules,
  };
};

export const buildDetailRenderItems = (work: Work): DetailRenderItem[] => {
  const legacyConfig = normalizeLegacyDetailConfig(work);
  const mediaMap = new Map<number, DetailMediaConfig>();

  legacyConfig.detailMedia.forEach((media) => {
    mergeMediaEntry(mediaMap, media.position, media);
  });

  work.detailMedia?.forEach((media) => {
    mergeMediaEntry(mediaMap, media.position, media);
  });

  const moduleMap = new Map<string, DetailModule>();
  [...legacyConfig.detailModules, ...(work.detailModules ?? [])].forEach((module) => {
    moduleMap.set(buildModuleIdentity(module), module);
  });

  const mergedModules = Array.from(moduleMap.values());
  const detailRenderItems: DetailRenderItem[] = [];

  for (let position = 1; position < work.images.length; position += 1) {
    const media = mediaMap.get(position) ?? { position, variant: 'default' };
    const modulesAtPosition = mergedModules.filter((module) => module.position === position);

    detailRenderItems.push({
      position,
      image: work.images[position],
      alt: `${work.title} detail ${position + 1}`,
      media,
      beforeModules: modulesAtPosition.filter((module) => module.placement === 'beforeMedia'),
      betweenModules: modulesAtPosition.filter((module) => module.placement === 'betweenTextAndMedia'),
      afterModules: modulesAtPosition.filter((module) => module.placement === 'afterMedia'),
    });
  }

  return detailRenderItems;
};
