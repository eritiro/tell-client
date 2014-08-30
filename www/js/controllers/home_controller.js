'use strict';

angular.module('tell.controllers')
  .controller('HomeController', function($scope, $location, userSession, $rootScope, Location, scanService) {

    var scannear = function() {
      var cordobaHack = function() {
        // Hack horrible para que angular no se rompa con los plugins de cordova
        if (!$rootScope.$$phase) {
          $scope.$apply();
        }
      }

      var processScannedCode = function(scanResult) {
        Location.scan({ url: scanResult.text }, function(location){
          $location.path("/locations/" + location.id);
        });
        cordobaHack();
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
      $location.path("/locations/history");
    }

    $scope.logout = function() {
      userSession.logout();
      $location.path("/users/sign_up_selection");
    }

    $scope.exit = function() {
      navigator.app.exitApp();
    };
  });
