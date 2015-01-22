(function() {
  window.recorder
    .config([
      '$locationProvider', 
      function($locationProvider) {
        $locationProvider.html5Mode(true);
      }
    ]);
}).call(this);
