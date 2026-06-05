const DATE_RANGE = [
  "2026-05-27",
  "2026-05-28",
  "2026-05-29",
  "2026-05-30",
  "2026-05-31",
  "2026-06-01",
  "2026-06-02",
  "2026-06-03",
];

const FIELD_LABELS = {
  platform: "平台",
  agenda: "议程",
  topic: "话题",
  persona: "人群",
};

const MODE_COPY = {
  platform: {
    title: "平台 x 日期",
    subtitle: "看公开可核验样本在 5 月 27 日到 6 月 3 日的来源分布，不代表全网平台声量。",
  },
  agenda: {
    title: "议程 x 日期",
    subtitle: "看开幕式、发布、展区、国际论坛等活动节点被公开网页捕获的情况。",
  },
  topic: {
    title: "话题 x 日期",
    subtitle: "看 AI、智能硬件、创作者经济、国际合作等主题在公开样本里的起落。",
  },
  persona: {
    title: "人群 x 日期",
    subtitle: "看官方、媒体、创作者等传播主体在公开样本里的贡献。",
  },
};

const ORDER = {
  platform: ["官网/新闻稿", "新闻/网站", "微信", "小红书", "LinkedIn", "X", "抖音", "TikTok", "YouTube", "B站", "微博"],
  agenda: [
    "开幕式",
    "展区开放",
    "BGlobal Summit",
    "BGlobal新品发布",
    "Creator Summit",
    "Fund At First Pitch",
    "BEYOND Hack Day",
    "BEYOND Awards",
    "Digital AI Summit",
    "Web2+3 AI论坛",
    "国际科技论坛",
    "会后社交",
  ],
  topic: ["AI", "机器人", "出海", "智能硬件", "低空经济", "Web3", "医疗健康", "创作者经济", "投资路演", "国际合作", "展商故事"],
  persona: ["官方/主办方", "媒体", "参展商", "嘉宾", "投资人", "KOL/创作者", "观众"],
};

