'use strict';

angular.module('tell.controllers')
  .controller('HomeController', function($scope, $rootScope, $location, userSession) {

    $scope.find = function() {
      if($scope.name === undefined || $scope.name.length < 2)
        alert("Escribí el nombre del boliche!");
      else
        $location.path("/locations").search("name", $scope.name);
    };
  });
