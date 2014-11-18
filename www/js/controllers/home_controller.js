'use strict';

angular.module('tell.controllers')
  .controller('HomeController', function($scope, $rootScope, $location, userSession) {

    $scope.find = function() {
      if($scope.name === undefined || $scope.name.length < 2)
        navigator.notification.alert("Tenés que escribir el nombre del boliche", function(){}, "Hey!");
      else
        $location.path("/locations").search("name", $scope.name);
    };
  });
