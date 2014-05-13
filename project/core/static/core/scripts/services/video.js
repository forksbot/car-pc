// Generated by CoffeeScript 1.6.3
(function() {
  angular.module('carPc').service('Video', function($http) {
    this.startCapture = function() {
      var params;
      params = $.param({
        'start': 1
      });
      return $http.post('/video/start_capture/', params);
    };
    this.stopCapture = function() {
      var params;
      params = $.param({
        'stop': 1
      });
      return $http.post('/video/stop_capture/', params);
    };
  });

}).call(this);
