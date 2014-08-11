'use strict';

angular.module('tell.controllers')
  .controller('ScanController', function($scope, $location) {
    // TODO mover a algún lado (servicios?)
    
    cordova.plugins.barcodeScanner.scan(
      function (result) {
        var scanned = result.text;
        
        var parsed = getParameterByName(scanned, "req");
        
        if (!parsed) {
          $scope.result = "Valor escaneado inválido: " + scanned;
          return;
        }
        
        $location.path("/locations/" + parsed);
      },
      function (error) {
        $scope.result = "Falló el scan: " + error;
      }
    );
  });
  
function getParameterByName(url, name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(url);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
