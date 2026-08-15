# 活動剪影照片（events.html）

把現場照放在此資料夾，檔名建議：

`YYYY-MM-<活動簡稱>-<序號>.webp`（同檔名 `.jpg` 當 fallback 可選）

例：`2026-03-dora-workshop-01.webp`

## 單張照片

更新 `events.html` 時，把 `.photo-slot` 換成：

```html
<img src="assets/img/events/2026-03-dora-workshop-01.webp"
     alt="簡述活動與場合"
     loading="lazy" decoding="async">
```

## 同一活動多張照片（輪播）

複製 `events.html` 第二格 `.photo-carousel` 區塊，替換 slide 的 `src` / `alt` 與 `<figcaption>`。

- 左右按鈕、圓點指示器、手機滑動切換已內建
- 每個 slide 的 `aria-label` 會由 JS 自動更新（如 `1 / 3`）

並改 `<figcaption>` 的活動名稱、日期、主辦單位。
