describe('add event from admin' ,function(){

it('open admin url',function(){
browser.get('https://stagad.dauble.com/#!/login');
});

it('enter email',function(){
element(by.model("loginPayload.email")).sendKeys('6priyam@gmail.com');
});

it('enter password and click on submit',function(){
element(by.model("loginPayload.password")).sendKeys('abcd@123');
element(by.css('[ng-click="adminLogin()"]')).click();
});

it('open event tab' ,function(){
element(by.cssContainingText('[class="icon-thumbnail"]','Ev')).click();
element(by.cssContainingText('[class="title"]','Events')).click();
element(by.cssContainingText('[ng-href="/#!/addevent"]','Add Event')).click();

});

it('add event name and type',function(){
element(by.model("addevent.remote.name")).sendKeys('Artfair 123');
element.all(by.model('addevent.remote.typeId')).get(0).click();
element(by.cssContainingText('[ng-repeat="item in addevent.eventType"]','Art Fair')).click();
})

it('add event address',function(){
element(by.model("addevent.remote.addressLine1")).sendKeys('South Jakarta, South Jakarta City, Jakarta, Indonesia');
protractor.Key.ENTER;
//browser.executeScript('window.scrollTo(0,' + (900) + ');');

});

it('add event start date',function(){
element.all(by.css('[ng-click="ctrl.openCalendarPane($event)"]')).get(0).click();
//element(by.model("addevent.startDate")).click();
 browser.driver.switchTo().activeElement();
 element(by.css('[data-timestamp="1525631400000"]')).click();
 browser.sleep(5000);
});

it('add event end date',function(){
element.all(by.css('[ng-click="ctrl.openCalendarPane($event)"]')).get(2).click();
//element(by.model("addevent.startDate")).click();
 browser.driver.switchTo().activeElement();
 element(by.css('[data-timestamp="1526495400000"]')).click();
 browser.sleep(5000);
});

it('add timezone' , function(){
element(by.model('addevent.remote.timeZone')).click();
browser.driver.switchTo().activeElement();
element(by.cssContainingText('.md-text','UTC- 09:30 - Marquesas Time (MART)')).click();
browser.sleep(5000);

});

it('sponsor type', function(){
 element(by.model('visitor.name')).sendKeys('Public');
});

it('add event start date1',function(){
element(by.model('timeslot.startDate')).click();
//element(by.model("addevent.startDate")).click();
 // browser.driver.switchTo().activeElement();
 // element(by.css('[data-timestamp="1525890600000"]')).click();
 browser.sleep(10000);
});

// it('add event end date1',function(){
// element.all(by.css('[ng-click="ctrl.openCalendarPane($event)"]')).get(4).click();
// //element(by.model("addevent.startDate")).click();
//  browser.driver.switchTo().activeElement();
//  element(by.css('[data-timestamp="1528914600000"]')).click();
//  browser.sleep(5000);
// });



//  it('sponsor type', function(){
//   element(by.model('sponsor.sponsorType')).sendKeys('Pepsi');
//  });
//
//  it('sponsor name', function(){
//   element(by.model('sponsor.name')).sendKeys('Pepsi1');
//  });
//
//  it('sponsor image', function(){
//    var absolutePath= '/Users/shiv/downloads/img_cfc8f3721297c2d2868eb1776266a4f5_1519812319011_processed_original.jpg';
//    element.all(by.css('input[type=file][ng-model="sponsor.sponsorImage"]')).sendKeys(absolutePath);
//    browser.sleep(5000);
//    });
//
// it('add sponsor2',function(){
// element(by.css('[ng-click="addevent.addSponsor()"]')).click();
// browser.executeScript('window.scrollTo(0,' + (100) + ');');
// element.all(by.model('sponsor.sponsorType')).get(1).sendKeys('Audi');
// element.all(by.model('sponsor.name')).get(1).sendKeys('Audi1');
// var absolutePath= '/Users/shiv/downloads/img_cfc8f3721297c2d2868eb1776266a4f5_1519812319011_processed_original.jpg';
// element.all(by.css('input[type=file][ng-model="sponsor.sponsorImage"]')).sendKeys(absolutePath);
// browser.sleep(5000);
//
// });
//
// it('event main image',function(){
//   var absolutePath= '/Users/shiv/downloads/events.jpg';
//   element.all(by.css('input[type=file][ng-model="addevent.eventImage"]')).sendKeys(absolutePath);
//   browser.sleep(5000);
// });
//
// it('event description',function(){
//   element(by.model('addevent.remote.description')).sendKeys('Event decription new way of life');
// });
//
// it('event flink',function(){
//   element(by.model('addevent.remote.facebookLink')).sendKeys('https://www.facebook.com/vandana');
// });
//
// it('event twitterLink',function(){
//   element(by.model('addevent.remote.twitterLink')).sendKeys('https://twitter.com/Alaska');
// })
//
// it('event instalink',function(){
//   element(by.model('addevent.remote.instagramLink')).sendKeys('https://www.instagram.com/a/');
// })
//
// it('event weblink',function(){
//   element(by.model('addevent.remote.website')).sendKeys('https://www.google.com/?gws_rd=ssl');
// });
//
// it('event youtube channel',function(){
//   element(by.model('addevent.remote.youtubeChannel')).sendKeys('https://www.youtube.com/watch?v=0KGP9f3duEg&start_radio=1&list=RD0KGP9f3duEg');
// })
//
// it('event youtube link',function(){
//   element(by.model('addevent.remote.youtubeLink')).sendKeys('https://www.youtube.com/watch?v=0KGP9f3duEg&start_radio=1&list=RD0KGP9f3duEg');
// })
//
// it('click on dauble checkmark' , function(){
//   element.all(by.css('.md-container.md-ink-ripple')).get(0).click();
// })
//
// it('click on admin checkmark' , function(){
//   element.all(by.css('.md-container.md-ink-ripple')).get(1).click();
// })
//
// it('click on add button' , function(){
//   element.all(by.css('[ng-click="addevent.submitAddEvent()"]')).get(0).click();
//   browser.sleep(5000);
// })
//
//
//
//
//



});