const sampleRecords = [
  {
    "date": "2026-05-27",
    "platform": "官网/新闻稿",
    "agenda": "BGlobal新品发布",
    "topic": "智能硬件",
    "persona": "官方/主办方",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "BEYOND EXPO 官网",
    "title": "iFLYTEK to Launch AI Glasses at BEYOND Expo 2026",
    "url": "https://www.beyondexpo.com/2026/05/27/iflytek-to-launch-ai-glasses-at-beyond-expo-2026/",
    "notes": "公开官网稿，可核验；未公开平台互动量和情绪口径。"
  },
  {
    "date": "2026-05-27",
    "platform": "官网/新闻稿",
    "agenda": "BGlobal新品发布",
    "topic": "智能硬件",
    "persona": "官方/主办方",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "BEYOND EXPO 官网",
    "title": "BGlobal New Product Launch: 11 Top Tech Companies to Debut Next-Generation Innovations",
    "url": "https://www.beyondexpo.com/2026/05/27/bglobal-new-product-launch-11-top-tech-companies-to-debut-next-generation-innovations-to-the-world-at-beyond-expo-2026/",
    "notes": "公开官网稿，可核验；说明 BGlobal 新品发布阵容，未公开互动量。"
  },
  {
    "date": "2026-05-27",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "国际合作",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "关于横琴",
    "title": "横琴科技企业组团赴澳!亮相 BEYOND Expo 2026",
    "url": "",
    "notes": "搜狗微信搜索第 8 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：横琴近 40 家本土科技企业、科研机构,组团奔赴澳门,参加第六届 BEYOND 国际科技创新博览会(BEYOND Expo 2026).作为粤..."
  },
  {
    "date": "2026-05-27",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "机器人",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "人形机器人孵化器",
    "title": "邀请函| 2026澳门BEYOND EXPO2026 -上海市人形机器人创新孵化器专区",
    "url": "",
    "notes": "搜狗微信搜索第 6 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。"
  },
  {
    "date": "2026-05-27",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "AI",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "邵志敏观察",
    "title": "BEYOND EXPO前瞻:AI不止在屏幕里",
    "url": "",
    "notes": "搜狗微信搜索第 10 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：今天是 BEYOND Expo 2026 开展前夕的媒体日活动,提前看到了一些创新科技产品.现场很有意思,很多产品就是一个个正在走向真..."
  },
  {
    "date": "2026-05-27",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "国际合作",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "深圳模力营AI生态社区",
    "title": "模力舞台 | 集结20+新锐企业力量,亮相澳门 BEYOND Expo 2026",
    "url": "",
    "notes": "搜狗微信搜索第 9 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：2026年5月27日至30日,亚洲最大的科技创新和生态博览会 BEYOND Expo 2026于澳门威尼斯人金光会展中心盛大启幕.本届大会以..."
  },
  {
    "date": "2026-05-27",
    "platform": "微信",
    "agenda": "Fund At First Pitch",
    "topic": "投资路演",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "珠海先进集成电路研究院",
    "title": "全攻略|数实共生风暴来袭!BEYOND Expo 2026终极通关指南,看这一篇就够了!",
    "url": "",
    "notes": "搜狗微信搜索第 4 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：BEYOND Expo 2026 的现场,共同见证这些极具社会责任感、即将颠覆人类未来生活方式的硬核创新力量!极限速投这绝不是一场普..."
  },
  {
    "date": "2026-05-27",
    "platform": "微信",
    "agenda": "开幕式",
    "topic": "国际合作",
    "persona": "官方/主办方",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "BEYOND Expo",
    "title": "聚焦AI从数字走向物理世界,BEYOND Expo 2026盛大开幕",
    "url": "",
    "notes": "搜狗微信搜索第 2 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：BEYOND Expo 2026开幕式在澳门巴黎人酒店·巴黎人剧场举行,正式拉开大会帷幕.本届博览会以“AI:数实共生“为主题,聚焦人..."
  },
  {
    "date": "2026-05-27",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "医疗健康",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "Peek膝关节",
    "title": "中科医材参展 BEYOND Expo 2026|链接全球创新生态,共探未来医疗科技",
    "url": "",
    "notes": "搜狗微信搜索第 5 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：BEYOND Expo 2026,于澳门威尼斯人金光会展 Hall A-C|SK-617 展台,与来自全球的科技企业、创业者、投资机构及产业伙伴共同参..."
  },
  {
    "date": "2026-05-27",
    "platform": "新闻/网站",
    "agenda": "开幕式",
    "topic": "AI",
    "persona": "媒体",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "澳門週報",
    "title": "AI數實共生 鏈接全球創新！BEYOND Expo 2026在澳門盛大啟幕",
    "url": "https://weeklymacao.com/detail/480",
    "notes": "港澳本地媒体公开报道，可核验；页面显示阅读量但未纳入互动口径。"
  },
  {
    "date": "2026-05-27",
    "platform": "新闻/网站",
    "agenda": "开幕式",
    "topic": "智能硬件",
    "persona": "媒体",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "TechNode",
    "title": "At BEYOND Expo 2026, XREAL CEO predicts an iPhone moment for AI glasses",
    "url": "https://technode.com/2026/05/27/at-beyond-expo-2026-xreal-ceo-predicts-an-iphone-moment-for-ai-glasses/",
    "notes": "TechNode 公开报道，可核验；未公开阅读、分享或评论数据。"
  },
  {
    "date": "2026-05-27",
    "platform": "新闻/网站",
    "agenda": "BGlobal新品发布",
    "topic": "AI",
    "persona": "媒体",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "TechNode",
    "title": "From video understanding to edge deployment Om AI targets real-world AI",
    "url": "https://technode.com/2026/05/27/from-video-understanding-to-edge-deployment-om-ai-targets-real-world-ai/",
    "notes": "TechNode 公开报道，可核验；未公开阅读、分享或评论数据。"
  },
  {
    "date": "2026-05-27",
    "platform": "新闻/网站",
    "agenda": "开幕式",
    "topic": "AI",
    "persona": "媒体",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "TNGlobal",
    "title": "AI: digital to physical – the 6th BEYOND EXPO is set to open in Macau",
    "url": "https://technode.global/2026/05/27/ai-digital-to-physical-the-6th-beyond-expo-is-set-to-open-in-macau/",
    "notes": "TNGlobal 公开报道/媒体合作稿，可核验；未公开互动量。"
  },
  {
    "date": "2026-05-27",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "AI",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 29,
    "sentiment": null,
    "source": "Olivia奥莉杨",
    "title": "谁在🌟澳门Beyond Expo AI科技展",
    "url": "https://www.rednote.com/explore/6a15a4080000000037034abc",
    "notes": "小红书网页版人工采集；补搜关键词「beyond expo」；页面显示互动：29；日期按页面显示“6天前”折算。"
  },
  {
    "date": "2026-05-27",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "展商故事",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 2179,
    "sentiment": null,
    "source": "超级Dunk",
    "title": "拒绝看热闹！BEYOND Expo2026前沿速递",
    "url": "https://www.rednote.com/explore/6a150274000000000702ef49",
    "notes": "小红书网页版人工采集；补搜关键词「beyondexpo2026」；页面显示互动：2179；日期按页面显示“6天前”折算。"
  },
  {
    "date": "2026-05-27",
    "platform": "LinkedIn",
    "agenda": "展区开放",
    "topic": "AI",
    "persona": "参展商",
    "mentions": 1,
    "engagement": 28,
    "sentiment": null,
    "source": "InnoX Shenzhen",
    "title": "30 Shenzhen startups bring AI + hardware products to BEYOND Expo 2026",
    "url": "https://www.linkedin.com/company/beyond-expo",
    "notes": "LinkedIn 公开公司页采样；BEYOND Expo 转发 InnoX Shenzhen 更新，页面显示“6d”，按 2026-06-02 折算为 5月27日；公开 reactions：28；非原帖直链，按公司页更新核验。"
  },
  {
    "date": "2026-05-27",
    "platform": "LinkedIn",
    "agenda": "展区开放",
    "topic": "AI",
    "persona": "参展商",
    "mentions": 1,
    "engagement": 30,
    "sentiment": null,
    "source": "Nikoloz Turazashvili / Vexrail",
    "title": "Vexrail public launch at BEYOND Expo 2026",
    "url": "https://www.linkedin.com/company/beyond-expo",
    "notes": "LinkedIn 公开公司页采样；BEYOND Expo 转发 Vexrail 创始人更新，页面显示“6d”，按 2026-06-02 折算为 5月27日；公开 reactions：30，另显示 12 comments；非原帖直链。"
  },
  {
    "date": "2026-05-28",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "国际合作",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "倍联德实业",
    "title": "算力出海,亮相国际 | 倍联德受邀参展 BEYOND Expo 2026,携锐影工作站登陆澳门国际科技盛会",
    "url": "",
    "notes": "搜狗微信搜索第 9 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：2026 年 5 月 27 日 - 30 日,第六届 BEYOND 国际科技创新博览会(BEYOND Expo 2026)于澳门威尼斯人金光会展中心盛大启幕.."
  },
  {
    "date": "2026-05-28",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "国际合作",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "看到科技",
    "title": "AI赋能高效协作:看到科技多款会议产品亮相BEYOND Expo 2026",
    "url": "",
    "notes": "搜狗微信搜索第 7 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：日,亚洲极具影响力的年度科技盛会 —— BEYOND Expo 2026 于中国澳门盛大举行.本届博览会以 “AI:数实共生“ 为核心主题,..."
  },
  {
    "date": "2026-05-28",
    "platform": "微信",
    "agenda": "开幕式",
    "topic": "国际合作",
    "persona": "媒体",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "有新Newin",
    "title": "BEYOND Expo 2026:AI 开始进入真实场景",
    "url": "",
    "notes": "搜狗微信搜索第 1 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：5 月 27 日,BEYOND Expo 2026 在澳门开幕.今年大会主题是“AI:数实共生“.相比 2025 年“赋能亚洲,连接世界“,今年的讨..."
  },
  {
    "date": "2026-05-28",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "国际合作",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "珠海高新区",
    "title": "特首到访!珠海高新区硬核科技亮相2026 BEYOND EXPO",
    "url": "",
    "notes": "搜狗微信搜索第 8 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：5月27日,亚洲规模最大、影响力最广的国际科技创新盛会——BEYOND Expo 2026在澳门威尼斯人金光会展中心启幕.本届展会以“..."
  },
  {
    "date": "2026-05-28",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "智能硬件",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "AINGOODS硬集谷",
    "title": "在BEYOND Expo,我们看到智能硬件未来的更多可能...",
    "url": "",
    "notes": "搜狗微信搜索第 10 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：国际科技创新博览会(BEYOND Expo 2026)在中国澳门举办.笔者在第一时间来到了现场,给即将到场的朋友们做一次前瞻,也给未..."
  },
  {
    "date": "2026-05-28",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "智能硬件",
    "persona": "官方/主办方",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "BEYOND Expo",
    "title": "讯飞AI眼镜亮相BEYOND Expo 2026,拓展AI终端走向真实场景新路径",
    "url": "",
    "notes": "搜狗微信搜索第 2 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：2026举办场地BEYOND Expo 2026 今年继续在澳门威尼斯人金光会展举办.作为澳门最大的综合度假村营运商,金沙中国有限公司旗..."
  },
  {
    "date": "2026-05-28",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "国际合作",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "CityU生活圈",
    "title": "亚洲最大科技盛会!BEYOND Expo 2026全攻略,澳门学生免费入场",
    "url": "",
    "notes": "搜狗微信搜索第 5 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：5月27日-30日,亚洲规模最大的科技盛会——BEYOND Expo 2026,正在澳门威尼斯人金光会展中心举行.近800家全球科技企业、..."
  },
  {
    "date": "2026-05-28",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "智能硬件",
    "persona": "媒体",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "ShenzhenDaily",
    "title": "Shenzhen takes center stage at Macao expo 深圳闪耀BEYOND Expo 2026:科技创新力量亮相澳门",
    "url": "",
    "notes": "搜狗微信搜索第 8 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：Shenzhen exhibition area during BEYOND Expo 2026 in Macao today. Shenzhen startu"
  },
  {
    "date": "2026-05-28",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "AI",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 3,
    "sentiment": null,
    "source": "龚海瀚",
    "title": "持续关注 BEYOND Expo 2026",
    "url": "https://www.rednote.com/explore/6a16df6e000000000803ceed",
    "notes": "小红书网页版人工采集；关键词「BEYOND Expo 2026」；页面显示互动：3；日期按页面显示“5天前”折算。"
  },
  {
    "date": "2026-05-28",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "展商故事",
    "persona": "媒体",
    "mentions": 1,
    "engagement": 13,
    "sentiment": null,
    "source": "雷科技",
    "title": "这个科技博览会杀疯了！谁说澳门只有娱乐场",
    "url": "https://www.rednote.com/explore/6a16b5060000000036030e81",
    "notes": "小红书网页版人工采集；关键词「BEYOND国际科技创新博览会」；页面显示互动：13；日期按页面显示“5天前”折算。"
  },
  {
    "date": "2026-05-28",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "展商故事",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 18,
    "sentiment": null,
    "source": "南山区老干部",
    "title": "来澳门参展喽",
    "url": "https://www.rednote.com/explore/6a17135800000000360328a3",
    "notes": "小红书网页版人工采集；关键词「BEYOND Expo 澳门」；页面显示互动：18；日期按页面显示“5天前”折算。"
  },
  {
    "date": "2026-05-28",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "展商故事",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 3,
    "sentiment": null,
    "source": "清华怡姐说税",
    "title": "有来澳门beyond expo的朋友吗",
    "url": "https://www.rednote.com/explore/6a16ee4d000000003501ca64",
    "notes": "小红书网页版人工采集；关键词「数实共生 BEYOND」；页面显示互动：3；日期按页面显示“5天前”折算。"
  },
  {
    "date": "2026-05-28",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "展商故事",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 11,
    "sentiment": null,
    "source": "山河野人记",
    "title": "澳门初探 | 当我被吸入这欢乐场",
    "url": "https://www.rednote.com/explore/6a1712d800000000350291bb",
    "notes": "小红书网页版人工采集；关键词「BEYOND Expo 澳门」；页面显示互动：11；日期按页面显示“5天前”折算。"
  },
  {
    "date": "2026-05-28",
    "platform": "小红书",
    "agenda": "开幕式",
    "topic": "AI",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 6,
    "sentiment": null,
    "source": "殷晓玥Victoria",
    "title": "2026Beyond Expo开幕式",
    "url": "https://www.rednote.com/explore/6a16a78f0000000006023ce4",
    "notes": "小红书网页版人工采集；关键词「BEYOND Expo 2026」；页面显示互动：6；日期按页面显示“5天前”折算。"
  },
  {
    "date": "2026-05-28",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "AI",
    "persona": "参展商",
    "mentions": 1,
    "engagement": 1,
    "sentiment": null,
    "source": "Dana科技猎头Young Boss",
    "title": "Beyond Expo2026 Opening Ceremony",
    "url": "https://www.rednote.com/explore/6a1789fd000000003601b5df",
    "notes": "小红书网页版人工采集；关键词「数实共生 BEYOND」；页面显示互动：1；日期按页面显示“5天前”折算。"
  },
  {
    "date": "2026-05-28",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "展商故事",
    "persona": "参展商",
    "mentions": 1,
    "engagement": 43,
    "sentiment": null,
    "source": "Wilo",
    "title": "澳门见！Wilo诚邀共赴BEYOND Expo",
    "url": "https://www.rednote.com/explore/6a15176f000000000803f670",
    "notes": "小红书网页版人工采集；补搜关键词「beyond expo」；页面显示互动：43；日期按页面显示“5天前”折算。"
  },
  {
    "date": "2026-05-28",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "展商故事",
    "persona": "参展商",
    "mentions": 1,
    "engagement": 32,
    "sentiment": null,
    "source": "Cyan Amoo",
    "title": "Beyond Expo开展仅剩1天⏳ Amoo送门票了！",
    "url": "https://www.rednote.com/explore/6a16a78d0000000006034cd5",
    "notes": "小红书网页版人工采集；补搜关键词「beyond expo」；页面显示互动：32；日期按页面显示“5天前”折算。"
  },
  {
    "date": "2026-05-28",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "展商故事",
    "persona": "参展商",
    "mentions": 1,
    "engagement": 16,
    "sentiment": null,
    "source": "ApexFlow",
    "title": "有在澳门 BEYOND Expo 现场的朋友吗？",
    "url": "https://www.rednote.com/explore/6a16a1ce00000000070299a2",
    "notes": "小红书网页版人工采集；补搜关键词「beyond expo」；页面显示互动：16；日期按页面显示“5天前”折算。"
  },
  {
    "date": "2026-05-28",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "AI",
    "persona": "参展商",
    "mentions": 1,
    "engagement": 15,
    "sentiment": null,
    "source": "暗壳AI",
    "title": "BEYOND Expo 2026 现场见！",
    "url": "https://www.rednote.com/explore/6a16bd8d00000000080314d5",
    "notes": "小红书网页版人工采集；补搜关键词「beyond expo」；页面显示互动：15；日期按页面显示“5天前”折算。"
  },
  {
    "date": "2026-05-28",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "展商故事",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 11,
    "sentiment": null,
    "source": "Kenhsu01",
    "title": "Beyond Expo 2026 首日全记录🔥",
    "url": "https://www.rednote.com/explore/6a171e9d0000000006035704",
    "notes": "小红书网页版人工采集；补搜关键词「beyond expo」；页面显示互动：11；日期按页面显示“5天前”折算。"
  },
  {
    "date": "2026-05-28",
    "platform": "新闻/网站",
    "agenda": "开幕式",
    "topic": "AI",
    "persona": "媒体",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "大湾区时报",
    "title": "BEYOND Expo 2026國際科技創新博覽會在澳門盛大開幕",
    "url": "https://www.baytvs.com/guoji/gsdt/20260528/6989.html",
    "notes": "港澳/大湾区媒体公开报道，可核验；未公开互动量。"
  },
  {
    "date": "2026-05-28",
    "platform": "新闻/网站",
    "agenda": "开幕式",
    "topic": "智能硬件",
    "persona": "媒体",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "新浪财经",
    "title": "让讯飞、XREAL、普渡畅谈AI硬件未来，澳门Beyond展会什么来头？",
    "url": "https://finance.sina.cn/stock/jdts/2026-05-28/detail-inhzmtwq8609776.d.html",
    "notes": "新浪财经公开报道，可核验；未公开互动量。"
  },
  {
    "date": "2026-05-28",
    "platform": "新闻/网站",
    "agenda": "BGlobal新品发布",
    "topic": "创作者经济",
    "persona": "媒体",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "TechNode",
    "title": "Ziyouliangji aims to use AI music platform Hitto to turn everyone into a song creator",
    "url": "https://technode.com/2026/05/28/ziyouliangji-aims-to-use-ai-music-platform-hitto-to-turn-everyone-into-a-song-creator/",
    "notes": "TechNode 公开报道，可核验；未公开阅读、分享或评论数据。"
  },
  {
    "date": "2026-05-28",
    "platform": "新闻/网站",
    "agenda": "BGlobal新品发布",
    "topic": "智能硬件",
    "persona": "媒体",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "TNGlobal",
    "title": "iFLYTEK to launch AI glasses at BEYOND Expo 2026",
    "url": "https://technode.global/2026/05/28/iflytek-to-launch-ai-glasses-at-beyond-expo-2026/",
    "notes": "TNGlobal 公开转载/报道，可核验；未公开互动量。"
  },
  {
    "date": "2026-05-28",
    "platform": "LinkedIn",
    "agenda": "BGlobal新品发布",
    "topic": "智能硬件",
    "persona": "官方/主办方",
    "mentions": 1,
    "engagement": 18,
    "sentiment": null,
    "source": "BEYOND Expo",
    "title": "Global Launches. 11 Products. One Afternoon.",
    "url": "https://www.linkedin.com/company/beyond-expo",
    "notes": "LinkedIn 公开公司页采样；页面显示“5d Edited”，按 2026-06-02 折算为 5月28日；公开 reactions：18；内容指向 BGlobal Product Launch 直播预告。"
  },
  {
    "date": "2026-05-28",
    "platform": "LinkedIn",
    "agenda": "展区开放",
    "topic": "AI",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "Vexrail",
    "title": "Meet Vexrail Founder & CEO at BEYOND Expo 2026 Booth SK001",
    "url": "https://sg.linkedin.com/company/vexrail",
    "notes": "LinkedIn 公开公司页采样；Vexrail 页面显示“5d”，按 2026-06-02 折算为 5月28日；公开页未显示可核验互动数。"
  },
  {
    "date": "2026-05-29",
    "platform": "官网/新闻稿",
    "agenda": "国际科技论坛",
    "topic": "Web3",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "PR Newswire / KuCoin",
    "title": "KuCoin CMO at BEYOND Expo: Trust Is Becoming the New Infrastructure for Web3",
    "url": "https://www.prnewswire.com/news-releases/kucoin-cmo-at-beyond-expo-trust-is-becoming-the-new-infrastructure-for-web3-302785553.html",
    "notes": "参展/论坛企业新闻稿源站，可核验；未公开社交互动量。"
  },
  {
    "date": "2026-05-29",
    "platform": "官网/新闻稿",
    "agenda": "BEYOND Awards",
    "topic": "智能硬件",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "PR Newswire / Makera",
    "title": "Makera Showcases Z1 at BEYOND Expo 2026, Wins Best of Innovation Award",
    "url": "https://www.prnewswire.com/apac/news-releases/makera-showcases-z1-at-beyond-expo-2026-wins-best-of-innovation-award-for-making-precision-cnc-more-accessible-302784945.html",
    "notes": "获奖企业新闻稿源站，可核验；未公开社交互动量。"
  },
  {
    "date": "2026-05-29",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "国际合作",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "艾菲尔香港科技",
    "title": "Beyond Expo 2026 澳门",
    "url": "",
    "notes": "搜狗微信搜索第 2 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：2026年5月27日至30日,亚洲规模最大的科技创新与生态博览会BEYOND Expo 2026将在中国澳门威尼斯人金光会展中心举办...."
  },
  {
    "date": "2026-05-29",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "国际合作",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "宸境科技",
    "title": "让机器看懂世界:宸境科技携三大核心产品亮相 BEYOND Expo 2026",
    "url": "",
    "notes": "搜狗微信搜索第 9 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：5月28日,宸境科技正式亮相澳门BEYOND国际科技创新博览会(BEYOND Expo).作为亚洲最具影响力的科技盛会之一,BEYOND ..."
  },
  {
    "date": "2026-05-29",
    "platform": "微信",
    "agenda": "BEYOND Awards",
    "topic": "智能硬件",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "出门问问AIGC",
    "title": "出门问问TicNote Pods 4G AI录音耳机荣获 BEYOND Expo 2026 Best of Innovation Awards",
    "url": "",
    "notes": "搜狗微信搜索第 10 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：BEYOND Expo是亚洲规模最大的国际科技博览会之一,本届汇聚... 2026荣获＂Best of Kickstarter＂之后,TicNote Pods"
  },
  {
    "date": "2026-05-29",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "国际合作",
    "persona": "媒体",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "高維引力",
    "title": "在澳門,看見AI從「數字」走向「物理」——BEYOND Expo 2026現場觀察",
    "url": "",
    "notes": "搜狗微信搜索第 7 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：5月27日至30日,第六屆BEYOND Expo在澳門威尼斯人金光會展... 2026上拿到22萬個讚,被Yahoo、Engadget等40多家媒體報導...."
  },
  {
    "date": "2026-05-29",
    "platform": "微信",
    "agenda": "BEYOND Awards",
    "topic": "机器人",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "灵童机器人",
    "title": "灵童机器人澳门首秀!斩获 BEYOND Expo 2026 创新大奖",
    "url": "",
    "notes": "搜狗微信搜索第 3 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：灵童机器人首次登陆澳门BEYOND Expo 2026,灵童机器人便以全球最小60cm自主行走桌面人形机器人惊艳国际舞台,并从全球800余..."
  },
  {
    "date": "2026-05-29",
    "platform": "微信",
    "agenda": "开幕式",
    "topic": "国际合作",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "龙岗企服",
    "title": "BEYOND Expo 2026即将开幕,龙岗展团产品清单请查收",
    "url": "",
    "notes": "搜狗微信搜索第 3 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：2026年5月27日-30日第六届BEYOND国际科技创新博览会将在澳门威尼斯人金光会展中心盛大举办本届展会以「AI:数实共生」为主..."
  },
  {
    "date": "2026-05-29",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "智能硬件",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "莫界科技",
    "title": "莫界受邀出席 BEYOND Expo 2026,彰显光学硬实力",
    "url": "",
    "notes": "搜狗微信搜索第 5 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：近日,全球顶尖科技创新盛会 BEYOND Expo 2026 在澳门威尼斯人金光会展中心盛大启幕,莫界凭借 AI+AR 光学领域的顶尖硬实力,..."
  },
  {
    "date": "2026-05-29",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "机器人",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "全球首家人工智能6S店",
    "title": "人工智能6S店携自研智能体盒子LongMini 亮相BEYOND Expo 2026,解码AI硬件出海新范式",
    "url": "",
    "notes": "搜狗微信搜索第 7 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：5月28日,第六届BEYOND国际科技创新博览会(BEYOND Expo 2026)的聚光灯下,由深圳市龙岗区人工智能(机器人)署主办、全..."
  },
  {
    "date": "2026-05-29",
    "platform": "微信",
    "agenda": "开幕式",
    "topic": "国际合作",
    "persona": "媒体",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "特科技时尚",
    "title": "AI数实共生 迈向物理世界——BEYOND Expo 2026在澳门盛大开幕",
    "url": "",
    "notes": "搜狗微信搜索第 7 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：5月27日下午,BEYOND Expo 2026国际科技创新博览会开幕式在澳门巴黎人酒店·巴黎人剧场隆重举行.本届博览会以“AI:数实共..."
  },
  {
    "date": "2026-05-29",
    "platform": "微信",
    "agenda": "开幕式",
    "topic": "机器人",
    "persona": "媒体",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "亿邦产业",
    "title": "BEYOND Expo 2026:机器人、智能眼镜、Agent 物理AI如何落地?",
    "url": "",
    "notes": "搜狗微信搜索第 1 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：文丨吕哲彤如果说,过去两年的AI叙事更多围绕大模型、算力和应用入口展开,那么在BEYOND Expo 2026开幕式上,我们注意到,..."
  },
  {
    "date": "2026-05-29",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "国际合作",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "珠西博士科技创新服务平台",
    "title": "【活动报名】江门市高才会联合博士科技:诚邀参加2026 BEYOND EXPO国际科技创新博览会",
    "url": "",
    "notes": "搜狗微信搜索第 9 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：BEYOND EXPO 2026简介中文版.pdf扫描下方海报二维码添加微信,备注 「姓名+单位」,欢迎各位积极报名,共赴澳门,见证科技未..."
  },
  {
    "date": "2026-05-29",
    "platform": "微信",
    "agenda": "国际科技论坛",
    "topic": "国际合作",
    "persona": "官方/主办方",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "BEYOND Expo",
    "title": "岑浩辉到BEYOND Expo 2026展区调研,支持本澳创新科技持续发展",
    "url": "",
    "notes": "搜狗微信搜索第 3 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：BEYOND Expo 2026通过展览展示、论坛讨论和商务洽谈,让前沿技术、产业应用和国际合作需求在澳门集中交流,也为粤港澳大湾区..."
  },
  {
    "date": "2026-05-29",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "机器人",
    "persona": "官方/主办方",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "BEYOND Expo",
    "title": "机器人在线猜拳、AR测肤、低空飞行......来BEYOND Expo 2026提前过一把“未来生活“",
    "url": "",
    "notes": "搜狗微信搜索第 3 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：BEYOND Expo 2026展区在澳门威尼斯人金光会展持续开启.近800家国际参展企业围绕AI大模型与数字基础设施、具身智能与机器人..."
  },
  {
    "date": "2026-05-29",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "AI",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "Cynthia的奇妙冒险",
    "title": "Beyond Expo 2026",
    "url": "",
    "notes": "搜狗微信搜索第 6 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：今年这里像“家门口的CES“,但更务实——没有那么多＂未来已来＂的宏大叙事,满场都是＂这个到底怎么落地＂的真问题.和老朋..."
  },
  {
    "date": "2026-05-29",
    "platform": "微信",
    "agenda": "开幕式",
    "topic": "机器人",
    "persona": "媒体",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "DoNews",
    "title": "BEYOND Expo 2026观察:AI、眼镜和机器人",
    "url": "",
    "notes": "搜狗微信搜索第 2 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：撰文 | 程书书编辑 | 李信马题图 | BEYOND Expo 2026大会在BEYOND Expo 2026开幕式上,BEYOND Expo 联合创始人贺建"
  },
  {
    "date": "2026-05-29",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "国际合作",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "MEIKE 美刻",
    "title": "Meike美刻亮相BEYOND Expo 2026",
    "url": "",
    "notes": "搜狗微信搜索第 1 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：BEYOND EXPO 2026澳门,2026年5月27日 —— 第六届BEYOND国际科技创新博览会(BEYOND Expo 2026)在澳门威尼斯人金光.."
  },
  {
    "date": "2026-05-29",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "智能硬件",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 21,
    "sentiment": null,
    "source": "阿卡姆之花",
    "title": "澳门特首岑浩辉先生BEYONDExpo首日观展",
    "url": "https://www.rednote.com/explore/6a17fe310000000007020081",
    "notes": "小红书网页版人工采集；关键词「BEYOND Expo 澳门」；页面显示互动：21；日期按页面显示“4天前”折算。"
  },
  {
    "date": "2026-05-29",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "Web3",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 8,
    "sentiment": null,
    "source": "安哥的商业决策笔记",
    "title": "BEYOND EXPO：发现Token在重估一切",
    "url": "https://www.rednote.com/explore/6a1831e600000000380370ad",
    "notes": "小红书网页版人工采集；关键词「BEYOND Expo 澳门」；页面显示互动：8；日期按页面显示“4天前”折算。"
  },
  {
    "date": "2026-05-29",
    "platform": "小红书",
    "agenda": "BGlobal新品发布",
    "topic": "智能硬件",
    "persona": "媒体",
    "mentions": 1,
    "engagement": 5,
    "sentiment": null,
    "source": "半导体AI具身机器人观察",
    "title": "科大讯飞AI眼镜在澳门发布！",
    "url": "https://www.rednote.com/explore/6a17f63c000000000702bb76",
    "notes": "小红书网页版人工采集；关键词「科大讯飞 AI眼镜 BEYOND」；页面显示互动：5；日期按页面显示“4天前”折算。"
  },
  {
    "date": "2026-05-29",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "AI",
    "persona": "媒体",
    "mentions": 1,
    "engagement": 2,
    "sentiment": null,
    "source": "科技行者",
    "title": "暴走BEYOND Expo 2026！🚶🏻‍♀️",
    "url": "https://www.rednote.com/explore/6a183a7e0000000036032e76",
    "notes": "小红书网页版人工采集；关键词「BEYOND Expo 2026」；页面显示互动：2；日期按页面显示“4天前”折算。"
  },
  {
    "date": "2026-05-29",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "智能硬件",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 118,
    "sentiment": null,
    "source": "王蒂姆",
    "title": "BEYOND首日💻👓 刷新认知科技改变工作流",
    "url": "https://www.rednote.com/explore/6a17ea3e0000000008003ad3",
    "notes": "小红书网页版人工采集；关键词「BEYOND Expo 2026」；页面显示互动：118；日期按页面显示“4天前”折算。"
  },
  {
    "date": "2026-05-29",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "展商故事",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 7,
    "sentiment": null,
    "source": "斜杠中女S姐",
    "title": "参加亚洲最夯的展会是什么感受",
    "url": "https://www.rednote.com/explore/6a18511a0000000038036653",
    "notes": "小红书网页版人工采集；关键词「BEYOND国际科技创新博览会」；页面显示互动：7；日期按页面显示“4天前”折算。"
  },
  {
    "date": "2026-05-29",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "展商故事",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 2,
    "sentiment": null,
    "source": "昕桐｜首席具身官",
    "title": "澳门的 BEYOND 2026 ，“亚洲版CES”?",
    "url": "https://www.rednote.com/explore/6a17ce02000000000603291d",
    "notes": "小红书网页版人工采集；关键词「数实共生 BEYOND」；页面显示互动：2；日期按页面显示“4天前”折算。"
  },
  {
    "date": "2026-05-29",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "智能硬件",
    "persona": "媒体",
    "mentions": 1,
    "engagement": 4,
    "sentiment": null,
    "source": "知外Global AI Growth",
    "title": "智能硬件的AI落地场｜Beyond Expo",
    "url": "https://www.rednote.com/explore/6a182f0c0000000008026720",
    "notes": "小红书网页版人工采集；关键词「BEYOND Expo 2026」；页面显示互动：4；日期按页面显示“4天前”折算。"
  },
  {
    "date": "2026-05-29",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "机器人",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 4,
    "sentiment": null,
    "source": "中年少女探索世界",
    "title": "澳门BEYOND Expo到处都是机器人",
    "url": "https://www.rednote.com/explore/6a17b799000000003803776c",
    "notes": "小红书网页版人工采集；关键词「BEYOND国际科技创新博览会」；页面显示互动：4；日期按页面显示“4天前”折算。"
  },
  {
    "date": "2026-05-29",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "展商故事",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 39,
    "sentiment": null,
    "source": "Arc安格增长",
    "title": "在澳门Beyond Expo的第1天，我们看到4️⃣件事",
    "url": "https://www.rednote.com/explore/6a183ef10000000035022770",
    "notes": "小红书网页版人工采集；关键词「BEYOND国际科技创新博览会」；页面显示互动：39；日期按页面显示“4天前”折算。"
  },
  {
    "date": "2026-05-29",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "展商故事",
    "persona": "参展商",
    "mentions": 1,
    "engagement": 6,
    "sentiment": null,
    "source": "BoltzLog熵约智能",
    "title": "🇲🇴BEYOND展会的朋友请举手🙋",
    "url": "https://www.rednote.com/explore/6a1806b300000000060306aa",
    "notes": "小红书网页版人工采集；关键词「数实共生 BEYOND」；页面显示互动：6；日期按页面显示“4天前”折算。"
  },
  {
    "date": "2026-05-29",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "展商故事",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 26,
    "sentiment": null,
    "source": "Jennie",
    "title": "同在澳门🇲🇴BEYONDExpo科技展会的朋友举手",
    "url": "https://www.rednote.com/explore/6a16642b0000000038034a68",
    "notes": "小红书网页版人工采集；关键词「BEYOND Expo 澳门」；页面显示互动：26；日期按页面显示“4天前”折算。"
  },
  {
    "date": "2026-05-29",
    "platform": "小红书",
    "agenda": "BGlobal新品发布",
    "topic": "智能硬件",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 4,
    "sentiment": null,
    "source": "Johnlin的笔记",
    "title": "科大讯飞发布AI眼镜售价4299元",
    "url": "https://www.rednote.com/explore/6a1864a700000000380238c1",
    "notes": "小红书网页版人工采集；关键词「科大讯飞 AI眼镜 BEYOND」；页面显示互动：4；日期按页面显示“4天前”折算。"
  },
  {
    "date": "2026-05-29",
    "platform": "小红书",
    "agenda": "国际科技论坛",
    "topic": "展商故事",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 5,
    "sentiment": null,
    "source": "KL",
    "title": "BEYOND EXPO国际科技创新峰会🥂",
    "url": "https://www.rednote.com/explore/6a1857e60000000008027751",
    "notes": "小红书网页版人工采集；关键词「数实共生 BEYOND」；页面显示互动：5；日期按页面显示“4天前”折算。"
  },
  {
    "date": "2026-05-29",
    "platform": "小红书",
    "agenda": "BGlobal新品发布",
    "topic": "智能硬件",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 9,
    "sentiment": null,
    "source": "V0 的Neo",
    "title": "硬核科技展，被我玩出了度假感⛱️",
    "url": "https://www.rednote.com/explore/6a18180d0000000006032b75",
    "notes": "小红书网页版人工采集；关键词「科大讯飞 AI眼镜 BEYOND」；页面显示互动：9；日期按页面显示“4天前”折算。"
  },
  {
    "date": "2026-05-29",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "展商故事",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 27,
    "sentiment": null,
    "source": "Weekender+",
    "title": "澳门BEYOND Expo 展览，科技感拉满!",
    "url": "https://www.rednote.com/explore/6a17d9400000000038021860",
    "notes": "小红书网页版人工采集；关键词「BEYOND国际科技创新博览会」；页面显示互动：27；日期按页面显示“4天前”折算。"
  },
  {
    "date": "2026-05-29",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "展商故事",
    "persona": "参展商",
    "mentions": 1,
    "engagement": 3,
    "sentiment": null,
    "source": "Upsello",
    "title": "BEYOND Expo｜求展位坐标！串门模式开启",
    "url": "https://www.rednote.com/explore/6a17e7c10000000036001eeb",
    "notes": "小红书网页版人工采集；补搜关键词「beyond expo」；页面显示互动：3；日期按页面显示“4天前”折算。"
  },
  {
    "date": "2026-05-29",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "机器人",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 15,
    "sentiment": null,
    "source": "机器人小白",
    "title": "在Beyond Expo，这家机器人被澳门特首“点名”",
    "url": "https://www.rednote.com/explore/6a181fc90000000008025928",
    "notes": "小红书网页版人工采集；补搜关键词「BEYONDExpo」；页面显示互动：15；日期按页面显示“4天前”折算。"
  },
  {
    "date": "2026-05-29",
    "platform": "新闻/网站",
    "agenda": "BGlobal新品发布",
    "topic": "智能硬件",
    "persona": "媒体",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "华夏时报 / 新浪财经",
    "title": "戴在鼻梁上的“AI助理”：科大讯飞40克眼镜入局，智能穿戴的“刚需时刻”还有多远？",
    "url": "https://finance.sina.com.cn/stock/relnews/cn/2026-05-29/doc-inhzqpth7886421.shtml",
    "notes": "新浪财经转载华夏时报公开报道，可核验；未公开互动量。"
  },
  {
    "date": "2026-05-29",
    "platform": "新闻/网站",
    "agenda": "开幕式",
    "topic": "机器人",
    "persona": "媒体",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "经济观察报 / 新浪财经",
    "title": "BEYOND Expo 2026观察：AI硬件火爆，中东主权基金开始筛选中国公司",
    "url": "https://finance.sina.com.cn/stock/t/2026-05-29/doc-inhzpspr9557180.shtml",
    "notes": "新浪财经转载经济观察报公开报道，可核验；未公开互动量。"
  },
  {
    "date": "2026-05-29",
    "platform": "新闻/网站",
    "agenda": "BGlobal新品发布",
    "topic": "智能硬件",
    "persona": "媒体",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "上观新闻 / 新浪财经",
    "title": "40克机身+超级AI助理，讯飞AI眼镜发布！“百镜大战”迎“重磅玩家”",
    "url": "https://finance.sina.com.cn/stock/t/2026-05-29/doc-inhzpfxv9623332.shtml",
    "notes": "新浪财经转载上观新闻公开报道，可核验；未公开互动量。"
  },
  {
    "date": "2026-05-29",
    "platform": "新闻/网站",
    "agenda": "BGlobal新品发布",
    "topic": "智能硬件",
    "persona": "媒体",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "新浪科技",
    "title": "讯飞AI眼镜发布：整机仅重40克，售价4299元",
    "url": "https://finance.sina.com.cn/tech/shenji/2026-05-29/doc-inhzpwvq7979618.shtml",
    "notes": "新浪科技公开报道，可核验；未公开互动量。"
  },
  {
    "date": "2026-05-29",
    "platform": "新闻/网站",
    "agenda": "展区开放",
    "topic": "医疗健康",
    "persona": "媒体",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "新浪数码",
    "title": "英伟达、腾讯、阿里、华为、金茉亮相“亚洲CES”BEYOND国际科技创新博览会，共话科技创新",
    "url": "https://finance.sina.com.cn/tech/elec/xpfb/2026-05-29/doc-inhzpwvs0887955.shtml",
    "notes": "新浪数码公开报道，可核验；未公开互动量。"
  },
  {
    "date": "2026-05-29",
    "platform": "新闻/网站",
    "agenda": "开幕式",
    "topic": "机器人",
    "persona": "媒体",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "DoNews / 新浪财经",
    "title": "BEYOND Expo 2026观察：AI、眼镜和机器人",
    "url": "https://finance.sina.com.cn/tech/roll/2026-05-29/doc-inhzqimi9426592.shtml",
    "notes": "新浪科技转载 DoNews 公开报道，可核验；未公开互动量。"
  },
  {
    "date": "2026-05-29",
    "platform": "新闻/网站",
    "agenda": "BEYOND Awards",
    "topic": "投资路演",
    "persona": "媒体",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "IT之家",
    "title": "清智系企业亮相 BEYOND Expo 2026 并斩获多项大奖",
    "url": "https://www.ithome.com/0/957/142.htm",
    "notes": "IT之家公开报道，可核验；未公开互动量。"
  },
  {
    "date": "2026-05-29",
    "platform": "新闻/网站",
    "agenda": "BGlobal新品发布",
    "topic": "智能硬件",
    "persona": "媒体",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "TechNode",
    "title": "iFlytek launches 40g AI glasses with GlassClaw AI agent and advanced noise recognition",
    "url": "https://technode.com/2026/05/29/iflytek-launches-40g-ai-glasses-with-glassclaw-ai-agent-and-advanced-noise-recognition/",
    "notes": "TechNode 公开报道，可核验；未公开阅读、分享或评论数据。"
  },
  {
    "date": "2026-05-29",
    "platform": "新闻/网站",
    "agenda": "BGlobal新品发布",
    "topic": "AI",
    "persona": "媒体",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "TechNode",
    "title": "Lenovo Innovation Accelerator channels ecosystem power to bring Chinese hard-tech startups to the global stage",
    "url": "https://technode.com/2026/05/29/lenovo-innovation-accelerator-channels-ecosystem-power-to-bring-chinese-hard-tech-startups-to-the-global-stage/",
    "notes": "TechNode 公开报道，可核验；未公开阅读、分享或评论数据。"
  },
  {
    "date": "2026-05-29",
    "platform": "新闻/网站",
    "agenda": "展区开放",
    "topic": "AI",
    "persona": "媒体",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "Xinhua",
    "title": "Economic Watch: Real-world AI applications shine at Macao's leading high-tech expo",
    "url": "https://english.news.cn/20260529/73b5659a46f94dc6ba9fc4ba88f4eb3d/c.html",
    "notes": "新华社英文公开报道，可核验；未公开页面互动量。"
  },
  {
    "date": "2026-05-29",
    "platform": "LinkedIn",
    "agenda": "BGlobal新品发布",
    "topic": "智能硬件",
    "persona": "官方/主办方",
    "mentions": 1,
    "engagement": 4,
    "sentiment": null,
    "source": "BEYOND Expo",
    "title": "iFlytek Product Launch is live NOW",
    "url": "https://www.linkedin.com/company/beyond-expo",
    "notes": "LinkedIn 公开公司页采样；页面显示“4d”，按 2026-06-02 折算为 5月29日；公开 reactions：4；内容为 iFlytek Product Launch 直播提醒。"
  },
  {
    "date": "2026-05-29",
    "platform": "LinkedIn",
    "agenda": "国际科技论坛",
    "topic": "AI",
    "persona": "参展商",
    "mentions": 1,
    "engagement": 4,
    "sentiment": null,
    "source": "GameBot",
    "title": "GameBot to join Future of Play Forum at BEYOND Expo 2026 in Macao",
    "url": "https://www.linkedin.com/company/gamebotai/posts/",
    "notes": "LinkedIn 登录态站内搜索采样；关键词「BEYOND Expo May 29」；页面显示“4 天”，按 2026-06-02 折算为 5月29日；公开 reactions：4，另显示 1 次转发。"
  },
  {
    "date": "2026-05-29",
    "platform": "LinkedIn",
    "agenda": "国际科技论坛",
    "topic": "出海",
    "persona": "投资人",
    "mentions": 1,
    "engagement": 20,
    "sentiment": null,
    "source": "Headline - Asia",
    "title": "Akio T. joins BEYOND Expo panels on Asian founders and hard tech investment",
    "url": "https://www.linkedin.com/company/headline-asia/posts/",
    "notes": "LinkedIn 登录态站内搜索采样；关键词「BEYOND Expo May 29」；页面显示“4 天”，按 2026-06-02 折算为 5月29日；公开 reactions：20，另显示 1 次转发。"
  },
  {
    "date": "2026-05-29",
    "platform": "LinkedIn",
    "agenda": "BGlobal Summit",
    "topic": "国际合作",
    "persona": "媒体",
    "mentions": 1,
    "engagement": 1,
    "sentiment": null,
    "source": "TNGlobal",
    "title": "TNGlobal recap includes BEYOND Expo BGlobal and product launch items",
    "url": "https://www.linkedin.com/company/technodeglobal/posts/",
    "notes": "LinkedIn 登录态站内搜索采样；关键词「BGlobal BEYOND Expo」；页面显示“4 天”，按 2026-06-02 折算为 5月29日；公开 reactions：1；该动态为 TNGlobal 周报，包含 BEYOND Expo 开幕和 BGlobal 新品发布两条链接。"
  },
  {
    "date": "2026-05-30",
    "platform": "官网/新闻稿",
    "agenda": "开幕式",
    "topic": "AI",
    "persona": "官方/主办方",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "PR Newswire / BEYOND Expo",
    "title": "聚焦AI从数字走向物理世界，BEYOND Expo 2026盛大开幕",
    "url": "https://www.prnasia.com/story/535123-1.shtml",
    "notes": "BEYOND Expo 中文新闻稿源站，可核验；未公开社交互动量。"
  },
  {
    "date": "2026-05-30",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "国际合作",
    "persona": "嘉宾",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "德勤Deloitte",
    "title": "德勤特邀嘉宾参观团走进BEYOND Expo 2026",
    "url": "",
    "notes": "搜狗微信搜索第 4 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：德勤中国组织“德勤中国特邀嘉宾参观团“参与BEYOND国际科技创新博览会(BEYOND Expo 2026).本次共组建数个嘉宾团组,..."
  },
  {
    "date": "2026-05-30",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "机器人",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "具身智能机器人世界",
    "title": "腾讯具身智能技术矩阵亮相BEYOND Expo 2026 不造机器人,做机器人的“钛螺丝“",
    "url": "",
    "notes": "搜狗微信搜索第 6 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：具身智能产业化提速之际,5月28日,腾讯Robotics X实验室与福田实验室携多项重磅技术现身澳门BEYOND Expo 2026展览,机器人..."
  },
  {
    "date": "2026-05-30",
    "platform": "微信",
    "agenda": "会后社交",
    "topic": "国际合作",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "筷子科技Kuaizi",
    "title": "BEYOND Expo 2026 圆满收官:筷子科技以“视频商业智能体系统“赋能Physical",
    "url": "",
    "notes": "搜狗微信搜索第 4 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：5月30日,为期四天的第六届 BEYOND 国际科技创新博览会(BEYOND Expo 2026)在澳门威尼斯人金光会展中心圆满落下帷幕.智..."
  },
  {
    "date": "2026-05-30",
    "platform": "微信",
    "agenda": "国际科技论坛",
    "topic": "国际合作",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "陆易斯",
    "title": "从澳门beyond expo 2026归来,相比去年,感觉今年太多的国内公司参展了,三天实际上还有一些看不过来,不少分论坛很精彩要听回放",
    "url": "",
    "notes": "搜狗微信搜索第 6 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：从澳门beyond expo 2026归来,相比去年,感觉今年太多的国内公司参展了,三天实际上还有一些看不过来,不少分论坛很精彩要听回..."
  },
  {
    "date": "2026-05-30",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "国际合作",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "太希智能科技",
    "title": "太希智能闪耀BEYOND EXPO 2026!",
    "url": "",
    "notes": "搜狗微信搜索第 5 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：寄予厚望BEYOND EXPO 202601澳门特别行政区行政长官岑浩辉、澳门特别行政区第五任行政长官贺一诚先后到访太希智能展台.(..."
  },
  {
    "date": "2026-05-30",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "AI",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "小周晓谈",
    "title": "BEYOND EXPO 2026[强]",
    "url": "",
    "notes": "搜狗微信搜索第 4 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：BEYOND EXPO 2026[强]"
  },
  {
    "date": "2026-05-30",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "机器人",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "芸姐AI实训基地-收徒",
    "title": "参加BEYOND Expo 2026 澳门国际科创博览会,满眼硬核黑科技;",
    "url": "",
    "notes": "搜狗微信搜索第 6 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：参加BEYOND Expo 2026 澳门国际科创博览会,满眼硬核黑科技;人形机器人、智能移动平台、协作机械臂、AI生态齐亮相;从全球..."
  },
  {
    "date": "2026-05-30",
    "platform": "微信",
    "agenda": "会后社交",
    "topic": "国际合作",
    "persona": "官方/主办方",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "BEYOND Expo",
    "title": "亚洲第一!BEYOND Expo 2026 圆满收官",
    "url": "",
    "notes": "搜狗微信搜索第 1 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：BEYOND Expo 2026媒体日也在大会首日汇聚200余家全球媒体、KOL、YouTuber及内容创作者,总粉丝量高达2600万,海外媒体占比..."
  },
  {
    "date": "2026-05-30",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "国际合作",
    "persona": "官方/主办方",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "BEYOND Expo",
    "title": "从澳门到深圳:BEYOND Expo 2026精彩延续,南山创新闪耀双城",
    "url": "",
    "notes": "搜狗微信搜索第 1 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：(BEYOND Expo 2026)在澳门隆重举行.本届大会以 “AI:数实共生“为主题,持续收获全球科技圈的高度关注,四天展期内,共..."
  },
  {
    "date": "2026-05-30",
    "platform": "微信",
    "agenda": "开幕式",
    "topic": "AI",
    "persona": "官方/主办方",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "BEYOND Expo",
    "title": "全攻略|数实共生风暴来袭!BEYOND Expo 2026终极通关指南,看这一篇就够了!",
    "url": "",
    "notes": "搜狗微信搜索第 4 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：BEYOND Expo 2026 开幕式即将盛大开启!作为 BEYOND Expo 全年最具代表性的核心环节,本届开幕式将于5月27日 15:30至17:30."
  },
  {
    "date": "2026-05-30",
    "platform": "微信",
    "agenda": "会后社交",
    "topic": "国际合作",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "ZPilot",
    "title": "BEYOND Expo 2026 完美闭幕:在全球科技现场,看见中国消费科技的新表达",
    "url": "",
    "notes": "搜狗微信搜索第 2 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：2026 年 5 月 30 日,为期四天的 BEYOND Expo 2026 在澳门威尼斯人金光会展中心圆满落幕.作为亚洲规模最大、影响力最广的国际..."
  },
  {
    "date": "2026-05-30",
    "platform": "小红书",
    "agenda": "BGlobal新品发布",
    "topic": "智能硬件",
    "persona": "媒体",
    "mentions": 1,
    "engagement": 4,
    "sentiment": null,
    "source": "21世纪经济报道",
    "title": "AI眼镜也能接入“龙虾”了",
    "url": "https://www.rednote.com/explore/6a19032d0000000036030e18",
    "notes": "小红书网页版人工采集；关键词「科大讯飞 AI眼镜 BEYOND」；页面显示互动：4；日期按页面显示“3天前”折算。"
  },
  {
    "date": "2026-05-30",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "机器人",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 8,
    "sentiment": null,
    "source": "500熊",
    "title": "想拍一个澳门BEYOND科技展机器人特辑",
    "url": "https://www.rednote.com/explore/6a1930d0000000000803caed",
    "notes": "小红书网页版人工采集；关键词「BEYOND国际科技创新博览会」；页面显示互动：8；日期按页面显示“3天前”折算。"
  },
  {
    "date": "2026-05-30",
    "platform": "小红书",
    "agenda": "BGlobal新品发布",
    "topic": "智能硬件",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "龚海瀚",
    "title": "在澳门和讯飞 AI 眼镜重逢",
    "url": "https://www.rednote.com/explore/6a19290e0000000007026802",
    "notes": "小红书网页版人工采集；关键词「科大讯飞 AI眼镜 BEYOND」；页面显示互动：赞；日期按页面显示“3天前”折算。"
  },
  {
    "date": "2026-05-30",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "展商故事",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 484,
    "sentiment": null,
    "source": "果子bibibi",
    "title": "97年市场总监工作日记🇲🇴澳门Beyond Expo",
    "url": "https://www.rednote.com/explore/6a195a160000000008000535",
    "notes": "小红书网页版人工采集；关键词「BEYOND Expo 澳门」；页面显示互动：484；日期按页面显示“3天前”折算。"
  },
  {
    "date": "2026-05-30",
    "platform": "小红书",
    "agenda": "BGlobal新品发布",
    "topic": "智能硬件",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "江瀚视野",
    "title": "讯飞AI眼镜正式发布，讯飞眼镜的优势何在？",
    "url": "https://www.rednote.com/explore/6a195ca20000000007022f43",
    "notes": "小红书网页版人工采集；关键词「科大讯飞 AI眼镜 BEYOND」；页面显示互动：赞；日期按页面显示“3天前”折算。"
  },
  {
    "date": "2026-05-30",
    "platform": "小红书",
    "agenda": "BGlobal新品发布",
    "topic": "智能硬件",
    "persona": "媒体",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "科技行者",
    "title": "AI眼镜的风，终究是吹到了科大讯飞",
    "url": "https://www.rednote.com/explore/6a19877d0000000038035457",
    "notes": "小红书网页版人工采集；关键词「科大讯飞 AI眼镜 BEYOND」；页面显示互动：赞；日期按页面显示“3天前”折算。"
  },
  {
    "date": "2026-05-30",
    "platform": "小红书",
    "agenda": "会后社交",
    "topic": "展商故事",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 426,
    "sentiment": null,
    "source": "懒懒小卡比",
    "title": "BEYOND高能回顾｜在澳门看到未来",
    "url": "https://www.rednote.com/explore/6a194a37000000000702048f",
    "notes": "小红书网页版人工采集；关键词「BEYOND Expo 2026」；页面显示互动：426；日期按页面显示“3天前”折算。"
  },
  {
    "date": "2026-05-30",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "AI",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 7,
    "sentiment": null,
    "source": "唐月明",
    "title": "BEYOND 2026越来越好，明天下午1：45 AI音乐",
    "url": "https://www.rednote.com/explore/6a19aab60000000008027618",
    "notes": "小红书网页版人工采集；关键词「数实共生 BEYOND」；页面显示互动：7；日期按页面显示“3天前”折算。"
  },
  {
    "date": "2026-05-30",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "展商故事",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 3,
    "sentiment": null,
    "source": "兔儿小爷",
    "title": "AI+科技多模态｜澳门Beyond Expo展",
    "url": "https://www.rednote.com/explore/6a195cc10000000035021fd6",
    "notes": "小红书网页版人工采集；关键词「BEYOND 探展」；页面显示互动：3；日期按页面显示“3天前”折算。"
  },
  {
    "date": "2026-05-30",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "展商故事",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 28,
    "sentiment": null,
    "source": "馅儿",
    "title": "2026澳门beyond expo观察（02）",
    "url": "https://www.rednote.com/explore/6a18f3ec0000000035024209",
    "notes": "小红书网页版人工采集；关键词「BEYOND Expo 2026」；页面显示互动：28；日期按页面显示“3天前”折算。"
  },
  {
    "date": "2026-05-30",
    "platform": "小红书",
    "agenda": "BGlobal新品发布",
    "topic": "智能硬件",
    "persona": "官方/主办方",
    "mentions": 1,
    "engagement": 6,
    "sentiment": null,
    "source": "BEYOND国际科技创新博览会",
    "title": "讯飞AI眼镜新品发布｜AI终端真的走进现实了",
    "url": "https://www.rednote.com/explore/6a1977c60000000036000935",
    "notes": "小红书网页版人工采集；关键词「科大讯飞 AI眼镜 BEYOND」；页面显示互动：6；日期按页面显示“3天前”折算。"
  },
  {
    "date": "2026-05-30",
    "platform": "小红书",
    "agenda": "开幕式",
    "topic": "AI",
    "persona": "官方/主办方",
    "mentions": 1,
    "engagement": 45,
    "sentiment": null,
    "source": "BEYOND国际科技创新博览会",
    "title": "BEYOND Expo 2026 盛大开幕",
    "url": "https://www.rednote.com/explore/6a191b89000000000702ca0a",
    "notes": "小红书网页版人工采集；关键词「BEYOND Expo 2026」；页面显示互动：45；日期按页面显示“3天前”折算。"
  },
  {
    "date": "2026-05-30",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "AI",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 5,
    "sentiment": null,
    "source": "Cynthia Yang在Realtime AI",
    "title": "Beyond Expo 2026｜AI：digital to physical",
    "url": "https://www.rednote.com/explore/6a19638f000000000800002f",
    "notes": "小红书网页版人工采集；关键词「BEYOND Expo 2026」；页面显示互动：5；日期按页面显示“3天前”折算。"
  },
  {
    "date": "2026-05-30",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "展商故事",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 4,
    "sentiment": null,
    "source": "Léo",
    "title": "去澳门BeyondExpo长见识了",
    "url": "https://www.rednote.com/explore/6a19831f0000000006023757",
    "notes": "小红书网页版人工采集；关键词「BEYOND Expo 澳门」；页面显示互动：4；日期按页面显示“3天前”折算。"
  },
  {
    "date": "2026-05-30",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "机器人",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 14,
    "sentiment": null,
    "source": "Lexiccc",
    "title": "这个机器人有点好抱",
    "url": "https://www.rednote.com/explore/6a1925320000000035032cf8",
    "notes": "小红书网页版人工采集；关键词「BEYOND Expo 澳门」；页面显示互动：14；日期按页面显示“3天前”折算。"
  },
  {
    "date": "2026-05-30",
    "platform": "小红书",
    "agenda": "BEYOND Hack Day",
    "topic": "AI",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 9,
    "sentiment": null,
    "source": "Parker很爱玩",
    "title": "Macao Hackathon🎉",
    "url": "https://www.rednote.com/explore/6a1924d30000000035032b23",
    "notes": "小红书网页版人工采集；补搜关键词「BEYONDExpo」；页面显示互动：9；日期按页面显示“3天前”折算。"
  },
  {
    "date": "2026-05-30",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "展商故事",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 7,
    "sentiment": null,
    "source": "奶油米",
    "title": "Beyond expo🇲🇴",
    "url": "https://www.rednote.com/explore/6a19de14000000003803543c",
    "notes": "小红书网页版人工采集；补搜关键词「beyond expo」；页面显示互动：7；日期按页面显示“3天前”折算。"
  },
  {
    "date": "2026-05-30",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "展商故事",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 1,
    "sentiment": null,
    "source": "A陈小申",
    "title": "参加亚洲最牛的展会是什么感受",
    "url": "https://www.rednote.com/explore/6a192a110000000006020a9b",
    "notes": "小红书网页版人工采集；补搜关键词「beyond expo」；页面显示互动：1；日期按页面显示“3天前”折算。"
  },
  {
    "date": "2026-05-30",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "机器人",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 1,
    "sentiment": null,
    "source": "痛痛痛洒湖~",
    "title": "这咖啡机器人帅爆🎉",
    "url": "https://www.rednote.com/explore/6a190164000000001002d000",
    "notes": "小红书网页版人工采集；补搜关键词「BEYONDExpo」；页面显示互动：1；日期按页面显示“3天前”折算。"
  },
  {
    "date": "2026-05-30",
    "platform": "新闻/网站",
    "agenda": "展区开放",
    "topic": "机器人",
    "persona": "媒体",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "财联社 / 新浪财经",
    "title": "AI走向物理世界的“临门一脚”还差什么？｜直击BEYOND Expo 2026",
    "url": "https://finance.sina.com.cn/stock/t/2026-05-30/doc-inhzswye6930112.shtml",
    "notes": "新浪财经转载财联社公开报道，可核验；未公开互动量。"
  },
  {
    "date": "2026-05-30",
    "platform": "新闻/网站",
    "agenda": "BGlobal新品发布",
    "topic": "创作者经济",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "新浪财经",
    "title": "BEYOND Expo 2026现场：联汇科技Om AI首发的OttoBox视频创作助理，把视频粗剪从8小时拉进30分钟",
    "url": "https://finance.sina.com.cn/stock/t/2026-05-30/doc-inhzrzus0292319.shtml",
    "notes": "新浪财经公开报道，可核验；未公开互动量。"
  },
  {
    "date": "2026-05-30",
    "platform": "新闻/网站",
    "agenda": "开幕式",
    "topic": "机器人",
    "persona": "嘉宾",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "AGV网 / 新浪财经",
    "title": "普渡机器人创始人张涛出席BEYOND Expo开幕式，共话“数实共生”下的Physical AI路径",
    "url": "https://finance.sina.com.cn/roll/2026-05-30/doc-inhzrreu7455900.shtml",
    "notes": "新浪财经转载 AGV 网公开报道，可核验；未公开互动量。"
  },
  {
    "date": "2026-05-30",
    "platform": "新闻/网站",
    "agenda": "展区开放",
    "topic": "AI",
    "persona": "媒体",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "People's Daily Online / Xinhua",
    "title": "Real-world AI applications shine at Macao's leading high-tech expo",
    "url": "https://en.people.cn/n3/2026/0530/c90000-20462208.html",
    "notes": "人民网英文转载新华社公开报道，可核验；未公开互动量。"
  },
  {
    "date": "2026-05-30",
    "platform": "新闻/网站",
    "agenda": "BGlobal新品发布",
    "topic": "智能硬件",
    "persona": "媒体",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "Yanko Design",
    "title": "Translation, Prompting, Agentic AI, all in 40 grams: iFLYTEK's Smart Glasses Debut at BEYOND Expo 2026",
    "url": "https://www.yankodesign.com/2026/05/30/translation-prompting-agentic-ai-all-in-40-grams-iflyteks-smart-glasses-debut-at-beyond-expo-2026/",
    "notes": "Yanko Design 公开报道，可核验；未公开页面互动量。"
  },
  {
    "date": "2026-05-30",
    "platform": "LinkedIn",
    "agenda": "展区开放",
    "topic": "机器人",
    "persona": "媒体",
    "mentions": 1,
    "engagement": 8,
    "sentiment": null,
    "source": "TNGlobal",
    "title": "Astribot at BEYOND Expo 2026: robotics and physical AI from Macau",
    "url": "https://www.linkedin.com/company/beyond-expo",
    "notes": "LinkedIn 公开公司页采样；BEYOND Expo 转发 TNGlobal 更新，页面显示“3d Edited”，按 2026-06-02 折算为 5月30日；公开 reactions：8；非原帖直链。"
  },
  {
    "date": "2026-05-30",
    "platform": "LinkedIn",
    "agenda": "会后社交",
    "topic": "国际合作",
    "persona": "媒体",
    "mentions": 1,
    "engagement": 5,
    "sentiment": null,
    "source": "BEAMSTART",
    "title": "BEYOND Expo drew 1,200+ global companies and 400+ speakers to Macao",
    "url": "https://www.linkedin.com/posts/beamstart_beyond-expo-one-of-asias-largest-technology-activity-7465967535407071233-hq7r",
    "notes": "LinkedIn 公开帖子页采样；页面显示“3d”，按 2026-06-02 折算为 5月30日；公开 reactions：5，另显示 3 comments。"
  },
  {
    "date": "2026-05-30",
    "platform": "LinkedIn",
    "agenda": "国际科技论坛",
    "topic": "Web3",
    "persona": "媒体",
    "mentions": 1,
    "engagement": 2,
    "sentiment": null,
    "source": "HK Business Wire",
    "title": "KuCoin CMO at BEYOND Expo: Trust Is Becoming the New Infrastructure for Web3",
    "url": "http://hkbusinesswire.com/kucoin-cmo-at-beyond-expo-trust-is-becoming-the-new-infrastructure-for-web3/",
    "notes": "LinkedIn 登录态站内搜索采样；关键词「BEYOND Expo May 29」；页面显示“3 天”，按 2026-06-02 折算为 5月30日；公开 reactions：2；原帖分享外部新闻稿链接。"
  },
  {
    "date": "2026-05-31",
    "platform": "官网/新闻稿",
    "agenda": "会后社交",
    "topic": "AI",
    "persona": "官方/主办方",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "PR Newswire / BEYOND Expo",
    "title": "AI: Digital to Physical | BEYOND Expo 2026 Leads Transformative Global Direction of Tech",
    "url": "https://www.prnewswire.com/apac/news-releases/ai-digital-to-physical--beyond-expo-2026-leads-transformative-global-direction-of-tech-302786386.html",
    "notes": "BEYOND Expo 会后英文新闻稿，可核验；未公开社交互动量。"
  },
  {
    "date": "2026-05-31",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "国际合作",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "对外贸易促进中心",
    "title": "BEYOND Expo 2026的时代价值与深远意义",
    "url": "",
    "notes": "搜狗微信搜索第 1 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：以数实共生为钥,启全球创新新程:BEYOND Expo 2026的时代价值与深远意义现场图当前,全球新一轮科技革命与产业变革加速演进..."
  },
  {
    "date": "2026-05-31",
    "platform": "微信",
    "agenda": "Fund At First Pitch",
    "topic": "投资路演",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "金财链上大玩家",
    "title": "*BEYOND Expo 2026*闭幕式澳門威尼斯人金光會場順利落幕,以FUND AT FIRST PITCH极限速投总决赛率先开启压轴环节",
    "url": "",
    "notes": "搜狗微信搜索第 5 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：*BEYOND Expo 2026*闭幕式澳門威尼斯人金光會場順"
  },
  {
    "date": "2026-05-31",
    "platform": "微信",
    "agenda": "会后社交",
    "topic": "投资路演",
    "persona": "投资人",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "香港X科技创业平台",
    "title": "他们在 Beyond Expo,面对 NBA 传奇球星做了一场特别的Pitch",
    "url": "",
    "notes": "搜狗微信搜索第 10 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：亚洲规模最大的科技创新与生态博览会——BEYOND Expo 2026 5月30日在澳门圆满落下帷幕!为期4天的BEYOND Expo 2026 在澳门..."
  },
  {
    "date": "2026-05-31",
    "platform": "微信",
    "agenda": "国际科技论坛",
    "topic": "国际合作",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "Shero Initiative旭柔计划",
    "title": "【S. IMPACT】2026 BEYOND Expo SheTech 女性科技峰会回顾",
    "url": "",
    "notes": "搜狗微信搜索第 6 页结果；原文直链未稳定解析，点击“搜索线索”按标题回搜。摘要：BEYOND Expo 以「AI:数实共生」为核心主题,汇聚全球120余个国家和地区、超3万名专业从业者,共探科技创新的未来机遇与发展..."
  },
  {
    "date": "2026-05-31",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "展商故事",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 10,
    "sentiment": null,
    "source": "淙淙",
    "title": "我与beyond的故事",
    "url": "https://www.rednote.com/explore/6a1ac4f100000000350261f2",
    "notes": "小红书网页版人工采集；关键词「BEYOND 探展」；页面显示互动：10；日期按页面显示“2天前”折算。"
  },
  {
    "date": "2026-05-31",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "展商故事",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 6,
    "sentiment": null,
    "source": "苗苗bdl",
    "title": "澳门beyond expo 2026",
    "url": "https://www.rednote.com/explore/6a1b1175000000003601c418",
    "notes": "小红书网页版人工采集；关键词「BEYOND Expo 2026」；页面显示互动：6；日期按页面显示“2天前”折算。"
  },
  {
    "date": "2026-05-31",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "Web3",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 35,
    "sentiment": null,
    "source": "香菜老师",
    "title": "🇲🇴04年 Web3️⃣大厂实习生，展会应该看什么",
    "url": "https://www.rednote.com/explore/6a1ad19c0000000037034b3c",
    "notes": "小红书网页版人工采集；关键词「BEYOND 探展」；页面显示互动：35；日期按页面显示“2天前”折算。"
  },
  {
    "date": "2026-05-31",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "展商故事",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "小红薯664D8B53",
    "title": "beyond expo",
    "url": "https://www.rednote.com/explore/6a1a47440000000007012924",
    "notes": "小红书网页版人工采集；关键词「BEYOND 探展」；页面显示互动：赞；日期按页面显示“2天前”折算。"
  },
  {
    "date": "2026-05-31",
    "platform": "小红书",
    "agenda": "BEYOND Hack Day",
    "topic": "AI",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 4,
    "sentiment": null,
    "source": "悬溺",
    "title": "在黑客松现场当路人",
    "url": "https://www.rednote.com/explore/6a1abe99000000003700df2d",
    "notes": "小红书网页版人工采集；关键词「BEYOND Expo 2026」；页面显示互动：4；日期按页面显示“2天前”折算。"
  },
  {
    "date": "2026-05-31",
    "platform": "小红书",
    "agenda": "BEYOND Awards",
    "topic": "智能硬件",
    "persona": "参展商",
    "mentions": 1,
    "engagement": 1,
    "sentiment": null,
    "source": "讯飞AI眼镜",
    "title": "讯飞AI眼镜获得BEYOND最佳创新大奖🏆",
    "url": "https://www.rednote.com/explore/6a19aa9f0000000007028171",
    "notes": "小红书网页版人工采集；关键词「科大讯飞 AI眼镜 BEYOND」；页面显示互动：1；日期按页面显示“2天前”折算。"
  },
  {
    "date": "2026-05-31",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "展商故事",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 19,
    "sentiment": null,
    "source": "粤海街道肖美丽",
    "title": "🇲🇴澳门偶遇张伟丽！！就在Beyond Expo",
    "url": "https://www.rednote.com/explore/6a1950860000000007028e4b",
    "notes": "小红书网页版人工采集；关键词「BEYOND国际科技创新博览会」；页面显示互动：19；日期按页面显示“2天前”折算。"
  },
  {
    "date": "2026-05-31",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "展商故事",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "AXE",
    "title": "Beyond Expo 科技展",
    "url": "https://www.rednote.com/explore/6a1a8089000000000800065d",
    "notes": "小红书网页版人工采集；关键词「BEYOND国际科技创新博览会」；页面显示互动：赞；日期按页面显示“2天前”折算。"
  },
  {
    "date": "2026-05-31",
    "platform": "小红书",
    "agenda": "会后社交",
    "topic": "展商故事",
    "persona": "官方/主办方",
    "mentions": 1,
    "engagement": 29,
    "sentiment": null,
    "source": "BEYOND国际科技创新博览会",
    "title": "亚洲第一！BEYOND Expo 2026 圆满收官🎉",
    "url": "https://www.rednote.com/explore/6a1b14470000000007023581",
    "notes": "小红书网页版人工采集；关键词「BEYOND国际科技创新博览会」；页面显示互动：29；日期按页面显示“2天前”折算。"
  },
  {
    "date": "2026-05-31",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "AI",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 9,
    "sentiment": null,
    "source": "Jennie",
    "title": "BeyondExpo2026👋",
    "url": "https://www.rednote.com/explore/6a1ad352000000003701face",
    "notes": "小红书网页版人工采集；关键词「BEYOND Expo 2026」；页面显示互动：9；日期按页面显示“2天前”折算。"
  },
  {
    "date": "2026-05-31",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "展商故事",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 6,
    "sentiment": null,
    "source": "lacey",
    "title": "BeyondExpo2026亚洲最大科创博览会",
    "url": "https://www.rednote.com/explore/6a1963ea00000000370355f5",
    "notes": "小红书网页版人工采集；关键词「BEYOND国际科技创新博览会」；页面显示互动：6；日期按页面显示“2天前”折算。"
  },
  {
    "date": "2026-05-31",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "展商故事",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 3,
    "sentiment": null,
    "source": "茕茕乔依",
    "title": "BeyondExpo 2026 澳门初体验",
    "url": "https://www.rednote.com/explore/6a1b0f000000000007028ccb",
    "notes": "小红书网页版人工采集；补搜关键词「BEYONDExpo」；页面显示互动：3；日期按页面显示“2天前”折算。"
  },
  {
    "date": "2026-05-31",
    "platform": "新闻/网站",
    "agenda": "BEYOND Hack Day",
    "topic": "AI",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "上海证券报 / 新浪财经",
    "title": "行云科技联合主办“BEYOND HACK DAY” 加速探索AI生态价值",
    "url": "https://finance.sina.com.cn/roll/2026-05-31/doc-inhzuvrh6105956.shtml",
    "notes": "新浪财经转载上海证券报公开报道，可核验；未公开互动量。"
  },
  {
    "date": "2026-05-31",
    "platform": "新闻/网站",
    "agenda": "国际科技论坛",
    "topic": "国际合作",
    "persona": "媒体",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "TechNode",
    "title": "KISED promotes South Korea's startup ecosystem and support programs at BEYOND Expo",
    "url": "https://technode.com/2026/05/31/kised-promotes-south-koreas-startup-ecosystem-and-support-programs-at-beyond-expo/",
    "notes": "TechNode 公开报道，可核验；未公开阅读、分享或评论数据。"
  },
  {
    "date": "2026-05-31",
    "platform": "LinkedIn",
    "agenda": "开幕式",
    "topic": "AI",
    "persona": "媒体",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "TNGlobal",
    "title": "AI: digital to physical - the 6th BEYOND EXPO is set to open in Macau",
    "url": "https://www.linkedin.com/posts/technodeglobal_ai-digital-to-physical-the-6th-beyond-activity-7465313547749855232--40U",
    "notes": "LinkedIn 公开帖子页采样；页面显示“2d”，按 2026-06-02 折算为 5月31日；公开页未显示可核验互动数。"
  },
  {
    "date": "2026-05-31",
    "platform": "LinkedIn",
    "agenda": "BGlobal新品发布",
    "topic": "智能硬件",
    "persona": "媒体",
    "mentions": 1,
    "engagement": 0,
    "sentiment": null,
    "source": "EastFrontier",
    "title": "iFLYTEK unveiled 40g AI glasses at BEYOND Expo 2026 in Macao",
    "url": "https://www.linkedin.com/company/eastfrontier/posts/",
    "notes": "LinkedIn 登录态站内搜索采样；关键词「iFLYTEK BEYOND Expo」；页面显示“2 天”，按 2026-06-02 折算为 5月31日；公开 reactions：0，另显示 1 条评论。"
  },
  {
    "date": "2026-05-31",
    "platform": "LinkedIn",
    "agenda": "BGlobal新品发布",
    "topic": "智能硬件",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 2,
    "sentiment": null,
    "source": "Nicky Chu",
    "title": "Checking out iFLYTEK AI Glasses at BEYOND Expo 2026 in Macao",
    "url": "https://www.linkedin.com/in/nicky-chu-6310b21a/",
    "notes": "LinkedIn 登录态站内搜索采样；关键词「iFLYTEK BEYOND Expo」；页面显示“2 天”，按 2026-06-02 折算为 5月31日；公开 reactions：2。"
  },
  {
    "date": "2026-05-31",
    "platform": "LinkedIn",
    "agenda": "BGlobal Summit",
    "topic": "国际合作",
    "persona": "媒体",
    "mentions": 1,
    "engagement": 5,
    "sentiment": null,
    "source": "杨映敏",
    "title": "TNGlobal brought ASEAN perspectives to BEYOND Expo BGlobal and Global Investment Summit",
    "url": "https://www.linkedin.com/in/yimie-yong-aa5ba631/zh/",
    "notes": "LinkedIn 登录态站内搜索采样；关键词「BGlobal BEYOND Expo」；页面显示“2 天”，按 2026-06-02 折算为 5月31日；公开 reactions：5；该动态转发/引用 TNGlobal 对 BGlobal Summit 和 Global Investment Summit 的现场内容。"
  },
  {
    "date": "2026-06-01",
    "platform": "新闻/网站",
    "agenda": "会后社交",
    "topic": "AI",
    "persona": "官方/主办方",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "PRNewswire",
    "title": "The 6th BEYOND Expo Wows Visitors with Showcase Asia's Tech AI: Digital to Physical becomes Reality in Macao",
    "url": "https://www.prnewswire.com/apac/news-releases/the-6th-beyond-expo-wows-visitors-with-showcase-asias-tech-ai-digital-to-physical-becomes-reality-in-macao-302787296.html",
    "notes": "PRNewswire APAC 公开分发稿；发布时间 2026-06-01 23:56 CST；未公开互动量。"
  },
  {
    "date": "2026-06-01",
    "platform": "微信",
    "agenda": "会后社交",
    "topic": "AI",
    "persona": "官方/主办方",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "BEYOND Expo",
    "title": "亚洲第一!BEYOND Expo 2026 圆满收官",
    "url": "",
    "notes": "搜狗微信搜索第 1 页结果；发布时间由搜狗时间戳换算为 Asia/Shanghai；原文直链未稳定解析，点击“搜索线索”按标题回搜。"
  },
  {
    "date": "2026-06-01",
    "platform": "微信",
    "agenda": "会后社交",
    "topic": "国际合作",
    "persona": "官方/主办方",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "BEYOND Expo",
    "title": "从澳门到深圳:BEYOND Expo 2026精彩延续，南山创新闪耀双城",
    "url": "",
    "notes": "搜狗微信搜索第 1 页结果；发布时间由搜狗时间戳换算为 Asia/Shanghai；原文直链未稳定解析，点击“搜索线索”按标题回搜。"
  },
  {
    "date": "2026-06-01",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "智能硬件",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "其域行业应用",
    "title": "其域创新亮相 BEYOND Expo 2026:以空间智能连接数字与现实",
    "url": "",
    "notes": "搜狗微信搜索第 3 页结果；发布时间由搜狗时间戳换算为 Asia/Shanghai；原文直链未稳定解析，点击“搜索线索”按标题回搜。"
  },
  {
    "date": "2026-06-01",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "国际合作",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "明月湖科创基地",
    "title": "BEYOND Expo 2026落幕:“两江智造”闪耀全球舞台",
    "url": "",
    "notes": "搜狗微信搜索第 4 页结果；发布时间由搜狗时间戳换算为 Asia/Shanghai；原文直链未稳定解析，点击“搜索线索”按标题回搜。"
  },
  {
    "date": "2026-06-01",
    "platform": "微信",
    "agenda": "Digital AI Summit",
    "topic": "AI",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "云智慧",
    "title": "直击BEYOND Expo 2026 | 云智慧Cloudwise亮相澳门，发布“三层战略”护航 AI 数实共生",
    "url": "",
    "notes": "搜狗微信搜索第 4 页结果；发布时间由搜狗时间戳换算为 Asia/Shanghai；原文直链未稳定解析，点击“搜索线索”按标题回搜。"
  },
  {
    "date": "2026-06-01",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "AI",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "阿里云云栖号",
    "title": "阿里云亮相BEYOND Expo 2026:以全栈AI技术，激发Agentic时代的亚洲创新力",
    "url": "",
    "notes": "搜狗微信搜索第 4 页结果；发布时间由搜狗时间戳换算为 Asia/Shanghai；原文直链未稳定解析，点击“搜索线索”按标题回搜。"
  },
  {
    "date": "2026-06-01",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "展商故事",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "蓝创源生",
    "title": "BEYOND Expo 2026 回顾:在科技的浪潮中，我们为海洋发声",
    "url": "",
    "notes": "搜狗微信搜索第 5 页结果；发布时间由搜狗时间戳换算为 Asia/Shanghai；原文直链未稳定解析，点击“搜索线索”按标题回搜。"
  },
  {
    "date": "2026-06-01",
    "platform": "微信",
    "agenda": "Fund At First Pitch",
    "topic": "投资路演",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "金财链上大玩家",
    "title": "*BEYOND Expo 2026*闭幕式澳門威尼斯人金光會場順利落幕，以FUND AT FIRST PITCH极限速投总决赛率先开启压轴环节",
    "url": "",
    "notes": "搜狗微信搜索第 5 页结果；发布时间由搜狗时间戳换算为 Asia/Shanghai；原文直链未稳定解析，点击“搜索线索”按标题回搜。"
  },
  {
    "date": "2026-06-01",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "AI",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "清华信息港",
    "title": "公司动态|柯西黎曼精彩亮相BEYOND Expo 2026",
    "url": "",
    "notes": "搜狗微信搜索第 7 页结果；发布时间由搜狗时间戳换算为 Asia/Shanghai；原文直链未稳定解析，点击“搜索线索”按标题回搜。"
  },
  {
    "date": "2026-06-01",
    "platform": "微信",
    "agenda": "会后社交",
    "topic": "国际合作",
    "persona": "观众",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "MOMAUP",
    "title": "活動紀實|澳門高校研究生聯合會參與“深圳—澳門科技產業合作交流推介會”並參觀BEYOND EXPO 2026",
    "url": "",
    "notes": "搜狗微信搜索第 7 页结果；发布时间由搜狗时间戳换算为 Asia/Shanghai；原文直链未稳定解析，点击“搜索线索”按标题回搜。"
  },
  {
    "date": "2026-06-01",
    "platform": "微信",
    "agenda": "会后社交",
    "topic": "出海",
    "persona": "媒体",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "动点出海",
    "title": "新加坡拿下东南亚AI基建融资99%，BEYOND Expo 2026圆满收官|SEA Now",
    "url": "",
    "notes": "搜狗微信搜索第 8 页结果；发布时间由搜狗时间戳换算为 Asia/Shanghai；原文直链未稳定解析，点击“搜索线索”按标题回搜。"
  },
  {
    "date": "2026-06-01",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "AI",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "双纽数字AI",
    "title": "数实共生 智联全球|双纽数字闪耀 BEYOND EXPO 2026",
    "url": "",
    "notes": "搜狗微信搜索第 9 页结果；发布时间由搜狗时间戳换算为 Asia/Shanghai；原文直链未稳定解析，点击“搜索线索”按标题回搜。"
  },
  {
    "date": "2026-06-01",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "国际合作",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "珠海先进集成电路研究院",
    "title": "搭平台、聚资源、促合作——研究院组织横琴科技企业亮相BEYOND Expo 2026",
    "url": "",
    "notes": "搜狗微信搜索第 9 页结果；发布时间由搜狗时间戳换算为 Asia/Shanghai；原文直链未稳定解析，点击“搜索线索”按标题回搜。"
  },
  {
    "date": "2026-06-01",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "AI",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "深圳模力营AI生态社区",
    "title": "模力动态 | 收官不落幕，科技正当时!2026 BEYOND Expo 南山展区・模力营圆满收官",
    "url": "",
    "notes": "搜狗微信搜索第 10 页结果；发布时间由搜狗时间戳换算为 Asia/Shanghai；原文直链未稳定解析，点击“搜索线索”按标题回搜。"
  },
  {
    "date": "2026-06-01",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "机器人",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "人形机器人孵化器",
    "title": "孵要闻 |澳门特首岑浩辉莅临指导 上海市人形机器人创新孵化器闪耀 BEYOND EXPO 2026",
    "url": "",
    "notes": "搜狗微信搜索第 10 页结果；发布时间由搜狗时间戳换算为 Asia/Shanghai；原文直链未稳定解析，点击“搜索线索”按标题回搜。"
  },
  {
    "date": "2026-06-02",
    "platform": "官网/新闻稿",
    "agenda": "会后社交",
    "topic": "AI",
    "persona": "官方/主办方",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "BEYOND EXPO 官网",
    "title": "AI: Digital to Physical BEYOND Expo 2026 Leads Transformative Global Direction of Tech",
    "url": "https://www.beyondexpo.com/2026/06/02/ai-digital-to-physical-beyond-expo-2026-leads-transformative-global-direction-of-tech/",
    "notes": "BEYOND EXPO 官网 2026-06-02 会后稿；未公开互动量。"
  },
  {
    "date": "2026-06-02",
    "platform": "官网/新闻稿",
    "agenda": "会后社交",
    "topic": "AI",
    "persona": "官方/主办方",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "BEYOND EXPO 官网",
    "title": "The 6th BEYOND Expo Wows Visitors with Showcase Asia's Tech AI: Digital to Physical becomes Reality in Macao",
    "url": "https://www.beyondexpo.com/2026/06/02/the-6th-beyond-expo-wows-visitors-with-showcase-asias-tech-ai-digital-to-physical-becomes-reality-in-macao/",
    "notes": "BEYOND EXPO 官网 2026-06-02 会后稿；与 PRNewswire 分发稿同主题，按官网发布页面单独保留。"
  },
  {
    "date": "2026-06-02",
    "platform": "新闻/网站",
    "agenda": "国际科技论坛",
    "topic": "国际合作",
    "persona": "媒体",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "KoreaTechDesk",
    "title": "At BEYOND Expo 2026, Korea Positioned Itself as Asia’s Industrial AI Testbed",
    "url": "https://koreatechdesk.com/beyond-expo-2026-korea-industrial-ai-testbed",
    "notes": "KoreaTechDesk 2026-06-02 公开报道；未公开互动量。"
  },
  {
    "date": "2026-06-02",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "机器人",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "枢途科技",
    "title": "BEYOND Expo 2026 | 在全球科技现场，看见具身智能数据新范式",
    "url": "",
    "notes": "搜狗微信搜索第 1 页结果；发布时间由搜狗时间戳换算为 Asia/Shanghai；原文直链未稳定解析，点击“搜索线索”按标题回搜。"
  },
  {
    "date": "2026-06-02",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "智能硬件",
    "persona": "媒体",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "AI硬趣",
    "title": "BEYOND Expo 2026观察，AI硬件的“实战时代”已经到来",
    "url": "",
    "notes": "搜狗微信搜索第 1 页结果；发布时间由搜狗时间戳换算为 Asia/Shanghai；原文直链未稳定解析，点击“搜索线索”按标题回搜。"
  },
  {
    "date": "2026-06-02",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "机器人",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "望默科技wamotech",
    "title": "望默科技受邀亮相BEYOND Expo 2026，自研外骨骼机器人展现硬核实力",
    "url": "",
    "notes": "搜狗微信搜索第 3 页结果；发布时间由搜狗时间戳换算为 Asia/Shanghai；原文直链未稳定解析，点击“搜索线索”按标题回搜。"
  },
  {
    "date": "2026-06-02",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "创作者经济",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "明辉集团",
    "title": "明辉集团携IKONE亮相BEYOND Expo 2026，以创意赋能科技品牌新表达",
    "url": "",
    "notes": "搜狗微信搜索第 5 页结果；发布时间由搜狗时间戳换算为 Asia/Shanghai；原文直链未稳定解析，点击“搜索线索”按标题回搜；同题 IKONE 转发样本未重复计入。"
  },
  {
    "date": "2026-06-02",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "AI",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "酱芯科技",
    "title": "从澳门奔赴全球|酱芯科技 BEYOND Expo 2026 圆满收官:AI 赋能调味，美味打破国界",
    "url": "",
    "notes": "搜狗微信搜索第 6 页结果；发布时间由搜狗时间戳换算为 Asia/Shanghai；原文直链未稳定解析，点击“搜索线索”按标题回搜。"
  },
  {
    "date": "2026-06-03",
    "platform": "新闻/网站",
    "agenda": "BGlobal新品发布",
    "topic": "智能硬件",
    "persona": "媒体",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "网界",
    "title": "科大讯飞BEYOND Expo 2026亮剑：AI眼镜40g轻量化登场，全场景交互革新未来",
    "url": "https://www.cnu.com.cn/data/202606/228093.html",
    "notes": "网界 2026-06-03 12:35 公开报道；未公开互动量。"
  },
  {
    "date": "2026-06-03",
    "platform": "新闻/网站",
    "agenda": "开幕式",
    "topic": "机器人",
    "persona": "媒体",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "ANTARA / PRNewswire",
    "title": "Pudu Robotics Founder & CEO Felix Zhang at BEYOND Expo 2026: Globalizing Physical AI",
    "url": "https://en.antaranews.com/amp/news/417815/pudu-robotics-founder-ceo-felix-zhang-at-beyond-expo-2026-globalizing-physical-al",
    "notes": "ANTARA 2026-06-03 公开分发稿；未公开互动量。"
  },
  {
    "date": "2026-06-03",
    "platform": "新闻/网站",
    "agenda": "Web2+3 AI论坛",
    "topic": "Web3",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "锦鲤KoiPayment",
    "title": "BIT受邀出席Beyond Expo 2026，券商直投美股开创新模式",
    "url": "https://koipayment.com/2026/06/03/bit%E5%8F%97%E9%82%80%E5%87%BA%E5%B8%ADbeyond-expo-2026%EF%BC%8C%E5%88%B8%E5%95%86%E7%9B%B4%E6%8A%95%E7%BE%8E%E8%82%A1%E5%BC%80%E5%88%9B%E6%96%B0%E6%A8%A1%E5%BC%8F/",
    "notes": "锦鲤KoiPayment 2026-06-03 19:49 公开文章；未公开互动量。"
  },
  {
    "date": "2026-06-03",
    "platform": "新闻/网站",
    "agenda": "Digital AI Summit",
    "topic": "AI",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "SegmentFault / 云智慧",
    "title": "直击BEYOND Expo 2026 | 云智慧Cloudwise亮相澳门，发布“三层战略”护航 AI 数实共生",
    "url": "https://segmentfault.com/a/1190000047814609?sort=votes",
    "notes": "SegmentFault 2026-06-03 公开文章；页面显示阅读数但未计入互动量，避免混合口径。"
  },
  {
    "date": "2026-06-03",
    "platform": "新闻/网站",
    "agenda": "国际科技论坛",
    "topic": "国际合作",
    "persona": "媒体",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "Mid-East.info",
    "title": "AI, Energy and Water: The New Asia–Middle East Investment Opportunity",
    "url": "https://mid-east.info/ai-energy-and-water-the-new-asia-middle-east-investment-opportunity/",
    "notes": "Mid-East.info 2026-06-03 现场报道；页面数字未确认口径，未计入互动量。"
  },
  {
    "date": "2026-06-03",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "机器人",
    "persona": "媒体",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "具身智能机器人世界",
    "title": "BEYOND Expo2026观察:具身智能的“ChatGPT时刻”还没到，机器人公司在争什么?",
    "url": "",
    "notes": "搜狗微信搜索第 2 页结果；发布时间由搜狗时间戳换算为 Asia/Shanghai；原文直链未稳定解析，点击“搜索线索”按标题回搜。"
  },
  {
    "date": "2026-06-03",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "国际合作",
    "persona": "官方/主办方",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "BEYOND Expo",
    "title": "横琴科技企业亮相BEYOND Expo 2026，展现琴澳产业协同创新成效",
    "url": "",
    "notes": "搜狗微信搜索第 2 页结果；发布时间由搜狗时间戳换算为 Asia/Shanghai；原文直链未稳定解析，点击“搜索线索”按标题回搜。"
  },
  {
    "date": "2026-06-03",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "AI",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "嗖马人工智能技术杭州有限公司",
    "title": "BEYOND Expo 2026落幕:近800家企业亮出底牌，你的同行已经悄悄上车",
    "url": "",
    "notes": "搜狗微信搜索第 3 页结果；发布时间由搜狗时间戳换算为 Asia/Shanghai；原文直链未稳定解析，点击“搜索线索”按标题回搜。"
  },
  {
    "date": "2026-06-03",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "智能硬件",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "倍联德实业",
    "title": "圆满落幕!倍联德BEYOND Expo 2026澳门之行收官，锐影液冷算力闪耀国际盛会",
    "url": "",
    "notes": "搜狗微信搜索第 5 页结果；发布时间由搜狗时间戳换算为 Asia/Shanghai；原文直链未稳定解析，点击“搜索线索”按标题回搜。"
  },
  {
    "date": "2026-06-03",
    "platform": "微信",
    "agenda": "国际科技论坛",
    "topic": "医疗健康",
    "persona": "官方/主办方",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "BEYOND Expo",
    "title": "从瑞士健康谷到中国落地:中瑞FEM双向发展论坛首次亮相BEYOND Expo 2026!",
    "url": "",
    "notes": "搜狗微信搜索第 7 页结果；发布时间由搜狗时间戳换算为 Asia/Shanghai；原文直链未稳定解析，点击“搜索线索”按标题回搜。"
  },
  {
    "date": "2026-06-03",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "智能硬件",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "珠海市半导体行业协会",
    "title": "会员动态 | AI赋能 数实共生 !欧森斯携高速示波器、在线工业CT检测设备亮相BEYOND EXPO 2026",
    "url": "",
    "notes": "搜狗微信搜索第 8 页结果；发布时间由搜狗时间戳换算为 Asia/Shanghai；原文直链未稳定解析，点击“搜索线索”按标题回搜。"
  },
  {
    "date": "2026-06-03",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "国际合作",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "今日漕河泾",
    "title": "特首到访!漕河泾开发区携企亮相BEYOND EXPO 2026",
    "url": "",
    "notes": "搜狗微信搜索第 8 页结果；发布时间由搜狗时间戳换算为 Asia/Shanghai；原文直链未稳定解析，点击“搜索线索”按标题回搜。"
  },
  {
    "date": "2026-06-03",
    "platform": "微信",
    "agenda": "展区开放",
    "topic": "国际合作",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "中欧创新生态圈",
    "title": "活动回顾|深圳中欧创新中心亮相BEYOND Expo 2026!助力第十届中国深圳创新创业大赛国际赛项目招募!",
    "url": "",
    "notes": "搜狗微信搜索第 10 页结果；发布时间由搜狗时间戳换算为 Asia/Shanghai；原文直链未稳定解析，点击“搜索线索”按标题回搜。"
  },
  {
    "date": "2026-06-03",
    "platform": "微信",
    "agenda": "Fund At First Pitch",
    "topic": "投资路演",
    "persona": "参展商",
    "mentions": 1,
    "engagement": null,
    "sentiment": null,
    "source": "立方匯Hexcubes",
    "title": "赋能初创，链接全球 | 立方匯亮相 BEYOND Expo 2026，从湾区启航、向世界生长",
    "url": "",
    "notes": "搜狗微信搜索第 10 页结果；发布时间由搜狗时间戳换算为 Asia/Shanghai；原文直链未稳定解析，点击“搜索线索”按标题回搜。"
  },
  {
    "date": "2026-06-01",
    "platform": "小红书",
    "agenda": "会后社交",
    "topic": "展商故事",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 201,
    "sentiment": null,
    "source": "电荷荷荷",
    "title": "🇲🇴BEYOND收官｜互联网大厂打工人澳门看展",
    "url": "https://www.rednote.com/explore/6a1bef0a000000000800081d",
    "notes": "小红书网页版站内搜索采样；关键词「beyondexpo」；页面显示“4天前”，按 2026-06-05 折算为 6月1日；公开互动：201。"
  },
  {
    "date": "2026-06-02",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "智能硬件",
    "persona": "参展商",
    "mentions": 1,
    "engagement": 5,
    "sentiment": null,
    "source": "思捷科技Sieger Technology",
    "title": "现场直击澳门 BEYOND Expo 2026！🎩",
    "url": "https://www.rednote.com/explore/6a1d1df100000000350256bd",
    "notes": "小红书网页版站内搜索采样；关键词「BEYOND Expo 2026」；页面显示“3天前”，按 2026-06-05 折算为 6月2日；公开互动：5。"
  },
  {
    "date": "2026-06-02",
    "platform": "小红书",
    "agenda": "国际科技论坛",
    "topic": "AI",
    "persona": "嘉宾",
    "mentions": 1,
    "engagement": 2,
    "sentiment": null,
    "source": "TreeWan",
    "title": "主持 2026 Beyond Expo Physical AI 论坛",
    "url": "https://www.rednote.com/explore/6a1afcaf00000000350200f0",
    "notes": "小红书网页版站内搜索采样；关键词「beyond expo」；页面显示“3天前”，按 2026-06-05 折算为 6月2日；公开互动：2。"
  },
  {
    "date": "2026-06-02",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "AI",
    "persona": "参展商",
    "mentions": 1,
    "engagement": 38,
    "sentiment": null,
    "source": "法国建筑师Xavier",
    "title": "澳门🇲🇴BEYOND Expo|建筑AI创业者参展",
    "url": "https://www.rednote.com/explore/6a1d41c80000000007024b0e",
    "notes": "小红书网页版站内搜索采样；关键词「beyond expo」；页面显示“3天前”，按 2026-06-05 折算为 6月2日；公开互动：38。"
  },
  {
    "date": "2026-06-02",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "展商故事",
    "persona": "参展商",
    "mentions": 1,
    "engagement": 11,
    "sentiment": null,
    "source": "翔解科技",
    "title": "Beyond Expo前线纪实｜最好的团建是并肩冲前",
    "url": "https://www.rednote.com/explore/6a1e07840000000006020565",
    "notes": "小红书网页版站内搜索采样；关键词「BEYONDExpo」；页面显示“3天前”，按 2026-06-05 折算为 6月2日；公开互动：11。"
  },
  {
    "date": "2026-06-02",
    "platform": "小红书",
    "agenda": "会后社交",
    "topic": "创作者经济",
    "persona": "官方/主办方",
    "mentions": 1,
    "engagement": 19,
    "sentiment": null,
    "source": "BEYOND国际科技创新博览会",
    "title": "别样薯光｜BEYOND星选 官方Pick合辑 ✨",
    "url": "https://www.rednote.com/explore/6a1d881b0000000007013066",
    "notes": "小红书网页版站内搜索采样；关键词「BEYONDExpo」；页面显示“3天前”，按 2026-06-05 折算为 6月2日；公开互动：19。"
  },
  {
    "date": "2026-06-02",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "展商故事",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 6,
    "sentiment": null,
    "source": "Alexdaydayup",
    "title": "Beyond expo值得一看",
    "url": "https://www.rednote.com/explore/6a1d888d000000003502fa2f",
    "notes": "小红书网页版站内搜索采样；关键词「beyondexpo2026」；页面显示“3天前”，按 2026-06-05 折算为 6月2日；公开互动：6。"
  },
  {
    "date": "2026-06-03",
    "platform": "小红书",
    "agenda": "展区开放",
    "topic": "展商故事",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 18,
    "sentiment": null,
    "source": "Cherish车里诗",
    "title": "Beyond Expo2026在线算缘",
    "url": "https://www.rednote.com/explore/6a1eddda000000003802031e",
    "notes": "小红书网页版站内搜索采样；关键词「BEYOND Expo 2026」；页面显示“2天前”，按 2026-06-05 折算为 6月3日；公开互动：18。"
  },
  {
    "date": "2026-06-01",
    "platform": "LinkedIn",
    "agenda": "BEYOND Awards",
    "topic": "AI",
    "persona": "官方/主办方",
    "mentions": 1,
    "engagement": 46,
    "sentiment": null,
    "source": "BEYOND Expo",
    "title": "BEYOND Innovation Awards winners announced",
    "url": "https://www.linkedin.com/company/beyond-expo",
    "notes": "LinkedIn 公司页公开采样；页面显示“4d”，按 2026-06-05 折算为 6月1日；公开 reactions：46，另显示 1 Comment；非原帖直链，按公司页更新核验。"
  },
  {
    "date": "2026-06-01",
    "platform": "LinkedIn",
    "agenda": "BGlobal新品发布",
    "topic": "智能硬件",
    "persona": "KOL/创作者",
    "mentions": 1,
    "engagement": 6,
    "sentiment": null,
    "source": "赵云菲 / SmartXY",
    "title": "AI is moving from the screen to the face at BEYOND Expo 2026",
    "url": "https://www.linkedin.com/posts/bravevanda_aiglasses-arglasses-smartglasses-activity-7465564963772923904-tR7C",
    "notes": "LinkedIn 公开帖子页采样；页面显示“4d”，按 2026-06-05 折算为 6月1日；公开 reactions：6。"
  },
  {
    "date": "2026-06-01",
    "platform": "LinkedIn",
    "agenda": "会后社交",
    "topic": "AI",
    "persona": "媒体",
    "mentions": 1,
    "engagement": 1,
    "sentiment": null,
    "source": "Entrepreneur News Network",
    "title": "ENN INSIGHTS: The Physical AI Revolution Live From BEYOND Expo 2026",
    "url": "https://www.linkedin.com/pulse/enn-insights-physical-ai-revolution-live-from-umkrc",
    "notes": "LinkedIn Pulse 公开文章；页面显示 Published Jun 1 2026；公开 reactions：1。"
  },
  {
    "date": "2026-06-02",
    "platform": "LinkedIn",
    "agenda": "展区开放",
    "topic": "机器人",
    "persona": "媒体",
    "mentions": 1,
    "engagement": 8,
    "sentiment": null,
    "source": "Yimie Yong / TNGlobal",
    "title": "Astribot at BEYOND Expo 2026",
    "url": "https://www.linkedin.com/posts/yimie-yong-aa5ba631_beyondexpo2026-beyondexpo-physicalai-activity-7465948186621272064-lGmM",
    "notes": "LinkedIn 公开帖子页采样；页面显示“3d Edited”，按 2026-06-05 折算为 6月2日；公开 reactions：8，另显示 2 Comments。"
  },
  {
    "date": "2026-06-02",
    "platform": "LinkedIn",
    "agenda": "展区开放",
    "topic": "AI",
    "persona": "参展商",
    "mentions": 1,
    "engagement": 3,
    "sentiment": null,
    "source": "InnoX Shenzhen",
    "title": "Global media got a closer look at Shenzhen hard tech at BEYOND Expo 2026 Media Day",
    "url": "https://www.linkedin.com/posts/innox-shenzhen_shenzhen-ai-hardware-activity-7466069417479675904-s7j1",
    "notes": "LinkedIn 公开帖子页采样；页面显示“3d”，按 2026-06-05 折算为 6月2日；公开 reactions：3。"
  },
  {
    "date": "2026-06-02",
    "platform": "LinkedIn",
    "agenda": "BGlobal Summit",
    "topic": "国际合作",
    "persona": "参展商",
    "mentions": 1,
    "engagement": 46,
    "sentiment": null,
    "source": "Cradle Fund",
    "title": "From regional conversations to Malaysian talent on the global stage, BEYOND Expo 2026 in Macau",
    "url": "https://www.linkedin.com/company/cradlefund",
    "notes": "LinkedIn 公司页公开采样；页面显示“3d Edited”，按 2026-06-05 折算为 6月2日；公开 reactions：46，另显示 9 Comments；非原帖直链，按公司页更新核验。"
  }
];

