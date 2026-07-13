import { Work } from '../../types/work';

export const singpal: Work = {
  id: 'singpal',
  title: { zh: 'SingPal — 儿童图形化 AI 音乐创作平台', en: 'SingPal — Graphical AI Music Creation Platform for Children' },

  // ========== Overview 区块 ==========
  thumbnail: '/images/singpal/thumb.png',
  images: [
    '/images/singpal/detail-1.png',
    '/images/singpal/detail-2.png',
    '/images/singpal/detail-3.png',
    '/images/singpal/detail-4.png',
    '/images/singpal/detail-5.png',
    '/images/singpal/detail-6.png',
    '/images/singpal/detail-7.png',
    '/images/singpal/detail-8.png',
    '/images/singpal/detail-9.png',
    '/images/singpal/detail-10.png',
    '/images/singpal/detail-11.png',
    '/images/singpal/detail-12.png',
    '/images/singpal/detail-13.png',
  ],

  description: {
    zh: '面向学龄前儿童（3-6 岁）的图形化 AI 音乐创作平台，将传统文字 prompt 转化为儿童熟悉的"角色装扮"交互，让儿童在玩耍中完成音乐创作。',
    en: 'A graphical AI music creation platform for preschool children (ages 3-6), transforming traditional text prompts into familiar "character dress-up" interactions, enabling children to create music through play.',
  },

  contentSections: [
    {
      title: '',
      content: [
        {
          type: 'small',
          text: {
            zh: '生成式 AI 正在逐渐融入人们生活的各个方面，但现有 AI 创作工具大多依赖详细的文本输入、语音描述或复杂参数。对于学龄前儿童（3-6 岁）而言，他们尚未具备稳定的阅读、写作和长句表达能力，很难使用现有 AI 工具主动创造内容。与此同时，随着生成式人工智能不断进入儿童的日常环境，儿童也需要一种符合其认知发展阶段、易于理解并能够自主表达意图的 AI 创作入口，而不是始终依赖成人代替输入和决策。',
            en: 'Generative AI is increasingly becoming part of everyday life, yet most existing AI creation tools rely on detailed text input, voice descriptions, or complex parameters. For preschool children (ages 3-6), who have not yet developed stable reading, writing, and long-sentence expression abilities, it is extremely difficult to use existing AI tools to actively create content. Meanwhile, as generative AI continues to enter children\'s daily environments, children also need an AI creation entry point that aligns with their cognitive development stage, is easy to understand, and allows them to express their intentions independently.',
          },
        },
        {
          type: 'small',
          text: {
            zh: 'SingPal 提出一种面向学龄前儿童的图形化 AI 音乐创作方式，将传统的文字 prompt 转化为儿童熟悉的"角色装扮"交互。儿童不需要输入文字或理解专业音乐参数，只需通过选择角色、服装、表情、乐器、动作和装饰来表达音乐意图。系统会将这些视觉选择自动映射为结构化音乐提示词：角色对应声音身份，服装对应音乐风格，表情对应情绪，乐器对应主要声音元素，动作对应节奏速度，装饰对应音效与氛围。AI 会根据这些图形化 prompt 生成一首适合儿童的歌曲，并通过角色演唱、身体律动和动态舞台反馈呈现结果。通过这种方式，儿童可以在玩耍和装扮中完成音乐创作以及分享自己的音乐，获得更低门槛、更直观且更具自主性的 AI 创作体验。',
            en: 'SingPal proposes a graphical AI music creation approach for preschool children, transforming traditional text prompts into familiar "character dress-up" interactions. Children don\'t need to type text or understand professional music parameters — they simply select characters, outfits, expressions, instruments, actions, and decorations to express their musical intentions. The system automatically maps these visual choices into structured music prompts: characters correspond to voice identity, outfits to music styles, expressions to emotions, instruments to primary sound elements, actions to rhythm and tempo, and decorations to sound effects and atmosphere. The AI generates child-friendly songs based on these graphical prompts and presents results through character singing, body rhythm, and dynamic stage feedback. Through this approach, children can complete music creation and share their music while playing and dressing up, gaining a lower-barrier, more intuitive, and more autonomous AI creation experience.',
          },
        },
      ],
    },
  ],

  // ========== Meta 信息 ==========
  category: { zh: '人机交互研究', en: 'HCI Research' },
  categoryType: 'hci-research',
  tags: ['Children', 'Music', 'Creation', 'AI', 'Generative AI'],
  year: 2026,
  role: 'Project Lead',
  technologies: ['AI Music Generation', 'Interaction Design', 'Figma'],
  shapeType: 'circle',
  accentColor: 'yellow',
  featured: true,
  demoUrl: 'https://singpal.vercel.app/',
  awards: [
    { zh: '腾讯 AI 音乐黑客松', en: 'Tencent AI Music Hackathon' },
  ],
};
