import { Work } from '../../types/work';

export const touchNav: Work = {
  id: '11',
  title: 'TouchNav Tactile Navigation Cane',

  // ========== Overview 区块 ==========
  thumbnail: '/images/touch-nav/thumb.png',
  images: [
    '/images/touch-nav/detail-1.png',
    '/images/touch-nav/detail-2.png',
    '/images/touch-nav/detail-3.png',
    '/images/touch-nav/detail-5.png',
    '/images/touch-nav/detail-6.png',
    '/images/touch-nav/detail-7.png',
    '/images/touch-nav/detail-8.png',
    '/images/touch-nav/detail-9.png',
    '/images/touch-nav/detail-10.png',
    '/images/touch-nav/detail-11.png',
  ],

  // YouTube 视频
  videoUrl: 'https://www.youtube.com/embed/01NGmFYkK0o',

  // 大字内容（主标题）
  description: { zh: 'Touchnav-触摸导航盲杖', en: 'TouchNav — Tactile Navigation Cane for the Visually Impaired' },

  // 小字内容（项目简介）
  contentSections: [
    {
      title: 'Overview',
      content: [
        { type: 'small', text: { zh: '触摸导航仪（TouchNav）是专为视障人士设计的创新导航辅助设备，可提供显示距离和指定位置的有形触觉反馈。传统的视障辅助设备主要侧重于障碍物检测，但在空间和距离感知方面存在不足。Touchnav 通过将不可见的导航路径转换为物理触觉反馈，使用户能够直观地感知剩余距离，从而解决这一问题。此外，Touchnav 的振动功能还能帮助用户识别熟悉的地点，增强了用户的导航信心，并显著减少在陌生环境中的焦虑和不安全感.该设备采用了物化进度指示器，利用集成传感器将所走路径转换成动态的物理进度条，并根据用户的速度实时调整。这种机制有助于用户通过该装置手柄的触觉来判断距离预定目的地的剩余距离。此外，手杖的位置记忆点振动反馈功能还能帮助用户标记和回忆经常去的地点。当用户接近这些标记地点时，手杖会根据距离的缩短按比例加强振动信号，从而增强用户对距离和空间方位的感知。', en: 'TouchNav is an innovative navigation assistive device designed specifically for visually impaired individuals, providing tangible tactile feedback that displays distance and designated locations. Traditional assistive devices for the visually impaired mainly focus on obstacle detection but fall short in spatial and distance perception. TouchNav addresses this issue by converting invisible navigation paths into physical tactile feedback, enabling users to intuitively perceive remaining distance. Additionally, TouchNav\'s vibration function helps users identify familiar locations, enhances navigation confidence, and significantly reduces anxiety and insecurity in unfamiliar environments. The device features a physical progress indicator that uses integrated sensors to convert the traveled path into a dynamic physical progress bar, adjusting in real-time based on the user\'s speed. This mechanism helps users judge the remaining distance to their destination through the tactile feel of the device handle. Furthermore, the cane\'s location memory point vibration feedback function helps users mark and recall frequently visited places. When users approach these marked locations, the cane proportionally strengthens the vibration signal as the distance decreases, enhancing the user\'s perception of distance and spatial orientation.' } },
      ]
    }
  ],

  // ========== Details 区块 ==========
  detailsIntro: {
    title: { zh: '发现', en: 'Discovery' },
    description: { zh: '在这个日益复杂的世界上，受到人类对安全和熟悉的内在需求的启发，我们认识到这种需求在视障人士的旅行中尤其明显。传统辅助设备通常更注重障碍物检测，而无法提供空间和距离感知。我们能否利用触觉反馈这种将距离和方向等复杂数据转换为简单触觉信号的技术，为视障用户提供全新的导航体验？\n 根据国际盲人协会的统计数据，全球盲人总数为 4300 万，预计到 2050 年，盲人人数将增加 42%，即 1800 万。\n\n目前，视障用户在出行时更倾向于使用盲杖进行辅助感知，但传统辅助工具主要依赖对障碍物的基础探测，能够提供的信息较为有限。在陌生环境中，用户往往会因为缺乏足够的视觉替代信息而感到不安，也更容易迷失方向。进一步来看，现有出行体验主要存在几个问题。首先，用户难以及时感知周围环境中的细节信息，因此很难准确判断自身所处位置与前进方向，导航过程也更加困难。其次，在嘈杂的公共环境中，语音类导航提示容易被环境噪声干扰，导致信息辨识困难。与此同时，公共场所普遍存在人流密集、空间布局复杂等情况，使得视障用户在通行过程中更难建立对环境的整体认知，从而增加出行负担与不确定性。', en: 'In this increasingly complex world, inspired by the innate human need for safety and familiarity, we recognize that this need is particularly pronounced in the travel experiences of visually impaired individuals. Traditional assistive devices tend to focus more on obstacle detection and cannot provide spatial and distance perception. Can we use tactile feedback — technology that converts complex data such as distance and direction into simple tactile signals — to provide a brand new navigation experience for visually impaired users?\nAccording to statistics from the International Blind Association, there are 43 million blind people globally, and by 2050, the number of blind people is expected to increase by 42%, or 18 million.\n\nCurrently, visually impaired users prefer to use canes for assisted perception when traveling, but traditional assistive tools mainly rely on basic obstacle detection and provide limited information. In unfamiliar environments, users often feel uneasy due to the lack of sufficient visual substitute information and are more prone to losing their way. Looking further, there are several main issues with the current travel experience. First, users have difficulty perceiving detailed information about their surroundings in a timely manner, making it hard to accurately judge their location and direction of travel, which makes the navigation process more difficult. Second, in noisy public environments, voice-based navigation prompts are easily interfered with by environmental noise, leading to difficulty in information recognition. Meanwhile, public spaces generally have dense foot traffic and complex layouts, making it harder for visually impaired users to establish an overall understanding of the environment during passage, thereby increasing the burden and uncertainty of travel.' },
  },

  // 图片描述
  imageDescriptions: [
    { zh: '', en: '' }, // detail-1.png (Hero 大图，不需要描述)
    { zh: '', en: '' },
    { zh: '目前的虚拟控制界面虽然灵活，但缺乏物理按钮提供的直接触觉反馈。这在移动环境中进行多任务处理时尤其具有局限性，对视障人十来说尤其不便。我们的创新设计将用干视障人十导航的系统与可重新配置的触觉元素整合在一起，以提供动态的物理控制和反馈。这样，视障用户不仅可以通过触觉输入和输出接收外部环境的实时信息，还能增强他们的安全感和空间意识，从而改善他们的导航体验', en: 'Current virtual control interfaces, while flexible, lack the direct tactile feedback provided by physical buttons. This is particularly limiting when multitasking in mobile environments and is especially inconvenient for visually impaired individuals. Our innovative design integrates a navigation system for visually impaired users with reconfigurable tactile elements to provide dynamic physical control and feedback. This way, visually impaired users can not only receive real-time information about the external environment through tactile input and output, but also enhance their sense of safety and spatial awareness, thereby improving their navigation experience.' },
    { zh: '', en: '' },
    { zh: '外观整体采用简洁克制的几何形体与哑光金属机身，强化产品的可靠性、稳定性与科技感，同时避免过度复杂的视觉干扰，更符合辅助设备的长期使用需求。', en: 'The overall appearance uses clean, restrained geometric forms and a matte metal body, reinforcing the product\'s reliability, stability, and sense of technology while avoiding overly complex visual distractions, better suited for the long-term use needs of assistive devices.' },
    { zh: '操作说明：按下语音输入按钮，说出想去的位置。系统接收到语音信息后，结合 GPS 与地图服务生成对应路线，并将整体路径进度映射到设备表面的实体滑块上。用户开始行走后，无需持续收听复杂的语音播报，而是通过手指触摸滑块位置，实时感知自己在整段路线中的前进程度；当逐渐接近目标地点时，设备会通过振动频率的变化提示距离缩短。在经过某个曾经熟悉或常去的位置时，用户也能接收到来自标记点的专属触觉提醒，从而增强对周边空间的识别与记忆。最终，当滑块移动至终点并伴随到达提示时，用户即可确认自己已经顺利抵达目的地。整个过程让抽象的导航信息被转化为更稳定、更安静的触觉体验，从而提升视障用户在公共空间中的自主性与安全感。', en: 'Operation instructions: Press the voice input button and say the desired destination. After receiving the voice information, the system combines GPS and map services to generate the corresponding route and maps the overall path progress to the physical slider on the device surface. After the user starts walking, there is no need to continuously listen to complex voice announcements; instead, by touching the slider position with a finger, the user can perceive their progress along the entire route in real time. As they gradually approach the destination, the device indicates the decreasing distance through changes in vibration frequency. When passing a familiar or frequently visited location, the user can also receive dedicated tactile reminders from marked points, thereby enhancing recognition and memory of the surrounding space. Finally, when the slider moves to the endpoint accompanied by an arrival prompt, the user can confirm they have successfully reached the destination. The entire process transforms abstract navigation information into a more stable and quieter tactile experience, thereby enhancing the autonomy and safety of visually impaired users in public spaces.' },
    { zh: '设备内部整合语音输入模块、GPS 模块、Wi-Fi 模块、电池、声音模块及滑块反馈结构，在紧凑体量内实现多种导航辅助能力', en: 'The device internally integrates a voice input module, GPS module, Wi-Fi module, battery, audio module, and slider feedback structure, achieving multiple navigation assistive capabilities within a compact volume.' },
    { zh: '', en: '' },
    { zh: '', en: '' },
    { zh: '1. Touchnav主要使用GPS技术和语音输入技术。\n\n2. GPS实时监测用户位置并输出坐标信息。\n\n3. 通过语音识别输入目的地并获取相关信息。\n\n4. 调用地图URL的API接口并将信息上传到云端。\n\n5. 云端规划路线，生成从当前位置到目的地的路线规划，计算时间/距离、标记交叉路口以及弯路以优化路线。\n\n6. 导航进度条根据用户位置和路径规划生成，监测进程信息，控制进度条同步移动。\n\n7. 音频模块播放有关进程以及导航的信息。', en: '1. TouchNav primarily uses GPS technology and voice input technology.\n\n2. GPS monitors the user\'s location in real time and outputs coordinate information.\n\n3. Destination input and related information are obtained through voice recognition.\n\n4. The map URL API is called and information is uploaded to the cloud.\n\n5. The cloud plans the route, generating a route plan from the current location to the destination, calculating time/distance, marking intersections and turns to optimize the route.\n\n6. The navigation progress bar is generated based on the user\'s location and route planning, monitoring progress information and controlling the progress bar to move synchronously.\n\n7. The audio module plays information about progress and navigation.' },
    { zh: '', en: '' },
  ],

  // ========== 项目信息 ==========
  category: { zh: '工业设计', en: 'Industrial Design' },
  categoryType: 'industrial-design',
  tags: ['Tactile Interface', 'Navigation Aid', 'Inclusive Design', 'Accessible Design'],
  year: 2024,
  role: 'Industrial Designer',
  technologies: ['【待填写】'],
  shapeType: 'rectangle',
  accentColor: 'yellow',

  // ========== 奖项 ==========
  awards: [
    'Red Dot Award: Design Concept 2025',
    'European Product Design Award 2025',
    'IDEA 2024 Bronze Award',
    'European Product Design Award 2024',
    'DIA 2024 Excellence Award',
  ],

  // ========== 图片 4 上方的大字+小字内容 ==========
  detailText4Large: { zh: '设计展示', en: 'Design Presentation' },
  detailText4Small: { zh: '本作品围绕视障用户在复杂公共环境中的出行问题展开，从现状分析、需求提炼、技术研究到最终产品原型，系统探索了一种以触觉为核心的导航辅助方式。项目首先基于视障用户在陌生空间中难以判断方向、语音提示易受环境干扰以及缺乏环境细节感知等问题，提出将路径信息转化为实体可触摸反馈的设计机会点；随后通过概念转化与技术研究，将语音输入、GPS 路径规划、服务器计算、进度显示与振动反馈整合为完整交互链路。\n\n最终呈现的 TouchNav 不仅在功能层面支持路线输入、实时导航和地点标记，也在形式上通过简洁、克制的产品语言，建立了更适合辅助设备的交互秩序和握持体验。整体方案希望减少视障用户对持续听觉导航的依赖，为其提供更加安静、连续且可感知的自主出行支持。\n\n产品将导航进程转化为实体滑块的位移状态，用户无需依赖屏幕或持续收听语音，即可通过触摸直接感知自己在整段路线中的当前位置。同时盲杖采用伸缩设计，兼顾出行状态下的使用长度与收纳状态下的便携性，方便日常携带与存放。', en: 'This work centers on the travel challenges faced by visually impaired users in complex public environments, systematically exploring a tactile-centered navigation assistive approach from current situation analysis, needs refinement, and technical research to the final product prototype. The project first identified design opportunity points based on issues such as difficulty in judging direction in unfamiliar spaces, voice prompts being easily disrupted by environmental noise, and lack of environmental detail perception. It then proposed converting path information into physical tactile feedback. Through concept transformation and technical research, voice input, GPS path planning, server computation, progress display, and vibration feedback were integrated into a complete interaction chain.\n\nThe final TouchNav not only supports route input, real-time navigation, and location marking at the functional level, but also establishes a more suitable interaction order and grip experience for assistive devices through clean, restrained product language in form. The overall solution aims to reduce visually impaired users\' reliance on continuous auditory navigation, providing them with quieter, more continuous, and perceivable independent travel support.\n\nThe product converts navigation progress into the displacement state of a physical slider, allowing users to directly perceive their current position along the entire route through touch without relying on screens or continuously listening to voice prompts. The cane also features a telescopic design, balancing the usage length during travel with portability in the stored state, facilitating daily carrying and storage.' },

  // ========== 图片 9 上方的大字+小字内容 ==========
  detailText9Large: { zh: '技术探索', en: 'Technical Exploration' },
  detailText9Small: { zh: 'TouchNav利用轻便的电磁技术，通过具身交互帮助视障人士直观地操作地图，简化智能导航的学习过程。它将抽象操作具体化，增强了用户在户外的自主性和安全性。设备依托云处理，集成简易传感器和通信模块，降低成本的同时兼顾环保。\n\n在触觉反馈层面，方案主要构建了两类互补的反馈方式，以帮助视障用户在出行过程中更自然地理解导航状态与环境信息。\n\n其中，A 对应实时导航进度反馈。该部分基于柔性电位器、柔性印刷电路板与电磁阀的组合，将导航进度映射为可移动的实体滑块位置，使用户能够通过手指触摸滑块所在位置，直接感知自己在整段路线中的当前进程。这种方式强调将抽象的路径信息转化为连续、可触摸的物理表达，让用户在行进过程中无需持续依赖语音，也能了解自己距离终点还有多远。\n\n而 B 对应熟悉地点的振动提醒反馈。在实时进度反馈的基础上，方案进一步引入 PWM 控制振动电机，当用户接近曾经记录或熟悉的地点时，设备会通过局部振动提示强化地点识别。这种反馈并不承担整体路径进度表达的作用，而是作为一种事件型提醒机制，帮助用户在经过具有个人意义或高频到访的位置时，快速建立与周围环境的联系，增强空间记忆与方向判断。\n\n在系统流程层面，设备首先通过语音输入模块接收用户的目的地信息，同时由 GPS 模块获取当前位置数据。随后，这些信息通过 Wi-Fi 模块传输至后台服务器，由服务器调用地图 API 完成路径规划与路线进度计算。系统再将生成的导航结果转化为适配设备端的控制信号，并回传至 TouchNav 本体：一方面驱动实体进度滑块沿轨道移动，以呈现从起点到终点的整体路径进度；另一方面在用户接近熟悉地点或关键位置时，通过振动模块输出提醒，并在到达终点时结合声音模块提供确认信息。通过这一技术链路，项目建立了从语音输入、位置识别、路径计算到触觉与声音输出的完整交互闭环。', en: 'TouchNav utilizes lightweight electromagnetic technology to help visually impaired individuals intuitively operate maps through embodied interaction, simplifying the learning process of smart navigation. It concretizes abstract operations, enhancing users\' autonomy and safety outdoors. The device relies on cloud processing, integrating simple sensors and communication modules, reducing costs while being environmentally friendly.\n\nAt the tactile feedback level, the solution primarily constructs two complementary feedback methods to help visually impaired users more naturally understand navigation status and environmental information during travel.\n\nAmong them, A corresponds to real-time navigation progress feedback. This part is based on the combination of flexible potentiometers, flexible printed circuit boards, and electromagnetic valves, mapping navigation progress to the position of a movable physical slider, allowing users to directly perceive their current progress along the entire route by touching the slider position with their fingers. This approach emphasizes converting abstract path information into continuous, tactile physical expression, enabling users to understand how far they are from the endpoint without continuously relying on voice during movement.\n\nB corresponds to familiar location vibration reminder feedback. Building on real-time progress feedback, the solution further introduces PWM-controlled vibration motors. When the user approaches a previously recorded or familiar location, the device reinforces location recognition through localized vibration prompts. This feedback does not serve the purpose of expressing overall path progress but acts as an event-based reminder mechanism, helping users quickly establish connections with their surroundings when passing locations of personal significance or frequently visited spots, enhancing spatial memory and directional judgment.\n\nAt the system process level, the device first receives the user\'s destination information through the voice input module while the GPS module acquires current location data. This information is then transmitted to the backend server via the Wi-Fi module, where the server calls the map API to complete route planning and route progress calculation. The system then converts the generated navigation results into control signals adapted for the device and transmits them back to the TouchNav body: on one hand, driving the physical progress slider along the track to present the overall path progress from start to end; on the other hand, outputting reminders through the vibration module when the user approaches familiar locations or key points, and providing confirmation information combined with the audio module upon reaching the destination. Through this technical chain, the project establishes a complete interaction closed loop from voice input, location recognition, route calculation, to tactile and audio output.' },
};