let records = cloneRecords(sampleRecords);
let selectedCell = null;
let dataMode = "captured";

const els = {
  modeSelect: document.getElementById("modeSelect"),
  metricSelect: document.getElementById("metricSelect"),
  platformFilter: document.getElementById("platformFilter"),
  topicFilter: document.getElementById("topicFilter"),
  searchInput: document.getElementById("searchInput"),
  csvInput: document.getElementById("csvInput"),
  exportButton: document.getElementById("exportButton"),
  resetButton: document.getElementById("resetButton"),
  dataStatus: document.getElementById("dataStatus"),
  dataModeLabel: document.getElementById("dataModeLabel"),
  dataModeText: document.getElementById("dataModeText"),
  scoreExplain: document.getElementById("scoreExplain"),
  accuracyLabel: document.getElementById("accuracyLabel"),
  accuracyText: document.getElementById("accuracyText"),
  heatmapTitle: document.getElementById("heatmapTitle"),
  heatmapSubtitle: document.getElementById("heatmapSubtitle"),
  heatmap: document.getElementById("heatmap"),
  kpiMentions: document.getElementById("kpiMentions"),
  kpiEngagement: document.getElementById("kpiEngagement"),
  kpiPeakDate: document.getElementById("kpiPeakDate"),
  kpiPeakDateMeta: document.getElementById("kpiPeakDateMeta"),
  kpiTopPlatform: document.getElementById("kpiTopPlatform"),
  kpiTopPlatformMeta: document.getElementById("kpiTopPlatformMeta"),
  insightLede: document.getElementById("insightLede"),
  insightGrid: document.getElementById("insightGrid"),
  detailTitle: document.getElementById("detailTitle"),
  detailSubtitle: document.getElementById("detailSubtitle"),
  detailScore: document.getElementById("detailScore"),
  detailScoreLabel: document.getElementById("detailScoreLabel"),
  detailScoreNote: document.getElementById("detailScoreNote"),
  detailMentions: document.getElementById("detailMentions"),
  detailEngagement: document.getElementById("detailEngagement"),
  detailSentiment: document.getElementById("detailSentiment"),
  detailList: document.getElementById("detailList"),
  recordCount: document.getElementById("recordCount"),
  evidenceBody: document.getElementById("evidenceBody"),
  evidenceCards: document.getElementById("evidenceCards"),
};

