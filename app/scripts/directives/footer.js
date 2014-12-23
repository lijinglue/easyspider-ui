define(['angular'], function (angular) {
  'use strict';
  angular.module('esboxApp.CommonUi.Footer', [])
    .directive('ngEsFooter', function () {
      return {
        restrict: 'AE',
        template: 'Crafted By LI Jinglue'
      };
    });
});