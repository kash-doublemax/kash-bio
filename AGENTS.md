# AGENTS.md — kash-bio（imkash.cc）

這是**產品 repo**，不是 Skill OS。治理與方法論在 Kash Coding OS。

## 改站規則

1. **預設**：從 `../Kash_Coding_OS/` 開 session，套 coding-adapter，再改本目錄。
2. **純修碼日**（確定不產生新方法）：可直接在本 repo 開視窗。
3. **不要**把本站複製進 Coding OS `cases/` 當工作樹。那邊的 `final-site/` 是唯讀快照。

## 收工回流

階段完成後，到 Coding OS case 寫 light AAR：

`../Kash_Coding_OS/cases/kash-instructor-site-2026-07/`

建站方法論（定位、文案、轉換）若有新洞見，回流 Consulting OS 的 `kash-instructor-site-builder`，不要寫進本 repo。

連續兩次改站沒有回流 → 下一輪只開 Coding OS session。

## 預覽與部署

- 本地：`python serve.py`（WebP MIME；勿用內建 `http.server`）
- 上線：push `main` → GitHub Pages → https://imkash.cc
