// Generated by CoffeeScript 1.6.3
(function() {
  angular.module('carPc', ['ngResource', 'ngSanitize', 'ngRoute', 'ngAnimate', 'ngCookies', 'toaster']).config(function($routeProvider) {
    return $routeProvider.when('/', {
      templateUrl: '/static/core/scripts/controllers/main.html',
      controller: 'MainCtrl',
      label: 'Главная'
    }).otherwise({
      redirectTo: '/'
    });
  }).config(function($httpProvider) {
    return $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  }).run(function($location, $rootScope) {
    return $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
      var _ref;
      return $rootScope.title = ((_ref = current.$$route) != null ? _ref.label : void 0) || '';
    });
  });

}).call(this);
