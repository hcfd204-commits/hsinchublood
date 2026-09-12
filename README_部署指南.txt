新竹市消防局 - 創傷救護案件輸血分析與大數據篩選系統
===================================================

本資料夾包含分析完成之網頁系統與數據檔案：

【檔案說明】
1. index.html       : 主網頁系統 (包含分析圖表、熱力地圖、創傷/OHCA清單與分頁三輸血清冊)
2. data/dataset.js  : 37,128筆已分析前處理資料庫 (靜態即時載入檔)
3. data/*.json      : 分區 JSON 數據備份
4. gas_code.gs      : Google Apps Script 雲端同步後端程式碼 (方案A)
5. README_部署指南.txt : 本說明檔

【使用方法 (兩種皆可)】
方法 1. 直接雙擊開啟 index.html：
   直接用 Chrome, Edge 或任何瀏覽器雙擊 index.html 即可立刻使用！
   無需安裝任何伺服器或環境。

方法 2. 上傳至 GitHub Pages 發布公開網址：
   將本資料夾內的 index.html 與 data 資料夾上傳至您的 GitHub Repository，
   並在 Settings ➔ Pages 開啟 GitHub Pages 即可取得公開網址。

方法 3. 設定 Google Sheet 團隊雲端同步 (方案 A)：
   開啟 Google 試算表 ➔ 擴充功能 ➔ Apps Script ➔ 貼入 gas_code.gs 內容 ➔ 部署為 Web 應用程式。
   將產生的網址貼入網頁中「Google Sheet 雲端同步設定」即可實現團隊共用。
