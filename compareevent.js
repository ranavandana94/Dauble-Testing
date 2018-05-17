var Variable  = require('./constant');
describe('Add event with full details', function() {

it('open event tab', function(){
element(by.css(Variable.myeventTab)).click();
browser.sleep(5000);
});

it('open event detail page', function(){
//browser.executeScript('window.scrollTo(0,' + (800) + ');').then(function(){
element.all(by.css('[ng-click="typeOfEvent.goToEvent(\'detail\',event.id)"]')).get(0).click();
browser.sleep(2000);
});



it('match event name' ,function(){
var ename =element(by.css('[ng-bind="eventdetails.eventDetails.name"]'));
expect(ename.getText()).toEqual(Variable.eventname);
});

it('match event type' ,function(){
var etype =element(by.css('[ng-bind="eventdetails.eventDetails.type"]'));
expect(etype.getText()).toEqual('AUCTION');
})

it('match event address' ,function(){
var eAddr =element(by.css('[ng-bind="eventdetails.eventDetails.addressLine1"]'));
expect(eAddr.getText()).toEqual(Variable.eventAddress);
});

it('match event sponsor' ,function(){
var eSpons =element(by.css('[ng-repeat="sponser in eventdetails.eventDetails.eventSponsors track by $index"]'));
expect(eSpons.getText()).toEqual(Variable.eventSponsorType1);
});


it('match event facebooklink' ,function(){
var eFacelink =element(by.css('[ng-click="openUrl(eventdetails.eventDetails.fbLink)"]')).click();
browser.ignoreSynchronization = true;
browser.waitForAngular();
browser.sleep(500);
browser.getAllWindowHandles().then(function(handles){
browser.switchTo().window(handles[1]).then(function(){
       //do your stuff on the pop up window
expect(browser.getCurrentUrl()).toEqual(Variable.eventFlink);
//browser.close();
browser.switchTo().window(handles[0]);
});
});
});


it('match event twitterlink' ,function(){
browser.sleep(5000);
var eTwit =element(by.css('[ng-click="openUrl(eventdetails.eventDetails.twLink)"]')).click();
browser.ignoreSynchronization = true;
browser.waitForAngular();
browser.sleep(500);
browser.getAllWindowHandles().then(function(handles){
browser.switchTo().window(handles[2]).then(function(){
       //do your stuff on the pop up window
expect(browser.getCurrentUrl()).toEqual(Variable.eventTlink);
browser.switchTo().window(handles[0]);
//browser.close();
});
});
});


it('match event instalink' ,function(){
var eInsta =element(by.css('[ng-click="openUrl(eventdetails.eventDetails.inLink)"]')).click();
browser.ignoreSynchronization = true;
browser.waitForAngular();
browser.sleep(500);
browser.getAllWindowHandles().then(function(handles){
browser.switchTo().window(handles[3]).then(function(){
       //do your stuff on the pop up window
expect(browser.getCurrentUrl()).toEqual(Variable.eventInlink);
browser.switchTo().window(handles[0]);
//browser.close();
});
});
});

it('match event weblink' ,function(){
var eSpons =element(by.css('[ng-click="openUrl(eventdetails.eventDetails.website)"]')).click();
browser.ignoreSynchronization = true;
browser.waitForAngular();
browser.sleep(500);
browser.getAllWindowHandles().then(function(handles){
browser.switchTo().window(handles[4]).then(function(){
       //do your stuff on the pop up window
expect(browser.getCurrentUrl()).toEqual(Variable.eventWeblink);
browser.switchTo().window(handles[0]);
//browser.close();
});
});
});

// it('match vendors', function(){
// var evendor=element(by.cssContainingText('[ng-bind="vendor.name"]','Framing'));
// expect(evendor.getText()).toEqual()
// browser.sleep(5000);
// });



});
