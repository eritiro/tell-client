'use strict';

angular.module('tell.controllers')
  .controller('LocationsAttendeesController', function($scope, Location, $location, $rootScope, $route) {

    if (!$scope.attendingLocationId) {
      $location.path("/locations").search("backto", "/feeds");
      return;
    }

	Location.get({ id: $scope.attendingLocationId }, function(location) {
		$scope.location = location;
	});

    Location.attendees({ id: $scope.attendingLocationId }, function(attendees) {
      $scope.attendees = attendees;
    });

    $scope.showInfo = function(){
      $location.path("/locations/" + $scope.attendingLocationId);
    };

    $scope.refresh = function() {
      Location.staleAttending($scope.attendingLocationId);
      $route.reload();
    };

    $scope.swipeRight = function(){
      $location.path("/feeds");
    };

    $scope.swipeLeft = function(){
      $location.path("/notifications");
    };
  });
