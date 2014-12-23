define(['angular', 'toastr'], function(angular, toastr) {
  'use strict';
  angular.module('esboxApp.controllers.QuickSearchCtrl', ['esboxApp.network', 'CFG'])
    .filter('range', function() {
      return function(input, total) {
        total = parseInt(total);
        for (var i = 0; i < total; i++) {
          input.push(i);
        }
        return input;
      };
    })
    .controller('QuickSearchCtrl', function($scope, AdTrackerClient) {
      //TODO: config
      $scope.containerStyle = 'jumbotron';

      $scope.search = function(keywords) {
        if (!keywords) {
          return;
        }
        var postbody = {keywords: keywords.split('\n')};
        AdTrackerClient.addKeyword.save({}, postbody, function() {
          toastr.success('Keywords added');
          $scope.keywords='';
        });
      };

      $scope.$watch('$viewContentLoaded', function() {
        console.log('main view loaded');
      });
    });
});