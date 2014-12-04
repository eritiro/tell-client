'use strict';

angular.module('tell.controllers')
  .controller('LocationsShowController', function($scope, $routeParams, Location, $location, $rootScope, $window, historyService, backButtonService, imageLoader, dialog) {

    var location = null;
    Location.get({ id: $routeParams.id }, function(loc) {
      location = loc;
      $scope.location = location;
      imageLoader.preload($scope.location, "banner", "img/banner-default.jpg");
      historyService.log(location);
    });

    function doAttend(){
      location.$attend({ id: $routeParams.id }, function(){
        $rootScope.attendingLocationId = parseInt($scope.location.id, 10);
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
        $scope.location.$leave({ id: $routeParams.id }, function(){
          $rootScope.attendingLocationId = null;
          $location.path("/feeds");
        });
      });
    };

    $scope.attend = function() {
      if($rootScope.attendingLocationId) {
        Location.get({ id: $rootScope.attendingLocationId }, function(oldLocation) {
          dialog.confirm("Ya no vas a ir a " + oldLocation.name, function(result){
            doAttend();
          });
        });
      } else {
        doAttend();
      }
    };

    $scope.back = function(){
      backButtonService.back();
    };
});
