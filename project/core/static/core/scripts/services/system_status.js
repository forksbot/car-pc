// Generated by CoffeeScript 1.6.3
(function() {
  angular.module('carPc').service('systemStatus', function($rootScope, $cookieStore, $http, SYSTEM_STATUS_UPDATE) {
    this.setStatus = function(status) {
      var currentStatus;
      currentStatus = this.getStatus();
      if (currentStatus && JSON.stringify(currentStatus) === JSON.stringify(status)) {
        return;
      }
      $cookieStore.put('systemStatus', status);
      return $rootScope.$broadcast(SYSTEM_STATUS_UPDATE, status);
    };
    this.getStatus = function() {
      return $cookieStore.get('systemStatus');
    };
    this.loadStatus = function() {
      var _this = this;
      return $http.get('/status/system_status/').then(function(response) {
        var status;
        status = response.data;
        _this.setStatus(status);
        return status;
      });
    };
  });

}).call(this);
