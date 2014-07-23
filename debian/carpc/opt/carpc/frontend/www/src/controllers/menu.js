// Generated by CoffeeScript 1.6.3
(function() {
  angular.module('carPc').controller('MenuCtrl', function($scope, SYSTEM_STATUS_UPDATE, systemStatus, video) {
    var loadStatus, processStatus, unbindStatus;
    processStatus = function(status) {
      return $scope.status = status;
    };
    unbindStatus = $scope.$on(SYSTEM_STATUS_UPDATE, function(event, status) {
      return processStatus(status);
    });
    $scope.$on('$destroy', function() {
      return unbindStatus();
    });
    loadStatus = function() {
      return systemStatus.loadStatus().then(processStatus);
    };
    loadStatus();
    return $scope.toggleVideoUpload = function() {
      if ($scope.status.VIDEO_UPLOAD_STARTED === '1') {
        return video.stopUpload().then(loadStatus);
      } else {
        return video.startUpload().then(loadStatus);
      }
    };
  });

}).call(this);