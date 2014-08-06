'use strict';

angular.module('tell.controllers')
  .controller('LocationsController', function($scope, $routeParams) {
    $scope.location = { name: 'Jarro Café', id: $routeParams.locationId };
  });