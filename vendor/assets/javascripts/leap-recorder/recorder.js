// Generated by CoffeeScript 1.7.1
(function() {
  window.recorder = angular.module('Recorder', ['ui-rangeSlider', 'angularSpinner', 'xeditable', 'angulartics', 'angulartics.google.analytics', 'rails', 'ngRoute']);

  recorder.run(['editableOptions', function(editableOptions) {
    return editableOptions.theme = 'bs3';
  }]);

  window.player = function() {
    return window.controller.plugins['playback'].player;
  };

}).call(this);
