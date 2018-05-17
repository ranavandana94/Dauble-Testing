var Variable  = require('./constant');
describe('Add event with full details', function() {

it('open event tab', function(){
element(by.css(Variable.myeventTab)).click();
});

it('search event', function(){
var result = element(by.model('events.event.name')).sendKeys(Variable.title);
result.sendKeys(protractor.Key.ENTER);
browser.sleep(5000);
});

it('match count' , function(){
var num=element.all(by.css('[ng-click="typeOfEvent.goToEvent(\'detail\',event.id)"]')).count().then(function(count){
console.log(count);
});
});

});
