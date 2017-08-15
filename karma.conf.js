//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'libs/angular/angular.js',
      'libs/angular-route/angular-route.js',
      'libs/angular-mocks/angular-mocks.js',
      'core/**/*.js',
      'view*/**/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
