function autoFillIntakeFromForm(e) {
  // these line up with the values in the results form
  // - when new fields are added to the form, they will have to be added here
  // - if the order is mixed up for some reason, these numbers may change a little bit
  // - the .join and then adding newlines is for readability where needed
  var timestamp = e.values[0];
  var typeOfMatter = e.values[1];
  var spanishSpeakers = e.values[2];
  var takingTitleAs = e.values[3];
  var matterName = e.values[4];
  var propertyAddress = e.values[5];
  var referralSource = e.values[6];
  var surveyor = e.values[7];
  var ourRealtor = e.values[8];
  var ourRealtorNew = e.values[9];
  var opposingAttorney = e.values[10];
  var opposingAttorneyNew = e.values[11];
  var otherRealtor = e.values[12];
  var lender = e.values[13];
  var closingDate = e.values[14];
  var outOfAR = e.values[15];
  var depositAmt = e.values[16];
  var depositHolder = e.values[17];
  var depositDueDate = e.values[18];
  var inspectionDueDate = e.values[19];
  var commitmentDueDate = e.values[20];
  var purchasePrice = e.values[21];
  var loanAmt = e.values[22];
  var typeOfLoan = e.values[23];
  var ourFee = e.values[24];
  var feeForPrior = e.values[25];
  var clientForwarding = e.values[26];
  var twoPercentHoldback = e.values[27];
  var clientEmails = e.values[28];
  var clientPhones = e.values[29];
  var clientSocials = e.values[30];
  var clientDobs = e.values[31];
  var realtyTransferTaxExemption = e.values[32];
  var maritalStatus = e.values[33];
  var dateOfMarriage = e.values[34];
  var maidenName = e.values[35];
  var dateOfDivorce = e.values[36];
  var stateOfDivorce = e.values[37];
  var dateOfDeath = e.values[38];
  var stateOfDeath = e.values[39];
  var sellerExistingMortgage = e.values[40];
  var propertyInfo = e.values[41].split(',').join('\n');
  var whichCondoAssoc = e.values[42];
  var assocFeeAmt = e.values[43];
  var multiFamAmt = e.values[44];
  var buyerQuestions = e.values[45].split(',').join('\n');
  var buyerWarnings = e.values[46].split(',').join('\n');
  var intraAR = e.values[47];
  var postAR = e.values[48];
  var titleCompany = e.values[49];
  var generalSellerQuestions = e.values[50].split(',').join('\n');
  var materialDefects = e.values[51];
  var otherRealtorNew = e.values[52];
  
  // Create a new folder in this folder every time a form is submitted because there are going 
  // to be several filled out forms per google form submission eventually and we want them to 
  // be organized
  var overallPopulatedFolder = DriveApp.getFolderById("1flKx8jJAz4CwG_nnP3W5hgMsuW1RyiUn");
  
  // in the overall populated folder we want to make a case folder
  var caseFolder = overallPopulatedFolder.createFolder(matterName + ", " + timestamp);
  
  // find the template file for the intake form that will be filled
  // this may have to change when this is ported over the work on different drive files
  var intakeTemplateFile = DriveApp.getFileById("1n4yOtjfEwDxmLkr22KXJOM60-XvATFbya77aR0tZGqk");
  
  // copy the template so we can modify that copy and put it in the case folder we just made
  var copyOfIntake = intakeTemplateFile.makeCopy("intake for: " + matterName, caseFolder);
  
  // open up the document so that we can edit it
  var docOfIntakeCopy = DocumentApp.openById(copyOfIntake.getId());
  var bodyOfIntake = docOfIntakeCopy.getBody();
  
  // fill in the variables with the form values of that name
  bodyOfIntake.replaceText("{{typeOfMatter}}", typeOfMatter);
  bodyOfIntake.replaceText("{{spanishSpeakers}}", spanishSpeakers);
  bodyOfIntake.replaceText("{{takingTitleAs}}", takingTitleAs);
  bodyOfIntake.replaceText("{{matterName}}", matterName);
  bodyOfIntake.replaceText("{{propertyAddress}}", propertyAddress);
  bodyOfIntake.replaceText("{{referralSource}}", referralSource);
  bodyOfIntake.replaceText("{{titleCompany}}", titleCompany);
  bodyOfIntake.replaceText("{{surveyor}}", surveyor);
  bodyOfIntake.replaceText("{{ourRealtor}}", ourRealtor);
  bodyOfIntake.replaceText("{{ourRealtorNew}}", ourRealtorNew);
  bodyOfIntake.replaceText("{{opposingAttorney}}", opposingAttorney);
  bodyOfIntake.replaceText("{{opposingAttorneyNew}}", opposingAttorneyNew);
  bodyOfIntake.replaceText("{{otherRealtor}}", otherRealtor);
  bodyOfIntake.replaceText("{{otherRealtorNew}}", otherRealtorNew);
  bodyOfIntake.replaceText("{{lender}}", lender);
  bodyOfIntake.replaceText("{{closingDate}}", closingDate);
  bodyOfIntake.replaceText("{{outOfAR}}", outOfAR);
  bodyOfIntake.replaceText("{{depositAmt}}", depositAmt);
  bodyOfIntake.replaceText("{{whoHoldsDeposit}}", depositHolder);
  bodyOfIntake.replaceText("{{depositDueDate}}", depositDueDate);
  bodyOfIntake.replaceText("{{inspectionDueDate}}", inspectionDueDate);
  bodyOfIntake.replaceText("{{commitmentDuedate}}", commitmentDueDate);
  bodyOfIntake.replaceText("{{purchasePrice}}", purchasePrice);
  bodyOfIntake.replaceText("{{loanAmt}}", loanAmt);
  bodyOfIntake.replaceText("{{typeOfLoan}}", typeOfLoan);
  bodyOfIntake.replaceText("{{ourFee}}", ourFee);
  bodyOfIntake.replaceText("{{feeForPrior}}", feeForPrior);
  bodyOfIntake.replaceText("{{intraAR}}", intraAR);
  bodyOfIntake.replaceText("{{postAR}}", postAR);
  bodyOfIntake.replaceText("{{clientForwardingAddress}}", clientForwarding);
  bodyOfIntake.replaceText("{{clientEmails}}", clientEmails);
  bodyOfIntake.replaceText("{{clientPhones}}", clientPhones);
  bodyOfIntake.replaceText("{{clientSocials}}", clientSocials);
  bodyOfIntake.replaceText("{{clientDobs}}", clientDobs);
  bodyOfIntake.replaceText("{{maritalStatus}}", maritalStatus);
  bodyOfIntake.replaceText("{{dateOfMarriage}}", dateOfMarriage);
  bodyOfIntake.replaceText("{{maidenName}}", maidenName);
  bodyOfIntake.replaceText("{{dateOfDivorce}}", dateOfDivorce);
  bodyOfIntake.replaceText("{{stateOfDivorce}}", stateOfDivorce);
  bodyOfIntake.replaceText("{{dateOfDeath}}", dateOfDeath);
  bodyOfIntake.replaceText("{{stateOfDeath}}", stateOfDeath);
  bodyOfIntake.replaceText("{{sellerExistingMortgageInfo}}", sellerExistingMortgage);
  bodyOfIntake.replaceText("{{buyerQuestions}}", buyerQuestions);
  bodyOfIntake.replaceText("{{propertyInfo}}", propertyInfo);
  bodyOfIntake.replaceText("{{sellerInfo}}", generalSellerQuestions);
  bodyOfIntake.replaceText("{{buyerWarnings}}", buyerWarnings);
  bodyOfIntake.replaceText("{{holdbackApplies}}", twoPercentHoldback);
  bodyOfIntake.replaceText("{{realtyTransferExemption}}", realtyTransferTaxExemption);
  //bodyOfIntake.replaceText("", );
  
  docOfIntakeCopy.saveAndClose();
  
  // now we can fill out the attorney review letter
  // first we have to break down the attorney's information because it is in one line
  // - currently in the format: "FirstName LastName, Phone, Email"
  
  // setting the default here to avoid blank replacement error
  // this works but it would be better to set a more general error for readability and maintainability
  // var buyerAttorneyInfo = "BLANK BLANK, BLANK, BLANK";
  
  // if this var is blank, that means we have a new attorney that we didn't select from the dropdown
  if (opposingAttorney == "") {
    buyerAttorneyInfo = opposingAttorneyNew;
  } 
  // if it's not, then we already have the info and there's no need to do new assigning
  else {
    var buyerAttorneyInfo = opposingAttorney;
  }
  
  // if we have some attorney information, we can move on with this section, otherwise it will error out
  if (buyerAttorneyInfo != "") {
    // take the string and put it into a list
    var infoInList = buyerAttorneyInfo.split(/[ ,]+/);
    var attorneyFirstName = infoInList[0];
    var attorneyLastName = infoInList[1];
    var attorneyPhone = infoInList[2];
    var attorneyEmail = infoInList[3];
    
    // get the attorney review letter template file
    var attorneyReviewTemplate = DriveApp.getFileById("1WRHeE6M-QXl-KFPiVMz03PFaldWxO7_BceYo2zjPBTs");
    
    // copy the template so it can be edited and put it in the same caseFolder as the intake form
    var copyOfAR = attorneyReviewTemplate.makeCopy("AR Letter for: " + matterName, caseFolder);
    
    // open up the document so that we can edit it
    var docOfARCopy = DocumentApp.openById(copyOfAR.getId());
    var bodyOfAR = docOfARCopy.getBody();
    
    bodyOfAR.replaceText("{{timestamp}}", timestamp);
    bodyOfAR.replaceText("{{otherAttorneyEmail}}", attorneyEmail);
    bodyOfAR.replaceText("{{otherAttorneyFirstName}}", attorneyFirstName);
    bodyOfAR.replaceText("{{otherAttorneyLastName}}", attorneyLastName);
    bodyOfAR.replaceText("{{matterName}}", matterName);
    
    docOfARCopy.saveAndClose();
  }
  
  
  // grab contact sheet and update it based on responses to the form
  // update it based on a response in the main form 
  // - if there's a response in the new attorney or new realtor section, add it in to the 
  //   corresponding column
  
  // get the contact sheet by id and open up the subsheet with the info
  var contactSpreadsheet = SpreadsheetApp.openById("16yuL-KxVspOFlOiNpB89r9-i-zRxjBVqHdCrN6nI42s");
  var contactSheet = contactSpreadsheet.getSheetByName("Sheet1");
  
  // first, we are going to get the realtor column and add to it if necessary
  if (otherRealtorNew != "") {
    // this refers to all of the rows in column A
    var realtorCol = contactSheet.getRange("A:A");
    var values = realtorCol.getValues();
    var ct = 0;
    while (values[ct] && values [ct][0] != "") {
      ct++;
    }
    // ct is the row and 1 corresponds to A
    var pastLast = contactSheet.getRange(ct + 1, 1);
    filledRealtorRange = contactSheet.getRange(ct, 1);
    pastLast.setValue(otherRealtorNew);
  }
  
  // now we are going to also fill if our realtor is new
  if (ourRealtorNew != "") {
    // this refers to all of the rows in column A
    var realtorCol = contactSheet.getRange("A:A");
    var values = realtorCol.getValues();
    var ct = 0;
    while (values[ct] && values [ct][0] != "") {
      ct++;
    }
    // ct is the row and 1 corresponds to A
    var pastLast = contactSheet.getRange(ct + 1, 1);
    pastLast.setValue(ourRealtorNew);
  }
  
  // now get the attorney column and add to it if necessary
  if (opposingAttorneyNew != "") {
    // this refers to all of the rows in column B
    var attorneyCol = contactSheet.getRange("B:B");
    var values = attorneyCol.getValues();
    var ct = 0;
    while (values[ct] && values [ct][0] != "") {
      ct++;
    }
    // ct is the row and 2 corresponds with B
    var pastLast = contactSheet.getRange(ct + 1, 2);
    filledAttorneyRange = contactSheet.getRange(ct, 2);
    pastLast.setValue(opposingAttorneyNew);
  }
  
  // set the choices for questions to be the contents of a column in a google sheet
  var targetForm = FormApp.openById("1VUpTDzz5GzA2QU2BHZvIobRIkF9b-UectS45-KpsY5s");
  // var targetForm = FormApp.getActiveForm();
  var questions = targetForm.getItems();
  for (var i=0; i<questions.length; i++) {
    
    // question regarding our realtor that is a drop-down not a fill-in
    if (questions[i].getId() == 1574698512) {
      var list = questions[i].asListItem();
      var realtorColData = contactSheet.getRange("A:A").getDataRegion(SpreadsheetApp.Dimension.ROWS).getValues();
      var choices = [];
      for (var j=1; j<realtorColData.length; j++) {
        if (realtorColData[j][0] != 0) {
          choices.push(list.createChoice(realtorColData[j][0]));
        }
      }
      list.setChoices(choices);
    }
    
    // question regarding opposing attorney that is a drop-down not a fill-in
    if (questions[i].getId() == 594381803) {
      var list = questions[i].asListItem();
      var attorneyColData = contactSheet.getRange("B:B").getDataRegion(SpreadsheetApp.Dimension.ROWS).getValues();
      Logger.log(attorneyColData);
      var choices = [];
      for (var j=1; j<attorneyColData.length; j++) {
        if (attorneyColData[j][0] != 0) {
          choices.push(list.createChoice(attorneyColData[j][0]));
        }
      }
      list.setChoices(choices);
    }
    
    // question regarding the other realtor that is a drop-down not a fill-in
    if (questions[i].getId() == 1455221894) {
      var list = questions[i].asListItem();
      var realtorColData = contactSheet.getRange("A:A").getDataRegion(SpreadsheetApp.Dimension.ROWS).getValues();
      var choices = [];
      for (var j=1; j<realtorColData.length; j++) {
        if (realtorColData[j][0] != 0) {
          choices.push(list.createChoice(realtorColData[j][0]));
        }
      }
      list.setChoices(choices);
    }
  }
}
