angular.module('lmr.controllers', [])
.controller('RecordingsController', function($scope, Recording) {
  Recording.query().then(function(recordings) {
    $scope.recordings = recordings;
  });
})
.controller('RecordingController', function($scope) {
});

