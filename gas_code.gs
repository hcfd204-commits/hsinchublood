// Google Apps Script Backend Code for Transfusion Screening System (Option A)
// 說明: 請建立一個 Google 試算表 ➔ 擴充功能 ➔ Apps Script ➔ 貼入此代碼 ➔ 部署為 Web 應用程式 (存取權設為: 任何人)

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    if (data.action === 'sync') {
      sheet.clearContents();
      
      // 表頭
      sheet.appendRow(["救護紀錄表號", "案件類別", "案發日期", "出勤單位", "送往醫院", "年齡", "性別", "符合條件指標", "最後更新時間"]);
      
      var list = data.approvedList || [];
      var nowStr = Utilities.formatDate(new Date(), "GMT+8", "yyyy/MM/dd HH:mm:ss");
      
      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        sheet.appendRow([
          "'" + item.id,
          item.type,
          item.date,
          item.unit,
          item.hospital,
          item.age || '',
          item.gender || '',
          (item.tags || []).join('; '),
          nowStr
        ]);
      }
      return ContentService.createTextOutput(JSON.stringify({status: "success", count: list.length})).setMimeType(ContentService.MimeType.JSON);
    }
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({status: "error", message: err.toString()})).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("Transfusion Screening System API is active!");
}
