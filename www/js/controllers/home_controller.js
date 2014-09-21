'use strict';

angular.module('tell.controllers')
  .controller('HomeController', function($scope, $location, userSession, Location, scanService, Auth, backButtonService) {


    $scope.scan = function() {

      scanService.scan( function(scanResult){
        if (scanResult.cancelled){
          backButtonService.cancel();
          return;
        }
        Location.scan({ url: scanResult.text }, function(location){
          $location.path("/locations/" + location.id);
        }, function(error){
          alert("El código QR escaneado no es un código válido. Contiene lo siguiente: " + scanResult.text);
        });
        $scope.$apply();
      }, function(error) {
      });
    };

    $scope.recents = function() {
      $location.path("/locations/history");
    };

    $scope.logout = function() {
      Auth.logout().then(function(oldUser) {
        userSession.logout();
        $location.path("/users/sign_up_selection");
      });
    };

    $scope.exit = function() {
      navigator.app.exitApp();
    };
  });
