'use strict';

angular.module('tell.controllers')
  .controller('LocationsShowController', function($scope, $routeParams, Location, historyService) {
    Location.get({ id: $routeParams.id }, function(location) {
      $scope.location = location;
      $scope.pages = [
        { attending: location.attending, active: true },
        { attending: location.attending, active: false },
        { attending: location.attending, active: false }
      ]
      historyService.log(location);
    });

    $scope.score = 0;
  });
