define(['angular', 'toastr'], function(angular, toastr) {
  'use strict';
  angular.module('esboxApp.controllers.ReportCtrl', ['esboxApp.network', 'ngResource', 'CFG'])
    .controller('ReportCtrl', function($scope, $interval, AdTrackerClient, $CFG) {
      $scope.title = 'Adtracker';
      $scope.queueSize = 'Unknown';
      var srv = $CFG.MASTER_SERVER;
      $scope.keywordReport = 'http://' + srv + '/report?aggr=keywords';
      $scope.advertiserReport = 'http://' + srv + '/report?aggr=advertisers';
      $scope.brandReport = 'http://' + srv + '/report?aggr=brand';
      $scope.coverageReport = 'http://' + srv + '/report?aggr=coverage';
      AdTrackerClient.queryTaskQueue.query(function(data) {
        $scope.queueSize = data.remaining;
      });
      var poll = $interval(function() {
        AdTrackerClient.queryTaskQueue.query({},function(data) {
          $scope.queueSize = data.remaining;
        }, function(err) {
          $scope.queueSize = 'Unknown';
        });
      }, 5000, 0);

      $scope.$on('$destroy', function() {
        if (angular.isDefined(poll)) {
          $interval.cancel(poll);
          poll = undefined;
        }
      });
    });
});