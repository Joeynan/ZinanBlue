import { Work } from '../../types/work';

export const superTeacher: Work = {
  id: '7',
  title: { zh: '超级教师—AR+AI 实时赋能智慧课堂', en: 'Super Teacher— AR + AI Empowered Smart Classroom' },

  // ========== Overview 区块 ==========
  thumbnail: '/images/super-teacher/thumb.png',
  images: [
    '/images/super-teacher/detail-1.png',
    '/images/super-teacher/detail-2.png',
    '/images/super-teacher/detail-3.png',
    '/images/super-teacher/detail-4.png',
  ],

  description: { zh: '超级教师—AR+AI 实时赋能智慧课堂', en: 'Super Teacher — AR + AI Empowered Smart Classroom' },

  contentSections: [
    {
      title: 'Overview',
      content: [
        {
          type: 'small',
          text: {
            zh: '超级教师 是一套面向科学教育场景的 AR + AI 赋能课堂教学系统。物理、化学、生物等学科的实验教学，已被越来越广泛地视为科学教育的重要组成部分.动手实验在培养学生的实践技能、探究能力与科学理解方面发挥着关键作用.随着计算机视觉等技术的发展，智慧实验室已能实现自动评分与错误分析，并实时反馈数据给教师.AI 与 AR 的进一步融合仍有潜力深入提升教学与学习体验. 正是在这样的背景下，项目聚焦实验课堂中教师常常面临的几类核心问题，例如难以及时掌握全班学生的实验进度、容易忽视局部区域中的求助与异常情况、现有数据多为事后统计而难以支持实时干预，以及课堂信息过于密集而不利于快速提取有效洞察.为回应这些挑战，超级教师 将 AR 眼镜、学生端实验设备数据采集 与 AI 实时分析能力 结合起来，把分散、滞后的课堂信息转化为教师在真实教学过程中能够即时感知和理解的辅助内容.系统一方面通过 实时可视化的进度与细节呈现 帮助教师快速建立对课堂整体状态的认知，另一方面借助 空间化求助提示 与 AI 驱动的教学行动建议,支持教师及时发现需要关注的学生，并在实验进行中做出更具针对性的讲解、提醒与干预.',
            en: 'Super Teacher is an AR + AI empowered classroom teaching system for science education scenarios including physics, chemistry, and biology. Hands-on experiment teaching has been increasingly recognized as an vital component of science education, cultivating students\' practical skills, inquiry abilities, and scientific understanding. With the development of computer vision and other technologies, smart labs can now achieve automatic scoring and error analysis, and real-time data feedback to teachers. The further integration of AI and AR still has potential to deeply enhance the teaching and learning experience. Against this backdrop, the project focuses on the core issues teachers frequently face in lab classrooms, such as difficulty grasping all students\' experiment progress in real time, easily overlooking help requests and abnormal situations in local areas; existing data being mostly post-hoc statistics that is hard to support real-time intervention; and classroom information being too dense for quick extraction of effective insights. To address these challenges, Super Teacher combines AR glasses, student-side experiment equipment data collection with AI real-time analysis capabilities to transform scattered and delayed classroom information into assistive content that teachers can immediately perceive and understand during real teaching. On one hand, real-time visualized progress and detail presentation helps teachers quickly establish awareness of overall classroom status; on the other hand, spatial help request prompts and AI-driven teaching action suggestions support teachers timely discover students needing attention, and make more targeted explanations, reminders, and interventions during experiments.' },
        },
      ]
    }
  ],
  detailsIntro: {
    title: { zh: '传统的理化生实验教学', en: 'Traditional Science Lab Experiment Teaching' },
    description: { zh: '在传统物理实验课堂中，教师往往需要在巡视学生、判断实验进度、回应个别求助、讲解操作问题之间不断切换注意力，因而面临着注意力分散、信息切换频繁、学生求助被忽略、反馈滞后等多重挑战。为更准确地理解这些问题，我们进行了用户调研与课堂情境观察，结合与一线教师的交流讨论,对真实教学过程中的困难进行了进一步梳理与总结。在此基础上，我们归纳出五个核心痛点，并进一步提出了超级教师系统，希望借助 AR 与 AI 的结合,为实验课堂中的教师提供更及时、更清晰、更具可操作性的教学支持。',
            en: 'In traditional physics experiment classes, teachers constantly need to switch attention among patrolling students, judging experiment progress, responding to individual help requests, and explaining operation issues, thus facing multiple challenges including attention dispersion, frequent information switching, student help requests being overlooked, and delayed feedback. To better understand these issues, we conducted user research and classroom situational observation, combined with discussions with frontline teachers, further organizing and summarized the difficulties in real teaching processes. On this basis, we identified five core pain points and further proposed the Super Teacher system, hoping to leverage the combination of AR and AI to provide more timely, clear, and actionable teaching support for teachers in experiment classrooms.' },
  },

  imageDescriptions: [
    { zh: '', en: '' },
    { zh: '我们与 深圳码隆科技 展开合作，对接其面向理化生实验教学场景的 智慧终端设备与智能平台。码隆科技的方案能够在学生实验过程中对其操作行为进行识别、记录与评分，例如对实验步骤、器材使用和关键操作进行过程性采集，并将这些数据实时汇总到教师端平台中,使教师能够在电脑端查看学生当前的实验状态、实验结果与阶段性表现.基于这一合作基础,我们进一步将学生端实验数据与教师端信息流接入 AR 眼镜系统,使原本停留在平面屏幕中的操作数据与课堂状态能够与眼镜进行双向数据传输,在教师的智能眼镜的中进行显示.让教师在走动观察、关注学生与组织教学时,能够直接在 AR 视野中获得与学生实验进度、操作状态和关键异常相关的辅助信息。',
            en: 'We collaborated with Malong Technology to jointly work with their smart terminal devices and intelligent platform for physics, chemistry, and biology experiment teaching. Malong\'s solution can identify, record, and score students\' operational behaviors during experiments, such as process-based collection of experimental steps, equipment usage, and key operations, and aggregate this data in real-time to the teacher-side platform, enabling teachers to view students\' current experiment status, results, and stage performance on on basis of this collaboration, we further connected student-side experiment data and teacher-side information flow to the AR glasses system, enabling bidirectional data transmission between glasses. This allows teachers to directly access auxiliary information related to students\' experiment progress, operational status, and key anomalies in the AR field while walking, observing, paying attention to students, and organizing teaching.' },
    { zh: '目前老师使用智慧终端的上课过程。老师需要频繁地在讲台电脑、学生实验设备和黑板屏幕之间切换注意力，难以同时关注全班学生的实验状态与个别求助情况；同时教师在课堂上获取的学生数据多为事后统计，难以支持教师在实验过程中进行针对性的讲解与干预。',
            en: 'The current teaching process using smart terminals. Teachers frequently switch attention between the podium computer, student experiment equipment, and blackboard screen, making it difficult to simultaneously monitor all students\' experiment status and individual help requests. Meanwhile, student data obtained by teachers during class is mostly post-hoc statistics, making it hard to support targeted explanations and interventions during experiments.' },
    { zh: '我们进行了教师在理化生实验室的用户旅程图分析，教师在实验课中会经历明显的注意力起伏：刚开始时需要快速进入教学节奏，中段往往因为同时处理多个学生、多个设备和多个问题而进入较高负荷状态，后段则面临总结、讲评与评价的收束压力.图中总结出的痛点也非常关键,例如:教师在巡视时往往只能关注到自己所在区域的学生，难以兼顾整个班级；教室或终端反馈的信息量较大,但真正需要优先关注的学生和事件并不容易被快速识别;个别学生的异常操作、举手求助或掉队情况容易被忽视;同时,实验结束后的数据更多偏向回顾,而缺乏对课堂中实时干预的有效支持.基于这些发现,旅程图下方也给出了相应的机会点,例如通过 在实验过程中显示易错点、为学生提供针对性指导、展示学生完成情况、呈现学生得分细节、对举手和异常状态进行更直观提示 等方式,为教师提供更及时、更聚焦、更具可操作性的辅助',
            en: 'We conducted a user journey mapping analysis of teachers in science labs. Teachers experience noticeable attention fluctuations during experiment classes: needing to quickly enter the teaching rhythm at the beginning; entering higher load states in the middle when simultaneously handling multiple students, devices, and issues; and facing summary, evaluation, and assessment pressure at the end. The pain points summarized in the diagram are also critical: teachers patrolling often only focus on students in their area; difficulty monitoring the entire class; large information volume from classroom or terminal feedback, but students and events that truly need priority attention are not easily identified; individual students\' abnormal operations, raised-hand help requests, or falling behind are easily overlooked; data after experiments leans more toward review, lacking effective support for real-time intervention during class. Based on these findings, opportunity points are also given below the diagram, such as displaying common mistakes during experiments, providing targeted guidance for students, showing student completion status, presenting student score details; providing more intuitive prompts for raised-hand and abnormal status, offering more timely, focused, and actionable assistance for teachers.' },
  ],

  detailTexts: [],  category: { zh: '人机交互研究', en: 'HCI Research' },
  categoryType: 'hci-research',
  tags: ['Education', 'AI', 'Smart glasses', 'Teacher quality'],
  year: 2025,
  role: 'Design Researcher',
  technologies: ['AR (Rokid)', 'AI/LLM', 'Figma', 'User Research'],
  shapeType: 'circle',
  accentColor: 'red',
  featured: true,
  videoUrl: 'https://www.youtube.com/embed/LI6UGLL1lnQ',
  awards: [
    { zh: 'DIA 中国设计智造大奖 — 佳作奖', en: 'DIA China Design Intelligence Award — Honorable Mention' },
    { zh: '2025 Rokid 全国高校 AR 应用挑战赛 — 入围奖', en: '2025 Rokid University AR Application Challenge — Finalist' },
  ],

  // ========== Pain Point Scenarios ==========
  painPointScenarios: {
    position: 1,
    items: [
      {
        number: '01',
        sceneLabel: { zh: '场景一', en: 'Scene 1' },
        title: { zh: '痛点1：注意力分散，信息切换繁杂', en: 'Pain Point 1: Attention Scattered, Frerequent Information Switching' },
        description: { zh: '情景 1：教师巡视时难以直观看到每位学生的实验进度，从而开展有针对性的指导；同时需在平板、学生和黑板屏幕之间频繁切换注意力。老师需要不断到讲台通过电脑查看学生回答情况', en: 'Scenario 1: When patrolling, teachers cannot intuitively see each student\' experiment progress for targeted guidance; meanwhile needing to frequently switch attention between tablets, students, and blackboard screens. Teachers constantly need to go to the podium computer to check students\' response status.' },
        image: '/images/super-teacher/scenario-1.png',
        imageAlt: '场景一：注意力分散',
      },
      {
        number: '02',
        sceneLabel: { zh: '场景二', en: 'Scene 2' },
        title: { zh: '痛点2:视线盲区,学生求助被忽略', en: 'Pain Point 2: Blind Spots, Student Help Overlooked' },
        description: { zh: '情景2：教师在巡视时难以注意到视线盲区（如后方、侧后方)的学生的指导需求.(如学生举手时,老师由于经常需要看学生实验操作,很难注意到举手的学生)', en: 'Scenario 2: During patrolling, teachers have difficulty noticing guidance needs from students in blind spots (such as behind, to the side-rerear). For example, when students raise their hands, teachers often need to watch student experiment operations and find it hard to notice the raised-hand students.' },
        image: '/images/super-teacher/scenario-2.png',
        imageAlt: '场景二:视线盲区',
      },
      {
        number: '03',
        sceneLabel: { zh: '场景三', en: 'Scene 3' },
        title: { zh: '痛点3:反馈滞后,错失实时教学干预时机', en: 'Pain Point 3: Delayed Feedback, Missing Real-time Teaching Intervention Opportunities' },
        description: { zh: '情景3:实验结束后教师展示错误大数据,事后回顾的形式不够及时.实时的数据老师很难在实验过程看到,需要实验后才可以', en: 'Scenario 3: After the experiment, teachers display error big data. The post-hoc review format is not timely enough. Real-time data is difficult for teachers to see during the experiment; it can only be accessed after the experiment ends.' },
        image: '/images/super-teacher/scenario-3.png',
        imageAlt: '场景三:反馈滞后',
      },
      {
        number: '04',
        sceneLabel: { zh: '场景四', en: 'Scene 4' },
        title: { zh: '痛点4:数据密集难以支持快速决策', en: 'Pain Point 4: Data-Intensive, Hard to Support Quick Decision-Making' },
        description: { zh: '情景 4:在挑选被众评的同学时（老师会挑选学生进行公开演示,并大家一起打分)，数据看板信息密集,教师通常依赖随机选择或询问学生意见,因数据难以直观支持快速决策', en: 'Scenario 4: When selecting students for peer review (teachers choose students for public demonstration and everyone scores together), the data dashboard is information-dense. Teachers usually rely on random selection or asking student opinions, because the data is hard to intuitively support quick decision-making.' },
        image: '/images/super-teacher/scenario-4.png',
        imageAlt: '场景四:数据密集',
      },
      {
        number: '05',
        sceneLabel: { zh: '场景五', en: 'Scene 5' },
        title: { zh: '痛点5:隐私保护不足', en: 'Pain Point 5: Insadequate Privacy Protection' },
        description: { zh: '情景5:教师查看学生理论题作答时,数据繁琐不易提炼重点,难以快速识别需讲解的问题;同时学生错误被公开展示,可能导致尴尬或心理负担。',
            en: 'Scenario 5: When teachers view students\' theory question responses, the data is cumbersome and hard to extract key points, making it difficult to quickly identify questions needing explanation. At the same time, student errors are publicly displayed, which may cause embarrassment or psychological burden.' },
        image: '/images/super-teacher/scenario-5.png',
        imageAlt: '场景五:隐私保护不足',
      },
    ],
  },

  // ========== Design Positioning Cards ==========
  designPositioningCards: {
    position: 3,
    title: { zh: '设计定位', en: 'Design Positioning' },
    afterLargeText: { zh: '故事板', en: 'Storyboard' },
    afterSmallText: { zh: '当实验开始后，学生完成实验提交分数后系统会先在教师视野中对 **已完成实验的学生显示分数**，而尚未完成的学生则暂不显示成绩,帮助教师快速区分课堂整体进度；当教师 **靠近或点击某位有分数的学生** 时，系统会进一步展开该学生在实验过程中的 **具体错误情况与步骤表现**,使教师能够从总览进入到个体诊断;当越来越多学生完成作答后,系统还会根据全班数据自动弹出 **主要共性错误提示**,帮助教师及时发现班级层面的高频问题,并把注意力优先投向可能存在普遍困难的操作环节。与此同时,教师也可以通过菜单切换查看 **哪些学生还没有完成实验**,以便在巡视时更有针对性地分配关注;如果学生在实验过程中需要帮助,还可以通过终端设备进行 **举手求助**,教师眼镜中会显示相应的举手图标,而对于那些因为空间位置、视线遮挡等原因不易直接发现的学生,系统还会通过 **箭头提示** 引导教师快速定位视野盲区中的求助者。',
            en: 'When the experiment begins, after students complete experiments and submit scores, the system first displays scores for **completed students** in the teacher\'s field of view. Students who have not yet completed do not show grades temporarily, helping teachers quickly distinguish overall classroom progress. When the teacher **approaches or clicks on a scored student**, the system further expands that student\'s **specific error conditions and step performance** during the experiment, allowing the teacher to go from overview to individual diagnosis. When more students complete their responses, the system automatically pops up **main common error alerts** based on class-wide data, helping teachers timely identify class-level high-frequency issues and and prioritizing attention toward operations that may have widespread difficulties. Meanwhile, teachers can also switch through the menu to view **which students have not yet completed the experiment**, to more targeted allocate attention during patrolling. If students need help during the experiment, they can also **raise their hand for help** through the terminal device, and the teacher\'s glasses will display the corresponding raised-hand icon. For students who are not easily directly discovered due to spatial position, line-of-sight obstruction, or other reasons, the system also uses **arrow prompts** to guide the teacher to quickly locate help-seekers in blind spots.' },
    items: [
      {
        number: '1',
        title: { zh: 'AR眼镜成为老师的控制终端', en: 'AR Glasses as Teacher\'s Control Terminal' },
        description: { zh: '老师可以通过Rokid眼镜进行一些实验状态的切换，老师不用频繁到讲台电脑进行实验的操作。', en: 'Teachers can switch experiment status through Rokid glasses without frequently going to the podium computer for experiment operations.' },
        image: '/images/super-teacher/icon1.svg',
        imageAlt: 'AR眼镜控制终端',
      },
      {
        number: '2',
        title: { zh: '学生个人情况查看', en: 'Individual Student Status View' },
        description: { zh: '老师可以通过AR眼镜快速查看学生的回答情况，操作分数,以及操作失误扣分的详情', en: 'Teachers can quickly view student response status, operation scores, and details of point deductions through AR glasses.' },
        iconType: 'student',
      },
      {
        number: '3',
        title: { zh: '大模型实时分析学生提交的数据', en: 'AI Model Real-time Analysis of Student Data' },
        description: { zh: '大模型实时分析学生的操作回答情况,并根据回答情况反应给老师,老师可以及时进行讲解', en: 'The AI model analyzes students\' operational responses in real-time and reports to the teacher based on their responses. Teachers can provide timely explanations.' },
        iconType: 'ai',
      },
    ],
  },

  // ========== Collage Galleries ==========
  collageGalleries: [
    {
      position: 3,
      images: [
        { src: '/images/super-teacher/collage-1.png', rotation: -5 },
        { src: '/images/super-teacher/collage-2.png', rotation: 3 },
        { src: '/images/super-teacher/collage-3.png', rotation: -2 },
        { src: '/images/super-teacher/collage-4.png', rotation: 4 },
        { src: '/images/super-teacher/collage-5.png', rotation: -3 },
        { src: '/images/super-teacher/collage-6.png', rotation: 2 },
      ],
      afterLargeText: { zh: '设计特征', en: 'Design Features' },
      afterSmallText: { zh: '我们提出了四个核心设计特征：**实验进度与错误细节的实时可视化**帮助教师快速掌握全班进度与个体表现;**空间化求助角标**解决视野盲区中学生求助被忽略的问题;**AI驱动的教学行动建议**在关键时刻推送智能提示,辅助教师做出针对性干预;**教室空间便利贴**将关键信息固定在空间中,减轻教师的认知负荷。', en: 'We proposed four core design features: **Real-time visualization of experiment progress and error details** helps teachers quickly grasp overall class progress and individual performance; **Spatial help request badge** addresses the issue of student help requests being overlooked in blind spots; **AI-driven teaching action suggestions** push smart prompts at critical moments, assisting teachers in making targeted interventions; **Classroom space sticky notes** fix key information in space, reducing teacher cognitive load.' },
    },
  ],

  // ========== Design Feature Sections ==========
  designFeatureSections: [
    {
      position: 3,
      title: { zh: '设计特征 1:实验进度与错误细节的实时可视化', en: 'Design Feature 1: Real-time Visualization of Experiment Progress and Error Details' },
      images: [
        '/images/super-teacher/feature-1-1.png',
        '/images/super-teacher/feature-1-2.png',
        '/images/super-teacher/feature-1-3.png',
      ],
      cards: [
        {
          number: '1',
          description: { zh: '实验开始后，已完成实验的学生,其得分会显示在头顶,教师可直观地看到谁已完成,并查看其操作表现。', en: 'After the experiment begins, scores of completed students are displayed above their heads. Teachers can intuitively see who has finished and view their operational performance.' },
        },
        {
          number: '2',
          description: { zh: '教师可以通过走近学生或点击触控板查看学生的具体操作错误细节。', en: 'Teachers can view detailed student operation errors by approaching the student or clicking the touchpad.' },
          highlightTexts: [
            { zh: '走近学生', en: 'Appro student' },
            { zh: '点击触控板', en: 'Click touchpad' },
          ],
        },
        {
          number: '3',
          description: { zh: '在实验进行的后半段,教师可切换显示模式,聚焦尚未完成实验的学生。', en: 'In the second half of the experiment, teachers can switch display mode to focus on students who have not yet completed the experiment.' },
        },
      ],
      features: [
        { text: { zh: '信息呈现形式:固定在学生头上', en: 'Information presentation: Fixed above student heads' } },
        { text: { zh: '信息层级:可展开层级', en: 'Information hierarchy: Expandable levels' } },
        { text: { zh: '信息呈现时机:根据课堂环节及学生实验进度出现', en: 'Information timing: Appears based on classroom phase and student experiment progress' } },
        { text: { zh: '信息交互方式:点击展开、靠近展开、点击切换显示状态', en: 'Information interaction: Click to expand, approach to expand, click to switch display status' } },
      ],
      tagLabel: { zh: '显示与交互特性', en: 'Display & Interaction Features' },
    },
    {
      position: 3,
      title: { zh: '设计特征 2:空间化求助角标', en: 'Design Feature 2: Spatial Help Request Badge' },
      images: [
        '/images/super-teacher/feature-2-1.png',
        '/images/super-teacher/feature-2-2.png',
        '/images/super-teacher/feature-2-3.png',
      ],
      cards: [
        {
          number: '1',
          description: { zh: '当学生需要帮助时,可在终端上点击"举手"按钮。', en: 'When students need help, they can click the "Raise Hand" button on the terminal.' },
        },
        {
          number: '2',
          description: { zh: '教师佩戴的智能眼镜会显示求助图标的位置,使教师无论身在教室何处、视角如何,都能迅速识别求助来源。', en: 'The teacher\'s smart glasses display the help request icon position, enabling teachers to quickly identify the help source regardless of their location in the classroom or viewing angle.' },
        },
        {
          number: '3',
          description: { zh: '同时,学生头顶会出现一个求助图标,当教师走近并停留时,该图标会自动消失。', en: 'At the same time, a help request icon appears above the student. When the teacher approaches and stays, the icon automatically disappears.' },
        },
      ],
      features: [
        { text: { zh: '信息呈现形式:显示在教师视野+固定在学生头上', en: 'Information presentation: Displayed in teacher\'s field of view + fixed above student head' } },
        { text: { zh: '信息呈现时机:学生主动触发', en: 'Information timing: Student-initiated trigger' } },
        { text: { zh: '信息交互方式:教师找到该学生后,角标消失,在该学生处停留后,举手标志消失', en: 'Information interaction: Badge disappears after teacher finds the student; raised-hand icon disappears after staying with the student' } },
      ],
      tagLabel: { zh: '显示与交互特性', en: 'Display & Interaction Features' },
    },
    {
      position: 3,
      title: { zh: '设计特征 3:AI驱动的教学行动建议通知', en: 'Design Feature 3: AI-Driven Teaching Action Suggestion Notification' },
      images: [
        '/images/super-teacher/feature-3-1.png',
        '/images/super-teacher/feature-3-2.png',
        '/images/super-teacher/feature-3-3.png',
      ],
      cards: [
        {
          number: '1',
          description: { zh: '在实验过程中,当多数学生出现相同问题时,AI 会自动推送提醒,提示教师进行统一讲解。', en: 'During the experiment, when most students have the same issue, the AI automatically pushes a reminder suggesting the teacher provide a unified explanation.' },
        },
        {
          number: '2',
          description: { zh: '高亮推荐众评学生.AI推荐原则:该生的错误在班级内比较有代表性;老师在该生区域去的比较少。', en: 'Highlight recommended peer review students. AI recommendation criteria: The student\'s errors are relatively representative within the class; the teacher visits the student\'s area less frequently.' },
        },
        {
          number: '3',
          description: { zh: '在课程即将结束时,AI 会整理课堂的关键教学洞察,并提醒教师进行总结与反思。', en: 'As the class nears its end, the AI organizes key teaching insights and reminds the teacher to summarize and reflect.' },
        },
      ],
      features: [
        { text: { zh: '信息呈现形式:显示在教师视野/教师视野+固定在学生头上', en: 'Information presentation: Displayed in teacher\'s field of view / teacher\'s field of view + fixed above student head' } },
        { text: { zh: '信息呈现时机:AI智能推送/教师主动触发', en: 'Information timing: AI smart push / teacher-initiated trigger' } },
        { text: { zh: '信息交互方式:显示若干秒后消失', en: 'Information interaction: Displays for a few seconds then disappears' } },
      ],
      tagLabel: { zh: '显示与交互特性', en: 'Display & Interaction Features' },
    },
    {
      position: 3,
      title: { zh: '设计特征 4:教室空间便利贴', en: 'Design Feature 4: Classroom Space Sticky Notes' },
      images: [
        '/images/super-teacher/feature-4-1.png',
        '/images/super-teacher/feature-4-2.png',
      ],
      cards: [
        {
          number: '1',
          description: { zh: '在实验过程中,教室空间的墙上会有一些便利贴,提醒教师关注学生的关键操作步骤。', en: 'During the experiment, some sticky notes appear on the classroom space walls, reminding teachers to pay attention to students\' key operation steps.' },
        },
        {
          number: '2',
          description: { zh: '在讲评题目时,会总结每道题的整体作答情况,并在每位学生头顶显示作答情况,使教师无需查看数据看板即可专注于学生进行题目重点讲解。', en: 'When reviewing questions, the overall response of each question is summarized and displayed above each student, enabling teachers to focus on students for key explanations without viewing the data dashboard.' },
        },
      ],
      features: [
        { text: { zh: '信息呈现形式:固定在教师空间', en: 'Information presentation: Fixed in teacher\'s space' } },
        { text: { zh: '信息呈现时机:根据课堂环节显示不同内容', en: 'Information timing: Displays different content based on classroom phase' } },
        { text: { zh: '信息交互方式:常显示', en: 'Information interaction: Always displayed' } },
      ],
      tagLabel: { zh: '显示与交互特性', en: 'Display & Interaction Features' },
    },
  ],

  // ========== Ending Images ==========
  endingImages: [
    {
      largeText: { zh: '设计组件总览', en: 'Design Component Overview' },
      smallText: { zh: '系统包含多个核心 UI 组件:学生头顶的 **分数显示** 与 **求助角标**、教师视野中的 **AI 通知气泡** 与 **模式切换菜单**、以及固定在教室空间的 **便利贴提示**。每个组件都针对特定教学场景设计,通过不同的信息呈现形式、呈现时机和交互方式,共同构成完整的智慧课堂辅助体验。',
            en: 'The system contains multiple core UI components: **score display** and **help request badge** above student heads, **AI notification bubbles** and **mode switch menu** in the teacher\'s field of view, and **sticky note prompts** fixed in classroom space. Each component is designed for specific teaching scenarios, Through different information presentation forms, timing, and interaction methods, they together form a complete smart classroom assistive experience.' },
      image: '/images/super-teacher/ending-1.png',
    },
    {
      largeText: { zh: '用户测试与作品参展', en: 'User Testing and Exhibition' },
      smallText: { zh: '我们与一线理化生教师合作,进行了系统的用户测试并与他们进行深入的访谈调用,收集了宝贵的反馈意见,为下一代迭代进行准备以及为在真实课堂中进行使用做好前期调用.\n\n  该项目在 **2025 中国设计智造大奖与 Rokid 高校 AR 应用挑战赛** 中展出,向公众展示了 AR + AI 赋能智慧教育的创新探索。',
            en: 'We collaborated with frontline physics, chemistry, and biology teachers to conduct systematic user testing and in-depth interviews, collecting valuable feedback for the next iteration and preparation for use in real classrooms.\n\n  The project was exhibited at the **2025 China Design Intelligence Award and Rokid University AR Application Challenge**, showcasing the public demonstration of innovative AR + AI empowered smart education.' },
      image: '/images/super-teacher/ending-2.png',
    },
  ],
};
