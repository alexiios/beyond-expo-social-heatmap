const DATE_RANGE = ["2026-05-27", "2026-05-28", "2026-05-29", "2026-05-30", "2026-05-31"];

const FIELD_LABELS = {
  platform: "平台",
  agenda: "议程",
  topic: "话题",
  persona: "人群",
};

const MODE_COPY = {
  platform: {
    title: "平台 x 日期",
    subtitle: "看各平台在 5 月 27 日到 31 日的声量峰值和滞后发酵。",
  },
  agenda: {
    title: "议程 x 日期",
    subtitle: "看开幕式、峰会、发布、Awards 等活动节点的传播表现。",
  },
  topic: {
    title: "话题 x 日期",
    subtitle: "看 AI、出海、低空经济、创作者经济等主题在活动期间如何起落。",
  },
  persona: {
    title: "人群 x 日期",
    subtitle: "看媒体、嘉宾、参展商、KOL、观众等传播主体的贡献。",
  },
};

const ORDER = {
  platform: ["微信", "视频号", "微博", "小红书", "抖音", "B站", "LinkedIn", "X", "YouTube", "新闻/网站"],
  agenda: [
    "开幕式",
    "展区开放",
    "BGlobal Summit",
    "BGlobal新品发布",
    "Creator Summit",
    "Fund At First Pitch",
    "BEYOND Hack Day",
    "BEYOND Awards",
    "国际科技论坛",
    "会后社交",
  ],
  topic: ["AI", "出海", "智能硬件", "低空经济", "Web3", "医疗健康", "创作者经济", "投资路演", "国际合作", "展商故事"],
  persona: ["官方/主办方", "媒体", "参展商", "嘉宾", "投资人", "KOL/创作者", "观众"],
};

