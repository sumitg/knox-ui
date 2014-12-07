'use strict';

/**
 * @ngdoc function
 * @name knoxUiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the knoxUiApp
 */
angular.module('knoxUiApp')
  .controller('TopologyCtrl', ['$scope', '$routeParams', '$http',
        function($scope, $routeParams, $http) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + btoa('admin' + ':' + 'admin-password');
            $http.defaults.headers.common['Accept'] = 'application/xml';
            $http.get($scope.topologyHref).success(function(data) {
                $scope.top = data
            });
        }]);
