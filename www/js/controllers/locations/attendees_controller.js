'use strict';

angular.module('tell.controllers')
  .controller('LocationsAttendeesController', function($scope, $routeParams, Location, $location, $rootScope, $route) {

	Location.get({ id: $routeParams.id }, function(location) {
		$scope.location = location;
	});

    Location.attendees({ id: $routeParams.id }, function(attendees) {
      $scope.attendees = attendees;
    });

    $scope.leave = function(){
      navigator.notification.confirm("Ya no vas a ir a " + $scope.location.name, function(result){
        if(result === 1){
          $scope.location.$leave({ id: $routeParams.id }, function(){
            $rootScope.attendingLocationId = null;
            $location.path("/feeds");
          });
        }
      }, "¿Estás seguro?");
    };

    $scope.showInfo = function(){
      $location.path("/locations/" + $routeParams.id);
    };

		$scope.refresh = function() {
			Location.staleAttending($routeParams.id);
			$route.reload();
		};
  });
