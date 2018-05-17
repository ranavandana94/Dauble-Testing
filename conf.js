// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  suites: {
  ex1 : 'signin.js',
  //ex2 : 'createeventmain.js',
 ex3 : 'addevent.js' ,
  //ex4 : 'searchevent.js' ,
  //ex5 : 'compareevent.js' ,
  // ex6 : 'admin.js'
},
  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 999999
  },

};
