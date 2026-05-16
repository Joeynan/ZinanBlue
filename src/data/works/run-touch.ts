import { Work } from '../../types/work';

export const runTouch: Work = {
  id: '9',
  title: { zh: 'RunTouch-盲人触摸跑步穿戴设计', en: 'RunTouch--Blind Runner Touch Wearable Design' },

  // ========== Overview 区块 ==========
  thumbnail: '/images/run-touch/thumb.png',
  images: [
    '/images/run-touch/detail-1.png',
    '/images/run-touch/detail-2.png',
    '/images/run-touch/detail-3.png',
    '/images/run-touch/detail-4.png',
    '/images/run-touch/detail-5.png',
    '/images/run-touch/detail-6.png',
    '/images/run-touch/detail-7.png',
    '/images/run-touch/detail-8.png',
    '/images/run-touch/detail-9.png',
    '/images/run-touch/detail-10.png',
    '/images/run-touch/detail-11.png',
    '/images/run-touch/detail-12.png',
    '/images/run-touch/detail-13.png',
    '/images/run-touch/detail-14.png',
  ],

  // YouTube 视频
  videoUrl: 'https://www.youtube.com/embed/eMNp9MSHfTE',

  // 大字内容（主标题）
  description: { zh: 'RunTouch—盲人触摸跑步穿戴设计', en: 'RunTouch — Touch-Based Wearable Design for Blind Runners' },

  // 小字内容（项目简介）
  contentSections: [
    {
      title: 'Overview',
      content: [
        { type: 'small', text: { zh: 'RunTouch 是一款为盲人跑者设计的可穿戴设备，核心功能是将视觉跑道信息实时转化为触觉反馈。用户通过手环摄像头感知前方路径、转弯方向以及障碍物位置，转化为具象的突触信号，帮助盲人感知前面的路线。当检测到障碍物时，设备会立即通过明显的触觉信号进行警示，帮助用户迅速做出反应，保障安全。相比传统的语音导航方式，触觉反馈更加即时、直观且不打扰用户听觉注意力，让用户能更专注地享受跑步过程。', en: 'RunTouch is a wearable device designed for blind runners. Its core function is to convert visual track information into real-time tactile feedback. Users perceive the path ahead, turn directions, and obstacle positions through a wristband camera, which are translated into concrete tactile signals to help blind runners sense the route ahead. When obstacles are detected, the device immediately alerts through noticeable tactile signals, helping users react quickly and ensuring safety. Compared to traditional voice navigation, tactile feedback is more immediate, intuitive, and does not interfere with the user\'s auditory attention, allowing users to focus more on enjoying the running experience.' } },
      ]
    }
  ],

  // ========== Details 区块 ==========
  detailsIntro: {
    title: { zh: '发现-盲人跑步现状', en: 'Discovery — The Current State of Blind Running' },
    description: { zh: '盲人跑步正在逐渐从少数人的特殊参与，发展为一个受到更多社会关注的公共运动议题。随着马拉松赛事和城市跑步活动的不断增加，越来越多的视障者开始进入跑步和马拉松场景，相关赛事支持与参与机会也随之提升。这说明视障群体对于体育锻炼和公共运动的需求是真实存在的，盲人跑步也正在成为包容性运动发展中的重要组成部分。\n\n然而，视障群体在跑步过程中仍面临较高门槛。许多盲人在尝试跑步时会首先遇到**心理障碍**，这种不安往往来自对未知环境、速度变化和安全风险的担忧；同时，由于长期缺乏稳定的体育锻炼，不少人的身体素质也限制了他们参与户外运动的可能性。目前盲人跑步大多仍依赖**陪跑员**协助完成，通常通过**牵引绳**建立连接，使盲人与领跑员在方向、速度和节奏上保持同步，因此跑步过程本质上是一种高度依赖协作与信任的运动方式。\n\n也正因为如此，盲人跑步并不只是"想跑就能跑"的简单行为，它背后还涉及**陪跑志愿者不足、联系机制不稳定、户外锻炼支持有限**等现实问题。许多视障者其实都希望参与更多户外体育活动，但真正阻碍他们开始跑步的，往往不是意愿本身，而是缺少合适的陪跑资源、缺少安全支持，以及缺少能够帮助他们建立稳定运动关系的连接方式。因此，盲人跑步不仅是一个运动参与问题，更是一个关于**陪伴协作、资源匹配与无障碍支持**的设计议题。', en: 'Blind running is gradually developing from a specialized activity for a few individuals into a public sports issue receiving more social attention. With the continuous increase in marathon events and urban running activities, more and more visually impaired people are entering running and marathon scenes, and related event support and participation opportunities have also increased accordingly. This shows that the visually impaired community has genuine needs for physical exercise and public sports, and blind running is becoming an important component in the development of inclusive sports.\n\nHowever, the visually impaired community still faces high barriers during running. Many blind people first encounter **psychological barriers** when attempting to run — this uneasiness often comes from concerns about unknown environments, speed changes, and safety risks. At the same time, due to long-term lack of stable physical exercise, many people\'s physical fitness also limits their ability to participate in outdoor sports. Currently, blind running mostly still relies on **running guides** for assistance, typically establishing connection through a **tether rope** to keep the blind person and the guide synchronized in direction, speed, and rhythm. Therefore, the running process is essentially a highly collaborative and trust-dependent form of exercise.\n\nPrecisely because of this, blind running is not simply a matter of "wanting to run and then running." It also involves real-world issues such as **insufficient running guide volunteers, unstable contact mechanisms, and limited outdoor exercise support**. Many visually impaired individuals actually want to participate in more outdoor sports activities, but what truly prevents them from starting to run is often not willingness itself, but the lack of suitable running guide resources, lack of safety support, and lack of connection methods that can help them establish stable exercise relationships. Therefore, blind running is not only a sports participation issue but also a design topic about **companion collaboration, resource matching, and accessibility support**.' },
  },

  // 图片描述
  imageDescriptions: [
    { zh: '', en: '' }, // detail-1.png (Hero 大图，不需要描述)
    { zh: '', en: '' },
    { zh: '', en: '' },
    { zh: '我们提出了一款结合多模态反馈（触觉、声学、振动）与高自主交互的智能跑步辅助系统 —— 让视障群体在无需陪跑的情况下，也能安全、独立自主地完成跑步活动。基于竞品分析，我们将产品定位为一款面向视障跑者的**智能跑步辅助系统**，核心强调**多模态反馈**与**更高自主性**。产品希望在不完全依赖传统陪跑员的前提下，通过结合**触觉、声学与振动**等多种反馈方式，帮助视障用户更清晰地感知方向、节奏与环境变化，从而获得更安全、自然且连续的跑步体验。相较于传统陪跑方式，我们提升了视障者在运动中的主动性；相较于复杂的机器人或无人机方案，我们则更注重产品的**可穿戴性、轻量化和日常可用性**。因此，本产品的定位并不是单纯替代陪跑员，而是构建一种兼具**独立性、安全性与包容性**的新型跑步辅助体验', en: 'We proposed a smart running assistive system combining multi-modal feedback (tactile, acoustic, vibration) with highly autonomous interaction — enabling visually impaired individuals to safely and independently complete running activities without a guide. Based on competitive analysis, we positioned the product as a **smart running assistive system** for visually impaired runners, with core emphasis on **multi-modal feedback** and **higher autonomy**. The product aims to help visually impaired users more clearly perceive direction, rhythm, and environmental changes through various feedback methods including **tactile, acoustic, and vibration**, without completely relying on traditional running guides, thereby providing a safer, more natural, and continuous running experience. Compared to traditional guide-assisted running, we enhance the initiative of visually impaired individuals during exercise; compared to complex robot or drone solutions, we focus more on the product\'s **wearability, lightweight design, and daily usability**. Therefore, this product\'s positioning is not simply to replace running guides but to build a new type of running assistive experience that combines **independence, safety, and inclusivity**.' },
    { zh: '', en: '' },
    { zh: '', en: '' },
    { zh: '这款方案是一款佩戴于手背与手腕位置的智能跑步辅助装置，整体采用紧凑的环抱式结构，以减少跑步过程中的晃动并提升佩戴稳定性。设备在上表面集成了识别传感器与语音按键，其中按键单击后可开始识别跑道，帮助用户在跑步过程中快速进入导航与感知状态；长按则可唤出语音助手，便于在运动状态下完成记录与交互。产品整体尺寸约为85mm × 85mm，核心模块尺寸约为45mm × 30mm，在保证功能集成度的同时兼顾了轻量化与佩戴舒适性，使其既能够满足视障跑者在运动中的辅助需求，也更接近日常可穿戴设备的使用方式。', en: 'This solution is a smart running assistive device worn on the back of the hand and wrist area, with an overall compact wrap-around structure designed to minimize shaking during running and improve wearing stability. The device integrates recognition sensors and a voice button on the upper surface. A single click of the button starts track recognition, helping users quickly enter navigation and perception mode during running; a long press activates the voice assistant, enabling recording and interaction while in motion. The overall product dimensions are approximately 85mm x 85mm, with the core module measuring approximately 45mm x 30mm, balancing functional integration with lightweight comfort, making it both capable of meeting the assistive needs of visually impaired runners during exercise and closer to the usage style of everyday wearable devices.' },
    { zh: '将前端视觉识别到的跑道信息进一步转化为可被身体直接感知的触觉信息，并输出到掌侧的手指尖触摸模块上，使视障跑者无需持续依赖视觉或复杂理解，就能够通过手部触感判断方向、路径变化与跑步状态。考虑到用户在跑步过程中通常会出现自然的握拳动作，该设计特别将触觉反馈区域布置在手指与掌侧容易接触的位置，让用户在摆臂和握拳状态下也能够持续感受到反馈信息，从而使触觉提示更稳定地融入实际跑步动作之中，提升交互的自然性、连续性与运动中的感知效率。', en: 'The track information from front-end visual recognition is further converted into tactile information that can be directly perceived by the body, and output to the fingertip touch modules on the palm side, enabling visually impaired runners to judge direction, path changes, and running status through hand tactile sensations without continuously relying on vision or complex understanding. Considering that users naturally make fist-clenching motions during running, this design specifically arranges the tactile feedback areas in positions where fingers and palms easily make contact, allowing users to continuously feel feedback information during arm swinging and fist clenching, thereby integrating tactile prompts more stably into actual running motions and enhancing the naturalness, continuity, and perception efficiency of interaction during exercise.' },
    { zh: '', en: '' },
    { zh: '我们基于 Raspberry Pi 4 进行了最小可行性原型探索，搭建起一条从环境图像采集、跑道路线识别，到语音与触觉反馈输出的基础技术链路，以验证整套方案在实时性、识别可行性与多模态协同输出上的落地可能。系统采用模块化的信息处理流程：首先由海康威视 2K 直播摄像头完成环境与跑道画面的采集，摄像头采样传输约为 40ms（0.04秒）；随后数据进入以 Raspberry Pi 4 为核心的本地计算单元，在部署的 YOLO11 语义分割模型中完成路径识别、分析与信息提取，优化后的模型响应时间约为 30ms（0.03秒）。在识别结果生成后，系统一方面通过 openRun 运动耳机输出语音反馈，响应时间约为 230ms（0.23秒）；另一方面通过 RunTouch 触觉反馈模块输出触觉提示，响应时间约为 120ms（0.12秒）；同时结合 M5Stack Core2 ESP32 与按键交互模块，实现不同跑步模式的切换。整体来看，该原型已经形成了从信息输入—本地识别—多模态输出—用户交互的完整闭环，为后续系统优化与产品化验证提供了明确基础。', en: 'We conducted a minimum viable prototype exploration based on Raspberry Pi 4, establishing a basic technical chain from environmental image capture and track route recognition to voice and tactile feedback output, to validate the feasibility of the entire solution in terms of real-time performance, recognition viability, and multi-modal coordinated output. The system uses a modular information processing workflow: first, the Hikvision 2K live camera captures environmental and track images, with camera sampling transmission of approximately 40ms (0.04 seconds); then the data enters the local computing unit centered on Raspberry Pi 4, completing path recognition, analysis, and information extraction in the deployed YOLO11 semantic segmentation model, with optimized model response time of approximately 30ms (0.03 seconds). After recognition results are generated, the system outputs voice feedback through openRun sports earphones with a response time of approximately 230ms (0.23 seconds) on one hand; on the other hand, it outputs tactile prompts through the RunTouch tactile feedback module with a response time of approximately 120ms (0.12 seconds). At the same time, it combines the M5Stack Core2 ESP32 and button interaction module to achieve switching between different running modes. Overall, the prototype has already formed a complete closed loop from information input — local recognition — multi-modal output — user interaction, providing a clear foundation for subsequent system optimization and productization verification.' },
    { zh: '【在此处编辑图片 10 的描述】', en: '[Edit description for image 10 here]' },
    { zh: '', en: '' },
    { zh: '产品的使用流程从开始跑步展开。盲人跑者首先佩戴 RunTouch 设备，启动后系统会通过识别模块对跑道进行感知，并为用户提供基础的语音引导，帮助其快速进入对应跑道并建立初始方向判断。\n\n进入跑步中的状态后，设备会持续工作。RunTouch 会根据检测到的跑道信息，将路线变化实时转译为手部可感知的触觉反馈，让用户在运动过程中持续了解自己在跑道中的相对位置，并据此进行方向微调。\n\n当用户跑动到转弯场景时，系统会联动语音、触觉与震动进行综合提示。设备会提前感知弯道，并将弯道走势通过凸点变化和震动幅度反馈给用户，同时辅以语音提示，帮助跑者顺利完成方向调整。\n\n在跑步过程中，用户还可以通过设备进行记录节点操作。按下按键后，系统能够记录当前位置或特定跑步节点，跑步结束后，用户可以在手机端 App 中查看与回顾这些节点时刻，形成自己的运动轨迹记录。\n\n如果用户需要额外的安全支持，还可以选择连接陪跑绳。在这种模式下，产品仍然保留路线识别与辅助反馈能力，让用户既可以依靠设备独立跑步，也可以在需要时与陪跑者协同使用，提升使用弹性。\n\n跑步结束后，系统还会根据用户的运动路径、节奏以及过程中记录的声音数据生成对应的音乐地图。设备会记录步速与环境声音，并在 App 中进行可视化与音乐化整理，使用户不仅完成一次跑步训练，也能获得可回顾、可分享的个性化运动体验。', en: 'The product usage flow begins with starting a run. The blind runner first wears the RunTouch device, and after startup, the system uses the recognition module to perceive the track and provides basic voice guidance, helping the user quickly enter the corresponding track and establish initial directional judgment.\n\nAfter entering the running state, the device works continuously. RunTouch translates route changes into tactile feedback perceivable by the hand based on detected track information, allowing the user to continuously understand their relative position on the track during exercise and make directional micro-adjustments accordingly.\n\nWhen the user runs into a turning scenario, the system coordinates voice, tactile, and vibration for comprehensive prompts. The device senses curves in advance and feeds back the curve trajectory through bump changes and vibration amplitude, supplemented by voice prompts to help the runner complete directional adjustments smoothly.\n\nDuring running, users can also perform checkpoint recording operations through the device. After pressing the button, the system can record the current location or specific running checkpoints. After the run, users can view and review these checkpoint moments in the mobile App, forming their own exercise trajectory record.\n\nIf the user needs additional safety support, they can also choose to connect a running tether. In this mode, the product still retains route recognition and assistive feedback capabilities, allowing users to either run independently relying on the device or use it collaboratively with a guide when needed, enhancing usage flexibility.\n\nAfter the run ends, the system also generates a corresponding music map based on the user\'s movement path, rhythm, and sound data recorded during the process. The device records step speed and environmental sounds, and organizes them visually and musically in the App, so users not only complete a running training session but also gain a reviewable and shareable personalized exercise experience.' },
    { zh: '作品参与了 2025 年 DIA 设计大展以及深圳市辅具设计大赛作品 展', en: 'The work was exhibited at the 2025 DIA Design Exhibition and the Shenzhen Assistive Device Design Competition.' },
    { zh: '【在此处编辑图片 14 的描述】', en: '[Edit description for image 14 here]' },
  ],

  // ========== 项目信息 ==========
  category: { zh: '工业设计', en: 'Industrial Design' },
  categoryType: 'industrial-design',
  tags: ['Wearable Interaction', 'Haptic Feedback', 'Assistive Technology', 'Product Design'],
  year: 2025,
  role: 'Project Lead',
  technologies: ['Computer Vision', 'Haptic Feedback', 'Embedded Systems', 'Wearable Technology'],
  shapeType: 'square',
  accentColor: 'blue',
  awards: [
    { zh: '2025 DIA 设计智造奖 — 佳作奖', en: '2025 DIA Design Intelligence Award - Honorable Mention' },
    { zh: '2025 深圳辅助器具设计竞赛 — 三等奖', en: '2025 Shenzhen Assistive Device Design Competition - Third Prize' },
  ],

  // ========== 图片上方的大字+小字内容（可配置位置）==========
  detailTexts: [
    {
      position: 3,
      largeText: { zh: '桌面调研', en: 'Desktop Research' },
      smallText: { zh: '现有针对视障群体跑步的辅助方案主要集中在两类：一类是**传统陪跑模式**及其延伸设计，例如通过**牵引绳**或触觉提示装置帮助盲人与陪跑员保持同步，这类方案安全感较强，也更容易建立协同关系，但对**陪跑员依赖度高**，难以真正提升视障者的自主跑步能力；另一类是**技术辅助型方案**，如无人机导航、机器人陪跑、穿戴式触觉反馈设备等，这类产品在障碍识别、路径引导和自主性方面有所提升，但普遍存在**系统复杂、成本较高、反馈方式单一或日常使用门槛较高**的问题。整体来看，现有产品要么强调陪伴与安全，要么强调技术与自主，但在**轻便性、自然交互、多模态反馈和独立使用体验**之间仍缺少较好的平衡。', en: 'Existing assistive solutions for visually impaired running mainly focus on two categories: one is the **traditional guide running mode** and its extended designs, such as helping blind people stay synchronized with running guides through **tether ropes** or tactile prompt devices. These solutions provide a strong sense of safety and make it easier to establish cooperative relationships, but they have a **high dependency on running guides** and make it difficult to truly improve visually impaired individuals\' independent running capabilities. The other category is **technology-assisted solutions**, such as drone navigation, robot running guides, and wearable tactile feedback devices. These products have improved in obstacle recognition, path guidance, and autonomy, but commonly face issues of **system complexity, high cost, single feedback methods, or high barriers for daily use**. Overall, existing products either emphasize companionship and safety or technology and autonomy, but still lack a good balance among **lightweight design, natural interaction, multi-modal feedback, and independent use experience**.' },
    },
    {
      position: 5,
      largeText: { zh: '设计方案', en: 'Design Solution' },
      smallText: { zh: '我们的设计方案最终聚焦为一款佩戴于手部的智能跑步辅助装置，通过将核心交互集中在手背与掌侧区域，帮助视障跑者在运动过程中获得更直接、更自然的触觉与操作反馈。前期我们结合竞品参考、结构草图与多轮佩戴方式推演，对设备在手背、手腕、手掌虎口与腕部固定等不同位置进行了比较，最终选择了兼顾稳定性、舒适性与感知效率的方案：在手背区域布置主要交互与反馈模块，在掌侧加入贴合手型的柔性支撑与触感结构，并通过腕带完成整体固定，使设备在跑步摆臂过程中能够保持稳定贴合，不易滑移，同时又不会过度干扰手部自然动作。\n\n在具体设计中，方案强调轻量化、贴合性与单手可操作性。外侧模块采用圆角一体化造型，减弱穿戴设备的机械感，使其更接近日常运动装备的视觉和触觉体验；掌侧部分则通过柔性材料与防滑纹理提升接触稳定性，让用户在握拳、放松和摆臂状态下都能保持舒适佩戴。与此同时，设备将交互按钮、提示反馈与结构支撑进行整合，减少多余构件对跑步动作的干扰，使产品既能满足功能需求，也具备长期穿戴的可接受性。\n\n在人机尺度上，我们的设计参考并基于现行国标**《成年人手部尺寸分型》标准号：GB/T 16252-2023**进行尺寸适配与结构优化，对成年人手部的关键尺寸范围进行了对应分析，从而确定腕带宽度、手背模块体量、掌侧接触区域以及整体包覆关系。通过这一标准作为依据，产品在设计上不仅考虑了单一手型的展示效果，而是更关注不同成年用户在真实佩戴中的适配性与舒适性，使装置在满足功能实现的同时，也具备更合理的人体工学基础。', en: 'Our design solution ultimately focuses on a smart running assistive device worn on the hand, concentrating core interaction on the back of the hand and palm side areas to help visually impaired runners gain more direct and natural tactile and operational feedback during exercise. In the early stages, combining competitive product references, structural sketches, and multiple rounds of wearing method exploration, we compared different positions including the back of the hand, wrist, palm tiger\'s mouth, and wrist fixation, ultimately selecting a solution that balances stability, comfort, and perception efficiency: arranging main interaction and feedback modules on the back of the hand area, adding flexible support and tactile structures conforming to hand shape on the palm side, and completing overall fixation through a wristband, enabling the device to maintain stable fit during running arm swings without excessive interference with natural hand movements.\n\nIn the specific design, the solution emphasizes lightweight construction, body conformability, and single-hand operability. The outer module adopts rounded integrated styling, reducing the mechanical feel of wearable devices and making it closer to the visual and tactile experience of everyday sports equipment. The palm side enhances contact stability through flexible materials and anti-slip textures, allowing users to maintain comfortable wearing during fist clenching, relaxing, and arm swinging. At the same time, the device integrates interaction buttons, prompt feedback, and structural support, reducing interference from redundant components on running movements, making the product both functional and acceptable for long-term wearing.\n\nIn terms of human factors dimensions, our design references and is based on the current national standard **"Adult Hand Size Classification" Standard No.: GB/T 16252-2023** for dimensional adaptation and structural optimization, conducting corresponding analysis of key dimensional ranges of adult hands to determine wristband width, hand-back module volume, palm-side contact area, and overall coverage relationship. Using this standard as the basis, the product design considers not only the display effect for a single hand type but focuses more on the adaptability and comfort for different adult users in real wearing scenarios, giving the device a more reasonable ergonomic foundation while meeting functional implementation.' },
    },
    {
      position: 9,
      largeText: { zh: '技术可行性', en: 'Technical Feasibility' },
      smallText: { zh: '我们的技术路径重点在于把**跑道路线识别**与**触觉路线生成**真正连接起来。首先，系统会对**跑道路线以及前方可通行路径**进行识别，将连续的视觉路线信息提取为可计算、可映射的数据。随后，这些路线数据会被进一步转译到掌侧的**触觉模块**中，不再只是输出简单的左偏、右偏提示，而是直接在手指接触区域**生成可被触摸感知的跑道路线形态**。也就是说，用户能够通过手指"摸到"当前跑道的大致走向，理解前方是直行、转弯，还是需要调整自己的运动方向。\n\n在触觉反馈技术上，如图所示，该模块由**PCB、电极控制层、PET Spacer、Silicone Membrane**等部分构成，不同电极可以独立驱动不同区域的微结构变化，从而在表面形成不同位置、不同形态的凸起图案。右侧所展示的多种触觉形态说明，这项技术不仅能够输出单点提示，还能够生成具有**方向性、连续性和空间分布**的触觉图案。因此，它非常适合用来承载跑道路线信息，让原本只能"看见"的路径，转化为手指能够直接感受到的"触觉路径"。\n\n基于这样的技术逻辑，系统最终形成了一条从**跑道视觉识别—路线信息提取—触觉图案生成—手指实时感知**的完整链路。前端负责识别真实跑道，后端负责将路线重新编码为触觉输出，使视障跑者能够在运动过程中通过手部持续感知前方路线变化。进一步来说，这种触觉路线不仅可以帮助用户判断**直线跑道与弯道变化**，也有潜力支持更复杂的运动情境，例如在多人跑步场景中感知**超越他人、绕行避让或调整跑步轨迹**等动态变化，从而让跑步过程中的空间判断更加直观和连续。', en: 'Our technical approach focuses on truly connecting **track route recognition** with **tactile route generation**. First, the system recognizes **track routes and passable paths ahead**, extracting continuous visual route information into computable and mappable data. Subsequently, this route data is further translated into the **tactile module** on the palm side, no longer just outputting simple left-deviation or right-deviation prompts but directly **generating tactile-perceivable track route patterns** in the finger contact area. In other words, users can "feel" the general direction of the current track through their fingers, understanding whether ahead is straight, turning, or requires adjusting their movement direction.\n\nIn terms of tactile feedback technology, as shown in the figure, this module consists of **PCB, electrode control layer, PET Spacer, Silicone Membrane**, and other components. Different electrodes can independently drive micro-structure changes in different areas, thereby forming raised patterns of different positions and shapes on the surface. The various tactile patterns shown on the right demonstrate that this technology can not only output single-point prompts but also generate tactile patterns with **directionality, continuity, and spatial distribution**. Therefore, it is very suitable for carrying track route information, transforming paths that could previously only be "seen" into "tactile paths" that fingers can directly feel.\n\nBased on this technical logic, the system ultimately forms a complete chain from **track visual recognition — route information extraction — tactile pattern generation — real-time finger perception**. The front end is responsible for recognizing the real track, while the back end is responsible for re-encoding the route as tactile output, enabling visually impaired runners to continuously perceive upcoming route changes through their hands during exercise. Furthermore, this tactile route can not only help users judge **straight track and curve changes** but also has the potential to support more complex exercise scenarios, such as perceiving **overtaking others, detouring around obstacles, or adjusting running trajectories** in multi-person running scenarios, thereby making spatial judgment during running more intuitive and continuous.' },
    },
    {
      position: 11,
      largeText: { zh: '触觉感知交互', en: 'Tactile Perception Interaction' },
      smallText: { zh: '我们的触觉感知交互核心，是把原本只能"看见"的跑道路线，转化为手指能够直接"摸到"的凸起信息。系统先通过视觉识别提取跑道边界、人体在跑道中的相对位置以及转弯、偏移等关键路径特征，再将这些信息映射到掌侧与指尖区域的触觉阵列中，通过不同程度的不突起、微微突起、中等突起、完全突起形成可感知的路线表达。根据图中的逻辑，用户不仅能够感受到自己在跑道中的位置，还能通过上方、前方、后方、下方等区域的动态或静态凸起，理解跑道是否直行、是否出现弯道，以及自身是否偏离中心。这样的设计并不是还原全部环境细节，而是参考米勒定律，考虑到人的同时记忆负荷通常在 5–9 个信息单元之间，因此有意识地简化环境障碍信息，将复杂视觉场景压缩为少量关键触觉线索，降低认知负担与交互复杂度，让用户在跑步过程中用最直接的触摸方式完成路线理解、方向判断与运动调整。\n\n下图所示主要展示了我们如何将**视觉识别到的跑道路线信息**转译为可被手部直接感知的**触觉凸起语言**。装置的触觉分区结构，整体由上方的**拇指触摸模块**和下方的**手掌触摸模块**组成；上方区域更适合传递方向与边界等快速判断信息，下方区域则承担更连续的位置与路线感知。我们根据不同情况定义了四种触觉强度层级，分别是**不突起、微微突起、中等突起、完全突起**，用来区分不同信息的重要程度与感知强弱。\n\n**直线路段中的基础触觉映射规则**。其中，**最左侧和最右侧的凸起**代表跑道边界，用于帮助用户建立对跑道宽度和左右范围的基本感知；而中部多组横向分布的凸起则分别对应**上方动态障碍物提醒、前方动态障碍物提醒、后方动态障碍物提醒和下方动态障碍物提醒**。在这些提示之间，中央区域会显示**人在跑道中的位置**，也就是说，用户能够通过触觉直接知道自己当前是在跑道中偏左、偏右还是相对居中的状态，从而在跑步过程中不断微调自己的方向。\n\n**路线变化**的触觉表达方式。当系统识别到**跑道出现弯道**时，原本较直的凸点排列会产生偏转，帮助用户提前感知路线即将发生变化；而当系统判断用户在跑道中的相对位置发生偏移时，左右两侧会出现对应的**动态障碍物提醒**与位置变化反馈，让用户理解自己正在向哪一侧偏移。最右侧的综合图则把这些信息整合在一起，说明在真实跑步场景中，系统并不是给用户大量杂乱提示，而是通过**边界、位置、障碍和弯道**这几类核心信息，构建一套可连续读取的触觉路线语言，让用户真正通过"摸"的方式理解前方跑道。', en: 'The core of our tactile perception interaction is to convert track routes that could previously only be "seen" into raised information that fingers can directly "feel." The system first extracts track boundaries, the person\'s relative position on the track, and key path features such as turns and deviations through visual recognition, then maps this information to the tactile array in the palm-side and fingertip areas, forming perceivable route expressions through different levels of no raise, slight raise, medium raise, and full raise. According to the logic in the diagram, users can not only feel their position on the track but also understand whether the track is straight, whether curves appear, and whether they have deviated from center through dynamic or static raises in the upper, front, back, and lower areas. This design does not replicate all environmental details but rather references Miller\'s Law, considering that human working memory capacity is typically 5-9 information units, and therefore consciously simplifies environmental obstacle information, compressing complex visual scenes into a few key tactile cues, reducing cognitive burden and interaction complexity, allowing users to complete route understanding, directional judgment, and movement adjustment through the most direct touch method during running.\n\nThe figure below mainly shows how we translate **track route information from visual recognition** into a **tactile raised language** that can be directly perceived by the hand. The device\'s tactile zone structure overall consists of the upper **thumb touch module** and the lower **palm touch module**. The upper area is more suitable for conveying quick judgment information such as direction and boundaries, while the lower area handles more continuous position and route perception. We defined four tactile intensity levels for different situations: **no raise, slight raise, medium raise, and full raise**, used to distinguish the importance and perception strength of different information.\n\n**Basic tactile mapping rules for straight track sections**. Among them, the **leftmost and rightmost raised points** represent track boundaries, helping users establish basic perception of track width and left-right range. Multiple groups of horizontally distributed raised points in the middle correspond to **upper dynamic obstacle alert, front dynamic obstacle alert, rear dynamic obstacle alert, and lower dynamic obstacle alert**. Between these prompts, the central area displays **the person\'s position on the track**, meaning users can directly know through touch whether they are currently left-biased, right-biased, or relatively centered on the track, enabling continuous micro-adjustments of direction during running.\n\nTactile expression of **route changes**. When the system recognizes that **a curve has appeared on the track**, the originally straight raised point arrangement deflects, helping users perceive in advance that the route is about to change. When the system judges that the user\'s relative position on the track has shifted, corresponding **dynamic obstacle alerts** and position change feedback appear on both sides, letting users understand which direction they are drifting toward. The rightmost comprehensive diagram integrates this information together, explaining that in real running scenarios, the system does not give users large amounts of chaotic prompts but rather builds a continuously readable tactile route language through core information categories of **boundaries, position, obstacles, and curves**, allowing users to truly understand the track ahead through "feeling."' },
    },
  ],
  detailMedia: [],
  detailModules: [],

  // ========== 图片集锦 ==========
  collageGalleries: [
    {
      position: 3,
      layout: 'interactive',
      images: [
        {
          src: '/images/run-touch/collage-1.png',
          alt: '传统盲人陪跑绳',
          title: { zh: '目前传统的盲人陪跑——陪跑绳', en: 'Traditional Blind Running Guide — Tether Rope' },
          description: { zh: '一根约 30 厘米长的陪跑绳，一端由陪跑员握住，另一端牵引视障跑者。两人通过摆臂节奏、步伐变化以及语言和肢体信号完成加速、减速与转向的沟通，是目前较常见的传统盲人陪跑方式。', en: 'A tether rope approximately 30 cm long, with one end held by the guide runner and the other end pulling the visually impaired runner. The two communicate acceleration, deceleration, and turning through arm swing rhythm, stride changes, and verbal and physical signals. This is currently the most common traditional blind running guide method.' },
          pros: [
            { zh: '给视障跑者较强的安全感', en: 'Provides visually impaired runners with a strong sense of safety' },
            { zh: '能建立陪跑员与盲人之间的连接与信任', en: 'Establishes connection and trust between guide and blind runner' },
            { zh: '很多节奏和动作信息可以通过陪跑绳进行传递', en: 'Many rhythm and movement signals can be transmitted through the tether' },
          ],
          cons: [
            { zh: '陪跑员需要与盲人保持配合，依赖双方默契', en: 'Guide needs to coordinate with the blind runner, relying on mutual understanding' },
            { zh: '牵引绳的舒适性一般', en: 'Tether rope comfort is average' },
            { zh: '依然需要真人陪跑，独立性不足', en: 'Still requires a human guide, lacking independence' },
          ],
        },
        {
          src: '/images/run-touch/collage-2.png',
          alt: '同步跑步系统',
          title: { zh: '同步跑步——盲人跑步系统设计', en: 'Sync Running — Blind Running System Design' },
          description: { zh: '该方案将两个模块分别佩戴在两名跑者脚踝处，通过感知跑步节奏并向向导侧脚踝提供触觉反馈，帮助陪跑者与视障跑者在步伐上保持同步，从而提升跑步的舒适性与协调性。', en: 'This solution wears two modules on the ankles of two runners respectively, perceiving running rhythm and providing tactile feedback to the guide-side ankle, helping the guide and visually impaired runner stay synchronized in stride, thereby improving running comfort and coordination.' },
          pros: [
            { zh: '无需传统牵引绳，通过穿戴装置进行反馈', en: 'No traditional tether needed, feedback through wearable devices' },
            { zh: '陪跑员与视障跑者更容易建立同步节奏', en: 'Easier for guide and visually impaired runner to establish synchronized rhythm' },
            { zh: '可提升整体跑步体验与协调感', en: 'Can improve overall running experience and sense of coordination' },
          ],
          cons: [
            { zh: '对方向的指引反馈仍不够强', en: 'Directional guidance feedback is still not strong enough' },
            { zh: '盲人仍然较难独立判断方向', en: 'Blind runners still find it difficult to independently judge direction' },
            { zh: '依旧需要陪跑员协助', en: 'Still requires guide assistance' },
          ],
        },
        {
          src: '/images/run-touch/collage-3.png',
          alt: '无人机导航系统',
          title: { zh: '独立跑步——无人机导航系统', en: 'Independent Running — Drone Navigation System' },
          description: { zh: '无人机陪跑系统通过实时导航、障碍物检测和速度控制等技术，为视障人士提供相对安全便捷的引导。无人机保持在跑者前方适当位置，利用传感器识别障碍并发出提示，从而辅助独立跑步。', en: 'The drone running companion system provides relatively safe and convenient guidance for visually impaired individuals through real-time navigation, obstacle detection, and speed control technologies. The drone maintains an appropriate position ahead of the runner, using sensors to identify obstacles and issue prompts, thereby assisting independent running.' },
          pros: [
            { zh: '帮助视障人士更独立地进行跑步，无需真人陪跑', en: 'Helps visually impaired individuals run more independently without a human guide' },
            { zh: '可根据个人节奏和目标速度进行调整', en: 'Can adjust based on personal rhythm and target speed' },
            { zh: '遇到突发情况时可发送求助信号，具有一定安全性', en: 'Can send distress signals in emergencies, providing some safety' },
          ],
          cons: [
            { zh: '无法给予像真人陪跑员那样的心理陪伴', en: 'Cannot provide the psychological companionship of a human guide' },
            { zh: '系统存在一定延迟，可能带来安全隐患', en: 'System has some latency, which may create safety risks' },
            { zh: '对环境感知与控制稳定性要求较高', en: 'High requirements for environmental perception and control stability' },
          ],
        },
        {
          src: '/images/run-touch/collage-4.png',
          alt: '盲人跑步机器人',
          title: { zh: '独立跑步——盲人跑步机器人设计', en: 'Independent Running — Blind Running Robot Design' },
          description: { zh: '该方案通过实时导航、障碍物检测、激光雷达和深度相机等技术，为视障跑者提供更稳定的前方引导。机器人在跑者侧前方保持适当距离，识别障碍并给出提示，同时自动调整速度。', en: 'This solution provides more stable forward guidance for visually impaired runners through real-time navigation, obstacle detection, LiDAR, and depth cameras. The robot maintains an appropriate distance ahead and to the side of the runner, identifies obstacles and provides prompts, while automatically adjusting speed.' },
          pros: [
            { zh: '增强视障人士运动的自主性和信心', en: 'Enhances visually impaired individuals\' exercise autonomy and confidence' },
            { zh: '具备数据记录与分析能力，可辅助训练优化', en: 'Has data recording and analysis capabilities, assisting training optimization' },
            { zh: '相比传统陪跑，具有更强的独立辅助潜力', en: 'Compared to traditional guided running, has stronger potential for independent assistance' },
          ],
          cons: [
            { zh: '初始购置成本高，系统复杂度高', en: 'High initial purchase cost and system complexity' },
            { zh: '后续维护成本较大', en: 'High subsequent maintenance costs' },
            { zh: '电池续航会限制实际使用场景', en: 'Battery life limits practical usage scenarios' },
          ],
        },
      ],
    },
    {
      position: 7,
      layout: 'editorial',
      images: [
        { src: '/images/run-touch/collage-5.png', alt: 'Main image' },
        { src: '/images/run-touch/collage-6.png', alt: 'Small top' },
        { src: '/images/run-touch/collage-7.png', alt: 'Small bottom' },
        { src: '/images/run-touch/collage-8.png', alt: 'Tall image' },
      ],
    },
  ],

  // ========== 研究洞察版块 ==========
  researchInsights: {
    position: 2,
    leftSection: {
      radarChart: {
        image: '/images/run-touch/research-radar.png',
        title: { zh: '跑步前需要考虑的困难', en: 'Difficulties to Consider Before Running' },
      },
      needsAnalysis: {
        image: '/images/run-touch/research-needs.png',
        title: { zh: '盲人对跑步辅助设备的潜在需求', en: 'Potential Needs of Blind People for Running Assistive Devices' },
      },
    },
    middleSection: {
      keywords: [
        { zh: '安全跑步', en: 'Safe Running' },
        { zh: '自主性', en: 'Autonomy' },
        { zh: '获取信息', en: 'Information Access' },
      ],
    },
    rightSection: {
      title: { zh: '让盲人能够自己独立完成跑步', en: 'Enabling Blind People to Run Independently' },
      paragraphs: [
        { zh: '在户外跑步中，把户外的环境信息传递给盲人。', en: 'In outdoor running, conveying environmental information to blind individuals.' },
        { zh: '对于一些有跑步经验的用户，他们可以通过我们的系统独立完成跑步，无需陪跑员志愿者一起。', en: 'For experienced runners, they can complete runs independently through our system without needing guide volunteers.' },
        { zh: '吸引一些没有去进行跑步的人，帮助他们能够克服心理障碍。', en: 'Attracting those who have not yet started running, helping them overcome psychological barriers.' },
      ],
    },
  },

  // ========== detail-11 下方 GIF 展示区 ==========
  detail11GifSection: {
    position: 10,
    gifLeft: '/videos/run-touch/detail11-gif-1.gif',
    gifRight: '/videos/run-touch/detail11-gif-2.gif',
    description: { zh: '跑道视觉识别以及突触反馈', en: 'Track visual recognition and tactile feedback' },
  },

  // ========== detail-12 下方双图展示区 ==========
  detail12ImageSection: {
    position: 11,
    imageLeft: '/images/run-touch/detail12-image-1.png',
    imageRight: '/images/run-touch/detail12-image-2.png',
    description: { zh: '在**拐弯**场景中，系统会同时调用**声音模块、触摸模块与震动模块**进行协同提示。语音部分会提前给出诸如**"前方向右拐弯"**、**"向左稍微调整"**或**"向右稍微调整"**等指令，帮助用户建立对即将到来的路线变化的整体预判；触摸模块则通过凸点阵列中弯曲的触觉形态，直接把**弯道走势**呈现在手指可感知的区域，同时保留用户当前**人在跑道中的位置**信息；震动模块则通过不同位置与强度的振动进一步补充拐弯幅度与方向信息，使用户在跑步过程中不仅知道"前方要转弯"，还能够更连续地理解"弯向哪里、转多少、自己该如何调整"。\n\n在**超越前人（涉及变道）**场景中，系统更强调对动态决策过程的分阶段引导。首先，语音模块会提示用户**"请选择是否超越前方跑者"**，并在确认后继续给出**"保持速度"**、**"向右稍微调整"**、**"向左稍微调整"**以及**"保持新跑道"**等分步指令；与此同时，触摸模块会依次呈现**准备变道—开始变道—结束变道**的连续触觉变化，其中边缘区域的凸起会提示用户当前是向左还是向右移动，中部区域则持续反馈自身在跑道中的相对位置；震动模块则进一步补充变道幅度与节奏信息。通过这种多模态协同方式，用户能够在超越他人的过程中更自然地完成**判断、变道、保持与回归**等动作，而不是只接收到单一的瞬时提示。', en: 'In **turning** scenarios, the system simultaneously activates the **voice module, touch module, and vibration module** for coordinated prompts. The voice component gives advance instructions such as **"turn right ahead"**, **"adjust slightly to the left"**, or **"adjust slightly to the right"**, helping users establish an overall anticipation of upcoming route changes. The touch module directly presents the **curve trajectory** in the finger-perceivable area through curved tactile forms in the raised point array, while retaining the user\'s current **position on the track** information. The vibration module further supplements turning amplitude and direction information through vibrations at different positions and intensities, enabling users to not only know "there\'s a turn ahead" during running but also more continuously understand "which way the curve goes, how much to turn, and how to adjust."\n\nIn **overtaking (involving lane changes)** scenarios, the system emphasizes staged guidance of the dynamic decision-making process. First, the voice module prompts the user to **"choose whether to overtake the runner ahead"**, and after confirmation, continues with step-by-step instructions such as **"maintain speed"**, **"adjust slightly to the right"**, **"adjust slightly to the left"**, and **"maintain new track"**. Meanwhile, the touch module sequentially presents continuous tactile changes of **preparing to change lanes — starting lane change — completing lane change**, where raised points in the edge area indicate whether the user is moving left or right, while the middle area continuously feeds back the user\'s relative position on the track. The vibration module further supplements lane change amplitude and rhythm information. Through this multi-modal coordination, users can more naturally complete actions such as **judging, changing lanes, maintaining, and returning** during the overtaking process, rather than only receiving single instantaneous prompts.' },
  },
};

runTouch.detailMedia = runTouch.detailTexts?.map(({ position, largeText, smallText }) => ({
  position,
  largeText,
  smallText,
  variant: largeText || smallText ? 'withText' : 'default',
})) ?? [];

runTouch.detailModules = [
  {
    position: runTouch.researchInsights!.position,
    placement: 'afterMedia',
    type: 'researchInsights',
    data: runTouch.researchInsights!,
  },
  ...(runTouch.collageGalleries?.map((gallery, index) => ({
    position: gallery.position,
    placement: index === 0 ? 'betweenTextAndMedia' as const : 'afterMedia' as const,
    type: 'collageGallery' as const,
    data: gallery,
    key: `collageGallery-${index}`,
  })) ?? []),
  {
    position: runTouch.detail11GifSection!.position,
    placement: 'afterMedia',
    type: 'detail11GifSection',
    data: runTouch.detail11GifSection!,
  },
  {
    position: runTouch.detail12ImageSection!.position,
    placement: 'afterMedia',
    type: 'detail12ImageSection',
    data: runTouch.detail12ImageSection!,
  },
];
