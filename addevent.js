var Variable  = require('./constant');
describe('Add event with full details', function() {


it('open event tab', function(){
//element(by.css('[ng-click="acceptedTerms()"]')).click();
element(by.css(Variable.myeventTab)).click();
});

it('click on create event', function(){
element(by.css(Variable.createEventTab)).click();
});

it('Select Type of event', function(){
element(by.model(Variable.typeOfEvent)).click();
element(by.cssContainingText(Variable.typeOfEvent1 ,'Auction')).click();
});

it('add event cover image',function(){
//var absolutePath= '/Users/shiv/downloads/img_cfc8f3721297c2d2868eb1776266a4f5_1519812319011_processed_original.jpg';
element(by.css(Variable.coverImage)).sendKeys(Variable.absolutePath);
browser.driver.sleep(10000);
});

it('enter event name', function(){
element(by.model(Variable.eventnameModel)).sendKeys(Variable.eventname);
});

it('enter event details', function(){
element(by.model(Variable.eventDetailModel)).sendKeys(Variable.eventDetail);
});

it('add location', function(){
browser.executeScript('window.scrollTo(0,' + (100) + ');');
var addressline = element(by.model(Variable.eventAddressModel)).sendKeys('1623 Battleship Dr, Honolulu, HI 96818, USA');
//protractor.Key.ENTER;
//browser.driver.switchTo().activeElement();
//element(by.cssContainingText('[ng-repeat="match in matches track by $index"]', '1623 Battleship Dr, Honolulu, HI 96818, USA')).click();

//element.all(by.model(Variable.eventAddressModel)).sendKeys
//filter(function(elem){
 element.all(by.css(".uib-typeahead-match")).getText().then(function(text){
 console.log(text);
 })
// var addr = element.all(by.css(".uib-typeahead-match"));
// addr.filter(function(elem){
// return elem.getText().then(function(text) {
// expect(text).toEqual('1623 Battleship Dr, Honolulu, HI 96818, USA');
// //return text === '1623 Battleship Dr, Honolulu, HI 96818, USA';
// browser.sleep(9000);
//    });
//    }).click();

});
//expect(text).toEqual('1623 Battleship Dr, Honolulu, HI 96818, USA'); // your id here


//browser.sleep(9000);

//
//
// it('event start date', function(){
// //click on start date
// element.all(by.css(Variable.datepicker)).get(0).click();
// browser.driver.switchTo().activeElement();
// element(by.css(Variable.timestamp)).click();
// browser.sleep(5000);
// });
//
// it('event end date', function(){
// //click on start date
// element.all(by.css(Variable.datepicker)).get(1).click();
// browser.driver.switchTo().activeElement();
// element(by.css(Variable.timestamp1)).click();
// });
//
// it('click on timezone', function(){
// element(by.model(Variable.timezone)).click();
// browser.driver.switchTo().activeElement();
// element(by.cssContainingText('.md-text',Variable.timeZone)).click();
// browser.sleep(5000);
// browser.executeScript('window.scrollTo(0,' + (200) + ');');
// });
//
// // it('enter audience time' , function(){
// // element(by.model('specialTiming.name')).sendKeys('Public');
// // browser.sleep(5000);
// // });
// //
// // it('event audience start date', function(){
// // //browser.executeScript('window.scrollTo(0,' + (200) + ');');
// // //click on start date
// // element.all(by.css('.md-datepicker-input')).get(0).click();
// // browser.sleep(5000);
// // browser.driver.switchTo().activeElement();
// // browser.sleep(5000);
// // element(by.css('.md-calendar-date.md-calendar-date-today.md-focus')).click();
// // browser.sleep(5000);
// // });
// //
// // it('event audience end date', function(){
// // //click on end date
// // element.all(by.css('.md-datepicker-input')).get(1).click();
// // browser.driver.switchTo().activeElement();
// // browser.sleep(5000);
// // element(by.css('[data-timestamp="1524162600000"]')).click();
// // browser.sleep(7000);
// // });
// //
// // it('audience start time' , function(){
// // //browser.executeScript('window.scrollTo(0,' + (200) + ');');
// // element(by.model('eventTimeSlot.startTime')).click();
// // browser.driver.switchTo().activeElement();
// // element.all(by.repeater('time in createEvent.timeList')).get(0).click();
// //
// // });
//
//
// // it('audience start time' , function(){
// // element(by.model('')).sendKeys('Public');
// //
// // });
//
// it('Sponsor type (2)', function(){
// element(by.model('sponsor.sponsorType')).sendKeys(Variable.eventSponsorType1);
// element(by.model('sponsor.name')).sendKeys(Variable.eventSponsorName1);
// //var absolutePath= '/Users/shiv/downloads/img_cfc8f3721297c2d2868eb1776266a4f5_1519812319011_processed_original.jpg';
// element(by.css('input[type=file][ng-model="sponsor.logoUrl"]')).sendKeys(Variable.absolutePath);
// element(by.css('[ng-click="createEvent.sponsors.push({});"]')).click();
// element.all(by.model('sponsor.sponsorType')).get(1).sendKeys(Variable.eventSponsorType1);
// element.all(by.model('sponsor.name')).get(1).sendKeys(Variable.eventSponsorName1);
// //var absolutePath1= '/Users/shiv/downloads/img_cfc8f3721297c2d2868eb1776266a4f5_1519812319011_processed_original.jpg';
// element.all(by.css('input[type=file][ng-model="sponsor.logoUrl"]')).sendKeys(Variable.absolutePath);
// browser.sleep(5000);
// });
//
// it('Social media links', function(){
// element(by.model('createEvent.addEventForm.fbLink')).sendKeys(Variable.eventFlink);
// element(by.model('createEvent.addEventForm.twLink')).sendKeys(Variable.eventTlink);
// element(by.model('createEvent.addEventForm.inLink')).sendKeys(Variable.eventInlink);
// element(by.model('createEvent.addEventForm.website')).sendKeys(Variable.eventWeblink);
// });
//
// it('enter note',function(){
// element(by.model('createEvent.addEventForm.notes')).sendKeys(Variable.eventNote);
// });
//
// it('scroll and click on next',function(){
// browser.executeScript('window.scrollTo(0,' + (-800) + ');');
// element(by.css('[ng-click="saveAsUnderPlaning(true);"]')).click();
// browser.sleep(5000);
// });
//
//
// it('add vendor',function(){
// browser.executeScript('window.scrollTo(0,' + (100) + ');');
// element.all(by.css('[ng-click="createEvent.processLogistic(vendor,$index)"]')).get(0).click();
// browser.driver.switchTo().activeElement();
//  var vendor = element.all(by.css('[ng-click="selectvendor.selectedContact = contact"]'));
//  //var result = vendor.click();
// vendor.isPresent().then(function(result){
//   if(result){
//     vendor.click();
// element(by.css('[ng-click="selectvendor.select()"]')).click();
// }else{
//   element(by.css('[ng-click="selectvendor.closeVendorModal()"]')).click();
// }
// });
//
// // element(by.css('[ng-click="createEvent.vendors.push({})"]')).click();
// // element.all(by.css('[ng-click="createEvent.processLogistic(vendor,$index)"]')).get(1).click();
// // browser.driver.switchTo().activeElement();
// // element(by.cssContainingText('Limit Check')).click();
// // element(by.css('[ng-click="selectvendor.select()"]')).click();
// browser.sleep(10000);
// });
// it('enter internal management',function(){
// // var user=element(by.model('createEvent.managementStaff[$index]')).sendKeys(Variable.eventInternaluser);
// // user.sendKeys(protractor.Key.ENTER);
// // element(by.model('createEvent.managementStaff[$index].task')).sendKeys(Variable.eventInternaluseTask);
// browser.executeScript('window.scrollTo(0,' + (-800) + ');');
// element(by.css('[ng-click="saveAsUnderPlaning(true);"]')).click();
// });
//
// it('click on artwork selection',function(){
// browser.executeScript('window.scrollTo(0,' + (800) + ');');
// browser.sleep(5000);
// element.all(by.repeater('eventArtwork in createEvent.artworkEventList track by $index')).count().then(function(count){
// console.log(count);
// for (var i = 0; i < count; ++i) {
// element.all(by.repeater('eventArtwork in createEvent.artworkEventList track by $index')).get(i).click();
// };
// });
// browser.sleep(5000);
// });
//
// it('scroll up and click on save button',function(){
// browser.executeScript('window.scrollTo(0,' + (-800) + ');');
// element(by.css('.btn.btn-business-yellow.full-width.m-t-10.m-b-0')).click();
// element(by.buttonText('Publish')).click();
// browser.sleep(5000);
// });

});
