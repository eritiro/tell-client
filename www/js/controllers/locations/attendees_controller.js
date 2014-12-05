'use strict';

angular.module('tell.controllers')
  .controller('LocationsAttendeesController', function($scope, Location, $location, $rootScope, $route, userSession, imageLoader) {

    if (!userSession.currentUser().location) {
      $location.path("/locations").search("backto", "/feeds");
      return;
    }

    $scope.location = userSession.currentUser().location;
    imageLoader.preload($scope.location, "banner", "img/banner-default.jpg");

    Location.attendees({ id: $scope.location.id }, function(attendees) {
      $scope.attendees = attendees;
    });

    $scope.showInfo = function(){
      $location.path("/locations/" + $scope.location.id);
    };

    $scope.showAttendee = function(id){
      $location.search("backto", "/locations/attendees");
      $location.path("/users/" + id);
    };

    $scope.refresh = function() {
      Location.staleAttending($scope.location.id);
      $route.reload();
    };

    $scope.swipeRight = function(){
      $location.path("/feeds");
    };

    $scope.swipeLeft = function(){
      $location.path("/notifications");
    };
  });
