'use strict';

angular.module('tell.controllers')
  .controller('ScanController', ['$scope', function($scope) {
    // TODO mover a algún lado (servicios?)
    cordova.plugins.barcodeScanner.scan(
      function (result) {
        $scope.result = result.text;
      },
      function (error) {
        $scope.result = "Falló el scan: " + error;
      }
    );
  }]);