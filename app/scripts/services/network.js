define(['angular', 'toastr', 'ng-file-upload', 'underscore'], function(angular, toastr) {
  'use strict';
  angular.module('esboxApp.network', ['CFG', 'ngResource', 'angularFileUpload'])
    .factory('AdTrackerClient', function($resource, $upload, $CFG) {
      var srv = $CFG.MASTER_SERVER;
      var AdTrackerClient = {
        addKeyword: $resource('http://' + srv + '/task'),
        queryTaskQueue: $resource('http://' + srv + '/task', {}, {query: {method: 'GET', isArray: false}}),
        upload: function(files) {
          console.log(files);
          if (_.isUndefined(files)) {
            return;
          }
          for (var i = 0; i < files.length; i++) {
            var file = files[i];
            $upload.upload({
              url: 'http://' + srv + '/upload', //upload.php script, node.js route, or servlet url
              method: 'PUT',
              file: file
            }).success(function(data, status, headers, config) {
              toastr.success('File uploaded successfully');
            }).error();
          }
        }
      }
      return AdTrackerClient;
    })
    .service('ReportService', function($resource, $CFG) {
      //var res = $resource('http://' + $CFG.ES_HEAD_ROOT + '/contents/_search');
      console.log('hi');
    });
});