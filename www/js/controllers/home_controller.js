'use strict';

angular.module('tell.controllers')
  .controller('HomeController', function($scope, $location, userSession, $rootScope, Location, scanService, afipParser) {

    var scannear = function() {
      var cordobaHack = function() {
        // Hack horrible para que angular no se rompa con los plugins de cordova
        if (!$rootScope.$$phase) {
          $scope.$apply();
        }
      }

      var processScannedCode = function(scanResult) {
        afipParser.parse(scanResult.text, function(parseResult) {
          if (!parseResult.success) {
            // No es un código válido para nuestra app. Ejemplo: un código de barras.
            alert("Valor escaneado inválido: " + scanResult.text);
            document.querySelector("#debug").innerHTML = scanResult.text;
          } else {
            Location.getByAfipReq({ req: parseResult.req }, function(location){
              // Éxito. Voy a la location
              $location.path("/locations/" + location.id);
            });
          }

          cordobaHack();
        });
      }

      scanService.scan(function(scanResult){
        processScannedCode(scanResult);
      }, function(error) {
        alert(error);
      });
    }

    $scope.scan = function() {
      scannear();
    }
    
    $scope.recents = function() {
      $location.path("/history");
    }

    $scope.logout = function() {
      userSession.logout();
      $location.path("/users/sign_up_selection");
    }

    $scope.exit = function() {
      navigator.app.exitApp();
    };
  });
