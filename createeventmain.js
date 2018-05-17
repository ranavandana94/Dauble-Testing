var Variable  = require('./constant');
describe('Add Event only with mandatory fields', function() {

it('open event tab', function(){
element(by.css(Variable.myeventTab)).click();
});

it('click on create event', function(){
element(by.css(Variable.createEventTab)).click();
browser.driver.sleep(5000);
});

it('check mandatory field,click on save button', function(){
element(by.css('.btn.btn-business-yellow.full-width.m-t-10.m-b-0')).click();
browser.driver.sleep(5000);
});

it('Click on next button and Match the Toast message', function() {
var EC = browser.ExpectedConditions;
element(by.css('.btn.btn-business-yellow.full-width.m-t-10.m-b-0')).click().then(function() {
toast = element(by.css('.toast-message'));
browser.wait(EC.visibilityOf(toast), 5000) //wait until toast is displayed
.then(function() {
expect(toast.getText()).toEqual('Missing : Type of event');
});
});
});


it('Select Type of event', function(){
element(by.model(Variable.typeOfEvent)).click();
//element(by.css('.md-select-menu-container.md-active md-option[value="210"]')).click();
element(by.cssContainingText(Variable.typeOfEvent1 ,'Exhibition')).click();
browser.driver.sleep(1000);
});


it('Click on next button and Match the Toast message', function() {
var EC = browser.ExpectedConditions;
element(by.css('.btn.btn-business-yellow.full-width.m-t-10.m-b-0')).click().then(function() {
toast = element(by.css('.toast-message'));
browser.wait(EC.visibilityOf(toast), 5000) //wait until toast is displayed
.then(function() {
expect(toast.getText()).toEqual('Missing : Event name');
});
browser.executeScript('window.scrollTo(5,document.body.scrollHeight)');
});
});

it('enter event name', function(){
element(by.model(Variable.eventnameModel)).sendKeys(Variable.eventname);
});


it('scroll up and click on next', function(){
browser.executeScript('window.scrollTo(0,' + (-800) + ');').then(function(){
element(by.css('.btn.btn-business-yellow.full-width.m-t-10.m-b-0')).click();
browser.sleep(2000);
});
});


it('internal logistic,click next', function(){
element(by.css('.btn.btn-business-yellow.full-width.m-t-10.m-b-0')).click();
browser.sleep(5000);
element(by.css('.btn.btn-business-yellow.full-width.m-t-10.m-b-0')).click();
});


it('Click on publish button and Match the Toast message', function() {
var EC = browser.ExpectedConditions;
element(by.buttonText('Publish')).click().then(function() {
toast = element(by.css('.toast-message'));
browser.wait(EC.visibilityOf(toast), 5000) //wait until toast is displayed
.then(function() {
expect(toast.getText()).toEqual('Please select valid date');
});
});
});


it('click on event detail, event start date', function(){
element(by.css('[ng-click="changeTab(1);"]')).click();
browser.executeScript('window.scrollTo(0,' + (-800) + ');');
//click on start date
element.all(by.css('.md-datepicker-input')).get(0).click();
browser.driver.switchTo().activeElement();
element(by.css('[data-timestamp="1523989800000"]')).click();
});


it('click on end date', function(){
element.all(by.css('.md-datepicker-input')).get(1).click();
browser.driver.switchTo().activeElement();
element(by.css('[data-timestamp="1523989800000"]')).click();
browser.driver.sleep(8000);
});


it('click on timezone', function(){
element(by.model('createEvent.addEventForm.timeZone')).click();
browser.driver.switchTo().activeElement();
element(by.cssContainingText('.md-text','UTC- 09:00 - Alaska Standard Time (AKST)')).click();
//browser.executeScript('window.scrollTo(0,' + (-800) + ');');
browser.sleep(5000);
});

it('click on next and publish button',function(){
  browser.executeScript('window.scrollTo(0,' + (-800) + ');');
element(by.css('.btn.btn-business-yellow.full-width.m-t-10.m-b-0')).click();
//element(by.css('[ng-click="saveAsUnderPlaning(true);"]')).click();
browser.sleep(5000);
var EC = browser.ExpectedConditions;
element(by.css('[ng-click="changeTab(4);"]')).click();
element(by.buttonText('Publish')).click()
.then(function() {
toast = element(by.css('.toast-message'));
browser.wait(EC.visibilityOf(toast), 10000) //wait until toast is displayed
.then(function() {
expect(toast.getText()).toEqual('Please select location');
browser.sleep(10000);
});
});
});


it('click on event detail and add location', function(){
element(by.css('[ng-click="changeTab(1);"]')).click();
browser.executeScript('window.scrollTo(0,' + (100) + ');');
var address = element(by.model(Variable.eventAddressModel)).sendKeys(Variable.eventAddress);
address.sendKeys(protractor.Key.ENTER);
browser.sleep(9000);
browser.executeScript('window.scrollTo(0,' + (-800) + ');');
element(by.css('[ng-click="saveAsUnderPlaning(true);"]')).click();
browser.sleep(5000);
var EC = browser.ExpectedConditions;
element(by.css('[ng-click="changeTab(4);"]')).click();
element(by.buttonText('Publish')).click()
.then(function() {
toast = element(by.css('.toast-message'));
browser.wait(EC.visibilityOf(toast), 10000) //wait until toast is displayed
.then(function() {
expect(toast.getText()).toEqual('Please select Artwork(s) to move');
browser.sleep(10000);
});
});
browser.sleep(9000);
});


it('click on artwork selection',function(){
element(by.css('[ng-click="changeTab(3);"]')).click();
browser.executeScript('window.scrollTo(0,' + (800) + ');');
browser.sleep(5000);
element.all(by.repeater('eventArtwork in createEvent.artworkEventList track by $index')).count().then(function(count){
console.log(count);
for (var i = 0; i < count; ++i) {
element.all(by.repeater('eventArtwork in createEvent.artworkEventList track by $index')).get(i).click();
};
});
browser.sleep(5000);
});

it('scroll up and click on save button',function(){
browser.executeScript('window.scrollTo(0,' + (-800) + ');');
element(by.css('.btn.btn-business-yellow.full-width.m-t-10.m-b-0')).click();
element(by.css('[ng-click="changeTab(4);"]')).click();
var EC = browser.ExpectedConditions;
element(by.buttonText('Publish')).click()
.then(function() {
toast = element(by.css('.toast-message'));
browser.wait(EC.visibilityOf(toast), 5000) //wait until toast is displayed
.then(function() {
expect(toast.getText()).toEqual('Please add a cover image');
browser.sleep(5000);
});
});
});

it('add event cover image',function(){
element(by.css('[ng-click="changeTab(1);"]')).click();
//var absolutePath= '/Users/shiv/downloads/img_cfc8f3721297c2d2868eb1776266a4f5_1519812319011_processed_original.jpg';
element(by.css(Variable.coverImage)).sendKeys(Variable.absolutePath);
element(by.css('.btn.btn-business-yellow.full-width.m-t-10.m-b-0')).click();
browser.driver.sleep(10000);
});

it('click on publish event',function(){
element(by.css('[ng-click="changeTab(4);"]')).click();
element(by.buttonText('Publish')).click();
});


 });
