function doGet(req) { 
    // Get the active Google Sheets document 
    var doc = SpreadsheetApp.getActiveSpreadsheet(); 
     
    // Extract the 'taluk' query parameter from the request 
    var taluk = req.parameter.taluk; 
   
    // Get the sheet with the name 'District_Wise_Private_Hospitals_in_Karnataka' 
    var sheet = doc.getSheetByName('datafile'); 
     
    // Get all values from the sheet 
    var values = sheet.getDataRange().getValues(); 
     
    var output = []; 
    for (var i = 0; i < values.length; i++) { 
      var row = {}; 
      // Assign specific columns to JSON properties 
      row['State'] = values[i][1];  
      row['City'] = values[i][2]; 
      row['District'] = values[i][3]; 
      row['h_name'] = values[i][4];     
      row['Address'] = values[i][5];      
      row['Contact'] = values[i][7];      
      output.push(row); 
    } 
   
    // If the 'taluk' parameter is provided, filter the output based on it 
    if (taluk != null) { 
      var outputToReturn = output.filter(obj => obj.Taluk.toLowerCase().includes(taluk.toLowerCase())); 
      return ContentService.createTextOutput(JSON.stringify({ data: outputToReturn })).setMimeType(ContentService.MimeType.JSON); 
    } 
   
    // If no 'taluk' parameter provided, return the complete data 
    return ContentService.createTextOutput(JSON.stringify({ data: output })).setMimeType(ContentService.MimeType.JSON); 
  }
  