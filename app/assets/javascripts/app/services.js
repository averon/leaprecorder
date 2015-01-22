(function() {
  window.recorder
    .service('RecordingCompressor', [
      'Recording',
      function(Recording) {
        this.compress = function(recording) {
          var json = JSON.stringify({
            frames: recording.frameData,
            metadata: recording.metadata
          });
          return LZString.compressToBase64(json);
        };

        this.decompress = function(recording) {
          var lz_string = LZString.decompressFromBase64(recording.data);
          var json = JSON.parse(lz_string);
          return new Recording(json);
        };
      }
    ])
    .service('RecordingService', [
      '$rootScope',
      '$location',
      'Recording',
      'RecordingCompressor',
      function($rootScope, $location, Recording, RecordingCompressor) {
        var service = this;
        this._currentRecording = null; 

        Recording.query().then(function(recordings) {
          service._recordings = recordings;
          service.setRecordingByLocation();
          $rootScope.$broadcast('recordings:change', service._recordings);
        });

        this.recordings = function() {
          return service._recordings;
        };

        this.currentRecording = function() {
          return service._currentRecording.expanded;
        };

        this.savedRecording = function() {
          return service._currentRecording.compressed;
        };

        this.setCurrentRecording = function(recording) {
          var expandedRecording = RecordingCompressor.decompress(recording);
          window.player().setRecording(expandedRecording);
          window.player().recording.setFrames(expandedRecording.frames);

          service._currentRecording = {
            compressed: recording,
            expanded: expandedRecording 
          };
          $rootScope.$broadcast("recording:set", recording);
        };

        this.setRecordingByLocation = function() {
          var recording, recordingId;
          recordingId = $location.path().slice(1);
          if (recordingId && service._recordings) {
            recording = Lazy(service._recordings).find(function(r) {
              return r.id === parseInt(recordingId);
            });
            service.setCurrentRecording(recording);
          } else {
            service.unsetCurrentRecording();
          }
        };

        this.unsetCurrentRecording = function() {
          window.player().setRecording(new Recording());
          window.player().recording.setFrames([]);
          this._currentRecording = null;
          $rootScope.$broadcast("recording:unset");
        };

        this.createRecording = function(name) {
          var recording = window.player().recording;
          var compressedData = RecordingCompressor.compress(recording);

          var recording = new Recording({name: name, data: compressedData});
          recording.create()
            .then(function(recording) {
              service.recordings().push(recording);
              $location.path('/' + recording.id);
            });
        };

        this.updateRecording = function() {
          var recording = service.savedRecording();
          var data = RecordingCompressor.compress(service.currentRecording());
          recording.data = data;
          recording.save();
        };
      }
    ]);
}).call(this);
