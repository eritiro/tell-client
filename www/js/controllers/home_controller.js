'use strict';

angular.module('tell.controllers')
  .controller('Home', function($scope, $location) {
    $scope.prueba = 'asdfasdfa';

    $scope.scan = function() {
      $location.path("/scan");
    }
  });