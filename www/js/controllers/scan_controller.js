'use strict';

angular.module('tell.controllers')
  .controller('ScanController', function($scope, $location) {
    // TODO mover a algún lado (servicios?)
    cordova.plugins.barcodeScanner.scan(
      function (result) {
        $scope.result = result.text;
        $location.path("/locations/" + result.text);
      },
      function (error) {
        $scope.result = "Falló el scan: " + error;
      }
    );
  });