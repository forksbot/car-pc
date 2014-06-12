// Generated by CoffeeScript 1.6.3
(function() {
  angular.module('carPc').controller('PlayerCtrl', function($scope, $interval, $timeout, player, $ionicScrollDelegate) {
    var loadStatus, statusRefreshStopper;
    $scope.player = player;
    player.playlist().then(function(items) {
      return $scope.playlist = items;
    });
    $scope.status = {};
    loadStatus = function() {
      return player.status().then(function(status) {
        $scope.status = status;
        return $scope.position = Math.floor(status.position * 100);
      });
    };
    loadStatus();
    statusRefreshStopper = $interval(loadStatus, 500);
    $scope.$on('$destroy', function() {
      return $interval.cancel(statusRefreshStopper);
    });
    return $scope.$watch('status.title', function() {
      var index, itemPosition, listPosition;
      if (!$scope.playlist || !$scope.status) {
        return;
      }
      index = void 0;
      $.each($scope.playlist, function(i, item) {
        if (item.name === $scope.status.title && item.duration_sec === $scope.status.length) {
          return index = i;
        }
      });
      if (index !== void 0) {
        listPosition = $ionicScrollDelegate.getScrollPosition().top;
        itemPosition = $("#item_" + index).position().top;
        if (!(listPosition + 50 > itemPosition) || !(listPosition + 200 < itemPosition)) {
          return $ionicScrollDelegate.scrollTo(0, itemPosition, true);
        }
      }
    });
  });

}).call(this);
