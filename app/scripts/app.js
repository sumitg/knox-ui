'use strict';

/**
 * @ngdoc overview
 * @name knoxUiApp
 * @description
 * # knoxUiApp
 *
 * Main module of the application.
 */
angular
  .module('knoxUiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/topologies', {
        templateUrl: 'views/topologies.html',
        controller: 'TopologiesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
