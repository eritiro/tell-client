'use strict';

angular.module('tell.controllers')
  .controller('HomeController', function(Auth, $scope, $location) {
    if (!Auth.isAuthenticated()) {
      $location.path("/login");
      return;
    }

    $scope.scan = function() {
      $location.path("/scan");
    }
  });