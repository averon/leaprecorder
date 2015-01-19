angular.module('lmr.resources', ["rails"])
  .factory('Recording',
    function(railsResourceFactory, $q) {
      return railsResourceFactory({
        url: '/api/recordings',
        name: 'recording'
      });
    });
