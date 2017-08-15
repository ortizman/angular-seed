//jshint strict: false
exports.config = {

  allScriptsTimeout: 11000,

  specs: [
    '/**/*_spec.js'
  ],

  capabilities: {
    'browserName': 'firefox'
  },

  baseUrl: 'http://localhost:8000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }

};
