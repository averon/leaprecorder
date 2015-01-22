(function() {
  window.recorder
    .factory('Recording',
      function(railsResourceFactory, $q) {
        return railsResourceFactory({
          url: '/api/recordings',
          name: 'recording'
        });
      });
}).call(this);
