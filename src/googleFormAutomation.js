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
  var prefixOpposingAttorney = e.values[53];
  var clientOneName = e.values[54];
  var clientTwoName = e.values[55];
  var additionalClientNames = e.values[56];
  var isReferralOurRealtor = e.values[57];
  var whoIsReferralIfNot = e.values[58];
  var lenderIfKnown = e.values[59];
  var lenderIfNew = e.values[60];
  var secondDepositDueDate = e.values[61];
  var secondDepositAmt = e.values[62];
  var reasonForPriorWorkFee = e.values[63];
  var maritalStatusClientTwo = e.values[64];
  var maritalStatusAllOther = e.values[65];
  var PIsingleFamily = e.values[66];
  var PIsingleFamilyNotes = e.values[67];
  var PIgas = e.values[68];
  var PIgasNotes = e.values[69];
  var PIpubWater = e.values[70];
  var PIpubWaterNotes = e.values[71];
  var PIpubSewer = e.values[72];
  var PIpubSewerNotes = e.values[73];
  var PIcondo = e.values[74];
  var PIcondoNotes = e.values[75];
  var PItownhouse = e.values[76];
  var PItownhouseNotes = e.values[77];
  var PIvacant = e.values[78];
  var PIvacantNotes = e.values[79];
  var PItenanted = e.values[80];
  var PItenantedNotes = e.values[81];
  var PIoilHeat = e.values[82];
  var PIoilHeatNotes = e.values[83];
  var PIelectricalHeat = e.values[84];
  var PIelectricalHeatNotes = e.values[85];
  var PIwell = e.values[86];
  var PIwellNotes = e.values[87];
  var PIseptic = e.values[88];
  var PIsepticNotes = e.values[89];
  var PIfloodZone = e.values[90];
  var PIfloodZoneNotes = e.values[91];
  var PIbulkSale = e.values[92];
  var PIbulkSaleNotes = e.values[93];
  var PIpool = e.values[94];
  var PIpoolNotes = e.values[95];
  var PIrestrictedDeed = e.values[96];
  var PIrestrictedDeedNotes = e.values[97];
  var PIprevDeadDeal = e.values[98];
  var PIprevDeadDealNotes = e.values[99];
  var PIeifs = e.values[100];
  var PIeifsNotes = e.values[101];
  var PIgreeenCard = e.values[102];
  var PIgreenCardNotes = e.values[103];
  var PIsolar = e.values[104];
  var PIsolarNotes = e.values[105];
  var PIrehabbed = e.values[106];
  var PIrehabbedNotes = e.values[107];
  var PIsharedDriveway = e.values[108];
  var PIsharedDrivewayNotes = e.values[109];
  var PIcondoAssociation = e.values[110];
  var PIcondoAssociationNotes = e.values[111];
  var PImultiFamily = e.values[112];
  var PImultiFamilyNotes = e.values[113];
  var PImiscNotes = e.values[114];
  var BQsellBeforeBuy = e.values[115];
  var BQsellBeforeBuyNotes = e.values[116];
  var BQgift = e.values[117];
  var BQgiftNotes = e.values[118];
  var BQliensApply = e.values[119];
  var BQliensApplyNotes = e.values[120];
  var BQjudgmentsApply = e.values[121];
  var BQjudgmentsApplyNotes = e.values[122];
  var BQbankruptcyApplies = e.values[123];
  var BQbankruptcyAppliesNotes = e.values[124];
  var BQclientIsRealtor = e.values[125];
  var BQclientIsRealtorNotes = e.values[126];
  // intentionally skipped 127 due to blank in response sheet
  var BQoutstandingChildSupport = e.values[128];
  var BQoutstandingChildSupportNotes = e.values[129];
  var BQoutstandingTickets = e.values[130];
  var BQoutstandingTicketsNotes = e.values[131];
  // intentionally skipped 132 due to blank in response sheet
  var BQowesBackTaxes = e.values[133];
  var BQowesBackTaxesNotes = e.values[134];
  var SInotPrimary = e.values[135];
  var SInotPrimaryNotes = e.values[136];
  var SIliensApply = e.values[137];
  var SIliensApplyNotes = e.values[138];
  var SIjudgmentsApply = e.values[139];
  var SIjudgmentsApplyNotes = e.values[140];
  var SIbankruptciesApply = e.values[141];
  var SIbankruptciesApplyNotes = e.values[142];
  var SIclientIsRealtor = e.values[143];
  var SIclientIsRealtorNotes = e.values[144];
  var SIoutstandingCS = e.values[145];
  var SIoutstandingCSNotes = e.values[146];
  var SIoutstandingBackTax = e.values[147];
  var SIoutstandingBackTaxNotes = e.values[148];
  var SIoutstandingTickets = e.values[149];
  var SIoutstandingTicketsNotes = e.values[150];
  var SIhomesteadRebate = e.values[151];
  var SIhomesteadRebateNotes = e.values[152];
  var SImansionTax = e.values[153];
  var SImansionTaxNotes = e.values[154];
  var SIrecentlyRehabbed = e.values[155];
  var SIrecentlyRehabbedNotes = e.values[156];
  var SIbulkSale = e.values[157];
  var SIbulkSaleNotes = e.values[158];
  var SIboughtInForeclosure = e.values[159];
  var SIboughtInForeclosureNotes = e.values[160];
  var SIsellerTwoYears = e.values[161];
  var SIsellerTwoYearsNotes = e.values[162];
  var SIsellerOwnsAdjoining = e.values[163];
  var SIpreviouslySubdivided = e.values[164];
  var SIpreviouslySubdividedNotes = e.values[165];
  var SIeasement = e.values[166];
  var SIeasementNotes = e.values[167];
  var SIassessment = e.values[168];
  var SIassessmentNotes = e.values[169];
  var SIpriorTreatment = e.values[170];
  var SIpriorTreatmentNotes = e.values[171];
  var SIsellerHasSurvey = e.values[172];
  var SIsellerHasSurveyNotes = e.values[173];
  var SIsurveyChanged = e.values[174];
  var SIsurveyChangedNotes = e.values[175];
  var SIsellerNoPermit = e.values[176];
  var SIsellerNoPermitNotes = e.values[177];
  var SIsharedDriveway = e.values[178];
  var SIsharedDrivewayNotes = e.values[179];
  var SIrentersLiveThere = e.values[180];
  var SIrentersLiveThereNotes = e.values[181];
  var SIdeedRestricted = e.values[182];
  var SIdeedRestrictedNotes = e.values[183];
  var SIguarOrWar = e.values[184];
  var SIguarOrWarNotes = e.values[185];
  var SIpriorRadonHigh = e.values[186];
  var SIpriorRadonHighNotes = e.values[187];
  var SIsellerNoDisclosure = e.values[188];
  var SIsellerNoDisclosureNotes = e.values[189];
  var SIsweepShowedUST = e.values[190];
  var SIsweepSHowedUSTNotes = e.values[191];
  var SIpriorContamination = e.values[192];
  var SIpriorContaminationNotes = e.values[193];
  var SInewHomeWar = e.values[194];
  var SInewHomeWarNotes = e.values[195];
  var SImaterialDefects = e.values[196];
  var SImaterialDefectsNotes = e.values[197];
  var SImiscNotes = e.values[198];
  var SIsellerOwnsAdjoiningNotes = e.values[199];

  // setting the referral as either values 57 or values 58
  if (isReferralOurRealtor == "Yes") {
    // case where referral is our realtor and we know the realtor
    if (ourRealtor != "") {
      var temp = ourRealtor.split(/[ ,]+/);
      referralSource = temp[0].concat(" ", temp[1]);
    }
    // case where referral is our realtor and they are a new realtor to us
    else
      var temp = ourRealtorNew.split(/[ ,]+/);
      referralSource = temp[0].concat(" ", temp[1]);
  }
  // case where the referral is not our realtor
  else {
    referralSource = whoIsReferralIfNot;
  }

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

  // creating newMatterName from data we already have so we don't have to do it every time
  // Formula: Last of c1, First of c1 & First of c2, Last of c2; property address;
  //          referral source; title company (if purchase); contract closing date
  var clientOneNameSplitUp = clientOneName.split(/[ ,]+/);
  var clientTwoNameSplitUp = clientTwoName.split(/[ ,]+/);
  var clientOneFirst = clientOneNameSplitUp[0];
  var clientOneLast = clientOneNameSplitUp[1];
  var clientTwoFirst = clientTwoNameSplitUp[0];
  var clientTwoLast = clientTwoNameSplitUp[1];
  // console.log(clientOneFirst, clientOneLast, clientTwoFirst, clientTwoLast);
  // putting together the matter name now based on the formula

  // if there are no clients (for some odd reason)
  if (clientOneFirst == "" && clientTwoFirst == "") {
   // if it's a purchase
    if (typeOfMatter == "Purchase") {
      var newMatterName = propertyAddress.concat("; ", referralSource, "; ", titleCompany, "; ", closingDate);
    }
    // if it's not a purchase
    else {
      var newMatterName = propertyAddress.concat("; ", referralSource, "; ", closingDate);
    }
  }

  // if there's only one client
  if (clientOneFirst != "" && clientTwoFirst == "") {
    // if it's a purchase
    if (typeOfMatter == "Purchase") {
      var newMatterName = clientOneLast.concat(" ", clientOneFirst, "; ", propertyAddress, "; ", referralSource, "; ", titleCompany, "; ", closingDate);
    }
    // if it's not a purchase
    else {
      var newMatterName =  clientOneLast.concat(" ", clientOneFirst, "; ", propertyAddress, "; ", referralSource, "; ", closingDate);
    }
  }

  // if there's two or more clients
  if (clientOneFirst != "" && clientTwoFirst != "") {
    // if it's a purchase
    if (typeOfMatter == "Purchase") {
      var newMatterName = clientOneLast.concat(" ", clientOneFirst, " & ", clientTwoFirst, " ", clientTwoLast, "; ", propertyAddress, "; ", referralSource, "; ", titleCompany, "; ", closingDate);
    }
    // if it's not a purchase
    else {
      var newMatterName = clientOneLast.concat(" ", clientOneFirst, " & ", clientTwoFirst, " ", clientTwoLast, "; ", propertyAddress, "; ", referralSource, "; ", closingDate);
    }
  }


  // fill in the variables with the form values of that name
  bodyOfIntake.replaceText("{{typeOfMatter}}", typeOfMatter);
  bodyOfIntake.replaceText("{{spanishSpeakers}}", spanishSpeakers);
  bodyOfIntake.replaceText("{{takingTitleAs}}", takingTitleAs);
  bodyOfIntake.replaceText("{{matterName}}", newMatterName);
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
  bodyOfIntake.replaceText("{{lenderIfKnown}}", lenderIfKnown);
  bodyOfIntake.replaceText("{{lenderIfNew}}", lenderIfNew);
  bodyOfIntake.replaceText("{{secondDepositAmt}}", secondDepositAmt);
  bodyOfIntake.replaceText("{{secondDepositDueDate}}", secondDepositDueDate);
  bodyOfIntake.replaceText("{{reasonForPriorWorkFee}}", reasonForPriorWorkFee);
  bodyOfIntake.replaceText("{{maritalStatusClientTwo}}", maritalStatusClientTwo);
  bodyOfIntake.replaceText("{{maritalStatusAllOther}}", maritalStatusAllOther);
  bodyOfIntake.replaceText("{{PIsingleFamily}}", PIsingleFamily);
  bodyOfIntake.replaceText("{{PIsingleFamilyNotes}}", PIsingleFamilyNotes);
  bodyOfIntake.replaceText("{{PIgas}}", PIgas);
  bodyOfIntake.replaceText("{{PIgasNotes}}", PIgasNotes);
  bodyOfIntake.replaceText("{{PIpubWater}}", PIpubWater);
  bodyOfIntake.replaceText("{{PIpubWaterNotes}}", PIpubWaterNotes);
  bodyOfIntake.replaceText("{{PIpubSewer}}", PIpubSewer);
  bodyOfIntake.replaceText("{{PIpubSewerNotes}}", PIpubSewerNotes);
  bodyOfIntake.replaceText("{{PIcondo}}", PIcondo);
  bodyOfIntake.replaceText("{{PIcondoNotes}}", PIcondoNotes);
  bodyOfIntake.replaceText("{{PItownhouse}}", PItownhouse);
  bodyOfIntake.replaceText("{{PItownhouseNotes}}", PItownhouseNotes);
  bodyOfIntake.replaceText("{{PIvacant}}", PIvacant);
  bodyOfIntake.replaceText("{{PIvacantNotes}}", PIvacantNotes);
  bodyOfIntake.replaceText("{{PItenanted}}", PItenanted);
  bodyOfIntake.replaceText("{{PItenantedNotes}}", PItenantedNotes);
  bodyOfIntake.replaceText("{{PIoilHeat}}", PIoilHeat);
  bodyOfIntake.replaceText("{{PIoilHeatNotes}}", PIoilHeatNotes);
  bodyOfIntake.replaceText("{{PIelectricalHeat}}", PIelectricalHeat);
  bodyOfIntake.replaceText("{{PIelectricalHeatNotes}}", PIelectricalHeatNotes);
  bodyOfIntake.replaceText("{{PIwell}}", PIwell);
  bodyOfIntake.replaceText("{{PIwellNotes}}", PIwellNotes);
  bodyOfIntake.replaceText("{{PIseptic}}", PIseptic);
  bodyOfIntake.replaceText("{{PIsepticNotes}}", PIsepticNotes);
  bodyOfIntake.replaceText("{{PIfloodZone}}", PIfloodZone);
  bodyOfIntake.replaceText("{{PIfloodZoneNotes}}", PIfloodZoneNotes);
  bodyOfIntake.replaceText("{{PIbulkSale}}", PIbulkSale);
  bodyOfIntake.replaceText("{{PIbulkSaleNotes}}", PIbulkSaleNotes);
  bodyOfIntake.replaceText("{{PIpool}}", PIpool);
  bodyOfIntake.replaceText("{{PIpoolNotes}}", PIpoolNotes);
  bodyOfIntake.replaceText("{{PIrestrictedDeed}}", PIrestrictedDeed);
  bodyOfIntake.replaceText("{{PIrestrictedDeedNotes}}", PIrestrictedDeedNotes);
  bodyOfIntake.replaceText("{{PIprevDeadDeal}}", PIprevDeadDeal);
  bodyOfIntake.replaceText("{{PIprevDeadDealNotes}}", PIprevDeadDealNotes);
  bodyOfIntake.replaceText("{{PIeifs}}", PIeifs);
  bodyOfIntake.replaceText("{{PIeifsNotes}}", PIeifsNotes);
  bodyOfIntake.replaceText("{{PIgreeenCard}}", PIgreeenCard);
  bodyOfIntake.replaceText("{{PIgreenCardNotes}}", PIgreenCardNotes);
  bodyOfIntake.replaceText("{{PIsolar}}", PIsolar);
  bodyOfIntake.replaceText("{{PIsolarNotes}}", PIsolarNotes);
  bodyOfIntake.replaceText("{{PIrehabbed}}", PIrehabbed);
  bodyOfIntake.replaceText("{{PIrehabbedNotes}}", PIrehabbedNotes);
  bodyOfIntake.replaceText("{{PIsharedDriveway}}", PIsharedDriveway);
  bodyOfIntake.replaceText("{{PIsharedDrivewayNotes}}", PIsharedDrivewayNotes);
  bodyOfIntake.replaceText("{{PIcondoAssociation}}", PIcondoAssociation);
  bodyOfIntake.replaceText("{{PIcondoAssociationNotes}}", PIcondoAssociationNotes);
  bodyOfIntake.replaceText("{{PImultiFamily}}", PImultiFamily);
  bodyOfIntake.replaceText("{{PImultiFamilyNotes}}", PImultiFamilyNotes);
  bodyOfIntake.replaceText("{{PImiscNotes}}", PImiscNotes);
  bodyOfIntake.replaceText("{{BQsellBeforeBuy}}", BQsellBeforeBuy);
  bodyOfIntake.replaceText("{{BQsellBeforeBuyNotes}}", BQsellBeforeBuyNotes);
  bodyOfIntake.replaceText("{{BQgift}}", BQgift);
  bodyOfIntake.replaceText("{{BQgiftNotes}}", BQgiftNotes);
  bodyOfIntake.replaceText("{{BQliensApply}}", BQliensApply);
  bodyOfIntake.replaceText("{{BQliensApplyNotes}}", BQliensApplyNotes);
  bodyOfIntake.replaceText("{{BQjudgmentsApply}}", BQjudgmentsApply);
  bodyOfIntake.replaceText("{{BQjudgmentsApplyNotes}}", BQjudgmentsApplyNotes);
  bodyOfIntake.replaceText("{{BQbankruptcyApplies}}", BQbankruptcyApplies);
  bodyOfIntake.replaceText("{{BQbankruptcyAppliesNotes}}", BQbankruptcyAppliesNotes);
  bodyOfIntake.replaceText("{{BQclientIsRealtor}}", BQclientIsRealtor);
  bodyOfIntake.replaceText("{{BQclientIsRealtorNotes}}", BQclientIsRealtorNotes);
  bodyOfIntake.replaceText("{{BQoutstandingChildSupport}}", BQoutstandingChildSupport);
  bodyOfIntake.replaceText("{{BQoutstandingChildSupportNotes}}", BQoutstandingChildSupportNotes);
  bodyOfIntake.replaceText("{{BQoutstandingTickets}}", BQoutstandingTickets);
  bodyOfIntake.replaceText("{{BQoutstandingTicketsNotes}}", BQoutstandingTicketsNotes);
  bodyOfIntake.replaceText("{{BQowesBackTaxes}}", BQowesBackTaxes);
  bodyOfIntake.replaceText("{{BQowesBackTaxesNotes}}", BQowesBackTaxesNotes);
  bodyOfIntake.replaceText("{{SInotPrimary}}", SInotPrimary);
  bodyOfIntake.replaceText("{{SInotPrimaryNotes}}", SInotPrimaryNotes);
  bodyOfIntake.replaceText("{{SIliensApply}}", SIliensApply);
  bodyOfIntake.replaceText("{{SIliensApplyNotes}}", SIliensApplyNotes);
  bodyOfIntake.replaceText("{{SIjudgmentsApply}}", SIjudgmentsApply);
  bodyOfIntake.replaceText("{{SIjudgmentsApplyNotes}}", SIjudgmentsApplyNotes);
  bodyOfIntake.replaceText("{{SIbankruptciesApply}}", SIbankruptciesApply);
  bodyOfIntake.replaceText("{{SIbankruptciesApplyNotes}}", SIbankruptciesApplyNotes);
  bodyOfIntake.replaceText("{{SIclientIsRealtor}}", SIclientIsRealtor);
  bodyOfIntake.replaceText("{{SIclientIsRealtorNotes}}", SIclientIsRealtorNotes);
  bodyOfIntake.replaceText("{{SIoutstandingCS}}", SIoutstandingCS);
  bodyOfIntake.replaceText("{{SIoutstandingCSNotes}}", SIoutstandingCSNotes);
  bodyOfIntake.replaceText("{{SIoutstandingBackTax}}", SIoutstandingBackTax);
  bodyOfIntake.replaceText("{{SIoutstandingBackTaxNotes}}", SIoutstandingBackTaxNotes);
  bodyOfIntake.replaceText("{{SIoutstandingTickets}}", SIoutstandingTickets);
  bodyOfIntake.replaceText("{{SIoutstandingTicketsNotes}}", SIoutstandingTicketsNotes);
  bodyOfIntake.replaceText("{{SIhomesteadRebate}}", SIhomesteadRebate);
  bodyOfIntake.replaceText("{{SIhomesteadRebateNotes}}", SIhomesteadRebateNotes);
  bodyOfIntake.replaceText("{{SImansionTax}}", SImansionTax);
  bodyOfIntake.replaceText("{{SImansionTaxNotes}}", SImansionTaxNotes);
  bodyOfIntake.replaceText("{{SIrecentlyRehabbed}}", SIrecentlyRehabbed);
  bodyOfIntake.replaceText("{{SIrecentlyRehabbedNotes}}", SIrecentlyRehabbedNotes);
  bodyOfIntake.replaceText("{{SIbulkSale}}", SIbulkSale);
  bodyOfIntake.replaceText("{{SIbulkSaleNotes}}", SIbulkSaleNotes);
  bodyOfIntake.replaceText("{{SIboughtInForeclosure}}", SIboughtInForeclosure);
  bodyOfIntake.replaceText("{{SIboughtInForeclosureNotes}}", SIboughtInForeclosureNotes);
  bodyOfIntake.replaceText("{{SIsellerTwoYears}}", SIsellerTwoYears);
  bodyOfIntake.replaceText("{{SIsellerTwoYearsNotes}}", SIsellerTwoYearsNotes);
  bodyOfIntake.replaceText("{{SIsellerOwnsAdjoining}}", SIsellerOwnsAdjoining);
  bodyOfIntake.replaceText("{{SIsellerOwnsAdjoiningNotes}}", SIsellerOwnsAdjoiningNotes);
  bodyOfIntake.replaceText("{{SIpreviouslySubdivided}}", SIpreviouslySubdivided);
  bodyOfIntake.replaceText("{{SIpreviouslySubdividedNotes}}", SIpreviouslySubdividedNotes);
  bodyOfIntake.replaceText("{{SIeasement}}", SIeasement);
  bodyOfIntake.replaceText("{{SIeasementNotes}}", SIeasementNotes);
  bodyOfIntake.replaceText("{{SIassessment}}", SIassessment);
  bodyOfIntake.replaceText("{{SIassessmentNotes}}", SIassessmentNotes);
  bodyOfIntake.replaceText("{{SIpriorTreatment}}", SIpriorTreatment);
  bodyOfIntake.replaceText("{{SIpriorTreatmentNotes}}", SIpriorTreatmentNotes);
  bodyOfIntake.replaceText("{{SIsellerHasSurvey}}", SIsellerHasSurvey);
  bodyOfIntake.replaceText("{{SIsellerHasSurveyNotes}}", SIsellerHasSurveyNotes);
  bodyOfIntake.replaceText("{{SIsurveyChanged}}", SIsurveyChanged);
  bodyOfIntake.replaceText("{{SIsurveyChangedNotes}}", SIsurveyChangedNotes);
  bodyOfIntake.replaceText("{{SIsellerNoPermit}}", SIsellerNoPermit);
  bodyOfIntake.replaceText("{{SIsellerNoPermitNotes}}", SIsellerNoPermitNotes);
  bodyOfIntake.replaceText("{{SIsharedDriveway}}", SIsharedDriveway);
  bodyOfIntake.replaceText("{{SIsharedDrivewayNotes}}", SIsharedDrivewayNotes);
  bodyOfIntake.replaceText("{{SIrentersLiveThere}}", SIrentersLiveThere);
  bodyOfIntake.replaceText("{{SIrentersLiveThereNotes}}", SIrentersLiveThereNotes);
  bodyOfIntake.replaceText("{{SIdeedRestricted}}", SIdeedRestricted);
  bodyOfIntake.replaceText("{{SIdeedRestrictedNotes}}", SIdeedRestrictedNotes);
  bodyOfIntake.replaceText("{{SIguarOrWar}}", SIguarOrWar);
  bodyOfIntake.replaceText("{{SIguarOrWarNotes}}", SIguarOrWarNotes);
  bodyOfIntake.replaceText("{{SIpriorRadonHigh}}", SIpriorRadonHigh);
  bodyOfIntake.replaceText("{{SIpriorRadonHighNotes}}", SIpriorRadonHighNotes);
  bodyOfIntake.replaceText("{{SIsellerNoDisclosure}}", SIsellerNoDisclosure);
  bodyOfIntake.replaceText("{{SIsellerNoDisclosureNotes}}", SIsellerNoDisclosureNotes);
  bodyOfIntake.replaceText("{{SIsweepShowedUST}}", SIsweepShowedUST);
  bodyOfIntake.replaceText("{{SIsweepSHowedUSTNotes}}", SIsweepSHowedUSTNotes);
  bodyOfIntake.replaceText("{{SIpriorContamination}}", SIpriorContamination);
  bodyOfIntake.replaceText("{{SIpriorContaminationNotes}}", SIpriorContaminationNotes);
  bodyOfIntake.replaceText("{{SInewHomeWar}}", SInewHomeWar);
  bodyOfIntake.replaceText("{{SInewHomeWarNotes}}", SInewHomeWarNotes);
  bodyOfIntake.replaceText("{{SImaterialDefects}}", SImaterialDefects);
  bodyOfIntake.replaceText("{{SImaterialDefectsNotes}}", SImaterialDefectsNotes);
  bodyOfIntake.replaceText("{{SImiscNotes}}", SImiscNotes);
  // bodyOfIntake.replaceText("{{SIsellerOwnsAdjoining}}", SIsellerOwnsAdjoining);
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
    bodyOfAR.replaceText("{{matterName}}", newMatterName);
    bodyOfAR.replaceText("{{prefixOpposingAttorney}}", prefixOpposingAttorney);

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

  // now get the lender column and add to it if necessary (when lender is new)
  if (lenderIfNew != "") {
    var lenderCol = contactSheet.getRange("C:C");
    var values = lenderCol.getValues();
    var ct = 0;
    while (values[ct] && values [ct][0] != "") {
      ct++;
    }
    // ct is the row and 3 corresponds with C
    var pastLast = contactSheet.getRange(ct + 1, 3);
    pastLast.setValue(lenderIfNew);
  }

  // set the choices for questions to be the contents of a column in a google sheet
  var targetForm = FormApp.openById("1VUpTDzz5GzA2QU2BHZvIobRIkF9b-UectS45-KpsY5s");
  // var targetForm = FormApp.getActiveForm();
  var questions = targetForm.getItems();
  // this is for getting the id of new questions if they are to be added in the future so don't delete this
  for (var i in questions) {
    Logger.log(questions[i].getTitle() + ': ' + questions[i].getId());
  }

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
      // Logger.log(attorneyColData);
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

    // question regarding lender that is a drop-down not a fill-in
    if (questions[i].getId() == 1482392379) {
      var list = questions[i].asListItem();
      var lenderColData = contactSheet.getRange("C:C").getDataRegion(SpreadsheetApp.Dimension.ROWS).getValues();
      var choices = [];
      for (var j=1; j<lenderColData.length; j++) {
        if (lenderColData[j][0] != 0) {
          choices.push(list.createChoice(lenderColData[j][0]));
        }
      }
      list.setChoices(choices);
    }
  }
}
