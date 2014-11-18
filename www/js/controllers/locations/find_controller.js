'use strict';

angular.module('tell.controllers').controller('LocationsFindController', function($scope, $routeParams, Location, $location) {

  Location.find({ name: $routeParams.name }, function(locations) {
    $scope.locations = locations;
    $scope.searchName = $routeParams.name;
    $scope.support = config.support;
  });

  $scope.go = function(id) {
    $location.url("/locations/" + id);
  };

});
