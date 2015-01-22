(function() {
  window.recorder
    .controller('Recordings', [
      '$scope',
      '$location',
      'RecordingService',
      function($scope, $location, RecordingService) {
        $scope.$on('$locationChangeStart', RecordingService.setRecordingByLocation);

        $scope.$on('recording:set', function(evt, currentRecording) {
          $scope.recording = currentRecording;
        });

        $scope.$on('recording:unset', function(evt) {
          $scope.recording = {name: ""};
        });

        $scope.$on('recordings:change', function(evt, recordings) {
          $scope.recordings = RecordingService.recordings();
        });
      }
    ]);
}).call(this);
