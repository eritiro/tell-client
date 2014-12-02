'use strict';

angular.module('tell.controllers')
  .controller('LocationsShowController', function($scope, $routeParams, Location, $location, $rootScope, $window, historyService) {

    var location = null;
    Location.get({ id: $routeParams.id }, function(loc) {
      location = loc;
      $scope.location = location;
      historyService.log(location);
    });

    function doAttend(){
      location.$attend({ id: $routeParams.id }, function(){
        $rootScope.attendingLocationId = parseInt($scope.location.id, 10);
        $location.path("/locations/attendees");
      }, function() {
        alert("Ha ocurrido un error, intenta luego por favor");
      });
    }

    $scope.showAttendees = function(){
      $location.path("/locations/attendees");
    };

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

    $scope.attend = function() {
      if($rootScope.attendingLocationId) {
        Location.get({ id: $rootScope.attendingLocationId }, function(oldLocation) {
          navigator.notification.confirm("Ya no vas a ir a " + oldLocation.name, function(result){
          if(result === 1){
            doAttend();
          }
        });
      }, "¿Estás seguro?");
      } else {
        doAttend();
      }
    };

    $scope.back = function(){
      $window.history.back();
    };
});
