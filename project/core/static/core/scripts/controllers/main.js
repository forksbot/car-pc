// Generated by CoffeeScript 1.6.3
(function() {
  angular.module('carPc').controller('MainCtrl', function($scope, toaster, SYSTEM_STATUS_UPDATE, SystemStatus, Video) {
    $scope.systemStatus = SystemStatus.getStatus();
    $scope.$on(SYSTEM_STATUS_UPDATE, function(event, status) {
      return $scope.systemStatus = status;
    });
    $scope.toggleVideo = function() {
      var promise;
      if ($scope.systemStatus.VIDEO_STARTED === '1') {
        promise = Video.stopCapture();
      } else {
        promise = Video.startCapture();
      }
      promise.success(function() {
        return SystemStatus.loadStatus();
      });
      return promise.error(function(data, status, headers, config) {
        console.log(status, headers, config);
        return toaster.pop('error', 'Error', 'Video capturing error: ' + status);
      });
    };
    return SystemStatus.loadStatus();
  });

}).call(this);
