var token = "TOKEN TELEGRAM";
//var ssId = "TOKEN GOOGLE SPREADSHEET";
//var expenseSheet =  SpreadsheetApp.openById(ssId).getSheetByName("Sheet1");
//  var dApp = DriveApp;
//  var folderIter = dApp.getFoldersByName("Test");
//  var folder = folderIter.next();
//  var filesIster = folder.getFiles();

function getMe() {
  var url = telegramUrl + "/getMe";
  var response = UrlFetchApp.fetch(url);
  Logger.log(response.getContentText());
}

function setWebhook() {
  var url = telegramUrl + "/setWebhook?url=" + webAppUrl;
  var response = UrlFetchApp.fetch(url);
  Logger.log(response.getContentText());
}

function doPost(e){
  var contents = JSON.parse(e.postData.contents);
  var payload = identificar(contents);
  var data = {
    "method": "post",
    "payload": payload
  }
  UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/', data);
  
}

//function getTheFiles(){
//  
//  
//  while(filesIster.hasNext()){
//    var file = filesIster.next();
//    var filename = file.getName();
//  }
//}

function identificar(e){
  if (e.message.photo){
    var array = e.message.photo;
    var text = array[1];
//    var id = e.message.chat.id;
//    var firstName = e.message.chat.first_name;
//    var file = text.file_unique_id;
//    var foto = "https://drive.google.com/open?id=" + file;
    var pesan = {
      "method": "sendPhoto",
      "chat_id": e.message.chat.id,
      "photo": text.file_id,
    }
//    expenseSheet.appendRow([new Date(),id,firstName,foto]);
//      filesIster.next()
//    folder.addFile(text);
    }
    else {
    var pesan = {
      "method": "sendMessage",
      "chat_id": e.message.chat.id,
      "text": "Harus Berupa Foto"
    }
   }
  return pesan
}

//function upload(e) { 
//    
//  try {
//    
//     // Folder ID of destination folder
//     var destination_id = '1Gl4O8J8J8v2DrG34J3anSz_6_sADs6Dm';
//    // Converting files to image/jpeg.
//    // You can use 'application/pdf', 'image/bmp', 'image/gif', 'image/jpeg' and 'image/png'.   
//    var contentType = 'image/jpeg'; 
//    
//    var img = e.imageFile;
//
//    var destination = DriveApp.getFolderById(destination_id);
//    // var img = img.getAs(contentType); // for: CommConverting files and save as image/jpeg.
//    destination.createFile(img);
//    
//    return "File Uploaded Successfully!";
//    
//  } catch (m) {
//    return m.toString();
//  }
//  
//}