const sampleRecords = [
  {
    date: "2026-05-27",
    platform: "微信",
    agenda: "开幕式",
    topic: "AI",
    persona: "官方/主办方",
    mentions: 72,
    engagement: 6200,
    sentiment: 88,
    source: "官方公众号",
    title: "BEYOND Expo 2026 开幕，大会主题聚焦 AI 与数实共生",
    url: "",
    notes: "样例数据：用于演示开幕日官方内容的集中传播。",
  },
  {
    date: "2026-05-27",
    platform: "视频号",
    agenda: "开幕式",
    topic: "AI",
    persona: "媒体",
    mentions: 64,
    engagement: 15400,
    sentiment: 84,
    source: "视频号直播",
    title: "开幕式直播片段带动大会主题讨论",
    url: "",
    notes: "样例数据：直播型内容互动权重较高。",
  },
  {
    date: "2026-05-27",
    platform: "LinkedIn",
    agenda: "开幕式",
    topic: "国际合作",
    persona: "嘉宾",
    mentions: 23,
    engagement: 1800,
    sentiment: 86,
    source: "嘉宾动态",
    title: "International guests share BEYOND Expo opening day",
    url: "",
    notes: "样例数据：国际嘉宾扩散。",
  },
  {
    date: "2026-05-27",
    platform: "新闻/网站",
    agenda: "开幕式",
    topic: "国际合作",
    persona: "媒体",
    mentions: 31,
    engagement: 2400,
    sentiment: 82,
    source: "行业媒体",
    title: "澳门科技展会开幕，吸引多国企业与投资机构",
    url: "",
    notes: "样例数据：媒体稿件的基础覆盖。",
  },
  {
    date: "2026-05-28",
    platform: "微信",
    agenda: "BGlobal Summit",
    topic: "出海",
    persona: "媒体",
    mentions: 108,
    engagement: 9700,
    sentiment: 87,
    source: "产业媒体",
    title: "BGlobal Summit 聚焦企业出海、本地化与国际增长",
    url: "",
    notes: "样例数据：出海议题在中文平台更集中。",
  },
  {
    date: "2026-05-28",
    platform: "微博",
    agenda: "展区开放",
    topic: "展商故事",
    persona: "观众",
    mentions: 126,
    engagement: 18200,
    sentiment: 81,
    source: "观众帖子",
    title: "展区首个完整开放日，机器人和智能硬件内容被集中转发",
    url: "",
    notes: "样例数据：现场观众内容容易形成即时声量。",
  },
  {
    date: "2026-05-28",
    platform: "小红书",
    agenda: "展区开放",
    topic: "智能硬件",
    persona: "KOL/创作者",
    mentions: 94,
    engagement: 22600,
    sentiment: 89,
    source: "探展笔记",
    title: "BEYOND Expo 探展：AI 眼镜、机器人、生活方式科技",
    url: "",
    notes: "样例数据：探展型内容适合图片和短视频平台。",
  },
  {
    date: "2026-05-28",
    platform: "抖音",
    agenda: "BGlobal新品发布",
    topic: "智能硬件",
    persona: "参展商",
    mentions: 91,
    engagement: 38400,
    sentiment: 86,
    source: "参展商短视频",
    title: "新品发布现场剪辑带动智能硬件关注",
    url: "",
    notes: "样例数据：短视频互动量高，需单独看播放和转评赞。",
  },
  {
    date: "2026-05-28",
    platform: "视频号",
    agenda: "BGlobal新品发布",
    topic: "低空经济",
    persona: "参展商",
    mentions: 58,
    engagement: 17600,
    sentiment: 84,
    source: "企业视频号",
    title: "eVTOL 与低空出行产品在新品发布环节亮相",
    url: "",
    notes: "样例数据：低空经济内容有明确产品记忆点。",
  },
  {
    date: "2026-05-28",
    platform: "LinkedIn",
    agenda: "国际科技论坛",
    topic: "国际合作",
    persona: "嘉宾",
    mentions: 49,
    engagement: 4200,
    sentiment: 90,
    source: "论坛嘉宾",
    title: "Asia-Europe tech collaboration discussed at BEYOND Expo",
    url: "",
    notes: "样例数据：国际论坛在 LinkedIn 更容易沉淀专业关系。",
  },
  {
    date: "2026-05-28",
    platform: "X",
    agenda: "国际科技论坛",
    topic: "Web3",
    persona: "KOL/创作者",
    mentions: 42,
    engagement: 5100,
    sentiment: 76,
    source: "Web3 社群账号",
    title: "Web2+3 Commerce Forum highlights stablecoin and cross-border payments",
    url: "",
    notes: "样例数据：Web3 内容容易出现讨论分化，需关注情绪。",
  },
  {
    date: "2026-05-28",
    platform: "YouTube",
    agenda: "BGlobal新品发布",
    topic: "智能硬件",
    persona: "官方/主办方",
    mentions: 28,
    engagement: 6900,
    sentiment: 85,
    source: "官方直播回放",
    title: "BGlobal Product Launch replay",
    url: "",
    notes: "样例数据：长视频适合做会后沉淀。",
  },
  {
    date: "2026-05-28",
    platform: "微信",
    agenda: "Creator Summit",
    topic: "创作者经济",
    persona: "KOL/创作者",
    mentions: 61,
    engagement: 8300,
    sentiment: 83,
    source: "创作者公众号",
    title: "Creator Summit 讨论内容生产与商业化路径",
    url: "",
    notes: "样例数据：创作者议题适合拉 KOL 二次传播。",
  },
  {
    date: "2026-05-28",
    platform: "新闻/网站",
    agenda: "Fund At First Pitch",
    topic: "投资路演",
    persona: "投资人",
    mentions: 37,
    engagement: 2800,
    sentiment: 79,
    source: "创投媒体",
    title: "60 至 180 秒快速路演让项目直接面对投资人",
    url: "",
    notes: "样例数据：创投内容声量不一定最大，但后续价值高。",
  },
  {
    date: "2026-05-29",
    platform: "微信",
    agenda: "BEYOND Hack Day",
    topic: "AI",
    persona: "参展商",
    mentions: 76,
    engagement: 7800,
    sentiment: 88,
    source: "开发者社群",
    title: "Hack Day 项目路演与 AI 创新硬件赛道持续发酵",
    url: "",
    notes: "样例数据：开发者和创业团队内容偏长尾。",
  },
  {
    date: "2026-05-29",
    platform: "B站",
    agenda: "展区开放",
    topic: "智能硬件",
    persona: "KOL/创作者",
    mentions: 38,
    engagement: 14800,
    sentiment: 87,
    source: "科技 UP 主",
    title: "探展 Vlog：AI 硬件与机器人展台合集",
    url: "",
    notes: "样例数据：视频内容有更长生命周期。",
  },
  {
    date: "2026-05-29",
    platform: "小红书",
    agenda: "会后社交",
    topic: "展商故事",
    persona: "观众",
    mentions: 57,
    engagement: 13200,
    sentiment: 80,
    source: "现场体验笔记",
    title: "从展会到晚间活动，BEYOND Expo 社交体验记录",
    url: "",
    notes: "样例数据：生活方式平台关注现场体验。",
  },
  {
    date: "2026-05-29",
    platform: "LinkedIn",
    agenda: "Fund At First Pitch",
    topic: "投资路演",
    persona: "投资人",
    mentions: 44,
    engagement: 3900,
    sentiment: 85,
    source: "投资机构动态",
    title: "Investors share notes from Fund At First Pitch",
    url: "",
    notes: "样例数据：投资人动态适合形成明年邀约名单。",
  },
  {
    date: "2026-05-29",
    platform: "新闻/网站",
    agenda: "国际科技论坛",
    topic: "医疗健康",
    persona: "媒体",
    mentions: 34,
    engagement: 2600,
    sentiment: 81,
    source: "医疗科技媒体",
    title: "未来医疗与功能营养议题在论坛中展开",
    url: "",
    notes: "样例数据：垂直媒体对细分议题更有价值。",
  },
  {
    date: "2026-05-29",
    platform: "X",
    agenda: "BEYOND Hack Day",
    topic: "AI",
    persona: "KOL/创作者",
    mentions: 29,
    engagement: 3300,
    sentiment: 82,
    source: "开发者账号",
    title: "Hack Day projects around embodied AI and hardware",
    url: "",
    notes: "样例数据：英语技术圈扩散。",
  },
  {
    date: "2026-05-30",
    platform: "微信",
    agenda: "BEYOND Awards",
    topic: "展商故事",
    persona: "官方/主办方",
    mentions: 84,
    engagement: 10400,
    sentiment: 91,
    source: "官方公众号",
    title: "BEYOND Awards 获奖项目与企业回顾",
    url: "",
    notes: "样例数据：Awards 是会后内容资产。",
  },
  {
    date: "2026-05-30",
    platform: "视频号",
    agenda: "BEYOND Awards",
    topic: "展商故事",
    persona: "参展商",
    mentions: 69,
    engagement: 21400,
    sentiment: 90,
    source: "企业视频号",
    title: "获奖企业发布现场视频与感谢内容",
    url: "",
    notes: "样例数据：参展商自传播可放大官方节点。",
  },
  {
    date: "2026-05-30",
    platform: "微博",
    agenda: "会后社交",
    topic: "创作者经济",
    persona: "观众",
    mentions: 48,
    engagement: 7600,
    sentiment: 78,
    source: "观众帖子",
    title: "活动收官日现场照片与观众反馈",
    url: "",
    notes: "样例数据：收官日可监测满意度和问题反馈。",
  },
  {
    date: "2026-05-30",
    platform: "LinkedIn",
    agenda: "BEYOND Awards",
    topic: "国际合作",
    persona: "嘉宾",
    mentions: 53,
    engagement: 5600,
    sentiment: 92,
    source: "获奖企业与嘉宾",
    title: "Award winners and partners post event wrap-up notes",
    url: "",
    notes: "样例数据：适合沉淀国际合作证据。",
  },
  {
    date: "2026-05-30",
    platform: "YouTube",
    agenda: "BEYOND Awards",
    topic: "AI",
    persona: "官方/主办方",
    mentions: 21,
    engagement: 5200,
    sentiment: 86,
    source: "官方视频",
    title: "BEYOND Awards highlight reel",
    url: "",
    notes: "样例数据：会后视频回顾。",
  },
  {
    date: "2026-05-31",
    platform: "微信",
    agenda: "展区开放",
    topic: "展商故事",
    persona: "媒体",
    mentions: 66,
    engagement: 6200,
    sentiment: 84,
    source: "媒体复盘",
    title: "BEYOND Expo 2026 展区与重点项目复盘",
    url: "",
    notes: "样例数据：展会结束后的媒体复盘。",
  },
  {
    date: "2026-05-31",
    platform: "小红书",
    agenda: "展区开放",
    topic: "智能硬件",
    persona: "观众",
    mentions: 39,
    engagement: 8800,
    sentiment: 83,
    source: "观众笔记",
    title: "周末整理：最值得记住的 BEYOND Expo 产品",
    url: "",
    notes: "样例数据：用户体验内容的长尾。",
  },
  {
    date: "2026-05-31",
    platform: "LinkedIn",
    agenda: "BGlobal Summit",
    topic: "出海",
    persona: "参展商",
    mentions: 45,
    engagement: 4300,
    sentiment: 87,
    source: "参展企业动态",
    title: "Exhibitors summarize global market meetings after BEYOND Expo",
    url: "",
    notes: "样例数据：B2B 线索在会后继续出现。",
  },
  {
    date: "2026-05-31",
    platform: "新闻/网站",
    agenda: "BEYOND Awards",
    topic: "国际合作",
    persona: "媒体",
    mentions: 29,
    engagement: 2200,
    sentiment: 82,
    source: "综合新闻",
    title: "BEYOND Expo 收官，多项科技创新成果获得关注",
    url: "",
    notes: "样例数据：新闻端收束报道。",
  },
];

