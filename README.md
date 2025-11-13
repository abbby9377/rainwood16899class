# 彩虹能量瘦身法 — 靜態頁（GitHub Pages）

這是一個從 Notion 頁面內容轉成的靜態範例，可直接部署到 GitHub Pages（或任何靜態主機）。

## 快速部署（命令列）
1. 在本機下載並解壓 `rainbow_site.zip`，進入資料夾：
   ```bash
   cd rainbow_site
   ```
2. 初始化 git 並推送到 GitHub：
   ```bash
   git init
   git add .
   git commit -m "Initial: Rainbow energy static site"
   # 在 GitHub 建立 repo，然後把遠端加入並推上
   git remote add origin https://github.com/<你的帳號>/<你的-repo>.git
   git branch -M main
   git push -u origin main
   ```
3. 到 GitHub Repo → Settings → Pages（或 Code and automation → Pages），選擇 Branch: `main`、Folder: `/ (root)` → Save，等待幾分鐘網站就會上線：`https://<你的帳號>.github.io/<你的-repo>/`

## 透過 GitHub 網頁上傳（不使用 git）
1. 在 GitHub 建立新的 repository（public）。
2. 進入 repo，點 `Add file` → `Upload files`，把整個資料夾內容上傳（index.html、styles.css、script.js、assets/）。
3. Commit changes。然後依照上方步驟設定 Pages。

## 修改建議
- 把 `assets/logo.png` 換成你的 logo。
- 若要加入更多圖片，把檔案放到 `assets/`，並在 `index.html` 中用 `<img src="assets/xxx.png">` 引用。
- 想要表單（諮詢 / 報名），可串接 Formspree、Netlify Forms 或 Google Form。

