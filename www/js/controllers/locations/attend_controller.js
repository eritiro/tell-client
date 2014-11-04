'use strict';

angular.module('tell.controllers').controller('LocationsAttendController', function($scope, $routeParams, Location, $location) {

    Location.get({ id: $routeParams.id }, function(location) {
      $scope.location = location;
    });

    $scope.attending = function() {
      $location.path("/locations/" + $routeParams.id + "/show");
    };
});