init();

function init() {
  populateFilters();
  attachEvents();
  render();
}

function attachEvents() {
  [
    els.modeSelect,
    els.metricSelect,
    els.platformFilter,
    els.topicFilter,
    els.searchInput,
  ].forEach((element) => {
    element.addEventListener("input", () => {
      selectedCell = null;
      render();
    });
  });

  els.resetButton.addEventListener("click", () => {
    records = cloneRecords(sampleRecords);
    dataMode = "captured";
    selectedCell = null;
    populateFilters();
    setStatus("当前为公开可核验样本，不代表全网声量", "sample");
    render();
  });

  els.exportButton.addEventListener("click", () => {
    downloadCsv(getFilteredRecords(), "beyond-expo-social-heatmap-current.csv");
  });

  els.csvInput.addEventListener("change", async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const text = await file.text();
    const parsed = parseCsv(text).map(normalizeRecord).filter(Boolean);
    const inRange = parsed.filter((record) => DATE_RANGE.includes(record.date));

    if (!inRange.length) {
      setStatus(`CSV 未找到 ${formatDateRange()} 范围内的数据`, "error");
      event.target.value = "";
      return;
    }

    records = inRange;
    dataMode = "imported";
    selectedCell = null;
    populateFilters();
    setStatus(`已导入 ${inRange.length} 条 CSV 记录，请确认来源口径`, "live");
    render();
    event.target.value = "";
  });
}

