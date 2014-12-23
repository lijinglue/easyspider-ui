define(['angular', 'toastr'], function(angular, toastr) {
  'use strict';
  angular.module('esboxApp.controllers.UploadCtrl', ['esboxApp.network', 'ngResource', 'CFG'])
    .controller('UploadCtrl', function($scope, $timeout, AdTrackerClient, $CFG) {
      $scope.title = 'Adtracker';
      $scope.result = '';
      $scope.loadBtn = {isEnabled: true, text: 'I got it, Load my file Now'};
      $scope.$watch('files', function() {
        AdTrackerClient.upload($scope.files);
      });
    });
});