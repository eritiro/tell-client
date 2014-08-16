'use strict';

angular.module('tell.controllers')
  .controller('HomeController', function(Auth, $scope, $location, userStorageService) {
    if (!Auth.isAuthenticated()) {
      $location.path("/login");
      return;
    }

    $scope.scan = function() {
      $location.path("/scan");
    }
    
    $scope.logout = function() {
      //Auth.logout();
      userStorageService.clearData();
      $location.path("/login");
    }
    
    $scope.exit = function() {
      navigator.app.exitApp();
    };
  });
