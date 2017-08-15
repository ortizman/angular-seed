//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'libs/angular/angular.js',
      'libs/angular-route/angular-route.js',
      'libs/angular-mocks/angular-mocks.js',
      'core/version/version.js',
      'core/**/*.js',
      'app.modules.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Firefox'],

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
