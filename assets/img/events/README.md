# 活動剪影照片（events.html）

把現場照放在此資料夾，檔名建議：

`YYYY-MM-<活動簡稱>-<序號>.webp`（同檔名 `.jpg` 當 fallback 可選）

例：`2026-03-dora-workshop-01.webp`

更新 `events.html` 時，把 `.photo-slot` 換成：

```html
<img src="assets/img/events/2026-03-dora-workshop-01.webp"
     alt="簡述活動與場合"
     loading="lazy" decoding="async">
```

並改 `<figcaption>` 的活動名稱、日期、主辦單位。
