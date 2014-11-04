'use strict';

angular.module('tell.controllers').controller('LocationsFindController', function($scope, $routeParams, Location, $location) {

  Location.find({ name: $routeParams.name }, function(locations) {
    $scope.locations = locations;
  });

  $scope.go = function(id) {
    $location.path("/locations/" + id + "/attend");
  };

});
