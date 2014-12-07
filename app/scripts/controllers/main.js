'use strict';

/**
 * @ngdoc function
 * @name knoxUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the knoxUiApp
 */
angular.module('knoxUiApp')
  .controller('MainCtrl', ['$scope', '$routeParams', '$http',
        function($scope, $routeParams, $http) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + btoa('admin' + ':' + 'admin-password');
            $http.get('https://localhost:8443/gateway/admin/api/v1/version').success(function(data) {
                $scope.version = data
            });
        }]);