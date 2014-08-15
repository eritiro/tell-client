'use strict';

angular.module('tell.controllers')
  .controller('LocationsController', function($scope, $routeParams, Location, $location) {
    Location.get({ id: $routeParams.id }, function(location) {
       $scope.location = location;
       $scope.relative = function(src) { return config.serverUrl + src; };
     });
    $scope.score = 0;
    $scope.addComment = function(score){
      $scope.score = score + 1;
    }
  });
