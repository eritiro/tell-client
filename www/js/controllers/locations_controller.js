'use strict';

angular.module('tell.controllers')
  .controller('LocationsController', function($scope, $routeParams, Location) {
    Location.get({ id: $routeParams.id }, function(location) {
      $scope.location = location;
      $scope.ready = true;
    });

    $scope.score = 0;
  });
