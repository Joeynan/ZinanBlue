import { Work } from '../../types/work';

export const vacuumSealer: Work = {
  id: '12',
  title: 'DICOOO-FreshTag Vacuum Sealer',

  // ========== Overview 区块 ==========
    // ========== 图片 ==========
  thumbnail: '/images/vacuum-sealer/thumb.png',
  images: [
    '/images/vacuum-sealer/detail-1.png',
    '/images/vacuum-sealer/detail-2.png',
    '/images/vacuum-sealer/detail-3.png',
    '/images/vacuum-sealer/detail-4.png',
    '/images/vacuum-sealer/detail-5.png',
    '/images/vacuum-sealer/detail-6.png',
    '/images/vacuum-sealer/detail-7.png',
    '/images/vacuum-sealer/detail-8.png',
    '/images/vacuum-sealer/detail-9.png',
    '/images/vacuum-sealer/detail-10.png',
  ],
  // 大字内容（主标题）
  description: { zh: 'DICOOO-标签打印真空封口机', en: 'DICOOO — Label-Printing Vacuum Sealer' },

  // 小字内容（项目简介）
  contentSections: [
    {
      title: 'Overview',
      content: [
        { type: 'small', text: { zh: 'DICOOO 标签打印真空封口机是一款将真空封口与标签打印功能整合于一体的厨房小家电产品，旨在解决用户在食物封存后容易遗忘封存时间、难以判断保鲜期限的问题。相比传统封口机只完成"封存"这一步，本方案进一步将食品信息记录与新鲜度提醒融入使用流程中，通过打印标签的方式，将封存时间、预计保鲜周期及食材类别等信息直观附着在包装表面，帮助用户更清晰地管理家中食材，减少因遗忘和信息模糊造成的浪费。产品围绕"保鲜信息可视化"展开设计，在封口动作完成的同时生成对应标签，使原本分散的记录行为被整合进一个连续、简洁的操作链路中。结合移动端标签编辑与不同食材类型的保鲜模式设定，方案不仅提升了真空封存的使用效率，也增强了厨房收纳、食品管理与健康饮食的整体体验', en: 'DICOOO is a kitchen appliance that integrates vacuum sealing with label printing, designed to solve the problem of users forgetting when food was sealed and having difficulty judging freshness periods. Unlike traditional sealers that only "seal," this solution further incorporates food information recording and freshness reminders into the workflow. By printing labels that display sealing time, estimated freshness duration, and food category directly on the packaging, it helps users manage home ingredients more clearly and reduces waste caused by forgetting or unclear information. The product is designed around "visualized freshness information," generating corresponding labels at the moment of sealing, integrating the originally scattered recording behavior into a continuous, streamlined operation. Combined with mobile label editing and preservation mode settings for different food types, the solution not only improves vacuum sealing efficiency but also enhances the overall experience of kitchen organization, food management, and healthy eating.' } },
      ]
    }
  ],

  // ========== Details 区块 ==========
  detailsIntro: {
    title: { zh: '灵感来源', en: 'Inspiration' },
    description: { zh: '我们发现家庭食物使用真空储存后的两个常见问题。用户在完成真空封口后，随着存放时间变长，往往容易遗忘食物的封口时间，导致后续取用时难以判断已经保存了多久。其次，不同食物在真空封口后的保质时间会发生变化，但大多数用户并不清楚封口后具体能够保存多久，也缺乏清晰、直观的信息参考。我们从超市产品标签这种信息提示形式中获得启发，将标签系统引入家庭真空保鲜场景。通过将用户原本需要额外记录、手写或记忆的内容转化为可打印、可粘贴、可识别的标签信息，让家庭储鲜也像商品管理一样更直观、更有秩序。标签不再只是附加配件，而成为连接保鲜行为与食品管理的重要媒介。', en: 'We identified two common problems with vacuum food storage at home. After completing vacuum sealing, users often forget when the food was sealed as storage time increases, making it difficult to judge how long it has been stored. Secondly, the shelf life of different foods changes after vacuum sealing, but most users do not know exactly how long food can be preserved after sealing, nor do they have clear and intuitive information references. We drew inspiration from supermarket product labels and introduced a label system into the home vacuum preservation scenario. By transforming what users previously needed to record, write by hand, or memorize into printable, stickable, and identifiable label information, home food preservation becomes as intuitive and organized as retail product management. The label is no longer just an accessory but an important medium connecting preservation behavior with food management.' },
  },

  // ========== 图片与描述 ==========
  imageDescriptions: [
    { zh: '', en: '' }, // detail-1.png (Hero 大图，不需要描述)
    { zh: '', en: '' }, // detail-3.png
    { zh: '为了延长食物的保质期，人们会有对食物进行真空封装的情况，然而食物在真空封装后，很多人会忘记封装的时间并且不知道封装食物的保质期，导致无法判断食物是否在保质期内。因此用户可能会将这些食物扔掉或者忽视它们的存在直至变质。对此，我们将真空封口机和标签打印机进行"2in1"的探素。', en: 'To extend food shelf life, people often vacuum seal their food. However, after vacuum sealing, many people forget the sealing date and do not know the expiration period, making it impossible to judge whether the food is still within its shelf life. As a result, users may throw away the food or ignore it until it spoils. In response, we explored a "2-in-1" concept combining a vacuum sealer with a label printer.' }, // detail-4.png
    { zh: '', en: '' }, // detail-5.png
    { zh: '', en: '' }, // detail-6.png
    { zh: '产品针对蔬果 / 海鲜、肉类、干货以及干抽 / 湿抽等不同需求提供相应模式，帮助用户根据食材特性选择更合适的封存方式。', en: 'The product offers corresponding modes for different needs such as fruits/vegetables, seafood, meat, dry goods, as well as dry/wet suction, helping users choose the most suitable sealing method based on food characteristics.' }, // detail-6.png 上方的大字内容
    { zh: '通过移动端界面，用户可以创建、编辑和管理标签内容，并对封口食品进行记录归档。设备与数字端的配合', en: 'Through the mobile interface, users can create, edit, and manage label content, as well as archive records of sealed food. The device works in tandem with the digital platform.' }, // detail-7.png
    { zh: '使用时，用户首先将需要保存的食物装入真空封口袋中，并整理好袋口。随后根据食材种类与含水量选择对应模式，如肉类、蔬果或海鲜、干货，以及干抽或湿抽等封口方式，以匹配不同食物的保鲜需求。启动设备后，机器完成抽气与封口工作，并在封口结束后同步打印对应标签，标签中可呈现食材类别、封装时间、建议保鲜时长和预计到期时间等关键信息。最后，用户将标签贴附在食品包装表面，便于后续识别、分类与管理；若结合 App 使用，还可进一步实现标签编辑、记录归档和到期提醒等功能。', en: 'In use, the user first places the food to be preserved into a vacuum sealing bag and arranges the bag opening. Then, based on the food type and moisture content, the user selects the corresponding mode — such as meat, fruits/vegetables, seafood, or dry goods, and dry or wet suction — to match the preservation needs of different foods. After starting the device, it completes the air extraction and sealing work, and simultaneously prints a corresponding label after sealing is complete. The label can display key information such as food category, sealing time, recommended freshness duration, and estimated expiration date. Finally, the user attaches the label to the food packaging surface for easy identification, classification, and management. When used with the App, users can further enjoy features such as label editing, record archiving, and expiration reminders.' }, // detail-8.png
    { zh: ' ', en: ' ' }, // detail-9.png
    { zh: '', en: '' }, // detail-10.png
  ],

  // ========== 项目信息 ==========
  category: { zh: '工业设计', en: 'Industrial Design' },
  categoryType: 'industrial-design',
  tags: ['Household Appliance', 'Food Preservation', 'Mechanical Design', 'Product Engineering'],
  year: 2023,
  role: '【在此处填写角色】',
  technologies: ['【在此处填写技术】'],

  shapeType: 'circle',
  accentColor: 'blue',

  // ========== 图片 4 上方的大字+小字内容 ==========
  detailText4Large: { zh: '作品展示', en: 'Design Showcase' },
  detailText4Small: { zh: '真空封口机在对食物袋进行抽气保鲜后，同时会根据用户选择的食物种类去打印相应的标签，有于记录封口时间和保质时间，产品整体造型采用简洁、规整的几何体块组合，标签模块与主机形成清晰分区，在视觉上强调功能整合这一设计重点，同时传达出家电产品应有的秩序感与易用性。', en: 'After vacuum sealing the food bag for preservation, the vacuum sealer simultaneously prints a corresponding label based on the food type selected by the user, used to record the sealing time and shelf life. The overall product design features clean, well-organized geometric forms, with the label module and main body forming clearly defined zones. This visually emphasizes the design focus of functional integration while conveying the sense of order and ease of use expected from a home appliance.' },

  // ========== 图片 9 上方的大字+小字内容 ==========
  detailText9Large: { zh: '产品细节', en: 'Product Details' },
  detailText9Small: { zh: '', en: '' },
};
