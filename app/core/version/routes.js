'use strict';

angular.module('myApp.version')
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/view2', {
    templateUrl: 'core/version/views/view2.html',
    controller: 'View2Ctrl'
  })
  .when('/view1', {
    templateUrl: 'core/version/views/view1.html',
    controller: 'View1Ctrl'
  });
}]);