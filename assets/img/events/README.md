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

複製 `events.html` 任一格 `.photo-carousel` 區塊（例如第一格），替換 slide 的 `src` / `alt` 與 `<figcaption>`。

- 左右按鈕、圓點指示器、手機滑動切換已內建
- 每個 slide 的 `aria-label` 會由 JS 自動更新（如 `1 / 3`）

並改 `<figcaption>` 的活動名稱、日期、主辦單位。

## 直式照片

輪播與單張都固定 4:3 並用 `object-fit: cover`，直式照片會被上下裁切。在該張 `<img>` 加 `style="object-position: center 35%;"` 之類的設定，把裁切往上移，保住人物頭部。

## 原始檔

收到的原始照片（含中文資料夾）改名複製到本資料夾後，原始資料夾不進版控。

## 目前上架的照片

依 `events.html` 由上到下：

| 活動 | 檔案 | 說明文字 |
|------|------|----------|
| 顧問式銷售一日工作坊 | `2026-10-consultative-sales-oneday-public-01.jpg`、`-02.jpg`（02 為直式） | 對外公開班 · 2026/10/17 |
| FineBI X 台灣數據力大賞 | `2026-fanruan-insight-challenge-01.png`（`photo-item--contain`） | 線上實戰課 · 帆軟 DORA x KASH |
| 顧問式銷售工作坊 | `2026-consultative-sales-workshop-01`～`03.jpg` | 企業內訓 · 數據顧問公司 |
| 主管共識營 | `2026-leadership-consensus-camp-01`～`02.jpg` | 年度主管共識營 · 媒體代理商公司 |
