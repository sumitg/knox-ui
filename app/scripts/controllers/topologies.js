'use strict';

/**
 * @ngdoc function
 * @name knoxUiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the knoxUiApp
 */
angular.module('knoxUiApp')
  .controller('TopologiesCtrl', ['$scope', '$routeParams', '$http',
        function($scope, $routeParams, $http) {
            $scope.active = true;
            $http.defaults.headers.common['Authorization'] = 'Basic ' + btoa('admin' + ':' + 'admin-password');
            $http.defaults.headers.common['Accept'] = 'application/json';
            $http.get('https://localhost:8443/gateway/admin/api/v1/topologies').success(function(data) {
                $scope.topologies = data
            });
        }]);