let records = cloneRecords(sampleRecords);
let selectedCell = null;

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
  heatmapTitle: document.getElementById("heatmapTitle"),
  heatmapSubtitle: document.getElementById("heatmapSubtitle"),
  heatmap: document.getElementById("heatmap"),
  kpiMentions: document.getElementById("kpiMentions"),
  kpiEngagement: document.getElementById("kpiEngagement"),
  kpiPeakDate: document.getElementById("kpiPeakDate"),
  kpiPeakDateMeta: document.getElementById("kpiPeakDateMeta"),
  kpiTopPlatform: document.getElementById("kpiTopPlatform"),
  kpiTopPlatformMeta: document.getElementById("kpiTopPlatformMeta"),
  detailTitle: document.getElementById("detailTitle"),
  detailSubtitle: document.getElementById("detailSubtitle"),
  detailScore: document.getElementById("detailScore"),
  detailMentions: document.getElementById("detailMentions"),
  detailEngagement: document.getElementById("detailEngagement"),
  detailSentiment: document.getElementById("detailSentiment"),
  detailList: document.getElementById("detailList"),
  recordCount: document.getElementById("recordCount"),
  evidenceBody: document.getElementById("evidenceBody"),
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
    selectedCell = null;
    populateFilters();
    setStatus("当前为样例数据，可导入 CSV 替换", "sample");
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
      setStatus("CSV 未找到 2026-05-27 至 2026-05-31 范围内的数据", "error");
      event.target.value = "";
      return;
    }

    records = inRange;
    selectedCell = null;
    populateFilters();
    setStatus(`已导入 ${inRange.length} 条 CSV 记录`, "live");
    render();
    event.target.value = "";
  });
}

