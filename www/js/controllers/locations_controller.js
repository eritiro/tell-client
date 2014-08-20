'use strict';

angular.module('tell.controllers')
  .controller('LocationsController', function($scope, $routeParams, Location, $location) {
    Location.get({ id: $routeParams.id }, function(location) {
      $scope.location = location;
      $scope.ready = true;
    
      $scope.addComment = function(score){
        $location.path('/locations/' + location.id + '/comment/' + (score+1));
      }
    });
    
    $scope.score = 0;
  });
