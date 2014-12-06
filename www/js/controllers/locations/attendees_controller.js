'use strict';

angular.module('tell.controllers')
  .controller('LocationsAttendeesController', function($scope, Location, $location, $rootScope, $route, userSession, imageLoader) {

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

    if (userSession.currentUser().location) {
      $scope.location = userSession.currentUser().location;
      imageLoader.preload($scope.location, "banner", "img/banner-default.jpg");
    }

  });
