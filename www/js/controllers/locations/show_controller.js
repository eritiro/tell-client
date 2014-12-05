'use strict';

angular.module('tell.controllers')
  .controller('LocationsShowController', function($scope, $routeParams, Location, $location, $rootScope, $window, historyService, backButtonService, imageLoader, dialog, userSession) {

    var currentLocation = userSession.currentUser().location;

    function load(location){
      $scope.location = location;
      imageLoader.preload($scope.location, "banner", "img/banner-default.jpg");
      historyService.log(location);
    }

    if(currentLocation && currentLocation.id === parseInt($routeParams.id, 10)){
      load(currentLocation);
      $scope.attending = true;
    } else {
      Location.get({ id: $routeParams.id }, function(location) {
        load(location);
        $scope.attending = false;
      });
    }

    function doAttend(){
      $scope.location.$attend({ id: $routeParams.id }, function(){
        userSession.currentUser().location = $scope.location;
        userSession.save();
        $location.url("/locations/attendees");
      }, function() {
        alert("Ha ocurrido un error, intenta luego por favor");
      });
    }

    $scope.showAttendees = function(){
      $location.path("/locations/attendees");
    };

    $scope.leave = function(){
      dialog.confirm("Ya no vas a ir a " + $scope.location.name, function(result){
        Location.leave({ id: $routeParams.id }, function(){
          userSession.currentUser().location = null;
          userSession.save();
          $location.path("/feeds");
        });
      });
    };

    $scope.attend = function() {
      if(currentLocation) {
        dialog.confirm("Ya no vas a ir a " + currentLocation.name, function(result){
          doAttend();
        });
      } else {
        doAttend();
      }
    };

    $scope.back = function(){
      backButtonService.back();
    };
});
