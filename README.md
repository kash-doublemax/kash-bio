# 陳誼峰 Kash 講師個人網站

會算命的數據顧問 — Kash Chen 的個人品牌網站。介紹演講與課程、活動剪影、實績與見證、關於講師，並提供邀約與電子報訂閱入口。

> 基於數據，做有效益的決策。AI 是工具，數位轉型是手段。

## 技術架構

- **純靜態網站**：HTML + CSS + 原生 JavaScript，無框架、無 build step
- 可直接部署於 GitHub Pages 或任何靜態主機
- 響應式設計（斷點：≤767 手機、768–1024 平板、≥1025 桌機）
- 圖片採 WebP 優先 + PNG/JPG fallback，透過 `<picture>` 依裝置載入

## 頁面結構

| 檔案 | 說明 |
|---|---|
| `index.html` | 首頁：Hero 形象照、三支柱、代表講題、客戶 logo 牆、電子報 |
| `about.html` | 關於講師：形象照、簡介、資歷認證、著作、媒體報導 |
| `speaking.html` | 演講與課程 |
| `events.html` | 活動剪影：現場照片、線上影片 |
| `proof.html` | 實績與見證：客戶 logo 牆、量化實績、客戶見證 |
| `contact.html` | 聯絡邀課：Google 表單、Email、電子報訂閱 |
| `one-day-workshop.html` | 「先別出方案」一日工作坊招生頁（樣式自含；講師照 `assets/img/kash-instructor-portrait.png`；報名走 Google 表單） |

## 目錄

```
kash-bio/
├── index.html / about.html / speaking.html / events.html / proof.html / contact.html
├── assets/
│   ├── style.css          # 全站共用樣式（暖米白編輯風）
│   ├── main.js            # 導覽列互動 + Newsletter 彈跳視窗
│   └── img/
│       ├── hero-kash-*.{webp,png}   # 首頁／關於頁形象照
│       ├── client-logo/             # 客戶 logo
│       ├── media/                   # 媒體報導縮圖
│       └── events/                  # 活動剪影現場照
├── serve.py               # 本地開發 server（含 WebP MIME 修正）
├── WORKLOG.md             # 開發工作紀錄
└── README.md
```

## 維護入口

預設從 [`../Kash_Coding_OS/`](../Kash_Coding_OS/) 開 session 改本站（見 `AGENTS.md`）。本 repo 只放產品檔；方法與 AAR 在 Coding OS case `kash-instructor-site-2026-07`。

## 本地預覽

Python 內建 `http.server` 不會將 `.webp` 標記為正確的 MIME type，請改用專案內的 `serve.py`：

```bash
python serve.py            # 預設 http://127.0.0.1:8000
python serve.py 8080       # 指定其他埠
```

從其他目錄啟動也可以（`serve.py` 固定服務自己所在資料夾）。

## 外部整合

- **電子報**：Substack（`imkash.substack.com`）— 首頁／聯絡頁嵌入表單，導覽列與頁末皆有入口
- **邀約表單**：Google 表單（`forms.gle/65aRUUzzwtYhKmQa6`）
- **聯絡 Email**：kash.doublemax@gmail.com

## 設計系統

- 色彩：暖米白畫布（`#faf9f5`）、珊瑚強調色（`#cc785c`）、深炭文字
- 字體：Noto Serif TC（標題）、Noto Sans TC（內文）、Cormorant Garamond（英文襯線）
- 圓角、間距、色彩皆以 CSS 變數集中管理（見 `assets/style.css` 頂部 `:root`）
