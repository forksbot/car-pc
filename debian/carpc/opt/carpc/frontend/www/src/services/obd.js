// Generated by CoffeeScript 1.6.3
(function() {
  angular.module('carPc').service('obd', function(httpHelper) {
    this.startCapture = function() {
      return httpHelper.post('/obd/start_capture/', {
        'start': 1
      });
    };
    this.stopCapture = function() {
      return httpHelper.post('/obd/stop_capture/', {
        'stop': 1
      });
    };
    this.getLastResults = function() {
      return httpHelper.get('/obd/last_results/').then(function(response) {
        return response.data;
      });
    };
  });

}).call(this);