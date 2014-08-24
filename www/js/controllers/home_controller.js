'use strict';

angular.module('tell.controllers')
  .controller('HomeController', function($scope, $location, userSession) {

    $scope.scan = function() {
      $location.path("/scan");
    }

    $scope.logout = function() {
      userSession.logout();
      $location.path("/users/sign_in");
    }

    $scope.exit = function() {
      navigator.app.exitApp();
    };
  });
