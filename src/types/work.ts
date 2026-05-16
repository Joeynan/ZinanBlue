import { LocalizedString } from '../i18n/types';

export type ShapeType = 'circle' | 'square' | 'triangle' | 'rectangle';
export type ShapeColor = 'red' | 'yellow' | 'blue' | 'black' | 'white' | 'gray';
export type CategoryType =
  | 'hci-research'
  | 'hardware-design-development'
  | 'industrial-design'
  | 'other-design';

// 详情页内容块
export interface ContentBlock {
  type: 'large' | 'small';
  text: LocalizedString;
}

// 详情页内容区块
export interface ContentSection {
  title: string;
  content: ContentBlock[];
}

// Details 区块的介绍内容
export interface DetailsIntro {
  title: LocalizedString;
  description: LocalizedString;
}

// 视频组配置（用于详情页中插入本地视频）
export interface VideoGroup {
  position: number;
  large: string;
  smallTop: string;
  smallBottom: string;
}

// 竖屏视频配置（用于详情页中插入竖屏视频）
export interface VerticalVideo {
  position: number;
  src: string;
  textLarge?: LocalizedString;
  textSmall?: LocalizedString;
}

// 图片集锦单张图片配置
export interface CollageImage {
  src: string;
  alt?: string;
  rotation?: number;
  hoverText?: LocalizedString;
  // Interactive 布局专用字段
  title?: LocalizedString;
  description?: LocalizedString;
  pros?: LocalizedString[];
  cons?: LocalizedString[];
}

// 图片集锦配置（用于详情页中插入图片集锦模块）
export interface CollageGallery {
  position: number;
  images: CollageImage[];
  layout?: 'horizontal' | 'scattered' | 'editorial' | 'interactive';
  title?: LocalizedString;
  description?: LocalizedString;
  afterLargeText?: LocalizedString;
  afterSmallText?: LocalizedString;
}

// Research Insights 配置
export interface ResearchInsights {
  position: number;
  leftSection: {
    radarChart: {
      image: string;
      title: LocalizedString;
    };
    needsAnalysis: {
      image: string;
      title: LocalizedString;
    };
  };
  middleSection: {
    keywords: LocalizedString[];
  };
  rightSection: {
    title: LocalizedString;
    paragraphs: LocalizedString[];
  };
}

// detail-11 下方 GIF 展示区配置
export interface Detail11GifSection {
  position: number;
  gifLeft: string;
  gifRight: string;
  description?: LocalizedString;
}

// detail-12 下方双图展示区配置
export interface Detail12ImageSection {
  position: number;
  imageLeft: string;
  imageRight: string;
  description?: LocalizedString;
}

// 步骤卡片配置
export interface StepCard {
  stepNumber: string;
  icon: string;
  title: LocalizedString;
  description: LocalizedString;
  marginTop?: number;
}

// 步骤卡片区域配置
export interface StepsSection {
  position: number;
  steps: StepCard[];
}

// 痛点卡片配置
export interface PainPointCard {
  label: LocalizedString;
  title: LocalizedString;
  paragraphs: LocalizedString[];
  image?: string;
  imageAlt?: string;
  placeholderLabel?: LocalizedString;
}

// 痛点区域配置
export interface PainPointsSection {
  position: number;
  items: PainPointCard[];
  introText?: LocalizedString;
}

// 设计定位图中的漂浮卡片配置
export interface DesignPositioningMapItem {
  title: LocalizedString;
  image?: string;
  imageAlt?: string;
  placeholderLabel?: LocalizedString;
  variant?: 'portrait' | 'landscape' | 'wide';
  x: number;
  y: number;
}

// 右侧核心属性配置
export interface DesignPositioningAttribute {
  icon: 'emotion' | 'duration' | 'space';
  title: LocalizedString;
  description: LocalizedString;
}

// 设计定位理念区域配置
export interface DesignPositioningSection {
  position: number;
  heading: LocalizedString;
  headingDescription?: LocalizedString;
  verticalAxisLabel: LocalizedString;
  horizontalAxisLabel: LocalizedString;
  mapItems: DesignPositioningMapItem[];
  visionLabel: LocalizedString;
  visionTitle: LocalizedString;
  visionDescription: LocalizedString[];
  attributesLabel: LocalizedString;
  attributes: DesignPositioningAttribute[];
}

// 痛点到功能映射项配置
export interface PainToFeatureItem {
  painLabel: LocalizedString;
  painTitle: LocalizedString;
  painDescription: LocalizedString;
  painImage: string;
  painImageAlt?: string;
  featureIcon: 'route' | 'breath' | 'agent';
  featureTitle: LocalizedString;
  featureDescription: LocalizedString;
}

// 痛点转功能映射区域配置
export interface PainToFeatureSection {
  position: number;
  painHeading: LocalizedString;
  painHeadingDescription?: LocalizedString;
  featureHeading: LocalizedString;
  items: PainToFeatureItem[];
}

// 痛点场景项配置
export interface PainPointScenarioItem {
  number: string;
  sceneLabel: LocalizedString;
  title: LocalizedString;
  description: LocalizedString;
  image: string;
  imageAlt?: string;
}

