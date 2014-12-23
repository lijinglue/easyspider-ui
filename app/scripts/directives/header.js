define(['angular'], function (angular) {
  'use strict';
  angular.module('esboxApp.CommonUi.Header', [])
    .controller('HeaderCtrl', function ($scope) {
      var headerItem = [
        {
          id: 1,
          active: false,
          text: 'Quick Search',
          link: '#/'
        },
        {
          id: 2,
          active: false,
          text: 'Upload Keywords',
          link: '#/upload'
        },
        {
          id: 3,
          active: false,
          text: 'Report',
          link: '#/report'
        }
      ];
      $scope.headerItem = headerItem;
      $scope.activateFunc = function (bId) {
        headerItem.forEach(function (item) {
            if (item.id === bId) {
              item.active = true;
            } else {
              item.active = false;
            }
          }
        );
      };
    })
    .directive('ngEsHeader', function () {
      return {
        restrict: 'AEC',
        templateUrl: '/views/segments/header.html'
      };
    });
});