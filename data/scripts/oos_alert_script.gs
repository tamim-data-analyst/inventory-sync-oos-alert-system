function sendOOSAlert() {

  var sheetName = "inventory_master";
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  var data = sheet.getDataRange().getValues();

  var oosItems = [];

  for (var i = 1; i < data.length; i++) {

    var sku = data[i][0];
    var product = data[i][1];
    var shc = data[i][2];
    var wmsA = data[i][3];
    var wmsB = data[i][4];

    if (shc < 50 && wmsA < 50 && wmsB < 50) {
      oosItems.push(sku + " - " + product);
    }
  }

  if (oosItems.length > 0) {

    var subject = "OOS Alert - Inventory Threshold Breached";

    var body = "The following SKUs are out of stock:\n\n" + oosItems.join("\n");

    MailApp.sendEmail({
      to: "team@company.com",
      subject: subject,
      body: body
    });
  }
}

