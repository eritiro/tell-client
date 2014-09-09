'use strict';

angular.module('tell.controllers')
  .controller('LocationsShowController', function($scope, $routeParams, Location, historyService) {
    Location.get({ id: $routeParams.id }, function(location) {
      $scope.location = location;
      historyService.log(location);
    });

    $scope.score = 0;
  });

