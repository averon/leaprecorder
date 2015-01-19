angular.module('lmr', [
  'ngRoute',
  'lmr.controllers',
  'lmr.resources',
  'lmr.services'
])
.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/recordings',
      {
        controller: 'RecordingsController',
        templateUrl: '/templates/recordings.html'
      })
    .when('/recordings/:id',
      {
        controller: 'RecordingController',
        tempalteUrl: 'templates/recording.html'
      })
    .otherwise({redirectTo: '/recordings'});
  $locationProvider.html5Mode(true);
})

