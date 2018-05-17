var Variable  = require('./constant');
describe('openmail', function() {
//open stag business
it('openmail', function(){
browser.get(Variable.baseUrl);
browser.driver.sleep(5000);
});

//enter email
it('Enter Email', function(){
  element(by.model(Variable.UserModel)).sendKeys(Variable.userName);
});

//enter password
it('Enter password', function(){
  element(by.model(Variable.passModel)).sendKeys(Variable.passWord);
});

//click on sign in button
it('Clickon sign in button', function(){
  element(by.buttonText(Variable.loginButton)).click();
});

});
