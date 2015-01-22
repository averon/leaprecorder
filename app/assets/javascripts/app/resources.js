(function() {
  window.recorder
    .factory('Recording',[
      'railsResourceFactory',
      '$q',
      function(railsResourceFactory, $q) {
        return railsResourceFactory({
          url: '/api/recordings',
          name: 'recording'
        });
      };
    ]);
}).call(this);