function render() {
  const filtered = getFilteredRecords();
  renderDataNotes(filtered);
  renderKpis(filtered);
  renderInsights(filtered);
  renderHeatmap(filtered);
  renderDetail(filtered);
  renderEvidence(filtered);
}

function renderDataNotes(filtered) {
  const exactLinks = records.filter((record) => record.url).length;
  const linkRate = records.length ? Math.round((exactLinks / records.length) * 100) : 0;
  const knownEngagement = records.filter((record) => hasNumber(record.engagement)).length;
  const knownSentiment = records.filter((record) => hasNumber(record.sentiment)).length;
  const modeCopy = dataMode === "captured"
    ? {
        label: "公开可核验样本",
        text: "当前内置数据来自可打开的官网、媒体、微信、小红书等公开网页；这是部分捕获样本，不是微博、小红书、抖音等平台后台的全网声量。",
        accuracy: "部分抓取",
      }
    : {
        label: "已导入 CSV",
        text: "当前结果来自你导入的 CSV。请确认数据是否来自平台后台、监测工具或人工核验表。",
        accuracy: "可复核数据",
      };

  els.dataModeLabel.textContent = modeCopy.label;
  els.dataModeText.textContent = modeCopy.text;
  els.scoreExplain.textContent = "可选指标";
  els.accuracyLabel.textContent = modeCopy.accuracy;
  els.accuracyText.textContent = dataMode === "captured"
    ? `当前筛选显示 ${filtered.length} 条公开样本；全量链接完整度 ${linkRate}%。互动数已知 ${knownEngagement}/${records.length} 条，情绪已判定 ${knownSentiment}/${records.length} 条，其余不估算。`
    : `当前筛选显示 ${filtered.length} 条记录，原始链接完整度 ${linkRate}%。链接越完整，越容易回溯案例。`;
}

