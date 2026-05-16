import { Work } from '../../types/work';

export const hairDryer: Work = {
  id: '17',
  title: { zh: 'AirTrip-差旅卷直吹风机', en: 'AirTrip-Travel Glam Styler' },

  // ========== Overview 区块 ==========
  thumbnail: '/images/hair-dryer/thumb.png',
  images: [
    '/images/hair-dryer/detail-1.png',
    '/images/hair-dryer/detail-2.png',
    '/images/hair-dryer/detail-3.png',
    '/images/hair-dryer/detail-4.png',
    '/images/hair-dryer/detail-5.png',
    '/images/hair-dryer/detail-6.png',
    '/images/hair-dryer/detail-7.png',
  ],
  // 大字内容（主标题）
  description: { zh: 'AirTrip-差旅卷直吹风机', en: 'AirTrip — Travel Curl & Straight Hair Dryer' },

  // 小字内容（项目简介）
  contentSections: [
    {
      title: 'Overview',
      content: [
        { type: 'small', text: { zh: 'AirTrip-差旅卷直吹风机是一款面向经常出差与旅行女性用户的便携式三合一美发产品，集吹发、直发与卷发功能于一体，旨在减少多设备携带带来的收纳负担与使用不便。产品围绕差旅场景下"轻量化、快速整理、精致出行"的需求展开设计，在有限体积内整合基础吹干与日常造型能力。外观采用流动曲线纹理语言，呼应风感与发丝柔顺意象，打造兼具功能效率与视觉辨识度的个护产品提案。该方案为本人于瑞德设计公司实习期间参与完成的、面向小熊品牌的设计提案项目', en: 'AirTrip is a portable 3-in-1 hair styling product designed for women who frequently travel for business or leisure. It integrates hair drying, straightening, and curling functions into one device, aiming to reduce the burden of carrying multiple styling tools. The product is designed around the needs of "lightweight, quick styling, and refined travel," integrating basic drying and daily styling capabilities within a compact form. The exterior features flowing curve textures that evoke the imagery of wind and smooth hair, creating a personal care product proposal that balances functional efficiency with visual distinctiveness. This project was completed during an internship at Red Design, as a design proposal for the Bear brand.' } },
      ]
    }
  ],

  // ========== Details 区块 ==========
  detailsIntro: {
    title: { zh: '作品展示', en: 'Design Showcase' },
    description: { zh: '设计从"水波涟漪"的自然形态中获得启发。涟漪所具有的连续扩散、柔和起伏与节奏变化，能够传递一种轻盈、顺畅且富有包裹感的视觉体验，这与女性用户在日常造型中追求的柔顺发感和舒适体验相契合。因此，方案将"涟"的意象融入产品外观，通过流动曲线纹理构建具有方向感的造型语言，使产品在视觉上呈现出如风拂水面般的动态感，并以此强化产品识别性与品牌提案的独特表达。', en: 'The design draws inspiration from the natural form of "water ripples." The continuous spreading, gentle undulation, and rhythmic variation of ripples convey a visual experience that is light, smooth, and enveloping — qualities that align with the silky hair feel and comfortable experience women seek in daily styling. Therefore, the concept integrates the imagery of "ripples" into the product exterior, using flowing curve textures to build a directional design language that gives the product a dynamic appearance reminiscent of wind brushing across water, reinforcing product recognition and the unique expression of the brand proposal.' },
  },

  // ========== 图片与描述 ==========
  imageDescriptions: [
    { zh: '', en: '' }, // detail-1.png (Hero 大图，不需要描述)
    { zh: '关闭锁定键，为速干吹风模式，适合快速吹干头发', en: 'Lock button closed for quick-dry blow mode, suitable for fast hair drying' }, // detail-2.png
    { zh: '单侧开合打造产品使用差异化，单手操作简单省力', en: 'Single-side opening creates differentiated product usage, easy one-handed operation' },
    { zh: '直发模式', en: 'Straightening mode' },
    { zh: '', en: '' },
    { zh: 'CMF 设计：以金属质感的细节处理，营造出现代感与科技感兼具的视觉效果。', en: 'CMF Design: Metallic finish details create a visual effect that combines modernity and a sense of technology.' }, // detail-6.png 上方的大字内容
  ],

  // ========== 项目信息 ==========
  category: { zh: '工业设计', en: 'Industrial Design' },
  categoryType: 'industrial-design',
  tags: ['Product Design', 'Consumer Electronics', 'Travel-friendly','Commercial Design'],
  year: 2023,
  role: '工业设计师',
  technologies: ['【在此处填写技术】'],

  shapeType: 'triangle',
  accentColor: 'yellow',

};
