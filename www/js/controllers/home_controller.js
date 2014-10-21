'use strict';

angular.module('tell.controllers')
  .controller('HomeController', function($scope, $location) {

    $scope.scan = function() {
      var name = $scope.name;
      $location.path("/locations/find/" + name);
    };
    
  });
