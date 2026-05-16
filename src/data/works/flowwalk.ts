import { Work } from '../../types/work';

// 后续如果要替换最近新增模块里的图片，优先改这里的路径
const flowwalkSectionImages = {
  painPointsSection: {
    card1: '/images/flowwalk/xz1.png',
    card2: '/images/flowwalk/xz2.png',
  },
  designPositioningSection: {
    map1: '/images/flowwalk/dw1.png',
    map2: '/images/flowwalk/dw2.png',
    map3: '/images/flowwalk/dw3.png',
    map4: '/images/flowwalk/dw4.png',
    map5: '/images/flowwalk/dw5.png',
    map6: '/images/flowwalk/dw6.png',
  },
  painToFeatureSection: {
    pain1: '/images/flowwalk/zj1.png',
    pain2: '/images/flowwalk/zj2.png',
    pain3: '/images/flowwalk/zj3.png',
  },
} as const;

export const flowwalk: Work = {
  id: '1',
  title: { zh: 'FlowWalk-AR + AI 户外正念步行疗愈系统', en: 'FlowWalk' },

  // ========== Overview 区块 ==========
  thumbnail: '/images/flowwalk/thumb.png',
  images: [
    '/images/flowwalk/detail-1.png',
    '/images/flowwalk/detail-2.png',
    '/images/flowwalk/detail-3.png',
    '/images/flowwalk/detail-4.png',
    '/images/flowwalk/detail-5.png',
    '/images/flowwalk/detail-16.png',
  ],

  // 大字内容（主标题）
  description: { zh: 'FlowWalk-AR + AI 户外正念步行疗愈系统', en: 'FlowWalk — AR + AI Outdoor Mindful Walking Healing System' },

  // 小字内容（项目简介）
  contentSections: [
    {
      title: 'Overview',
      content: [
        { type: 'small', text: { zh: '在快节奏的现代社会中，工作与生活压力日益加剧，焦虑情绪逐渐成为年轻一代的普遍体验，人们对于身心放松与情绪调节的需求愈发迫切。本项目汲取当下流行的 "citywalk（城市漫步）" 理念，意在将"散步"这一简单却富有疗愈力量的行为重新融入人们的日常。我们结合了散步、呼吸步伐引导，AI对话等多元功能，鼓励年轻人走出空内，融入大自然的怀抱，享受生活的每一份美好。让我们一起步入户外，探索周遭的世界，寻找那些在忙碌生活中被忽略的小确堂，让每一次的脚步都成为心灵的治愈之旅。我们希望这是一款15-30分钟以内的正念步行疗愈，帮助用户在这个快节奏生活中，能够感受自然以及自己，鼓励年轻人走出空内，融入大自然的怀抱，享受生活的每一份美好。**应用已上架 Rokid AR 应用商店**', en: 'In today\'s fast-paced society, work and life pressures are intensifying, and anxiety has gradually become a common experience among the younger generation. The need for physical and mental relaxation and emotional regulation has become increasingly urgent. This project draws on the currently popular "citywalk" concept, aiming to reintegrate the simple yet healing act of "walking" into people\'s daily lives. We combine walking, breathing and pace guidance, AI dialogue, and other diverse functions to encourage young people to step outdoors, embrace nature, and enjoy every bit of beauty life has to offer. Let\'s step outside together, explore the world around us, and find those small moments of happiness overlooked in busy lives, making every step a healing journey for the soul. We envision this as a 15-30 minute mindful walking healing experience, helping users feel nature and themselves in this fast-paced life, encouraging young people to step outdoors, embrace nature, and enjoy every bit of beauty life has to offer. **The app has been published on the Rokid AR App Store**' } },
      ]
    }
  ],

  // ========== Details 区块 ==========
  detailsIntro: {
    title: { zh: '什么是正念步行？', en: 'What is Mindful Walking?' },
    description: { zh: '《中国城镇居民心理健康白皮书》发布的数据，显示着居民心理亚健康状态与心理问题的改善已经迫在眉睫，疗愈也因此成为了当前迫切的需要。越来越多年轻人选择在城市绿道公园中散步放松心情焦虑.然而在散步过程中很难进一步与自然进行深入连接，年轻人想有更疗愈作用的散步但不知道如何进行，对此我们希望通过我们的应用**让人们体验更有意义的行走，在步行中实现与自然的深度连接与身心疗愈。**\n\n对于人们来说，规律的运动是提升健康的首要途径，而放松身心和缓解压力是他们对运动的核心需求。这些需求表明，他们希望通过运动提升身体素质，同时借助运动实现身心放松，从而形成良性互动。通过这种运动和放松的有机结合，激活身体机能、构筑压力缓冲带，最终实现高品质的健康生活。**步行"作为低门槛的运动形式，结合"正念放松"的引导，既可增强体质，又可释放压力。尤其适用于现代人日常生活中的微型疗愈场景（Citywalk、通勤、校园、社区等）**\n\n正念行走是一种结合正念冥想与日常步行的练习方法。正念的核心是「全然地活在当下」，而通过步行，我们可以更加自然地将注意力集中于脚步、身体的运动以及周围的环境。与普通的散步不同，正念行走要求你主动观察自己的感受与行为，而不是让思想陷入无意识的杂念中。我们通过桌面调研了解到目前的正念步行主要有以下五个步骤', en: 'Data released in the "China Urban Residents Mental Health White Paper" shows that improving residents\' sub-optimal mental health and psychological issues has become urgent, and healing has therefore become a pressing current need. More and more young people choose to walk in urban greenway parks to relax and relieve anxiety. However, during walks, it is difficult to establish deeper connections with nature. Young people want more therapeutic walks but don\'t know how to proceed. In response, we hope our app **enables people to experience more meaningful walking, achieving deep connection with nature and physical-mental healing during walking.**\n\nFor people, regular exercise is the primary way to improve health, and relaxing the body and mind and relieving stress are their core needs for exercise. These needs indicate that they hope to improve physical fitness through exercise while achieving physical and mental relaxation, thereby forming a positive interaction. Through this organic combination of exercise and relaxation, body functions are activated, a stress buffer is built, and ultimately high-quality healthy living is achieved. **"Walking," as a low-barrier exercise form, combined with "mindful relaxation" guidance, can both strengthen physical fitness and release stress. It is especially suitable for micro-healing scenarios in modern people\'s daily lives (Citywalk, commuting, campus, community, etc.)**\n\nMindful walking is a practice method that combines mindfulness meditation with daily walking. The core of mindfulness is "being fully present in the moment," and through walking, we can more naturally focus our attention on footsteps, body movement, and the surrounding environment. Unlike ordinary walking, mindful walking requires you to actively observe your feelings and behaviors rather than letting your thoughts fall into unconscious distractions. Through desktop research, we learned that current mindful walking mainly has the following five steps.' },
  },

  // 图片描述（每张图片下方的小字内容）
  imageDescriptions: [
    { zh: '', en: '' }, // detail-1.png (Hero 大图，不需要描述)
    { zh: '如果用户选择了一段 15 分钟的正念步行，系统会按照图中的时间线将整个体验拆分为 8 个连续环节，并通过 呼吸、自然声音、环境感知与简单交互 逐步引导用户进入放松状态。首先是 1 分钟的整理状态，通过呼吸节奏与感官提示帮助用户从日常状态切换到步行体验中；接着进入 2 分钟的觉察步伐，引导用户将注意力放回脚步、速度与身体移动本身；随后在 2 分钟的觉察脚步感觉 中，进一步关注与地面接触时的细微身体反馈。到中段，系统会安排 2 分钟的宽景身体感觉 与 2 分钟的觉察呼吸，让用户从局部身体感受扩展到更整体的身体状态，并借助呼吸与自然声音建立更稳定的觉察节奏。之后进入 5 分钟的觉察自然，这是整个流程中占比最长的一段，用户会更多地把注意力投向周围环境中的树木、风、光线和声音，与自然场景建立联系。接近尾声时，系统用 1 分钟的分心找回 帮助用户在注意力游离时重新回到当下，最后再用 1 分钟的结束整理 对整个体验进行收束，让用户从步行状态平稳回到日常状态', en: 'If the user selects a 15-minute mindful walk, the system divides the entire experience into 8 consecutive stages according to the timeline shown, guiding users into a relaxed state through breathing, natural sounds, environmental awareness, and simple interactions. First is 1 minute of settling, using breathing rhythm and sensory cues to help users transition from daily state to the walking experience. Then comes 2 minutes of pace awareness, guiding users to return their attention to footsteps, speed, and body movement itself. Next is 2 minutes of foot sensation awareness, focusing further on the subtle body feedback from ground contact. In the middle section, the system schedules 2 minutes of broad body sensation and 2 minutes of breath awareness, allowing users to expand from localized body feelings to a more holistic body state, establishing a more stable awareness rhythm through breathing and natural sounds. Then comes 5 minutes of nature awareness, the longest proportion of the entire flow, where users direct more attention to surrounding trees, wind, light, and sounds, building connections with the natural scene. Near the end, the system uses 1 minute of distraction recovery to help users return to the present when attention wanders, and finally 1 minute of closing integration to wrap up the entire experience, allowing users to smoothly transition from the walking state back to daily life.' },
    { zh: '在正念步行过程中，用户可以随时拍下此刻吸引自己注意的自然物或环境片段，例如树叶、花朵、光影、道路纹理或远处景物；随后，AI 疗愈师 会基于用户拍摄的图像内容，结合当前步行情境与用户状态，生成具有陪伴感和引导性的疗愈语言，帮助用户从"看见一个事物"进一步进入"觉察它带来的情绪、联想与身体感受"的过程。也就是说，这一功能并不只是简单地对图片进行识别，而是让 AI 疗愈师 像一个随行的引导者，根据用户真正注意到的自然元素展开即时对话与引导，使正念体验更加个性化、情境化，也更能强化用户与自然环境之间的连接感与疗愈感。', en: 'During mindful walking, users can take photos at any time of natural objects or environmental fragments that catch their attention, such as leaves, flowers, light and shadow, road textures, or distant scenery. Subsequently, the AI Healing Companion generates companion-like and guiding healing language based on the image content captured by the user, combined with the current walking context and user state, helping users move from "seeing something" further into the process of "observing the emotions, associations, and body feelings it brings." In other words, this feature is not simply about image recognition but allows the AI Healing Companion to act like an accompanying guide, engaging in real-time dialogue and guidance based on the natural elements the user actually notices, making the mindfulness experience more personalized, contextualized, and better at strengthening the user\'s sense of connection and healing with the natural environment.' },
    { zh: '', en: '' },
    { zh: '', en: '' },
    { zh: '', en: '' },
  ],

  // 图片上方的大字+小字内容
  detailTexts: [
    {
     position: 2,
     largeText: { zh: '主要功能和界面设计', en: 'Core Features and Interface Design' },
     smallText: { zh: 'FlowWalk 的核心起点，是让正念步行不再是一套固定流程，而是从用户自身的状态与意图出发生成体验内容。用户可以先通过 语音输入 表达这一次步行的目标，例如缓解焦虑、放松身心、整理思绪等，系统再基于这些输入生成与之适配的 个性化正念引导词。这些引导内容不会一次性全部出现，而是被组织进步行过程中的多个阶段，包括 整理状态、觉察身体感觉、觉察呼吸、分心拉回、觉察步伐、觉察周围环境、感受脚步、结束整理 等，使整段体验既具有结构，也能保持与用户当下情绪的贴合。\n\n在正式进入步行前，系统还会根据用户的 当前位置 与 疗愈时长 主动生成适合正念步行的路线。整体设计优先考虑 公园、绿道、树荫步道等自然相关场所，并尽量规避车流较多或过于复杂的路径，让用户更容易进入平静、稳定的步行状态。界面上既支持点击 路线生成 来获得推荐，也保留了 直接开始 的入口，照顾那些已经有既定步行路线或希望自由探索的用户。这样的设计让 FlowWalk 不只是一个"冥想内容播放器"，而是先从空间层面为疗愈体验打下基础。\n\n当用户真正开始行走后，系统会通过 实时路线指引 将导航与正念体验结合起来。在视野中，用户可以持续看到当前需要 直行多少距离、何时转向、疗愈还剩多少时间 等关键信息，同时系统也会在恰当时机穿插简短的感受性引导，例如邀请用户描述空气的味道、树影的变化或眼前景色带来的联想。这样一来，用户既不会因为担心迷路而从正念状态中抽离，也不会陷入过度机械的"跟着指令走路"，而是在 方向明确 与 感受开放 之间维持平衡。\n\n为了进一步增强沉浸感，FlowWalk 在界面设计中加入了基于 AR 的呼吸与步伐视觉引导。在呼吸层面，系统利用 风、花瓣等自然元素 的浮动、扩散与收拢效果，引导用户完成吸气与呼气，并通过文字变化强化呼吸节奏的感知；在步伐层面，则由一个带有陪伴感的小精灵在前方引导，并留下可跟随的脚印轨迹，帮助用户感受步速、调整节奏。相较于抽象的冥想指令，这种把身体练习转化为自然化、可视化界面的方式，更容易让用户在行走中自然进入状态。\n\n除了路线与节奏引导，FlowWalk 还将用户的心理状态进一步融入环境互动之中。系统会在疗愈进行到一半时询问用户当前的压力程度，并根据用户对 轻松、轻度、中度、重度 等状态的选择，在前方生成不同的虚拟自然物。例如，当用户感到压力较高时，路径上会出现石块，用户需要通过 步伐跨越 去完成前进，这一动作隐喻着跨越障碍与压力；而在相对轻松的状态下，系统则会以 鲜花、花瓣飘落 等更柔和的方式陪伴用户继续步行。这样的界面设计不只是装饰环境，而是把情绪转译成可感知、可参与的空间体验。\n\n当疗愈步行结束后，系统还会通过 AI 疗愈总结与反思 帮助用户回顾这段经历。它会整合用户沿途拍摄记录的 自然物照片、与疗愈助手之间的 对话内容 以及步行中的体验片段，生成一份可回看的疗愈记录。在界面中，不同植物还会被赋予相应的情绪象征与解释，例如 枫叶、金花菊、银杏、小雏菊 等分别对应不同的心理意涵。由此，FlowWalk 将一次短暂的步行延展为一个可以被保存、理解与再次回望的疗愈过程，使界面不仅服务于"当下的引导"，也服务于"事后的整理与反思"。', en: 'FlowWalk\'s core starting point is to make mindful walking not a fixed process but an experience generated from the user\'s own state and intentions. Users can first express their walking goal through voice input, such as relieving anxiety, relaxing body and mind, or organizing thoughts. The system then generates personalized mindfulness guidance words based on these inputs. These guided contents don\'t appear all at once but are organized into multiple stages during the walk, including settling, body sensation awareness, breath awareness, distraction recovery, pace awareness, environmental awareness, foot feeling, and closing integration, making the entire experience both structured and attuned to the user\'s current emotions.\n\nBefore officially starting the walk, the system proactively generates routes suitable for mindful walking based on the user\'s current location and healing duration. The overall design prioritizes parks, greenways, tree-lined paths, and other nature-related locations, avoiding routes with heavy traffic or excessive complexity, making it easier for users to enter a calm, stable walking state. The interface supports both clicking "generate route" for recommendations and "start directly" for those who already have established walking routes or prefer free exploration. This design makes FlowWalk not just a "meditation content player" but a system that lays the foundation for the healing experience at the spatial level.\n\nWhen the user actually starts walking, the system combines navigation with the mindfulness experience through real-time route guidance. In the field of view, users can continuously see key information such as how far to walk straight, when to turn, and how much healing time remains, while the system intersperses brief feeling-based guidance at appropriate moments, such as inviting users to describe the scent of the air, the changes in tree shadows, or the associations brought by the scenery ahead. This way, users neither disengage from the mindfulness state due to fear of getting lost nor fall into an overly mechanical "following instructions to walk" mode, but rather maintain a balance between clear direction and open perception.\n\nTo further enhance immersion, FlowWalk incorporates AR-based breathing and pace visual guidance in the interface design. At the breathing level, the system uses floating, spreading, and gathering effects of natural elements such as wind and petals to guide users through inhaling and exhaling, reinforcing breathing rhythm perception through text changes. At the pace level, a companion-like little sprite guides ahead and leaves followable footprint trails, helping users feel their pace and adjust rhythm. Compared to abstract meditation instructions, this approach of converting body exercises into natural, visual interfaces makes it easier for users to naturally enter the state while walking.\n\nBeyond route and rhythm guidance, FlowWalk further integrates users\' psychological states into environmental interactions. The system asks users about their current stress level midway through the healing session and generates different virtual natural objects ahead based on users\' selection of relaxed, mild, moderate, or severe states. For example, when users feel high stress, stones appear on the path, requiring users to stride over them to continue — this action metaphorically represents overcoming obstacles and stress. In a relatively relaxed state, the system accompanies users with softer methods such as flowers and falling petals. Such interface design is not just environmental decoration but translates emotions into perceivable and participatory spatial experiences.\n\nAfter the healing walk ends, the system also helps users review the experience through AI healing summary and reflection. It integrates natural object photos taken along the way, conversation content with the healing assistant, and experience fragments during the walk to generate a reviewable healing record. In the interface, different plants are also given corresponding emotional symbols and interpretations, such as maple leaves, coneflowers, ginkgo, and daisies, each corresponding to different psychological meanings. Thus, FlowWalk extends a brief walk into a healing process that can be saved, understood, and revisited, making the interface serve not only "in-the-moment guidance" but also "post-hoc organization and reflection."' },
    },
    {
     position: 3,
     largeText: { zh: 'AI 疗愈师工作流', en: 'AI Healing Companion Workflow' },
     smallText: { zh: 'AI 疗愈师会结合用户此次正念步行的意图，以及用户在过程中拍摄的画面或输入的语音内容，生成更贴合当下情境的个性化心灵疗愈内容。为了让生成的正念引导词更具针对性与疗愈感，我们进一步建立了一个 正念知识库，其内容主要来源于三部分：一是 正念相关播客，二是 正念与疗愈相关书籍，三是 正念疗愈师工作坊中的语录与经验表达。基于这些知识内容，AI 疗愈师能够将用户眼前的自然环境转化为可被感受、联想和回应的正念提示，例如从一片叶子的层次、光影的变化、植物的生长状态中，引出与放松、接纳、自我关照相关的语言，从而让用户与环境之间建立更细腻、更具有疗愈意味的连接。', en: 'The AI Healing Companion combines the user\'s intention for this mindful walk with images captured or voice content input during the process to generate personalized spiritual healing content more attuned to the current context. To make the generated mindfulness guidance more targeted and healing, we further established a Mindfulness Knowledge Base, with content mainly sourced from three areas: first, mindfulness-related podcasts; second, mindfulness and healing-related books; third, quotes and experience expressions from mindfulness healer workshops. Based on this knowledge content, the AI Healing Companion can transform the user\'s surrounding natural environment into mindfulness prompts that can be felt, associated, and responded to — for example, drawing out language related to relaxation, acceptance, and self-care from the layers of a leaf, changes in light and shadow, or the growth state of plants, thereby establishing a more nuanced and healing connection between the user and the environment.' },
    },
    {
     position: 4,
     largeText: { zh: '用户使用流程', en: 'User Usage Flow' },
     smallText: { zh: '首先，用户会先设定本次疗愈的 时长，通常为 10–15 分钟；随后系统根据用户当前位置推荐附近更适合步行疗愈的 自然相关路线。在正式开始之后，界面会通过 呼吸引导与实时导航 帮助用户进入状态，例如利用风的动态效果配合呼吸节奏，并结合路径提示辅助前进；同时，系统还会用 虚拟脚步 来引导用户的步频与步伐节奏。步行到中段时，FlowWalk 会询问用户当前的 压力状态，并根据不同压力等级生成不同的互动内容，例如让用户通过 跨越石块 完成情绪隐喻性的步行任务，并以鲜花等奖励元素回应用户。接着，用户在步行过程中还可以通过 拍照 记录当下引发感受的自然场景，由 AI 疗愈师 基于画面生成反思性引导语。最后，系统会整合这些拍摄内容与疗愈过程，生成一份可回看的 步行总结，帮助用户回顾这次正念疗愈旅程。', en: 'First, users set the duration of the healing session, typically 10-15 minutes. The system then recommends nearby nature-related routes more suitable for mindful walking based on the user\'s current location. After officially starting, the interface helps users enter the state through breathing guidance and real-time navigation, such as using wind dynamic effects to coordinate with breathing rhythm combined with path prompts for forward guidance. At the same time, the system uses virtual footprints to guide users\' step frequency and pace rhythm. Midway through the walk, FlowWalk asks users about their current stress state and generates different interactive content based on different stress levels, such as having users complete metaphorically emotional walking tasks by stepping over stones, and rewarding users with flowers and other reward elements. Then, during the walk, users can also record natural scenes that trigger feelings by taking photos, with the AI Healing Companion generating reflective guidance based on the images. Finally, the system integrates these captured contents and the healing process to generate a reviewable walking summary, helping users look back on this mindful healing journey.' },
    },
    {
     position: 5,
     largeText: { zh: '作品参展', en: 'Exhibitions' },
     smallText: { zh: '2025 Rokid 应用高校挑战赛，Rokid生态大会暨Spatial Joy 2025全球AR&AI开发大赛决赛，DIA 中国设计智造大赛 ', en: '2025 Rokid App University Challenge, Rokid Ecosystem Conference & Spatial Joy 2025 Global AR & AI Development Competition Finals, DIA China Design Intelligence Award' },
    },
  ],
  detailMedia: [],
  detailModules: [],

  // ========== 项目信息 ==========
  category: { zh: 'HCI 研究', en: 'HCI Research' },
  categoryType: 'hci-research',
  tags: ['AR+AI', 'Mindful Walking', 'Smart Glasses', 'Nature-Based Healing'],
  year: 2025,
  role: 'Project Lead',
  technologies: ['AR+AI', 'AI', 'Smart Glasses', 'Nature-Based Healing'],
  shapeType: 'circle',
  accentColor: 'red',
  featured: true,
  videoUrl: 'https://www.youtube.com/embed/GDxW5CeUMCY',
  awards: [
    { zh: '2025 Rokid 全国高校 AR 应用挑战赛 — 金奖', en: '2025 Rokid University AR Application Challenge — Gold Award' },
    { zh: 'Spatial Joy 2025 全球 AR/AI 开发者大赛总决赛 — 铜奖', en: 'Spatial Joy 2025 Global AR/AI Developer Competition Finals — Bronze Award' },
    { zh: '2025 DIA 中国设计智造大奖创新孵化 — 铜奖', en: '2025 DIA China Design Intelligence Award Innovation Incubation — Bronze Award' },
  ],

  // ========== Steps Section ==========
  stepsSection: {
    position: 1,
    steps: [
      {
        stepNumber: 'STEP 01',
        icon: '/images/flowwalk/steps/step-1-icon.png',
        title: { zh: '找一条合适疗愈的路线', en: 'Find a suitable route for healing' },
        description: { zh: '挑选一个合适的时间和地点，比如清晨的公园，空气清新，鸟语花香，规划好自己的路线时间.', en: 'Choose a suitable time and place, such as a park in the early morning with fresh air and birdsong, and plan your route and time.' },
      },
      {
        stepNumber: 'STEP 02',
        icon: '/images/flowwalk/steps/step-2-icon.png',
        title: { zh: '呼吸和步伐的调节', en: 'Breathing and pace adjustment' },
        description: { zh: '呼吸与步伐的配合，吸气时落下你的左脚，呼气时落下你的右脚.', en: 'Coordinate breathing with pace — lower your left foot as you inhale, lower your right foot as you exhale.' },
      },
      {
        stepNumber: 'STEP 03',
        icon: '/images/flowwalk/steps/step-3-icon.png',
        title: { zh: '感受当下以及周围环境', en: 'Feel the present moment and surroundings' },
        description: { zh: '将你的注意力集中在脚与地面的接触上，细致的感受每一步带来的摩擦力，体验地面的质感.', en: 'Focus your attention on the contact between your feet and the ground, carefully feeling the friction of each step and experiencing the texture of the ground.' },
      },
      {
        stepNumber: 'STEP 04',
        icon: '/images/flowwalk/steps/step-4-icon.png',
        title: { zh: '与自然环境之间的联系', en: 'Connect with the natural environment' },
        description: { zh: '如果有疗愈师，疗愈师鼓励参与者思考："这个自然物与你的情绪有什么关联？"', en: 'If there is a healing guide, the guide encourages participants to reflect: "What connection does this natural object have with your emotions?"' },
      },
      {
        stepNumber: 'STEP 05',
        icon: '/images/flowwalk/steps/step-5-icon.png',
        title: { zh: '回顾记录', en: 'Review and record' },
        description: { zh: '疗愈的日记记录，回忆自己在在这个过程中的感受，看到了什么，有什么感觉.', en: 'Keep a healing diary, recalling your feelings during the process, what you saw, and what sensations you experienced.' },
      },
    ],
  },

  // ========== Collage Galleries ==========
  collageGalleries: [
    {
      position: 2,
      images: [
        { src: '/images/flowwalk/collage-1.png', alt: '【图片1描述】', rotation: -5 },
        { src: '/images/flowwalk/collage-2.png', alt: '【图片2描述】', rotation: 3 },
        { src: '/images/flowwalk/collage-3.png', alt: '【图片3描述】', rotation: -2 },
        { src: '/images/flowwalk/collage-4.png', alt: '【图片4描述】', rotation: 4 },
        { src: '/images/flowwalk/collage-5.png', alt: '【图片5描述】', rotation: -3 },
        { src: '/images/flowwalk/collage-6.png', alt: '【图片6描述】', rotation: 2 },
      ],
    },
  ],

  // ========== Pain Points Section ==========
  painPointsSection: {
    position: 1,
    introText: { zh: '然而目前正念步行存在以下的一些困难，也使得正念步行这类疗愈活动没有被大范围的传播', en: 'However, mindful walking currently faces the following difficulties, which has prevented this type of healing activity from being widely disseminated.' },
    items: [
      {
        label: { zh: 'Pain Point 01', en: 'Pain Point 01' },
        title: { zh: '准备过程繁琐', en: 'Complicated preparation process' },
        paragraphs: [
          { zh: '在开始之前，需要进行大量的准备工作。这不仅仅是简单的身体准备，还包括深层次的基础建设。', en: 'Before starting, extensive preparation is needed. This is not just simple physical preparation but includes deep foundational work.' },
          { zh: '需要与治疗师进行详细的规划，确定每一步的节奏。此外，路径规划也至关重要，这直接影响了整个体验的连贯性与效果。', en: 'Detailed planning with a therapist is needed to determine the rhythm of each step. Additionally, route planning is crucial as it directly affects the continuity and effectiveness of the entire experience.' },
        ],
        image: flowwalkSectionImages.painPointsSection.card1,
        imageAlt: 'FlowWalk pain point 1',
      },
      {
        label: { zh: 'Pain Point 02', en: 'Pain Point 02' },
        title: { zh: '门槛较高', en: 'High barrier to entry' },
        paragraphs: [
          { zh: '对于初学者来说，任务的初始难度相对较大。这要求用户具备一定的控制能力，包括对步频与呼吸的精准掌握。', en: 'For beginners, the initial difficulty of the task is relatively high. This requires users to have certain control abilities, including precise mastery of step frequency and breathing.' },
          { zh: '同时，视觉化（Visualization）的过程也需要高度的专注。这并不是一蹴而就的技能，而是需要通过不断的练习和感悟才能逐渐掌握的深层体验。', en: 'At the same time, the visualization process also requires high concentration. This is not an instantly acquired skill but a deep experience that requires continuous practice and understanding to gradually master.' },
        ],
        image: flowwalkSectionImages.painPointsSection.card2,
        imageAlt: 'FlowWalk pain point 2',
      },
    ],
  },

  // ========== Design Positioning Section ==========
  designPositioningSection: {
    position: 1,
    heading: { zh: '设计定位理念', en: 'Design Positioning Concept' },
    headingDescription: { zh: '目前市场上AR眼镜和正念相关的产品较少，存在较大的市场空白。现有方案主要包括 手机冥想 App、VR 沉浸式冥想、博客引导内容 以及 疗愈师引导 等类型，它们分别在便捷性、沉浸感、陪伴支持或内容获取上具有一定优势，但整体上仍然更多聚焦于 屏幕媒介、室内环境或静态引导。尤其值得注意的是，当前市场中的软件应用真正能够将 **疗愈体验与户外自然环境结合 ** 的产品形式仍然较少，大多数方案并没有充分利用自然场景、身体感知与环境互动带来的放松价值（除了花费较高的经济成本去在疗愈师带领下）。\n\n基于以上分析，我们将设计定位在 **AI + AR 正念步行系统**，通过 AI 疗愈师提供个性化服务，通过 AR 引导用户进行户外正念步行。', en: 'Currently, there are relatively few products related to AR glasses and mindfulness on the market, presenting a significant market gap. Existing solutions mainly include mobile meditation apps, VR immersive meditation, podcast-guided content, and healer-guided sessions. They each have certain advantages in convenience, immersion, companion support, or content access, but overall still focus more on screen media, indoor environments, or static guidance. It is particularly noteworthy that software applications on the current market that truly **combine healing experiences with outdoor natural environments** remain scarce, and most solutions do not fully utilize the relaxation value brought by natural scenes, body perception, and environmental interaction (except for the high economic cost of being guided by a healing therapist).\n\nBased on the above analysis, we position our design as an **AI + AR mindful walking system**, providing personalized services through an AI healing companion and guiding users in outdoor mindful walking through AR.' },
    verticalAxisLabel: { zh: '个性化', en: 'Personalization' },
    horizontalAxisLabel: { zh: '沉浸感', en: 'Immersion' },
    mapItems: [
      {
        title: { zh: '智能分析 · 情绪捕捉', en: 'Smart Analysis · Emotion Capture' },
        image: flowwalkSectionImages.designPositioningSection.map1,
        imageAlt: 'FlowWalk smart sensing concept',
        variant: 'portrait',
        x: 20,
        y: 31,
      },
      {
        title: { zh: '正念漫步 · 深度冥想', en: 'Mindful Walking · Deep Meditation' },
        image: flowwalkSectionImages.designPositioningSection.map2,
        imageAlt: 'FlowWalk mindful walking scene',
        variant: 'landscape',
        x: 42,
        y: 36,
      },
      {
        title: { zh: '正念漫步 · 深度冥想', en: 'Mindful Walking · Deep Meditation' },
        image: flowwalkSectionImages.designPositioningSection.map3,
        imageAlt: 'FlowWalk immersive mindfulness scene',
        variant: 'landscape',
        x: 69,
        y: 42,
      },
      {
        title: { zh: '智能分析 · 情绪捕捉', en: 'Smart Analysis · Emotion Capture' },
        image: flowwalkSectionImages.designPositioningSection.map4,
        imageAlt: 'FlowWalk emotion capture concept',
        variant: 'portrait',
        x: 27,
        y: 76,
      },
      {
        title: { zh: 'AR 交互 · 空间引导', en: 'AR Interaction · Spatial Guidance' },
        image: flowwalkSectionImages.designPositioningSection.map5,
        imageAlt: 'FlowWalk AR guidance concept',
        variant: 'wide',
        x: 56,
        y: 61,
      },
      {
        title: { zh: 'AR 交互 · 空间引导', en: 'AR Interaction · Spatial Guidance' },
        image: flowwalkSectionImages.designPositioningSection.map6,
        imageAlt: 'FlowWalk spatial interaction concept',
        variant: 'wide',
        x: 74,
        y: 79,
      },
    ],
    visionLabel: { zh: 'Product Vision', en: 'Product Vision' },
    visionTitle: { zh: 'AI + AR 正念漫步系统', en: 'AI + AR Mindful Walking System' },
    visionDescription: [
      { zh: '融合人工智能与增强现实技术，为都市人群打造的沉浸式心理疗愈体验。', en: 'An immersive psychological healing experience for urban populations, integrating artificial intelligence and augmented reality technologies.' },
      { zh: '通过精准的情绪识别与空间音频导引，在行走中实现内在宁静。', en: 'Achieving inner peace through walking with precise emotion recognition and spatial audio guidance.' },
    ],
    attributesLabel: { zh: 'Core Attributes', en: 'Core Attributes' },
    attributes: [
      {
        icon: 'emotion',
        title: { zh: '情绪感应疗愈师', en: 'Emotion-Sensing Healing Companion' },
        description: { zh: '由资深心理治疗师与AI算法共同构建的交互逻辑。', en: 'Interaction logic co-constructed by experienced psychotherapists and AI algorithms.' },
      },
      {
        icon: 'duration',
        title: { zh: '15-30 分钟疗程', en: '15-30 Minute Sessions' },
        description: { zh: '针对碎片化时间设计的快速减压方案。', en: 'Quick stress-relief solutions designed for fragmented time.' },
      },
      {
        icon: 'space',
        title: { zh: '场景化空间交互', en: 'Scene-Based Spatial Interaction' },
        description: { zh: '利用AR技术将普通环境转化为疗愈花园。', en: 'Using AR technology to transform ordinary environments into healing gardens.' },
      },
    ],
  },

  painToFeatureSection: {
    position: 1,
    painHeading: { zh: '痛点总结', en: 'Pain Point Summary' },
    painHeadingDescription: { zh: '为了更加深入研究，我们进行了 6位正念步行疗愈师的专家访谈，通过线上共创工作坊的形式与他们一起梳理了正念步行的核心步骤和存在的痛点，最终总结出了以下三个主要痛点，以及共同梳理正念步行的带领流程正念步行的原则和策略，正念引导词分享', en: 'For deeper research, we conducted expert interviews with 6 mindful walking healing therapists, collaborating with them through online co-creation workshops to organize the core steps and existing pain points of mindful walking, ultimately summarizing the following three main pain points, as well as collaboratively organizing the leading process, principles, and strategies of mindful walking, and sharing mindfulness guidance words.' },
    featureHeading: { zh: '主要功能', en: 'Core Features' },
    items: [
      {
        painLabel: { zh: 'Pain Point 01', en: 'Pain Point 01' },
        painTitle: { zh: '需要花很多时间找合适的路线', en: 'Requires a lot of time to find suitable routes' },
        painDescription: { zh: '用户在计划正念行走时，常因为不熟悉周边绿植环境而耗费大量精力在地图筛选上。', en: 'When planning mindful walking, users often spend considerable energy on map filtering because they are unfamiliar with the surrounding greenery environment.' },
        painImage: flowwalkSectionImages.painToFeatureSection.pain1,
        painImageAlt: 'FlowWalk route selection pain point',
        featureIcon: 'route',
        featureTitle: { zh: '生成推荐正念疗愈路线', en: 'Generate recommended mindful healing routes' },
        featureDescription: { zh: '快速提供给用户合适正念步行疗愈的路线，系统将自动识别周边的公园、绿道等高植被覆盖区域。', en: 'Quickly provides users with routes suitable for mindful walking healing. The system automatically identifies nearby parks, greenways, and other high-vegetation coverage areas.' },
      },
      {
        painLabel: { zh: 'Pain Point 02', en: 'Pain Point 02' },
        painTitle: { zh: '正念呼吸和步行学习门槛高', en: 'High learning barrier for mindful breathing and walking' },
        painDescription: { zh: '传统教程过于抽象，初学者难以在行走过程中准确把握呼吸节奏与步伐的配合。', en: 'Traditional tutorials are too abstract, making it difficult for beginners to accurately grasp the coordination of breathing rhythm and pace during walking.' },
        painImage: flowwalkSectionImages.painToFeatureSection.pain2,
        painImageAlt: 'FlowWalk breathing guidance pain point',
        featureIcon: 'breath',
        featureTitle: { zh: '呼吸和步伐视觉增强引导', en: 'Visual enhanced breathing and pace guidance' },
        featureDescription: { zh: '通过视觉动效来同步引导用户的步伐和呼吸频率，视角化的呈现显著降低了用户的认知负荷。', en: 'Uses visual animations to synchronously guide users\' pace and breathing frequency. The visualized presentation significantly reduces users\' cognitive load.' },
      },
      {
        painLabel: { zh: 'Pain Point 03', en: 'Pain Point 03' },
        painTitle: { zh: '难以进行自然觉察', en: 'Difficult to engage in nature observation' },
        painDescription: { zh: '在行走中容易受外界干扰分神，缺乏即时的引导来帮助用户专注于当下的环境触感。', en: 'During walking, it is easy to be distracted by external interference, lacking immediate guidance to help users focus on present environmental sensations.' },
        painImage: flowwalkSectionImages.painToFeatureSection.pain3,
        painImageAlt: 'FlowWalk nature awareness pain point',
        featureIcon: 'agent',
        featureTitle: { zh: '识别自然环境的疗愈 Agent', en: 'Nature-recognizing healing Agent' },
        featureDescription: { zh: '基于 Rokid AR 拍照识别，疗愈师 Agent 能根据景物发起对话，引导用户进行更深度的自然观察与思考。', en: 'Based on Rokid AR photo recognition, the healing Agent can initiate conversations based on scenery, guiding users toward deeper nature observation and reflection.' },
      },
    ],
  },

};

flowwalk.detailMedia = flowwalk.detailTexts?.map(({ position, largeText, smallText }) => ({
  position,
  largeText,
  smallText,
  variant: largeText || smallText ? 'withText' : 'default',
})) ?? [];

flowwalk.detailModules = [
  {
    position: flowwalk.stepsSection!.position,
    placement: 'beforeMedia',
    type: 'stepsSection',
    data: flowwalk.stepsSection!,
  },
  {
    position: flowwalk.painPointsSection!.position,
    placement: 'beforeMedia',
    type: 'painPointsSection',
    data: flowwalk.painPointsSection!,
  },
  {
    position: flowwalk.designPositioningSection!.position,
    placement: 'beforeMedia',
    type: 'designPositioningSection',
    data: flowwalk.designPositioningSection!,
  },
  {
    position: flowwalk.painToFeatureSection!.position,
    placement: 'beforeMedia',
    type: 'painToFeatureSection',
    data: flowwalk.painToFeatureSection!,
  },
  ...(flowwalk.collageGalleries?.map((gallery, index) => ({
    position: gallery.position,
    placement: 'betweenTextAndMedia' as const,
    type: 'collageGallery' as const,
    data: gallery,
    key: `collageGallery-${index}`,
  })) ?? []),
];