function render() {
  const filtered = getFilteredRecords();
  renderKpis(filtered);
  renderHeatmap(filtered);
  renderDetail(filtered);
  renderEvidence(filtered);
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
  const byDate = groupBy(filtered, "date");
  const byPlatform = groupBy(filtered, "platform");
  const peakDate = topEntry(byDate, (items) => sum(items, "mentions") + sum(items, "engagement") / 120);
  const topPlatform = topEntry(byPlatform, (items) => sum(items, "mentions") + sum(items, "engagement") / 120);

  els.kpiMentions.textContent = formatNumber(totalMentions);
  els.kpiEngagement.textContent = formatNumber(totalEngagement);
  els.kpiPeakDate.textContent = peakDate ? formatDate(peakDate.key) : "-";
  els.kpiPeakDateMeta.textContent = peakDate ? `${formatNumber(sum(peakDate.items, "mentions"))} 次提及` : "暂无数据";
  els.kpiTopPlatform.textContent = topPlatform ? topPlatform.key : "-";
  els.kpiTopPlatformMeta.textContent = topPlatform ? `${formatNumber(sum(topPlatform.items, "engagement"))} 次互动` : "暂无数据";
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
  const maxMetric = Math.max(1, ...matrix.map((cell) => metricValue(cell, metric)));

  els.heatmapTitle.textContent = MODE_COPY[mode].title;
  els.heatmapSubtitle.textContent = MODE_COPY[mode].subtitle;
  els.heatmap.innerHTML = "";

  const grid = document.createElement("div");
  grid.className = "heatmap-grid";
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
      const intensity = metric === "heat" ? cell.heat : Math.round((rawValue / maxMetric) * 100);
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
        <span>${cell.items.length ? `${cell.items.length} 条记录` : "暂无记录"}</span>
        <small>${formatNumber(cell.engagement)} 互动</small>
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
  const engagement = sum(items, "engagement");
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
  els.detailMentions.textContent = formatNumber(cell.mentions);
  els.detailEngagement.textContent = formatNumber(cell.engagement);
  els.detailSentiment.textContent = cell.items.length ? `${Math.round(cell.sentiment)}%` : "-";
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

  if (!sorted.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 8;
    cell.appendChild(makeEmpty("当前筛选下没有内容记录。"));
    row.appendChild(cell);
    els.evidenceBody.appendChild(row);
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
    row.appendChild(makeTd(formatNumber(record.mentions), "number-cell"));
    row.appendChild(makeTd(formatNumber(record.engagement), "number-cell"));
    els.evidenceBody.appendChild(row);
  });
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
  metrics.textContent = `${record.source || "未知来源"} · ${formatNumber(record.mentions)} 次提及 · ${formatNumber(record.engagement)} 次互动 · 情绪 ${record.sentiment}%`;

  const notes = document.createElement("p");
  notes.textContent = record.notes || "暂无备注。";

  item.appendChild(meta);
  item.appendChild(title);
  item.appendChild(metrics);
  item.appendChild(notes);
  return item;
}