function populateFilters() {
  fillSelect(els.platformFilter, ["all", ...sortByOrder(unique(records.map((record) => record.platform)), ORDER.platform)], "全部平台");
  fillSelect(els.topicFilter, ["all", ...sortByOrder(unique(records.map((record) => record.topic)), ORDER.topic)], "全部话题");
}

function fillSelect(select, values, allLabel) {
  const current = select.value;
  select.innerHTML = "";
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value === "all" ? allLabel : value;
    select.appendChild(option);
  });
  select.value = values.includes(current) ? current : "all";
}

function getFilteredRecords() {
  const platform = els.platformFilter.value;
  const topic = els.topicFilter.value;
  const query = els.searchInput.value.trim().toLowerCase();

  return records.filter((record) => {
    if (platform !== "all" && record.platform !== platform) return false;
    if (topic !== "all" && record.topic !== topic) return false;
    if (!query) return true;
    const haystack = [
      record.platform,
      record.agenda,
      record.topic,
      record.persona,
      record.source,
      record.title,
      record.notes,
    ].join(" ").toLowerCase();
    return haystack.includes(query);
  });
}

function renderKpis(filtered) {
  const totalMentions = sum(filtered, "mentions");
  const totalEngagement = sum(filtered, "engagement");
  const knownEngagement = filtered.filter((record) => hasNumber(record.engagement)).length;
  const byDate = groupBy(filtered, "date");
  const byPlatform = groupBy(filtered, "platform");
  const peakDate = topEntry(byDate, (items) => sum(items, "mentions") + sum(items, "engagement") / 120);
  const topPlatform = topEntry(byPlatform, (items) => sum(items, "mentions") + sum(items, "engagement") / 120);

  els.kpiMentions.textContent = formatNumber(totalMentions);
  els.kpiEngagement.textContent = knownEngagement ? formatNumber(totalEngagement) : "未公开";
  els.kpiPeakDate.textContent = peakDate ? formatDate(peakDate.key) : "-";
  els.kpiPeakDateMeta.textContent = peakDate ? `${formatNumber(sum(peakDate.items, "mentions"))} 条公开样本` : "暂无数据";
  els.kpiTopPlatform.textContent = topPlatform ? topPlatform.key : "-";
  els.kpiTopPlatformMeta.textContent = topPlatform
    ? `${formatNumber(sum(topPlatform.items, "mentions"))} 条公开样本`
    : "暂无数据";
}

