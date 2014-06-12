// Generated by CoffeeScript 1.6.3
(function() {
  angular.module('carPc', ['ionic', 'ngCookies']).run(function($ionicPlatform) {
    return $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        return StatusBar.styleDefault();
      }
    });
  }).config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html'
    });
    $stateProvider.state('app.player', {
      url: '/player',
      views: {
        menuContent: {
          templateUrl: 'templates/player/player.html',
          controller: 'PlayerCtrl'
        }
      }
    });
    $stateProvider.state('app.browse', {
      url: '/browse?path',
      views: {
        menuContent: {
          templateUrl: 'templates/player/browse.html',
          controller: 'BrowseCtrl'
        }
      }
    });
    $stateProvider.state('app.settings', {
      url: '/settings',
      views: {
        menuContent: {
          templateUrl: 'templates/settings.html',
          controller: 'SettingsCtrl'
        }
      }
    });
    $urlRouterProvider.otherwise('/app/player');
  }).config(function($httpProvider) {
    return $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  });

}).call(this);