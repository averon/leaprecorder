angular.module('lmr', [])
  .controller('Controls', function($scope) {
  });

Leap.loop({})
  .use('riggedHand');
window.controller = Leap.loopController;