function renderInsights(filtered) {
  const insights = buildInsights(filtered);
  els.insightLede.textContent = insights.lede;
  els.insightGrid.innerHTML = "";
  insights.cards.forEach((card) => els.insightGrid.appendChild(makeInsightCard(card)));
}

function buildInsights(filtered) {
  const totalMentions = sum(filtered, "mentions");
  if (!filtered.length || !totalMentions) {
    return {
      lede: "当前筛选下没有可判断的公开样本。可以放宽平台、话题或搜索条件后再看趋势。",
      cards: [
        {
          label: "趋势",
          title: "暂无趋势判断",
          body: "没有样本时不生成峰值、集中度和扩散判断。",
          meta: "未使用估算数据",
        },
      ],
    };
  }

  const dateStats = DATE_RANGE.map((date) => {
    const items = filtered.filter((record) => record.date === date);
    return {
      date,
      mentions: sum(items, "mentions"),
      engagement: sum(items, "engagement"),
      items,
    };
  });
  const peakDate = [...dateStats].sort((a, b) => b.mentions - a.mentions || b.engagement - a.engagement)[0];
  const activeDays = dateStats.filter((item) => item.mentions > 0).length;
  const platformRanks = rankGroups(filtered, "platform");
  const topicRanks = rankGroups(filtered, "topic");
  const agendaRanks = rankGroups(filtered, "agenda");
  const topPlatform = platformRanks[0];
  const topTopic = topicRanks[0];
  const trend = describeTrend(dateStats);
  const platformTop3Share = share(platformRanks.slice(0, 3).reduce((total, item) => total + item.mentions, 0), totalMentions);
  const topicTop3Share = share(topicRanks.slice(0, 3).reduce((total, item) => total + item.mentions, 0), totalMentions);
  const knownEngagementRecords = filtered.filter((record) => hasNumber(record.engagement));
  const totalEngagement = sum(filtered, "engagement");
  const topEngagement = [...knownEngagementRecords].sort((a, b) => Number(b.engagement) - Number(a.engagement))[0];
  const topEngagementShare = topEngagement && totalEngagement
    ? share(Number(topEngagement.engagement), totalEngagement)
    : 0;

  return {
    lede: `公开样本显示，当前传播高点出现在${formatDate(peakDate.date)}；样本主要集中在${topPlatform.key}平台，并围绕${topTopic.key}、${topicRanks[1]?.key || "次级话题"}等方向展开。`,
    cards: [
      {
        label: "时间趋势",
        title: trend.title,
        body: `${formatDate(peakDate.date)}为样本峰值，记录 ${formatNumber(peakDate.mentions)} 条；${DATE_RANGE.length}天节奏为 ${formatDateCounts(dateStats)}。`,
        meta: `活跃 ${activeDays}/${DATE_RANGE.length} 天，按公开样本数判断`,
      },
      {
        label: "平台集中",
        title: concentrationTitle(topPlatform.share, "平台"),
        body: `${topPlatform.key}贡献 ${formatNumber(topPlatform.mentions)} 条，占 ${formatShare(topPlatform.share)}；前三平台合计 ${formatShare(platformTop3Share)}。`,
        meta: formatRankList(platformRanks.slice(0, 3)),
      },
      {
        label: "话题集中",
        title: topicConcentrationTitle(topTopic.share, topicTop3Share),
        body: makeTopicBody(topicRanks, topicTop3Share),
        meta: formatRankList(topicRanks.slice(0, 3)),
      },
      {
        label: "汇报判断",
        title: engagementJudgement(knownEngagementRecords, topEngagementShare),
        body: makeJudgementBody({
          filtered,
          agendaRanks,
          knownEngagementRecords,
          topEngagement,
          topEngagementShare,
          totalEngagement,
        }),
        meta: `互动已知 ${knownEngagementRecords.length}/${filtered.length} 条，未知项不估算`,
      },
    ],
  };
}

function renderHeatmap(filtered) {
  const mode = els.modeSelect.value;
  const metric = els.metricSelect.value;
  const rows = sortByOrder(unique(filtered.map((record) => record[mode])).filter(Boolean), ORDER[mode]);
  const matrix = rows.flatMap((row) =>
    DATE_RANGE.map((date) => {
      const items = filtered.filter((record) => record[mode] === row && record.date === date);
      return makeCell(row, date, items);
    })
  );
  const maxMetric = Math.max(1, ...matrix.map((cell) => metricNumber(cell, metric)));

  els.heatmapTitle.textContent = MODE_COPY[mode].title;
  els.heatmapSubtitle.textContent = MODE_COPY[mode].subtitle;
  els.heatmap.innerHTML = "";

  const grid = document.createElement("div");
  grid.className = "heatmap-grid";
  grid.style.setProperty("--date-count", DATE_RANGE.length);
  grid.appendChild(makeDiv("axis-cell", FIELD_LABELS[mode]));
  DATE_RANGE.forEach((date) => grid.appendChild(makeDiv("column-label", formatDate(date))));

  if (!rows.length) {
    els.heatmap.appendChild(makeEmpty("当前筛选下没有可展示的数据。"));
    resetDetail();
    return;
  }

  rows.forEach((row) => {
    grid.appendChild(makeDiv("row-label", row));
    DATE_RANGE.forEach((date) => {
      const cell = matrix.find((item) => item.row === row && item.date === date);
      const rawValue = metricValue(cell, metric);
      const numericValue = metricNumber(cell, metric);
      const intensity = metric === "heat" ? cell.heat : Math.round((numericValue / maxMetric) * 100);
      const button = document.createElement("button");
      button.type = "button";
      button.className = "heat-cell";
      button.dataset.row = row;
      button.dataset.date = date;
      button.style.setProperty("--cell-bg", heatColor(intensity));
      button.style.setProperty("--cell-fg", intensity >= 72 ? "#ffffff" : "#1d2730");
      button.setAttribute(
        "aria-label",
        `${row} ${formatDate(date)} ${metricLabel(metric)} ${formatMetric(rawValue, metric)}`
      );
      if (selectedCell && selectedCell.row === row && selectedCell.date === date) {
        button.classList.add("is-selected");
      }
      button.innerHTML = `
        <strong>${formatMetric(rawValue, metric)}</strong>
        <span>${metric === "heat" ? "综合热度分 /100" : metricLabel(metric)}</span>
        <small>${formatNumber(cell.mentions)} 样本 · ${formatOptionalNumber(cell.engagement)} 互动</small>
      `;
      button.addEventListener("click", () => {
        selectedCell = { row, date };
        render();
      });
      grid.appendChild(button);
    });
  });

  els.heatmap.appendChild(grid);
}

function makeCell(row, date, items) {
  const mentions = sum(items, "mentions");
  const engagement = items.some((item) => hasNumber(item.engagement)) ? sum(items, "engagement") : null;
  const sentiment = average(items.map((item) => item.sentiment));
  return {
    row,
    date,
    items,
    mentions,
    engagement,
    sentiment,
    heat: heatScore({ mentions, engagement, sentiment }),
  };
}

function renderDetail(filtered) {
  const mode = els.modeSelect.value;
  if (!selectedCell) {
    resetDetail();
    return;
  }

  const items = filtered.filter((record) => record[mode] === selectedCell.row && record.date === selectedCell.date);
  const cell = makeCell(selectedCell.row, selectedCell.date, items);
  els.detailTitle.textContent = `${selectedCell.row} / ${formatDate(selectedCell.date)}`;
  els.detailSubtitle.textContent = `${FIELD_LABELS[mode]}维度下的贡献内容`;
  els.detailScore.textContent = cell.items.length ? cell.heat : "0";
  els.detailScore.style.background = heatColor(cell.heat);
  els.detailScoreLabel.textContent = "综合热度分 / 100";
  els.detailScoreNote.textContent = dataMode === "captured"
    ? "仅基于已抓取的公开样本和已知互动量；未知项不估算。"
    : "由样本数、互动量、情绪健康度折算，用于横向比较。";
  els.detailMentions.textContent = formatNumber(cell.mentions);
  els.detailEngagement.textContent = formatOptionalNumber(cell.engagement);
  els.detailSentiment.textContent = formatSentiment(cell.sentiment);
  els.detailList.innerHTML = "";

  if (!items.length) {
    els.detailList.appendChild(makeEmpty("这个色块下暂无内容记录。"));
    return;
  }

  [...items]
    .sort((a, b) => recordScore(b) - recordScore(a))
    .slice(0, 6)
    .forEach((record) => els.detailList.appendChild(makeEvidenceItem(record)));
}

function resetDetail() {
  els.detailTitle.textContent = "选择一个色块";
  els.detailSubtitle.textContent = "点击热力图单元格查看贡献内容。";
  els.detailScore.textContent = "-";
  els.detailScore.style.background = "var(--accent)";
  els.detailScoreLabel.textContent = "综合热度分 / 100";
  els.detailScoreNote.textContent = "点击色块后显示计算结果和贡献内容。";
  els.detailMentions.textContent = "-";
  els.detailEngagement.textContent = "-";
  els.detailSentiment.textContent = "-";
  els.detailList.innerHTML = "";
  els.detailList.appendChild(makeEmpty("当前还没有选择具体色块。"));
}

function renderEvidence(filtered) {
  const sorted = [...filtered].sort((a, b) => {
    if (a.date !== b.date) return a.date.localeCompare(b.date);
    return recordScore(b) - recordScore(a);
  });

  els.recordCount.textContent = `${sorted.length} 条记录`;
  els.evidenceBody.innerHTML = "";
  els.evidenceCards.innerHTML = "";

  if (!sorted.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 9;
    cell.appendChild(makeEmpty("当前筛选下没有内容记录。"));
    row.appendChild(cell);
    els.evidenceBody.appendChild(row);
    els.evidenceCards.appendChild(makeEmpty("当前筛选下没有内容记录。"));
    return;
  }

  sorted.forEach((record) => {
    const row = document.createElement("tr");
    [
      formatDate(record.date),
      record.platform,
      record.agenda,
      record.topic,
      record.persona,
    ].forEach((value) => row.appendChild(makeTd(value)));

    const titleCell = makeTd(record.title || record.source || "未命名内容");
    titleCell.className = "title-cell";
    if (record.url) {
      const link = document.createElement("a");
      link.href = record.url;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = titleCell.textContent;
      titleCell.textContent = "";
      titleCell.appendChild(link);
    }
    row.appendChild(titleCell);
    row.appendChild(makeCaseCell(record));
    row.appendChild(makeTd(formatNumber(record.mentions), "number-cell"));
    row.appendChild(makeTd(formatOptionalNumber(record.engagement), "number-cell"));
    els.evidenceBody.appendChild(row);
    els.evidenceCards.appendChild(makeEvidenceCard(record));
  });
}

