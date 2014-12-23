var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    // Removed "Spec" naming from files
    if (/Spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
  // Karma serves files from '/base'
  baseUrl: '/base/app/scripts',

  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
    'angular-scenario': '../bower_components/angular-scenario/angular-scenario',
    'angular-sanitize': '../bower_components/angular-sanitize/angular-sanitize',
    'angular-route': '../bower_components/angular-route/angular-route',
    'angular-resource': '../bower_components/angular-resource/angular-resource',
    'angular-mocks': '../bower_components/angular-mocks/angular-mocks',
    'angular-cookies': '../bower_components/angular-cookies/angular-cookies',
    toastr: '../bower_components/toastr/toastr',
    angular: '../bower_components/angular/angular',
    'elasticsearch-angular': '../bower_components/elasticsearch/elasticsearch.angular',
    'elastic-js-base': '../bower_components/elastic.js/dist/elastic',
    'elastic-js-angular': '../bower_components/elastic.js/dist/elastic-angular-client',
    elasticsearch: '../bower_components/elasticsearch/elasticsearch',
    elastic: '../bower_components/elastic.js/dist/elastic'
  },

  shim: {
    'angular': {'exports': 'angular'},
    'angular-route': ['angular'],
    'angular-cookies': ['angular'],
    'angular-sanitize': ['angular'],
    'angular-resource': ['angular'],
    'angular-mocks': {
      deps: ['angular'],
      'exports': 'angular.mock'
    }
  },

  // ask Require.js to load these files (all our tests)
  deps: tests,

  // start test run, once Require.js is done
  callback: window.__karma__.start
});
