# BEYOND Expo 2026 社交媒体热度追踪原型

这是一个静态网页原型，直接打开 `index.html` 即可使用。当前数据是样例数据，时间范围固定为 `2026-05-27` 至 `2026-05-31`。

## CSV 字段

导入 CSV 时请保留这些表头：

```csv
date,platform,agenda,topic,persona,mentions,engagement,sentiment,source,title,url,notes
```

- `date`：日期，只会读取 `2026-05-27` 到 `2026-05-31`。
- `platform`：平台，如微信、视频号、微博、小红书、抖音、LinkedIn、X、YouTube、新闻/网站。
- `agenda`：议程或活动节点，如开幕式、BGlobal Summit、BGlobal新品发布、BEYOND Awards。
- `topic`：传播话题，如 AI、出海、智能硬件、低空经济、Web3。
- `persona`：传播主体，如官方/主办方、媒体、参展商、嘉宾、投资人、KOL/创作者、观众。
- `mentions`：提及量。
- `engagement`：互动量，可按平台口径折算为点赞、评论、转发、收藏、播放等。
- `sentiment`：情绪健康度，0 到 100。
- `source`：来源账号或来源类型。
- `title`：帖子、稿件或视频标题。
- `url`：可选链接。
- `notes`：备注，用于解释为什么这条内容重要。

## 第一版用途

- 看 5 月 27 日至 31 日期间各平台、议程、话题、人群的热度变化。
- 点击热力图色块，查看贡献内容和对应指标。
- 用 CSV 导入真实数据后，自动替换样例数据。
- 导出当前筛选后的数据，方便继续做复盘表或报告。
