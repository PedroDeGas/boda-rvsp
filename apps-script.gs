// Google Apps Script — RSVP Boda Camila & Pedro
// Desplegá esto como Web App: Ejecutar como "Yo" · Acceso "Cualquier persona"

var SHEET_NAME = 'Confirmaciones';

function doGet(e) {
  return ContentService.createTextOutput('OK — RSVP Web App activa');
}

function doPost(e) {
  try {
    var sheet = getOrCreateSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),
      data.nombre   || '',
      data.apellido || '',
      data.asistencia || '',
      data.menu     || '',
      data.nota     || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getOrCreateSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['Timestamp', 'Nombre', 'Apellido', 'Asistencia', 'Menú', 'Nota']);

    // Dar formato al header
    var header = sheet.getRange(1, 1, 1, 6);
    header.setFontWeight('bold');
    header.setBackground('#7a4219');
    header.setFontColor('#ffffff');
    sheet.setFrozenRows(1);
    sheet.setColumnWidths(1, 6, 160);
  }

  return sheet;
}
