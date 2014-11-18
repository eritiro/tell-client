'use strict';

angular.module('tell.controllers')
  .controller('LocationsAttendeesController', function($scope, $routeParams, Location) {

	Location.get({ id: $routeParams.id }, function(location) {
		$scope.location = location;
	});

    Location.attendees({ id: $routeParams.id }, function(attendees) {
      $scope.attendees = attendees;
    });

    $scope.score = 0;
  });
