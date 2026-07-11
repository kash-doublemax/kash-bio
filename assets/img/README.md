# 圖片資產資料夾

這裡放網站用的圖片素材，命名規則採 kebab-case + 用途前綴，避免中文與空白：

## Hero 形象照（首頁右欄 surface-card 版位）
建議提供兩種尺寸，讓網頁依螢幕大小自動載入對應版本：
- `hero-kash-desktop.jpg`（或 `.webp`）：桌機用，建議 **1200 × 1500 px**（4:5 直式）
- `hero-kash-mobile.jpg`（或 `.webp`）：手機用，建議 **800 × 1000 px**（4:5 直式，同構圖，較小檔）

若你目前只有兩張候選（不同構圖 / 不同風格），先都放進來，命名如：
- `hero-kash-v1.jpg`
- `hero-kash-v2.jpg`

然後把檔名告訴我，我幫你挑一張後：
1. 產出 `hero-kash-desktop.webp` + `hero-kash-mobile.webp`（若已提供高解析度原檔）
2. 更新 `index.html` 的 `.photo-ph` 版位，用 `<picture>` + `srcset` 做 responsive 載入
3. 在 CSS 補上 `object-fit: cover` 與 `object-position` 微調

## 其他建議資料夾（後續擴充）
- `assets/img/clients/` — 客戶 logo（logo 授權確認後放）
- `assets/img/proof/` — 服務實績截圖
- `assets/img/og/` — Open Graph 分享圖
