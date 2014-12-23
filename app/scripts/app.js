/*jshint unused: vars */
define(['angular',
  /*controllers*/
  'controllers/main',
  'controllers/quicksearch',
  'controllers/report',
  'controllers/upload',
  /*directive*/
  'directives/header',
  'directives/footer',
  /*services*/
  'services/network',
  /*lib*/
  'cfg'
]/*deps*/, function (angular, MainCtrl)/*invoke*/ {
  'use strict';
  return angular.module('esboxApp', [
    'esboxApp.controllers.MainCtrl',
    'esboxApp.controllers.QuickSearchCtrl',
    'esboxApp.controllers.ReportCtrl',
    'esboxApp.controllers.UploadCtrl',
    'esboxApp.CommonUi.Header',
    'esboxApp.CommonUi.Footer',
    'esboxApp.network',
    'CFG',
    /*angJSDeps*/
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/upload', {
          templateUrl: 'views/upload.html',
          controller: 'MainCtrl'
        })
        .when('/report', {
          templateUrl: 'views/report.html',
          controller: 'MainCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
});