function makeEvidenceCard(record) {
  const card = document.createElement("article");
  card.className = "evidence-card";

  const meta = document.createElement("div");
  meta.className = "item-meta";
  meta.appendChild(makeChip(formatDate(record.date)));
  meta.appendChild(makeChip(record.platform));
  meta.appendChild(makeChip(record.topic, "alt"));

  const title = document.createElement("h3");
  if (record.url) {
    const link = document.createElement("a");
    link.href = record.url;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = record.title || record.source || "未命名内容";
    title.appendChild(link);
  } else {
    title.textContent = record.title || record.source || "未命名内容";
  }

  const metaLine = document.createElement("p");
  metaLine.className = "card-meta-line";
  metaLine.textContent = `${record.agenda} · ${record.persona} · ${record.source || "未知来源"}`;

  const metrics = document.createElement("dl");
  metrics.className = "card-metrics";
  metrics.appendChild(makeMetricPair("样本", formatNumber(record.mentions)));
  metrics.appendChild(makeMetricPair("互动", formatOptionalNumber(record.engagement)));

  const notes = document.createElement("p");
  notes.className = "card-notes";
  notes.textContent = record.notes || "暂无备注。";

  const actionRow = document.createElement("div");
  actionRow.className = "case-actions";
  actionRow.appendChild(makeCaseLink(record));

  card.appendChild(meta);
  card.appendChild(title);
  card.appendChild(metaLine);
  card.appendChild(metrics);
  card.appendChild(notes);
  card.appendChild(actionRow);
  return card;
}

function makeMetricPair(label, value) {
  const wrapper = document.createElement("div");
  const term = document.createElement("dt");
  const detail = document.createElement("dd");
  term.textContent = label;
  detail.textContent = value;
  wrapper.appendChild(term);
  wrapper.appendChild(detail);
  return wrapper;
}

function makeInsightCard(card) {
  const article = document.createElement("article");
  article.className = "insight-card";

  const label = document.createElement("span");
  label.className = "insight-label";
  label.textContent = card.label;

  const title = document.createElement("strong");
  title.textContent = card.title;

  const body = document.createElement("p");
  body.textContent = card.body;

  const meta = document.createElement("small");
  meta.textContent = card.meta;

  article.appendChild(label);
  article.appendChild(title);
  article.appendChild(body);
  article.appendChild(meta);
  return article;
}

function makeEvidenceItem(record) {
  const item = document.createElement("article");
  item.className = "evidence-item";

  const meta = document.createElement("div");
  meta.className = "item-meta";
  meta.appendChild(makeChip(record.platform));
  meta.appendChild(makeChip(record.topic, "alt"));
  meta.appendChild(makeChip(record.persona));

  const title = document.createElement("h3");
  if (record.url) {
    const link = document.createElement("a");
    link.href = record.url;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = record.title || record.source;
    title.appendChild(link);
  } else {
    title.textContent = record.title || record.source || "未命名内容";
  }

  const metrics = document.createElement("p");
  metrics.textContent = `${record.source || "未知来源"} · ${formatNumber(record.mentions)} 条公开样本 · ${formatOptionalNumber(record.engagement)} 互动 · 情绪 ${formatSentiment(record.sentiment)}`;

  const notes = document.createElement("p");
  notes.textContent = record.notes || "暂无备注。";

  const action = makeCaseLink(record);
  const actionRow = document.createElement("div");
  actionRow.className = "case-actions";
  actionRow.appendChild(action);

  item.appendChild(meta);
  item.appendChild(title);
  item.appendChild(metrics);
  item.appendChild(notes);
  item.appendChild(actionRow);
  return item;
}

function makeCaseCell(record) {
  const cell = document.createElement("td");
  cell.className = "case-cell";
  cell.appendChild(makeCaseLink(record));
  return cell;
}

function makeCaseLink(record) {
  const link = document.createElement("a");
  const hasExactUrl = Boolean(record.url);
  link.href = hasExactUrl ? record.url : buildSearchUrl(record);
  link.target = "_blank";
  link.rel = "noreferrer";
  link.className = hasExactUrl ? "case-link exact" : "case-link fallback";
  link.textContent = hasExactUrl ? "打开案例" : "搜索线索";
  link.title = hasExactUrl
    ? "打开这条内容的原始链接"
    : "当前记录没有原始链接，将按标题和平台搜索线索";
  return link;
}

function buildSearchUrl(record) {
  const query = [
    "BEYOND Expo 2026",
    record.title,
    record.source,
    record.agenda,
  ]
    .filter(Boolean)
    .join(" ");
  const encoded = encodeURIComponent(query);

  if (record.platform === "B站") return `https://search.bilibili.com/all?keyword=${encoded}`;
  if (record.platform === "微博") return `https://s.weibo.com/weibo?q=${encoded}`;
  if (record.platform === "小红书") return `https://www.xiaohongshu.com/search_result?keyword=${encoded}`;
  if (record.platform === "抖音") return `https://www.douyin.com/search/${encoded}`;
  if (record.platform === "TikTok") return `https://www.tiktok.com/search?q=${encoded}`;
  if (record.platform === "LinkedIn") return `https://www.linkedin.com/search/results/content/?keywords=${encoded}`;
  if (record.platform === "X") return `https://x.com/search?q=${encoded}&src=typed_query&f=live`;
  if (record.platform === "YouTube") return `https://www.youtube.com/results?search_query=${encoded}`;
  if (record.platform === "微信") return `https://weixin.sogou.com/weixin?type=2&query=${encoded}`;

  return `https://www.baidu.com/s?wd=${encoded}`;
}

function normalizeRecord(row) {
  const mentions = parseNumber(row.mentions);
  const engagement = parseNumber(row.engagement);
  const sentiment = parseNumber(row.sentiment);
  const record = {
    date: clean(row.date),
    platform: clean(row.platform),
    agenda: clean(row.agenda),
    topic: clean(row.topic),
    persona: clean(row.persona),
    mentions: mentions ?? 0,
    engagement,
    sentiment: sentiment === null ? null : clamp(sentiment, 0, 100),
    source: clean(row.source),
    title: clean(row.title),
    url: clean(row.url),
    notes: clean(row.notes),
  };

  if (!record.date || !record.platform || !record.agenda || !record.topic || !record.persona) {
    return null;
  }
  return record;
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let insideQuotes = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (char === '"' && insideQuotes && next === '"') {
      field += '"';
      index += 1;
    } else if (char === '"') {
      insideQuotes = !insideQuotes;
    } else if (char === "," && !insideQuotes) {
      row.push(field);
      field = "";
    } else if ((char === "\n" || char === "\r") && !insideQuotes) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(field);
      if (row.some((value) => value.trim() !== "")) rows.push(row);
      row = [];
      field = "";
    } else {
      field += char;
    }
  }

  row.push(field);
  if (row.some((value) => value.trim() !== "")) rows.push(row);
  if (!rows.length) return [];

  const headers = rows[0].map((header) => header.trim());
  return rows.slice(1).map((values) =>
    headers.reduce((acc, header, index) => {
      acc[header] = values[index] || "";
      return acc;
    }, {})
  );
}

function downloadCsv(data, filename) {
  const headers = ["date", "platform", "agenda", "topic", "persona", "mentions", "engagement", "sentiment", "source", "title", "url", "notes"];
  const lines = [headers.join(",")];
  data.forEach((record) => {
    lines.push(headers.map((header) => csvEscape(record[header])).join(","));
  });
  const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function setStatus(message, state) {
  els.dataStatus.querySelector("span:last-child").textContent = message;
  els.dataStatus.dataset.state = state;
}

function heatScore({ mentions, engagement, sentiment }) {
  if (!mentions && !engagement) return 0;
  const mentionScore = Math.min(42, Math.sqrt(mentions) * 4.2);
  const engagementScore = hasNumber(engagement) ? Math.min(48, Math.log10(engagement + 1) * 11.5) : 0;
  const sentimentScore = hasNumber(sentiment) ? Math.max(0, Math.min(10, sentiment / 10)) : 0;
  return Math.round(Math.min(100, mentionScore + engagementScore + sentimentScore));
}

function recordScore(record) {
  return heatScore(record);
}

function metricValue(cell, metric) {
  if (metric === "mentions") return cell.mentions;
  if (metric === "engagement") return cell.engagement;
  if (metric === "sentiment") return hasNumber(cell.sentiment) ? Math.round(cell.sentiment) : null;
  return cell.heat;
}

function metricNumber(cell, metric) {
  const value = metricValue(cell, metric);
  return hasNumber(value) ? Number(value) : 0;
}

function metricLabel(metric) {
  if (metric === "mentions") return "公开样本数";
  if (metric === "engagement") return "互动量";
  if (metric === "sentiment") return "情绪健康度";
  return "综合热度分";
}

function formatMetric(value, metric) {
  if (metric === "sentiment") return formatSentiment(value);
  if (metric === "engagement") return formatOptionalNumber(value);
  return formatNumber(value);
}

function heatColor(value) {
  const stops = [
    { at: 0, color: [238, 241, 245] },
    { at: 28, color: [139, 209, 199] },
    { at: 56, color: [242, 200, 107] },
    { at: 78, color: [229, 121, 82] },
    { at: 100, color: [200, 70, 70] },
  ];
  const clamped = clamp(value, 0, 100);
  let start = stops[0];
  let end = stops[stops.length - 1];

  for (let index = 0; index < stops.length - 1; index += 1) {
    if (clamped >= stops[index].at && clamped <= stops[index + 1].at) {
      start = stops[index];
      end = stops[index + 1];
      break;
    }
  }

  const span = end.at - start.at || 1;
  const ratio = (clamped - start.at) / span;
  const [r, g, b] = start.color.map((channel, index) =>
    Math.round(channel + (end.color[index] - channel) * ratio)
  );
  return `rgb(${r}, ${g}, ${b})`;
}

function formatDate(date) {
  const [, month, day] = date.split("-");
  return `${Number(month)}月${Number(day)}日`;
}

function formatDateRange() {
  return `${formatDate(DATE_RANGE[0])}至${formatDate(DATE_RANGE[DATE_RANGE.length - 1])}`;
}

function formatNumber(value) {
  const number = hasNumber(value) ? Number(value) : 0;
  if (number >= 10000) return `${(number / 10000).toFixed(number >= 100000 ? 0 : 1)}万`;
  return new Intl.NumberFormat("zh-CN").format(Math.round(number));
}

function formatOptionalNumber(value) {
  return hasNumber(value) ? formatNumber(value) : "未公开";
}

function formatSentiment(value) {
  return hasNumber(value) ? `${Math.round(value)}%` : "未判定";
}

function sortByOrder(values, order = []) {
  return [...values].sort((a, b) => {
    const ia = order.indexOf(a);
    const ib = order.indexOf(b);
    if (ia !== -1 || ib !== -1) {
      return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
    }
    return a.localeCompare(b, "zh-CN");
  });
}

function groupBy(items, field) {
  return items.reduce((acc, item) => {
    const key = item[field] || "未分类";
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});
}

function topEntry(grouped, scoreFn) {
  return Object.entries(grouped)
    .map(([key, items]) => ({ key, items, score: scoreFn(items) }))
    .sort((a, b) => b.score - a.score)[0];
}

function rankGroups(items, field) {
  const totalMentions = Math.max(1, sum(items, "mentions"));
  return Object.entries(groupBy(items, field))
    .map(([key, groupedItems]) => {
      const mentions = sum(groupedItems, "mentions");
      return {
        key,
        items: groupedItems,
        mentions,
        engagement: sum(groupedItems, "engagement"),
        share: mentions / totalMentions,
      };
    })
    .sort((a, b) => b.mentions - a.mentions || b.engagement - a.engagement || a.key.localeCompare(b.key, "zh-CN"));
}

function describeTrend(dateStats) {
  const activeStats = dateStats.filter((item) => item.mentions > 0);
  if (!activeStats.length) return { title: "暂无趋势判断" };

  const peakIndex = dateStats.findIndex((item) => item.date === [...dateStats].sort((a, b) => b.mentions - a.mentions)[0].date);
  const first = dateStats[0]?.mentions || 0;
  const last = dateStats[dateStats.length - 1]?.mentions || 0;
  const averageMentions = sum(dateStats, "mentions") / dateStats.length;

  if (peakIndex <= 1 && dateStats[peakIndex].mentions >= averageMentions * 1.2) {
    return { title: "前段集中释放" };
  }
  if (peakIndex === 2 && dateStats[peakIndex].mentions >= averageMentions * 1.2) {
    return { title: "中段形成峰值" };
  }
  if (peakIndex >= 3 && last >= first) {
    return { title: "后段继续扩散" };
  }
  if (last > 0 && last < first * 0.75) {
    return { title: "后段热度回落" };
  }
  return { title: "多日相对平稳" };
}

function concentrationTitle(value, label) {
  if (value >= 0.5) return `${label}高度集中`;
  if (value >= 0.35) return `${label}明显集中`;
  if (value >= 0.22) return `${label}有主导项`;
  return `${label}分布较分散`;
}

function topicConcentrationTitle(topShare, top3Share) {
  if (topShare >= 0.35) return "话题明显集中";
  if (top3Share >= 0.55) return "话题呈多主轴";
  if (topShare >= 0.22) return "话题有主导项";
  return "话题分布较分散";
}

function makeTopicBody(topicRanks, top3Share) {
  const topTopic = topicRanks[0];
  const tiedTopics = topicRanks.filter((item) => item.mentions === topTopic.mentions);
  if (tiedTopics.length > 1) {
    return `${tiedTopics.map((item) => item.key).join("、")}并列最高，均为 ${formatNumber(topTopic.mentions)} 条；前三话题合计 ${formatShare(top3Share)}。`;
  }
  return `${topTopic.key}为当前最高，记录 ${formatNumber(topTopic.mentions)} 条；前三话题合计 ${formatShare(top3Share)}。`;
}

function engagementJudgement(recordsWithEngagement, topShare) {
  if (!recordsWithEngagement.length) return "互动数据暂不可判";
  if (topShare >= 0.45) return "互动集中在头部内容";
  return "互动分布相对分散";
}

function makeJudgementBody({ filtered, agendaRanks, knownEngagementRecords, topEngagement, topEngagementShare, totalEngagement }) {
  const topAgenda = agendaRanks[0];
  if (!knownEngagementRecords.length) {
    return `${topAgenda.key}是当前样本最多的议程方向，记录 ${formatNumber(topAgenda.mentions)} 条；互动和情绪缺口较大，适合汇报传播结构，不适合下全网互动结论。`;
  }

  const topTitle = truncateText(topEngagement.title || topEngagement.source || "头部样本", 34);
  return `${topAgenda.key}是当前样本最多的议程方向；已知互动总计 ${formatNumber(totalEngagement)}，其中最高互动样本占 ${formatShare(topEngagementShare)}，来自${topEngagement.platform}/${topEngagement.topic}：“${topTitle}”。`;
}

function formatDateCounts(dateStats) {
  return dateStats.map((item) => `${formatDate(item.date)} ${formatNumber(item.mentions)}`).join(" / ");
}

function formatRankList(items) {
  return items.map((item) => `${item.key} ${formatNumber(item.mentions)}条`).join("；");
}

function formatShare(value) {
  return `${Math.round(clamp(value, 0, 1) * 100)}%`;
}

function share(value, total) {
  if (!total) return 0;
  return value / total;
}

function truncateText(text, maxLength) {
  const value = String(text || "");
  return value.length > maxLength ? `${value.slice(0, maxLength)}...` : value;
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function sum(items, field) {
  return items.reduce((total, item) => total + (hasNumber(item[field]) ? Number(item[field]) : 0), 0);
}

function average(values) {
  const valid = values.filter((value) => hasNumber(value));
  if (!valid.length) return null;
  return valid.reduce((total, value) => total + Number(value), 0) / valid.length;
}

function parseNumber(value) {
  const normalized = String(value ?? "").replace(/,/g, "").trim();
  if (!normalized || ["未公开", "未抓取", "unknown", "null", "-"].includes(normalized.toLowerCase())) return null;
  const number = Number(normalized);
  return Number.isFinite(number) ? number : null;
}

function clean(value) {
  return String(value || "").trim();
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, Number(value) || 0));
}

function hasNumber(value) {
  return value !== null && value !== "" && Number.isFinite(Number(value));
}

function cloneRecords(data) {
  return data.map((record) => ({ ...record }));
}

function makeDiv(className, text) {
  const div = document.createElement("div");
  div.className = className;
  div.textContent = text;
  return div;
}

function makeTd(text, className = "") {
  const td = document.createElement("td");
  td.textContent = text;
  if (className) td.className = className;
  return td;
}

function makeChip(text, className = "") {
  const chip = document.createElement("span");
  chip.className = `chip ${className}`.trim();
  chip.textContent = text;
  return chip;
}

function makeEmpty(text) {
  const empty = document.createElement("p");
  empty.className = "empty-state";
  empty.textContent = text;
  return empty;
}

function csvEscape(value) {
  const text = value === null || value === undefined ? "" : String(value);
  if (/[",\n\r]/.test(text)) return `"${text.replace(/"/g, '""')}"`;
  return text;
}
