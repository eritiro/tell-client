'use strict';

angular.module('tell.controllers')
  .controller('HomeController', function($scope, $location, userSession, Location, scanService, backButtonService) {

    $scope.scan = function() {
      scanService.scan( function(scanResult){
        if (scanResult.cancelled){
          backButtonService.cancel();
          return;
        }
        Location.scan({ url: scanResult.text }, function(location){
          $location.path("/locations/" + location.id);
        }, function(error){
          if(error.status === 0){
            alert("No se puede conectar con el servidor. Revise su conexión a internet.");
          } else {
            alert("El código QR escaneado no es un código válido. Contiene lo siguiente: " + scanResult.text);
          }
        });
        $scope.$apply();
      }, function(error) {
      });
    };

    $scope.recents = function() {
      $location.path("/locations/history");
    };

    $scope.tutorial = function() {
      $location.path("/tutorial/1");
    };
  });
