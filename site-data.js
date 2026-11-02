/**
 * Aliang Li / 李阿亮 — bilingual academic website content.
 * Updated from the Chinese and English CVs provided by the site owner (2026).
 * Edit paired en/zh values together. Do not publish private CV originals here.
 */
window.SITE_DATA = {
  settings: { draft: false },
  profile: {
    name: { en: 'Aliang Li', zh: '李阿亮' },
    title: { en: 'Lecturer · Linguistics', zh: '讲师 · 语言学' },
    institution: { en: 'School of Literature, Central China Normal University', zh: '华中师范大学文学院' },
    phd: { en: 'Ph.D., Zhejiang University (2026)', zh: '浙江大学文学博士（2026）' },
    email: 'lialiang0908@126.com',
    waveformUrl: 'assets/name-waveform.png',
    cvUrl: 'files/cv/Aliang_Li_CV.pdf', // Public-facing PDF; no DOCX is published.
    links: { googleScholar: '', orcid: '', researchgate: '', personal: '' },
    intro: {
      en: 'Comparative linguistics, language typology and change across East and Southeast Asian languages.',
      zh: '从跨语言比较出发，探索东亚与东南亚语言的结构、演变与习得。'
    },
    bio: [
      {
        en: 'I am a Lecturer in Linguistics at the School of Literature, Central China Normal University. I received my Ph.D. from Zhejiang University in 2026 and undertook joint doctoral training at École pratique des hautes études (EPHE–PSL), Paris, from 2024 to 2025.',
        zh: '李阿亮，浙江大学文学博士，现为华中师范大学文学院讲师。2024—2025年在法国巴黎高等研究实践学院（EPHE–PSL）开展联合培养博士研究。'
      },
      {
        en: 'My research centers on cross-linguistic comparison, linguistic typology and language change, especially morphosyntax in Sinitic, Tibeto-Burman and Tai-Kadai languages. Using historical comparison, typological analysis and experimental methods, I investigate comparative constructions, nominalization, grammaticalization, language contact, tone production and perception, and language acquisition. Languages I work with include Hani, Thai, Chinese and Vietnamese.',
        zh: '我的研究围绕跨语言比较、语言类型学与语言演变展开，重点关注汉语、藏缅语与侗台语的形态句法及其界面问题，并涉及语法化、语言接触与语言习得。以哈尼语、泰语、汉语和越南语等语言为主要对象，结合历时比较、类型分析与实验方法，考察比较句、名物化、指称与冠词、声调产出和感知等现象。'
      }
    ],
    availability: { en: 'Open to scholarly exchange and collaboration', zh: '欢迎学术交流与合作' }
  },
  research: [
    {
      number: '01',
      title: { en: 'Linguistic typology & morphosyntax', zh: '语言类型学与形态句法' },
      description: {
        en: 'Cross-linguistic studies of comparative constructions, nominalization and grammatical categories, focusing on Chinese and Southeast Asian languages.',
        zh: '比较汉语与东南亚语言的句法和形态结构，重点考察差比构式、名物化与语法范畴的跨语言差异。'
      },
      tags: { en: ['Comparatives', 'Nominalization'], zh: ['差比句', '名物化'] }
    },
    {
      number: '02',
      title: { en: 'Language change & contact', zh: '语言演变与接触' },
      description: {
        en: 'Historical comparison and grammaticalization in Hani, Thai and Chinese, including contact-induced change and the development of definiteness.',
        zh: '从历时比较与语言接触角度研究哈尼语、泰语及汉语的语法化路径、关系词演变和有定性表达。'
      },
      tags: { en: ['Grammaticalization', 'Historical linguistics'], zh: ['语法化', '历史语言学'] }
    },
    {
      number: '03',
      title: { en: 'Phonetics, phonology & acquisition', zh: '语音、音系与语言习得' },
      description: {
        en: 'Experimental research on tone production and perception, especially Mandarin tone acquisition in Hani–Mandarin bilingual children.',
        zh: '运用实验语音学与感知实验研究声调的产出和感知，尤其关注哈尼语—普通话双语儿童的普通话声调习得。'
      },
      tags: { en: ['Tone', 'Speech perception', 'Bilingualism'], zh: ['声调', '语音感知', '双语习得'] }
    },
    {
      number: '04',
      title: { en: 'Primary language data', zh: '第一手语言材料' },
      description: {
        en: 'Working with linguistic data from Hani, Thai, Jingpho, Vietnamese and varieties of Chinese to connect language-specific evidence with broader typological questions.',
        zh: '利用哈尼语、泰语、景颇语、越南语及汉语方言等第一手材料，将具体语言描写与类型学问题相结合。'
      },
      tags: { en: ['Language data', 'Fieldwork'], zh: ['语言材料', '田野调查'] }
    }
  ],
  focusLanguages: { en: ['Hani', 'Thai', 'Chinese', 'Vietnamese', 'Jingpho', 'Dai / Tai'], zh: ['哈尼语', '泰语', '汉语', '越南语', '景颇语', '傣语'] },
  // Preserve the original titles of English-language papers in both language views; translated glosses only accompany Chinese titles in English view.
  // [pdf] links below point only to the six PDF files supplied by the site owner.
  publications: [
    {
      year: '—', type: 'article', status: 'accepted',
      authors: { en: 'Li, Aliang', zh: '李阿亮' },
      title: {
        en: '绿春大寨哈尼语 dʑu⁵⁵da⁵⁵（箸）源流考 [On the origin of dʑu⁵⁵da⁵⁵ (箸) in Luchun Hani]',
        zh: '绿春大寨哈尼语 dʑu⁵⁵da⁵⁵（箸）源流考'
      },
      venue: { en: 'Journal of Chinese Linguistics · Accepted', zh: 'Journal of Chinese Linguistics · 已录用' }, links: []
    },
    {
      year: '2026', type: 'article', status: 'published',
      authors: { en: 'Li, Aliang', zh: '李阿亮' },
      title: {
        en: '哈尼语递进性差比式构式研究 [On the progressive-comparative construction in Hani]',
        zh: '哈尼语递进性差比式构式研究'
      },
      venue: { en: '语言学论丛 (Essays on Linguistics) · 2026(3): 97–109', zh: '《语言学论丛》2026 年第 3 期，97–109 页' }, links: [{ kind: 'pdf', url: 'files/papers/2026_Li_Hani_Progressive_Comparative.pdf' }]
    },
    {
      year: '2026', type: 'article', status: 'published',
      authors: { en: 'Li, Aliang', zh: '李阿亮' },
      title: {
        en: '泰语的超过型差比结构——兼论与古汉语的关系 [Exceed comparative constructions in Thai: Their relation to Old Chinese]',
        zh: '泰语的超过型差比结构——兼论与古汉语的关系'
      },
      venue: { en: '民族语文 (Minority Languages of China) · 2026(3): 26–35', zh: '《民族语文》2026 年第 3 期，26–35 页' }, links: [{ kind: 'pdf', url: 'files/papers/2026_Li_Thai_Exceed_Comparative.pdf' }]
    },
    {
      year: '2025', type: 'article', status: 'published',
      authors: 'Li, Aliang',
      title: 'Is Pitch Height or Pitch Contour a Challenge? Production of Mandarin Tones in Hani–Mandarin Bilingual Children',
      venue: 'Journal of Speech, Language, and Hearing Research · 68(7): 3133–3154', links: [{ kind: 'pdf', url: 'files/papers/2025_Li_Mandarin_Tones_Hani_Bilinguals.pdf' }]
    },
    {
      year: '2024', type: 'article', status: 'published', authors: 'Li, Aliang',
      title: 'Nominalizations and its grammaticalization in standard Thai',
      venue: 'Folia Linguistica · 58(2): 291–326', links: [{ kind: 'pdf', url: 'files/papers/2024_Li_Nominalization_Thai.pdf' }]
    },
    {
      year: '2023', type: 'review', status: 'published',
      authors: { en: 'Li, Aliang', zh: '李阿亮' },
      title: { en: '《世界语言的冠词》介评 [Review of Articles in the World’s Languages]', zh: '《世界语言的冠词》介评' },
      venue: { en: '外语教学与研究 (Foreign Language Teaching and Research) · 2023(5): 793–797', zh: '《外语教学与研究》2023 年第 5 期，793–797 页' }, links: [{ kind: 'pdf', url: 'files/papers/2023_Li_Articles_World_Languages_Review.pdf' }]
    },
    {
      year: '2023', type: 'article', status: 'published',
      authors: { en: 'Li, Aliang', zh: '李阿亮' },
      title: { en: '古汉语「过」在泰语中的演变 [The evolution of the Old Chinese word guo (过) in Thai]', zh: '古汉语「过」在泰语中的演变' },
      venue: { en: '语言研究 (Studies in Language and Linguistics) · 2023(3): 116–127', zh: '《语言研究》2023 年第 3 期，116–127 页' }, links: [{ kind: 'pdf', url: 'files/papers/2023_Li_Guo_Thai.pdf' }]
    },
    {
      year: '2022', type: 'article', status: 'published',
      authors: { en: 'Li, Aliang', zh: '李阿亮' },
      title: { en: '哈尼语形容词重叠式 [Adjective reduplication in Hani]', zh: '哈尼语形容词重叠式' },
      venue: { en: '红河学院学报 (Journal of Honghe University) · 2022(4): 14–18', zh: '《红河学院学报》2022 年第 4 期，14–18 页' }, links: []
    },
    {
      year: '2022', type: 'article', status: 'published',
      authors: { en: 'Li, Aliang & Guo Yajie', zh: '李阿亮、郭亚杰' },
      title: { en: '云南泸西中枢镇话音系 [The phonology of Zhongshu Town speech in Luxi, Yunnan]', zh: '云南泸西中枢镇话音系' },
      venue: { en: '语言历史论丛 (Essays on Language History) · 2022(1): 114–140+4', zh: '《语言历史论丛》2022 年第 1 期，114–140+4 页' }, links: []
    },
    {
      year: '2021', type: 'article', status: 'published',
      authors: { en: 'Li, Aliang', zh: '李阿亮' },
      title: { en: '哈尼语差比句研究 [Comparative constructions in Hani]', zh: '哈尼语差比句研究' },
      venue: { en: '红河学院学报 (Journal of Honghe University) · 2021(4): 6–11', zh: '《红河学院学报》2021 年第 4 期，6–11 页' }, links: []
    }
  ],
  // Preserve presentation titles in the language in which they were delivered.
  // On the Chinese page, the international (Norway) conference keeps its English name,
  // while conferences held in China use their Chinese names; the English page retains English venue labels.
  // Journal article titles and publication citations are never changed in this section.
  talks: [
    {
      year: '2025',
      title: 'Categorical perception of Mandarin T2–T3 in Hani–Mandarin bilingual children: Effects of preceding and following phonetic contexts.',
      venue: 'EuroSLA 34 (34th Conference of the European Second Language Association) · UiT The Arctic University of Norway · Tromsø, Norway'
    },
    {
      year: '2024',
      title: 'Production and categorical perception of Mandarin tones in Hani–Mandarin bilingual children.',
      venue: { en: 'Second Language Research: Multiple Perspectives · Nanchang University · Nanchang, China', zh: '“多视角二语研究”国际学术研讨会 · 南昌大学' }
    },
    {
      year: '2023',
      title: 'Nominalizations in standard Thai.',
      venue: { en: '7th National Graduate Academic Forum in Chinese Language and Literature · Guangxi University · Nanning, China', zh: '第七届中文学科全国研究生学术论坛 · 广西大学' }
    },
    {
      year: '2023',
      title: { en: '哈尼语量词的冠词化：个体计量到有定指称 [The grammaticalization of Hani classifiers into articles: From individuation to definite reference]', zh: '哈尼语量词的冠词化：个体计量到有定指称' },
      venue: { en: 'New Perspectives in Studies of Classifiers · Wuhan University', zh: '“量词研究新视野：东亚及东南亚量词研究”国际研讨会 · 武汉大学' }
    },
    {
      year: '2022',
      title: { en: '绿春哈尼语「箸」源流考 [On the origin of dʑu⁵⁵da⁵⁵ (“chopsticks”) in Luchun Hani]', zh: '绿春哈尼语「箸」源流考' },
      venue: { en: '15th Annual Academic Meeting of Minority Languages of China · Yunnan Minzu University', zh: '《民族语文》第 15 届学术年会 · 云南民族大学' }
    },
    {
      year: '2021',
      title: { en: '哈尼语形容词重叠式研究 [Adjective reduplication in Hani]', zh: '哈尼语形容词重叠式研究' },
      venue: { en: '4th Annual Meeting of the Typology Committee, China Association for Minority Languages · Changsha', zh: '中国民族语言学会类型学专业委员会第四届学术年会 · 长沙' }
    },
    {
      year: '2021',
      title: { en: '越南语单字调的声学分析 [Acoustic analysis of Vietnamese citation tones]', zh: '越南语单字调的声学分析' },
      venue: { en: '14th Phonetic Conference of China · Lanzhou', zh: '第十四届中国语音学学术会议 · 兰州' }
    }
  ],
  awards: [
    {
      year: '2025',
      title: { en: 'Second Prize, 11th Zhejiang University Award for Outstanding Student Research in Humanities and Social Sciences', zh: '浙江大学第十一届学生人文社会科学研究优秀成果奖二等奖' }
    },
    {
      year: '2024',
      title: { en: 'Second Prize, Hu Baixi Linguistics Scholarship (Doctoral Student Category), Zhejiang University', zh: '浙江大学文学院胡百熙语言学奖学金博士生二等奖' }
    }
  ]
};
