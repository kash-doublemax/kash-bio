# 開發工作紀錄 Worklog

## 2026-07-11

本次工作聚焦於「把待補版位換成正式內容」與「導入外部服務」，並補齊響應式與效能細節。

### 形象照與圖片
- 首頁 Hero：placeholder 換成 `<picture>` 響應式形象照
  - 桌機 4:5 正面半身（`hero-kash-desktop`）、手機 1:1 近景（`hero-kash-mobile`）
  - WebP 優先 + PNG fallback，`<head>` 加響應式 `preload`（LCP 最佳化）
  - 修正 CSS selector bug（`.photo-ph > img` → 後代選擇器），解決手機只顯示額頭的裁切問題
- 關於頁 Hero：改用側身照（`hero-kash-alt`），手機端專屬 `object-position` 微調避免臉部被切
- WebP 壓縮成效：桌機 PNG 1760KB → WebP 37KB、手機 1950KB → 53KB（約 97% 縮減）

### 客戶 logo 牆
- 首頁 §5 與實績頁 §2：文字佔位換成 8 個實體 logo（裕隆、南山、Chubb、匯豐、中信兄弟、Lenovo、Philips、天貓）
- `.logo-cell` 改白底 + `object-fit: contain` + hover 微互動；中文檔名複製為英文避免 URL 編碼問題

### 媒體報導（關於頁 §6）
- 新增 3 張「圖／文／連結」媒體卡片（vocus 專訪、動腦 Brain、YouTube 得獎影片）
- 縮圖下載至本地 `assets/img/media/` 確保穩定載入；YouTube 卡片加播放鍵疊層

### 客戶見證（實績頁 §4）
- 依社群見證整理 5 則 quote 卡片（王莉茵、Yu Amily、Jasmine、楊仁章、蔡宗穎）
- 新增 `.quote-card` 樣式，語意化 `<figure>/<blockquote>/<figcaption>`

### 電子報（Substack）
- 首頁 §7、聯絡頁 §4 嵌入 Substack embed（`imkash.substack.com`）
- 手機端高度調整為 550px + `scrolling="auto"` 避免內容被裁切
- 全站導覽列新增「電子報」連結，直接導向 Substack

### Newsletter 彈跳視窗
- `main.js` 動態注入 modal，全站生效
- 觸發：到站 15 秒 或 桌機離站意圖；7 天內不重複（localStorage）
- 含 Substack embed + CTA 按鈕；支援 Esc／背景／關閉鈕關閉、body 鎖捲動、無障礙屬性

### 邀約表單（Google 表單）
- 提供 Apps Script 自動產生表單；聯絡頁 §2 換成正式 CTA + 「填寫前準備」欄位清單
- 接上正式表單連結 `forms.gle/65aRUUzzwtYhKmQa6`

### 聯絡資訊與文案
- 全站 footer／聯絡頁 Email 佔位換成 `kash.doublemax@gmail.com`（mailto）
- 全站 footer 品牌標語「楷學堂 KASH Academy」統一改為「會算命的數據顧問」

### 開發工具
- 新增 `serve.py`：本地 dev server，補上 `.webp` MIME type 與 no-cache header