function normalizeRecord(row) {
  const record = {
    date: clean(row.date),
    platform: clean(row.platform),
    agenda: clean(row.agenda),
    topic: clean(row.topic),
    persona: clean(row.persona),
    mentions: parseNumber(row.mentions),
    engagement: parseNumber(row.engagement),
    sentiment: clamp(parseNumber(row.sentiment || 80), 0, 100),
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
  const engagementScore = Math.min(48, Math.log10(engagement + 1) * 11.5);
  const sentimentScore = Math.max(0, Math.min(10, sentiment / 10));
  return Math.round(Math.min(100, mentionScore + engagementScore + sentimentScore));
}

function recordScore(record) {
  return heatScore(record);
}

function metricValue(cell, metric) {
  if (metric === "mentions") return cell.mentions;
  if (metric === "engagement") return cell.engagement;
  if (metric === "sentiment") return Math.round(cell.sentiment || 0);
  return cell.heat;
}

function metricLabel(metric) {
  if (metric === "mentions") return "提及量";
  if (metric === "engagement") return "互动量";
  if (metric === "sentiment") return "情绪健康度";
  return "综合热度分";
}

function formatMetric(value, metric) {
  if (metric === "sentiment") return value ? `${value}%` : "0%";
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

function formatNumber(value) {
  const number = Number(value) || 0;
  if (number >= 10000) return `${(number / 10000).toFixed(number >= 100000 ? 0 : 1)}万`;
  return new Intl.NumberFormat("zh-CN").format(Math.round(number));
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

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function sum(items, field) {
  return items.reduce((total, item) => total + (Number(item[field]) || 0), 0);
}

function average(values) {
  const valid = values.filter((value) => Number.isFinite(Number(value)));
  if (!valid.length) return 0;
  return valid.reduce((total, value) => total + Number(value), 0) / valid.length;
}

function parseNumber(value) {
  const normalized = String(value || "").replace(/,/g, "").trim();
  const number = Number(normalized);
  return Number.isFinite(number) ? number : 0;
}

function clean(value) {
  return String(value || "").trim();
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, Number(value) || 0));
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
  const text = String(value || "");
  if (/[",\n\r]/.test(text)) return `"${text.replace(/"/g, '""')}"`;
  return text;
}
