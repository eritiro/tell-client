'use strict';

angular.module('tell.controllers')
  .controller('HomeController', function($scope, $location, userSession, $rootScope, Location, scanService, Auth, backButtonService) {


    $scope.scan = function() {

      backButtonService.detach();
      scanService.scan( function(scanResult){
        Location.scan({ url: scanResult.text }, function(location){
          backButtonService.attach();
          $location.path("/locations/" + location.id);
        }, function(error){
          backButtonService.attach();
          alert("El código QR escaneado no es un código válido. Contiene lo siguiente: " + scanResult.text)
        });
        if (!$rootScope.$$phase) {
          $scope.$apply();
        }
      }, function(error) {
      });
    }

    $scope.recents = function() {
      $location.path("/locations/history");
    }

    $scope.logout = function() {
      Auth.logout().then(function(oldUser) {
        userSession.logout();
        $location.path("/users/sign_up_selection");
      });
    }

    $scope.exit = function() {
      navigator.app.exitApp();
    };
  });
