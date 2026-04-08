import { Work } from '../../types/work';

export const flappingWingAircraft: Work = {
  id: '15',
  title: 'Bio-inspired Four-Wing Flapping-Wing UAV',

  // ========== Overview 区块 ==========
  thumbnail: '/images/flapping-wing-aircraft/thumb.png',
  images: [
    '/images/flapping-wing-aircraft/detail-1.png',
    '/images/flapping-wing-aircraft/detail-2.png',
    '/images/flapping-wing-aircraft/detail-3.png',
    '/images/flapping-wing-aircraft/detail-4.png',
    '/images/flapping-wing-aircraft/detail-5.png',
    '/images/flapping-wing-aircraft/detail-6.png',
    '/images/flapping-wing-aircraft/detail-7.png',
    '/images/flapping-wing-aircraft/detail-8.png',
    '/images/flapping-wing-aircraft/detail-9.png',
    '/images/flapping-wing-aircraft/detail-10.png',
  ],
  // 大字内容（主标题）
  description: { zh: '基于仿生扑翼的四翼无人机设计研究', en: 'Design Research on a Bio-inspired Four-Wing Flapping-Wing UAV' },

  // 小字内容（项目简介）
  contentSections: [
    {
      title: 'Overview',
      content: [
        { type: 'small', text: { zh: '本项目聚焦仿生飞行方向，围绕鸟类与昆虫扑翼飞行的运动机制展开研究，并尝试将其转化为四翼联动飞行器的产品设计与机械原型开发。项目以扑翼机构的驱动原理、传动布局、机翼运动方式以及整机轻量化为核心，结合机械设计、材料工艺与原型制作，对四翼扑翼无人机的可行性进行了持续探索与迭代验证。在设计过程中，团队从早期机翼驱动平台入手，逐步推进电机布局、减速传动、曲柄联动机构和机翼结构的优化，并针对机翼长度、翼面刚性、偏转角度等变量进行了多轮实验对比，以寻找更适合扑翼飞行的结构参数。随着迭代推进，原型在结构紧凑度、重量控制、传动效率与机翼联动效果等方面不断提升，为后续实现更轻量、更稳定的扑翼飞行平台奠定了基础', en: 'This project focuses on bio-inspired flight, studying the kinematic mechanisms of bird and insect flapping-wing flight and attempting to translate them into the product design and mechanical prototype development of a four-wing coordinated aircraft. The project centers on the driving principles of the flapping mechanism, transmission layout, wing motion patterns, and overall weight reduction, combining mechanical design, materials engineering, and prototyping to continuously explore and iteratively validate the feasibility of a four-wing flapping-wing UAV. During the design process, the team started with early wing drive platforms, progressively advancing the optimization of motor layout, reduction transmission, crank linkage mechanisms, and wing structures, conducting multiple rounds of experimental comparisons on variables such as wing length, surface rigidity, and deflection angle to find structural parameters more suitable for flapping-wing flight. As iterations progressed, the prototypes continuously improved in structural compactness, weight control, transmission efficiency, and wing coordination, laying the foundation for a lighter and more stable flapping-wing flight platform.' } },
      ]
    }
  ],

  // ========== Details 区块 ==========
  detailsIntro: {
    title: { zh: '前期探索', en: 'Early Exploration' },
    description: { zh: '基于昆虫的仿生设计方向，在学校图书馆、网络等途径了解昆虫仿生设计，在此基础上进一步设计方案。然后我们根据昆虫(如蜻蜓、蜜蜂等)的翅膀扇动，进行四翼扑翼机设计。我们的扑翼机采用电动机横置的布局，电机经过两级减速后带动曲柄驱动机翼。使用了碳纤维3D打印框架机身，电动机带动多级齿轮进行减速，齿轮曲柄驱动机翼，扑翼机的翅膀通常采用曲面形状，可以使空气在翅膀两侧产生不同的流速，形成一个向上的压差，使得机器可以产生一个向上的升力。遥控器控制电动机的转数进而控制翅膀的扑动', en: 'Based on the bio-inspired design direction of insects, we studied insect biomimetic design through university library resources and online channels, and further developed the design concept on this foundation. We then designed the four-wing flapping-wing aircraft based on the wing-flapping motion of insects (such as dragonflies and bees). Our flapping-wing aircraft uses a transversely mounted motor layout, with the motor driving the crank through a two-stage reduction to actuate the wings. It uses a carbon fiber 3D-printed frame body, with the motor driving multi-stage gears for speed reduction, and gear cranks driving the wings. The wings of the flapping-wing aircraft typically use curved surfaces, which can create different air flow speeds on both sides of the wings, generating an upward pressure differential that allows the machine to produce upward lift. The remote controller adjusts the motor speed to control wing flapping.' },
  },

  // ========== 图片与描述 ==========
  imageDescriptions: [
    { zh: '', en: '' }, // detail-1.png (Hero 大图，不需要描述)
    { zh: '', en: '' }, // detail-2.png
    { zh: '基于前期的探索，我们先进行结构的建模以及制作进行分析', en: 'Based on the preliminary exploration, we first proceeded with structural modeling and fabrication analysis.' }, // detail-3.png
    { zh: '第一代机翼驱动平台原型', en: 'First-generation wing drive platform prototype' }, // detail-4.png
    { zh: '第二代机翼驱动平台原型', en: 'Second-generation wing drive platform prototype' }, // detail-5.png
    { zh: '机翼部分在了解原理后进行了多次的迭代，针对机翼长度，翼面刚性，机翼偏转极限角度等等变量进行了有针对性的实验，并根据对照等数据选取了一些在各自变量下的最优尺度。', en: 'After understanding the principles, the wing section underwent multiple iterations. Targeted experiments were conducted on variables such as wing length, surface rigidity, and wing deflection limit angle, and optimal scales for each variable were selected based on comparative data.' }, // detail-6.png
    { zh: '为了方便地测量机翼实时的升力，且导出机翼产生升力的图表，了解最大升力与平均升力以及推力等等重要数据，利用ardurino和相关硬件制作了实时测量并显示压力数据的测试台，并开发了相关的数据显示和处理的软件', en: 'To conveniently measure real-time wing lift and export lift generation charts to understand key data such as maximum lift, average lift, and thrust, a real-time pressure data measurement and display test bench was built using Arduino and related hardware, and corresponding data display and processing software was developed.' }, // detail-7.png
    { zh: '基于前两代的探讨我们进行了第三代扑翼机的探讨', en: 'Based on the exploration of the first two generations, we proceeded with the investigation of the third-generation flapping-wing aircraft.' }, // detail-8.png
    { zh: '第三代扑翼机', en: 'Third-generation flapping-wing aircraft' }, // detail-9.png
  ],

  // ========== 项目信息 ==========
  category: { zh: '硬件设计与开发', en: 'Hardware Design & Development' },
  categoryType: 'hardware-design-development',
  tags: ['Biomimetic Design', 'Robotic Mechanism', 'Motion Simulation', 'Aerodynamic Prototyping'],
  year: 2024,
  role: '【在此处填写角色】',
  technologies: ['【在此处填写技术】'],

  shapeType: 'square',
  accentColor: 'blue',

  // ========== 图片 4 上方的大字+小字内容 ==========
  detailText4Large: { zh: '第一代和第二代原型探讨', en: 'First and Second Generation Prototype Exploration' },
  detailText4Small: { zh: '项目在前期迭代中主要围绕扑翼驱动平台的基础原理验证与结构优化展开，重点探索电机布局、减速传动、曲柄联动以及四翼扑动之间的关系，并逐步推动原型从机构验证走向更紧凑、轻量和接近可飞行的方向。\n\n第一代机翼驱动平台原型采用电动机横置的布局方式，电机经过两级减速后带动曲柄机构驱动机翼扇动。该版本主要用于验证扑翼驱动的基本机械原理，并初步建立电机、减速传动与机翼运动之间的关系。图中所示为使用3D打印框架进行重制后的平台版本。这一代原型的优点在于机翼扇动速度较快，整机结构相对稳定，能够较清晰地展示扑翼机构的联动逻辑和驱动路径。但与此同时，该方案也暴露出一些问题：由于零部件数量较多，整体重量偏大；电机横置的布局使机身重心分布不够理想，后续在真正起飞和配平过程中容易出现困难。因此，第一代更多承担的是原理验证和结构探索的作用，为下一阶段的优化提供了基础。\n\n第二代机翼驱动平台原型在延续电动机横置布局的基础上，对传动系统和整机结构进行了进一步紧凑化设计。电机动力经过三级减速后，通过两根曲柄带动联动的四片机翼，实现更完整的四翼扑动效果。相较于前一代，第二代在结构组织上更加集中，零部件布局也更紧凑，为整机减重和后续飞行验证创造了更好的条件。这一版本的突出特点是传动链条更短、零件数量相对减少，因此动力损耗较小，机翼扑动效率与转速表现也有所提升。同时，为了方便持续迭代，部分机翼根部和关键连接位置采用了3D打印零件，以便针对联动角度、连接方式和安装精度进行快速调整。尽管这一代仍处于平台验证阶段，但它已经明显推动了扑翼机从机构可动向结构可飞方向发展。', en: 'In the early iterations, the project primarily focused on validating the basic principles and structural optimization of the flapping-wing drive platform, with emphasis on exploring the relationship between motor layout, reduction transmission, crank linkage, and four-wing flapping, progressively pushing the prototype from mechanism verification toward a more compact, lightweight, and near-flyable direction.\n\nThe first-generation wing drive platform prototype adopted a transversely mounted motor layout, with the motor driving the crank mechanism through a two-stage reduction to actuate the wings. This version was primarily used to verify the basic mechanical principles of flapping-wing drive and to establish the initial relationship between the motor, reduction transmission, and wing motion. The platform version shown in the image was remade using a 3D-printed frame. The advantages of this generation include faster wing flapping speed, relatively stable overall structure, and the ability to clearly demonstrate the linkage logic and drive path of the flapping mechanism. However, it also exposed some issues: due to the large number of components, the overall weight was heavy; the transverse motor layout resulted in less than ideal center of gravity distribution, causing difficulties in subsequent takeoff and balancing. Therefore, the first generation primarily served the purpose of principle verification and structural exploration, providing a foundation for the next stage of optimization.\n\nThe second-generation wing drive platform prototype further compacted the transmission system and overall structure while maintaining the transverse motor layout. The motor power, after three-stage reduction, drives the four coordinated wings through two cranks, achieving a more complete four-wing flapping effect. Compared to the previous generation, the second generation features more concentrated structural organization and more compact component layout, creating better conditions for overall weight reduction and subsequent flight verification. The outstanding characteristic of this version is the shorter transmission chain and relatively fewer parts, resulting in less power loss and improved wing flapping efficiency and rotational speed performance. At the same time, to facilitate continuous iteration, some wing roots and key connection points used 3D-printed parts for quick adjustments to linkage angles, connection methods, and installation accuracy. Although this generation was still in the platform verification stage, it had clearly advanced the flapping-wing aircraft from mechanically drivable toward structurally flyable.' },

  // ========== 图片 9 上方的大字+小字内容 ==========
  detailText9Large: { zh: '第三代扑翼原型机', en: 'Third-Generation Flapping-Wing Prototype' },
  detailText9Small: { zh: '', en: '' },

  // ========== 图片 10 上方的大字+小字内容 ==========
  detailText10Large: { zh: '项目成果', en: 'Project Outcomes' },
  detailText10Small: { zh: '2篇论文成果：仿生式扑翼机的研究现状与发展、仿生扑翼机的结构分析。\n\n2项专利成果：外观设计专利——仿生四翼扑翼机；实用新型专利——一个基于仿生法的四翼扑翼机。', en: '2 published papers: Research Status and Development of Bio-inspired Flapping-Wing Aircraft; Structural Analysis of Bio-inspired Flapping-Wing Aircraft.\n\n2 patents: Appearance Design Patent — Bio-inspired Four-Wing Flapping-Wing Aircraft; Utility Model Patent — A Four-Wing Flapping-Wing Aircraft Based on Biomimetic Methods.' },

  // ========== 视频组配置（图片 5 后插入） ==========
  videoGroup: {
    position: 5,  // 在图片 5 后插入
    large: '/videos/flapping-wing-aircraft/video-large.mp4',
    smallTop: '/videos/flapping-wing-aircraft/video-small-1.mp4',
    smallBottom: '/videos/flapping-wing-aircraft/video-small-2.mp4',
  },

  // ========== 竖屏视频配置（图片 8 后插入） ==========
  verticalVideo: {
    position: 8,  // 在图片 8（detail-9）后插入
    src: '/videos/flapping-wing-aircraft/vertical-video.mp4',
    textLarge: { zh: '', en: '' },
    textSmall: { zh: '第三代原型在前两代扑翼驱动平台验证的基础上，进一步围绕机翼系统优化与整机轻量化展开设计。这一阶段仍延续电动机驱动方案，通过减速传动机构将动力传递至曲柄与连杆系统，再带动四片机翼进行联动扑动。相比前两代更侧重驱动平台本身的可动性验证，第三代开始将重点转向机翼结构与飞行性能之间的关系，尝试从真正影响扑翼效率的参数入手，对整机进行更具针对性的优化。\n\n在结构上，第三代采用了更紧凑的四翼联动布局，通过中心驱动机构同时连接左右两侧机翼，使四片机翼在扑动过程中形成更协调的联动关系。为了提高实验效率并便于迭代，机翼根部和关键连接节点继续采用可快速替换的连接件，便于根据测试结果调整不同机翼方案。团队重点围绕机翼长度、翼面刚性以及机翼偏转极限角度等变量进行了多轮实验与对照分析，比较不同参数组合对扑动幅度、结构稳定性和潜在飞行表现的影响，并在此基础上筛选出更适合后续飞行验证的机翼尺寸与结构形式。\n\n在材料与轻量化方面，第三代原型开始从早期偏验证性的框架结构转向更轻质、更高效的构成方式。机翼骨架逐步引入碳纤维杆件，翼面采用更轻薄的覆盖材料，既保证了一定的刚性和形变控制能力，又显著降低了机翼自重。同时，部分连接部件采用可快速加工和替换的轻质零件，以兼顾实验过程中的调整需求与整体减重目标。通过这一阶段的优化，第三代原型在结构重量、机翼参数和传动适配性之间建立了更清晰的平衡关系，也完成了从机械驱动平台向轻量化扑翼飞行器原型过渡的重要一步，为后续更成熟的飞行版本提供了关键的参数依据和结构基础。', en: 'The third-generation prototype further focused on wing system optimization and overall weight reduction based on the verification of the first two generations of flapping-wing drive platforms. This stage continued with the motor-driven approach, transmitting power through reduction mechanisms to the crank and linkage system, which then drives the four wings in coordinated flapping. Compared to the first two generations that focused more on verifying the drivability of the platform itself, the third generation shifted emphasis to the relationship between wing structure and flight performance, attempting to optimize the entire aircraft more specifically from parameters that truly affect flapping-wing efficiency.\n\nStructurally, the third generation adopted a more compact four-wing coordinated layout, with a central drive mechanism simultaneously connecting the left and right wings, enabling the four wings to form a more coordinated linkage during flapping. To improve experimental efficiency and facilitate iteration, wing roots and key connection nodes continued to use quickly replaceable connectors, allowing for adjustment of different wing schemes based on test results. The team focused on multiple rounds of experiments and comparative analysis on variables such as wing length, surface rigidity, and wing deflection limit angle, comparing the effects of different parameter combinations on flapping amplitude, structural stability, and potential flight performance, and on this basis screening wing sizes and structural forms more suitable for subsequent flight verification.\n\nIn terms of materials and weight reduction, the third-generation prototype began transitioning from the earlier verification-oriented frame structure to a lighter, more efficient construction. The wing skeleton gradually introduced carbon fiber rods, and the wing surfaces used thinner covering materials, ensuring certain rigidity and deformation control while significantly reducing wing weight. At the same time, some connecting components used lightweight parts that could be quickly manufactured and replaced, balancing the needs for adjustment during experimentation with overall weight reduction goals. Through this stage of optimization, the third-generation prototype established a clearer balance between structural weight, wing parameters, and transmission compatibility, completing an important transition from a mechanical drive platform to a lightweight flapping-wing aircraft prototype, providing critical parameter basis and structural foundation for more mature flight versions.' },
  },
};
