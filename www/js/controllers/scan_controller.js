'use strict';

angular.module('tell.controllers')
  .controller('ScanController', function($scope, $location, $rootScope, Location, scanService, afipParser) {
    var that = this;
    
    this._processScannedCode = function(scanResult) {
      afipParser.parse(scanResult.text, function(parseResult) {
        if (!parseResult.success) {
          // No es un código válido para nuestra app. Ejemplo: un código de barras.
          $scope.result = "Valor escaneado inválido: " + scanned;
        } else {
          Location.getByAfipReq({ req: parseResult.req }, function(location){
            // Éxito. Voy a la location
            $location.path("/locations/" + location.id);
          });
        }
        
        that._cordobaHack();
      });
    }
    
    this._cordobaHack = function() {
      // Hack horrible para que angular no se rompa con los plugins de cordova
      if (!$rootScope.$$phase) {
        $scope.$apply();
      }
    }
    
    scanService.scan(function(scanResult){
      that._processScannedCode(scanResult);
    }, function(error) {
      alert(error);
    });
  }
);