// 痛点场景区域配置
export interface PainPointScenarios {
  position: number;
  items: PainPointScenarioItem[];
}

// 设计定位卡片项配置
export interface DesignPositioningCardItem {
  number: string;
  title: LocalizedString;
  description: LocalizedString;
  image?: string;
  imageAlt?: string;
  iconType?: 'glasses' | 'student' | 'ai';
}

// 设计定位卡片区域配置
export interface DesignPositioningCards {
  position: number;
  title: LocalizedString;
  afterLargeText?: LocalizedString;
  afterSmallText?: LocalizedString;
  items: DesignPositioningCardItem[];
}

// 设计特征卡片配置
export interface DesignFeatureCard {
  number: string;
  description: LocalizedString;
  highlightTexts?: LocalizedString[];
}

// 设计特征要点配置
export interface DesignFeatureItem {
  text: LocalizedString;
}

// 设计特征区域配置
export interface DesignFeatureSection {
  position: number;
  title: LocalizedString;
  images: string[];
  cards: DesignFeatureCard[];
  features: DesignFeatureItem[];
  tagLabel: LocalizedString;
}

// 结尾图片配置
export interface EndingImage {
  largeText: LocalizedString;
  smallText: LocalizedString;
  image: string;
}

// 图片上方的大字+小字内容配置
export interface DetailTextConfig {
  position: number;
  largeText?: LocalizedString;
  smallText?: LocalizedString;
}

// 标准化 detail 图片文案配置
export interface DetailMediaConfig {
  position: number;
  largeText?: LocalizedString;
  smallText?: LocalizedString;
  description?: LocalizedString;
  variant?: 'default' | 'withText' | 'singleImage';
}

export type DetailModulePlacement = 'beforeMedia' | 'betweenTextAndMedia' | 'afterMedia';
export type DetailModuleType =
  | 'stepsSection'
  | 'painPointsSection'
  | 'designPositioningSection'
  | 'painToFeatureSection'
  | 'painPointScenarios'
  | 'designPositioningCards'
  | 'videoGroup'
  | 'verticalVideo'
  | 'collageGallery'
  | 'designFeatureSection'
  | 'researchInsights'
  | 'detail11GifSection'
  | 'detail12ImageSection';

export interface DetailModuleDataMap {
  stepsSection: StepsSection;
  painPointsSection: PainPointsSection;
  designPositioningSection: DesignPositioningSection;
  painToFeatureSection: PainToFeatureSection;
  painPointScenarios: PainPointScenarios;
  designPositioningCards: DesignPositioningCards;
  videoGroup: VideoGroup;
  verticalVideo: VerticalVideo;
  collageGallery: CollageGallery;
  designFeatureSection: DesignFeatureSection;
  researchInsights: ResearchInsights;
  detail11GifSection: Detail11GifSection;
  detail12ImageSection: Detail12ImageSection;
}

export type DetailModule = {
  [K in DetailModuleType]: {
    position: number;
    placement: DetailModulePlacement;
    type: K;
    data: DetailModuleDataMap[K];
    key?: string;
  }
}[DetailModuleType];

export interface Work {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  category: LocalizedString;
  categoryType: CategoryType;
  tags: string[];
  thumbnail: string;
  images: string[];
  year: number;
  client?: string;
  role?: string;
  technologies?: string[];
  shapeType?: ShapeType;
  accentColor?: ShapeColor;
  featured?: boolean;
  url?: string;
  github?: string;
  videoUrl?: string;
  awards?: LocalizedString[];
  contentSections?: ContentSection[];
  detailsIntro?: DetailsIntro;
  imageDescriptions?: LocalizedString[];
  detailText4Large?: LocalizedString;
  detailText4Small?: LocalizedString;
  detailText9Large?: LocalizedString;
  detailText9Small?: LocalizedString;
  detailText10Large?: LocalizedString;
  detailText10Small?: LocalizedString;
  detailText11Large?: LocalizedString;
  detailText11Small?: LocalizedString;
  detailText14Large?: LocalizedString;
  detailText14Small?: LocalizedString;
  detailText15Large?: LocalizedString;
  detailText15Small?: LocalizedString;
  detailTexts?: DetailTextConfig[];
  detailMedia?: DetailMediaConfig[];
  detailModules?: DetailModule[];
  videoGroup?: VideoGroup;
  verticalVideo?: VerticalVideo;
  collageGalleries?: CollageGallery[];
  researchInsights?: ResearchInsights;
  detail11GifSection?: Detail11GifSection;
  detail12ImageSection?: Detail12ImageSection;
  stepsSection?: StepsSection;
  painPointsSection?: PainPointsSection;
  designPositioningSection?: DesignPositioningSection;
  painToFeatureSection?: PainToFeatureSection;
  painPointScenarios?: PainPointScenarios;
  designPositioningCards?: DesignPositioningCards;
  designFeatureSections?: DesignFeatureSection[];
  endingImages?: EndingImage[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  count: number;
}
