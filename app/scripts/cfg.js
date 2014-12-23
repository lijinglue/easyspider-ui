define(['angular'], function (angular) {
  'use strict';
  angular.module('CFG', [])
    .constant('$CFG', {
      SSL: false,
      DEBUG: false,
      REPORT_SERVER: 'localhost:27017',
      MASTER_SERVER: 'localhost:13296'
    });
});
