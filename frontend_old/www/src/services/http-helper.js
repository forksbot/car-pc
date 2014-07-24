// Generated by CoffeeScript 1.6.3
(function() {
  angular.module('carPc').service('httpHelper', function($http, $ionicPopup, SERVER_URL) {
    this.get = function(url, params) {
      var encodeParams, urlWithParams;
      encodeParams = encodeQueryData(params);
      urlWithParams = "" + SERVER_URL + url + "?" + encodeParams;
      return $http.get(urlWithParams);
    };
    this.post = function(url, params) {
      var djangoParams;
      djangoParams = void 0;
      if (params) {
        djangoParams = $.param(params);
      }
      return $http.post("" + SERVER_URL + url, djangoParams);
    };
    this.loadFailAlert = function(response) {
      var alertPromise;
      alertPromise = $ionicPopup.alert({
        title: 'Load Error',
        template: "Response status: " + response.status
      });
      return alertPromise;
    };
  });

}).call(this);